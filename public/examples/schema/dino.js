//!leaf

import {Leaf, ValidationError, parse} from "wordgard/doc"
import {Wordgard} from "wordgard/editor"

const dinoNames = ["Brontosaurus", "Pterodactyl", "Stegosaurus",
                   "Triceratops", "Tyrannosaurus"]

export const Dino = Leaf.Type.define        ("Dino", {
  inline: true,
  validate: type => {
    if (!dinoNames.includes(type))
      throw new ValidationError(`Unknown dinosaur type: ${type}`)
  },
  shape: {
    element: "document-dino",
    attributes: type => ({"data-name": type}),
    readElement: elt =>
      elt.getAttribute("data-name") ?? parse.Reject
  },
  selectable: true,
})

//!styles

export const dinoStyles = Wordgard.styles({
  "document-dino": {
    display: "inline-block",
    height: "40px",
    width: "40px",
    border: "1px solid #0ae",
    borderRadius: "4px",
    backgroundColor: "#ddf6ff",
    verticalAlign: "bottom",
    backgroundSize: "contain",
    ...dinoNames.reduce     ((s, name) => {
      s[`&[data-name=${name}]`] = {
        backgroundImage: `url(dino/${name}.png)`
      }
      return s
    }, {})
  }
})

//!insert

import {GardSelection} from "wordgard/state"
import {Command} from "wordgard/command"

export const insertDino                  = (
  wg          ,
  name        
) => {
  let {from, to} = wg.state.selection.replacementRange
  return {
    changes: {from, to, insert: [Dino.of(name)], fit: true},
    scrollIntoView: true,
    userEvent: "insert.dino",
    selection: (cx, changes) => {
      let found = changes.findInserted(tag => tag.type == Dino)
      return found == null ? null : GardSelection.cursor(found + 1)
    }
  }
}

//!icon

const dinoIcon = {
  icon: "M50 14c-1 0-2 2-3 5a93 93 0 0 1-2 4s-2 0-3-1c-6-3-6-2-6 5v4l-4-1c-5-1-6 0-3 9 0 1 0 1-2 1-3 0-4 2-2 5 1 3 1 3 0 4-2 2-3 2-5-1-3-4-3-4-4 3-1 5-1 5-4 1s-5-3-5 3c0 2 0 3-3 3-4 1-2 3 3 5 3 1 3 1 3 4 0 4 1 5 5 1q3-3 6-3h3v12l3 1h7c2 0 5-1 7-1 4 0 7-2 7-6 0-2 0-2 1-2s1 1 1 6 0 6 1 6 4 1 6 0c2 0 6-1 9-1 6-1 7-1 7-6 1-4 2-5 10-5 5 0 6 0 7-2 1-1 2-2 3-2 2-1 2-1 2-3-1-5-2-7-9-10-9-5-10-6-7-10 3-5 3-7-2-7h-3l1-3c2-8 1-9-6-7l-3 1v-4c0-6-1-7-6-2l-3 3-3-4c-2-3-3-4-4-5m27 41c3 0 5 4 3 6s-5 2-6 0c-2-2-1-5 2-6zm0 2a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2h-2 2a2 2 0 0 0-2-2"
}

//!menu

import {Menu} from "wordgard/command"

export const dinoMenu = Menu.Submenu.define({
  label: dinoIcon,
  description: "Insert Dino",
  parent: Menu.Group.insert,
  rank: 90,
  content: dinoNames.map(name => Menu.Button.define({
    label: name,
    run: Command.bind(insertDino, name),
  }))
})

//!bundle

import {GardState} from "wordgard/state"

export function dino()                      {
  return [
    GardState.schemaElement.of(Dino),
    dinoMenu,
    dinoStyles
  ]
}

//!editor

import {menuBar} from "wordgard/editor"
import {basicSchema} from "wordgard/schema"
import {history} from "wordgard/history"

const wg = Wordgard.create({
  doc: `
<p>This is your dinosaur-enabled editor. The menu allows you to insert dinosaurs.</p>
<p>This paragraph <document-dino data-name="Stegosaurus"></document-dino>, for example, <document-dino data-name="Triceratops"></document-dino> is full <document-dino data-name="Tyrannosaurus"></document-dino> of dinosaurs.</p>
<p>Dinosaur nodes can be selected, copied, pasted, dragged, and so on.</p>`,
  config: [
    basicSchema(),
    dino(),
    menuBar(),
    history(),
  ],
  parent: document.querySelector("#dino-editor") 
})
