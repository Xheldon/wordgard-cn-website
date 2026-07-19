//!plot

import {Plot} from "wordgard/doc"

const Footnote = Plot.define("Footnote", {
  inline: true,
  inlineContent: true,
  shape: {element: "footnote"},
  selectable: true
})

//!shape

import {Wordgard, Decoration} from "wordgard/editor"
import {Elt} from "wordgard/doc"

const footnoteShape =
  Decoration.Tag.shape(Footnote, Elt.mk("wg-footnote"))

const footnoteStyle = Wordgard.styles({
  "wg-content": {
    counterReset: "wg-footnote"
  },
  "wg-footnote": {
    cursor: "pointer",
    display: "inline-block",
    verticalAlign: "super",
    fontSize: "75%",
    borderRadius: "1px",
    counterIncrement: "wg-footnote"
  },
  "wg-footnote:after": {
    content: "counter(wg-footnote)"
  },
  "wg-footnote-tooltip": {
    maxWidth: "20em"
  }
})

//!inFootnote

import {GardState, GardSelection} from "wordgard/state"

function inFootnote(state           ) {
  let {from} = state.sel
  if (state.selection instanceof GardSelection.Node &&
      state.selection.node.type == Footnote.type)
    return from.advance(1).parent 
  return from.matchingParent(p => p.type == Footnote.type)
}

//!tooltip

import {Tooltip} from "wordgard/editor"

const footnoteTooltip = Tooltip.show.compute(state => {
  let footnote = inFootnote(state)
  return footnote ? {
    pos: footnote.before,
    create: FootnoteTooltip.create,
    above: false
  } : null
})

//!propagate

import {Transaction} from "wordgard/state"

const footnoteSync = Transaction.Annotation.define         ()

function propagateTransactions(
  outer          ,
  trs                        
) {
  let footnote = inFootnote(outer.state)
  if (footnote) for (let tr of trs) {
    if (tr.annotation(footnoteSync) ||
        !(tr.docChanged || tr.selection))
      return
    let selection = tr.selection &&
      GardSelection.range(footnote.start + tr.selection.anchor,
                          footnote.start + tr.selection.head,
                          tr.selection.headSide)
    let lenAfter = outer.state.doc.length - footnote.end
    let changes = tr.changes.pad(footnote.start, lenAfter)
    outer.dispatch({
      selection,
      changes,
      annotations: footnoteSync.of(true)
    })
  }
}

//!FootnoteTooltip

import {Pos} from "wordgard/doc"
import {Command, undo, redo} from "wordgard/command"
import {KeyBinding} from "wordgard/editor"
import {inlineDoc, inlineMarks, image, lineBreak} from "wordgard/schema"

class FootnoteTooltip                         {
  dom             
  inner          
  start        

  constructor(wg          , footnote          ) {
    this.start = footnote.start
    this.dom = document.createElement("wg-footnote-tooltip")
    this.inner = this.initEditor(wg, footnote)
  }

  initEditor(wg          , footnote          ) {
    let config = GardState.Configuration.create([
      inlineDoc(), inlineMarks(), image(), lineBreak(),
      Wordgard.transactionListener.of(trs => {
        propagateTransactions(wg, trs)
      }),
      GardState.prec.high([
        KeyBinding.of({key: "Escape", run: () => exitFootnote(wg)}),
        KeyBinding.of({key: "Enter", run: () => exitFootnote(wg)}),
      ]),
      Command.handler(undo, () => Command.dispatch(wg, undo)),
      Command.handler(redo, () => Command.dispatch(wg, redo)),
    ])
    return Wordgard.create({
      doc: config.schema .doc(footnote.node.content),
      config,
      parent: this.dom,
    })
  }

  static create(wg          ) {
    return new FootnoteTooltip(wg, inFootnote(wg.state) )
  }

//!update

  update(update                 ) {
    let footnote = inFootnote(update.startState) 
    let start = footnote.start
    for (let tr of update.transactions) {
      start = tr.changes.mapPos(this.start, -1)
      if (tr.annotation(footnoteSync) || tr.changes.empty) continue
      let localChange =
        tr.changes.clip(start, start + this.inner.state.doc.length)
      if (!localChange) break
      if (!localChange.empty) {
        this.inner.dispatch({
          changes: localChange,
          annotations: footnoteSync.of(true)
        })
      }
    }

    let newFootnote = inFootnote(update.state) 
    if (!newFootnote.node.contentEq(this.inner.state.doc)) {
      this.inner.dom.remove()
      this.inner = this.initEditor(update.editor, newFootnote)
    }
  }
}

//!enter

function enterFootnote(wg          ) {
  if (!inFootnote(wg.state)) return false
  let tooltip = Tooltip.get(wg, FootnoteTooltip.create)
  if (!tooltip) return false
  wg.dispatch({selection: {anchor: tooltip.start}})
  tooltip.inner.focus()
  return true
}

function exitFootnote(wg          ) {
  let footnote = inFootnote(wg.state)
  if (!footnote) return false
  let selection =
    GardSelection.node(footnote.before, footnote.node)
  if (!wg.state.selection.eq(selection))
    wg.dispatch({selection})
  wg.focus()
  return true
}

//!menu

import {Menu} from "wordgard/command"

const insertFootnote = Menu.Button.define({
  label: "¹²",
  description: "Insert footnote",
  run: wg => {
    let {from, to} = wg.state.selection.replacementRange
    let footnote = Footnote.create([])
    wg.dispatch({
      changes: {from, to, insert: [footnote], fit: true},
      selection: (cx, changes) => {
        let found = changes.findInserted(t => t == Footnote)
        if (found == null) return null
        return GardSelection.node(found, footnote)
      },
      userEvent: "insert.footnote",
      scrollIntoView: true
    })
    wg.flush()
    enterFootnote(wg)
    return true
  },
  enable: s => !s.readOnly,
  parent: Menu.Group.insert,
  rank: 85
})

//!bundle

export function footnote() {
  return [
    GardState.schemaElement.of(Footnote),
    footnoteShape,
    footnoteStyle,
    footnoteTooltip,
    GardState.prec.high(
      KeyBinding.of({key: "Enter", run: enterFootnote})),
    insertFootnote
  ]
}

//!demo

import {menuBar} from "wordgard/editor"
import {fullSchema} from "wordgard/schema"
import {history} from "wordgard/history"

Wordgard.create({
  parent: document.querySelector("#editor") ,
  doc: `<h3>Footnote Demo</h3><p>This text<footnote>First footnote</footnote> has some footnotes<footnote>Second footnote!</footnote> in it.</p>`,
  config: [
    fullSchema(),
    history(),
    menuBar(),
    footnote()
  ]
})
