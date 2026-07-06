//!map

import {ChangeSet} from "wordgard/doc"

class BlameMap {
  end                   
  color                   

  constructor(end                   , color                   ) {
    this.end = end
    this.color = color
  }

  update(changes           , blame        ) {
    let end           = [], color           = []
    function add(to        , col        ) {
      // Merge adjacent sections with the same color
      if (color.length && color[color.length - 1] == col) {
        end[end.length - 1] = to
      } else {
        end.push(to)
        color.push(col)
      }
    }
    let i = 0
    changes.iterGaps((fromA, toA, fromB, toB) => {
      // Unchanged range: copy sections
      let off = fromB - fromA, pos = fromB
      for (; i < this.end.length; i++) {
        let next = this.end[i] + off, end = Math.min(toB, next)
        if (end > pos) {
          add(end, this.color[i])
          pos = end
        }
        if (next >= toB) break
      }
    }, (fromA, toA, fromB, toB) => {
      // Replaced range: assign current color
      if (toB > fromB) add(toB, blame)
    })
    return new BlameMap(end, color)
  }
}

//!deco

import {RangeSet, Decoration} from "wordgard/editor"

function blameDeco(map          ) {
  return RangeSet.create                  (add => {
    for (let pos = 0, i = 0; i < map.end.length; i++) {
      let end = map.end[i], col = map.color[i]
      if (col) add(pos, end, colorDeco(col))
      pos = end
    }
  })
}

const decoCache = new Map                          ()

function colorDeco(color        ) {
  let found = decoCache.get(color)
  if (!found) {
    found = Decoration.Range.attribute(
      "style", `background-color: ${color}`)
    decoCache.set(color, found)
  }
  return found
}

//!state

import {GardState, Transaction} from "wordgard/state"

const setColor = Transaction.Effect.define        ()

class BlameState {
  blame          
  deco                            
  activeColor        

  constructor(blame          , active        ) {
    this.blame = blame
    this.activeColor = active
    this.deco = blameDeco(blame)
  }

  update(tr             ) {
    let active = this.activeColor
    for (let e of tr.effects)
      if (e.is(setColor)) active = e.value
    if (!tr.docChanged && active == this.activeColor) return this
    let blame = this.blame.update(tr.changes, active)
    return new BlameState(blame, active)
  }
}

const blameField = GardState.Field.define            ({
  create(state) {
    throw new Error("Field should always get an init value")
  },
  update(value, tr) {
    return value.update(tr)
  },
  toJSON(value) {
    return {
      end: value.blame.end,
      color: value.blame.color,
      active: value.activeColor
    }
  },
  fromJSON(json) {
    let blame = new BlameMap(json.end, json.color)
    return new BlameState(blame, json.active)
  },
  provide: f => Decoration.Range.source.of(s => s.field(f).deco)
})

//!bundle

function blameTracking(
  config                      
)                      {
  return blameField.init(state => new BlameState(
    new BlameMap([state.doc.length], [""]),
    config.startColor))
}

//!editor

import {Wordgard, menuBar} from "wordgard/editor"
import {fullSchema} from "wordgard/schema"
import {history} from "wordgard/history"

let colSel = document.querySelector("#colors")                     

const wg = Wordgard.create({
  parent: document.querySelector("#editor") ,
  doc: `<p>Edit me with different colors!</p>`,
  config: [
    fullSchema(),
    history(),
    menuBar(),
    blameTracking({startColor: colSel.value})
  ]
})

colSel.addEventListener("change", () => {
  wg.dispatch({effects: setColor.of(colSel.value)})
})
