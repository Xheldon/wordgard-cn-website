let space = document.querySelector("#toc ul").appendChild(document.createElement("li"))
space.id = "searchbox"
let box = space.appendChild(document.createElement("input"))
box.setAttribute("aria-label", "search")
box.placeholder = "search"
let runTimeout = -1
box.oninput = () => {
  clearTimeout(runTimeout)
  runTimeout = setTimeout(() => runSearch(box.value.trim()), 200)
}
let results = space.appendChild(document.createElement("ul"))
results.className = "results"
results.setAttribute("aria-live", "polite")

function runSearch(query) {
  results.textContent = ""
  box.className = query ? "active" : ""
  if (!query) return
  query = query.toLowerCase()

  let result = new ResultSet
  if (/^\w+$/.test(query)) { // Simple single word
    result.match(query, true)
  } else {
    query = query.replace(/'[^']*'|"[^"]*"/g, m => {
      let inner = m.slice(1, m.length - 1)
      if (inner) result.match(inner.replace(/\W+/g, " "), false)
      return ""
    })
    let words = query.match(/\w+/g)
    for (let i = 0; i < words.length; i++) if (words[i]) result.match(words[i], false)
  }

  let matches = result.matches ? result.matches.sort((a, b) => b[1] - a[1]) : []
  for (let i = 0; i < Math.min(matches.length, 10); i++) {
    let item = matches[i][0], elt = results.appendChild(document.createElement("li"))
    let link = elt.appendChild(document.createElement("a"))
    link.href = "#" + encodeURIComponent(item.id)
    link.textContent = item.name
  }
}

class Item {
  constructor(id, name) {
    this.name = name
    this.id = id
    this.text = []
    this.weight = []
  }

  add(text, weight) {
    this.text.push(text.toLowerCase().replace(/\W+/g, " ").trim())
    this.weight.push(weight)
  }

  addFromLink(node) {
    let text = node.textContent
    this.add(text, NAME)
    let words = text.split(/\s+|(?<=[a-z])(?=[A-Z])/).filter(x => x)
    for (let i = 0; i < words.length; i++) this.add(words[i].toLowerCase(), NAME >> 1)
    let context = this.id && this.id.match(/[\w$]+\.]/g)
    if (context) for (let i = 0; i < context.length; i++) this.add(context[i].toLowerCase(), CONTEXT)
  }
}

const NAME = 30, TITLE = 20, CONTEXT = 10, TEXT = 1

function retrieveText() {
  let items = []
  let curItem = null
  function explore(node) {
    if (node.nodeType != 1) return
    if (/^(PRE|H.)$/.test(node.nodeName)) {
      let def = node.id ? node : node.querySelector("a[id]")
      if (!def) return
      items.push(curItem = new Item(def.id, def.textContent))
      curItem.addFromLink(def)
    } else if (/^(P|LI)$/.test(node.nodeName) && curItem) {
      curItem.add(node.textContent, TEXT)
    } else {
      for (let ch = node.firstChild; ch; ch = ch.nextSibling) explore(ch)
    }
  }
  explore(document.querySelector("article"))
  return items
}

let text = null

class ResultSet {
  constructor() {
    this.matches = null
  }

  match(term, single) {
    if (!text) text = retrieveText()
    let re = new RegExp("(^| )" + term + "($| )"), singleRE = single ? new RegExp("(^| )" + term) : null
    let prev = this.matches
    this.matches = []
    let handle = (item, score) => {
      let match = 0
      for (let i = 0; i < item.text.length; i++) {
        if (single && item.weight[i] == NAME && singleRE.test(item.text[i]))
          match += item.weight[i] * (term == item.text[i] ? 2 : 1)
        else if (re.test(item.text[i]))
          match += item.weight[i]
      }
      if (match > 0) this.matches.push([item, score + match])
    }
    if (prev) for (let i = 0; i < prev.length; i++) handle(prev[i][0], prev[i][1])
    else for (let i = 0; i < text.length; i++) handle(text[i], 0)
  }
}

// Crumb trail

let trail = document.querySelector("#trail")
function updateTrail() {
  timeout = -1
  trail.textContent = ""
  if (pageYOffset < 10) return
  let rect = trail.getBoundingClientRect()
  let top = document.elementFromPoint(rect.right - 20, rect.bottom + 20), anchor, ids = [], mod = null
  for (let elt = top; elt; elt = elt.parentElement) {
    if (elt.nodeName == "SECTION" && /\b(enum|class|interface|typealias|modsection|namespace|module)\b/.test(elt.className) &&
        (anchor = elt.querySelector("a[id]"))) {
      if (elt.classList.contains("modsection")) mod = anchor
      else ids.push(anchor)
    }
  }
  if (mod) {
    trail.appendChild(mod.cloneNode(true)).removeAttribute("id")
    if (ids.length) {
      trail.appendChild(document.createTextNode(" » "))
      for (let before = ids[0].parentNode.firstChild; before && before != ids[0]; before = before.nextSibling)
        trail.append(before.cloneNode(true))
      for (let i = ids.length - 1; i >= 0; i--) {
        let clone = trail.appendChild(ids[i].cloneNode(true))
        clone.removeAttribute("id")
        clone.classList.toggle("heading", false)
        if (i) trail.appendChild(document.createTextNode("."))
      }
    }
  }
}
let timeout = setTimeout(updateTrail, 50)
window.addEventListener("scroll", () => {
  if (timeout < 0) timeout = setTimeout(updateTrail, 50)
})
