/// @ts-ignore
import {EditorView, config} from "local-codemirror"

function showNotification(ref             , message        ) {
  let node = document.createElement("div")
  node.className = "notification"
  node.textContent = message
  let coords = ref.getBoundingClientRect()
  node.style.left = coords.left + "px"
  node.style.top = coords.bottom + 1 + "px"
  document.body.appendChild(node)
  setTimeout(() => node.remove(), 750)
}

                                                              
                       
                                                       
                      
                                

function showLog(values            , type        , elt             ) {
  let wrap = document.createElement("div"), first = true
  wrap.className = "log-" + type
  for (let val of values) {
    if (first) first = false
    else wrap.appendChild(document.createTextNode(" "))
    wrap.appendChild(renderLoggable(val, 60, true))
  }
  elt.appendChild(wrap)
}

function span(cls        , ...content                   ) {
  let elt = document.createElement("span")
  elt.className = cls
  for (let c of content) elt.appendChild(typeof c == "string" ? document.createTextNode(c) : c)
  return elt
}

function etcButton(onClick                         ) {
  let etc = document.createElement("button")
  etc.textContent = "…"
  etc.className = "log-etc"
  etc.onclick = onClick
  etc.setAttribute("aria-label", "expand")
  return etc
}

function renderLoggable(value          , space        , top = false)       {
  if (typeof value == "number") return span("tok-number", String(value))
  if (typeof value == "string") return top ? document.createTextNode(value) : span("tok-string", JSON.stringify(value))
  if (typeof value == "boolean") return span("tok-atom", String(value))
  if (value == null) return span("tok-keyword", String(value))
  let {function: fun, array, object, ctor, error} = value       
  if (error) {
    return span("tok-invalid", error, " ", etcButton(e => expandError(e.target               , value)))
  } else if (fun) {
    return span("", span("tok-keyword", "function "), span("tok-variableName2", fun))
  } else if (array) {
    space -= 2
    let children                    = ["["]
    let wrap                         
    for (let elt of array) {
      if (children.length > 1) {
        children.push(", ")
        space -= 2
      }
      let next = space > 0 && renderLoggable(elt, space)
      let nextSize = next ? next.textContent.length : 0
      if (space - nextSize <= 0) {
        children.push(etcButton(() => expandObj(wrap , array)))
        break
      }
      space -= nextSize
      children.push(next)
    }
    children.push("]")
    return wrap = span("log-array", ...children)
  } else {
    space -= 2
    let children                    = []
    let wrap                         
    if (ctor && ctor != "Object") {
      children.push(span("tok-typeName", ctor + " "))
      space -= ctor.length + 1
    }
    children.push("{")
    for (let prop of Object.keys(object)) {
      if (children[children.length - 1] !== "{") {
        space -= 2
        children.push(", ")
      }
      let next = null
      if (space > 0) {
        try { next = renderLoggable(object[prop], space) }
        catch (_) {}
      }
      let nextSize = next ? prop.length + 2 + next.textContent.length : 0
      if (!next || space - nextSize <= 0) {
        children.push(etcButton(() => expandObj(wrap , object)))
        break
      }
      space -= nextSize
      children.push(span("tok-property", prop + ": "), next)
    }
    children.push("}")
    return wrap = span("log-object", ...children)
  }
}

function expandObj(node             , val     ) {
  let content = document.createElement("div")
  content.className = "log-prop-table"
  function addProp(name        ) {
    let rendered
    try { rendered = renderLoggable(val[name], 40) }
    catch (_) { return }
    content.appendChild(span("tok-property", name + ": "))
    content.appendChild(rendered)
  }
  if (Array.isArray(val)) {
    for (let i = 0; i < val.length; i++) addProp(String(i))
    node.parentNode.replaceChild(span("log-array", "[", content, "]"), node)
  } else {
    for (let prop of Object.keys(val)) addProp(prop)
    let children                    = ["{", content, "}"]
    if ((node.firstChild               ).className == "tok-typeName") children.unshift(node.firstChild )
    node.parentNode.replaceChild(span("log-object", ...children), node)
  }
}

function parseStack(stack        ) {
  return stack.split("\n").map(line => /^\s*([\w$*.]*)/.exec(line)[1] || "<anonymous>")
}

function expandError(target             , val     ) {
  let frames = document.createElement("div")
  frames.className = "log-frames"
  for (let fn of parseStack(val.stack))
    frames.appendChild(document.createElement("div")).textContent = fn
  target.parentNode .replaceChild(frames, target)
}

let tabNames = ["editor", "output", "log"]
let tabButtons = tabNames.map(n => document.querySelector(`#tab_${n}`))                 
let tabs = tabNames.map(n => document.querySelector(`#${n}`))                 

function getMode() {
  return innerWidth >= 1200 ? "wide" : "narrow"
}

let mode = getMode(), tab        
function toggleTab(i        ) {
  tab = i
  if (mode == "wide") {
    tabs[0].style.display = "block"
    tabs[1].style.display = i != 2 ? "block" : ""
    tabs[2].style.display = i == 2 ? "block" : ""
    tabButtons[0].classList.remove("active")
    tabButtons[1].classList.toggle("active", i != 2)
    tabButtons[2].classList.toggle("active", i == 2)
  } else {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].style.display = j == i ? "block" : ""
      tabButtons[j].classList.toggle("active", j == i)
    }
  }
}
toggleTab(0)

window.addEventListener("resize", () => {
  if (getMode() != mode) {
    mode = getMode()
    toggleTab(tab)
  }
})

window.addEventListener("keydown", e => {
  if ((e.keyCode >= 49 && e.keyCode <= 51) && (e.ctrlKey || e.metaKey) && e.shiftKey && !e.altKey) {
    toggleTab(e.keyCode - 49)
    e.preventDefault()
  } else if (e.keyCode == 13 && (e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey) {
    run()
    e.preventDefault()
  }
})

for (let i = 0; i < tabs.length; i++)
  tabButtons[i].addEventListener("click", () => toggleTab(i))

;(document.querySelector("#run")               ).onclick = () => run()
;(document.querySelector("#share")               ).onclick = e => {
  navigator.clipboard.writeText(document.location.toString().replace(/[#?].*/, "") + "#c=" +
    encParam(view.state.doc.toString()))
  showNotification(e.target               , "URL copied!")
}

let urlCode = /[?&]code=([^&]+)/.exec(document.location.search)
let urlBCode = /[?&]c=([^&]+)/.exec(document.location.search) || /^#c=([^&]+)/.exec(document.location.hash)
let view

function encParam(code        ) {
  return btoa(code.replace(/[\xff-\uffff]/g, ch => `\xff${String.fromCharCode(ch.charCodeAt(0) & 0xff, ch.charCodeAt(0) >> 8)}`))
}
function decParam(param        ) {
  return atob(param).replace(/\xff[^][^]/g, m => String.fromCharCode(m.charCodeAt(1) + (m.charCodeAt(2) << 8)))
}

function loadCode(code        ) {
  if (view) view.destroy()
  view = new EditorView({
    doc: code,
    extensions: config,
    parent: tabs[0]
  })
}
loadCode(urlCode ? decodeURIComponent(urlCode[1])
  : urlBCode ? decParam(urlBCode[1])
  : getDefaultCode())

function run() {
  if (mode == "narrow" && tab == 0) toggleTab(1)
  tabs[1].textContent = tabs[2].textContent = ""
  let frame = document.createElement("iframe")
  frame.setAttribute("sandbox", "allow-scripts allow-popups allow-modals allow-forms")
  frame.src = "sandbox.html"
  let code = view.state.doc.toString()
  let channel = new MessageChannel
  channel.port2.onmessage = event => {
    if (event.data.log) showLog(event.data.elements, event.data.log, tabs[2])
  }
  frame.onload = () => {
    frame.contentWindow.postMessage({type: "load", code}, "*", [channel.port1])
  }
  tabs[1].appendChild(frame)
  return true
}
run()

function getDefaultCode() {
  return `import {Wordgard, menuBar} from "wordgard/editor"
import {fullSchema} from "wordgard/schema"
import {history} from "wordgard/history"

window.wg = Wordgard.create({
  parent: document.body,
  doc: \`<p>Demo content</p>\`,
  config: [fullSchema(), history(), menuBar()]
})
`
}
