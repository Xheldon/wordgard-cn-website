//!enter

import {Plot} from "wordgard/doc"
import {ListItem} from "wordgard/types"
import {Command, enter} from "wordgard/command"

export const splitOnEnter = Command.handler(enter, wg => {
  let {sel} = wg.state
  if (!sel.selection.isCursor || sel.head.depth > 3)
    return false
  let block = sel.head.textblockParent
  if (!block || block.node.contentLength || block.index == 0)
    return false

  return {
    changes: {from: block.before, insert: [Plot.End, ListItem]}
  }
})

//!editor

import {bulletList, basicSchema} from "wordgard/schema"
import {Doc, BulletList} from "wordgard/types"
import {Schema} from "wordgard/doc"
import {Wordgard, menuBar} from "wordgard/editor"
import {GardState} from "wordgard/state"

const wg = Wordgard.create({
  parent: document.querySelector("#outliner-editor") ,
  doc: `<ul><li>Get groceries<ul><li>Hummus</li><li>Sweet potato</li></ul></li><li>Work on Wordgard</li></ul>`,
  config: [
    basicSchema(),
    bulletList(),
    GardState.schemaElement.of(
      Schema.Override.plotContent(Doc, BulletList)),
    menuBar(),
    splitOnEnter
  ]
})
