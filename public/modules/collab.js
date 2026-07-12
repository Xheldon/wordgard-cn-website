import { GardState, Transaction, Correction } from 'wordgard/state';
import { ChangeSet } from 'wordgard/doc';

class LocalUpdate {
    changes;
    effects;
    constructor(changes, effects) {
        this.changes = changes;
        this.effects = effects;
    }
}
function addUpdate(to, changes, effects = []) {
    if (changes.empty && !effects.length)
        return to;
    if (!to)
        return new LocalUpdate(changes, effects);
    return new LocalUpdate(to.changes.compose(changes), Transaction.Effect.mapEffects(to.effects, changes).concat(effects));
}
function mapOpenUpdate(update, doc, over, accum) {
    let { a, b } = ChangeSet.transform(doc, over, update.changes);
    return [new LocalUpdate(b, Transaction.Effect.mapEffects(update.effects, a)), accum.compose(a)];
}
class CollabState {
    version;
    syncedDoc;
    nextUpdate;
    openUpdate;
    constructor(
    version, 
    syncedDoc, 
    nextUpdate, 
    openUpdate) {
        this.version = version;
        this.syncedDoc = syncedDoc;
        this.nextUpdate = nextUpdate;
        this.openUpdate = openUpdate;
    }
}
const collabConfig = /*@__PURE__*/GardState.Facet.define({
    combine(configs) {
        let combined = GardState.Facet.combineConfig(configs, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => [],
            corrections: []
        }, {
            generatedID: a => a
        });
        if (combined.clientID == null)
            combined.clientID = (configs.length && configs[0].generatedID) || "";
        return combined;
    }
});
const collabReceive = /*@__PURE__*/Transaction.Effect.define({
    map(state, changes) {
        return changes.empty ? state
            : new CollabState(state.version, state.syncedDoc, state.nextUpdate, addUpdate(state.openUpdate, changes));
    }
});
const collabField = /*@__PURE__*/GardState.Field.define({
    create(state) {
        return new CollabState(state.facet(collabConfig).startVersion, state.doc, null, null);
    },
    update(collab, tr) {
        for (let e of tr.effects)
            if (e.is(collabReceive))
                return e.value;
        let { sharedEffects } = tr.startState.facet(collabConfig);
        let effects = sharedEffects(tr);
        if (effects.length || !tr.changes.empty)
            return new CollabState(collab.version, collab.syncedDoc, collab.nextUpdate, addUpdate(collab.openUpdate, tr.changes, effects));
        return collab;
    }
});
function collab(config = {}) {
    return [collabField, collabConfig.of({ generatedID: Math.floor(Math.random() * 1e9).toString(36), ...config })];
}
;collab = /*@__PURE__*/(function (collab_1) {
    function receive(state, updates) {
        let { version, syncedDoc, nextUpdate, openUpdate } = state.field(collabField);
        let { clientID, corrections } = state.facet(collabConfig);
        let changes = ChangeSet.empty(state.doc.length);
        let effects = [];
        let haveRemote = false;
        for (let update of updates) {
            if (update.version != version)
                throw new Error("Version mismatch in in received collab update");
            if (update.clientID == clientID) {
                if (!nextUpdate)
                    throw new Error("Received unknown update with our client ID");
                syncedDoc = (openUpdate || haveRemote) ? nextUpdate.changes.apply(syncedDoc) : state.doc;
                mismatch: if (!nextUpdate.changes.eq(update.changes)) {
                    if (haveRemote && nextUpdate && corrections.length) {
                        let correct = Correction.check(nextUpdate.changes, syncedDoc, corrections);
                        if (correct && nextUpdate.changes.compose(correct).eq(update.changes)) {
                            if (openUpdate)
                                [openUpdate, changes] = mapOpenUpdate(openUpdate, syncedDoc, correct, changes);
                            else
                                changes = changes.compose(correct);
                            syncedDoc = correct.apply(syncedDoc);
                            break mismatch;
                        }
                    }
                    throw new Error("Received update with our client ID doesn't match our own local update");
                }
                nextUpdate = null;
            }
            else {
                let newChanges = update.changes, newEffects = update.effects || [];
                let baseDoc = syncedDoc;
                if (nextUpdate) {
                    let { a, b } = ChangeSet.transform(baseDoc, newChanges, nextUpdate.changes);
                    if (openUpdate)
                        baseDoc = nextUpdate.changes.apply(baseDoc);
                    nextUpdate = new LocalUpdate(b, Transaction.Effect.mapEffects(nextUpdate.effects, a));
                    newChanges = a;
                    newEffects = Transaction.Effect.mapEffects(newEffects, b);
                }
                if (openUpdate) {
                    let { a, b } = ChangeSet.transform(baseDoc, newChanges, openUpdate.changes);
                    openUpdate = new LocalUpdate(b, Transaction.Effect.mapEffects(openUpdate.effects, a));
                    newChanges = a;
                    newEffects = Transaction.Effect.mapEffects(newEffects, b);
                }
                changes = changes.compose(newChanges);
                effects = Transaction.Effect.mapEffects(effects, newChanges).concat(newEffects);
                syncedDoc = update.changes.apply(syncedDoc);
                haveRemote = true;
            }
            version++;
        }
        if (haveRemote && corrections.length) {
            let base = syncedDoc;
            if (nextUpdate) {
                base = nextUpdate.changes.apply(base);
                let correct = Correction.check(nextUpdate.changes, base, corrections);
                if (correct) {
                    nextUpdate = addUpdate(nextUpdate, correct);
                    if (openUpdate) {
                        [openUpdate, changes] = mapOpenUpdate(openUpdate, base, correct, changes);
                        base = correct.apply(base);
                    }
                    else {
                        changes = changes.compose(correct);
                    }
                }
            }
            if (openUpdate) {
                base = openUpdate.changes.apply(base);
                let correct = Correction.check(openUpdate.changes, base, corrections);
                if (correct) {
                    openUpdate = addUpdate(openUpdate, correct);
                    changes = changes.compose(correct);
                }
            }
        }
        return state.update({
            changes,
            effects: effects.concat(collabReceive.of(new CollabState(version, syncedDoc, nextUpdate, openUpdate))),
            annotations: [Transaction.addToHistory.of(false), Transaction.remote.of(true)],
        });
    }
    collab_1.receive = receive;
    function sendableUpdate(state) {
        let collab = state.field(collabField);
        if (!collab.nextUpdate) {
            if (!collab.openUpdate)
                return null;
            collab.nextUpdate = collab.openUpdate;
            collab.openUpdate = null;
        }
        return {
            version: collab.version,
            clientID: getClientID(state),
            changes: collab.nextUpdate.changes,
            effects: collab.nextUpdate.effects
        };
    }
    collab_1.sendableUpdate = sendableUpdate;
    function hasUnsentUpdate(state) {
        let collab = state.field(collabField);
        return !!(collab.nextUpdate || collab.openUpdate);
    }
    collab_1.hasUnsentUpdate = hasUnsentUpdate;
    function getSyncedVersion(state) {
        return state.field(collabField).version;
    }
    collab_1.getSyncedVersion = getSyncedVersion;
    function getClientID(state) {
        return state.facet(collabConfig).clientID;
    }
    collab_1.getClientID = getClientID;
    function transformUpdate(update, over, corrections) {
        if (!over.length)
            return update;
        let { clientID, version, changes, effects } = update;
        for (let other of over) {
            if (other.clientID == clientID)
                return null;
            if (effects && effects.length)
                effects = Transaction.Effect.mapEffects(effects, other.changes.transform(other.doc, changes, true));
            changes = changes.transform(other.doc, other.changes);
            version++;
        }
        if (corrections && corrections.length) {
            let corrected = Correction.check(changes, changes.apply(over[over.length - 1].doc), corrections);
            if (corrected) {
                changes = changes.compose(corrected);
                if (effects)
                    effects = Transaction.Effect.mapEffects(effects, corrected);
            }
        }
        return { clientID, version, changes, effects };
    }
    collab_1.transformUpdate = transformUpdate;
;return collab})(collab);

export { collab };
