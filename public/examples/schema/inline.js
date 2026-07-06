//!inlineEditor

import {Wordgard} from "wordgard/editor"

const inlineEditor = Wordgard.theme({
  "&": {
    display: "inline-flex",
    borderRadius: "4px",
    width: "10em"
  },
  "wg-scroller": {
    overflowX: "auto"
  },
  "wg-content": {
    whiteSpace: "pre",
    padding: "4px 6px"
  }
})

//!create

import {inlineSchema} from "wordgard/schema"
import {placeholder} from "wordgard/editor"

Wordgard.create({
  parent: document.querySelector("#title") ,
  doc: `The <strong>long</strong> strange trip`,
  config: [inlineSchema(), inlineEditor]
})

Wordgard.create({
  parent: document.querySelector("#name") ,
  config: [inlineSchema(), inlineEditor, placeholder("Your name")]
})

document.querySelector("#submit") .addEventListener("click", e => {
  let form = (e.target               ).closest("div") 
  form.style.boxShadow = "0 0 15px 2px #2ff"
  setTimeout(() => form.style.boxShadow = "", 400)
})
