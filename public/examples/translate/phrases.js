//!dutchPhrases

import {phrases} from "wordgard/phrases"

export const dutchPhrases = phrases.translate({
  dialog_close: "sluiten",
  group_block: "Blokniveau",
  group_inline: "Inline operaties",
  group_history: "Geschiedenis",
  key_bindings: "Sneltoetsen",
  show_keys: "Sneltoetsen laten zien",
  overflow_more: "Meer",
  block_style: "Blok stijl",
  toggle_strong: "Sterke nadruk wisselen",
  toggle_em: "Nadruk wisselen",
  toggle_code: "Code wisselen",
  toggle_underline: "Understrepen wisselen",
  toggle_strikethrough: "Doorstrepen wisselen",
  toggle_super: "Superscript wisselen",
  toggle_sub: "Subscript wisselen",
  link_target: "Link doel",
  create_link: "Link maken",
  insert_break: "Regeleinde invoegen",
  text_color: "Tekstkleur",
  background_color: "Achtergrondkleur",
  undo: "Ongedaan maken",
  redo: "Herdoen",
  paragraph: "Paragraaf",
  code_block: "Code blok",
  code_block_language: "Code blok taal kiezen",
  heading_1: "Kop 1",
  heading_2: "Kop 2",
  heading_3: "Kop 3",
  heading_4: "Kop 4",
  heading_5: "Kop 5",
  heading_6: "Kop 6",
  toggle_bullet_list: "Lijst aan/uitschakelen",
  toggle_ordered_list: "Genummerde lijst aan/uitschakelen",
  toggle_quote: "Citaat aan/uitschakelen",
  alignment: "Uitlijning",
  align_start: "Aan blokstart uitlijnen",
  align_end: "Aan blokeinde uitlijnen",
  align_left: "Links uitlijnen",
  align_right: "Rechts uitlijnen",
  align_center: "Centreren",
  text_dir: "Tekstrichting",
  text_dir_ltr: "Links-naar-rechts tekst",
  text_dir_rtl: "Rechst-naar-links tekst",
  text_dir_auto: "Automatische tekstrichting",
})

//!editor

import {Wordgard, menuBar} from "wordgard/editor"
import {fullSchema} from "wordgard/schema"
import {history} from "wordgard/history"

Wordgard.create({
  parent: document.querySelector("#editor") ,
  doc: `<p>Welkom in de Nederlandse editie van Wordgard!</p>`,
  config: [
    dutchPhrases,
    fullSchema(),
    history(),
    menuBar(),
  ]
})
