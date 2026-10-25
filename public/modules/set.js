import { ChangeSet } from 'wordgard/doc';

class Set {
}

function findAbove(array, start, n) {
    let from = start, to = array.length;
    for (;;) {
        if (from == to)
            return from;
        let mid = (from + to) >> 1;
        if (array[mid] > n)
            to = mid;
        else
            from = mid + 1;
    }
}
function addReplacements(changes, replace) {
    let add = [], at = 0, len = changes.newLength;
    for (let repl of replace) {
        if (repl.from < at)
            throw new Error("Replacing ranges must be ordered and non-overlapping");
        if (repl.to > len)
            throw new Error("Replacing range out of bounds");
        if (repl.from > at)
            add.push(repl.from - at, -1);
        add.push(repl.to - repl.from, repl.to - repl.from);
        at = repl.to;
    }
    if (len > at)
        add.push(len - at, -1);
    return ChangeSet.composeSections(changes.sections, add);
}

function heapBubble(heap, index, cmp) {
    for (let cur = heap[index];;) {
        let childIndex = (index << 1) + 1;
        if (childIndex >= heap.length)
            break;
        let child = heap[childIndex];
        if (childIndex + 1 < heap.length && cmp(child, heap[childIndex + 1]) >= 0) {
            child = heap[childIndex + 1];
            childIndex++;
        }
        if (cmp(cur, child) < 0)
            break;
        heap[childIndex] = cur;
        heap[index] = child;
        index = childIndex;
    }
}
function heapSink(heap, index, cmp) {
    let elt = heap[index];
    while (index > 0) {
        let parent = (index - 1) >> 1;
        if (cmp(heap[parent], elt) < 0)
            break;
        heap[index] = heap[parent];
        heap[parent] = elt;
        index = parent;
    }
}
function heapPop(heap, cmp) {
    let last = heap.pop();
    if (heap.length) {
        heap[0] = last;
        heapBubble(heap, 0, cmp);
    }
}
class HeapCursor {
    cmp;
    cursors;
    heap = [];
    constructor(cmp, cursors) {
        this.cmp = cmp;
        this.cursors = cursors;
        for (let cur of cursors)
            if (cur.value) {
                this.heap.push(cur);
                heapSink(this.heap, this.heap.length - 1, cmp);
            }
        this.fill();
    }
    fill() {
        if (this.heap.length) {
            ({ from: this.from, to: this.to, value: this.value } = this.heap[0]);
        }
        else {
            this.from = this.to = 1e9;
            this.value = null;
        }
    }
    goto(pos, side) {
        this.heap = [];
        for (let cur of this.cursors) {
            cur.goto(pos, side);
            if (cur.value) {
                this.heap.push(cur);
                heapSink(this.heap, this.heap.length - 1, this.cmp);
            }
        }
        this.fill();
    }
    next() {
        if (this.heap.length) {
            this.heap[0].next();
            if (this.heap[0].value)
                heapBubble(this.heap, 0, this.cmp);
            else
                heapPop(this.heap, this.cmp);
            this.fill();
        }
    }
    get set() { return this.heap.length ? this.heap[0].set : null; }
}

let Chunk$1 = class Chunk {
    start;
    from;
    to;
    value;
    constructor(start, from, to, value) {
        this.start = start;
        this.from = from;
        this.to = to;
        this.value = value;
    }
    get end() {
        return this.start + this.to[this.to.length - 1];
    }
    move(start) {
        return start == this.start ? this : new Chunk(start, this.from, this.to, this.value);
    }
};
let SetBuilder$1 = class SetBuilder {
    chunks = [];
    spilled = null;
    lastTo = -1;
    lastFrom = -1;
    get next() {
        return this.spilled || (this.spilled = new SetBuilder());
    }
    addChunk(chunk) {
        if (chunk.start < this.lastTo) {
            this.next.addChunk(chunk);
        }
        else {
            this.chunks.push(chunk);
            this.lastTo = chunk.end;
        }
    }
    add(source, pre) {
        if (typeof source != "function") {
            let array = source;
            source = add => { for (let [from, to, value] of array)
                add(from, to, value); };
        }
        source((value, from, to = from) => {
            if (pre)
                pre(from, to);
            this.addRange(value, from, to);
        });
    }
    addRange(value, from, to) {
        if (from >= to)
            throw new Error("Ranges cannot be empty");
        (this.lastTo <= from ? this : this.next).addInner(value, from, to);
    }
    addInner(value, from, to) {
        let chunk;
        if (this.chunks.length) {
            chunk = this.chunks[this.chunks.length - 1];
            if (chunk.value.length >= 512)
                chunk = undefined;
        }
        if (!chunk) {
            this.chunks.push(chunk = new Chunk$1(from, [], [], []));
        }
        chunk.from.push(from - chunk.start);
        chunk.to.push(to - chunk.start);
        chunk.value.push(value);
        this.lastFrom = from;
        this.lastTo = to;
    }
    finish(plus = null) {
        let next = this.spilled ? this.spilled.finish(plus) : plus;
        if (!this.chunks.length)
            return next || RangeSet.empty;
        return RangeSet.new(this.chunks, next);
    }
};
class RangeSet extends Set {
    chunks;
    next;
    constructor(
    chunks, 
    next) {
        super();
        this.chunks = chunks;
        this.next = next;
    }
    static new(chunks, next) {
        return new RangeSet(chunks, next);
    }
    static create(source) {
        let build = new SetBuilder$1();
        build.add(source, from => {
            if (from < build.lastFrom)
                throw new Error("Ranges must be added in order");
        });
        return build.finish();
    }
    get length() {
        return Math.max(this.chunks.length ? this.chunks[this.chunks.length - 1].end : 0, this.next ? this.next.length : 0);
    }
    get empty() {
        return this == RangeSet.empty;
    }
    cursor(from = 0) {
        if (!this.next)
            return new LayerCursor(this, this.chunks, from);
        let cursors = [];
        for (let layer = this; layer; layer = layer.next)
            cursors.push(new LayerCursor(this, layer.chunks, from));
        return new HeapCursor(cmpCursor$1, cursors);
    }
    static cursor(sets, from = 0) {
        let cursors = [];
        for (let set of sets)
            if (!set.empty) {
                for (let layer = set; layer; layer = layer.next)
                    cursors.push(new LayerCursor(set, layer.chunks, from));
            }
        return cursors.length == 0 ? RangeSet.empty.cursor() : cursors.length == 1 ? cursors[0] : new HeapCursor(cmpCursor$1, cursors);
    }
    map(map, replace = []) {
        let { sections } = map;
        if (replace.length)
            sections = addReplacements(map, replace);
        else if (map.empty)
            return this;
        return this.mapInner(sections, map, replace);
    }
    mapInner(sections, map, replace) {
        let cursor = new LayerCursor(this, this.chunks, 0);
        let replI = 0, posA = 0, posB = 0;
        let build = new SetBuilder$1();
        for (let i = 0; i < sections.length;) {
            let len = sections[i++], ins = sections[i++];
            if (ins < 0) {
                while (i < sections.length && sections[i + 1] < 0) {
                    len += sections[i];
                    i += 2;
                }
                let upto = i == sections.length ? 1e9 : posA + len, off = posB - posA;
                while (cursor.cur) {
                    let chunk = cursor.cur;
                    if (cursor.i == 0 && chunk.end < upto) {
                        build.addChunk(chunk.move(chunk.start + off));
                        cursor.next(true);
                    }
                    else if (cursor.to < upto) {
                        build.addRange(cursor.value, cursor.from + off, cursor.to + off);
                        cursor.next();
                    }
                    else {
                        break;
                    }
                }
                posB += len;
            }
            else {
                let replStartI = replI, endB = posB + ins;
                copyMappedUpto$1(cursor, posA, map, build, replace, replStartI);
                while (replI < replace.length && replace[replI].from < endB) {
                    let repl = replace[replI++];
                    if (repl.add)
                        build.add(repl.add);
                }
                if (len)
                    cursor.goto(posA + len - 1);
                copyMappedUpto$1(cursor, posA + len, map, build, replace, replStartI);
                posB = endB;
            }
            posA += len;
        }
        return build.finish(this.next && this.next.mapInner(sections, map, replace));
    }
    modify(spec) {
        let { replace, add, filter } = spec;
        let result = this;
        if (replace && replace.length) {
            result = result.map(ChangeSet.empty(Math.max(result.length, replace[replace.length - 1].to)), replace);
        }
        return add || filter ? result.modifyInner(add, filter) : result;
    }
    modifyInner(add, filter) {
        let build = new SetBuilder$1();
        let cursor = new LayerCursor(this, this.chunks, 0);
        let advance = (pos) => {
            for (;;) {
                let { cur } = cursor;
                if (!cur)
                    return;
                if (cursor.i == 0 && cur.end <= pos && !filter) {
                    build.addChunk(cur);
                    cursor.next(true);
                }
                else if (cursor.from > pos) {
                    break;
                }
                else {
                    if (!filter || filter(cursor.value, cursor.from, cursor.to))
                        build.addRange(cursor.value, cursor.from, cursor.to);
                    cursor.next();
                }
            }
        };
        if (add)
            build.add(add, advance);
        advance(1e9);
        return build.finish(this.next && this.next.modifyInner(add, filter));
    }
    compareRange(fromA, b, fromB, len, change) {
        if (this == b)
            return;
        let curA = new LayerCursor(this, this.chunks, fromA), curB = new LayerCursor(b, b.chunks, fromB), off = fromB - fromA;
        let end = fromB + len, startA = -1, endA = -1, startB = -1, endB = -1;
        for (;;) {
            if (startA >= endA)
                [startA, endA] = curA.value ? [Math.max(fromB, curA.from + off), Math.min(end, curA.to + off)] : [1e9, 1e9];
            if (startB >= endB)
                [startB, endB] = curB.value ? [Math.max(fromB, curB.from), Math.min(end, curB.to)] : [1e9, 1e9];
            let start = Math.min(startA, startB), upto;
            if (start >= end)
                break;
            if (startA < startB) {
                change(startA, upto = Math.min(endA, startB));
                startA = upto;
            }
            else if (startB < startA) {
                change(startB, upto = Math.min(endB, startA));
                startB = upto;
            }
            else if (curA.cur.value == curB.cur.value) {
                curA.next(true);
                curB.next(true);
                startA = startB = 1e9;
            }
            else {
                upto = Math.min(endA, endB);
                if (!curA.value.eq(curB.value))
                    change(startA, upto);
                startA = startB = upto;
            }
            if (startA >= endA)
                curA.next();
            if (startB >= endB)
                curB.next();
        }
        if (this.next || b.next)
            (this.next || RangeSet.empty).compareRange(fromA, b.next || RangeSet.empty, fromB, len, change);
    }
    static empty = /*@__PURE__*/(() => new RangeSet([], null))();
}
function copyMappedUpto$1(cursor, upto, map, build, replace, replI) {
    while (cursor.value && cursor.from <= upto) {
        let value = cursor.value;
        let from = map.mapPos(cursor.from, value.inclusiveStart ? -1 : 1);
        let to = map.mapPos(cursor.to, value.inclusiveEnd ? 1 : -1);
        let filtered = from >= to;
        for (let i = replI; !filtered && i < replace.length && replace[i].from < to; i++) {
            if (replace[i].to > from)
                filtered = true;
        }
        if (!filtered)
            build.addRange(value, from, to);
        cursor.next();
    }
}
class LayerCursor {
    set;
    chunks;
    chunkI = 0;
    i = 0;
    from = 0;
    constructor(set, chunks, start) {
        this.set = set;
        this.chunks = chunks;
        this.goto(start);
    }
    goto(pos) {
        if (pos < this.from)
            this.chunkI = this.i = 0;
        else if (pos < this.to)
            return;
        let { chunks } = this;
        while (this.chunkI < chunks.length && chunks[this.chunkI].end <= pos) {
            this.chunkI++;
            this.i = 0;
        }
        if (this.chunkI == chunks.length) {
            this.i = 0;
            this.from = this.to = 1e9;
            this.cur = this.value = null;
        }
        else {
            let chunk = this.cur = chunks[this.chunkI];
            let i = this.i = findAbove(chunk.to, this.i, pos - chunk.start);
            this.from = chunk.from[i] + chunk.start;
            this.to = chunk.to[i] + chunk.start;
            this.value = chunk.value[i];
        }
    }
    next(chunk) {
        let { cur } = this;
        if (!cur)
            return;
        if (!chunk && this.i < cur.value.length - 1) {
            this.i++;
        }
        else {
            this.chunkI++;
            this.i = 0;
            if (this.chunkI == this.chunks.length) {
                this.from = this.to = 1e9;
                this.value = this.cur = null;
                return;
            }
            else {
                cur = this.cur = this.chunks[this.chunkI];
            }
        }
        this.from = cur.from[this.i] + cur.start;
        this.to = cur.to[this.i] + cur.start;
        this.value = cur.value[this.i];
    }
}
let cmpCursor$1 = (a, b) => {
    return (a.from - b.from) || (a.value.inclusiveStart ? (b.value.inclusiveStart ? 0 : 1) : -1) || (a.to - b.to);
};

class Chunk {
    start;
    pos;
    value;
    constructor(start, pos, value) {
        this.start = start;
        this.pos = pos;
        this.value = value;
    }
    get end() {
        return this.start + this.pos[this.pos.length - 1];
    }
    get startSide() {
        return this.value[0].side;
    }
    get endSide() {
        return this.value[this.value.length - 1].side;
    }
    move(start) {
        return start == this.start ? this : new Chunk(start, this.pos, this.value);
    }
}
class SetBuilder {
    chunks = [];
    lastPos = -1;
    lastSide = -1;
    addChunk(chunk) {
        this.chunks.push(chunk);
        this.lastPos = chunk.end;
        this.lastSide = chunk.endSide;
    }
    add(source, pre) {
        if (typeof source != "function") {
            let array = source;
            source = add => { for (let [value, from, to] of array)
                add(value, from, to); };
        }
        source((value, from, to) => {
            if (to != null && from != to)
                throw new Error("Points cannot cover content");
            if (pre)
                pre(value, from);
            this.addPoint(value, from);
        });
    }
    addPoint(value, pos) {
        let chunk;
        if (this.chunks.length) {
            chunk = this.chunks[this.chunks.length - 1];
            if (chunk.value.length >= 512)
                chunk = undefined;
        }
        if (!chunk) {
            this.chunks.push(chunk = new Chunk(pos, [], []));
        }
        chunk.pos.push(pos - chunk.start);
        chunk.value.push(value);
        if ((pos - this.lastPos || value.side || this.lastSide) >= 0) {
            this.lastPos = pos;
            this.lastSide = value.side;
        }
        else {
            for (let i = chunk.value.length - 1, chunkI = this.chunks.length - 1;;) {
                let nextI = i - 1, nextChunk = chunk;
                if (nextI < 0) {
                    if (!chunkI)
                        break;
                    nextChunk = this.chunks[--chunkI];
                    nextI = nextChunk.value.length - 1;
                }
                if ((pos - nextChunk.pos[nextI] || value.side - nextChunk.value[nextI].side) >= 0)
                    break;
                chunk.pos[i] = nextChunk.pos[nextI];
                chunk.value[i] = nextChunk.value[nextI];
                nextChunk.pos[nextI] = pos;
                nextChunk.value[nextI] = value;
                i = nextI;
                chunk = nextChunk;
            }
        }
    }
    finish() {
        return this.chunks.length ? PointSet.new(this.chunks) : PointSet.empty;
    }
}
class PointSet {
    chunks;
    constructor(
    chunks) {
        this.chunks = chunks;
    }
    static new(chunks) { return new PointSet(chunks); }
    static create(source) {
        let build = new SetBuilder();
        build.add(source, (value, from) => {
            if ((from - build.lastPos || value.side - build.lastSide) < 0)
                throw new Error("Points must be added in order");
        });
        return build.finish();
    }
    get length() {
        return this.chunks.length ? this.chunks[this.chunks.length - 1].end : 0;
    }
    get empty() {
        return this == PointSet.empty;
    }
    cursor(from = 0, side = -1e9) {
        return new PointCursor(this, from, side);
    }
    static cursor(sets, from = 0, side = -1e9) {
        let cursors = [];
        for (let set of sets)
            if (!set.empty)
                cursors.push(set.cursor(from, side));
        return cursors.length == 0 ? PointSet.empty.cursor() : cursors.length == 1 ? cursors[0] : new HeapCursor(cmpCursor, cursors);
    }
    at(pos, pred) {
        for (let chunk of this.chunks) {
            if (chunk.start > pos)
                break;
            if (chunk.end < pos)
                continue;
            for (let index = findAbove(chunk.pos, 0, pos - chunk.start - 1); index < chunk.pos.length && chunk.pos[index] + chunk.start == pos; index++) {
                if (!pred || pred(chunk.value[index]))
                    return chunk.value[index];
            }
        }
        return undefined;
    }
    map(map, replace = []) {
        let { sections } = map;
        if (replace.length)
            sections = addReplacements(map, replace);
        else if (map.empty)
            return this;
        return this.mapInner(sections, map, replace);
    }
    mapInner(sections, map, replace) {
        let cursor = new PointCursor(this, 0, -1e9);
        let replI = 0, posA = 0, posB = 0;
        let build = new SetBuilder();
        for (let i = 0; i < sections.length;) {
            let len = sections[i++], ins = sections[i++];
            if (ins < 0) {
                while (i < sections.length && sections[i + 1] < 0) {
                    len += sections[i];
                    i += 2;
                }
                let upto = i == sections.length ? 1e9 : posA + len, off = posB - posA;
                while (cursor.cur) {
                    let chunk = cursor.cur;
                    if (cursor.i == 0 && chunk.end < upto) {
                        build.addChunk(chunk.move(chunk.start + off));
                        cursor.next(true);
                    }
                    else if (cursor.from < upto) {
                        build.addPoint(cursor.value, cursor.from + off);
                        cursor.next();
                    }
                    else {
                        break;
                    }
                }
                posB += len;
            }
            else {
                let replStartI = replI, endB = posB + ins;
                copyMappedUpto(cursor, posA, map, build, replace, replStartI);
                while (replI < replace.length && replace[replI].from < endB) {
                    let repl = replace[replI++];
                    if (repl.add)
                        build.add(repl.add);
                }
                if (len)
                    cursor.goto(posA + len, -1e9);
                copyMappedUpto(cursor, posA + len, map, build, replace, replStartI);
                posB = endB;
            }
            posA += len;
        }
        return build.finish();
    }
    modify(spec) {
        let { replace, add, filter } = spec;
        let result = this;
        if (replace && replace.length) {
            result = result.map(ChangeSet.empty(Math.max(result.length, replace[replace.length - 1].to)), replace);
        }
        return add || filter ? result.modifyInner(add, filter) : result;
    }
    modifyInner(add, filter) {
        let build = new SetBuilder();
        let cursor = new PointCursor(this, 0, -1e9);
        let advance = (_, pos) => {
            for (;;) {
                let { cur } = cursor;
                if (!cur)
                    return;
                if (cursor.i == 0 && cur.end <= pos && !filter) {
                    build.addChunk(cur);
                    cursor.next(true);
                }
                else if (cursor.from >= pos) {
                    break;
                }
                else {
                    if (!filter || filter(cursor.value, cursor.from, cursor.to))
                        build.addPoint(cursor.value, cursor.from);
                    cursor.next();
                }
            }
        };
        if (add)
            build.add(add, advance);
        advance(null, 1e9);
        return build.finish();
    }
    compareRange(fromA, b, fromB, len, change) {
        if (this == b)
            return;
        let curA = new PointCursor(this, fromA, -1e9), curB = new PointCursor(b, fromB, -1e9);
        let off = fromB - fromA, endB = fromB + len;
        for (;;) {
            let nextA = curA.value ? curA.from + off : 1e9, nextB = curB.value ? curB.from : 1e9;
            if (Math.min(nextA, nextB) > endB)
                break;
            let cmp = nextA - nextB || curA.side - curB.side;
            if (cmp == 0 && curA.cur.value == curB.cur.value) {                curA.next(true);
                curB.next(true);
            }
            else if (cmp == 0 && curA.value.eq(curB.value)) {
                curA.next();
                curB.next();
            }
            else if (cmp < 0) {
                change(nextA, curA.value);
                curA.next();
            }
            else {
                change(nextB, curB.value);
                curB.next();
            }
        }
    }
    static empty = /*@__PURE__*/(() => new PointSet([]))();
}
function copyMappedUpto(cursor, upto, map, build, replace, replI) {
    while (cursor.value && cursor.from <= upto) {
        let value = cursor.value;
        let pos = map.mapPos(cursor.from, value.side < 0 ? -1 : 1, value.trackMode);
        if (pos != null) {
            let filtered = false;
            for (let i = replI; !filtered && i < replace.length && replace[i].from <= pos; i++) {
                if (replace[i].to >= pos)
                    filtered = true;
            }
            if (!filtered)
                build.addPoint(value, pos);
        }
        cursor.next();
    }
}
class PointCursor {
    set;
    chunkI = 0;
    i = 0;
    from = -1;
    constructor(set, start, side) {
        this.set = set;
        this.goto(start, side);
    }
    get to() { return this.from; }
    get side() { return this.value ? this.value.side : 1e9; }
    goto(pos, side) {
        let diff = pos - this.from || side - this.side;
        if (diff < 0) {
            this.chunkI = this.i = 0;
        }
        else if (diff == 0 && this.cur) {
            for (;; this.i--) {
                if (!this.i) {
                    this.chunkI = 0;
                    break;
                }
                if ((pos - this.cur.pos[this.i - 1] || side - this.cur.value[this.i - 1].side) < 0)
                    break;
            }
        }
        for (let first = true;;) {
            if (this.chunkI == this.set.chunks.length) {
                this.from = 1e9;
                this.cur = this.value = null;
                break;
            }
            let chunk = this.set.chunks[this.chunkI];
            if (chunk.end < pos || this.i == chunk.value.length) {
                this.chunkI++;
                this.i = 0;
            }
            else if (first) {
                this.i = findAbove(chunk.pos, this.i, pos - chunk.start - 1);
                first = false;
            }
            else if ((pos - (chunk.start + chunk.pos[this.i]) || side - chunk.value[this.i].side) > 0) {
                this.i++;
            }
            else {
                this.cur = chunk;
                this.from = chunk.pos[this.i] + chunk.start;
                this.value = chunk.value[this.i];
                break;
            }
        }
    }
    next(chunk) {
        let { cur } = this;
        if (!cur)
            return;
        if (!chunk && this.i < cur.value.length - 1) {
            this.i++;
        }
        else {
            this.chunkI++;
            this.i = 0;
            if (this.chunkI == this.set.chunks.length) {
                this.value = this.cur = null;
                return;
            }
            else {
                cur = this.cur = this.set.chunks[this.chunkI];
            }
        }
        this.from = cur.pos[this.i] + cur.start;
        this.value = cur.value[this.i];
    }
}
function cmpCursor(a, b) {
    return a.from - b.from || a.value.side - b.value.side;
}

export { PointSet, RangeSet, Set, findAbove };
