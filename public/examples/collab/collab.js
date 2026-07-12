import {collab} from "wordgard/collab"
import {Wordgard, menuBar} from "wordgard/editor"
import {GardState} from "wordgard/state"
import {fullSchema} from "wordgard/schema"
import {history} from "wordgard/history"
import {Paragraph} from "wordgard/types"
import {Node, Plot, Leaf, ChangeSet} from "wordgard/doc"

function pause(time        ) {
  return new Promise      (resolve => setTimeout(resolve, time))
}

function currentLatency() {
  return (+(document.querySelector("#latency")                    ).value) / 2
}

class Pending {
  promise               
                             
  constructor() {
    this.promise = new Promise(resolve => this.resolve = resolve)
  }
}

class Queue    {
  id = Math.floor(Math.random() * 500)
  queue               = []
  pending = new Pending

  push(value            ) {
    if (this.queue.push(value) == 1) {
      this.pending.resolve()
      this.pending = new Pending
    }
  }

  async shift() {
    while (!this.queue.length) await this.pending.promise
    return this.queue.shift() 
  }
}

class DemoChannel {
  a         
  b         
  disconnected                 = null

  constructor() {
    let queueA = new Queue        , queueB = new Queue        
    let mkChannel = (input               , out               )          => ({
      messages: async function*() {
        for (;;) yield input.shift()
      }(),
      send: (message        ) => {
        out.push((async () => {
          if (this.disconnected) await this.disconnected.promise
          await pause(currentLatency())
          return message
        })())
      }
    })
    this.a = mkChannel(queueA, queueB)
    this.b = mkChannel(queueB, queueA)
  }

  setConnected(value         ) {
    if (value && this.disconnected) {
      this.disconnected.resolve()
      this.disconnected = null
    } else if (!value && !this.disconnected) {
      this.disconnected = new Pending
    }
  }
}

//!clientmessage

                    
                                                            

//!servermessage

                    
                 
                                                       
                  
                                                                
                                

//!channel

                   
                             
                                  
 

//!storedupdate

                     
               
                    
                  
                 
 

//!activeclient

                                                  

function send(client              , message               ) {
  client.channel.send(JSON.stringify(message))
}

//!server

class Server {
  doc          
  version         = 0
  updates                 = []

  clients                 = []
  nextClientId = 1

  constructor(doc          ) {
    this.doc = doc
  }

  connect(channel         ) {
    let client               = {
      id: "client_" + this.nextClientId++,
      channel
    }
    this.clients.push(client)
    send(client, {
      type: "state",
      doc: this.doc.toJSON(),
      version: this.version,
      clientID: client.id
    })
    this.listen(client).catch(e => console.error(e))
  }

  async listen(client              ) {
    for await (let json of client.channel.messages) {
      let msg = JSON.parse(json)                 
      if (msg.type != "update")
        throw new Error("Unexpected client message: " + json)
      let changes = ChangeSet.fromJSON(this.doc.schema, msg.changes)
      this.receive(client, changes, msg.version, client.id)
    }
  }

//!serverreceive

  receive(
    client              ,
    changes           ,
    version        ,
    clientID        
  ) {
    if (this.version > version) {
      let mapped = collab.transformUpdate(
        {changes, version, clientID},
        this.updates.slice(version))
      if (!mapped) return
      ;({changes, version, clientID} = mapped)
    }
    let update               = {
      doc: this.doc,
      clientID, changes,
      version: this.version
    }
    this.updates.push(update)
    this.doc = changes.apply(this.doc)
    this.version++
    for (let client of this.clients) this.sendUpdate(client, update)
  }

  sendUpdate(client              , update              ) {
    send(client, {
      type: "update",
      changes: update.changes.toJSON(),
      clientID: update.clientID,
      version: update.version
    })
  }
}

//!startServer

let schema = GardState.Configuration.create(fullSchema()).schema 
let startDoc = schema.doc([Paragraph.create([Leaf.text("These editors synchronize!")])])

const server = new Server(startDoc)

//!client

async function client(channel         , spec               ) {
  let first = await channel.messages.next()
  let msg = JSON.parse(first.value )                 
  if (msg.type == "error") {
    throw new Error(msg.error)
  } else if (msg.type == "state") {
    return Wordgard.create({
      ...spec,
      config: [
        collab({clientID: msg.clientID, startVersion: msg.version}),
        Wordgard.Plugin.define(
          editor => new ClientPlugin(editor, channel)),
        // The rest of the configuration is given in the spec
        (spec.config                                   ) || []
      ],
      doc: msg.doc
    })
  } else {
    throw new Error("Unexpected message: " + msg)
  }
}

//!clientplugin

class ClientPlugin {
  editor          
  channel         

  constructor(editor          , channel         ) {
    this.editor = editor
    this.channel = channel
    this.listen().catch(e => {
      Wordgard.logException(
        this.editor.state, e, "Client listener crashed")
    })
  }

//!clientlisten

  sentCurrent = false

  async listen() {
    for await (let json of this.channel.messages) {
      let msg = JSON.parse(json)                 
      if (msg.type == "update") {
        this.editor.dispatch(collab.receive(this.editor.state, [{
          changes: ChangeSet.fromJSON(
            this.editor.state.schema, msg.changes),
          clientID: msg.clientID,
          version: msg.version
        }]))
        this.sentCurrent = false
        if (collab.hasUnsentUpdate(this.editor.state))
          this.scheduleSend()
      } else if (msg.type == "error") {
        throw new Error(msg.error)
      } else {
        throw new Error("Unexpected server message: " + json)
      }
    }
  }

//!clientupdate

  update(update                 ) {
    if (update.docChanged) this.scheduleSend()
  }

  scheduled = -1

  scheduleSend() {
    if (this.scheduled < 0)
      this.scheduled = setTimeout(() => this.sendUpdate(), 100)
  }

  sendUpdate() {
    this.scheduled = -1
    if (this.sentCurrent) return
    let update = collab.sendableUpdate(this.editor.state)
    if (update) {
      this.channel.send(JSON.stringify({
        type: "update",
        changes: update.changes.toJSON(),
        version: update.version
      }))
      this.sentCurrent = true
    }
  }
}

//!peer

async function addPeer() {
  let editors = document.querySelector("#editors") 
  let wrap = editors.appendChild(document.createElement("div"))
  wrap.className = "editor"
  let cut = wrap.appendChild(document.createElement("div"))
  cut.innerHTML = "<label><input type=checkbox aria-description='Cut'>✂️</label>"
  cut.className = "cut-control"
  cut.querySelector("input") .addEventListener("change", e => {
    let isCut = (e.target                    ).checked
    wrap.classList.toggle("cut", isCut)
    if (connection)
      connection.setConnected(!isCut)
  })

  let connection = new DemoChannel
  server.connect(connection.a)
  return client(connection.b, {
    config: [fullSchema(), menuBar(), history()],
    parent: wrap
  })
}

addPeer()
addPeer()

;(document.querySelector("#addpeer")                     ).onclick = addPeer
