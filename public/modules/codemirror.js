let t=[],e=[]
function i(i){if(i<768)return!1
for(let n=0,s=t.length;;){let r=n+s>>1
if(i<t[r])s=r
else{if(!(i>=e[r]))return!0
n=r+1}if(n==s)return!1}}function n(t){return t>=127462&&t<=127487}(()=>{let i="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,1n,9,16,o,,x,1i,3,,i,,7,a,2,t,3,1k,,,7,2,2,2,3,9,,a,2,q,,2,3,1k,,,5,4,2,2,3,3,,u,2,3,,b,3,1k,,,8,,3,,3,k,2,m,6,,3,1k,,,7,2,2,2,3,7,3,a,2,u,,1n,5,3,3,,4,9,,14,5,1j,,,7,,3,,4,7,2,b,2,t,3,1k,,,7,,3,,4,7,2,b,2,f,,c,4,1j,2,,7,,3,,4,9,,a,2,t,3,1y,,4,6,,,,8,i,2,1p,,,8,c,8,2q,,,a,b,7,21,2,r,,,,,,4,2,1d,k,,2,5,b,,10,9,,2u,b,,6,n,4,4,3,g,4,d,,,3,6,,f,,jj,3,qa,4,s,3,t,2,u,2,1s,w,9,,19,3,,,39,2,y,,3a,c,4,c,63,5,1l,a,,,,,2,o,2,,1c,1a,2,c,k,5,1b,h,12,9,c,3,u,d,1k,e,1c,k,48,3,,l,4,,6,,2,3,5i,1s,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,n,5,4,,2b,2,1e,i,q,i,d,,12,8,p,d,18,4,1b,e,10,,1v,e,c,,8,2,1a,,1f,,,3,2,2,5,2,,,15,5,5,2,6k,8,,2,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,1t,5,8t,2,25,6,1y,b,1d,4,3e,3,1h,f,15,,2,2,a,4,19,b,7,,1p,3,10,e,g,2,18,,c,3,1c,e,8,4,,2,2k,c,6,,2,,4d,c,l,4,1j,2,,7,2,2,2,3,9,,a,2,2,7,3,5,1v,9,,,2,,,4,,5,,,e,2,2a,i,n,,29,k,6j,7,2,9,r,2,2a,h,2y,d,2t,3,2,a,74,f,6t,6,,2,2,4,,,,2,3x,7,2,7,3,,s,a,14,7,,4,8,,9,b,1a,g,5i,8,5j,8,,8,2a,m,,e,3e,6,3,,,2,,7,,,1u,5,,2,,5,9n,4,9,2,,,1c,7,3,5,n,,44l,,6,f,8ug,i,1xc,5,1n,7,t4,,,1j,7,4,29,,b,2,f57,2,3mp,1a,2,n,f2,5,3,6,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,2s,,4g,7,af,,1p,4,e4,4,72,2,6r,,2,,7,2,5,,d6,7,31,7,240,5".split(",").map(t=>t?parseInt(t,36):1)
for(let n=0,s=0;n<i.length;n++)(n%2?e:t).push(s+=i[n])})()
function s(t,e,i=!0,n=!0){return(i?r:o)(t,e,n)}function r(t,e,s){if(e==t.length)return e
e&&l(t.charCodeAt(e))&&h(t.charCodeAt(e-1))&&e--
let r=a(t,e)
for(e+=c(r);e<t.length;){let o=a(t,e)
if(8205==r||8205==o||s&&i(o))e+=c(o),r=o
else{if(!n(o))break
{let i=0,s=e-2
for(;s>=0&&n(a(t,s));)i++,s-=2
if(i%2==0)break
e+=2}}}return e}function o(t,e,i){for(;e>1;){let n=r(t,e-2,i)
if(n<e)return n
e--}return 0}function a(t,e){let i=t.charCodeAt(e)
if(!h(i)||e+1==t.length)return i
let n=t.charCodeAt(e+1)
return l(n)?n-56320+(i-55296<<10)+65536:i}function l(t){return t>=56320&&t<57344}function h(t){return t>=55296&&t<56320}function c(t){return t<65536?1:2}class O{lineAt(t){if(t<0||t>this.length)throw new RangeError(`Invalid position ${t} in document of length ${this.length}`)
return this.lineInner(t,!1,1,0)}line(t){if(t<1||t>this.lines)throw new RangeError(`Invalid line number ${t} in ${this.lines}-line document`)
return this.lineInner(t,!0,1,0)}replace(t,e,i){[t,e]=b(this,t,e)
let n=[]
return this.decompose(0,t,n,2),i.length&&i.decompose(0,i.length,n,3),this.decompose(e,this.length,n,1),u.from(n,this.length-(e-t)+i.length)}append(t){return this.replace(this.length,this.length,t)}slice(t,e=this.length){[t,e]=b(this,t,e)
let i=[]
return this.decompose(t,e,i,0),u.from(i,e-t)}eq(t){if(t==this)return!0
if(t.length!=this.length||t.lines!=this.lines)return!1
let e=this.scanIdentical(t,1),i=this.length-this.scanIdentical(t,-1),n=new g(this),s=new g(t)
for(let t=e,r=e;;){if(n.next(t),s.next(t),t=0,n.lineBreak!=s.lineBreak||n.done!=s.done||n.value!=s.value)return!1
if(r+=n.value.length,n.done||r>=i)return!0}}iter(t=1){return new g(this,t)}iterRange(t,e=this.length){return new m(this,t,e)}iterLines(t,e){let i
if(null==t)i=this.iter()
else{null==e&&(e=this.lines+1)
let n=this.line(t).from
i=this.iterRange(n,Math.max(n,e==this.lines+1?this.length:e<=1?0:this.line(e-1).to))}return new Q(i)}toString(){return this.sliceString(0)}toJSON(){let t=[]
return this.flatten(t),t}constructor(){}static of(t){if(0==t.length)throw new RangeError("A document must have at least one line")
return 1!=t.length||t[0]?t.length<=32?new f(t):u.from(f.split(t,[])):O.empty}}class f extends O{constructor(t,e=function(t){let e=-1
for(let i of t)e+=i.length+1
return e}(t)){super(),this.text=t,this.length=e}get lines(){return this.text.length}get children(){return null}lineInner(t,e,i,n){for(let s=0;;s++){let r=this.text[s],o=n+r.length
if((e?i:o)>=t)return new w(n,o,i,r)
n=o+1,i++}}decompose(t,e,i,n){let s=t<=0&&e>=this.length?this:new f(p(this.text,t,e),Math.min(e,this.length)-Math.max(0,t))
if(1&n){let t=i.pop(),e=d(s.text,t.text.slice(),0,s.length)
if(e.length<=32)i.push(new f(e,t.length+s.length))
else{let t=e.length>>1
i.push(new f(e.slice(0,t)),new f(e.slice(t)))}}else i.push(s)}replace(t,e,i){if(!(i instanceof f))return super.replace(t,e,i);[t,e]=b(this,t,e)
let n=d(this.text,d(i.text,p(this.text,0,t)),e),s=this.length+i.length-(e-t)
return n.length<=32?new f(n,s):u.from(f.split(n,[]),s)}sliceString(t,e=this.length,i="\n"){[t,e]=b(this,t,e)
let n=""
for(let s=0,r=0;s<=e&&r<this.text.length;r++){let o=this.text[r],a=s+o.length
s>t&&r&&(n+=i),t<a&&e>s&&(n+=o.slice(Math.max(0,t-s),e-s)),s=a+1}return n}flatten(t){for(let e of this.text)t.push(e)}scanIdentical(){return 0}static split(t,e){let i=[],n=-1
for(let s of t)i.push(s),n+=s.length+1,32==i.length&&(e.push(new f(i,n)),i=[],n=-1)
return n>-1&&e.push(new f(i,n)),e}}class u extends O{constructor(t,e){super(),this.children=t,this.length=e,this.lines=0
for(let e of t)this.lines+=e.lines}lineInner(t,e,i,n){for(let s=0;;s++){let r=this.children[s],o=n+r.length,a=i+r.lines-1
if((e?a:o)>=t)return r.lineInner(t,e,i,n)
n=o+1,i=a+1}}decompose(t,e,i,n){for(let s=0,r=0;r<=e&&s<this.children.length;s++){let o=this.children[s],a=r+o.length
if(t<=a&&e>=r){let s=n&((r<=t?1:0)|(a>=e?2:0))
r>=t&&a<=e&&!s?i.push(o):o.decompose(t-r,e-r,i,s)}r=a+1}}replace(t,e,i){if([t,e]=b(this,t,e),i.lines<this.lines)for(let n=0,s=0;n<this.children.length;n++){let r=this.children[n],o=s+r.length
if(t>=s&&e<=o){let a=r.replace(t-s,e-s,i),l=this.lines-r.lines+a.lines
if(a.lines<l>>4&&a.lines>l>>6){let s=this.children.slice()
return s[n]=a,new u(s,this.length-(e-t)+i.length)}return super.replace(s,o,a)}s=o+1}return super.replace(t,e,i)}sliceString(t,e=this.length,i="\n"){[t,e]=b(this,t,e)
let n=""
for(let s=0,r=0;s<this.children.length&&r<=e;s++){let o=this.children[s],a=r+o.length
r>t&&s&&(n+=i),t<a&&e>r&&(n+=o.sliceString(t-r,e-r,i)),r=a+1}return n}flatten(t){for(let e of this.children)e.flatten(t)}scanIdentical(t,e){if(!(t instanceof u))return 0
let i=0,[n,s,r,o]=e>0?[0,0,this.children.length,t.children.length]:[this.children.length-1,t.children.length-1,-1,-1]
for(;;n+=e,s+=e){if(n==r||s==o)return i
let a=this.children[n],l=t.children[s]
if(a!=l)return i+a.scanIdentical(l,e)
i+=a.length+1}}static from(t,e=t.reduce((t,e)=>t+e.length+1,-1)){let i=0
for(let e of t)i+=e.lines
if(i<32){let i=[]
for(let e of t)e.flatten(i)
return new f(i,e)}let n=Math.max(32,i>>5),s=n<<1,r=n>>1,o=[],a=0,l=-1,h=[]
function c(t){let e
if(t.lines>s&&t instanceof u)for(let e of t.children)c(e)
else t.lines>r&&(a>r||!a)?(O(),o.push(t)):t instanceof f&&a&&(e=h[h.length-1])instanceof f&&t.lines+e.lines<=32?(a+=t.lines,l+=t.length+1,h[h.length-1]=new f(e.text.concat(t.text),e.length+1+t.length)):(a+t.lines>n&&O(),a+=t.lines,l+=t.length+1,h.push(t))}function O(){0!=a&&(o.push(1==h.length?h[0]:u.from(h,l)),l=-1,a=h.length=0)}for(let e of t)c(e)
return O(),1==o.length?o[0]:new u(o,e)}}function d(t,e,i=0,n=1e9){for(let s=0,r=0,o=!0;r<t.length&&s<=n;r++){let a=t[r],l=s+a.length
l>=i&&(l>n&&(a=a.slice(0,n-s)),s<i&&(a=a.slice(i-s)),o?(e[e.length-1]+=a,o=!1):e.push(a)),s=l+1}return e}function p(t,e,i){return d(t,[""],e,i)}O.empty=new f([""],0)
class g{constructor(t,e=1){this.dir=e,this.done=!1,this.lineBreak=!1,this.value="",this.nodes=[t],this.offsets=[e>0?1:(t instanceof f?t.text.length:t.children.length)<<1]}nextInner(t,e){for(this.done=this.lineBreak=!1;;){let i=this.nodes.length-1,n=this.nodes[i],s=this.offsets[i],r=s>>1,o=n instanceof f?n.text.length:n.children.length
if(r==(e>0?o:0)){if(0==i)return this.done=!0,this.value="",this
e>0&&this.offsets[i-1]++,this.nodes.pop(),this.offsets.pop()}else if((1&s)==(e>0?0:1)){if(this.offsets[i]+=e,0==t)return this.lineBreak=!0,this.value="\n",this
t--}else if(n instanceof f){let s=n.text[r+(e<0?-1:0)]
if(this.offsets[i]+=e,s.length>Math.max(0,t))return this.value=0==t?s:e>0?s.slice(t):s.slice(0,s.length-t),this
t-=s.length}else{let s=n.children[r+(e<0?-1:0)]
t>s.length?(t-=s.length,this.offsets[i]+=e):(e<0&&this.offsets[i]--,this.nodes.push(s),this.offsets.push(e>0?1:(s instanceof f?s.text.length:s.children.length)<<1))}}}next(t=0){return t<0&&(this.nextInner(-t,-this.dir),t=this.value.length),this.nextInner(t,this.dir)}}class m{constructor(t,e,i){this.value="",this.done=!1,this.cursor=new g(t,e>i?-1:1),this.pos=e>i?t.length:0,this.from=Math.min(e,i),this.to=Math.max(e,i)}nextInner(t,e){if(e<0?this.pos<=this.from:this.pos>=this.to)return this.value="",this.done=!0,this
t+=Math.max(0,e<0?this.pos-this.to:this.from-this.pos)
let i=e<0?this.pos-this.from:this.to-this.pos
t>i&&(t=i),i-=t
let{value:n}=this.cursor.next(t)
return this.pos+=(n.length+t)*e,this.value=n.length<=i?n:e<0?n.slice(n.length-i):n.slice(0,i),this.done=!this.value,this}next(t=0){return t<0?t=Math.max(t,this.from-this.pos):t>0&&(t=Math.min(t,this.to-this.pos)),this.nextInner(t,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&""!=this.value}}class Q{constructor(t){this.inner=t,this.afterBreak=!0,this.value="",this.done=!1}next(t=0){let{done:e,lineBreak:i,value:n}=this.inner.next(t)
return e&&this.afterBreak?(this.value="",this.afterBreak=!1):e?(this.done=!0,this.value=""):i?this.afterBreak?this.value="":(this.afterBreak=!0,this.next()):(this.value=n,this.afterBreak=!1),this}get lineBreak(){return!1}}"undefined"!=typeof Symbol&&(O.prototype[Symbol.iterator]=function(){return this.iter()},g.prototype[Symbol.iterator]=m.prototype[Symbol.iterator]=Q.prototype[Symbol.iterator]=function(){return this})
class w{constructor(t,e,i,n){this.from=t,this.to=e,this.number=i,this.text=n}get length(){return this.to-this.from}}function b(t,e,i){return[e=Math.max(0,Math.min(t.length,e)),Math.max(e,Math.min(t.length,i))]}function v(t,e,i=!0,n=!0){return s(t,e,i,n)}function S(t,e){let i=t.charCodeAt(e)
if(!(n=i,n>=55296&&n<56320&&e+1!=t.length))return i
var n
let s=t.charCodeAt(e+1)
return function(t){return t>=56320&&t<57344}(s)?s-56320+(i-55296<<10)+65536:i}const x=/\r\n?|\n/
var k=function(t){return t[t.Simple=0]="Simple",t[t.TrackDel=1]="TrackDel",t[t.TrackBefore=2]="TrackBefore",t[t.TrackAfter=3]="TrackAfter",t}(k||(k={}))
class y{constructor(t){this.sections=t}get length(){let t=0
for(let e=0;e<this.sections.length;e+=2)t+=this.sections[e]
return t}get newLength(){let t=0
for(let e=0;e<this.sections.length;e+=2){let i=this.sections[e+1]
t+=i<0?this.sections[e]:i}return t}get empty(){return 0==this.sections.length||2==this.sections.length&&this.sections[1]<0}iterGaps(t){for(let e=0,i=0,n=0;e<this.sections.length;){let s=this.sections[e++],r=this.sections[e++]
r<0?(t(i,n,s),n+=s):n+=r,i+=s}}iterChangedRanges(t,e=!1){X(this,t,e)}get invertedDesc(){let t=[]
for(let e=0;e<this.sections.length;){let i=this.sections[e++],n=this.sections[e++]
n<0?t.push(i,n):t.push(n,i)}return new y(t)}composeDesc(t){return this.empty?t:t.empty?this:T(this,t)}mapDesc(t,e=!1){return t.empty?this:A(this,t,e)}mapPos(t,e=-1,i=k.Simple){let n=0,s=0
for(let r=0;r<this.sections.length;){let o=this.sections[r++],a=this.sections[r++],l=n+o
if(a<0){if(l>t)return s+(t-n)
s+=o}else{if(i!=k.Simple&&l>=t&&(i==k.TrackDel&&n<t&&l>t||i==k.TrackBefore&&n<t||i==k.TrackAfter&&l>t))return null
if(l>t||l==t&&e<0&&!o)return t==n||e<0?s:s+a
s+=a}n=l}if(t>n)throw new RangeError(`Position ${t} is out of range for changeset of length ${n}`)
return s}touchesRange(t,e=t){for(let i=0,n=0;i<this.sections.length&&n<=e;){let s=n+this.sections[i++]
if(this.sections[i++]>=0&&n<=e&&s>=t)return!(n<t&&s>e)||"cover"
n=s}return!1}toString(){let t=""
for(let e=0;e<this.sections.length;){let i=this.sections[e++],n=this.sections[e++]
t+=(t?" ":"")+i+(n>=0?":"+n:"")}return t}toJSON(){return this.sections}static fromJSON(t){if(!Array.isArray(t)||t.length%2||t.some(t=>"number"!=typeof t))throw new RangeError("Invalid JSON representation of ChangeDesc")
return new y(t)}static create(t){return new y(t)}}class $ extends y{constructor(t,e){super(t),this.inserted=e}apply(t){if(this.length!=t.length)throw new RangeError("Applying change set to a document with the wrong length")
return X(this,(e,i,n,s,r)=>t=t.replace(n,n+(i-e),r),!1),t}mapDesc(t,e=!1){return A(this,t,e,!0)}invert(t){let e=this.sections.slice(),i=[]
for(let n=0,s=0;n<e.length;n+=2){let r=e[n],o=e[n+1]
if(o>=0){e[n]=o,e[n+1]=r
let a=n>>1
for(;i.length<a;)i.push(O.empty)
i.push(r?t.slice(s,s+r):O.empty)}s+=r}return new $(e,i)}compose(t){return this.empty?t:t.empty?this:T(this,t,!0)}map(t,e=!1){return t.empty?this:A(this,t,e,!0)}iterChanges(t,e=!1){X(this,t,e)}get desc(){return y.create(this.sections)}filter(t){let e=[],i=[],n=[],s=new M(this)
t:for(let r=0,o=0;;){let a=r==t.length?1e9:t[r++]
for(;o<a||o==a&&0==s.len;){if(s.done)break t
let t=Math.min(s.len,a-o)
P(n,t,-1)
let r=-1==s.ins?-1:0==s.off?s.ins:0
P(e,t,r),r>0&&Z(i,e,s.text),s.forward(t),o+=t}let l=t[r++]
for(;o<l;){if(s.done)break t
let t=Math.min(s.len,l-o)
P(e,t,-1),P(n,t,-1==s.ins?-1:0==s.off?s.ins:0),s.forward(t),o+=t}}return{changes:new $(e,i),filtered:y.create(n)}}toJSON(){let t=[]
for(let e=0;e<this.sections.length;e+=2){let i=this.sections[e],n=this.sections[e+1]
n<0?t.push(i):0==n?t.push([i]):t.push([i].concat(this.inserted[e>>1].toJSON()))}return t}static of(t,e,i){let n=[],s=[],r=0,o=null
function a(t=!1){if(!t&&!n.length)return
r<e&&P(n,e-r,-1)
let i=new $(n,s)
o=o?o.compose(i.map(o)):i,n=[],s=[],r=0}return function t(l){if(Array.isArray(l))for(let e of l)t(e)
else if(l instanceof $){if(l.length!=e)throw new RangeError(`Mismatched change set length (got ${l.length}, expected ${e})`)
a(),o=o?o.compose(l.map(o)):l}else{let{from:t,to:o=t,insert:h}=l
if(t>o||t<0||o>e)throw new RangeError(`Invalid change range ${t} to ${o} (in doc of length ${e})`)
let c=h?"string"==typeof h?O.of(h.split(i||x)):h:O.empty,f=c.length
if(t==o&&0==f)return
t<r&&a(),t>r&&P(n,t-r,-1),P(n,o-t,f),Z(s,n,c),r=o}}(t),a(!o),o}static empty(t){return new $(t?[t,-1]:[],[])}static fromJSON(t){if(!Array.isArray(t))throw new RangeError("Invalid JSON representation of ChangeSet")
let e=[],i=[]
for(let n=0;n<t.length;n++){let s=t[n]
if("number"==typeof s)e.push(s,-1)
else{if(!Array.isArray(s)||"number"!=typeof s[0]||s.some((t,e)=>e&&"string"!=typeof t))throw new RangeError("Invalid JSON representation of ChangeSet")
if(1==s.length)e.push(s[0],0)
else{for(;i.length<n;)i.push(O.empty)
i[n]=O.of(s.slice(1)),e.push(s[0],i[n].length)}}}return new $(e,i)}static createSet(t,e){return new $(t,e)}}function P(t,e,i,n=!1){if(0==e&&i<=0)return
let s=t.length-2
s>=0&&i<=0&&i==t[s+1]?t[s]+=e:s>=0&&0==e&&0==t[s]?t[s+1]+=i:n?(t[s]+=e,t[s+1]+=i):t.push(e,i)}function Z(t,e,i){if(0==i.length)return
let n=e.length-2>>1
if(n<t.length)t[t.length-1]=t[t.length-1].append(i)
else{for(;t.length<n;)t.push(O.empty)
t.push(i)}}function X(t,e,i){let n=t.inserted
for(let s=0,r=0,o=0;o<t.sections.length;){let a=t.sections[o++],l=t.sections[o++]
if(l<0)s+=a,r+=a
else{let h=s,c=r,f=O.empty
for(;h+=a,c+=l,l&&n&&(f=f.append(n[o-2>>1])),!(i||o==t.sections.length||t.sections[o+1]<0);)a=t.sections[o++],l=t.sections[o++]
e(s,h,r,c,f),s=h,r=c}}}function A(t,e,i,n=!1){let s=[],r=n?[]:null,o=new M(t),a=new M(e)
for(let t=-1;;){if(o.done&&a.len||a.done&&o.len)throw new Error("Mismatched change set lengths")
if(-1==o.ins&&-1==a.ins){let t=Math.min(o.len,a.len)
P(s,t,-1),o.forward(t),a.forward(t)}else if(a.ins>=0&&(o.ins<0||t==o.i||0==o.off&&(a.len<o.len||a.len==o.len&&!i))){let e=a.len
for(P(s,a.ins,-1);e;){let i=Math.min(o.len,e)
o.ins>=0&&t<o.i&&o.len<=i&&(P(s,0,o.ins),r&&Z(r,s,o.text),t=o.i),o.forward(i),e-=i}a.next()}else{if(!(o.ins>=0)){if(o.done&&a.done)return r?$.createSet(s,r):y.create(s)
throw new Error("Mismatched change set lengths")}{let e=0,i=o.len
for(;i;)if(-1==a.ins){let t=Math.min(i,a.len)
e+=t,i-=t,a.forward(t)}else{if(!(0==a.ins&&a.len<i))break
i-=a.len,a.next()}P(s,e,t<o.i?o.ins:0),r&&t<o.i&&Z(r,s,o.text),t=o.i,o.forward(o.len-i)}}}}function T(t,e,i=!1){let n=[],s=i?[]:null,r=new M(t),o=new M(e)
for(let t=!1;;){if(r.done&&o.done)return s?$.createSet(n,s):y.create(n)
if(0==r.ins)P(n,r.len,0,t),r.next()
else if(0!=o.len||o.done){if(r.done||o.done)throw new Error("Mismatched change set lengths")
{let e=Math.min(r.len2,o.len),i=n.length
if(-1==r.ins){let i=-1==o.ins?-1:o.off?0:o.ins
P(n,e,i,t),s&&i&&Z(s,n,o.text)}else-1==o.ins?(P(n,r.off?0:r.len,e,t),s&&Z(s,n,r.textBit(e))):(P(n,r.off?0:r.len,o.off?0:o.ins,t),s&&!o.off&&Z(s,n,o.text))
t=(r.ins>e||o.ins>=0&&o.len>e)&&(t||n.length>i),r.forward2(e),o.forward(e)}}else P(n,0,o.ins,t),s&&Z(s,n,o.text),o.next()}}class M{constructor(t){this.set=t,this.i=0,this.next()}next(){let{sections:t}=this.set
this.i<t.length?(this.len=t[this.i++],this.ins=t[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return-2==this.ins}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:t}=this.set,e=this.i-2>>1
return e>=t.length?O.empty:t[e]}textBit(t){let{inserted:e}=this.set,i=this.i-2>>1
return i>=e.length&&!t?O.empty:e[i].slice(this.off,null==t?void 0:this.off+t)}forward(t){t==this.len?this.next():(this.len-=t,this.off+=t)}forward2(t){-1==this.ins?this.forward(t):t==this.ins?this.next():(this.ins-=t,this.off+=t)}}class R{constructor(t,e,i,n){this.from=t,this.to=e,this.flags=i,this.goalColumn=n}get anchor(){return 32&this.flags?this.to:this.from}get head(){return 32&this.flags?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return 8&this.flags?-1:16&this.flags?1:0}get undirectional(){return(64&this.flags)>0}get bidiLevel(){let t=7&this.flags
return 7==t?null:t}map(t,e=-1){let i,n
return this.empty?i=n=t.mapPos(this.from,e):(i=t.mapPos(this.from,1),n=t.mapPos(this.to,-1)),i==this.from&&n==this.to?this:new R(i,n,this.flags,this.goalColumn)}extend(t,e=t,i=0){if(t<=this.anchor&&e>=this.anchor)return C.range(t,e,void 0,void 0,i)
let n=Math.abs(t-this.anchor)>Math.abs(e-this.anchor)?t:e
return C.range(this.anchor,n,void 0,void 0,i)}eq(t,e=!1){return!(this.anchor!=t.anchor||this.head!=t.head||this.goalColumn!=t.goalColumn||e&&this.empty&&this.assoc!=t.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(t){if(!t||"number"!=typeof t.anchor||"number"!=typeof t.head)throw new RangeError("Invalid JSON representation for SelectionRange")
return C.range(t.anchor,t.head)}static create(t,e,i,n){return new R(t,e,i,n)}}class C{constructor(t,e){this.ranges=t,this.mainIndex=e}map(t,e=-1){return t.empty?this:C.create(this.ranges.map(i=>i.map(t,e)),this.mainIndex)}eq(t,e=!1){if(this.ranges.length!=t.ranges.length||this.mainIndex!=t.mainIndex)return!1
for(let i=0;i<this.ranges.length;i++)if(!this.ranges[i].eq(t.ranges[i],e))return!1
return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return 1==this.ranges.length?this:new C([this.main],0)}addRange(t,e=!0){return C.create([t].concat(this.ranges),e?0:this.mainIndex+1)}replaceRange(t,e=this.mainIndex){let i=this.ranges.slice()
return i[e]=t,C.create(i,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(t=>t.toJSON()),main:this.mainIndex}}static fromJSON(t){if(!t||!Array.isArray(t.ranges)||"number"!=typeof t.main||t.main>=t.ranges.length)throw new RangeError("Invalid JSON representation for EditorSelection")
return new C(t.ranges.map(t=>R.fromJSON(t)),t.main)}static single(t,e=t){return new C([C.range(t,e)],0)}static create(t,e=0){if(0==t.length)throw new RangeError("A selection needs at least one range")
for(let i=0,n=0;n<t.length;n++){let s=t[n]
if(s.empty?s.from<=i:s.from<i)return C.normalized(t.slice(),e)
i=s.to}return new C(t,e)}static cursor(t,e=0,i,n){return R.create(t,t,(0==e?0:e<0?8:16)|(null==i?7:Math.min(6,i)),n)}static range(t,e,i,n,s){let r=null==n?7:Math.min(6,n)
return s||t==e||(s=e<t?1:-1),s&&(r|=s<0?8:16),e<t?R.create(e,t,32|r,i):R.create(t,e,r,i)}static undirectionalRange(t,e){return R.create(t,e,64,void 0)}static normalized(t,e=0){let i=t[e]
t.sort((t,e)=>t.from-e.from),e=t.indexOf(i)
for(let i=1;i<t.length;i++){let n=t[i],s=t[i-1]
if(n.empty?n.from<=s.to:n.from<s.to){let r=s.from,o=Math.max(n.to,s.to)
i<=e&&e--,t.splice(--i,2,n.anchor>n.head?C.range(o,r):C.range(r,o))}}return new C(t,e)}}function _(t,e){for(let i of t.ranges)if(i.to>e)throw new RangeError("Selection points outside of document")}let j=0
class Y{constructor(t,e,i,n,s){this.combine=t,this.compareInput=e,this.compare=i,this.isStatic=n,this.id=j++,this.default=t([]),this.extensions="function"==typeof s?s(this):s}get reader(){return this}static define(t={}){return new Y(t.combine||(t=>t),t.compareInput||((t,e)=>t===e),t.compare||(t.combine?(t,e)=>t===e:W),!!t.static,t.enables)}of(t){return new E([],this,0,t)}compute(t,e){if(this.isStatic)throw new Error("Can't compute a static facet")
return new E(t,this,1,e)}computeN(t,e){if(this.isStatic)throw new Error("Can't compute a static facet")
return new E(t,this,2,e)}from(t,e){return e||(e=t=>t),this.compute([t],i=>e(i.field(t)))}}function W(t,e){return t==e||t.length==e.length&&t.every((t,i)=>t===e[i])}class E{constructor(t,e,i,n){this.dependencies=t,this.facet=e,this.type=i,this.value=n,this.id=j++}dynamicSlot(t){var e
let i=this.value,n=this.facet.compareInput,s=this.id,r=t[s]>>1,o=2==this.type,a=!1,l=!1,h=[]
for(let i of this.dependencies)"doc"==i?a=!0:"selection"==i?l=!0:1&(null!==(e=t[i.id])&&void 0!==e?e:1)||h.push(t[i.id])
return{create:t=>(t.values[r]=i(t),1),update(t,e){if(a&&e.docChanged||l&&(e.docChanged||e.selection)||q(t,h)){let e=i(t)
if(o?!z(e,t.values[r],n):!n(e,t.values[r]))return t.values[r]=e,1}return 0},reconfigure:(t,e)=>{let a,l=e.config.address[s]
if(null!=l){let s=it(e,l)
if(this.dependencies.every(i=>i instanceof Y?e.facet(i)===t.facet(i):!(i instanceof U)||e.field(i,!1)==t.field(i,!1))||(o?z(a=i(t),s,n):n(a=i(t),s)))return t.values[r]=s,0}else a=i(t)
return t.values[r]=a,1}}}get extension(){return this}}function z(t,e,i){if(t.length!=e.length)return!1
for(let n=0;n<t.length;n++)if(!i(t[n],e[n]))return!1
return!0}function q(t,e){let i=!1
for(let n of e)1&et(t,n)&&(i=!0)
return i}function D(t,e,i){let n=i.map(e=>t[e.id]),s=i.map(t=>t.type),r=n.filter(t=>!(1&t)),o=t[e.id]>>1
function a(t){let i=[]
for(let e=0;e<n.length;e++){let r=it(t,n[e])
if(2==s[e])for(let t of r)i.push(t)
else i.push(r)}return e.combine(i)}return{create(t){for(let e of n)et(t,e)
return t.values[o]=a(t),1},update(t,i){if(!q(t,r))return 0
let n=a(t)
return e.compare(n,t.values[o])?0:(t.values[o]=n,1)},reconfigure(t,s){let r=q(t,n),l=s.config.facets[e.id],h=s.facet(e)
if(l&&!r&&W(i,l))return t.values[o]=h,0
let c=a(t)
return e.compare(c,h)?(t.values[o]=h,0):(t.values[o]=c,1)}}}const L=Y.define({static:!0})
class U{constructor(t,e,i,n,s){this.id=t,this.createF=e,this.updateF=i,this.compareF=n,this.spec=s,this.provides=void 0}static define(t){let e=new U(j++,t.create,t.update,t.compare||((t,e)=>t===e),t)
return t.provide&&(e.provides=t.provide(e)),e}create(t){let e=t.facet(L).find(t=>t.field==this)
return((null==e?void 0:e.create)||this.createF)(t)}slot(t){let e=t[this.id]>>1
return{create:t=>(t.values[e]=this.create(t),1),update:(t,i)=>{let n=t.values[e],s=this.updateF(n,i)
return this.compareF(n,s)?0:(t.values[e]=s,1)},reconfigure:(t,i)=>{let n,s=t.facet(L),r=i.facet(L)
return(n=s.find(t=>t.field==this))&&n!=r.find(t=>t.field==this)?(t.values[e]=n.create(t),1):null!=i.config.address[this.id]?(t.values[e]=i.field(this),0):(t.values[e]=this.create(t),1)}}}init(t){return[this,L.of({field:this,create:t})]}get extension(){return this}}const B=4,V=3,G=2,I=1
function N(t){return e=>new F(e,t)}const H={highest:N(0),high:N(I),default:N(G),low:N(V),lowest:N(B)}
class F{constructor(t,e){this.inner=t,this.prec=e}get extension(){return this}}class K{of(t){return new J(this,t)}reconfigure(t){return K.reconfigure.of({compartment:this,extension:t})}get(t){return t.config.compartments.get(this)}}class J{constructor(t,e){this.compartment=t,this.inner=e}get extension(){return this}}class tt{constructor(t,e,i,n,s,r){for(this.base=t,this.compartments=e,this.dynamicSlots=i,this.address=n,this.staticValues=s,this.facets=r,this.statusTemplate=[];this.statusTemplate.length<i.length;)this.statusTemplate.push(0)}staticFacet(t){let e=this.address[t.id]
return null==e?t.default:this.staticValues[e>>1]}static resolve(t,e,i){let n=[],s=Object.create(null),r=new Map
for(let i of function(t,e,i){let n=[[],[],[],[],[]],s=new Map
function r(t,o){let a=s.get(t)
if(null!=a){if(a<=o)return
let e=n[a].indexOf(t)
e>-1&&n[a].splice(e,1),t instanceof J&&i.delete(t.compartment)}if(s.set(t,o),Array.isArray(t))for(let e of t)r(e,o)
else if(t instanceof J){if(i.has(t.compartment))throw new RangeError("Duplicate use of compartment in extensions")
let n=e.get(t.compartment)||t.inner
i.set(t.compartment,n),r(n,o)}else if(t instanceof F)r(t.inner,t.prec)
else if(t instanceof U)n[o].push(t),t.provides&&r(t.provides,o)
else if(t instanceof E)n[o].push(t),t.facet.extensions&&r(t.facet.extensions,G)
else{let e=t.extension
if(!e)throw new Error(`Unrecognized extension value in extension set (${t}).`)
if(e==t)throw new Error(`Unrecognized extension value in extension set (${t}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`)
r(e,o)}}return r(t,G),n.reduce((t,e)=>t.concat(e))}(t,e,r))i instanceof U?n.push(i):(s[i.facet.id]||(s[i.facet.id]=[])).push(i)
let o=Object.create(null),a=[],l=[]
for(let t of n)o[t.id]=l.length<<1,l.push(e=>t.slot(e))
let h=null==i?void 0:i.config.facets
for(let t in s){let e=s[t],n=e[0].facet,r=h&&h[t]||[]
if(e.every(t=>0==t.type))if(o[n.id]=a.length<<1|1,W(r,e))a.push(i.facet(n))
else{let t=n.combine(e.map(t=>t.value))
a.push(i&&n.compare(t,i.facet(n))?i.facet(n):t)}else{for(let t of e)0==t.type?(o[t.id]=a.length<<1|1,a.push(t.value)):(o[t.id]=l.length<<1,l.push(e=>t.dynamicSlot(e)))
o[n.id]=l.length<<1,l.push(t=>D(t,n,e))}}let c=l.map(t=>t(o))
return new tt(t,r,c,o,a,s)}}function et(t,e){if(1&e)return 2
let i=e>>1,n=t.status[i]
if(4==n)throw new Error("Cyclic dependency between fields and/or facets")
if(2&n)return n
t.status[i]=4
let s=t.computeSlot(t,t.config.dynamicSlots[i])
return t.status[i]=2|s}function it(t,e){return 1&e?t.config.staticValues[e>>1]:t.values[e>>1]}const nt=Y.define(),st=Y.define({combine:t=>t.some(t=>t),static:!0}),rt=Y.define({combine:t=>t.length?t[0]:void 0,static:!0}),ot=Y.define(),at=Y.define(),lt=Y.define(),ht=Y.define({combine:t=>!!t.length&&t[0]})
class ct{constructor(t,e){this.type=t,this.value=e}static define(){return new Ot}}class Ot{of(t){return new ct(this,t)}}class ft{constructor(t){this.map=t}of(t){return new ut(this,t)}}class ut{constructor(t,e){this.type=t,this.value=e}map(t){let e=this.type.map(this.value,t)
return void 0===e?void 0:e==this.value?this:new ut(this.type,e)}is(t){return this.type==t}static define(t={}){return new ft(t.map||(t=>t))}static mapEffects(t,e){if(!t.length)return t
let i=[]
for(let n of t){let t=n.map(e)
t&&i.push(t)}return i}}ut.reconfigure=ut.define(),ut.appendConfig=ut.define()
class dt{constructor(t,e,i,n,s,r){this.startState=t,this.changes=e,this.selection=i,this.effects=n,this.annotations=s,this.scrollIntoView=r,this._doc=null,this._state=null,i&&_(i,e.newLength),s.some(t=>t.type==dt.time)||(this.annotations=s.concat(dt.time.of(Date.now())))}static create(t,e,i,n,s,r){return new dt(t,e,i,n,s,r)}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(t){for(let e of this.annotations)if(e.type==t)return e.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(t){let e=this.annotation(dt.userEvent)
return!(!e||!(e==t||e.length>t.length&&e.slice(0,t.length)==t&&"."==e[t.length]))}}function pt(t,e){let i=[]
for(let n=0,s=0;;){let r,o
if(n<t.length&&(s==e.length||e[s]>=t[n]))r=t[n++],o=t[n++]
else{if(!(s<e.length))return i
r=e[s++],o=e[s++]}!i.length||i[i.length-1]<r?i.push(r,o):i[i.length-1]<o&&(i[i.length-1]=o)}}function gt(t,e,i){var n
let s,r,o
return i?(s=e.changes,r=$.empty(e.changes.length),o=t.changes.compose(e.changes)):(s=e.changes.map(t.changes),r=t.changes.mapDesc(e.changes,!0),o=t.changes.compose(s)),{changes:o,selection:e.selection?e.selection.map(r):null===(n=t.selection)||void 0===n?void 0:n.map(s),effects:ut.mapEffects(t.effects,s).concat(ut.mapEffects(e.effects,r)),annotations:t.annotations.length?t.annotations.concat(e.annotations):e.annotations,scrollIntoView:t.scrollIntoView||e.scrollIntoView}}function mt(t,e,i){let n=e.selection,s=bt(e.annotations)
return e.userEvent&&(s=s.concat(dt.userEvent.of(e.userEvent))),{changes:e.changes instanceof $?e.changes:$.of(e.changes||[],i,t.facet(rt)),selection:n&&(n instanceof C?n:C.single(n.anchor,n.head)),effects:bt(e.effects),annotations:s,scrollIntoView:!!e.scrollIntoView}}function Qt(t,e,i){let n=mt(t,e.length?e[0]:{},t.doc.length)
e.length&&!1===e[0].filter&&(i=!1)
for(let s=1;s<e.length;s++){!1===e[s].filter&&(i=!1)
let r=!!e[s].sequential
n=gt(n,mt(t,e[s],r?n.changes.newLength:t.doc.length),r)}let s=dt.create(t,n.changes,n.selection,n.effects,n.annotations,n.scrollIntoView)
return function(t){let e=t.startState,i=e.facet(lt),n=t
for(let s=i.length-1;s>=0;s--){let r=i[s](t)
r&&Object.keys(r).length&&(n=gt(n,mt(e,r,t.changes.newLength),!0))}return n==t?t:dt.create(e,t.changes,t.selection,n.effects,n.annotations,n.scrollIntoView)}(i?function(t){let e=t.startState,i=!0
for(let n of e.facet(ot)){let e=n(t)
if(!1===e){i=!1
break}Array.isArray(e)&&(i=!0===i?e:pt(i,e))}if(!0!==i){let n,s
if(!1===i)s=t.changes.invertedDesc,n=$.empty(e.doc.length)
else{let e=t.changes.filter(i)
n=e.changes,s=e.filtered.mapDesc(e.changes).invertedDesc}t=dt.create(e,n,t.selection&&t.selection.map(s),ut.mapEffects(t.effects,s),t.annotations,t.scrollIntoView)}let n=e.facet(at)
for(let i=n.length-1;i>=0;i--){let s=n[i](t)
t=s instanceof dt?s:Array.isArray(s)&&1==s.length&&s[0]instanceof dt?s[0]:Qt(e,bt(s),!1)}return t}(s):s)}dt.time=ct.define(),dt.userEvent=ct.define(),dt.addToHistory=ct.define(),dt.remote=ct.define()
const wt=[]
function bt(t){return null==t?wt:Array.isArray(t)?t:[t]}var vt=function(t){return t[t.Word=0]="Word",t[t.Space=1]="Space",t[t.Other=2]="Other",t}(vt||(vt={}))
const St=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
let xt
try{xt=new RegExp("[\\p{Alphabetic}\\p{Number}_]","u")}catch(t){}function kt(t){return e=>{if(!/\S/.test(e))return vt.Space
if(function(t){if(xt)return xt.test(t)
for(let e=0;e<t.length;e++){let i=t[e]
if(/\w/.test(i)||i>""&&(i.toUpperCase()!=i.toLowerCase()||St.test(i)))return!0}return!1}(e))return vt.Word
for(let i=0;i<t.length;i++)if(e.indexOf(t[i])>-1)return vt.Word
return vt.Other}}class yt{constructor(t,e,i,n,s,r){this.config=t,this.doc=e,this.selection=i,this.values=n,this.status=t.statusTemplate.slice(),this.computeSlot=s,r&&(r._state=this)
for(let t=0;t<this.config.dynamicSlots.length;t++)et(this,t<<1)
this.computeSlot=null}field(t,e=!0){let i=this.config.address[t.id]
if(null!=i)return et(this,i),it(this,i)
if(e)throw new RangeError("Field is not present in this state")}update(...t){return Qt(this,t,!0)}applyTransaction(t){let e,i=this.config,{base:n,compartments:s}=i
for(let e of t.effects)e.is(K.reconfigure)?(i&&(s=new Map,i.compartments.forEach((t,e)=>s.set(e,t)),i=null),s.set(e.value.compartment,e.value.extension)):e.is(ut.reconfigure)?(i=null,n=e.value):e.is(ut.appendConfig)&&(i=null,n=bt(n).concat(e.value))
if(i)e=t.startState.values.slice()
else{i=tt.resolve(n,s,this),e=new yt(i,this.doc,this.selection,i.dynamicSlots.map(()=>null),(t,e)=>e.reconfigure(t,this),null).values}let r=t.startState.facet(st)?t.newSelection:t.newSelection.asSingle()
new yt(i,t.newDoc,r,e,(e,i)=>i.update(e,t),t)}replaceSelection(t){return"string"==typeof t&&(t=this.toText(t)),this.changeByRange(e=>({changes:{from:e.from,to:e.to,insert:t},range:C.cursor(e.from+t.length,-1)}))}changeByRange(t){let e=this.selection,i=t(e.ranges[0]),n=this.changes(i.changes),s=[i.range],r=bt(i.effects)
for(let i=1;i<e.ranges.length;i++){let o=t(e.ranges[i]),a=this.changes(o.changes),l=a.map(n)
for(let t=0;t<i;t++)s[t]=s[t].map(l)
let h=n.mapDesc(a,!0)
s.push(o.range.map(h)),n=n.compose(l),r=ut.mapEffects(r,l).concat(ut.mapEffects(bt(o.effects),h))}return{changes:n,selection:C.create(s,e.mainIndex),effects:r}}changes(t=[]){return t instanceof $?t:$.of(t,this.doc.length,this.facet(yt.lineSeparator))}toText(t){return O.of(t.split(this.facet(yt.lineSeparator)||x))}sliceDoc(t=0,e=this.doc.length){return this.doc.sliceString(t,e,this.lineBreak)}facet(t){let e=this.config.address[t.id]
return null==e?t.default:(et(this,e),it(this,e))}toJSON(t){let e={doc:this.sliceDoc(),selection:this.selection.toJSON()}
if(t)for(let i in t){let n=t[i]
n instanceof U&&null!=this.config.address[n.id]&&(e[i]=n.spec.toJSON(this.field(t[i]),this))}return e}static fromJSON(t,e={},i){if(!t||"string"!=typeof t.doc)throw new RangeError("Invalid JSON representation for EditorState")
let n=[]
if(i)for(let e in i)if(Object.prototype.hasOwnProperty.call(t,e)){let s=i[e],r=t[e]
n.push(s.init(t=>s.spec.fromJSON(r,t)))}return yt.create({doc:t.doc,selection:C.fromJSON(t.selection),extensions:e.extensions?n.concat([e.extensions]):n})}static create(t={}){let e=tt.resolve(t.extensions||[],new Map),i=t.doc instanceof O?t.doc:O.of((t.doc||"").split(e.staticFacet(yt.lineSeparator)||x)),n=t.selection?t.selection instanceof C?t.selection:C.single(t.selection.anchor,t.selection.head):C.single(0)
return _(n,i.length),e.staticFacet(st)||(n=n.asSingle()),new yt(e,i,n,e.dynamicSlots.map(()=>null),(t,e)=>e.create(t),null)}get tabSize(){return this.facet(yt.tabSize)}get lineBreak(){return this.facet(yt.lineSeparator)||"\n"}get readOnly(){return this.facet(ht)}phrase(t,...e){for(let e of this.facet(yt.phrases))if(Object.prototype.hasOwnProperty.call(e,t)){t=e[t]
break}return e.length&&(t=t.replace(/\$(\$|\d*)/g,(t,i)=>{if("$"==i)return"$"
let n=+(i||1)
return!n||n>e.length?t:e[n-1]})),t}languageDataAt(t,e,i=-1){let n=[]
for(let s of this.facet(nt))for(let r of s(this,e,i))Object.prototype.hasOwnProperty.call(r,t)&&n.push(r[t])
return n}charCategorizer(t){let e=this.languageDataAt("wordChars",t)
return kt(e.length?e[0]:"")}wordAt(t){let{text:e,from:i,length:n}=this.doc.lineAt(t),s=this.charCategorizer(t),r=t-i,o=t-i
for(;r>0;){let t=v(e,r,!1)
if(s(e.slice(t,r))!=vt.Word)break
r=t}for(;o<n;){let t=v(e,o)
if(s(e.slice(o,t))!=vt.Word)break
o=t}return r==o?null:C.range(r+i,o+i)}}function $t(t,e,i={}){let n={}
for(let e of t)for(let t of Object.keys(e)){let s=e[t],r=n[t]
if(void 0===r)n[t]=s
else if(r===s||void 0===s);else{if(!Object.hasOwnProperty.call(i,t))throw new Error("Config merge conflict for field "+t)
n[t]=i[t](r,s)}}for(let t in e)void 0===n[t]&&(n[t]=e[t])
return n}yt.allowMultipleSelections=st,yt.tabSize=Y.define({combine:t=>t.length?t[0]:4}),yt.lineSeparator=rt,yt.readOnly=ht,yt.phrases=Y.define({compare(t,e){let i=Object.keys(t),n=Object.keys(e)
return i.length==n.length&&i.every(i=>t[i]==e[i])}}),yt.languageData=nt,yt.changeFilter=ot,yt.transactionFilter=at,yt.transactionExtender=lt,K.reconfigure=ut.define()
class Pt{eq(t){return this==t}range(t,e=t){return Xt.create(t,e,this)}}function Zt(t,e){return t==e||t.constructor==e.constructor&&t.eq(e)}Pt.prototype.startSide=Pt.prototype.endSide=0,Pt.prototype.point=!1,Pt.prototype.mapMode=k.TrackDel
let Xt=class t{constructor(t,e,i){this.from=t,this.to=e,this.value=i}static create(e,i,n){return new t(e,i,n)}}
function At(t,e){return t.from-e.from||t.value.startSide-e.value.startSide}class Tt{constructor(t,e,i,n){this.from=t,this.to=e,this.value=i,this.maxPoint=n}get length(){return Rt(this.to)}findIndex(t,e,i,n=0){let s=i?this.to:this.from
for(let r=n,o=s.length;;){if(r==o)return r
let n=r+o>>1,a=s[n]-t||(i?this.value[n].endSide:this.value[n].startSide)-e
if(n==r)return a>=0?r:o
a>=0?o=n:r=n+1}}between(t,e,i,n){for(let s=this.findIndex(e,-1e9,!0),r=this.findIndex(i,1e9,!1,s);s<r;s++)if(!1===n(this.from[s]+t,this.to[s]+t,this.value[s]))return!1}map(t,e,i,n,s){let r=[],o=[],a=[],l=-1,h=-1
t:for(let c=0;c<this.value.length;c++){let O,f,u=this.value[c],d=this.from[c]+t,p=this.to[c]+t
if(d==p){let t=e.mapPos(d,u.startSide,u.mapMode)
if(null==t)continue
if(O=f=t,u.startSide!=u.endSide&&(f=e.mapPos(d,u.endSide),f<O))continue}else if(O=e.mapPos(d,u.startSide),f=e.mapPos(p,u.endSide),O>f||O==f&&u.startSide>0&&u.endSide<=0)continue
if(!((f-O||u.endSide-u.startSide)<0))if(l<0&&(l=O),u.point&&(h=Math.max(h,f-O)),(O-i||u.startSide-n)>=0)r.push(u),o.push(O-l),a.push(f-l),i=f,n=u.endSide
else{if(O==f)for(let t=r.length;t>0;t--){if((O-(a[t-1]+l)||u.startSide-r[t-1].endSide)>=0){r.splice(t,0,u),o.splice(t,0,O-l),a.splice(t,0,f-l)
continue t}if((O-(o[t-1]+l)||u.endSide-r[t-1].startSide)>0)break}s(O,f,u)}}return{mapped:r.length?new Tt(o,a,r,h):null,pos:l}}}class Mt{constructor(t,e,i,n){this.chunkPos=t,this.chunk=e,this.nextLayer=i,this.maxPoint=n}static create(t,e,i,n){return new Mt(t,e,i,n)}get length(){let t=this.chunk.length-1
return t<0?0:Math.max(this.chunkEnd(t),this.nextLayer.length)}get size(){if(this.isEmpty)return 0
let t=this.nextLayer.size
for(let e of this.chunk)t+=e.value.length
return t}chunkEnd(t){return this.chunkPos[t]+this.chunk[t].length}update(t){let{add:e=[],sort:i=!1,filterFrom:n=0,filterTo:s=this.length}=t,r=t.filter
if(0==e.length&&!r)return this
if(i&&(e=e.slice().sort(At)),this.isEmpty)return e.length?Mt.of(e):this
let o=new jt(this,null,-1).goto(0),a=0,l=[],h=new Ct
for(;o.value||a<e.length;)if(a<e.length&&(o.from-e[a].from||o.startSide-e[a].value.startSide)>=0){let t=e[a++]
h.addInner(t.from,t.to,t.value,!1)||l.push(t)}else 1==o.rangeIndex&&o.chunkIndex<this.chunk.length&&(a==e.length||this.chunkEnd(o.chunkIndex)<e[a].from)&&(!r||n>this.chunkEnd(o.chunkIndex)||s<this.chunkPos[o.chunkIndex])&&h.addChunk(this.chunkPos[o.chunkIndex],this.chunk[o.chunkIndex])?o.nextChunk():((!r||n>o.to||s<o.from||r(o.from,o.to,o.value))&&(h.addInner(o.from,o.to,o.value,!1)||l.push(Xt.create(o.from,o.to,o.value))),o.next())
return h.finishInner(this.nextLayer.isEmpty&&!l.length?Mt.empty:this.nextLayer.update({add:l,filter:r,filterFrom:n,filterTo:s}))}map(t){if(t.empty||this.isEmpty)return this
let e,i=[],n=[],s=-1,r=(t,i,n)=>{e||(e=new Ct),e.addRange(t,i,n,!1)}
for(let e=0;e<this.chunk.length;e++){let o=this.chunkPos[e],a=this.chunk[e],l=t.touchesRange(o,o+a.length)
if(!1===l)s=Math.max(s,a.maxPoint),i.push(a),n.push(t.mapPos(o))
else if(!0===l){let[e,l]=i.length?[Rt(n)+Rt(i).length,Rt(Rt(i).value).endSide]:[-1,-1],{mapped:h,pos:c}=a.map(o,t,e,l,r)
h&&(s=Math.max(s,h.maxPoint),i.push(h),n.push(c))}}let o=this.nextLayer.map(t)
return e&&(o=e.finishInner(o)),0==i.length?o:new Mt(n,i,o||Mt.empty,s)}between(t,e,i){if(!this.isEmpty){for(let n=0;n<this.chunk.length;n++){let s=this.chunkPos[n],r=this.chunk[n]
if(e>=s&&t<=s+r.length&&!1===r.between(s,t-s,e-s,i))return}this.nextLayer.between(t,e,i)}}iter(t=0){return Yt.from([this]).goto(t)}get isEmpty(){return this.nextLayer==this}static iter(t,e=0){return Yt.from(t).goto(e)}static compare(t,e,i,n,s=-1){let r=t.filter(t=>t.maxPoint>0||!t.isEmpty&&t.maxPoint>=s),o=e.filter(t=>t.maxPoint>0||!t.isEmpty&&t.maxPoint>=s),a=_t(r,o,i),l=new Et(r,a,s),h=new Et(o,a,s)
i.iterGaps((t,e,i)=>zt(l,t,h,e,i,n)),i.empty&&0==i.length&&zt(l,0,h,0,0,n)}static eq(t,e,i=0,n){null==n&&(n=999999999)
let s=t.filter(t=>!t.isEmpty&&e.indexOf(t)<0),r=e.filter(e=>!e.isEmpty&&t.indexOf(e)<0)
if(s.length!=r.length)return!1
if(!s.length)return!0
let o=_t(s,r),a=new Et(s,o,0).goto(i),l=new Et(r,o,0).goto(i)
for(;;){if(a.to!=l.to||!qt(a.active,l.active)||a.point&&(!l.point||!Zt(a.point,l.point)))return!1
if(a.to>n)return!0
a.next(),l.next()}}static spans(t,e,i,n,s=-1){let r=new Et(t,null,s).goto(e),o=e,a=r.openStart
for(;;){let t=Math.min(r.to,i)
if(r.point){let i=r.activeForPoint(r.to),s=r.pointFrom<e?i.length+1:r.point.startSide<0?i.length:Math.min(i.length,a)
n.point(o,t,r.point,i,s,r.pointRank),a=Math.min(r.openEnd(t),i.length)}else t>o&&(n.span(o,t,r.active,a),a=r.openEnd(t))
if(r.to>i)return a+(r.point&&r.to>i?1:0)
o=r.to,r.next()}}static of(t,e=!1){let i=new Ct
for(let n of t instanceof Xt?[t]:e?function(t){if(t.length>1)for(let e=t[0],i=1;i<t.length;i++){let n=t[i]
if(At(e,n)>0)return t.slice().sort(At)
e=n}return t}(t):t)i.add(n.from,n.to,n.value)
return i.finish()}static join(t){if(!t.length)return Mt.empty
let e=Rt(t)
for(let i=t.length-2;i>=0;i--)for(let n=t[i];n!=Mt.empty;n=n.nextLayer)e=new Mt(n.chunkPos,n.chunk,e,Math.max(n.maxPoint,e.maxPoint))
return e}}function Rt(t){return t[t.length-1]}Mt.empty=new Mt([],[],null,-1),Mt.empty.nextLayer=Mt.empty
class Ct{finishChunk(t){this.chunks.push(new Tt(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,t&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(t,e,i){this.addRange(t,e,i,!0)}addRange(t,e,i,n){this.addInner(t,e,i,n)||(this.nextLayer||(this.nextLayer=new Ct)).addRange(t,e,i,n)}addInner(t,e,i,n){let s=t-this.lastTo||i.startSide-this.last.endSide
if(n&&s<=0&&(t-this.lastFrom||i.startSide-this.last.startSide)<0)throw new Error("Ranges must be added sorted by `from` position and `startSide`")
return!(s<0)&&(250==this.from.length&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=t),this.from.push(t-this.chunkStart),this.to.push(e-this.chunkStart),this.last=i,this.lastFrom=t,this.lastTo=e,this.value.push(i),i.point&&(this.maxPoint=Math.max(this.maxPoint,e-t)),!0)}addChunk(t,e){if((t-this.lastTo||e.value[0].startSide-this.last.endSide)<0)return!1
this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,e.maxPoint),this.chunks.push(e),this.chunkPos.push(t)
let i=e.value.length-1
return this.last=e.value[i],this.lastFrom=e.from[i]+t,this.lastTo=e.to[i]+t,!0}finish(){return this.finishInner(Mt.empty)}finishInner(t){if(this.from.length&&this.finishChunk(!1),0==this.chunks.length)return t
let e=Mt.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(t):t,this.setMaxPoint)
return this.from=null,e}}function _t(t,e,i){let n=new Map
for(let e of t)for(let t=0;t<e.chunk.length;t++)e.chunk[t].maxPoint<=0&&n.set(e.chunk[t],e.chunkPos[t])
let s=new Set
for(let t of e)for(let e=0;e<t.chunk.length;e++){let r=n.get(t.chunk[e])
null==r||(i?i.mapPos(r):r)!=t.chunkPos[e]||(null==i?void 0:i.touchesRange(r,r+t.chunk[e].length))||s.add(t.chunk[e])}return s}class jt{constructor(t,e,i,n=0){this.layer=t,this.skip=e,this.minPoint=i,this.rank=n}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(t,e=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(t,e,!1),this}gotoInner(t,e,i){for(;this.chunkIndex<this.layer.chunk.length;){let e=this.layer.chunk[this.chunkIndex]
if(!(this.skip&&this.skip.has(e)||this.layer.chunkEnd(this.chunkIndex)<t||e.maxPoint<this.minPoint))break
this.chunkIndex++,i=!1}if(this.chunkIndex<this.layer.chunk.length){let n=this.layer.chunk[this.chunkIndex].findIndex(t-this.layer.chunkPos[this.chunkIndex],e,!0);(!i||this.rangeIndex<n)&&this.setRangeIndex(n)}this.next()}forward(t,e){(this.to-t||this.endSide-e)<0&&this.gotoInner(t,e,!0)}next(){for(;;){if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null
break}{let t=this.layer.chunkPos[this.chunkIndex],e=this.layer.chunk[this.chunkIndex],i=t+e.from[this.rangeIndex]
if(this.from=i,this.to=t+e.to[this.rangeIndex],this.value=e.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}}setRangeIndex(t){if(t==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++
this.rangeIndex=0}else this.rangeIndex=t}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(t){return this.from-t.from||this.startSide-t.startSide||this.rank-t.rank||this.to-t.to||this.endSide-t.endSide}}class Yt{constructor(t){this.heap=t}static from(t,e=null,i=-1){let n=[]
for(let s=0;s<t.length;s++)for(let r=t[s];!r.isEmpty;r=r.nextLayer)r.maxPoint>=i&&n.push(new jt(r,e,i,s))
return 1==n.length?n[0]:new Yt(n)}get startSide(){return this.value?this.value.startSide:0}goto(t,e=-1e9){for(let i of this.heap)i.goto(t,e)
for(let t=this.heap.length>>1;t>=0;t--)Wt(this.heap,t)
return this.next(),this}forward(t,e){for(let i of this.heap)i.forward(t,e)
for(let t=this.heap.length>>1;t>=0;t--)Wt(this.heap,t);(this.to-t||this.value.endSide-e)<0&&this.next()}next(){if(0==this.heap.length)this.from=this.to=1e9,this.value=null,this.rank=-1
else{let t=this.heap[0]
this.from=t.from,this.to=t.to,this.value=t.value,this.rank=t.rank,t.value&&t.next(),Wt(this.heap,0)}}}function Wt(t,e){for(let i=t[e];;){let n=1+(e<<1)
if(n>=t.length)break
let s=t[n]
if(n+1<t.length&&s.compare(t[n+1])>=0&&(s=t[n+1],n++),i.compare(s)<0)break
t[n]=i,t[e]=s,e=n}}class Et{constructor(t,e,i){this.minPoint=i,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=Yt.from(t,e,i)}goto(t,e=-1e9){return this.cursor.goto(t,e),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=t,this.endSide=e,this.openStart=-1,this.next(),this}forward(t,e){for(;this.minActive>-1&&(this.activeTo[this.minActive]-t||this.active[this.minActive].endSide-e)<0;)this.removeActive(this.minActive)
this.cursor.forward(t,e)}removeActive(t){Dt(this.active,t),Dt(this.activeTo,t),Dt(this.activeRank,t),this.minActive=Ut(this.active,this.activeTo)}addActive(t){let e=0,{value:i,to:n,rank:s}=this.cursor
for(;e<this.activeRank.length&&(s-this.activeRank[e]||n-this.activeTo[e])>0;)e++
Lt(this.active,e,i),Lt(this.activeTo,e,n),Lt(this.activeRank,e,s),t&&Lt(t,e,this.cursor.from),this.minActive=Ut(this.active,this.activeTo)}next(){let t=this.to,e=this.point
this.point=null
let i=this.openStart<0?[]:null
for(;;){let n=this.minActive
if(n>-1&&(this.activeTo[n]-this.cursor.from||this.active[n].endSide-this.cursor.startSide)<0){if(this.activeTo[n]>t){this.to=this.activeTo[n],this.endSide=this.active[n].endSide
break}this.removeActive(n),i&&Dt(i,n)}else{if(!this.cursor.value){this.to=this.endSide=1e9
break}if(this.cursor.from>t){this.to=this.cursor.from,this.endSide=this.cursor.startSide
break}{let t=this.cursor.value
if(t.point){if(!(e&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)){this.point=t,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=t.endSide,this.cursor.next(),this.forward(this.to,this.endSide)
break}this.cursor.next()}else this.addActive(i),this.cursor.next()}}}if(i){this.openStart=0
for(let e=i.length-1;e>=0&&i[e]<t;e--)this.openStart++}}activeForPoint(t){if(!this.active.length)return this.active
let e=[]
for(let i=this.active.length-1;i>=0&&!(this.activeRank[i]<this.pointRank);i--)(this.activeTo[i]>t||this.activeTo[i]==t&&this.active[i].endSide>=this.point.endSide)&&e.push(this.active[i])
return e.reverse()}openEnd(t){let e=0
for(let i=this.activeTo.length-1;i>=0&&this.activeTo[i]>t;i--)e++
return e}}function zt(t,e,i,n,s,r){t.goto(e),i.goto(n)
let o=n+s,a=n,l=n-e,h=!!r.boundChange
for(let e=!1;;){let n=t.to+l-i.to,s=n||t.endSide-i.endSide,c=s<0?t.to+l:i.to,O=Math.min(c,o)
if(t.point||i.point?(t.point&&i.point&&Zt(t.point,i.point)&&qt(t.activeForPoint(t.to),i.activeForPoint(i.to))||r.comparePoint(a,O,t.point,i.point),e=!1):(e&&(r.boundChange(a),e=!1),O>a&&!qt(t.active,i.active)&&r.compareRange(a,O,t.active,i.active),h&&O<o&&(n||t.openEnd(c)!=i.openEnd(c))&&(e=!0)),c>o)break
a=c,s<=0&&t.next(),s>=0&&i.next()}}function qt(t,e){if(t.length!=e.length)return!1
for(let i=0;i<t.length;i++)if(t[i]!=e[i]&&!Zt(t[i],e[i]))return!1
return!0}function Dt(t,e){for(let i=e,n=t.length-1;i<n;i++)t[i]=t[i+1]
t.pop()}function Lt(t,e,i){for(let i=t.length-1;i>=e;i--)t[i+1]=t[i]
t[e]=i}function Ut(t,e){let i=-1,n=1e9
for(let s=0;s<e.length;s++)(e[s]-n||t[s].endSide-t[i].endSide)<0&&(i=s,n=e[s])
return i}function Bt(t,e,i=t.length){let n=0
for(let s=0;s<i&&s<t.length;)9==t.charCodeAt(s)?(n+=e-n%e,s++):(n++,s=v(t,s))
return n}const Vt="undefined"==typeof Symbol?"__ͼ":Symbol.for("ͼ"),Gt="undefined"==typeof Symbol?"__styleSet"+Math.floor(1e8*Math.random()):Symbol("styleSet"),It="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:{}
class Nt{constructor(t,e){this.rules=[]
let{finish:i}=e||{}
function n(t){return/^@/.test(t)?[t]:t.split(/,\s*/)}function s(t,e,r,o){let a=[],l=/^@(\w+)\b/.exec(t[0]),h=l&&"keyframes"==l[1]
if(l&&null==e)return r.push(t[0]+";")
for(let i in e){let o=e[i]
if(/&/.test(i))s(i.split(/,\s*/).map(e=>t.map(t=>e.replace(/&/,t))).reduce((t,e)=>t.concat(e)),o,r)
else if(o&&"object"==typeof o){if(!l)throw new RangeError("The value of a property ("+i+") should be a primitive value.")
s(n(i),o,a,h)}else null!=o&&a.push(i.replace(/_.*/,"").replace(/[A-Z]/g,t=>"-"+t.toLowerCase())+": "+o+";")}(a.length||h)&&r.push((!i||l||o?t:t.map(i)).join(", ")+" {"+a.join(" ")+"}")}for(let e in t)s(n(e),t[e],this.rules)}getRules(){return this.rules.join("\n")}static newName(){let t=It[Vt]||1
return It[Vt]=t+1,"ͼ"+t.toString(36)}static mount(t,e,i){let n=t[Gt],s=i&&i.nonce
n?s&&n.setNonce(s):n=new Ft(t,s),n.mount(Array.isArray(e)?e:[e],t)}}let Ht=new Map
class Ft{constructor(t,e){let i=t.ownerDocument||t,n=i.defaultView
if(!t.head&&t.adoptedStyleSheets&&n.CSSStyleSheet){let e=Ht.get(i)
if(e)return t[Gt]=e
this.sheet=new n.CSSStyleSheet,Ht.set(i,this)}else this.styleTag=i.createElement("style"),e&&this.styleTag.setAttribute("nonce",e)
this.modules=[],t[Gt]=this}mount(t,e){let i=this.sheet,n=0,s=0,r=!1
for(let e=0;e<t.length;e++){let o=t[e],a=this.modules.indexOf(o)
if(a<s&&a>-1&&(this.modules.splice(a,1),r=!0,s--,a=-1),-1==a){if(this.modules.splice(s++,0,o),r=!0,i)for(let t=0;t<o.rules.length;t++)i.insertRule(o.rules[t],n++)}else{for(;s<a;)n+=this.modules[s++].rules.length
n+=o.rules.length,s++}}if(i)e.adoptedStyleSheets.indexOf(this.sheet)<0&&(e.adoptedStyleSheets=[this.sheet,...e.adoptedStyleSheets])
else{if(r){let t=""
for(let e=0;e<this.modules.length;e++)t+=this.modules[e].getRules()+"\n"
this.styleTag.textContent=t}let t=e.head||e
this.styleTag.parentNode!=t&&t.insertBefore(this.styleTag,t.firstChild)}}setNonce(t){this.styleTag&&this.styleTag.getAttribute("nonce")!=t&&this.styleTag.setAttribute("nonce",t)}}for(var Kt={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},Jt={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},te="undefined"!=typeof navigator&&/Mac/.test(navigator.platform),ee="undefined"!=typeof navigator&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),ie=0;ie<10;ie++)Kt[48+ie]=Kt[96+ie]=String(ie)
for(ie=1;ie<=24;ie++)Kt[ie+111]="F"+ie
for(ie=65;ie<=90;ie++)Kt[ie]=String.fromCharCode(ie+32),Jt[ie]=String.fromCharCode(ie)
for(var ne in Kt)Jt.hasOwnProperty(ne)||(Jt[ne]=Kt[ne])
let se="undefined"!=typeof navigator?navigator:{userAgent:"",vendor:"",platform:""},re="undefined"!=typeof document?document:{documentElement:{style:{}}}
const oe=/Edge\/(\d+)/.exec(se.userAgent),ae=/MSIE \d/.test(se.userAgent),le=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(se.userAgent),he=!!(ae||le||oe),ce=!he&&/gecko\/(\d+)/i.test(se.userAgent),Oe=!he&&/Chrome\/(\d+)/.exec(se.userAgent),fe="webkitFontSmoothing"in re.documentElement.style,ue=!he&&/Apple Computer/.test(se.vendor),de=ue&&(/Mobile\/\w+/.test(se.userAgent)||se.maxTouchPoints>2)
var pe={mac:de||/Mac/.test(se.platform),windows:/Win/.test(se.platform),linux:/Linux|X11/.test(se.platform),ie:he,ie_version:ae?re.documentMode||6:le?+le[1]:oe?+oe[1]:0,gecko:ce,gecko_version:ce?+(/Firefox\/(\d+)/.exec(se.userAgent)||[0,0])[1]:0,chrome:!!Oe,chrome_version:Oe?+Oe[1]:0,ios:de,android:/Android\b/.test(se.userAgent),webkit:fe,webkit_version:fe?+(/\bAppleWebKit\/(\d+)/.exec(se.userAgent)||[0,0])[1]:0,safari:ue,safari_version:ue?+(/\bVersion\/(\d+(\.\d+)?)/.exec(se.userAgent)||[0,0])[1]:0,tabSize:null!=re.documentElement.style.tabSize?"tab-size":"-moz-tab-size"}
function ge(t,e){for(let i in t)"class"==i&&e.class?e.class+=" "+t.class:"style"==i&&e.style?e.style+=";"+t.style:e[i]=t[i]
return e}const me=Object.create(null)
function Qe(t,e,i){if(t==e)return!0
t||(t=me),e||(e=me)
let n=Object.keys(t),s=Object.keys(e)
if(n.length-0!=s.length-0)return!1
for(let r of n)if(r!=i&&(-1==s.indexOf(r)||t[r]!==e[r]))return!1
return!0}function we(t,e,i){let n=!1
if(e)for(let s in e)i&&s in i||(n=!0,"style"==s?t.style.cssText="":t.removeAttribute(s))
if(i)for(let s in i)e&&e[s]==i[s]||(n=!0,"style"==s?t.style.cssText=i[s]:t.setAttribute(s,i[s]))
return n}function be(t){let e=Object.create(null)
for(let i=0;i<t.attributes.length;i++){let n=t.attributes[i]
e[n.name]=n.value}return e}class ve{eq(t){return!1}updateDOM(t,e,i){return!1}compare(t){return this==t||this.constructor==t.constructor&&this.eq(t)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(t){return!0}coordsAt(t,e,i){return null}get isHidden(){return!1}get editable(){return!1}destroy(t){}}var Se=function(t){return t[t.Text=0]="Text",t[t.WidgetBefore=1]="WidgetBefore",t[t.WidgetAfter=2]="WidgetAfter",t[t.WidgetRange=3]="WidgetRange",t}(Se||(Se={}))
class xe extends Pt{constructor(t,e,i,n){super(),this.startSide=t,this.endSide=e,this.widget=i,this.spec=n}get heightRelevant(){return!1}static mark(t){return new ke(t)}static widget(t){let e=Math.max(-1e4,Math.min(1e4,t.side||0)),i=!!t.block
return e+=i&&!t.inlineOrder?e>0?3e8:-4e8:e>0?1e8:-1e8,new $e(t,e,e,i,t.widget||null,!1)}static replace(t){let e,i,n=!!t.block
if(t.isBlockGap)e=-5e8,i=4e8
else{let{start:s,end:r}=Pe(t,n)
e=(s?n?-3e8:-1:5e8)-1,i=1+(r?n?2e8:1:-6e8)}return new $e(t,e,i,n,t.widget||null,!0)}static line(t){return new ye(t)}static set(t,e=!1){return Mt.of(t,e)}hasHeight(){return!!this.widget&&this.widget.estimatedHeight>-1}}xe.none=Mt.empty
class ke extends xe{constructor(t){let{start:e,end:i}=Pe(t)
super(e?-1:5e8,i?1:-6e8,null,t),this.tagName=t.tagName||"span",this.attrs=t.class&&t.attributes?ge(t.attributes,{class:t.class}):t.class?{class:t.class}:t.attributes||me}eq(t){return this==t||t instanceof ke&&this.tagName==t.tagName&&Qe(this.attrs,t.attrs)}range(t,e=t){if(t>=e)throw new RangeError("Mark decorations may not be empty")
return super.range(t,e)}}ke.prototype.point=!1
class ye extends xe{constructor(t){super(-2e8,-2e8,null,t)}eq(t){return t instanceof ye&&this.spec.class==t.spec.class&&Qe(this.spec.attributes,t.spec.attributes)}range(t,e=t){if(e!=t)throw new RangeError("Line decoration ranges must be zero-length")
return super.range(t,e)}}ye.prototype.mapMode=k.TrackBefore,ye.prototype.point=!0
class $e extends xe{constructor(t,e,i,n,s,r){super(e,i,s,t),this.block=n,this.isReplace=r,this.mapMode=n?e<=0?k.TrackBefore:k.TrackAfter:k.TrackDel}get type(){return this.startSide!=this.endSide?Se.WidgetRange:this.startSide<=0?Se.WidgetBefore:Se.WidgetAfter}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(t){return t instanceof $e&&(e=this.widget,i=t.widget,e==i||!!(e&&i&&e.compare(i)))&&this.block==t.block&&this.startSide==t.startSide&&this.endSide==t.endSide
var e,i}range(t,e=t){if(this.isReplace&&(t>e||t==e&&this.startSide>0&&this.endSide<=0))throw new RangeError("Invalid range for replacement decoration")
if(!this.isReplace&&e!=t)throw new RangeError("Widget decorations can only have zero-length ranges")
return super.range(t,e)}}function Pe(t,e=!1){let{inclusiveStart:i,inclusiveEnd:n}=t
return null==i&&(i=t.inclusive),null==n&&(n=t.inclusive),{start:null!=i?i:e,end:null!=n?n:e}}function Ze(t,e,i,n=0){let s=i.length-1
s>=0&&i[s]+n>=t?i[s]=Math.max(i[s],e):i.push(t,e)}$e.prototype.point=!0
class Xe extends Pt{constructor(t,e,i){super(),this.tagName=t,this.attributes=e,this.rank=i}eq(t){return t==this||t instanceof Xe&&this.tagName==t.tagName&&Qe(this.attributes,t.attributes)}static create(t){return new Xe(t.tagName,t.attributes||me,null==t.rank?50:Math.max(0,Math.min(t.rank,100)))}static set(t,e=!1){return Mt.of(t,e)}}function Ae(t){let e
return e=11==t.nodeType?t.getSelection?t:t.ownerDocument:t,e.getSelection()}function Te(t,e){return!!e&&(t==e||t.contains(1!=e.nodeType?e.parentNode:e))}function Me(t,e){if(!e.anchorNode)return!1
try{return Te(t,e.anchorNode)}catch(t){return!1}}function Re(t){return 3==t.nodeType?Ne(t,0,t.nodeValue.length).getClientRects():1==t.nodeType?t.getClientRects():[]}function Ce(t,e,i,n){return!!i&&(Ye(t,e,i,n,-1)||Ye(t,e,i,n,1))}function _e(t){for(var e=0;;e++)if(!(t=t.previousSibling))return e}function je(t){return 1==t.nodeType&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName)}function Ye(t,e,i,n,s){for(;;){if(t==i&&e==n)return!0
if(e==(s<0?0:We(t))){if("DIV"==t.nodeName)return!1
let i=t.parentNode
if(!i||1!=i.nodeType)return!1
e=_e(t)+(s<0?0:1),t=i}else{if(1!=t.nodeType)return!1
if(1==(t=t.childNodes[e+(s<0?-1:0)]).nodeType&&"false"==t.contentEditable)return!1
e=s<0?We(t):0}}}function We(t){return 3==t.nodeType?t.nodeValue.length:t.childNodes.length}function Ee(t,e){let{left:i,right:n}=t
if(i==n)return t
let s=e?i:n
return{left:s,right:s,top:t.top,bottom:t.bottom}}function ze(t){let e=t.visualViewport
return e?{left:0,right:e.width,top:0,bottom:e.height}:{left:0,right:t.innerWidth,top:0,bottom:t.innerHeight}}function qe(t,e){let i=e.width/t.offsetWidth,n=e.height/t.offsetHeight
return(i>.995&&i<1.005||!isFinite(i)||Math.abs(e.width-t.offsetWidth)<1)&&(i=1),(n>.995&&n<1.005||!isFinite(n)||Math.abs(e.height-t.offsetHeight)<1)&&(n=1),{scaleX:i,scaleY:n}}function De(t,e=!0){let i=t.ownerDocument,n=null,s=null
for(let r=t.parentNode;r&&(r!=i.body&&(e&&!n||!s));)if(1==r.nodeType)!s&&r.scrollHeight>r.clientHeight&&(s=r),e&&!n&&r.scrollWidth>r.clientWidth&&(n=r),r=r.assignedSlot||r.parentNode
else{if(11!=r.nodeType)break
r=r.host}return{x:n,y:s}}Xe.prototype.startSide=Xe.prototype.endSide=-1
class Le{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(t){return this.anchorNode==t.anchorNode&&this.anchorOffset==t.anchorOffset&&this.focusNode==t.focusNode&&this.focusOffset==t.focusOffset}setRange(t){let{anchorNode:e,focusNode:i}=t
this.set(e,Math.min(t.anchorOffset,e?We(e):0),i,Math.min(t.focusOffset,i?We(i):0))}set(t,e,i,n){this.anchorNode=t,this.anchorOffset=e,this.focusNode=i,this.focusOffset=n}}function Ue(t){let e=[]
for(let i=t;i;i=11==i.nodeType?i.host:i.parentNode)1==i.nodeType&&e.push({node:i,left:i.scrollLeft,top:i.scrollTop})
return e}function Be(t,e=!0){for(let{node:i,left:n,top:s}of t)e&&i.scrollTop!=s&&(i.scrollTop=s),i.scrollLeft!=n&&(i.scrollLeft=n)}let Ve,Ge=null
function Ie(t){if(t.setActive)return t.setActive()
if(Ge)return t.focus(Ge)
let e=Ue(t)
t.focus(null==Ge?{get preventScroll(){return Ge={preventScroll:!0},!0}}:void 0),Ge||(Ge=!1,Be(e))}function Ne(t,e,i=e){let n=Ve||(Ve=document.createRange())
return n.setEnd(t,i),n.setStart(t,e),n}function He(t,e,i,n){let s={key:e,code:e,keyCode:i,which:i,cancelable:!0}
n&&({altKey:s.altKey,ctrlKey:s.ctrlKey,shiftKey:s.shiftKey,metaKey:s.metaKey}=n)
let r=new KeyboardEvent("keydown",s)
r.synthetic=!0,t.dispatchEvent(r)
let o=new KeyboardEvent("keyup",s)
return o.synthetic=!0,t.dispatchEvent(o),r.defaultPrevented||o.defaultPrevented}function Fe(t){return t instanceof Window?t.pageYOffset>Math.max(0,t.document.documentElement.scrollHeight-t.innerHeight-4):t.scrollTop>Math.max(1,t.scrollHeight-t.clientHeight-4)}function Ke(t,e){for(let i=t,n=e;;){if(3==i.nodeType&&n>0)return{node:i,offset:n}
if(1==i.nodeType&&n>0){if("false"==i.contentEditable)return null
i=i.childNodes[n-1],n=We(i)}else{if(!i.parentNode||je(i))return null
n=_e(i),i=i.parentNode}}}function Je(t,e){for(let i=t,n=e;;){if(3==i.nodeType&&n<i.nodeValue.length)return{node:i,offset:n}
if(1==i.nodeType&&n<i.childNodes.length){if("false"==i.contentEditable)return null
i=i.childNodes[n],n=0}else{if(!i.parentNode||je(i))return null
n=_e(i)+1,i=i.parentNode}}}pe.safari&&pe.safari_version>=26&&(Ge=!1)
class ti{constructor(t,e,i=!0){this.node=t,this.offset=e,this.precise=i}static before(t,e){return new ti(t.parentNode,_e(t),e)}static after(t,e){return new ti(t.parentNode,_e(t)+1,e)}}var ei=function(t){return t[t.LTR=0]="LTR",t[t.RTL=1]="RTL",t}(ei||(ei={}))
const ii=ei.LTR,ni=ei.RTL
function si(t){let e=[]
for(let i=0;i<t.length;i++)e.push(1<<+t[i])
return e}const ri=si("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),oi=si("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),ai=Object.create(null),li=[]
for(let t of["()","[]","{}"]){let e=t.charCodeAt(0),i=t.charCodeAt(1)
ai[e]=i,ai[i]=-e}function hi(t){return t<=247?ri[t]:1424<=t&&t<=1524?2:1536<=t&&t<=1785?oi[t-1536]:1774<=t&&t<=2220?4:8192<=t&&t<=8204?256:64336<=t&&t<=65023?4:1}const ci=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/
class Oi{get dir(){return this.level%2?ni:ii}constructor(t,e,i){this.from=t,this.to=e,this.level=i}side(t,e){return this.dir==e==t?this.to:this.from}forward(t,e){return t==(this.dir==e)}static find(t,e,i,n){let s=-1
for(let r=0;r<t.length;r++){let o=t[r]
if(o.from<=e&&o.to>=e){if(o.level==i)return r;(s<0||(0!=n?n<0?o.from<e:o.to>e:t[s].level>o.level))&&(s=r)}}if(s<0)throw new RangeError("Index out of range")
return s}}function fi(t,e){if(t.length!=e.length)return!1
for(let i=0;i<t.length;i++){let n=t[i],s=e[i]
if(n.from!=s.from||n.to!=s.to||n.direction!=s.direction||!fi(n.inner,s.inner))return!1}return!0}const ui=[]
function di(t,e,i,n,s,r,o){let a=n%2?2:1
if(n%2==s%2)for(let l=e,h=0;l<i;){let e=!0,c=!1
if(h==r.length||l<r[h].from){let t=ui[l]
t!=a&&(e=!1,c=16==t)}let O=e||1!=a?null:[],f=e?n:n+1,u=l
t:for(;;)if(h<r.length&&u==r[h].from){if(c)break t
let d=r[h]
if(!e)for(let t=d.to,e=h+1;;){if(t==i)break t
if(!(e<r.length&&r[e].from==t)){if(ui[t]==a)break t
break}t=r[e++].to}if(h++,O)O.push(d)
else{d.from>l&&o.push(new Oi(l,d.from,f)),pi(t,d.direction==ii!=!(f%2)?n+1:n,s,d.inner,d.from,d.to,o),l=d.to}u=d.to}else{if(u==i||(e?ui[u]!=a:ui[u]==a))break
u++}O?di(t,l,u,n+1,s,O,o):l<u&&o.push(new Oi(l,u,f)),l=u}else for(let l=i,h=r.length;l>e;){let i=!0,c=!1
if(!h||l>r[h-1].to){let t=ui[l-1]
t!=a&&(i=!1,c=16==t)}let O=i||1!=a?null:[],f=i?n:n+1,u=l
t:for(;;)if(h&&u==r[h-1].to){if(c)break t
let d=r[--h]
if(!i)for(let t=d.from,i=h;;){if(t==e)break t
if(!i||r[i-1].to!=t){if(ui[t-1]==a)break t
break}t=r[--i].from}if(O)O.push(d)
else{d.to<l&&o.push(new Oi(d.to,l,f)),pi(t,d.direction==ii!=!(f%2)?n+1:n,s,d.inner,d.from,d.to,o),l=d.from}u=d.from}else{if(u==e||(i?ui[u-1]!=a:ui[u-1]==a))break
u--}O?di(t,u,l,n+1,s,O,o):u<l&&o.push(new Oi(u,l,f)),l=u}}function pi(t,e,i,n,s,r,o){let a=e%2?2:1
!function(t,e,i,n,s){for(let r=0;r<=n.length;r++){let o=r?n[r-1].to:e,a=r<n.length?n[r].from:i,l=r?256:s
for(let e=o,i=l,n=l;e<a;e++){let s=hi(t.charCodeAt(e))
512==s?s=i:8==s&&4==n&&(s=16),ui[e]=4==s?2:s,7&s&&(n=s),i=s}for(let t=o,e=l,n=l;t<a;t++){let s=ui[t]
if(128==s)t<a-1&&e==ui[t+1]&&24&e?s=ui[t]=e:ui[t]=256
else if(64==s){let s=t+1
for(;s<a&&64==ui[s];)s++
let r=t&&8==e||s<i&&8==ui[s]?1==n?1:8:256
for(let e=t;e<s;e++)ui[e]=r
t=s-1}else 8==s&&1==n&&(ui[t]=1)
e=s,7&s&&(n=s)}}}(t,s,r,n,a),function(t,e,i,n,s){let r=1==s?2:1
for(let o=0,a=0,l=0;o<=n.length;o++){let h=o?n[o-1].to:e,c=o<n.length?n[o].from:i
for(let e,i,n,o=h;o<c;o++)if(i=ai[e=t.charCodeAt(o)])if(i<0){for(let t=a-3;t>=0;t-=3)if(li[t+1]==-i){let e=li[t+2],i=2&e?s:4&e?1&e?r:s:0
i&&(ui[o]=ui[li[t]]=i),a=t
break}}else{if(189==li.length)break
li[a++]=o,li[a++]=e,li[a++]=l}else if(2==(n=ui[o])||1==n){let t=n==s
l=t?0:1
for(let e=a-3;e>=0;e-=3){let i=li[e+2]
if(2&i)break
if(t)li[e+2]|=2
else{if(4&i)break
li[e+2]|=4}}}}}(t,s,r,n,a),function(t,e,i,n){for(let s=0,r=n;s<=i.length;s++){let o=s?i[s-1].to:t,a=s<i.length?i[s].from:e
for(let l=o;l<a;){let o=ui[l]
if(256==o){let o=l+1
for(;;)if(o==a){if(s==i.length)break
o=i[s++].to,a=s<i.length?i[s].from:e}else{if(256!=ui[o])break
o++}let h=1==r,c=h==(1==(o<e?ui[o]:n))?h?1:2:n
for(let e=o,n=s,r=n?i[n-1].to:t;e>l;)e==r&&(e=i[--n].from,r=n?i[n-1].to:t),ui[--e]=c
l=o}else r=o,l++}}}(s,r,n,a),di(t,s,r,e,i,n,o)}function gi(t){return[new Oi(0,t,0)]}let mi=""
function Qi(t,e,i,n,s){var r
if(!t.length)return null
let o,a=n.head-t.from
if(n.head==t.from&&n.assoc<0){if(!s)return null
a=e[o=0].side(!1,i)}else if(n.head==t.to&&n.assoc>0){if(s)return null
a=e[o=e.length-1].side(!0,i)}else o=Oi.find(e,a,null!==(r=n.bidiLevel)&&void 0!==r?r:-1,n.assoc)
let l=e[o],h=l.side(s,i)
if(a==h){let t=o+=s?1:-1
if(t<0||t>=e.length)return null
l=e[o=t],a=l.side(!s,i),h=l.side(s,i)}let c=v(t.text,a,l.forward(s,i));(c<l.from||c>l.to)&&(c=h),mi=t.text.slice(Math.min(a,c),Math.max(a,c))
let O=o==(s?e.length-1:0)?null:e[o+(s?1:-1)]
if(c==h){if(!O)return s?C.cursor(t.to,1):C.cursor(t.from,-1)
if(O.level+(s?0:1)<l.level)return C.cursor(O.side(!s,i)+t.from,O.forward(s,i)?1:-1,O.level)}return C.cursor(c+t.from,l.forward(s,i)?-1:1,l.level)}function wi(t,e,i){for(let n=e;n<i;n++){let e=hi(t.charCodeAt(n))
if(1==e)return ii
if(2==e||4==e)return ni}return ii}const bi=Y.define(),vi=Y.define(),Si=Y.define(),xi=Y.define(),ki=Y.define(),yi=Y.define(),$i=Y.define(),Pi=Y.define(),Zi=Y.define(),Xi=Y.define({combine:t=>t.some(t=>t)}),Ai=Y.define({combine:t=>t.some(t=>t)}),Ti=Y.define()
class Mi{constructor(t,e,i,n,s,r=!1){this.range=t,this.y=e,this.x=i,this.yMargin=n,this.xMargin=s,this.isSnapshot=r}map(t){return t.empty?this:new Mi(this.range.map(t),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(t){return this.range.to<=t.doc.length?this:new Mi(C.cursor(t.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}}const Ri=ut.define({map:(t,e)=>t.map(e)}),Ci=ut.define()
function _i(t,e,i){let n=t.facet(xi)
n.length?n[0](e):window.onerror&&window.onerror(String(e),i,void 0,void 0,e)||(i?console.error(i+":",e):console.error(e))}const ji=Y.define({combine:t=>!t.length||t[0]})
let Yi=0
const Wi=Y.define({combine:t=>t.filter((e,i)=>{for(let n=0;n<i;n++)if(t[n].plugin==e.plugin)return!1
return!0})})
class Ei{constructor(t,e,i,n,s){this.id=t,this.create=e,this.domEventHandlers=i,this.domEventObservers=n,this.baseExtensions=s(this),this.extension=this.baseExtensions.concat(Wi.of({plugin:this,arg:void 0}))}of(t){return this.baseExtensions.concat(Wi.of({plugin:this,arg:t}))}static define(t,e){const{eventHandlers:i,eventObservers:n,provide:s,decorations:r}=e||{}
return new Ei(Yi++,t,i,n,t=>{let e=[]
return r&&e.push(Li.of(e=>{let i=e.plugin(t)
return i?r(i):xe.none})),s&&e.push(s(t)),e})}static fromClass(t,e){return Ei.define((e,i)=>new t(e,i),e)}}class zi{constructor(t){this.spec=t,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(t){if(this.value){if(this.mustUpdate){let t=this.mustUpdate
if(this.mustUpdate=null,this.value.update)try{this.value.update(t)}catch(e){if(_i(t.state,e,"CodeMirror plugin crashed"),this.value.destroy)try{this.value.destroy()}catch(t){}this.deactivate()}}}else if(this.spec)try{this.value=this.spec.plugin.create(t,this.spec.arg)}catch(e){_i(t.state,e,"CodeMirror plugin crashed"),this.deactivate()}return this}destroy(t){var e
if(null===(e=this.value)||void 0===e?void 0:e.destroy)try{this.value.destroy()}catch(e){_i(t.state,e,"CodeMirror plugin crashed")}}deactivate(){this.spec=this.value=null}}const qi=Y.define(),Di=Y.define(),Li=Y.define(),Ui=Y.define(),Bi=Y.define(),Vi=Y.define(),Gi=Y.define()
function Ii(t,e){let i=t.state.facet(Gi)
if(!i.length)return i
let n=i.map(e=>e instanceof Function?e(t):e),s=[]
return Mt.spans(n,e.from,e.to,{point(){},span(t,i,n,r){let o=t-e.from,a=i-e.from,l=s
for(let t=n.length-1;t>=0;t--,r--){let i,s=n[t].spec.bidiIsolate
if(null==s&&(s=wi(e.text,o,a)),r>0&&l.length&&(i=l[l.length-1]).to==o&&i.direction==s)i.to=a,l=i.inner
else{let t={from:o,to:a,direction:s,inner:[]}
l.push(t),l=t.inner}}}}),s}const Ni=Y.define()
function Hi(t){let e=0,i=0,n=0,s=0
for(let r of t.state.facet(Ni)){let o=r(t)
o&&(null!=o.left&&(e=Math.max(e,o.left)),null!=o.right&&(i=Math.max(i,o.right)),null!=o.top&&(n=Math.max(n,o.top)),null!=o.bottom&&(s=Math.max(s,o.bottom)))}return{left:e,right:i,top:n,bottom:s}}const Fi=Y.define()
class Ki{constructor(t,e,i,n){this.fromA=t,this.toA=e,this.fromB=i,this.toB=n}join(t){return new Ki(Math.min(this.fromA,t.fromA),Math.max(this.toA,t.toA),Math.min(this.fromB,t.fromB),Math.max(this.toB,t.toB))}addToSet(t){let e=t.length,i=this
for(;e>0;e--){let n=t[e-1]
if(!(n.fromA>i.toA)){if(n.toA<i.fromA)break
i=i.join(n),t.splice(e-1,1)}}return t.splice(e,0,i),t}static extendWithRanges(t,e){if(0==e.length)return t
let i=[]
for(let n=0,s=0,r=0;;){let o=n<t.length?t[n].fromB:1e9,a=s<e.length?e[s]:1e9,l=Math.min(o,a)
if(1e9==l)break
let h=l+r,c=l,O=h
for(;;)if(s<e.length&&e[s]<=c){let i=e[s+1]
s+=2,c=Math.max(c,i)
for(let e=n;e<t.length&&t[e].fromB<=c;e++)r=t[e].toA-t[e].toB
O=Math.max(O,i+r)}else{if(!(n<t.length&&t[n].fromB<=c))break
{let e=t[n++]
c=Math.max(c,e.toB),O=Math.max(O,e.toA),r=e.toA-e.toB}}i.push(new Ki(h,O,l,c))}return i}}class Ji{constructor(t,e,i){this.view=t,this.state=e,this.transactions=i,this.flags=0,this.startState=t.state,this.changes=$.empty(this.startState.doc.length)
for(let t of i)this.changes=this.changes.compose(t.changes)
let n=[]
this.changes.iterChangedRanges((t,e,i,s)=>n.push(new Ki(t,e,i,s))),this.changedRanges=n}static create(t,e,i){return new Ji(t,e,i)}get viewportChanged(){return(4&this.flags)>0}get viewportMoved(){return(8&this.flags)>0}get heightChanged(){return(2&this.flags)>0}get geometryChanged(){return this.docChanged||(18&this.flags)>0}get focusChanged(){return(1&this.flags)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(t=>t.selection)}get empty(){return 0==this.flags&&0==this.transactions.length}}const tn=[]
class en{constructor(t,e,i=0){this.dom=t,this.length=e,this.flags=i,this.parent=null,t.cmTile=this}get breakAfter(){return 1&this.flags}get children(){return tn}isWidget(){return!1}get isHidden(){return!1}isComposite(){return!1}isLine(){return!1}isText(){return!1}isBlock(){return!1}get domAttrs(){return null}sync(t){if(this.flags|=2,4&this.flags){this.flags&=-5
let t=this.domAttrs
t&&function(t,e){for(let i=t.attributes.length-1;i>=0;i--){let n=t.attributes[i].name
null==e[n]&&t.removeAttribute(n)}for(let i in e){let n=e[i]
"style"==i?t.style.cssText=n:t.getAttribute(i)!=n&&t.setAttribute(i,n)}}(this.dom,t)}}toString(){return this.constructor.name+(this.children.length?`(${this.children})`:"")+(this.breakAfter?"#":"")}destroy(){this.parent=null}setDOM(t){this.dom=t,t.cmTile=this}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(t,e=this.posAtStart){let i=e
for(let e of this.children){if(e==t)return i
i+=e.length+e.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(t){return this.posBefore(t)+t.length}covers(t){return!0}coordsIn(t,e,i){return null}domPosFor(t,e){let i=_e(this.dom),n=this.length?t>0:e>0
return new ti(this.parent.dom,i+(n?1:0),0==t||t==this.length)}markDirty(t){this.flags&=-3,t&&(this.flags|=4),this.parent&&2&this.parent.flags&&this.parent.markDirty(!1)}get overrideDOMText(){return null}get root(){for(let t=this;t;t=t.parent)if(t instanceof rn)return t
return null}static get(t){return t.cmTile}}class nn extends en{constructor(t){super(t,0),this._children=[]}isComposite(){return!0}get children(){return this._children}get lastChild(){return this.children.length?this.children[this.children.length-1]:null}append(t){this.children.push(t),t.parent=this}sync(t){if(2&this.flags)return
super.sync(t)
let e,i=this.dom,n=null,s=(null==t?void 0:t.node)==i?t:null,r=0
for(let o of this.children){if(o.sync(t),r+=o.length+o.breakAfter,e=n?n.nextSibling:i.firstChild,s&&e!=o.dom&&(s.written=!0),o.dom.parentNode==i)for(;e&&e!=o.dom;)e=sn(e)
else i.insertBefore(o.dom,e)
n=o.dom}for(e=n?n.nextSibling:i.firstChild,s&&e&&(s.written=!0);e;)e=sn(e)
this.length=r}}function sn(t){let e=t.nextSibling
return t.parentNode.removeChild(t),e}class rn extends nn{constructor(t,e){super(e),this.view=t}owns(t){for(;t;t=t.parent)if(t==this)return!0
return!1}isBlock(){return!0}nearest(t){for(;;){if(!t)return null
let e=en.get(t)
if(e&&this.owns(e))return e
t=t.parentNode}}blockTiles(t){for(let e=[],i=this,n=0,s=0;;)if(n==i.children.length){if(!e.length)return
i=i.parent,i.breakAfter&&s++,n=e.pop()}else{let r=i.children[n++]
if(r instanceof on)e.push(n),i=r,n=0
else{let e=s+r.length,i=t(r,s)
if(void 0!==i)return i
s=e+r.breakAfter}}}resolveBlock(t,e){let i,n,s=-1,r=-1
if(this.blockTiles((o,a)=>{let l=a+o.length
if(t>=a&&t<=l){if(o.isWidget()&&e>=-1&&e<=1){if(32&o.flags)return!0
16&o.flags&&(i=void 0)}(a<t||t==l&&(e<-1?o.length:o.covers(1)))&&(!i||!o.isWidget()&&i.isWidget())&&(i=o,s=t-a),(l>t||t==a&&(e>1?o.length:o.covers(-1)))&&(!n||!o.isWidget()&&n.isWidget())&&(n=o,r=t-a)}}),!i&&!n)throw new Error("No tile at position "+t)
return i&&e<0||!n?{tile:i,offset:s}:{tile:n,offset:r}}}class on extends nn{constructor(t,e){super(t),this.wrapper=e}isBlock(){return!0}covers(t){return!!this.children.length&&(t<0?this.children[0].covers(-1):this.lastChild.covers(1))}get domAttrs(){return this.wrapper.attributes}static of(t,e){let i=new on(e||document.createElement(t.tagName),t)
return e||(i.flags|=4),i}}class an extends nn{constructor(t,e){super(t),this.attrs=e}isLine(){return!0}static start(t,e,i){let n=new an(e||document.createElement("div"),t)
return e&&i||(n.flags|=4),n}get domAttrs(){return this.attrs}resolveInline(t,e,i){let n=null,s=-1,r=null,o=-1
!function t(a,l){for(let h=0,c=0;h<a.children.length&&c<=l;h++){let O=a.children[h],f=c+O.length
f>=l&&(O.isComposite()?t(O,l-c):(!r||r.isHidden&&(e>0&&!(32&r.flags)||i&&ln(r,O)))&&(f>l||32&O.flags&&e<=1)?(r=O,o=l-c):(c<l||16&O.flags&&!O.isHidden&&e>=-1)&&(n=O,s=l-c)),c=f}}(this,t)
let a=(e<0?n:r)||n||r
return a?{tile:a,offset:a==n?s:o}:null}coordsIn(t,e,i){let n=this.resolveInline(t,e,!0)
return n?n.tile.coordsIn(Math.max(0,n.offset),e,i):function(t){let e=t.dom.lastChild
if(!e)return t.dom.getBoundingClientRect()
let i=Re(e)
return i[i.length-1]||null}(this)}domIn(t,e){let i=this.resolveInline(t,e)
if(i){let{tile:t,offset:n}=i
if(this.dom.contains(t.dom))return t.isText()?new ti(t.dom,Math.min(t.dom.nodeValue.length,n)):t.domPosFor(n,16&t.flags?1:32&t.flags?-1:e)
let s=i.tile.parent,r=!1
for(let t of s.children){if(r)return new ti(t.dom,0)
t==i.tile&&(r=!0)}}return new ti(this.dom,0)}}function ln(t,e){let i=t.coordsIn(0,1),n=e.coordsIn(0,1)
return i&&n&&n.top<i.bottom}class hn extends nn{constructor(t,e){super(t),this.mark=e}get domAttrs(){return this.mark.attrs}static of(t,e){let i=new hn(e||document.createElement(t.tagName),t)
return e||(i.flags|=4),i}}class cn extends en{constructor(t,e){super(t,e.length),this.text=e}sync(t){2&this.flags||(super.sync(t),this.dom.nodeValue!=this.text&&(t&&t.node==this.dom&&(t.written=!0),this.dom.nodeValue=this.text))}isText(){return!0}toString(){return JSON.stringify(this.text)}coordsIn(t,e,i){let n=this.dom.nodeValue.length
t>n&&(t=n)
let s=t,r=t,o=0
0==t&&e<0||t==n&&e>=0?pe.chrome||pe.gecko||(t?(s--,o=1):r<n&&(r++,o=-1)):e<0?s--:r<n&&r++
let a=Ne(this.dom,s,r).getClientRects()
if(!a.length)return null
let l=a[(o?o<0:e>=0)?0:a.length-1]
return pe.safari&&!o&&0==l.width&&(l=Array.prototype.find.call(a,t=>t.width)||l),null==i?l:Ee(l,(o?o>0:e<0)==i)}static of(t,e){let i=new cn(e||document.createTextNode(t),t)
return e||(i.flags|=2),i}}class On extends en{constructor(t,e,i,n){super(t,e,n),this.widget=i}isWidget(){return!0}get isHidden(){return this.widget.isHidden}covers(t){return!(48&this.flags)&&(this.flags&(t<0?64:128))>0}coordsIn(t,e){return this.coordsInWidget(t,e,!1)}coordsInWidget(t,e,i){let n=this.widget.coordsAt(this.dom,t,e)
if(n)return n
if(i)return Ee(this.dom.getBoundingClientRect(),this.length?0==t:e<=0)
{let e=this.dom.getClientRects(),i=null
if(!e.length)return null
let n=!!(16&this.flags)||!(32&this.flags)&&t>0
for(let s=n?e.length-1:0;i=e[s],!(t>0?0==s:s==e.length-1||i.top<i.bottom);s+=n?-1:1);return Ee(i,!n)}}get overrideDOMText(){if(!this.length)return O.empty
let{root:t}=this
if(!t)return O.empty
let e=this.posAtStart
return t.view.state.doc.slice(e,e+this.length)}destroy(){super.destroy(),this.widget.destroy(this.dom)}static of(t,e,i,n,s){return s||(s=t.toDOM(e),t.editable||(s.contentEditable="false")),new On(s,i,t,n)}}class fn extends en{constructor(t){let e=document.createElement("img")
e.className="cm-widgetBuffer",e.setAttribute("aria-hidden","true"),super(e,0,t)}get isHidden(){return!0}get overrideDOMText(){return O.empty}coordsIn(t,e,i){let n=this.dom.getBoundingClientRect()
return null==i?n:Ee(n,e>0==i)}}class un{constructor(t){this.index=0,this.beforeBreak=!1,this.parents=[],this.tile=t}advance(t,e,i){let{tile:n,index:s,beforeBreak:r,parents:o}=this
for(;t||e>0;)if(n.isComposite())if(r){if(!t)break
i&&i.break(),t--,r=!1}else if(s==n.children.length){if(!t&&!o.length)break
i&&i.leave(n),r=!!n.breakAfter,({tile:n,index:s}=o.pop()),s++}else{let a=n.children[s],l=a.breakAfter
!(e>0?a.length<=t:a.length<t)||i&&!1===i.skip(a,0,a.length)&&a.isComposite?(o.push({tile:n,index:s}),n=a,s=0,i&&a.isComposite()&&i.enter(a)):(r=!!l,s++,t-=a.length)}else{let e=n.length
if(s<e&&t){let r=Math.min(t,e-s)
i&&i.skip(n,s,s+r),t-=r,s+=r}if(s==e)r=!!n.breakAfter,({tile:n,index:s}=o.pop()),s++
else if(!t)break}return this.tile=n,this.index=s,this.beforeBreak=r,this}get root(){return this.parents.length?this.parents[0].tile:this.tile}}class dn{constructor(t,e,i,n){this.from=t,this.to=e,this.wrapper=i,this.rank=n}}class pn{constructor(t,e,i){this.cache=t,this.root=e,this.blockWrappers=i,this.curLine=null,this.lastBlock=null,this.afterWidget=null,this.pos=0,this.wrappers=[],this.wrapperPos=0}addText(t,e,i,n){var s
this.flushBuffer()
let r=this.ensureMarks(e,i),o=r.lastChild
if(o&&o.isText()&&!(8&o.flags)&&o.length+t.length<512){this.cache.reused.set(o,2),(r.children[r.children.length-1]=new cn(o.dom,o.text+t)).parent=r}else r.append(n||cn.of(t,null===(s=this.cache.find(cn))||void 0===s?void 0:s.dom))
this.pos+=t.length,this.afterWidget=null}addComposition(t,e){let i=this.curLine
i.dom!=e.line.dom&&(i.setDOM(this.cache.reused.has(e.line)?Sn(e.line.dom):e.line.dom),this.cache.reused.set(e.line,2))
let n=i
for(let t=e.marks.length-1;t>=0;t--){let i=e.marks[t],s=n.lastChild
if(s instanceof hn&&s.mark.eq(i.mark))s.dom!=i.dom&&s.setDOM(Sn(i.dom)),n=s
else{let{dom:t}=i
if(this.cache.reused.get(i)){en.get(i.dom)&&(t=Sn(i.dom))}let e=hn.of(i.mark,t)
n.append(e),n=e}this.cache.reused.set(i,2)}let s=en.get(t.text)
s&&this.cache.reused.set(s,2)
let r=new cn(t.text,t.text.nodeValue)
r.flags|=8,this.pos=t.range.toB,n.append(r)}addInlineWidget(t,e,i){let n=this.afterWidget&&48&t.flags&&(48&this.afterWidget.flags)==(48&t.flags)
n||this.flushBuffer()
let s=this.ensureMarks(e,i)
n||16&t.flags||s.append(this.getBuffer(1)),s.append(t),this.pos+=t.length,this.afterWidget=t}addMark(t,e,i){this.flushBuffer(),this.ensureMarks(e,i).append(t),this.pos+=t.length,this.afterWidget=null}addBlockWidget(t){this.getBlockPos().append(t),this.pos+=t.length,this.lastBlock=t,this.endLine()}continueWidget(t){(this.afterWidget||this.lastBlock).length+=t,this.pos+=t}addLineStart(t,e){var i
t||(t=vn)
let n=an.start(t,e||(null===(i=this.cache.find(an))||void 0===i?void 0:i.dom),!!e)
this.getBlockPos().append(this.lastBlock=this.curLine=n)}addLine(t){this.getBlockPos().append(t),this.pos+=t.length,this.lastBlock=t,this.endLine()}addBreak(){this.lastBlock.flags|=1,this.endLine(),this.pos++}addLineStartIfNotCovered(t){this.blockPosCovered()||this.addLineStart(t)}ensureLine(t){this.curLine||this.addLineStart(t)}ensureMarks(t,e){var i
let n=this.curLine
for(let s=t.length-1;s>=0;s--){let r,o=t[s]
if(e>0&&(r=n.lastChild)&&r instanceof hn&&r.mark.eq(o))n=r,e--
else{let t=hn.of(o,null===(i=this.cache.find(hn,t=>t.mark.eq(o)))||void 0===i?void 0:i.dom)
n.append(t),n=t,e=0}}return n}endLine(){if(this.curLine){this.flushBuffer()
let t=this.curLine.lastChild
t&&bn(this.curLine,!1)&&("BR"==t.dom.nodeName||!t.isWidget()||pe.ios&&bn(this.curLine,!0))||this.curLine.append(this.cache.findWidget(kn,0,32)||new On(kn.toDOM(),0,kn,32)),this.curLine=this.afterWidget=null}}updateBlockWrappers(){this.wrapperPos>this.pos+1e4&&(this.blockWrappers.goto(this.pos),this.wrappers.length=0)
for(let t=this.wrappers.length-1;t>=0;t--)this.wrappers[t].to<this.pos&&this.wrappers.splice(t,1)
for(let t=this.blockWrappers;t.value&&t.from<=this.pos;t.next())if(t.to>=this.pos){let e=102*t.rank+t.value.rank,i=new dn(t.from,t.to,t.value,e),n=this.wrappers.length
for(;n>0&&(this.wrappers[n-1].rank-i.rank||this.wrappers[n-1].to-i.to)<0;)n--
this.wrappers.splice(n,0,i)}this.wrapperPos=this.pos}getBlockPos(){var t
this.updateBlockWrappers()
let e=this.root
for(let i of this.wrappers){let n=e.lastChild
if(i.from<this.pos&&n instanceof on&&n.wrapper.eq(i.wrapper))e=n
else{let n=on.of(i.wrapper,null===(t=this.cache.find(on,t=>t.wrapper.eq(i.wrapper)))||void 0===t?void 0:t.dom)
e.append(n),e=n}}return e}blockPosCovered(){let t=this.lastBlock
return null!=t&&!t.breakAfter&&(!t.isWidget()||(160&t.flags)>0)}getBuffer(t){let e=2|(t<0?16:32),i=this.cache.find(fn,void 0,1)
return i&&(i.flags=e),i||new fn(e)}flushBuffer(){!this.afterWidget||32&this.afterWidget.flags||(this.afterWidget.parent.append(this.getBuffer(-1)),this.afterWidget=null)}}class gn{constructor(t){this.skipCount=0,this.text="",this.textOff=0,this.cursor=t.iter()}skip(t){this.textOff+t<=this.text.length?this.textOff+=t:(this.skipCount+=t-(this.text.length-this.textOff),this.text="",this.textOff=0)}next(t){if(this.textOff==this.text.length){let{value:e,lineBreak:i,done:n}=this.cursor.next(this.skipCount)
if(this.skipCount=0,n)throw new Error("Ran out of text content when drawing inline views")
this.text=e
let s=this.textOff=Math.min(t,e.length)
return i?null:e.slice(0,s)}let e=Math.min(this.text.length,this.textOff+t),i=this.text.slice(this.textOff,e)
return this.textOff=e,i}}const mn=[On,an,cn,hn,fn,on,rn]
for(let t=0;t<mn.length;t++)mn[t].bucket=t
class Qn{constructor(t){this.view=t,this.buckets=mn.map(()=>[]),this.index=mn.map(()=>0),this.reused=new Map}add(t){let e=t.constructor.bucket,i=this.buckets[e]
i.length<6?i.push(t):i[this.index[e]=(this.index[e]+1)%6]=t}find(t,e,i=2){let n=t.bucket,s=this.buckets[n],r=this.index[n]
for(let t=0;t<s.length;t++){let o=(t+r)%s.length,a=s[o]
if((!e||e(a))&&!this.reused.has(a))return s.splice(o,1),o<r&&this.index[n]--,this.reused.set(a,i),a}return null}findWidget(t,e,i){let n=this.buckets[0]
if(n.length)for(let s=0,r=0;;s++){if(s==n.length){if(r)return null
r=1,s=0}let o=n[s]
if(!this.reused.has(o)&&(0==r?o.widget.compare(t):o.widget.constructor==t.constructor&&t.updateDOM(o.dom,this.view,o.widget)))return n.splice(s,1),s<this.index[0]&&this.index[0]--,o.widget==t&&o.length==e&&(497&o.flags)==i?(this.reused.set(o,1),o):(this.reused.set(o,2),new On(o.dom,e,t,-498&o.flags|i))}}reuse(t){return this.reused.set(t,1),t}maybeReuse(t,e=2){if(!this.reused.has(t))return this.reused.set(t,e),t.dom}clear(){for(let t=0;t<this.buckets.length;t++)this.buckets[t].length=this.index[t]=0}}class wn{constructor(t,e,i,n,s){this.view=t,this.decorations=n,this.disallowBlockEffectsFor=s,this.openWidget=!1,this.openMarks=0,this.cache=new Qn(t),this.text=new gn(t.state.doc),this.builder=new pn(this.cache,new rn(t,t.contentDOM),Mt.iter(i)),this.cache.reused.set(e,2),this.old=new un(e),this.reuseWalker={skip:(t,e,i)=>{if(this.cache.add(t),t.isComposite())return!1},enter:t=>this.cache.add(t),leave:()=>{},break:()=>{}}}run(t,e){let i=e&&this.getCompositionContext(e.text)
for(let n=0,s=0,r=0;;){let o=r<t.length?t[r++]:null,a=o?o.fromA:this.old.root.length
if(a>n){let t=a-n
this.preserve(t,!r,!o),n=a,s+=t}if(!o)break
e&&o.fromA<=e.range.fromA&&o.toA>=e.range.toA?(this.forward(o.fromA,e.range.fromA,e.range.fromA<e.range.toA?1:-1),this.emit(s,e.range.fromB),this.builder.flushBuffer(),this.cache.clear(),this.builder.addComposition(e,i),this.text.skip(e.range.toB-e.range.fromB),this.forward(e.range.fromA,o.toA),this.emit(e.range.toB,o.toB)):(this.forward(o.fromA,o.toA),this.emit(s,o.toB)),s=o.toB,n=o.toA}return this.builder.curLine&&this.builder.endLine(),this.builder.root}preserve(t,e,i){let n=function(t){let e=[]
for(let i=t.parents.length;i>1;i--){let n=i==t.parents.length?t.tile:t.parents[i].tile
n instanceof hn&&e.push(n.mark)}return e}(this.old),s=this.openMarks
this.old.advance(t,i?1:-1,{skip:(t,e,i)=>{if(t.isWidget())if(this.openWidget)this.builder.continueWidget(i-e)
else{let r=i>0||e<t.length?On.of(t.widget,this.view,i-e,496&t.flags,this.cache.maybeReuse(t)):this.cache.reuse(t)
256&r.flags?(r.flags&=-2,this.builder.addBlockWidget(r)):(this.builder.ensureLine(null),this.builder.addInlineWidget(r,n,s),s=n.length)}else if(t.isText())this.builder.ensureLine(null),e||i!=t.length||this.cache.reused.has(t)?(this.cache.add(t),this.builder.addText(t.text.slice(e,i),n,s)):this.builder.addText(t.text,n,s,this.cache.reuse(t)),s=n.length
else if(t.isLine())t.flags&=-2,this.cache.reused.set(t,1),this.builder.addLine(t)
else if(t instanceof fn)this.cache.add(t)
else{if(!(t instanceof hn))return!1
this.builder.ensureLine(null),this.builder.addMark(t,n,s),this.cache.reused.set(t,1),s=n.length}this.openWidget=!1},enter:t=>{t.isLine()?this.builder.addLineStart(t.attrs,this.cache.maybeReuse(t)):(this.cache.add(t),t instanceof hn&&n.unshift(t.mark)),this.openWidget=!1},leave:t=>{t.isLine()?n.length&&(n.length=s=0):t instanceof hn&&(n.shift(),s=Math.min(s,n.length))},break:()=>{this.builder.addBreak(),this.openWidget=!1}}),this.text.skip(t)}emit(t,e){let i=null,n=this.builder,s=-1,r=Mt.spans(this.decorations,t,e,{point:(t,e,r,o,a,l)=>{if(r instanceof $e){if(this.disallowBlockEffectsFor[l]){if(r.block)throw new RangeError("Block decorations may not be specified via plugins")
if(e>this.view.state.doc.lineAt(t).to)throw new RangeError("Decorations that replace line breaks may not be specified via plugins")}if(s=o.length,a>o.length)n.continueWidget(e-t)
else{let s=r.widget||(r.block?xn.block:xn.inline),l=function(t){let e=t.isReplace?(t.startSide<0?64:0)|(t.endSide>0?128:0):t.startSide>0?32:16
t.block&&(e|=256)
return e}(r),h=this.cache.findWidget(s,e-t,l)||On.of(s,this.view,e-t,l)
r.block?(r.startSide>0&&n.addLineStartIfNotCovered(i),n.addBlockWidget(h)):(n.ensureLine(i),n.addInlineWidget(h,o,a))}i=null}else i=function(t,e){let i=e.spec.attributes,n=e.spec.class
if(!i&&!n)return t
t||(t={class:"cm-line"})
i&&ge(i,t)
n&&(t.class+=" "+n)
return t}(i,r)
e>t&&this.text.skip(e-t)},span:(t,e,r,o)=>{for(let s=t;s<e;){let a=this.text.next(Math.min(512,e-s))
null==a?(n.addLineStartIfNotCovered(i),n.addBreak(),s++):(n.ensureLine(i),n.addText(a,r,s==t?o:r.length),s+=a.length),i=null}s=r.length}})
s>-1&&(this.openWidget=r>s),this.openWidget||n.addLineStartIfNotCovered(i),this.openMarks=r}forward(t,e,i=1){e-t<=10?this.old.advance(e-t,i,this.reuseWalker):(this.old.advance(5,-1,this.reuseWalker),this.old.advance(e-t-10,-1),this.old.advance(5,i,this.reuseWalker))}getCompositionContext(t){let e=[],i=null
for(let n=t.parentNode;;n=n.parentNode){let t=en.get(n)
if(n==this.view.contentDOM)break
t instanceof hn?e.push(t):(null==t?void 0:t.isLine())?i=t:t instanceof on||("DIV"!=n.nodeName||i?i||e.push(hn.of(new ke({tagName:n.nodeName.toLowerCase(),attributes:be(n)}),n)):i=new an(n,vn))}return i?{line:i,marks:e}:null}}function bn(t,e){let i=t=>{for(let n of t.children)if((e?n.isText():n.length)||i(n))return!0
return!1}
return i(t)}const vn={class:"cm-line"}
function Sn(t){let e=en.get(t)
return e&&e.setDOM(t.cloneNode()),t}class xn extends ve{constructor(t){super(),this.tag=t}eq(t){return t.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(t){return t.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}}xn.inline=new xn("span"),xn.block=new xn("div")
const kn=new class extends ve{toDOM(){return document.createElement("br")}get isHidden(){return!0}get editable(){return!0}}
class yn{constructor(t){this.view=t,this.decorations=[],this.blockWrappers=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.editContextFormatting=xe.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.updateDeco(),this.tile=new rn(t,t.contentDOM),this.updateInner([new Ki(0,0,0,t.state.doc.length)],null)}update(t){var e
let i=t.changedRanges
this.minWidth>0&&i.length&&(i.every(({fromA:t,toA:e})=>e<this.minWidthFrom||t>this.minWidthTo)?(this.minWidthFrom=t.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=t.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(t)
let n=-1
this.view.inputState.composing>=0&&!this.view.observer.editContext&&((null===(e=this.domChanged)||void 0===e?void 0:e.newSel)?n=this.domChanged.newSel.head:function(t,e){let i=!1
e&&t.iterChangedRanges((t,n)=>{t<e.to&&n>e.from&&(i=!0)})
return i}(t.changes,this.hasComposition)||t.selectionSet||(n=t.state.selection.main.head))
let s=n>-1?function(t,e,i){let n=Pn(t,i)
if(!n)return null
let{node:s,from:r,to:o}=n,a=s.nodeValue
if(/[\n\r]/.test(a))return null
if(t.state.doc.sliceString(n.from,n.to)!=a)return null
let l=e.invertedDesc
return{range:new Ki(l.mapPos(r),l.mapPos(o),r,o),text:s}}(this.view,t.changes,n):null
if(this.domChanged=null,this.hasComposition){let{from:e,to:n}=this.hasComposition
i=new Ki(e,n,t.changes.mapPos(e,-1),t.changes.mapPos(n,1)).addToSet(i.slice())}this.hasComposition=s?{from:s.range.fromB,to:s.range.toB}:null,(pe.ie||pe.chrome)&&!s&&t&&t.state.doc.lines!=t.startState.doc.lines&&(this.forceSelection=!0)
let r=this.decorations,o=this.blockWrappers
this.updateDeco()
let a=function(t,e,i){let n=new Zn
return Mt.compare(t,e,i,n),n.changes}(r,this.decorations,t.changes)
a.length&&(i=Ki.extendWithRanges(i,a))
let l=function(t,e,i){let n=new Xn
return Mt.compare(t,e,i,n),n.changes}(o,this.blockWrappers,t.changes)
return l.length&&(i=Ki.extendWithRanges(i,l)),s&&!i.some(t=>t.fromA<=s.range.fromA&&t.toA>=s.range.toA)&&(i=s.range.addToSet(i.slice())),!(2&this.tile.flags&&0==i.length)&&(this.updateInner(i,s),t.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(t,e){this.view.viewState.mustMeasureContent=!0
let{observer:i}=this.view
i.ignore(()=>{if(e||t.length){let i=this.tile,n=new wn(this.view,i,this.blockWrappers,this.decorations,this.dynamicDecorationMap)
e&&en.get(e.text)&&n.cache.reused.set(en.get(e.text),2),this.tile=n.run(t,e),$n(i,n.cache.reused)}this.tile.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+"px",this.tile.dom.style.flexBasis=this.minWidth?this.minWidth+"px":""
let n=pe.chrome||pe.ios?{node:i.selectionRange.focusNode,written:!1}:void 0
this.tile.sync(n),!n||!n.written&&i.selectionRange.focusNode==n.node&&this.tile.dom.contains(n.node)||(this.forceSelection=!0),this.tile.dom.style.height=""})
let n=[]
if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let t of this.tile.children)t.isWidget()&&t.widget instanceof An&&n.push(t.dom)
i.updateGaps(n)}updateEditContextFormatting(t){this.editContextFormatting=this.editContextFormatting.map(t.changes)
for(let e of t.transactions)for(let t of e.effects)t.is(Ci)&&(this.editContextFormatting=t.value)}updateSelection(t=!1,e=!1){!t&&this.view.observer.selectionRange.focusNode||this.view.observer.readSelectionRange()
let{dom:i}=this.tile,n=this.view.root.activeElement,s=n==i,r=!s&&!(this.view.state.facet(ji)||i.tabIndex>-1)&&Me(i,this.view.observer.selectionRange)&&!(n&&i.contains(n))
if(!(s||e||r))return
let o=this.forceSelection
this.forceSelection=!1
let a,l,h=this.view.state.selection.main
if(h.empty?l=a=this.inlineDOMNearPos(h.anchor,h.assoc||1):(l=this.inlineDOMNearPos(h.head,h.head==h.from?1:-1),a=this.inlineDOMNearPos(h.anchor,h.anchor==h.from?1:-1)),pe.gecko&&h.empty&&!this.hasComposition&&(1==(c=a).node.nodeType&&c.node.firstChild&&(0==c.offset||"false"==c.node.childNodes[c.offset-1].contentEditable)&&(c.offset==c.node.childNodes.length||"false"==c.node.childNodes[c.offset].contentEditable))){let t=document.createTextNode("")
this.view.observer.ignore(()=>a.node.insertBefore(t,a.node.childNodes[a.offset]||null)),a=l=new ti(t,0),o=!0}var c
let O=this.view.observer.selectionRange
!o&&O.focusNode&&(Ce(a.node,a.offset,O.anchorNode,O.anchorOffset)&&Ce(l.node,l.offset,O.focusNode,O.focusOffset)||this.suppressWidgetCursorChange(O,h))||(this.view.observer.ignore(()=>{pe.android&&pe.chrome&&i.contains(O.focusNode)&&function(t,e){for(let i=t;i&&i!=e;i=i.assignedSlot||i.parentNode)if(1==i.nodeType&&"false"==i.contentEditable)return!0
return!1}(O.focusNode,i)&&(i.blur(),i.focus({preventScroll:!0}))
let t=Ae(this.view.root)
if(t)if(h.empty){if(pe.gecko){let t=(e=a.node,s=a.offset,1!=e.nodeType?0:(s&&"false"==e.childNodes[s-1].contentEditable?1:0)|(s<e.childNodes.length&&"false"==e.childNodes[s].contentEditable?2:0))
if(t&&3!=t){let e=(1==t?Ke:Je)(a.node,a.offset)
e&&(a=new ti(e.node,e.offset))}}t.collapse(a.node,a.offset),null!=h.bidiLevel&&void 0!==t.caretBidiLevel&&(t.caretBidiLevel=h.bidiLevel)}else if(t.extend){t.collapse(a.node,a.offset)
try{t.extend(l.node,l.offset)}catch(t){}}else{let e=document.createRange()
h.anchor>h.head&&([a,l]=[l,a]),e.setEnd(l.node,l.offset),e.setStart(a.node,a.offset),t.removeAllRanges(),t.addRange(e)}else;var e,s
r&&this.view.root.activeElement==i&&(i.blur(),n&&n.focus())}),this.view.observer.setSelectionRange(a,l)),this.impreciseAnchor=a.precise?null:new ti(O.anchorNode,O.anchorOffset),this.impreciseHead=l.precise?null:new ti(O.focusNode,O.focusOffset)}suppressWidgetCursorChange(t,e){return this.hasComposition&&e.empty&&Ce(t.focusNode,t.focusOffset,t.anchorNode,t.anchorOffset)&&this.posFromDOM(t.focusNode,t.focusOffset)==e.head}enforceCursorAssoc(){if(this.hasComposition)return
let{view:t}=this,e=t.state.selection.main,i=Ae(t.root),{anchorNode:n,anchorOffset:s}=t.observer.selectionRange
if(!(i&&e.empty&&e.assoc&&i.modify))return
let r=this.lineAt(e.head,e.assoc)
if(!r)return
let o=r.posAtStart
if(e.head==o||e.head==o+r.length)return
let a=this.coordsAt(e.head,-1),l=this.coordsAt(e.head,1)
if(!a||!l||a.bottom>l.top)return
let h=this.domAtPos(e.head+e.assoc,e.assoc)
i.collapse(h.node,h.offset),i.modify("move",e.assoc<0?"forward":"backward","lineboundary"),t.observer.readSelectionRange()
let c=t.observer.selectionRange
t.docView.posFromDOM(c.anchorNode,c.anchorOffset)!=e.from&&i.collapse(n,s)}posFromDOM(t,e){let i=this.tile.nearest(t)
if(!i)return 2&this.tile.dom.compareDocumentPosition(t)?0:this.view.state.doc.length
let n=i.posAtStart
if(!i.isComposite())return i.isText()?t==i.dom?n+e:n+(e?i.length:0):n
{let s
if(t==i.dom)s=i.dom.childNodes[e]
else{let n=0==We(t)?0:0==e?-1:1
for(;;){let e=t.parentNode
if(e==i.dom)break
0==n&&e.firstChild!=e.lastChild&&(n=t==e.firstChild?-1:1),t=e}s=n<0?t:t.nextSibling}if(s==i.dom.firstChild)return n
for(;s&&!en.get(s);)s=s.nextSibling
if(!s)return n+i.length
for(let t=0,e=n;;t++){let n=i.children[t]
if(n.dom==s)return e
e+=n.length+n.breakAfter}}}domAtPos(t,e){let{tile:i,offset:n}=this.tile.resolveBlock(t,e)
return i.isWidget()?i.domPosFor(n,e):i.domIn(n,e)}inlineDOMNearPos(t,e){let i,n,s=-1,r=!1,o=-1,a=!1
return this.tile.blockTiles((e,l)=>{if(e.isWidget()){if(32&e.flags&&l>=t)return!0
16&e.flags&&(r=!0)}else{let h=l+e.length
if(l<=t&&(i=e,s=t-l,r=h<t),h>=t&&!n&&(n=e,o=t-l,a=l>t),l>t&&n)return!0}}),i||n?(r&&n?i=null:a&&i&&(n=null),i&&e<0||!n?i.domIn(s,e):n.domIn(o,e)):this.domAtPos(t,e)}coordsAt(t,e,i){let{tile:n,offset:s}=this.tile.resolveBlock(t,e)
return n.isWidget()?n.widget instanceof An?null:n.coordsInWidget(s,e,!0):n.coordsIn(s,e,i)}lineAt(t,e){let{tile:i}=this.tile.resolveBlock(t,e)
return i.isLine()?i:null}coordsForChar(t){let{tile:e,offset:i}=this.tile.resolveBlock(t,1)
if(!e.isLine())return null
return function t(e,i){if(e.isComposite())for(let n of e.children){if(n.length>=i){let e=t(n,i)
if(e)return e}if((i-=n.length)<0)break}else if(e.isText()&&i<e.length){let t=v(e.text,i)
if(t==i)return null
let n=Ne(e.dom,i,t).getClientRects()
for(let t=0;t<n.length;t++){let e=n[t]
if(t==n.length-1||e.top<e.bottom&&e.left<e.right)return e}}return null}(e,i)}measureVisibleLineHeights(t){let e=[],{from:i,to:n}=t,s=this.view.contentDOM.clientWidth,r=s>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,o=-1,a=this.view.textDirection==ei.LTR,l=0,h=(t,c,O)=>{for(let f=0;f<t.children.length&&!(c>n);f++){let n=t.children[f],u=c+n.length,d=n.dom.getBoundingClientRect(),{height:p}=d
if(O&&!f&&(l+=d.top-O.top),n instanceof on)u>i&&h(n,c,d)
else if(c>=i&&(l>0&&e.push(-l),e.push(p+l),l=0,r)){let t=n.dom.lastChild,e=t?Re(t):[]
if(e.length){let t=e[e.length-1],i=a?t.right-d.left:d.right-t.left
i>o&&(o=i,this.minWidth=s,this.minWidthFrom=c,this.minWidthTo=u)}}O&&f==t.children.length-1&&(l+=O.bottom-d.bottom),c=u+n.breakAfter}}
return h(this.tile,0,null),e}textDirectionAt(t){let{tile:e}=this.tile.resolveBlock(t,1)
return"rtl"==getComputedStyle(e.dom).direction?ei.RTL:ei.LTR}measureTextSize(){let t=this.tile.blockTiles(t=>{if(t.isLine()&&t.children.length&&t.length<=20){let e,i=0
for(let n of t.children){if(!n.isText()||/[^ -~]/.test(n.text))return
let t=Re(n.dom)
if(1!=t.length)return
i+=t[0].width,e=t[0].height}if(i)return{lineHeight:t.dom.getBoundingClientRect().height,charWidth:i/t.length,textHeight:e}}})
if(t)return t
let e,i,n,s=document.createElement("div")
return s.className="cm-line",s.style.width="99999px",s.style.position="absolute",s.textContent="abc def ghi jkl mno pqr stu",this.view.observer.ignore(()=>{this.tile.dom.appendChild(s)
let t=Re(s.firstChild)[0]
e=s.getBoundingClientRect().height,i=t&&t.width?t.width/27:7,n=t&&t.height?t.height:e,s.remove()}),{lineHeight:e,charWidth:i,textHeight:n}}computeBlockGapDeco(){let t=[],e=this.view.viewState
for(let i=0,n=0;;n++){let s=n==e.viewports.length?null:e.viewports[n],r=s?s.from-1:this.view.state.doc.length
if(r>i){let n=(e.lineBlockAt(r).bottom-e.lineBlockAt(i).top)/this.view.scaleY
t.push(xe.replace({widget:new An(n),block:!0,inclusive:!0,isBlockGap:!0}).range(i,r))}if(!s)break
i=s.to+1}return xe.set(t)}updateDeco(){let t=1,e=this.view.state.facet(Li).map(e=>(this.dynamicDecorationMap[t++]="function"==typeof e)?e(this.view):e),i=!1,n=this.view.state.facet(Bi).map((t,e)=>{let n="function"==typeof t
return n&&(i=!0),n?t(this.view):t})
for(n.length&&(this.dynamicDecorationMap[t++]=i,e.push(Mt.join(n))),this.decorations=[this.editContextFormatting,...e,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];t<this.decorations.length;)this.dynamicDecorationMap[t++]=!1
this.blockWrappers=this.view.state.facet(Ui).map(t=>"function"==typeof t?t(this.view):t)}scrollIntoView(t){if(t.isSnapshot){let e=this.view.viewState.lineBlockAt(t.range.head)
return this.view.scrollDOM.scrollTop=e.top-t.yMargin,void(this.view.scrollDOM.scrollLeft=t.xMargin)}for(let e of this.view.state.facet(Ti))try{if(e(this.view,t.range,t))return!0}catch(t){_i(this.view.state,t,"scroll handler")}let e,{range:i}=t,n=this.coordsAt(i.head,i.assoc||(i.head>i.anchor?-1:1))
if(!n)return
!i.empty&&(e=this.coordsAt(i.anchor,i.anchor>i.head?-1:1))&&(n={left:Math.min(n.left,e.left),top:Math.min(n.top,e.top),right:Math.max(n.right,e.right),bottom:Math.max(n.bottom,e.bottom)})
let s=Hi(this.view),r={left:n.left-s.left,top:n.top-s.top,right:n.right+s.right,bottom:n.bottom+s.bottom},{offsetWidth:o,offsetHeight:a}=this.view.scrollDOM
if(function(t,e,i,n,s,r,o,a){let l=t.ownerDocument,h=l.defaultView||window
for(let c=t,O=!1;c&&!O;)if(1==c.nodeType){let t,f=c==l.body,u=1,d=1
if(f)t=ze(h)
else{if(/^(fixed|sticky)$/.test(getComputedStyle(c).position)&&(O=!0),c.scrollHeight<=c.clientHeight&&c.scrollWidth<=c.clientWidth){c=c.assignedSlot||c.parentNode
continue}let e=c.getBoundingClientRect();({scaleX:u,scaleY:d}=qe(c,e)),t={left:e.left,right:e.left+c.clientWidth*u,top:e.top,bottom:e.top+c.clientHeight*d}}let p=0,g=0
if("nearest"==s)e.top<t.top+o?(g=e.top-(t.top+o),i>0&&e.bottom>t.bottom+g&&(g=e.bottom-t.bottom+o)):e.bottom>t.bottom-o&&(g=e.bottom-t.bottom+o,i<0&&e.top-g<t.top&&(g=e.top-(t.top+o)))
else{let n=e.bottom-e.top,r=t.bottom-t.top
g=("center"==s&&n<=r?e.top+n/2-r/2:"start"==s||"center"==s&&i<0?e.top-o:e.bottom-r+o)-t.top}if("nearest"==n?e.left<t.left+r?(p=e.left-(t.left+r),i>0&&e.right>t.right+p&&(p=e.right-t.right+r)):e.right>t.right-r&&(p=e.right-t.right+r,i<0&&e.left<t.left+p&&(p=e.left-(t.left+r))):p=("center"==n?e.left+(e.right-e.left)/2-(t.right-t.left)/2:"start"==n==a?e.left-r:e.right-(t.right-t.left)+r)-t.left,p||g)if(f)h.scrollBy(p,g)
else{let t=0,i=0
if(g){let t=c.scrollTop
c.scrollTop+=g/d,i=(c.scrollTop-t)*d}if(p){let e=c.scrollLeft
c.scrollLeft+=p/u,t=(c.scrollLeft-e)*u}e={left:e.left-t,top:e.top-i,right:e.right-t,bottom:e.bottom-i},t&&Math.abs(t-p)<1&&(n="nearest"),i&&Math.abs(i-g)<1&&(s="nearest")}if(f)break;(e.top<t.top||e.bottom>t.bottom||e.left<t.left||e.right>t.right)&&(e={left:Math.max(e.left,t.left),right:Math.min(e.right,t.right),top:Math.max(e.top,t.top),bottom:Math.min(e.bottom,t.bottom)}),c=c.assignedSlot||c.parentNode}else{if(11!=c.nodeType)break
c=c.host}}(this.view.scrollDOM,r,i.head<i.anchor?-1:1,t.x,t.y,Math.max(Math.min(t.xMargin,o),-o),Math.max(Math.min(t.yMargin,a),-a),this.view.textDirection==ei.LTR),window.visualViewport&&window.innerHeight-window.visualViewport.height>1&&(n.top>window.visualViewport.offsetTop+window.visualViewport.height||n.bottom<window.visualViewport.offsetTop)){let t=this.view.docView.lineAt(i.head,1)
if(t){let e=Ue(t.dom)
t.dom.scrollIntoView({block:"nearest"}),Be(e,!1)}}}lineHasWidget(t){let e=t=>t.isWidget()||t.children.some(e)
return e(this.tile.resolveBlock(t,1).tile)}destroy(){$n(this.tile)}}function $n(t,e){let i=null==e?void 0:e.get(t)
if(1!=i){null==i&&t.destroy()
for(let i of t.children)$n(i,e)}}function Pn(t,e){let i=t.observer.selectionRange
if(!i.focusNode)return null
let n=Ke(i.focusNode,i.focusOffset),s=Je(i.focusNode,i.focusOffset),r=n||s
if(s&&n&&s.node!=n.node){let e=en.get(s.node)
if(!e||e.isText()&&e.text!=s.node.nodeValue)r=s
else if(t.docView.lastCompositionAfterCursor){let t=en.get(n.node)
!t||t.isText()&&t.text!=n.node.nodeValue||(r=s)}}if(t.docView.lastCompositionAfterCursor=r!=n,!r)return null
let o=e-r.offset
return{from:o,to:o+r.node.nodeValue.length,node:r.node}}let Zn=class{constructor(){this.changes=[]}compareRange(t,e){Ze(t,e,this.changes)}comparePoint(t,e){Ze(t,e,this.changes)}boundChange(t){Ze(t,t,this.changes)}}
class Xn{constructor(){this.changes=[]}compareRange(t,e){Ze(t,e,this.changes)}comparePoint(){}boundChange(t){Ze(t,t,this.changes)}}class An extends ve{constructor(t){super(),this.height=t}toDOM(){let t=document.createElement("div")
return t.className="cm-gap",this.updateDOM(t),t}eq(t){return t.height==this.height}updateDOM(t){return t.style.height=this.height+"px",!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}}function Tn(t,e,i,n,s){let r=Math.round((n-e.left)*t.defaultCharacterWidth)
if(t.lineWrapping&&i.height>1.5*t.defaultLineHeight){let e=t.viewState.heightOracle.textHeight
r+=Math.floor((s-i.top-.5*(t.defaultLineHeight-e))/e)*t.viewState.heightOracle.lineLength}let o=t.state.sliceDoc(i.from,i.to)
return i.from+function(t,e,i){for(let n=0,s=0;;){if(s>=e)return n
if(n==t.length)break
s+=9==t.charCodeAt(n)?i-s%i:1,n=v(t,n)}return t.length}(o,r,t.state.tabSize)}function Mn(t,e,i){let n=t.lineBlockAt(e)
if(Array.isArray(n.type)){let t
for(let s of n.type){if(s.from>e)break
if(!(s.to<e)){if(s.from<e&&s.to>e)return s
t&&(s.type!=Se.Text||t.type==s.type&&!(i<0?s.from<e:s.to>e))||(t=s)}}return t||n}return n}function Rn(t,e,i,n){let s=t.state.doc.lineAt(e.head),r=t.bidiSpans(s),o=t.textDirectionAt(s.from)
for(let a=e,l=null;;){let e=Qi(s,r,o,a,i),h=mi
if(!e){if(s.number==(i?t.state.doc.lines:1))return a
h="\n",s=t.state.doc.line(s.number+(i?1:-1)),r=t.bidiSpans(s),e=i?C.cursor(s.from,-1):C.cursor(s.to,1)}if(l){if(!l(h))return a}else{if(!n)return e
l=n(h)}a=e}}function Cn(t,e,i){for(;;){let n=0
for(let s of t)s.between(e-1,e+1,(t,s,r)=>{if(e>t&&e<s){let r=n||i||(e-t<s-e?-1:1)
e=r<0?t:s,n=r}})
if(!n)return e}}function _n(t,e){let i=null
for(let n=0;n<e.ranges.length;n++){let s=e.ranges[n],r=null
if(s.empty){let e=Cn(t,s.from,0)
e!=s.from&&(r=C.cursor(e,-1))}else{let e=Cn(t,s.from,-1),i=Cn(t,s.to,1)
e==s.from&&i==s.to||(r=s.undirectional?C.undirectionalRange(s.from,s.to):C.range(s.from==s.anchor?e:i,s.from==s.head?e:i))}r&&(i||(i=e.ranges.slice()),i[n]=r)}return i?C.create(i,e.mainIndex):e}function jn(t,e,i){let n=Cn(t.state.facet(Vi).map(e=>e(t)),i.from,e.head>i.from?-1:1)
return n==i.from?i:C.cursor(n,n<i.from?1:-1)}class Yn{constructor(t,e){this.pos=t,this.assoc=e}}function Wn(t,e,i,n){let s,r=t.contentDOM.getBoundingClientRect(),o=r.top+t.viewState.paddingTop,{x:a,y:l}=e,h=l-o
for(;;){if(h<0)return new Yn(0,1)
if(h>t.viewState.docHeight)return new Yn(t.state.doc.length,-1)
if(s=t.elementAtHeight(h),null==n)break
if(s.type==Se.Text){if(n<0?s.to<t.viewport.from:s.from>t.viewport.to)break
let e=t.docView.coordsAt(n<0?s.from:s.to,n>0?-1:1)
if(e&&(n<0?e.top<=h+o:e.bottom>=h+o))break}let e=t.viewState.heightOracle.textHeight/2
h=n>0?s.bottom+e:s.top-e}if(t.viewport.from>=s.to||t.viewport.to<=s.from){if(i)return null
if(s.type==Se.Text){let e=Tn(t,r,s,a,l)
return new Yn(e,e==s.from?1:-1)}}if(s.type!=Se.Text)return h<(s.top+s.bottom)/2?new Yn(s.from,1):new Yn(s.to,-1)
let c=t.docView.lineAt(s.from,2)
return c&&c.length==s.length||(c=t.docView.lineAt(s.from,-2)),new En(t,a,l,t.textDirectionAt(s.from)).scanTile(c,s.from)}class En{constructor(t,e,i,n){this.view=t,this.x=e,this.y=i,this.baseDir=n,this.line=null,this.spans=null}bidiSpansAt(t){return(!this.line||this.line.from>t||this.line.to<t)&&(this.line=this.view.state.doc.lineAt(t),this.spans=this.view.bidiSpans(this.line)),this}baseDirAt(t,e){let{line:i,spans:n}=this.bidiSpansAt(t)
return n[Oi.find(n,t-i.from,-1,e)].level==this.baseDir}dirAt(t,e){let{line:i,spans:n}=this.bidiSpansAt(t)
return n[Oi.find(n,t-i.from,-1,e)].dir}bidiIn(t,e){let{spans:i,line:n}=this.bidiSpansAt(t)
return i.length>1||i.length&&(i[0].level!=this.baseDir||i[0].to+n.from<e)}scan(t,e,i=!1){let n,s,r,o=0,a=t.length-1,l=new Set,h=this.bidiIn(t[0],t[a]),c=-1,O=1e9
t:for(;o<a;){let i=a-o,f=o+a>>1
e:if(l.has(f)){for(let t=1;t<i;t++){let e=f+t
if(e>=a&&(e-=i),!l.has(e)){f=e
break e}}break t}l.add(f)
let u=e(f),d=0
if(u)for(let t=0;t<u.length;t++){let e=u[t]
if(!(0==e.width&&u.length>1))if(e.bottom<this.y)(!n||n.bottom<e.bottom)&&(n=e),d=1
else if(e.top>this.y)(!s||s.top>e.top)&&(s=e),d=-1
else{let t=e.left>this.x?this.x-e.left:e.right<this.x?this.x-e.right:0,i=Math.abs(t)
i<O&&(c=f,O=i,r=e),t&&(d=t<0==(this.baseDir==ei.LTR)?-1:1)}}-1!=d||h&&!this.baseDirAt(t[f],1)?1!=d||h&&!this.baseDirAt(t[f+1],-1)||(o=f+1):a=f}if(!r){if(!s&&!n)return{i:0,after:!1}
let i=n&&(!s||this.y-n.bottom<s.top-this.y)?n:s
return this.y=(i.top+i.bottom)/2,this.scan(t,e,!0)}if(O&&!i){let{top:i,bottom:o}=r
if(n&&n.bottom>(i+i+o)/3)return this.y=n.bottom-1,this.scan(t,e,!0)
if(s&&s.top<(i+o+o)/3)return this.y=s.top+1,this.scan(t,e,!0)}let f=(h?this.dirAt(t[c],1):this.baseDir)==ei.LTR
return{i:c,after:this.x>(r.left+r.right)/2==f}}scanText(t,e){let i=[]
for(let n=0;n<t.length;n=v(t.text,n))i.push(e+n)
i.push(e+t.length)
let n=this.scan(i,n=>{let s=i[n]-e,r=i[n+1]-e
return Ne(t.dom,s,r).getClientRects()})
return n.after?new Yn(i[n.i+1],-1):new Yn(i[n.i],1)}scanTile(t,e){if(!t.length)return new Yn(e,1)
if(1==t.children.length){let i=t.children[0]
if(i.isText())return this.scanText(i,e)
if(i.isComposite())return this.scanTile(i,e)}let i=[e]
for(let n=0,s=e;n<t.children.length;n++)i.push(s+=t.children[n].length)
let n=this.scan(i,e=>{let i=t.children[e]
return 48&i.flags?null:(1==i.dom.nodeType?i.dom:Ne(i.dom,0,i.length)).getClientRects()}),s=t.children[n.i],r=i[n.i]
return s.isText()?this.scanText(s,r):s.isComposite()?this.scanTile(s,r):n.after?new Yn(i[n.i+1],-1):new Yn(r,1)}}const zn="￿"
class qn{constructor(t,e){this.points=t,this.view=e,this.text="",this.lineSeparator=e.state.facet(yt.lineSeparator)}append(t){this.text+=t}lineBreak(){this.text+=zn}readRange(t,e){if(!t)return this
let i=t.parentNode
for(let n=t;;){this.findPointBefore(i,n)
let t=this.text.length
this.readNode(n)
let s=en.get(n),r=n.nextSibling
if(r==e){(null==s?void 0:s.breakAfter)&&!r&&i!=this.view.contentDOM&&this.lineBreak()
break}let o=en.get(r);(s&&o?s.breakAfter:(s?s.breakAfter:je(n))||je(r)&&("BR"!=n.nodeName||(null==s?void 0:s.isWidget()))&&this.text.length>t)&&!Ln(r,e)&&this.lineBreak(),n=r}return this.findPointBefore(i,e),this}readTextNode(t){let e=t.nodeValue
for(let i of this.points)i.node==t&&(i.pos=this.text.length+Math.min(i.offset,e.length))
for(let i=0,n=this.lineSeparator?null:/\r\n?|\n/g;;){let s,r=-1,o=1
if(this.lineSeparator?(r=e.indexOf(this.lineSeparator,i),o=this.lineSeparator.length):(s=n.exec(e))&&(r=s.index,o=s[0].length),this.append(e.slice(i,r<0?e.length:r)),r<0)break
if(this.lineBreak(),o>1)for(let e of this.points)e.node==t&&e.pos>this.text.length&&(e.pos-=o-1)
i=r+o}}readNode(t){let e=en.get(t),i=e&&e.overrideDOMText
if(null!=i){this.findPointInside(t,i.length)
for(let t=i.iter();!t.next().done;)t.lineBreak?this.lineBreak():this.append(t.value)}else 3==t.nodeType?this.readTextNode(t):"BR"==t.nodeName?t.nextSibling&&this.lineBreak():1==t.nodeType&&this.readRange(t.firstChild,null)}findPointBefore(t,e){for(let i of this.points)i.node==t&&t.childNodes[i.offset]==e&&(i.pos=this.text.length)}findPointInside(t,e){for(let i of this.points)(3==t.nodeType?i.node==t:t.contains(i.node))&&(i.pos=this.text.length+(Dn(t,i.node,i.offset)?e:0))}}function Dn(t,e,i){for(;;){if(!e||i<We(e))return!1
if(e==t)return!0
i=_e(e)+1,e=e.parentNode}}function Ln(t,e){let i
for(;t!=e&&t;t=t.nextSibling){let e=en.get(t)
if(!(null==e?void 0:e.isWidget()))return!1
e&&(i||(i=[])).push(e)}if(i)for(let t of i){let e=t.overrideDOMText
if(null==e?void 0:e.length)return!1}return!0}class Un{constructor(t,e){this.node=t,this.offset=e,this.pos=-1}}class Bn{constructor(t,e,i,n){this.typeOver=n,this.bounds=null,this.text="",this.domChanged=e>-1
let{impreciseHead:s,impreciseAnchor:r}=t.docView,o=t.state.selection
if(t.state.readOnly&&e>-1)this.newSel=null
else if(e>-1&&(this.bounds=Vn(t.docView.tile,e,i,0))){let e=s||r?[]:function(t){let e=[]
if(t.root.activeElement!=t.contentDOM)return e
let{anchorNode:i,anchorOffset:n,focusNode:s,focusOffset:r}=t.observer.selectionRange
i&&(e.push(new Un(i,n)),s==i&&r==n||e.push(new Un(s,r)))
return e}(t),i=new qn(e,t)
i.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=i.text,this.newSel=function(t,e){if(0==t.length)return null
let i=t[0].pos,n=2==t.length?t[1].pos:i
return i<0||n<0?null:i==n?C.create([C.cursor(n+e,-1)]):C.single(i+e,n+e)}(e,this.bounds.from)}else{let e=t.observer.selectionRange,i=s&&s.node==e.focusNode&&s.offset==e.focusOffset||!Te(t.contentDOM,e.focusNode)?o.main.head:t.docView.posFromDOM(e.focusNode,e.focusOffset),n=r&&r.node==e.anchorNode&&r.offset==e.anchorOffset||!Te(t.contentDOM,e.anchorNode)?o.main.anchor:t.docView.posFromDOM(e.anchorNode,e.anchorOffset),a=t.viewport
if((pe.ios||pe.chrome)&&i!=n&&Math.min(i,n)<=o.main.from&&Math.max(i,n)>=o.main.to&&(a.from>0||a.to<t.state.doc.length)){let e=Math.min(i,n),s=Math.max(i,n),r=a.from-e,o=a.to-s
0!=r&&1!=r&&0!=e||0!=o&&-1!=o&&s!=t.state.doc.length||(i=0,n=t.state.doc.length)}if(t.inputState.composing>-1&&o.ranges.length>1)this.newSel=o.replaceRange(C.range(n,i))
else if(t.lineWrapping&&n==i&&(!o.main.empty||o.main.head!=i)&&t.inputState.lastTouchTime>Date.now()-100){let e=t.coordsAtPos(i,-1),n=0
e&&(n=t.inputState.lastTouchY<=e.bottom?-1:1),this.newSel=C.create([C.cursor(i,n)])}else this.newSel=C.single(n,i)}}}function Vn(t,e,i,n){if(t.isComposite()){let s=-1,r=-1,o=-1,a=-1
for(let l=0,h=n,c=n;l<t.children.length;l++){let n=t.children[l],O=h+n.length
if(h<e&&O>i)return Vn(n,e,i,h)
if(O>=e&&-1==s&&(s=l,r=h),h>i&&n.dom.parentNode==t.dom){o=l,a=c
break}c=O,h=O+n.breakAfter}return{from:r,to:a<0?n+t.length:a,startDOM:(s?t.children[s-1].dom.nextSibling:null)||t.dom.firstChild,endDOM:o<t.children.length&&o>=0?t.children[o].dom:null}}return t.isText()?{from:n,to:n+t.length,startDOM:t.dom,endDOM:t.dom.nextSibling}:null}function Gn(t,e){let i,{newSel:n}=e,{state:s}=t,r=s.selection.main,o=t.inputState.lastKeyTime>Date.now()-100?t.inputState.lastKeyCode:-1
if(e.bounds){let{from:t,to:n}=e.bounds,a=r.from,l=null;(8===o||pe.android&&e.text.length<n-t)&&(a=r.to,l="end")
let h,c,f=s.doc.sliceString(t,n,zn)
!r.empty&&r.from>=t&&r.to<=n&&(e.typeOver||f!=e.text)&&f.slice(0,r.from-t)==e.text.slice(0,r.from-t)&&f.slice(r.to-t)==e.text.slice(h=e.text.length-(f.length-(r.to-t)))?i={from:r.from,to:r.to,insert:O.of(e.text.slice(r.from-t,h).split(zn))}:(c=Nn(f,e.text,a-t,l))&&(pe.chrome&&13==o&&c.toB==c.from+2&&e.text.slice(c.from,c.toB)==zn+zn&&c.toB--,i={from:t+c.from,to:t+c.toA,insert:O.of(e.text.slice(c.from,c.toB).split(zn))})}else n&&(!t.hasFocus&&s.facet(ji)||Hn(n,r))&&(n=null)
if(!i&&!n)return!1
if((pe.mac||pe.android)&&i&&i.from==i.to&&i.from==r.head-1&&/^\. ?$/.test(i.insert.toString())&&"off"==t.contentDOM.getAttribute("autocorrect")?(n&&2==i.insert.length&&(n=C.single(n.main.anchor-1,n.main.head-1)),i={from:i.from,to:i.to,insert:O.of([i.insert.toString().replace("."," ")])}):s.doc.lineAt(r.from).to<r.to&&t.docView.lineHasWidget(r.to)&&t.inputState.insertingTextAt>Date.now()-50?i={from:r.from,to:r.to,insert:s.toText(t.inputState.insertingText)}:pe.chrome&&i&&i.from==i.to&&i.from==r.head&&"\n "==i.insert.toString()&&t.lineWrapping&&(n&&(n=C.single(n.main.anchor-1,n.main.head-1)),i={from:r.from,to:r.to,insert:O.of([" "])}),i)return In(t,i,n,o)
if(n&&!Hn(n,r)){let e=!1,i="select"
return t.inputState.lastSelectionTime>Date.now()-50&&("select"==t.inputState.lastSelectionOrigin&&(e=!0),i=t.inputState.lastSelectionOrigin,"select.pointer"==i&&(n=_n(s.facet(Vi).map(e=>e(t)),n))),t.dispatch({selection:n,scrollIntoView:e,userEvent:i}),!0}return!1}function In(t,e,i,n=-1){if(pe.ios&&t.inputState.flushIOSKey(e))return!0
let s=t.state.selection.main
if(pe.android&&(e.to==s.to&&(e.from==s.from||e.from==s.from-1&&" "==t.state.sliceDoc(e.from,s.from))&&1==e.insert.length&&2==e.insert.lines&&He(t.contentDOM,"Enter",13)||(e.from==s.from-1&&e.to==s.to&&0==e.insert.length||8==n&&e.insert.length<e.to-e.from&&e.to>s.head)&&He(t.contentDOM,"Backspace",8)||e.from==s.from&&e.to==s.to+1&&0==e.insert.length&&He(t.contentDOM,"Delete",46)))return!0
let r,o=e.insert.toString()
t.inputState.composing>=0&&t.inputState.composing++
let a=()=>r||(r=function(t,e,i){let n,s=t.state,r=s.selection.main,o=-1
if(e.from==e.to&&e.from<r.from||e.from>r.to){let i=e.from<r.from?-1:1,n=i<0?r.from:r.to,a=Cn(s.facet(Vi).map(e=>e(t)),n,i)
e.from==a&&(o=a)}if(o>-1)n={changes:e,selection:C.cursor(e.from+e.insert.length,-1)}
else if(e.from>=r.from&&e.to<=r.to&&e.to-e.from>=(r.to-r.from)/3&&(!i||i.main.empty&&i.main.from==e.from+e.insert.length)&&t.inputState.composing<0){let i=r.from<e.from?s.sliceDoc(r.from,e.from):"",o=r.to>e.to?s.sliceDoc(e.to,r.to):""
n=s.replaceSelection(t.state.toText(i+e.insert.sliceString(0,void 0,t.state.lineBreak)+o))}else{let o=s.changes(e),a=i&&i.main.to<=o.newLength?i.main:void 0
if(s.selection.ranges.length>1&&(t.inputState.composing>=0||t.inputState.compositionPendingChange)&&e.to<=r.to+10&&e.to>=r.to-10){let l,h=t.state.sliceDoc(e.from,e.to),c=i&&Pn(t,i.main.head)
if(c){let t=e.insert.length-(e.to-e.from)
l={from:c.from,to:c.to-t}}else l=t.state.doc.lineAt(r.head)
let O=r.to-e.to
n=s.changeByRange(i=>{if(i.from==r.from&&i.to==r.to)return{changes:o,range:a||i.map(o)}
let n=i.to-O,c=n-h.length
if(t.state.sliceDoc(c,n)!=h||n>=l.from&&c<=l.to)return{range:i}
let f=s.changes({from:c,to:n,insert:e.insert}),u=i.to-r.to
return{changes:f,range:a?C.range(Math.max(0,a.anchor+u),Math.max(0,a.head+u)):i.map(f)}})}else n={changes:o,selection:a&&s.selection.replaceRange(a)}}let a="input.type";(t.composing||t.inputState.compositionPendingChange&&t.inputState.compositionEndedAt>Date.now()-50)&&(t.inputState.compositionPendingChange=!1,a+=".compose",t.inputState.compositionFirstChange&&(a+=".start",t.inputState.compositionFirstChange=!1))
return s.update(n,{userEvent:a,scrollIntoView:!0})}(t,e,i))
return t.state.facet(yi).some(i=>i(t,e.from,e.to,o,a))||t.dispatch(a()),!0}function Nn(t,e,i,n){let s=Math.min(t.length,e.length),r=0
for(;r<s&&t.charCodeAt(r)==e.charCodeAt(r);)r++
if(r==s&&t.length==e.length)return null
let o=t.length,a=e.length
for(;o>0&&a>0&&t.charCodeAt(o-1)==e.charCodeAt(a-1);)o--,a--
if("end"==n){i-=o+Math.max(0,r-Math.min(o,a))-r}if(o<r&&t.length<e.length){r-=i<=r&&i>=o?r-i:0,a=r+(a-o),o=r}else if(a<r){r-=i<=r&&i>=a?r-i:0,o=r+(o-a),a=r}return{from:r,toA:o,toB:a}}function Hn(t,e){return e.head==t.main.head&&e.anchor==t.main.anchor}class Fn{setSelectionOrigin(t){this.lastSelectionOrigin=t,this.lastSelectionTime=Date.now()}constructor(t){this.view=t,this.lastKeyCode=0,this.lastKeyTime=0,this.touchActive=!1,this.lastTouchTime=0,this.lastTouchX=0,this.lastTouchY=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.lastWheelEvent=0,this.pendingIOSKey=void 0,this.lastIOSMomentumScroll=0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.insertingText="",this.insertingTextAt=0,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=t.hasFocus,pe.safari&&t.contentDOM.addEventListener("input",()=>null),pe.gecko&&function(t){vs.has(t)||(vs.add(t),t.addEventListener("copy",()=>{}),t.addEventListener("cut",()=>{}))}(t.contentDOM.ownerDocument)}handleEvent(t){(function(t,e){if(!e.bubbles)return!0
if(e.defaultPrevented)return!1
for(let i,n=e.target;n!=t.contentDOM;n=n.parentNode)if(!n||11==n.nodeType||(i=en.get(n))&&i.isWidget()&&!i.isHidden&&i.widget.ignoreEvent(e))return!1
return!0})(this.view,t)&&!this.ignoreDuringComposition(t)&&("keydown"==t.type&&this.keydown(t)||(0!=this.view.updateState?Promise.resolve().then(()=>this.runHandlers(t.type,t)):this.runHandlers(t.type,t)))}runHandlers(t,e){let i=this.handlers[t]
if(i){for(let t of i.observers)t(this.view,e)
for(let t of i.handlers){if(e.defaultPrevented)break
if(t(this.view,e)){e.preventDefault()
break}}}}ensureHandlers(t){let e=Jn(t),i=this.handlers,n=this.view.contentDOM
for(let t in e)if("scroll"!=t){let s=!e[t].handlers.length,r=i[t]
r&&s!=!r.handlers.length&&(n.removeEventListener(t,this.handleEvent),r=null),r||n.addEventListener(t,this.handleEvent,{passive:s})}for(let t in i)"scroll"==t||e[t]||n.removeEventListener(t,this.handleEvent)
this.handlers=e}keydown(t){if(this.lastKeyCode=t.keyCode,this.lastKeyTime=Date.now(),9==t.keyCode&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0
if(this.tabFocusMode>0&&27!=t.keyCode&&is.indexOf(t.keyCode)<0&&(this.tabFocusMode=-1),pe.android&&pe.chrome&&!t.synthetic&&(13==t.keyCode||8==t.keyCode))return this.view.observer.delayAndroidKey(t.key,t.keyCode),!0
if(pe.ios&&!t.synthetic&&!t.altKey&&!t.metaKey&&(ts.some(e=>e.keyCode==t.keyCode)&&!t.ctrlKey||es.indexOf(t.key)>-1&&t.ctrlKey)){let i={ctrlKey:t.ctrlKey,altKey:t.altKey,metaKey:t.metaKey,shiftKey:t.shiftKey}
i.shiftKey&&pe.ios&&!/^(off|none)$/.test(this.view.contentDOM.autocapitalize)&&((e=this.view.win).visualViewport&&e.visualViewport.height*e.visualViewport.scale/e.document.documentElement.clientHeight<.85)&&(i.shiftKey=!1)
let n=this.pendingIOSKey={key:t.key,keyCode:t.keyCode,mods:i}
return setTimeout(()=>{this.pendingIOSKey==n&&this.flushIOSKey()},50),!0}var e
return 229!=t.keyCode&&this.view.observer.forceFlush(),!1}flushIOSKey(t){let e=this.pendingIOSKey
return!(!e||this.view.observer.pendingRecords().length)&&(!("Enter"==e.key&&t&&t.from<t.to&&/^\S+$/.test(t.insert.toString()))&&(this.pendingIOSKey=void 0,He(this.view.contentDOM,e.key,e.keyCode,e.mods)))}ignoreDuringComposition(t){return!(!/^key/.test(t.type)||t.synthetic)&&(this.composing>0||!!(pe.safari&&!pe.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100)&&(this.compositionPendingKey=!1,!0))}startMouseSelection(t){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=t}update(t){this.view.observer.update(t),this.mouseSelection&&this.mouseSelection.update(t),this.draggedContent&&t.docChanged&&(this.draggedContent=this.draggedContent.map(t.changes)),t.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}}function Kn(t,e){return(i,n)=>{try{return e.call(t,n,i)}catch(t){_i(i.state,t)}}}function Jn(t){let e=Object.create(null)
function i(t){return e[t]||(e[t]={observers:[],handlers:[]})}for(let e of t){let t=e.spec,n=t&&t.plugin.domEventHandlers,s=t&&t.plugin.domEventObservers
if(n)for(let t in n){let s=n[t]
s&&i(t).handlers.push(Kn(e.value,s))}if(s)for(let t in s){let n=s[t]
n&&i(t).observers.push(Kn(e.value,n))}}for(let t in rs)i(t).handlers.push(rs[t])
for(let t in os)i(t).observers.push(os[t])
return e}const ts=[{key:"Backspace",keyCode:8,inputType:"deleteContentBackward"},{key:"Enter",keyCode:13,inputType:"insertParagraph"},{key:"Enter",keyCode:13,inputType:"insertLineBreak"},{key:"Delete",keyCode:46,inputType:"deleteContentForward"}],es="dthko",is=[16,17,18,20,91,92,224,225]
function ns(t){return.7*Math.max(0,t)+8}class ss{constructor(t,e,i,n){this.view=t,this.startEvent=e,this.style=i,this.mustSelect=n,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=e,this.scrollParents=De(t.contentDOM),this.atoms=t.state.facet(Vi).map(e=>e(t))
let s=t.contentDOM.ownerDocument
s.addEventListener("mousemove",this.move=this.move.bind(this)),s.addEventListener("mouseup",this.up=this.up.bind(this)),this.extend=e.shiftKey,this.multiple=t.state.facet(yt.allowMultipleSelections)&&function(t,e){let i=t.state.facet(bi)
return i.length?i[0](e):pe.mac?e.metaKey:e.ctrlKey}(t,e),this.dragging=!(!function(t,e){let{main:i}=t.state.selection
if(i.empty)return!1
let n=Ae(t.root)
if(!n||0==n.rangeCount)return!0
let s=n.getRangeAt(0).getClientRects()
for(let t=0;t<s.length;t++){let i=s[t]
if(i.left<=e.clientX&&i.right>=e.clientX&&i.top<=e.clientY&&i.bottom>=e.clientY)return!0}return!1}(t,e)||1!=ps(e))&&null}start(t){!1===this.dragging&&this.select(t)}move(t){if(0==t.buttons)return this.destroy()
if(this.dragging||null==this.dragging&&(e=this.startEvent,i=t,Math.max(Math.abs(e.clientX-i.clientX),Math.abs(e.clientY-i.clientY))<10))return
var e,i
this.select(this.lastEvent=t)
let n=0,s=0,r=0,o=0,a=this.view.win.innerWidth,l=this.view.win.innerHeight
this.scrollParents.x&&({left:r,right:a}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:o,bottom:l}=this.scrollParents.y.getBoundingClientRect())
let h=Hi(this.view)
t.clientX-h.left<=r+6?n=-ns(r-t.clientX):t.clientX+h.right>=a-6&&(n=ns(t.clientX-a)),t.clientY-h.top<=o+6?s=-ns(o-t.clientY):t.clientY+h.bottom>=l-6&&(s=ns(t.clientY-l)),this.setScrollSpeed(n,s)}up(t){null==this.dragging&&this.select(this.lastEvent),this.dragging||t.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0)
let t=this.view.contentDOM.ownerDocument
t.removeEventListener("mousemove",this.move),t.removeEventListener("mouseup",this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(t,e){this.scrollSpeed={x:t,y:e},t||e?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:t,y:e}=this.scrollSpeed
t&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=t,t=0),e&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=e,e=0),(t||e)&&this.view.win.scrollBy(t,e),!1===this.dragging&&this.select(this.lastEvent)}select(t){let{view:e}=this,i=_n(this.atoms,this.style.get(t,this.extend,this.multiple))
!this.mustSelect&&i.eq(e.state.selection,!1===this.dragging)||this.view.dispatch({selection:i,userEvent:"select.pointer"}),this.mustSelect=!1}update(t){t.transactions.some(t=>t.isUserEvent("input.type"))?this.destroy():this.style.update(t)&&setTimeout(()=>this.select(this.lastEvent),20)}}const rs=Object.create(null),os=Object.create(null),as=pe.ie&&pe.ie_version<15||pe.ios&&pe.webkit_version<604
function ls(t,e,i){for(let n of t.facet(e))i=n(i,t)
return i}function hs(t,e){e=ls(t.state,Pi,e)
let i,{state:n}=t,s=1,r=n.toText(e),o=r.lines==n.selection.ranges.length
if(null!=ms&&n.selection.ranges.every(t=>t.empty)&&ms==r.toString()){let t=-1
i=n.changeByRange(i=>{let a=n.doc.lineAt(i.from)
if(a.from==t)return{range:i}
t=a.from
let l=n.toText((o?r.line(s++).text:e)+n.lineBreak)
return{changes:{from:a.from,insert:l},range:C.cursor(i.from+l.length,-1)}})}else i=o?n.changeByRange(t=>{let e=r.line(s++)
return{changes:{from:t.from,to:t.to,insert:e.text},range:C.cursor(t.from+e.length,-1)}}):n.replaceSelection(r)
t.dispatch(i,{userEvent:"input.paste",scrollIntoView:!0})}function cs(t,e,i,n){if(1==n)return C.cursor(e,i)
if(2==n)return function(t,e,i=1){let n=t.charCategorizer(e),s=t.doc.lineAt(e),r=e-s.from
if(0==s.length)return C.cursor(e)
0==r?i=1:r==s.length&&(i=-1)
let o=r,a=r
i<0?o=v(s.text,r,!1):a=v(s.text,r)
let l=n(s.text.slice(o,a))
for(;o>0;){let t=v(s.text,o,!1)
if(n(s.text.slice(t,o))!=l)break
o=t}for(;a<s.length;){let t=v(s.text,a)
if(n(s.text.slice(a,t))!=l)break
a=t}return C.undirectionalRange(o+s.from,a+s.from)}(t.state,e,i)
{let n=t.docView.lineAt(e,i),s=t.state.doc.lineAt(n?n.posAtEnd:e),r=n?n.posAtStart:s.from,o=n?n.posAtEnd:s.to
return o<t.state.doc.length&&o==s.to&&o++,C.undirectionalRange(r,o)}}os.scroll=t=>{let e=t.inputState
e.lastScrollTop=t.scrollDOM.scrollTop,e.lastScrollLeft=t.scrollDOM.scrollLeft,pe.ios&&!e.touchActive&&(e.lastIOSMomentumScroll=Date.now())},os.wheel=os.mousewheel=t=>{t.inputState.lastWheelEvent=Date.now()},rs.keydown=(t,e)=>(t.inputState.setSelectionOrigin("select"),27==e.keyCode&&0!=t.inputState.tabFocusMode&&(t.inputState.tabFocusMode=Date.now()+2e3),!1),os.touchstart=(t,e)=>{let i=t.inputState,n=e.targetTouches[0]
i.touchActive=!0,i.lastTouchTime=Date.now(),n&&(i.lastTouchX=n.clientX,i.lastTouchY=n.clientY),i.setSelectionOrigin("select.pointer")},os.touchmove=t=>{t.inputState.setSelectionOrigin("select.pointer")},os.touchend=(t,e)=>{t.inputState.touchActive=!1},rs.mousedown=(t,e)=>{if(t.observer.flush(),t.inputState.lastTouchTime>Date.now()-2e3)return!1
let i=null
for(let n of t.state.facet(Si))if(i=n(t,e),i)break
if(i||0!=e.button||(i=function(t,e){let i=t.posAndSideAtCoords({x:e.clientX,y:e.clientY},!1),n=ps(e),s=t.state.selection
return{update(t){t.docChanged&&(i.pos=t.changes.mapPos(i.pos),s=s.map(t.changes))},get(e,r,o){let a,l=t.posAndSideAtCoords({x:e.clientX,y:e.clientY},!1),h=cs(t,l.pos,l.assoc,n)
if(i.pos!=l.pos&&!r){let e=cs(t,i.pos,i.assoc,n),s=Math.min(e.from,h.from),r=Math.max(e.to,h.to)
h=s<h.from?C.range(s,r,h.assoc):C.range(r,s,h.assoc)}return r?s.replaceRange(s.main.extend(h.from,h.to,h.assoc)):o&&1==n&&s.ranges.length>1&&(a=function(t,e){for(let i=0;i<t.ranges.length;i++){let{from:n,to:s}=t.ranges[i]
if(n<=e&&s>=e)return C.create(t.ranges.slice(0,i).concat(t.ranges.slice(i+1)),t.mainIndex==i?0:t.mainIndex-(t.mainIndex>i?1:0))}return null}(s,l.pos))?a:o?s.addRange(h):C.create([h])}}}(t,e)),i){let n=!t.hasFocus
t.inputState.startMouseSelection(new ss(t,e,i,n)),n&&t.observer.ignore(()=>{Ie(t.contentDOM)
let e=t.root.activeElement
e&&!e.contains(t.contentDOM)&&e.blur()})
let s=t.inputState.mouseSelection
if(s)return s.start(e),!1===s.dragging}else t.inputState.setSelectionOrigin("select.pointer")
return!1}
const Os=pe.ie&&pe.ie_version<=11
let fs=null,us=0,ds=0
function ps(t){if(!Os)return t.detail
let e=fs,i=ds
return fs=t,ds=Date.now(),us=!e||i>Date.now()-400&&Math.abs(e.clientX-t.clientX)<2&&Math.abs(e.clientY-t.clientY)<2?(us+1)%3:1}function gs(t,e,i,n){if(!(i=ls(t.state,Pi,i)))return
let s=t.posAtCoords({x:e.clientX,y:e.clientY},!1),{draggedContent:r}=t.inputState,o=n&&r&&function(t,e){let i=t.state.facet(vi)
return i.length?i[0](e):pe.mac?!e.altKey:!e.ctrlKey}(t,e)?{from:r.from,to:r.to}:null,a={from:s,insert:i},l=t.state.changes(o?[o,a]:a)
t.focus(),t.dispatch({changes:l,selection:{anchor:l.mapPos(s,-1),head:l.mapPos(s,1)},userEvent:o?"move.drop":"input.drop"}),t.inputState.draggedContent=null}rs.dragstart=(t,e)=>{let{selection:{main:i}}=t.state
if(e.target.draggable){let n=t.docView.tile.nearest(e.target)
if(n&&n.isWidget()){let t=n.posAtStart,e=t+n.length;(t>=i.to||e<=i.from)&&(i=C.undirectionalRange(t,e))}}let{inputState:n}=t
return n.mouseSelection&&(n.mouseSelection.dragging=!0),n.draggedContent=i,e.dataTransfer&&(e.dataTransfer.setData("Text",ls(t.state,Zi,t.state.sliceDoc(i.from,i.to))),e.dataTransfer.effectAllowed="copyMove"),!1},rs.dragend=t=>(t.inputState.draggedContent=null,!1),rs.drop=(t,e)=>{if(!e.dataTransfer)return!1
if(t.state.readOnly)return!0
let i=e.dataTransfer.files
if(i&&i.length){let n=Array(i.length),s=0,r=()=>{++s==i.length&&gs(t,e,n.filter(t=>null!=t).join(t.state.lineBreak),!1)}
for(let t=0;t<i.length;t++){let e=new FileReader
e.onerror=r,e.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(e.result)||(n[t]=e.result),r()},e.readAsText(i[t])}return!0}{let i=e.dataTransfer.getData("Text")
if(i)return gs(t,e,i,!0),!0}return!1},rs.paste=(t,e)=>{if(t.state.readOnly)return!0
t.observer.flush()
let i=as?null:e.clipboardData
return i?(hs(t,i.getData("text/plain")||i.getData("text/uri-list")),!0):(function(t){let e=t.dom.parentNode
if(!e)return
let i=e.appendChild(document.createElement("textarea"))
i.style.cssText="position: fixed; left: -10000px; top: 10px",i.focus(),setTimeout(()=>{t.focus(),i.remove(),hs(t,i.value)},50)}(t),!1)}
let ms=null
rs.copy=rs.cut=(t,e)=>{if(!Me(t.contentDOM,t.observer.selectionRange))return!1
let{text:i,ranges:n,linewise:s}=function(t){let e=[],i=[],n=!1
for(let n of t.selection.ranges)n.empty||(e.push(t.sliceDoc(n.from,n.to)),i.push(n))
if(!e.length){let s=-1
for(let{from:n}of t.selection.ranges){let r=t.doc.lineAt(n)
r.number>s&&(e.push(r.text),i.push({from:r.from,to:Math.min(t.doc.length,r.to+1)})),s=r.number}n=!0}return{text:ls(t,Zi,e.join(t.lineBreak)),ranges:i,linewise:n}}(t.state)
if(!i&&!s)return!1
ms=s?i:null,"cut"!=e.type||t.state.readOnly||t.dispatch({changes:n,scrollIntoView:!0,userEvent:"delete.cut"})
let r=as?null:e.clipboardData
return r?(r.clearData(),r.setData("text/plain",i),!0):(function(t,e){let i=t.dom.parentNode
if(!i)return
let n=i.appendChild(document.createElement("textarea"))
n.style.cssText="position: fixed; left: -10000px; top: 10px",n.value=e,n.focus(),n.selectionEnd=e.length,n.selectionStart=0,setTimeout(()=>{n.remove(),t.focus()},50)}(t,i),!1)}
const Qs=ct.define()
function ws(t,e){let i=[]
for(let n of t.facet($i)){let s=n(t,e)
s&&i.push(s)}return i.length?t.update({effects:i,annotations:Qs.of(!0)}):null}function bs(t){setTimeout(()=>{let e=t.hasFocus
if(e!=t.inputState.notifiedFocused){let i=ws(t.state,e)
i?t.dispatch(i):t.update([])}},10)}os.focus=t=>{t.inputState.lastFocusTime=Date.now(),t.scrollDOM.scrollTop||!t.inputState.lastScrollTop&&!t.inputState.lastScrollLeft||(t.scrollDOM.scrollTop=t.inputState.lastScrollTop,t.scrollDOM.scrollLeft=t.inputState.lastScrollLeft),bs(t)},os.blur=t=>{t.observer.clearSelectionRange(),bs(t)},os.compositionstart=os.compositionupdate=t=>{if(!t.observer.editContext&&(null==t.inputState.compositionFirstChange&&(t.inputState.compositionFirstChange=!0),t.inputState.composing<0)){let{main:e}=t.state.selection
e.empty||t.lineBlockAt(e.from).from==t.lineBlockAt(e.to).from||t.dispatch({changes:t.state.selection.ranges.filter(t=>!t.empty).map(t=>({from:t.from,to:t.to})),userEvent:"input"}),t.inputState.composing=0}},os.compositionend=t=>{t.observer.editContext||(t.inputState.composing=-1,t.inputState.compositionEndedAt=Date.now(),t.inputState.compositionPendingKey=!0,t.inputState.compositionPendingChange=t.observer.pendingRecords().length>0,t.inputState.compositionFirstChange=null,pe.chrome&&pe.android?t.observer.flushSoon():t.inputState.compositionPendingChange?Promise.resolve().then(()=>t.observer.flush()):setTimeout(()=>{t.inputState.composing<0&&t.docView.hasComposition&&t.update([])},50))},os.contextmenu=t=>{t.inputState.lastContextMenu=Date.now()},rs.beforeinput=(t,e)=>{var i,n
if("insertText"!=e.inputType&&"insertCompositionText"!=e.inputType||(t.inputState.insertingText=e.data,t.inputState.insertingTextAt=Date.now()),"insertReplacementText"==e.inputType&&t.observer.editContext){let n=null===(i=e.dataTransfer)||void 0===i?void 0:i.getData("text/plain"),s=e.getTargetRanges()
if(n&&s.length){let e=s[0],i=t.posAtDOM(e.startContainer,e.startOffset),r=t.posAtDOM(e.endContainer,e.endOffset)
return In(t,{from:i,to:r,insert:t.state.toText(n)},null),!0}}let s
if(pe.chrome&&pe.android&&(s=ts.find(t=>t.inputType==e.inputType))&&(t.observer.delayAndroidKey(s.key,s.keyCode),"Backspace"==s.key||"Delete"==s.key)){let e=(null===(n=window.visualViewport)||void 0===n?void 0:n.height)||0
setTimeout(()=>{var i;((null===(i=window.visualViewport)||void 0===i?void 0:i.height)||0)>e+10&&t.hasFocus&&(t.contentDOM.blur(),t.focus())},100)}return pe.ios&&"deleteContentForward"==e.inputType&&t.observer.flushSoon(),pe.safari&&"insertText"==e.inputType&&t.inputState.composing>=0&&setTimeout(()=>os.compositionend(t,e),20),!1}
const vs=new Set
const Ss=["pre-wrap","normal","pre-line","break-spaces"]
let xs=!1
function ks(){xs=!1}class ys{constructor(t){this.lineWrapping=t,this.doc=O.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(t,e){let i=this.doc.lineAt(e).number-this.doc.lineAt(t).number+1
return this.lineWrapping&&(i+=Math.max(0,Math.ceil((e-t-i*this.lineLength*.5)/this.lineLength))),this.lineHeight*i}heightForLine(t){if(!this.lineWrapping)return this.lineHeight
return(1+Math.max(0,Math.ceil((t-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight}setDoc(t){return this.doc=t,this}mustRefreshForWrapping(t){return Ss.indexOf(t)>-1!=this.lineWrapping}mustRefreshForHeights(t){let e=!1
for(let i=0;i<t.length;i++){let n=t[i]
n<0?i++:this.heightSamples[Math.floor(10*n)]||(e=!0,this.heightSamples[Math.floor(10*n)]=!0)}return e}refresh(t,e,i,n,s,r){let o=Ss.indexOf(t)>-1,a=Math.abs(e-this.lineHeight)>.3||this.lineWrapping!=o
if(this.lineWrapping=o,this.lineHeight=e,this.charWidth=i,this.textHeight=n,this.lineLength=s,a){this.heightSamples={}
for(let t=0;t<r.length;t++){let e=r[t]
e<0?t++:this.heightSamples[Math.floor(10*e)]=!0}}return a}}class $s{constructor(t,e){this.from=t,this.heights=e,this.index=0}get more(){return this.index<this.heights.length}}class Ps{constructor(t,e,i,n,s){this.from=t,this.length=e,this.top=i,this.height=n,this._content=s}get type(){return"number"==typeof this._content?Se.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof $e?this._content.widget:null}get widgetLineBreaks(){return"number"==typeof this._content?this._content:0}join(t){let e=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(t._content)?t._content:[t])
return new Ps(this.from,this.length+t.length,this.top,this.height+t.height,e)}}var Zs=function(t){return t[t.ByPos=0]="ByPos",t[t.ByHeight=1]="ByHeight",t[t.ByPosNoHeight=2]="ByPosNoHeight",t}(Zs||(Zs={}))
const Xs=.001
class As{constructor(t,e,i=2){this.length=t,this.height=e,this.flags=i}get outdated(){return(2&this.flags)>0}set outdated(t){this.flags=(t?2:0)|-3&this.flags}setHeight(t){this.height!=t&&(Math.abs(this.height-t)>Xs&&(xs=!0),this.height=t)}replace(t,e,i){return As.of(i)}decomposeLeft(t,e){e.push(this)}decomposeRight(t,e){e.push(this)}applyChanges(t,e,i,n){let s=this,r=i.doc
for(let o=n.length-1;o>=0;o--){let{fromA:a,toA:l,fromB:h,toB:c}=n[o],O=s.lineAt(a,Zs.ByPosNoHeight,i.setDoc(e),0,0),f=O.to>=l?O:s.lineAt(l,Zs.ByPosNoHeight,i,0,0)
for(c+=f.to-l,l=f.to;o>0&&O.from<=n[o-1].toA;)a=n[o-1].fromA,h=n[o-1].fromB,o--,a<O.from&&(O=s.lineAt(a,Zs.ByPosNoHeight,i,0,0))
h+=O.from-a,a=O.from
let u=Ws.build(i.setDoc(r),t,h,c)
s=Ts(s,s.replace(a,l,u))}return s.updateHeight(i,0)}static empty(){return new Cs(0,0,0)}static of(t){if(1==t.length)return t[0]
let e=0,i=t.length,n=0,s=0
for(;;)if(e==i)if(n>2*s){let s=t[e-1]
s.break?t.splice(--e,1,s.left,null,s.right):t.splice(--e,1,s.left,s.right),i+=1+s.break,n-=s.size}else{if(!(s>2*n))break
{let e=t[i]
e.break?t.splice(i,1,e.left,null,e.right):t.splice(i,1,e.left,e.right),i+=2+e.break,s-=e.size}}else if(n<s){let i=t[e++]
i&&(n+=i.size)}else{let e=t[--i]
e&&(s+=e.size)}let r=!1
return null==t[e-1]?(r=!0,e--):null==t[e]&&(r=!0,i++),new js(As.of(t.slice(0,e)),r,As.of(t.slice(i)))}}function Ts(t,e){return t==e?t:(t.constructor!=e.constructor&&(xs=!0),e)}As.prototype.size=1
const Ms=xe.replace({})
class Rs extends As{constructor(t,e,i){super(t,e),this.deco=i,this.spaceAbove=0}mainBlock(t,e){return new Ps(e,this.length,t+this.spaceAbove,this.height-this.spaceAbove,this.deco||0)}blockAt(t,e,i,n){return this.spaceAbove&&t<i+this.spaceAbove?new Ps(n,0,i,this.spaceAbove,Ms):this.mainBlock(i,n)}lineAt(t,e,i,n,s){let r=this.mainBlock(n,s)
return this.spaceAbove?this.blockAt(0,i,n,s).join(r):r}forEachLine(t,e,i,n,s,r){t<=s+this.length&&e>=s&&r(this.lineAt(0,Zs.ByPos,i,n,s))}setMeasuredHeight(t){let e=t.heights[t.index++]
e<0?(this.spaceAbove=-e,e=t.heights[t.index++]):this.spaceAbove=0,this.setHeight(e)}updateHeight(t,e=0,i=!1,n){return n&&n.from<=e&&n.more&&this.setMeasuredHeight(n),this.outdated=!1,this}toString(){return`block(${this.length})`}}class Cs extends Rs{constructor(t,e,i){super(t,e,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0,this.spaceAbove=i}mainBlock(t,e){return new Ps(e,this.length,t+this.spaceAbove,this.height-this.spaceAbove,this.breaks)}replace(t,e,i){let n=i[0]
return 1==i.length&&(n instanceof Cs||n instanceof _s&&4&n.flags)&&Math.abs(this.length-n.length)<10?(n instanceof _s?n=new Cs(n.length,this.height,this.spaceAbove):n.height=this.height,this.outdated||(n.outdated=!1),n):As.of(i)}updateHeight(t,e=0,i=!1,n){return n&&n.from<=e&&n.more?this.setMeasuredHeight(n):(i||this.outdated)&&(this.spaceAbove=0,this.setHeight(Math.max(this.widgetHeight,t.heightForLine(this.length-this.collapsed))+this.breaks*t.lineHeight)),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`}}class _s extends As{constructor(t){super(t,0)}heightMetrics(t,e){let i,n=t.doc.lineAt(e).number,s=t.doc.lineAt(e+this.length).number,r=s-n+1,o=0
if(t.lineWrapping){let e=Math.min(this.height,t.lineHeight*r)
i=e/r,this.length>r+1&&(o=(this.height-e)/(this.length-r-1))}else i=this.height/r
return{firstLine:n,lastLine:s,perLine:i,perChar:o}}blockAt(t,e,i,n){let{firstLine:s,lastLine:r,perLine:o,perChar:a}=this.heightMetrics(e,n)
if(e.lineWrapping){let s=n+(t<e.lineHeight?0:Math.round(Math.max(0,Math.min(1,(t-i)/this.height))*this.length)),r=e.doc.lineAt(s),l=o+r.length*a,h=Math.max(i,t-l/2)
return new Ps(r.from,r.length,h,l,0)}{let n=Math.max(0,Math.min(r-s,Math.floor((t-i)/o))),{from:a,length:l}=e.doc.line(s+n)
return new Ps(a,l,i+o*n,o,0)}}lineAt(t,e,i,n,s){if(e==Zs.ByHeight)return this.blockAt(t,i,n,s)
if(e==Zs.ByPosNoHeight){let{from:e,to:n}=i.doc.lineAt(t)
return new Ps(e,n-e,0,0,0)}let{firstLine:r,perLine:o,perChar:a}=this.heightMetrics(i,s),l=i.doc.lineAt(t),h=o+l.length*a,c=l.number-r,O=n+o*c+a*(l.from-s-c)
return new Ps(l.from,l.length,Math.max(n,Math.min(O,n+this.height-h)),h,0)}forEachLine(t,e,i,n,s,r){t=Math.max(t,s),e=Math.min(e,s+this.length)
let{firstLine:o,perLine:a,perChar:l}=this.heightMetrics(i,s)
for(let h=t,c=n;h<=e;){let e=i.doc.lineAt(h)
if(h==t){let i=e.number-o
c+=a*i+l*(t-s-i)}let n=a+l*e.length
r(new Ps(e.from,e.length,c,n,0)),c+=n,h=e.to+1}}replace(t,e,i){let n=this.length-e
if(n>0){let t=i[i.length-1]
t instanceof _s?i[i.length-1]=new _s(t.length+n):i.push(null,new _s(n-1))}if(t>0){let e=i[0]
e instanceof _s?i[0]=new _s(t+e.length):i.unshift(new _s(t-1),null)}return As.of(i)}decomposeLeft(t,e){e.push(new _s(t-1),null)}decomposeRight(t,e){e.push(null,new _s(this.length-t-1))}updateHeight(t,e=0,i=!1,n){let s=e+this.length
if(n&&n.from<=e+this.length&&n.more){let i=[],r=Math.max(e,n.from),o=-1
for(n.from>e&&i.push(new _s(n.from-e-1).updateHeight(t,e));r<=s&&n.more;){let e=t.doc.lineAt(r).length
i.length&&i.push(null)
let s=n.heights[n.index++],a=0
s<0&&(a=-s,s=n.heights[n.index++]),-1==o?o=s:Math.abs(s-o)>=Xs&&(o=-2)
let l=new Cs(e,s,a)
l.outdated=!1,i.push(l),r+=e+1}r<=s&&i.push(null,new _s(s-r).updateHeight(t,r))
let a=As.of(i)
return(o<0||Math.abs(a.height-this.height)>=Xs||Math.abs(o-this.heightMetrics(t,e).perLine)>=Xs)&&(xs=!0),Ts(this,a)}return(i||this.outdated)&&(this.setHeight(t.heightForGap(e,e+this.length)),this.outdated=!1),this}toString(){return`gap(${this.length})`}}class js extends As{constructor(t,e,i){super(t.length+(e?1:0)+i.length,t.height+i.height,(e?1:0)|(t.outdated||i.outdated?2:0)),this.left=t,this.right=i,this.size=t.size+i.size}get break(){return 1&this.flags}blockAt(t,e,i,n){let s=i+this.left.height
return t<s?this.left.blockAt(t,e,i,n):this.right.blockAt(t,e,s,n+this.left.length+this.break)}lineAt(t,e,i,n,s){let r=n+this.left.height,o=s+this.left.length+this.break,a=e==Zs.ByHeight?t<r:t<o,l=a?this.left.lineAt(t,e,i,n,s):this.right.lineAt(t,e,i,r,o)
if(this.break||(a?l.to<o:l.from>o))return l
let h=e==Zs.ByPosNoHeight?Zs.ByPosNoHeight:Zs.ByPos
return a?l.join(this.right.lineAt(o,h,i,r,o)):this.left.lineAt(o,h,i,n,s).join(l)}forEachLine(t,e,i,n,s,r){let o=n+this.left.height,a=s+this.left.length+this.break
if(this.break)t<a&&this.left.forEachLine(t,e,i,n,s,r),e>=a&&this.right.forEachLine(t,e,i,o,a,r)
else{let l=this.lineAt(a,Zs.ByPos,i,n,s)
t<l.from&&this.left.forEachLine(t,Math.min(e,l.from-1),i,n,s,r),l.to>=t&&l.from<=e&&r(l),e>l.to&&this.right.forEachLine(Math.max(t,l.to+1),e,i,o,a,r)}}replace(t,e,i){let n=this.left.length+this.break
if(e<n)return this.balanced(this.left.replace(t,e,i),this.right)
if(t>this.left.length)return this.balanced(this.left,this.right.replace(t-n,e-n,i))
let s=[]
t>0&&this.decomposeLeft(t,s)
let r=s.length
for(let t of i)s.push(t)
if(t>0&&Ys(s,r-1),e<this.length){let t=s.length
this.decomposeRight(e,s),Ys(s,t)}return As.of(s)}decomposeLeft(t,e){let i=this.left.length
if(t<=i)return this.left.decomposeLeft(t,e)
e.push(this.left),this.break&&(i++,t>=i&&e.push(null)),t>i&&this.right.decomposeLeft(t-i,e)}decomposeRight(t,e){let i=this.left.length,n=i+this.break
if(t>=n)return this.right.decomposeRight(t-n,e)
t<i&&this.left.decomposeRight(t,e),this.break&&t<n&&e.push(null),e.push(this.right)}balanced(t,e){return t.size>2*e.size||e.size>2*t.size?As.of(this.break?[t,null,e]:[t,e]):(this.left=Ts(this.left,t),this.right=Ts(this.right,e),this.setHeight(t.height+e.height),this.outdated=t.outdated||e.outdated,this.size=t.size+e.size,this.length=t.length+this.break+e.length,this)}updateHeight(t,e=0,i=!1,n){let{left:s,right:r}=this,o=e+s.length+this.break,a=null
return n&&n.from<=e+s.length&&n.more?a=s=s.updateHeight(t,e,i,n):s.updateHeight(t,e,i),n&&n.from<=o+r.length&&n.more?a=r=r.updateHeight(t,o,i,n):r.updateHeight(t,o,i),a?this.balanced(s,r):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?" ":"-")+this.right}}function Ys(t,e){let i,n
null==t[e]&&(i=t[e-1])instanceof _s&&(n=t[e+1])instanceof _s&&t.splice(e-1,3,new _s(i.length+1+n.length))}class Ws{constructor(t,e){this.pos=t,this.oracle=e,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=t}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(t,e){if(this.lineStart>-1){let t=Math.min(e,this.lineEnd),i=this.nodes[this.nodes.length-1]
i instanceof Cs?i.length+=t-this.pos:(t>this.pos||!this.isCovered)&&this.nodes.push(new Cs(t-this.pos,-1,0)),this.writtenTo=t,e>t&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=e}point(t,e,i){if(t<e||i.heightRelevant){let n=i.widget?i.widget.estimatedHeight:0,s=i.widget?i.widget.lineBreaks:0
n<0&&(n=this.oracle.lineHeight)
let r=e-t
i.block?this.addBlock(new Rs(r,n,i)):(r||s||n>=5)&&this.addLineDeco(n,s,r)}else e>t&&this.span(t,e)
this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return
let{from:t,to:e}=this.oracle.doc.lineAt(this.pos)
this.lineStart=t,this.lineEnd=e,this.writtenTo<t&&((this.writtenTo<t-1||null==this.nodes[this.nodes.length-1])&&this.nodes.push(this.blankContent(this.writtenTo,t-1)),this.nodes.push(null)),this.pos>t&&this.nodes.push(new Cs(this.pos-t,-1,0)),this.writtenTo=this.pos}blankContent(t,e){let i=new _s(e-t)
return this.oracle.doc.lineAt(t).to==e&&(i.flags|=4),i}ensureLine(){this.enterLine()
let t=this.nodes.length?this.nodes[this.nodes.length-1]:null
if(t instanceof Cs)return t
let e=new Cs(0,-1,0)
return this.nodes.push(e),e}addBlock(t){this.enterLine()
let e=t.deco
e&&e.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(t),this.writtenTo=this.pos=this.pos+t.length,e&&e.endSide>0&&(this.covering=t)}addLineDeco(t,e,i){let n=this.ensureLine()
n.length+=i,n.collapsed+=i,n.widgetHeight=Math.max(n.widgetHeight,t),n.breaks+=e,this.writtenTo=this.pos=this.pos+i}finish(t){let e=0==this.nodes.length?null:this.nodes[this.nodes.length-1]
!(this.lineStart>-1)||e instanceof Cs||this.isCovered?(this.writtenTo<this.pos||null==e)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos)):this.nodes.push(new Cs(0,-1,0))
let i=t
for(let t of this.nodes)t instanceof Cs&&t.updateHeight(this.oracle,i),i+=t?t.length:1
return this.nodes}static build(t,e,i,n){let s=new Ws(i,t)
return Mt.spans(e,i,n,s,0),s.finish(i)}}class Es{constructor(){this.changes=[]}compareRange(){}comparePoint(t,e,i,n){(t<e||i&&i.heightRelevant||n&&n.heightRelevant)&&Ze(t,e,this.changes,5)}}function zs(t,e){let i=t.getBoundingClientRect(),n=t.ownerDocument,s=n.defaultView||window,r=Math.max(0,i.left),o=Math.min(s.innerWidth,i.right),a=Math.max(0,i.top),l=Math.min(s.innerHeight,i.bottom)
for(let e=t.parentNode;e&&e!=n.body;)if(1==e.nodeType){let i=e,n=window.getComputedStyle(i)
if((i.scrollHeight>i.clientHeight||i.scrollWidth>i.clientWidth)&&"visible"!=n.overflow){let n=i.getBoundingClientRect()
r=Math.max(r,n.left),o=Math.min(o,n.right),a=Math.max(a,n.top),l=Math.min(e==t.parentNode?s.innerHeight:l,n.bottom)}e="absolute"==n.position||"fixed"==n.position?i.offsetParent:i.parentNode}else{if(11!=e.nodeType)break
e=e.host}return{left:r-i.left,right:Math.max(r,o)-i.left,top:a-(i.top+e),bottom:Math.max(a,l)-(i.top+e)}}function qs(t,e){let i=t.getBoundingClientRect()
return{left:0,right:i.right-i.left,top:e,bottom:i.bottom-(i.top+e)}}class Ds{constructor(t,e,i,n){this.from=t,this.to=e,this.size=i,this.displaySize=n}static same(t,e){if(t.length!=e.length)return!1
for(let i=0;i<t.length;i++){let n=t[i],s=e[i]
if(n.from!=s.from||n.to!=s.to||n.size!=s.size)return!1}return!0}draw(t,e){return xe.replace({widget:new Ls(this.displaySize*(e?t.scaleY:t.scaleX),e)}).range(this.from,this.to)}}class Ls extends ve{constructor(t,e){super(),this.size=t,this.vertical=e}eq(t){return t.size==this.size&&t.vertical==this.vertical}toDOM(){let t=document.createElement("div")
return this.vertical?t.style.height=this.size+"px":(t.style.width=this.size+"px",t.style.height="2px",t.style.display="inline-block"),t}get estimatedHeight(){return this.vertical?this.size:-1}}class Us{constructor(t,e){this.view=t,this.state=e,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scaleX=1,this.scaleY=1,this.scrollOffset=0,this.scrolledToBottom=!1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=Is,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=ei.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1
let i=e.facet(Di).some(t=>"function"!=typeof t&&"cm-lineWrapping"==t.class)
this.heightOracle=new ys(i),this.stateDeco=Ns(e),this.heightMap=As.empty().applyChanges(this.stateDeco,O.empty,this.heightOracle.setDoc(e.doc),[new Ki(0,0,0,e.doc.length)])
for(let t=0;t<2&&(this.viewport=this.getViewport(0,null),this.updateForViewport());t++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=xe.set(this.lineGaps.map(t=>t.draw(this,!1))),this.scrollParent=t.scrollDOM,this.computeVisibleRanges()}updateForViewport(){let t=[this.viewport],{main:e}=this.state.selection
for(let i=0;i<=1;i++){let n=i?e.head:e.anchor
if(!t.some(({from:t,to:e})=>n>=t&&n<=e)){let{from:e,to:i}=this.lineBlockAt(n)
t.push(new Bs(e,i))}}return this.viewports=t.sort((t,e)=>t.from-e.from),this.updateScaler()}updateScaler(){let t=this.scaler
return this.scaler=this.heightMap.height<=7e6?Is:new Hs(this.heightOracle,this.heightMap,this.viewports),t.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,t=>{this.viewportLines.push(Fs(t,this.scaler))})}update(t,e=null){this.state=t.state
let i=this.stateDeco
this.stateDeco=Ns(this.state)
let n=t.changedRanges,s=Ki.extendWithRanges(n,function(t,e,i){let n=new Es
return Mt.compare(t,e,i,n,0),n.changes}(i,this.stateDeco,t?t.changes:$.empty(this.state.doc.length))),r=this.heightMap.height,o=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollOffset)
ks(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,t.startState.doc,this.heightOracle.setDoc(this.state.doc),s),(this.heightMap.height!=r||xs)&&(t.flags|=2),o?(this.scrollAnchorPos=t.changes.mapPos(o.from,-1),this.scrollAnchorHeight=o.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=r)
let a=s.length?this.mapViewport(this.viewport,t.changes):this.viewport;(e&&(e.range.head<a.from||e.range.head>a.to)||!this.viewportIsAppropriate(a))&&(a=this.getViewport(0,e))
let l=a.from!=this.viewport.from||a.to!=this.viewport.to
this.viewport=a,t.flags|=this.updateForViewport(),(l||!t.changes.empty||2&t.flags)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,t.changes))),t.flags|=this.computeVisibleRanges(t.changes),e&&(this.scrollTarget=e),!this.mustEnforceCursorAssoc&&(t.selectionSet||t.focusChanged)&&t.view.lineWrapping&&t.state.selection.main.empty&&t.state.selection.main.assoc&&!t.state.facet(Ai)&&(this.mustEnforceCursorAssoc=!0)}measure(){let{view:t}=this,e=t.contentDOM,i=window.getComputedStyle(e),n=this.heightOracle,s=i.whiteSpace
this.defaultTextDirection="rtl"==i.direction?ei.RTL:ei.LTR
let r=this.heightOracle.mustRefreshForWrapping(s)||"refresh"===this.mustMeasureContent,o=e.getBoundingClientRect(),a=r||this.mustMeasureContent||this.contentDOMHeight!=o.height
this.contentDOMHeight=o.height,this.mustMeasureContent=!1
let l=0,h=0
if(o.width&&o.height){let{scaleX:t,scaleY:i}=qe(e,o);(t>.005&&Math.abs(this.scaleX-t)>.005||i>.005&&Math.abs(this.scaleY-i)>.005)&&(this.scaleX=t,this.scaleY=i,l|=16,r=a=!0)}let c=(parseInt(i.paddingTop)||0)*this.scaleY,f=(parseInt(i.paddingBottom)||0)*this.scaleY
this.paddingTop==c&&this.paddingBottom==f||(this.paddingTop=c,this.paddingBottom=f,l|=18),this.editorWidth!=t.scrollDOM.clientWidth&&(n.lineWrapping&&(a=!0),this.editorWidth=t.scrollDOM.clientWidth,l|=16)
let u=De(this.view.contentDOM,!1).y
u!=this.scrollParent&&(this.scrollParent=u,this.scrollAnchorHeight=-1,this.scrollOffset=0)
let d=this.getScrollOffset()
this.scrollOffset!=d&&(this.scrollAnchorHeight=-1,this.scrollOffset=d),this.scrolledToBottom=Fe(this.scrollParent||t.win)
let p=(this.printing?qs:zs)(e,this.paddingTop),g=p.top-this.pixelViewport.top,m=p.bottom-this.pixelViewport.bottom
this.pixelViewport=p
let Q=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left
if(Q!=this.inView&&(this.inView=Q,Q&&(a=!0)),!this.inView&&!this.scrollTarget&&!function(t){let e=t.getBoundingClientRect(),i=t.ownerDocument.defaultView||window
return e.left<i.innerWidth&&e.right>0&&e.top<i.innerHeight&&e.bottom>0}(t.dom))return 0
let w=o.width
if(this.contentDOMWidth==w&&this.editorHeight==t.scrollDOM.clientHeight||(this.contentDOMWidth=o.width,this.editorHeight=t.scrollDOM.clientHeight,l|=16),a){let e=t.docView.measureVisibleLineHeights(this.viewport)
if(n.mustRefreshForHeights(e)&&(r=!0),r||n.lineWrapping&&Math.abs(w-this.contentDOMWidth)>n.charWidth){let{lineHeight:i,charWidth:o,textHeight:a}=t.docView.measureTextSize()
r=i>0&&n.refresh(s,i,o,a,Math.max(5,w/o),e),r&&(t.docView.minWidth=0,l|=16)}g>0&&m>0?h=Math.max(g,m):g<0&&m<0&&(h=Math.min(g,m)),ks()
for(let i of this.viewports){let s=i.from==this.viewport.from?e:t.docView.measureVisibleLineHeights(i)
this.heightMap=(r?As.empty().applyChanges(this.stateDeco,O.empty,this.heightOracle,[new Ki(0,0,0,t.state.doc.length)]):this.heightMap).updateHeight(n,0,r,new $s(i.from,s))}xs&&(l|=2)}let b=!this.viewportIsAppropriate(this.viewport,h)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to)
return b&&(2&l&&(l|=this.updateScaler()),this.viewport=this.getViewport(h,this.scrollTarget),l|=this.updateForViewport()),(2&l||b)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(r?[]:this.lineGaps,t)),l|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,t.docView.enforceCursorAssoc()),l}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(t,e){let i=.5-Math.max(-.5,Math.min(.5,t/1e3/2)),n=this.heightMap,s=this.heightOracle,{visibleTop:r,visibleBottom:o}=this,a=new Bs(n.lineAt(r-1e3*i,Zs.ByHeight,s,0,0).from,n.lineAt(o+1e3*(1-i),Zs.ByHeight,s,0,0).to)
if(e){let{head:t}=e.range
if(t<a.from||t>a.to){let i,r=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),o=n.lineAt(t,Zs.ByPos,s,0,0)
i="center"==e.y?(o.top+o.bottom)/2-r/2:"start"==e.y||"nearest"==e.y&&t<a.from?o.top:o.bottom-r,a=new Bs(n.lineAt(i-500,Zs.ByHeight,s,0,0).from,n.lineAt(i+r+500,Zs.ByHeight,s,0,0).to)}}return a}mapViewport(t,e){let i=e.mapPos(t.from,-1),n=e.mapPos(t.to,1)
return new Bs(this.heightMap.lineAt(i,Zs.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(n,Zs.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:t,to:e},i=0){if(!this.inView)return!0
let{top:n}=this.heightMap.lineAt(t,Zs.ByPos,this.heightOracle,0,0),{bottom:s}=this.heightMap.lineAt(e,Zs.ByPos,this.heightOracle,0,0),{visibleTop:r,visibleBottom:o}=this
return(0==t||n<=r-Math.max(10,Math.min(-i,250)))&&(e==this.state.doc.length||s>=o+Math.max(10,Math.min(i,250)))&&n>r-2e3&&s<o+2e3}mapLineGaps(t,e){if(!t.length||e.empty)return t
let i=[]
for(let n of t)e.touchesRange(n.from,n.to)||i.push(new Ds(e.mapPos(n.from),e.mapPos(n.to),n.size,n.displaySize))
return i}ensureLineGaps(t,e){let i=this.heightOracle.lineWrapping,n=i?1e4:2e3,s=n>>1,r=n<<1
if(this.defaultTextDirection!=ei.LTR&&!i)return[]
let o=[],a=(n,r,l,h)=>{if(r-n<s)return
let c=this.state.selection.main,O=[c.from]
c.empty||O.push(c.to)
for(let t of O)if(t>n&&t<r)return a(n,t-10,l,h),void a(t+10,r,l,h)
let f=function(t,e){for(let i of t)if(e(i))return i
return}(t,t=>t.from>=l.from&&t.to<=l.to&&Math.abs(t.from-n)<s&&Math.abs(t.to-r)<s&&!O.some(e=>t.from<e&&t.to>e))
if(!f){if(r<l.to&&e&&i&&e.visibleRanges.some(t=>t.from<=r&&t.to>=r)){let t=e.moveToLineBoundary(C.cursor(r),!1,!0).head
t>n&&(r=t)}let t=this.gapSize(l,n,r,h)
f=new Ds(n,r,t,i||t<2e6?t:2e6)}o.push(f)},l=e=>{if(e.length<r||e.type!=Se.Text)return
let s=function(t,e,i){let n=[],s=t,r=0
Mt.spans(i,t,e,{span(){},point(t,e){t>s&&(n.push({from:s,to:t}),r+=t-s),s=e}},20),s<e&&(n.push({from:s,to:e}),r+=e-s)
return{total:r,ranges:n}}(e.from,e.to,this.stateDeco)
if(s.total<r)return
let o,l,h=this.scrollTarget?this.scrollTarget.range.head:null
if(i){let t,i,r=n/this.heightOracle.lineLength*this.heightOracle.lineHeight
if(null!=h){let n=Gs(s,h),o=((this.visibleBottom-this.visibleTop)/2+r)/e.height
t=n-o,i=n+o}else t=(this.visibleTop-e.top-r)/e.height,i=(this.visibleBottom-e.top+r)/e.height
o=Vs(s,t),l=Vs(s,i)}else{let i=s.total*this.heightOracle.charWidth,r=n*this.heightOracle.charWidth,a=0
if(i>2e6)for(let i of t)i.from>=e.from&&i.from<e.to&&i.size!=i.displaySize&&i.from*this.heightOracle.charWidth+a<this.pixelViewport.left&&(a=i.size-i.displaySize)
let c,O,f=this.pixelViewport.left+a,u=this.pixelViewport.right+a
if(null!=h){let t=Gs(s,h),e=((u-f)/2+r)/i
c=t-e,O=t+e}else c=(f-r)/i,O=(u+r)/i
o=Vs(s,c),l=Vs(s,O)}o>e.from&&a(e.from,o,e,s),l<e.to&&a(l,e.to,e,s)}
for(let t of this.viewportLines)Array.isArray(t.type)?t.type.forEach(l):l(t)
return o}gapSize(t,e,i,n){let s=Gs(n,i)-Gs(n,e)
return this.heightOracle.lineWrapping?t.height*s:n.total*this.heightOracle.charWidth*s}updateLineGaps(t){Ds.same(t,this.lineGaps)||(this.lineGaps=t,this.lineGapDeco=xe.set(t.map(t=>t.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(t){let e=this.stateDeco
this.lineGaps.length&&(e=e.concat(this.lineGapDeco))
let i=[]
Mt.spans(e,this.viewport.from,this.viewport.to,{span(t,e){i.push({from:t,to:e})},point(){}},20)
let n=0
if(i.length!=this.visibleRanges.length)n=12
else for(let e=0;e<i.length&&!(8&n);e++){let s=this.visibleRanges[e],r=i[e]
s.from==r.from&&s.to==r.to||(n|=4,t&&t.mapPos(s.from,-1)==r.from&&t.mapPos(s.to,1)==r.to||(n|=8))}return this.visibleRanges=i,n}lineBlockAt(t){return t>=this.viewport.from&&t<=this.viewport.to&&this.viewportLines.find(e=>e.from<=t&&e.to>=t)||Fs(this.heightMap.lineAt(t,Zs.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(t){return t>=this.viewportLines[0].top&&t<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(e=>e.top<=t&&e.bottom>=t)||Fs(this.heightMap.lineAt(this.scaler.fromDOM(t),Zs.ByHeight,this.heightOracle,0,0),this.scaler)}getScrollOffset(){return this.scrollParent==this.view.scrollDOM?this.scrollParent.scrollTop*this.scaleY:(this.scrollParent?this.scrollParent.getBoundingClientRect().top:0)-this.view.contentDOM.getBoundingClientRect().top}scrollAnchorAt(t){let e=this.lineBlockAtHeight(t+8)
return e.from>=this.viewport.from||this.viewportLines[0].top-t>200?e:this.viewportLines[0]}elementAtHeight(t){return Fs(this.heightMap.blockAt(this.scaler.fromDOM(t),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}}class Bs{constructor(t,e){this.from=t,this.to=e}}function Vs({total:t,ranges:e},i){if(i<=0)return e[0].from
if(i>=1)return e[e.length-1].to
let n=Math.floor(t*i)
for(let t=0;;t++){let{from:i,to:s}=e[t],r=s-i
if(n<=r)return i+n
n-=r}}function Gs(t,e){let i=0
for(let{from:n,to:s}of t.ranges){if(e<=s){i+=e-n
break}i+=s-n}return i/t.total}const Is={toDOM:t=>t,fromDOM:t=>t,scale:1,eq(t){return t==this}}
function Ns(t){let e=t.facet(Li).filter(t=>"function"!=typeof t),i=t.facet(Bi).filter(t=>"function"!=typeof t)
return i.length&&e.push(Mt.join(i)),e}class Hs{constructor(t,e,i){let n=0,s=0,r=0
this.viewports=i.map(({from:i,to:s})=>{let r=e.lineAt(i,Zs.ByPos,t,0,0).top,o=e.lineAt(s,Zs.ByPos,t,0,0).bottom
return n+=o-r,{from:i,to:s,top:r,bottom:o,domTop:0,domBottom:0}}),this.scale=(7e6-n)/(e.height-n)
for(let t of this.viewports)t.domTop=r+(t.top-s)*this.scale,r=t.domBottom=t.domTop+(t.bottom-t.top),s=t.bottom}toDOM(t){for(let e=0,i=0,n=0;;e++){let s=e<this.viewports.length?this.viewports[e]:null
if(!s||t<s.top)return n+(t-i)*this.scale
if(t<=s.bottom)return s.domTop+(t-s.top)
i=s.bottom,n=s.domBottom}}fromDOM(t){for(let e=0,i=0,n=0;;e++){let s=e<this.viewports.length?this.viewports[e]:null
if(!s||t<s.domTop)return i+(t-n)/this.scale
if(t<=s.domBottom)return s.top+(t-s.domTop)
i=s.bottom,n=s.domBottom}}eq(t){return t instanceof Hs&&(this.scale==t.scale&&this.viewports.length==t.viewports.length&&this.viewports.every((e,i)=>e.from==t.viewports[i].from&&e.to==t.viewports[i].to))}}function Fs(t,e){if(1==e.scale)return t
let i=e.toDOM(t.top),n=e.toDOM(t.bottom)
return new Ps(t.from,t.length,i,n-i,Array.isArray(t._content)?t._content.map(t=>Fs(t,e)):t._content)}const Ks=Y.define({combine:t=>t.join(" ")}),Js=Y.define({combine:t=>t.indexOf(!0)>-1}),tr=Nt.newName(),er=Nt.newName(),ir=Nt.newName(),nr={"&light":"."+er,"&dark":"."+ir}
function sr(t,e,i){return new Nt(e,{finish:e=>/&/.test(e)?e.replace(/&\w*/,e=>{if("&"==e)return t
if(!i||!i[e])throw new RangeError(`Unsupported selector: ${e}`)
return i[e]}):t+" "+e})}const rr=sr("."+tr,{"&":{position:"relative !important",boxSizing:"border-box","&.cm-focused":{outline:"1px dotted #212121"},display:"flex !important",flexDirection:"column"},".cm-scroller":{display:"flex !important",alignItems:"flex-start !important",fontFamily:"monospace",lineHeight:1.4,height:"100%",overflowX:"auto",position:"relative",zIndex:0,overflowAnchor:"none"},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:"block",whiteSpace:"pre",wordWrap:"normal",boxSizing:"border-box",minHeight:"100%",padding:"4px 0",outline:"none","&[contenteditable=true]":{WebkitUserModify:"read-write-plaintext-only"}},".cm-lineWrapping":{whiteSpace_fallback:"pre-wrap",whiteSpace:"break-spaces",wordBreak:"break-word",overflowWrap:"anywhere",flexShrink:1},"&light .cm-content":{caretColor:"black"},"&dark .cm-content":{caretColor:"white"},".cm-line":{display:"block",padding:"0 2px 0 6px"},".cm-layer":{userSelect:"none",position:"absolute",left:0,top:0,contain:"size style","& > *":{position:"absolute"}},"&light .cm-selectionBackground":{background:"#d9d9d9"},"&dark .cm-selectionBackground":{background:"#222"},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#d7d4f0"},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#233"},".cm-cursorLayer":{pointerEvents:"none"},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:"steps(1) cm-blink 1.2s infinite"},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:"1.2px solid black",marginLeft:"-0.6px",pointerEvents:"none"},".cm-cursor":{display:"none"},"&dark .cm-cursor":{borderLeftColor:"#ddd"},".cm-selectionHandle":{backgroundColor:"currentColor",width:"1.5px"},".cm-selectionHandle-start::before, .cm-selectionHandle-end::before":{content:'""',backgroundColor:"inherit",borderRadius:"50%",width:"8px",height:"8px",position:"absolute",left:"-3.25px"},".cm-selectionHandle-start::before":{top:"-8px"},".cm-selectionHandle-end::before":{bottom:"-8px"},".cm-dropCursor":{position:"absolute"},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:"block"},".cm-iso":{unicodeBidi:"isolate"},".cm-announced":{position:"fixed",top:"-10000px"},"@media print":{".cm-announced":{display:"none"}},"&light .cm-activeLine":{backgroundColor:"#cceeff44"},"&dark .cm-activeLine":{backgroundColor:"#99eeff33"},"&light .cm-specialChar":{color:"red"},"&dark .cm-specialChar":{color:"#f78"},".cm-gutters":{flexShrink:0,display:"flex",height:"100%",boxSizing:"border-box",zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#6c6c6c",border:"0px solid #ddd","&.cm-gutters-before":{borderRightWidth:"1px"},"&.cm-gutters-after":{borderLeftWidth:"1px"}},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",minHeight:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"},".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},".cm-panels-top":{top:"0"},".cm-panels-bottom":{bottom:"0"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"},".cm-dialog":{padding:"2px 19px 4px 6px",position:"relative","& label":{fontSize:"80%"}},".cm-dialog-close":{position:"absolute",top:"3px",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",fontSize:"14px",padding:"0"},".cm-tab":{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},".cm-widgetBuffer":{verticalAlign:"text-top",height:"1em",width:0,display:"inline"},".cm-placeholder":{color:"#888",display:"inline-block",verticalAlign:"top",userSelect:"none"},".cm-highlightSpace":{background:"radial-gradient(circle at 50% 55%, #aaa 20%, transparent 0) no-repeat",backgroundSize:".4em",backgroundPosition:"calc(min(50%, 0px)) center"},".cm-highlightTab":{backgroundImage:'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>\')',backgroundSize:"auto 100%",backgroundPosition:"right 90%",backgroundRepeat:"no-repeat"},".cm-trailingSpace":{backgroundColor:"#ff332255"},".cm-button":{verticalAlign:"middle",color:"inherit",fontSize:"70%",padding:".2em 1em",borderRadius:"1px"},"&light .cm-button":{backgroundImage:"linear-gradient(#eff1f5, #d9d9df)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#b4b4b4, #d0d3d6)"}},"&dark .cm-button":{backgroundImage:"linear-gradient(#393939, #111)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#111, #333)"}},".cm-textfield":{verticalAlign:"middle",color:"inherit",fontSize:"70%",border:"1px solid silver",padding:".2em .5em"},"&light .cm-textfield":{backgroundColor:"white"},"&dark .cm-textfield":{border:"1px solid #555",backgroundColor:"inherit"}},nr),or={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},ar=pe.ie&&pe.ie_version<=11
class lr{constructor(t){this.view=t,this.active=!1,this.editContext=null,this.selectionRange=new Le,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=t.contentDOM,this.observer=new MutationObserver(e=>{for(let t of e)this.queue.push(t);(pe.ie&&pe.ie_version<=11||pe.ios&&t.composing)&&e.some(t=>"childList"==t.type&&t.removedNodes.length||"characterData"==t.type&&t.oldValue.length>t.target.nodeValue.length)?this.flushSoon():this.flush()}),!window.EditContext||!pe.android||!1===t.constructor.EDIT_CONTEXT||pe.chrome&&pe.chrome_version<126||(this.editContext=new Or(t),t.state.facet(ji)&&(t.contentDOM.editContext=this.editContext.editContext)),ar&&(this.onCharData=t=>{this.queue.push({target:t.target,type:"characterData",oldValue:t.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia("print")),"function"==typeof ResizeObserver&&(this.resizeScroll=new ResizeObserver(()=>{var t;(null===(t=this.view.docView)||void 0===t?void 0:t.lastUpdate)<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(t.scrollDOM)),this.addWindowListeners(this.win=t.win),this.start(),"function"==typeof IntersectionObserver&&(this.intersection=new IntersectionObserver(t=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),t.length>0&&t[t.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent("Event")))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(t=>{t.length>0&&t[t.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent("Event"))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(t){this.view.inputState.runHandlers("scroll",t),this.intersecting&&this.view.measure()}onScroll(t){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(t)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(t){("change"!=t.type&&t.type||t.matches)&&(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(t){if(this.gapIntersection&&(t.length!=this.gaps.length||this.gaps.some((e,i)=>e!=t[i]))){this.gapIntersection.disconnect()
for(let e of t)this.gapIntersection.observe(e)
this.gaps=t}}onSelectionChange(t){let e=this.selectionChanged
if(!this.readSelectionRange()||this.delayedAndroidKey)return
let{view:i}=this,n=this.selectionRange
if(i.state.facet(ji)?i.root.activeElement!=this.dom:!Me(this.dom,n))return
let s=n.anchorNode&&i.docView.tile.nearest(n.anchorNode)
s&&s.isWidget()&&s.widget.ignoreEvent(t)?e||(this.selectionChanged=!1):(pe.ie&&pe.ie_version<=11||pe.android&&pe.chrome)&&!i.state.selection.main.empty&&n.focusNode&&Ce(n.focusNode,n.focusOffset,n.anchorNode,n.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:t}=this,e=Ae(t.root)
if(!e)return!1
let i=pe.safari&&11==t.root.nodeType&&t.root.activeElement==this.dom&&function(t,e){if(e.getComposedRanges){let i=e.getComposedRanges(t.root)[0]
if(i)return cr(t,i)}let i=null
function n(t){t.preventDefault(),t.stopImmediatePropagation(),i=t.getTargetRanges()[0]}return t.contentDOM.addEventListener("beforeinput",n,!0),t.dom.ownerDocument.execCommand("indent"),t.contentDOM.removeEventListener("beforeinput",n,!0),i?cr(t,i):null}(this.view,e)||e
if(!i||this.selectionRange.eq(i))return!1
let n=Me(this.dom,i)
return n&&!this.selectionChanged&&t.inputState.lastFocusTime>Date.now()-200&&t.inputState.lastTouchTime<Date.now()-300&&function(t,e){let i=e.focusNode,n=e.focusOffset
if(!i||e.anchorNode!=i||e.anchorOffset!=n)return!1
for(n=Math.min(n,We(i));;)if(n){if(1!=i.nodeType)return!1
let t=i.childNodes[n-1]
"false"==t.contentEditable?n--:(i=t,n=We(i))}else{if(i==t)return!0
n=_e(i),i=i.parentNode}}(this.dom,i)?(this.view.inputState.lastFocusTime=0,t.docView.updateSelection(),!1):(this.selectionRange.setRange(i),n&&(this.selectionChanged=!0),!0)}setSelectionRange(t,e){this.selectionRange.set(t.node,t.offset,e.node,e.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1
let t=0,e=null
for(let i=this.dom;i;)if(1==i.nodeType)!e&&t<this.scrollTargets.length&&this.scrollTargets[t]==i?t++:e||(e=this.scrollTargets.slice(0,t)),e&&e.push(i),i=i.assignedSlot||i.parentNode
else{if(11!=i.nodeType)break
i=i.host}if(t<this.scrollTargets.length&&!e&&(e=this.scrollTargets.slice(0,t)),e){for(let t of this.scrollTargets)t.removeEventListener("scroll",this.onScroll)
for(let t of this.scrollTargets=e)t.addEventListener("scroll",this.onScroll)}}ignore(t){if(!this.active)return t()
try{return this.stop(),t()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,or),ar&&this.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),ar&&this.dom.removeEventListener("DOMCharacterDataModified",this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(t,e){var i
if(!this.delayedAndroidKey){let t=()=>{let t=this.delayedAndroidKey
if(t){this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=t.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&t.force&&He(this.dom,t.key,t.keyCode)}}
this.flushingAndroidKey=this.view.win.requestAnimationFrame(t)}this.delayedAndroidKey&&"Enter"!=t||(this.delayedAndroidKey={key:t,keyCode:e,force:this.lastChange<Date.now()-50||!!(null===(i=this.delayedAndroidKey)||void 0===i?void 0:i.force)})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let t of this.observer.takeRecords())this.queue.push(t)
return this.queue}processRecords(){let t=this.pendingRecords()
t.length&&(this.queue=[])
let e=-1,i=-1,n=!1
for(let s of t){let t=this.readMutation(s)
t&&(t.typeOver&&(n=!0),-1==e?({from:e,to:i}=t):(e=Math.min(t.from,e),i=Math.max(t.to,i)))}return{from:e,to:i,typeOver:n}}readChange(){let{from:t,to:e,typeOver:i}=this.processRecords(),n=this.selectionChanged&&Me(this.dom,this.selectionRange)
if(t<0&&!n)return null
t>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1
let s=new Bn(this.view,t,e,i)
return this.view.docView.domChanged={newSel:s.newSel?s.newSel.main:null},s}flush(t=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1
t&&this.readSelectionRange()
let e=this.readChange()
if(!e)return this.view.requestMeasure(),!1
let i=this.view.state,n=Gn(this.view,e)
return this.view.state==i&&(e.domChanged||e.newSel&&!Hn(this.view.state.selection,e.newSel.main))&&this.view.update([]),n}readMutation(t){let e=this.view.docView.tile.nearest(t.target)
if(!e||e.isWidget())return null
if(e.markDirty("attributes"==t.type),"childList"==t.type){let i=hr(e,t.previousSibling||t.target.previousSibling,-1),n=hr(e,t.nextSibling||t.target.nextSibling,1)
return{from:i?e.posAfter(i):e.posAtStart,to:n?e.posBefore(n):e.posAtEnd,typeOver:!1}}return"characterData"==t.type?{from:e.posAtStart,to:e.posAtEnd,typeOver:t.target.nodeValue==t.oldValue}:null}setWindow(t){t!=this.win&&(this.removeWindowListeners(this.win),this.win=t,this.addWindowListeners(this.win))}addWindowListeners(t){t.addEventListener("resize",this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener("change",this.onPrint):this.printQuery.addListener(this.onPrint):t.addEventListener("beforeprint",this.onPrint),t.addEventListener("scroll",this.onScroll),t.document.addEventListener("selectionchange",this.onSelectionChange)}removeWindowListeners(t){t.removeEventListener("scroll",this.onScroll),t.removeEventListener("resize",this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener("change",this.onPrint):this.printQuery.removeListener(this.onPrint):t.removeEventListener("beforeprint",this.onPrint),t.document.removeEventListener("selectionchange",this.onSelectionChange)}update(t){this.editContext&&(this.editContext.update(t),t.startState.facet(ji)!=t.state.facet(ji)&&(t.view.contentDOM.editContext=t.state.facet(ji)?this.editContext.editContext:null))}destroy(){var t,e,i
this.stop(),null===(t=this.intersection)||void 0===t||t.disconnect(),null===(e=this.gapIntersection)||void 0===e||e.disconnect(),null===(i=this.resizeScroll)||void 0===i||i.disconnect()
for(let t of this.scrollTargets)t.removeEventListener("scroll",this.onScroll)
this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}}function hr(t,e,i){for(;e;){let n=en.get(e)
if(n&&n.parent==t)return n
let s=e.parentNode
e=s!=t.dom?s:i>0?e.nextSibling:e.previousSibling}return null}function cr(t,e){let i=e.startContainer,n=e.startOffset,s=e.endContainer,r=e.endOffset,o=t.docView.domAtPos(t.state.selection.main.anchor,1)
return Ce(o.node,o.offset,s,r)&&([i,n,s,r]=[s,r,i,n]),{anchorNode:i,anchorOffset:n,focusNode:s,focusOffset:r}}class Or{constructor(t){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(t.state)
let e=this.editContext=new window.EditContext({text:t.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,t.state.selection.main.anchor))),selectionEnd:this.toContextPos(t.state.selection.main.head)})
this.handlers.textupdate=i=>{let n=t.state.selection.main,{anchor:s,head:r}=n,o=this.toEditorPos(i.updateRangeStart),a=this.toEditorPos(i.updateRangeEnd)
t.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:i.updateRangeStart,editorBase:o,drifted:!1})
let l=a-o>i.text.length
o==this.from&&s<this.from?o=s:a==this.to&&s>this.to&&(a=s)
let h=Nn(t.state.sliceDoc(o,a),i.text,(l?n.from:n.to)-o,l?"end":null)
if(!h){let e=C.single(this.toEditorPos(i.selectionStart),this.toEditorPos(i.selectionEnd))
return void(Hn(e,n)||t.dispatch({selection:e,userEvent:"select"}))}let c={from:h.from+o,to:h.toA+o,insert:O.of(i.text.slice(h.from,h.toB).split("\n"))}
if((pe.mac||pe.android)&&c.from==r-1&&/^\. ?$/.test(i.text)&&"off"==t.contentDOM.getAttribute("autocorrect")&&(c={from:o,to:a,insert:O.of([i.text.replace("."," ")])}),this.pendingContextChange=c,!t.state.readOnly){let e=this.to-this.from+(c.to-c.from+c.insert.length)
In(t,c,C.single(this.toEditorPos(i.selectionStart,e),this.toEditorPos(i.selectionEnd,e)))}this.pendingContextChange&&(this.revertPending(t.state),this.setSelection(t.state)),c.from<c.to&&!c.insert.length&&t.inputState.composing>=0&&!/[\\p{Alphabetic}\\p{Number}_]/.test(e.text.slice(Math.max(0,i.updateRangeStart-1),Math.min(e.text.length,i.updateRangeStart+1)))&&this.handlers.compositionend(i)},this.handlers.characterboundsupdate=i=>{let n=[],s=null
for(let e=this.toEditorPos(i.rangeStart),r=this.toEditorPos(i.rangeEnd);e<r;e++){let i=t.coordsForChar(e)
s=i&&new DOMRect(i.left,i.top,i.right-i.left,i.bottom-i.top)||s||new DOMRect,n.push(s)}e.updateCharacterBounds(i.rangeStart,n)},this.handlers.textformatupdate=e=>{let i=[]
for(let t of e.getTextFormats()){let e=t.underlineStyle,n=t.underlineThickness
if(!/none/i.test(e)&&!/none/i.test(n)){let s=this.toEditorPos(t.rangeStart),r=this.toEditorPos(t.rangeEnd)
if(s<r){let t=`text-decoration: underline ${/^[a-z]/.test(e)?e+" ":"Dashed"==e?"dashed ":"Squiggle"==e?"wavy ":""}${/thin/i.test(n)?1:2}px`
i.push(xe.mark({attributes:{style:t}}).range(s,r))}}}t.dispatch({effects:Ci.of(xe.set(i))})},this.handlers.compositionstart=()=>{t.inputState.composing<0&&(t.inputState.composing=0,t.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(t.inputState.composing=-1,t.inputState.compositionFirstChange=null,this.composing){let{drifted:e}=this.composing
this.composing=null,e&&this.reset(t.state)}}
for(let t in this.handlers)e.addEventListener(t,this.handlers[t])
this.measureReq={read:t=>{let e=Ae(t.root)
e&&e.rangeCount&&this.editContext.updateSelectionBounds(e.getRangeAt(0).getBoundingClientRect())}}}applyEdits(t){let e=0,i=!1,n=this.pendingContextChange
return t.changes.iterChanges((s,r,o,a,l)=>{if(i)return
let h=l.length-(r-s)
if(n&&r>=n.to){if(n.from==s&&n.to==r&&n.insert.eq(l))return n=this.pendingContextChange=null,e+=h,void(this.to+=h)
n=null,this.revertPending(t.state)}if(s+=e,(r+=e)<=this.from)this.from+=h,this.to+=h
else if(s<this.to){if(s<this.from||r>this.to||this.to-this.from+l.length>3e4)return void(i=!0)
this.editContext.updateText(this.toContextPos(s),this.toContextPos(r),l.toString()),this.to+=h}e+=h}),n&&!i&&this.revertPending(t.state),!i}update(t){let e=this.pendingContextChange,i=t.startState.selection.main
this.composing&&(this.composing.drifted||!t.changes.touchesRange(i.from,i.to)&&t.transactions.some(t=>!t.isUserEvent("input.type")&&t.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=t.changes.mapPos(this.composing.editorBase)):this.applyEdits(t)&&this.rangeIsValid(t.state)?(t.docChanged||t.selectionSet||e)&&this.setSelection(t.state):(this.pendingContextChange=null,this.reset(t.state)),(t.geometryChanged||t.docChanged||t.selectionSet)&&t.view.requestMeasure(this.measureReq)}resetRange(t){let{head:e}=t.selection.main
this.from=Math.max(0,e-1e4),this.to=Math.min(t.doc.length,e+1e4)}reset(t){this.resetRange(t),this.editContext.updateText(0,this.editContext.text.length,t.doc.sliceString(this.from,this.to)),this.setSelection(t)}revertPending(t){let e=this.pendingContextChange
this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(e.from),this.toContextPos(e.from+e.insert.length),t.doc.sliceString(e.from,e.to))}setSelection(t){let{main:e}=t.selection,i=this.toContextPos(Math.max(this.from,Math.min(this.to,e.anchor))),n=this.toContextPos(e.head)
this.editContext.selectionStart==i&&this.editContext.selectionEnd==n||this.editContext.updateSelection(i,n)}rangeIsValid(t){let{head:e}=t.selection.main
return!(this.from>0&&e-this.from<500||this.to<t.doc.length&&this.to-e<500||this.to-this.from>3e4)}toEditorPos(t,e=this.to-this.from){t=Math.min(t,e)
let i=this.composing
return i&&i.drifted?i.editorBase+(t-i.contextBase):t+this.from}toContextPos(t){let e=this.composing
return e&&e.drifted?e.contextBase+(t-e.editorBase):t-this.from}destroy(){for(let t in this.handlers)this.editContext.removeEventListener(t,this.handlers[t])}}class fr{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(t={}){var e
this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.clearAnnouncement=-1,this.contentDOM=document.createElement("div"),this.scrollDOM=document.createElement("div"),this.scrollDOM.tabIndex=-1,this.scrollDOM.className="cm-scroller",this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement("div"),this.announceDOM.className="cm-announced",this.announceDOM.setAttribute("aria-live","polite"),this.dom=document.createElement("div"),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),t.parent&&t.parent.appendChild(this.dom)
let{dispatch:i}=t
this.dispatchTransactions=t.dispatchTransactions||i&&(t=>t.forEach(t=>i(t,this)))||(t=>this.update(t)),this.dispatch=this.dispatch.bind(this),this._root=t.root||function(t){for(;t;){if(t&&(9==t.nodeType||11==t.nodeType&&t.host))return t
t=t.assignedSlot||t.parentNode}return null}(t.parent)||document,this.viewState=new Us(this,t.state||yt.create(t)),t.scrollTo&&t.scrollTo.is(Ri)&&(this.viewState.scrollTarget=t.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(Wi).map(t=>new zi(t))
for(let t of this.plugins)t.update(this)
this.observer=new lr(this),this.inputState=new Fn(this),this.inputState.ensureHandlers(this.plugins),this.docView=new yn(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),(null===(e=document.fonts)||void 0===e?void 0:e.ready)&&document.fonts.ready.then(()=>{this.viewState.mustMeasureContent="refresh",this.requestMeasure()})}dispatch(...t){let e=1==t.length&&t[0]instanceof dt?t:1==t.length&&Array.isArray(t[0])?t[0]:[this.state.update(...t)]
this.dispatchTransactions(e,this)}update(t){if(0!=this.updateState)throw new Error("Calls to EditorView.update are not allowed while an update is in progress")
let e,i=!1,n=!1,s=this.state
for(let e of t){if(e.startState!=s)throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.")
s=e.state}if(this.destroyed)return void(this.viewState.state=s)
let r=this.hasFocus,o=0,a=null
t.some(t=>t.annotation(Qs))?(this.inputState.notifiedFocused=r,o=1):r!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=r,a=ws(s,r),a||(o=1))
let l=this.observer.delayedAndroidKey,h=null
if(l?(this.observer.clearDelayedAndroidKey(),h=this.observer.readChange(),(h&&!this.state.doc.eq(s.doc)||!this.state.selection.eq(s.selection))&&(h=null)):this.observer.clear(),s.facet(yt.phrases)!=this.state.facet(yt.phrases))return this.setState(s)
e=Ji.create(this,s,t),e.flags|=o
let c=this.viewState.scrollTarget
try{this.updateState=2
for(let e of t){if(c&&(c=c.map(e.changes)),e.scrollIntoView){let{main:t}=e.state.selection,{x:i,y:n}=this.state.facet(fr.cursorScrollMargin)
c=new Mi(t.empty?t:C.cursor(t.head,t.head>t.anchor?-1:1),"nearest","nearest",n,i)}for(let t of e.effects)t.is(Ri)&&(c=t.value.clip(this.state))}this.viewState.update(e,c),this.bidiCache=pr.update(this.bidiCache,e.changes),e.empty||(this.updatePlugins(e),this.inputState.update(e)),i=this.docView.update(e),this.state.facet(Fi)!=this.styleModules&&this.mountStyles(),n=this.updateAttrs(),this.showAnnouncements(t),this.docView.updateSelection(i,t.some(t=>t.isUserEvent("select.pointer")))}finally{this.updateState=0}if(e.startState.facet(Ks)!=e.state.facet(Ks)&&(this.viewState.mustMeasureContent=!0),(i||n||c||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),i&&this.docViewUpdate(),!e.empty)for(let t of this.state.facet(ki))try{t(e)}catch(t){_i(this.state,t,"update listener")}(a||h)&&Promise.resolve().then(()=>{a&&this.state==a.startState&&this.dispatch(a),h&&!Gn(this,h)&&l.force&&He(this.contentDOM,l.key,l.keyCode)})}setState(t){if(0!=this.updateState)throw new Error("Calls to EditorView.setState are not allowed while an update is in progress")
if(this.destroyed)return void(this.viewState.state=t)
this.updateState=2
let e=this.hasFocus
try{for(let t of this.plugins)t.destroy(this)
this.viewState=new Us(this,t),this.plugins=t.facet(Wi).map(t=>new zi(t)),this.pluginMap.clear()
for(let t of this.plugins)t.update(this)
this.docView.destroy(),this.docView=new yn(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}e&&this.focus(),this.requestMeasure()}updatePlugins(t){let e=t.startState.facet(Wi),i=t.state.facet(Wi)
if(e!=i){let n=[]
for(let s of i){let i=e.indexOf(s)
if(i<0)n.push(new zi(s))
else{let e=this.plugins[i]
e.mustUpdate=t,n.push(e)}}for(let e of this.plugins)e.mustUpdate!=t&&e.destroy(this)
this.plugins=n,this.pluginMap.clear()}else for(let e of this.plugins)e.mustUpdate=t
for(let t=0;t<this.plugins.length;t++)this.plugins[t].update(this)
e!=i&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let t of this.plugins){let e=t.value
if(e&&e.docViewUpdate)try{e.docViewUpdate(this)}catch(t){_i(this.state,t,"doc view update listener")}}}measure(t=!0){if(this.destroyed)return
if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey)return this.measureScheduled=-1,void this.requestMeasure()
this.measureScheduled=0,t&&this.observer.forceFlush()
let e=null,i=this.viewState.scrollParent,n=this.viewState.getScrollOffset(),{scrollAnchorPos:s,scrollAnchorHeight:r,scaleY:o}=this.viewState
Math.abs(n-this.viewState.scrollOffset)>1&&(r=-1),this.viewState.scrollAnchorHeight=-1
try{for(let t=0;;t++){if(r<0){if(Fe(i||this.win))s=-1,r=this.viewState.heightMap.height/this.viewState.scaleY
else{let t=this.viewState.scrollAnchorAt(n)
s=t.from,r=t.top}o=this.viewState.scaleY}this.updateState=1
let a=this.viewState.measure()
if(!a&&!this.measureRequests.length&&null==this.viewState.scrollTarget)break
if(t>5){console.warn(this.measureRequests.length?"Measure loop restarted more than 5 times":"Viewport failed to stabilize")
break}let l=[]
4&a||([this.measureRequests,l]=[l,this.measureRequests])
let h=l.map(t=>{try{return t.read(this)}catch(t){return _i(this.state,t),dr}}),c=Ji.create(this,this.state,[]),O=!1
c.flags|=a,e?e.flags|=a:e=c,this.updateState=2,c.empty||(this.updatePlugins(c),this.inputState.update(c),this.updateAttrs(),O=this.docView.update(c),O&&this.docViewUpdate())
for(let t=0;t<l.length;t++)if(h[t]!=dr)try{let e=l[t]
e.write&&e.write(h[t],this)}catch(t){_i(this.state,t)}if(O&&this.docView.updateSelection(!0),!c.viewportChanged&&0==this.measureRequests.length){if(this.viewState.editorHeight){if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,r=-1
continue}{let t=(s<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(s).top)/this.viewState.scaleY-r/o
if((t>1||t<-1)&&!(pe.ios&&this.inputState.lastIOSMomentumScroll>Date.now()-100)&&(i==this.scrollDOM||this.hasFocus||Math.max(this.inputState.lastWheelEvent,this.inputState.lastTouchTime)>Date.now()-100)){n+=t,i?s<0?i.scrollTop=i.scrollHeight:i.scrollTop+=t:this.win.scrollBy(0,t),r=-1
continue}}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(e&&!e.empty)for(let t of this.state.facet(ki))t(e)}get themeClasses(){return tr+" "+(this.state.facet(Js)?ir:er)+" "+this.state.facet(Ks)}updateAttrs(){let t=gr(this,qi,{class:"cm-editor"+(this.hasFocus?" cm-focused ":" ")+this.themeClasses}),e={spellcheck:"false",autocorrect:"off",autocapitalize:"off",writingsuggestions:"false",translate:"no",contenteditable:this.state.facet(ji)?"true":"false",class:"cm-content",style:`${pe.tabSize}: ${this.state.tabSize}`,role:"textbox","aria-multiline":"true"}
this.state.readOnly&&(e["aria-readonly"]="true"),gr(this,Di,e)
let i=this.observer.ignore(()=>{let i=we(this.contentDOM,this.contentAttrs,e),n=we(this.dom,this.editorAttrs,t)
return i||n})
return this.editorAttrs=t,this.contentAttrs=e,i}showAnnouncements(t){let e=!0
for(let i of t)for(let t of i.effects)if(t.is(fr.announce)){e&&(this.announceDOM.textContent="",this.win.clearTimeout(this.clearAnnouncement),this.clearAnnouncement=this.win.setTimeout(()=>{this.announceDOM.textContent=" "},200),e=!1),this.announceDOM.appendChild(document.createElement("div")).textContent=t.value}}mountStyles(){this.styleModules=this.state.facet(Fi)
let t=this.state.facet(fr.cspNonce)
Nt.mount(this.root,this.styleModules.concat(rr).reverse(),t?{nonce:t}:void 0)}readMeasured(){if(2==this.updateState)throw new Error("Reading the editor layout isn't allowed during an update")
0==this.updateState&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(t){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),t){if(this.measureRequests.indexOf(t)>-1)return
if(null!=t.key)for(let e=0;e<this.measureRequests.length;e++)if(this.measureRequests[e].key===t.key)return void(this.measureRequests[e]=t)
this.measureRequests.push(t)}}plugin(t){let e=this.pluginMap.get(t)
return(void 0===e||e&&e.plugin!=t)&&this.pluginMap.set(t,e=this.plugins.find(e=>e.plugin==t)||null),e&&e.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(t){return this.readMeasured(),this.viewState.elementAtHeight(t)}lineBlockAtHeight(t){return this.readMeasured(),this.viewState.lineBlockAtHeight(t)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(t){return this.viewState.lineBlockAt(t)}get contentHeight(){return this.viewState.contentHeight}moveByChar(t,e,i){return jn(this,t,Rn(this,t,e,i))}moveByGroup(t,e){return jn(this,t,Rn(this,t,e,e=>function(t,e,i){let n=t.state.charCategorizer(e),s=n(i)
return t=>{let e=n(t)
return s==vt.Space&&(s=e),s==e}}(this,t.head,e)))}visualLineSide(t,e){return e?C.cursor(t.to,1):C.cursor(t.from,-1)}moveToLineBoundary(t,e,i=!0){return function(t,e,i,n){let s=Mn(t,e.head,e.assoc||-1),r=n&&s.type==Se.Text&&(t.lineWrapping||s.widgetLineBreaks)?t.coordsAtPos(e.assoc<0&&e.head>s.from?e.head-1:e.head):null
if(r){let e=t.dom.getBoundingClientRect(),n=t.textDirectionAt(s.from),o=t.posAtCoords({x:i==(n==ei.LTR)?e.right-1:e.left+1,y:(r.top+r.bottom)/2})
if(null!=o)return C.cursor(o,i?-1:1)}return C.cursor(i?s.to:s.from,i?-1:1)}(this,t,e,i)}moveVertically(t,e,i){return jn(this,t,function(t,e,i,n){let s=e.head,r=i?1:-1
if(s==(i?t.state.doc.length:0))return C.cursor(s,e.assoc)
let o,a=e.goalColumn,l=t.contentDOM.getBoundingClientRect(),h=t.coordsAtPos(s,e.assoc||((e.empty?i:e.head==e.from)?1:-1)),c=t.documentTop
if(h)null==a&&(a=h.left-l.left),o=r<0?h.top:h.bottom
else{let e=t.viewState.lineBlockAt(s)
null==a&&(a=Math.min(l.right-l.left,t.defaultCharacterWidth*(s-e.from))),o=(r<0?e.top:e.bottom)+c}let O=l.left+a,f=t.viewState.heightOracle.textHeight>>1,u=null!=n?n:f
for(let e=0;;e+=f){let n=o+(u+e)*r,s=Wn(t,{x:O,y:n},!1,r)
if(i?n>l.bottom:n<l.top)return C.cursor(s.pos,s.assoc)
let h=t.coordsAtPos(s.pos,s.assoc),c=h?(h.top+h.bottom)/2:0
if(!h||(i?c>o:c<o))return C.cursor(s.pos,s.assoc,void 0,a)}}(this,t,e,i))}domAtPos(t,e=1){return this.docView.domAtPos(t,e)}posAtDOM(t,e=0){return this.docView.posFromDOM(t,e)}posAtCoords(t,e=!0){this.readMeasured()
let i=Wn(this,t,e)
return i&&i.pos}posAndSideAtCoords(t,e=!0){return this.readMeasured(),Wn(this,t,e)}coordsAtPos(t,e=1){this.readMeasured()
let i=this.state.doc.lineAt(t),n=this.bidiSpans(i),s=n[Oi.find(n,t-i.from,-1,e)]
return i.length&&(t==i.from&&e<0||t==i.to&&e>0)&&s.dir!=this.textDirectionAt(i.from)&&(t==i.to?(t=i.from+s.from,e=1):(t=i.from+s.to,e=-1)),this.docView.coordsAt(t,e,s.dir==ei.RTL)}coordsForChar(t){return this.readMeasured(),this.docView.coordsForChar(t)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(t){return!this.state.facet(Xi)||t<this.viewport.from||t>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(t))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(t){if(t.length>ur)return gi(t.length)
let e,i=this.textDirectionAt(t.from)
for(let n of this.bidiCache)if(n.from==t.from&&n.dir==i&&(n.fresh||fi(n.isolates,e=Ii(this,t))))return n.order
e||(e=Ii(this,t))
let n=function(t,e,i){if(!t)return[new Oi(0,0,e==ni?1:0)]
if(e==ii&&!i.length&&!ci.test(t))return gi(t.length)
if(i.length)for(;t.length>ui.length;)ui[ui.length]=256
let n=[],s=e==ii?0:1
return pi(t,s,s,i,0,t.length,n),n}(t.text,i,e)
return this.bidiCache.push(new pr(t.from,t.to,i,e,!0,n)),n}get hasFocus(){var t
return(this.dom.ownerDocument.hasFocus()||pe.safari&&(null===(t=this.inputState)||void 0===t?void 0:t.lastContextMenu)>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{Ie(this.contentDOM),this.docView.updateSelection()})}setRoot(t){this._root!=t&&(this._root=t,this.observer.setWindow((9==t.nodeType?t:t.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur()
for(let t of this.plugins)t.destroy(this)
this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.win.clearTimeout(this.clearAnnouncement),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(t,e={}){var i,n,s,r
return Ri.of(new Mi("number"==typeof t?C.cursor(t):t,null!==(i=e.y)&&void 0!==i?i:"nearest",null!==(n=e.x)&&void 0!==n?n:"nearest",null!==(s=e.yMargin)&&void 0!==s?s:5,null!==(r=e.xMargin)&&void 0!==r?r:5))}scrollSnapshot(){let{scrollTop:t,scrollLeft:e}=this.scrollDOM,i=this.viewState.scrollAnchorAt(t)
return Ri.of(new Mi(C.cursor(i.from),"start","start",i.top-t,e,!0))}setTabFocusMode(t){null==t?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:"boolean"==typeof t?this.inputState.tabFocusMode=t?0:-1:0!=this.inputState.tabFocusMode&&(this.inputState.tabFocusMode=Date.now()+t)}static domEventHandlers(t){return Ei.define(()=>({}),{eventHandlers:t})}static domEventObservers(t){return Ei.define(()=>({}),{eventObservers:t})}static theme(t,e){let i=Nt.newName(),n=[Ks.of(i),Fi.of(sr(`.${i}`,t))]
return e&&e.dark&&n.push(Js.of(!0)),n}static baseTheme(t){return H.lowest(Fi.of(sr("."+tr,t,nr)))}static findFromDOM(t){var e
let i=t.querySelector(".cm-content"),n=i&&en.get(i)||en.get(t)
return(null===(e=null==n?void 0:n.root)||void 0===e?void 0:e.view)||null}}fr.styleModule=Fi,fr.inputHandler=yi,fr.clipboardInputFilter=Pi,fr.clipboardOutputFilter=Zi,fr.scrollHandler=Ti,fr.focusChangeEffect=$i,fr.perLineTextDirection=Xi,fr.exceptionSink=xi,fr.updateListener=ki,fr.editable=ji,fr.mouseSelectionStyle=Si,fr.dragMovesSelection=vi,fr.clickAddsSelectionRange=bi,fr.decorations=Li,fr.blockWrappers=Ui,fr.outerDecorations=Bi,fr.atomicRanges=Vi,fr.bidiIsolatedRanges=Gi,fr.cursorScrollMargin=Y.define({combine:t=>{let e=5,i=5
for(let n of t)"number"==typeof n?e=i=n:({x:e,y:i}=n)
return{x:e,y:i}}}),fr.scrollMargins=Ni,fr.darkTheme=Js,fr.cspNonce=Y.define({combine:t=>t.length?t[0]:""}),fr.contentAttributes=Di,fr.editorAttributes=qi,fr.lineWrapping=fr.contentAttributes.of({class:"cm-lineWrapping"}),fr.announce=ut.define()
const ur=4096,dr={}
class pr{constructor(t,e,i,n,s,r){this.from=t,this.to=e,this.dir=i,this.isolates=n,this.fresh=s,this.order=r}static update(t,e){if(e.empty&&!t.some(t=>t.fresh))return t
let i=[],n=t.length?t[t.length-1].dir:ei.LTR
for(let s=Math.max(0,t.length-10);s<t.length;s++){let r=t[s]
r.dir!=n||e.touchesRange(r.from,r.to)||i.push(new pr(e.mapPos(r.from,1),e.mapPos(r.to,-1),r.dir,r.isolates,!1,r.order))}return i}}function gr(t,e,i){for(let n=t.state.facet(e),s=n.length-1;s>=0;s--){let e=n[s],r="function"==typeof e?e(t):e
r&&ge(r,i)}return i}const mr=pe.mac?"mac":pe.windows?"win":pe.linux?"linux":"key"
function Qr(t,e,i){return e.altKey&&(t="Alt-"+t),e.ctrlKey&&(t="Ctrl-"+t),e.metaKey&&(t="Meta-"+t),!1!==i&&e.shiftKey&&(t="Shift-"+t),t}const wr=H.default(fr.domEventHandlers({keydown:(t,e)=>function(t,e,i,n){kr=e
let s=function(t){var e=!(te&&t.metaKey&&t.shiftKey&&!t.ctrlKey&&!t.altKey||ee&&t.shiftKey&&t.key&&1==t.key.length||"Unidentified"==t.key)&&t.key||(t.shiftKey?Jt:Kt)[t.keyCode]||t.key||"Unidentified"
return"Esc"==e&&(e="Escape"),"Del"==e&&(e="Delete"),"Left"==e&&(e="ArrowLeft"),"Up"==e&&(e="ArrowUp"),"Right"==e&&(e="ArrowRight"),"Down"==e&&(e="ArrowDown"),e}(e),r=S(s,0),o=function(t){return t<65536?1:2}(r)==s.length&&" "!=s,a="",l=!1,h=!1,c=!1
Sr&&Sr.view==i&&Sr.scope==n&&(a=Sr.prefix+" ",is.indexOf(e.keyCode)<0&&(h=!0,Sr=null))
let O,f,u=new Set,d=t=>{if(t){for(let e of t.run)if(!u.has(e)&&(u.add(e),e(i)))return t.stopPropagation&&(c=!0),!0
t.preventDefault&&(t.stopPropagation&&(c=!0),h=!0)}return!1},p=t[n]
p&&(d(p[a+Qr(s,e,!o)])?l=!0:!o||!(e.altKey||e.metaKey||e.ctrlKey)||pe.windows&&e.ctrlKey&&e.altKey||pe.mac&&e.altKey&&!e.ctrlKey&&!e.metaKey||!(O=Kt[e.keyCode])||O==s?o&&e.shiftKey&&d(p[a+Qr(s,e,!0)])&&(l=!0):(d(p[a+Qr(O,e,!0)])||e.shiftKey&&(f=Jt[e.keyCode])!=s&&f!=O&&d(p[a+Qr(f,e,!1)]))&&(l=!0),!l&&d(p._any)&&(l=!0))
h&&(l=!0)
l&&c&&e.stopPropagation()
return kr=null,l}(function(t){let e=t.facet(br),i=vr.get(e)
i||vr.set(e,i=function(t,e=mr){let i=Object.create(null),n=Object.create(null),s=(t,e)=>{let i=n[t]
if(null==i)n[t]=e
else if(i!=e)throw new Error("Key binding "+t+" is used both as a regular binding and as a multi-stroke prefix")},r=(t,n,r,o,a)=>{var l,h
let c=i[t]||(i[t]=Object.create(null)),O=n.split(/ (?!$)/).map(t=>function(t,e){const i=t.split(/-(?!$)/)
let n,s,r,o,a=i[i.length-1]
"Space"==a&&(a=" ")
for(let t=0;t<i.length-1;++t){const a=i[t]
if(/^(cmd|meta|m)$/i.test(a))o=!0
else if(/^a(lt)?$/i.test(a))n=!0
else if(/^(c|ctrl|control)$/i.test(a))s=!0
else if(/^s(hift)?$/i.test(a))r=!0
else{if(!/^mod$/i.test(a))throw new Error("Unrecognized modifier name: "+a)
"mac"==e?o=!0:s=!0}}return n&&(a="Alt-"+a),s&&(a="Ctrl-"+a),o&&(a="Meta-"+a),r&&(a="Shift-"+a),a}(t,e))
for(let e=1;e<O.length;e++){let i=O.slice(0,e).join(" ")
s(i,!0),c[i]||(c[i]={preventDefault:!0,stopPropagation:!1,run:[e=>{let n=Sr={view:e,prefix:i,scope:t}
return setTimeout(()=>{Sr==n&&(Sr=null)},xr),!0}]})}let f=O.join(" ")
s(f,!1)
let u=c[f]||(c[f]={preventDefault:!1,stopPropagation:!1,run:(null===(h=null===(l=c._any)||void 0===l?void 0:l.run)||void 0===h?void 0:h.slice())||[]})
r&&u.run.push(r),o&&(u.preventDefault=!0),a&&(u.stopPropagation=!0)}
for(let n of t){let t=n.scope?n.scope.split(" "):["editor"]
if(n.any)for(let e of t){let t=i[e]||(i[e]=Object.create(null))
t._any||(t._any={preventDefault:!1,stopPropagation:!1,run:[]})
let{any:s}=n
for(let e in t)t[e].run.push(t=>s(t,kr))}let s=n[e]||n.key
if(s)for(let e of t)r(e,s,n.run,n.preventDefault,n.stopPropagation),n.shift&&r(e,"Shift-"+s,n.shift,n.preventDefault,n.stopPropagation)}return i}(e.reduce((t,e)=>t.concat(e),[])))
return i}(e.state),t,e,"editor")})),br=Y.define({enables:wr}),vr=new WeakMap
let Sr=null
const xr=4e3
let kr=null
class yr{constructor(t,e,i,n,s){this.className=t,this.left=e,this.top=i,this.width=n,this.height=s}draw(){let t=document.createElement("div")
return t.className=this.className,this.adjust(t),t}update(t,e){return e.className==this.className&&(this.adjust(t),!0)}adjust(t){t.style.left=this.left+"px",t.style.top=this.top+"px",null!=this.width&&(t.style.width=this.width+"px"),t.style.height=this.height+"px"}eq(t){return this.left==t.left&&this.top==t.top&&this.width==t.width&&this.height==t.height&&this.className==t.className}static forRange(t,e,i){if(i.empty){let n=t.coordsAtPos(i.head,i.assoc||1)
if(!n)return[]
let s=$r(t)
return[new yr(e,n.left-s.left,n.top-s.top,null,n.bottom-n.top)]}return function(t,e,i){if(i.to<=t.viewport.from||i.from>=t.viewport.to)return[]
let n=Math.max(i.from,t.viewport.from),s=Math.min(i.to,t.viewport.to),r=t.textDirection==ei.LTR,o=t.contentDOM,a=o.getBoundingClientRect(),l=$r(t),h=o.querySelector(".cm-line"),c=h&&window.getComputedStyle(h),O=a.left+(c?parseInt(c.paddingLeft)+Math.min(0,parseInt(c.textIndent)):0),f=a.right-(c?parseInt(c.paddingRight):0),u=Mn(t,n,1),d=Mn(t,s,-1),p=u.type==Se.Text?u:null,g=d.type==Se.Text?d:null
p&&(t.lineWrapping||u.widgetLineBreaks)&&(p=Pr(t,n,1,p))
g&&(t.lineWrapping||d.widgetLineBreaks)&&(g=Pr(t,s,-1,g))
if(p&&g&&p.from==g.from&&p.to==g.to)return Q(w(i.from,i.to,p))
{let e=p?w(i.from,null,p):b(u,!1),n=g?w(null,i.to,g):b(d,!0),s=[]
return(p||u).to<(g||d).from-(p&&g?1:0)||u.widgetLineBreaks>1&&e.bottom+t.defaultLineHeight/2<n.top?s.push(m(O,e.bottom,f,n.top)):e.bottom<n.top&&t.elementAtHeight((e.bottom+n.top)/2).type==Se.Text&&(e.bottom=n.top=(e.bottom+n.top)/2),Q(e).concat(s).concat(Q(n))}function m(t,i,n,s){return new yr(e,t-l.left,i-l.top,Math.max(0,n-t),s-i)}function Q({top:t,bottom:e,horizontal:i}){let n=[]
for(let s=0;s<i.length;s+=2)n.push(m(i[s],t,i[s+1],e))
return n}function w(e,i,n){let s=1e9,o=-1e9,a=[]
function l(e,i,l,h,c){let u=t.coordsAtPos(e,e==n.to?-2:2),d=t.coordsAtPos(l,l==n.from?2:-2)
u&&d&&(s=Math.min(u.top,d.top,s),o=Math.max(u.bottom,d.bottom,o),c==ei.LTR?a.push(r&&i?O:u.left,r&&h?f:d.right):a.push(!r&&h?O:d.left,!r&&i?f:u.right))}let h=null!=e?e:n.from,c=null!=i?i:n.to
for(let n of t.visibleRanges)if(n.to>h&&n.from<c)for(let s=Math.max(n.from,h),r=Math.min(n.to,c);;){let n=t.state.doc.lineAt(s)
for(let o of t.bidiSpans(n)){let t=o.from+n.from,a=o.to+n.from
if(t>=r)break
a>s&&l(Math.max(t,s),null==e&&t<=h,Math.min(a,r),null==i&&a>=c,o.dir)}if(s=n.to+1,s>=r)break}return 0==a.length&&l(h,null==e,c,null==i,t.textDirection),{top:s,bottom:o,horizontal:a}}function b(t,e){let i=a.top+(e?t.top:t.bottom)
return{top:i,bottom:i,horizontal:[]}}}(t,e,i)}}function $r(t){let e=t.scrollDOM.getBoundingClientRect()
return{left:(t.textDirection==ei.LTR?e.left:e.right-t.scrollDOM.clientWidth*t.scaleX)-t.scrollDOM.scrollLeft*t.scaleX,top:e.top-t.scrollDOM.scrollTop*t.scaleY}}function Pr(t,e,i,n){let s=t.coordsAtPos(e,2*i)
if(!s)return n
let r=t.dom.getBoundingClientRect(),o=(s.top+s.bottom)/2,a=t.posAtCoords({x:r.left+1,y:o}),l=t.posAtCoords({x:r.right-1,y:o})
return null==a||null==l?n:{from:Math.max(n.from,Math.min(a,l)),to:Math.min(n.to,Math.max(a,l))}}class Zr{constructor(t,e){this.view=t,this.layer=e,this.drawn=[],this.scaleX=1,this.scaleY=1,this.measureReq={read:this.measure.bind(this),write:this.draw.bind(this)},this.dom=t.scrollDOM.appendChild(document.createElement("div")),this.dom.classList.add("cm-layer"),e.above&&this.dom.classList.add("cm-layer-above"),e.class&&this.dom.classList.add(e.class),this.scale(),this.dom.setAttribute("aria-hidden","true"),this.setOrder(t.state),t.requestMeasure(this.measureReq),e.mount&&e.mount(this.dom,t)}update(t){t.startState.facet(Xr)!=t.state.facet(Xr)&&this.setOrder(t.state),(this.layer.update(t,this.dom)||t.geometryChanged)&&(this.scale(),t.view.requestMeasure(this.measureReq))}docViewUpdate(t){!1!==this.layer.updateOnDocViewUpdate&&t.requestMeasure(this.measureReq)}setOrder(t){let e=0,i=t.facet(Xr)
for(;e<i.length&&i[e]!=this.layer;)e++
this.dom.style.zIndex=String((this.layer.above?150:-1)-e)}measure(){return this.layer.markers(this.view)}scale(){let{scaleX:t,scaleY:e}=this.view
t==this.scaleX&&e==this.scaleY||(this.scaleX=t,this.scaleY=e,this.dom.style.transform=`scale(${1/t}, ${1/e})`)}draw(t){if(t.length!=this.drawn.length||t.some((t,e)=>{return i=t,n=this.drawn[e],!(i.constructor==n.constructor&&i.eq(n))
var i,n})){let e=this.dom.firstChild,i=0
for(let n of t)n.update&&e&&n.constructor&&this.drawn[i].constructor&&n.update(e,this.drawn[i])?(e=e.nextSibling,i++):this.dom.insertBefore(n.draw(),e)
for(;e;){let t=e.nextSibling
e.remove(),e=t}this.drawn=t,pe.webkit&&(this.dom.style.display=this.dom.firstChild?"":"none")}}destroy(){this.layer.destroy&&this.layer.destroy(this.dom,this.view),this.dom.remove()}}const Xr=Y.define()
function Ar(t){return[Ei.define(e=>new Zr(e,t)),Xr.of(t)]}const Tr=Y.define({combine:t=>$t(t,{cursorBlinkRate:1200,drawRangeCursor:!0,iosSelectionHandles:!0},{cursorBlinkRate:(t,e)=>Math.min(t,e),drawRangeCursor:(t,e)=>t||e})})
function Mr(t){return t.startState.facet(Tr)!=t.state.facet(Tr)}const Rr=Ar({above:!0,markers(t){let{state:e}=t,i=e.facet(Tr),n=[]
for(let s of e.selection.ranges){let r=s==e.selection.main
if(s.empty||i.drawRangeCursor&&!(r&&pe.ios&&i.iosSelectionHandles)){let e=r?"cm-cursor cm-cursor-primary":"cm-cursor cm-cursor-secondary",i=s.empty?s:C.cursor(s.head,s.assoc)
for(let s of yr.forRange(t,e,i))n.push(s)}}return n},update(t,e){t.transactions.some(t=>t.selection)&&(e.style.animationName="cm-blink"==e.style.animationName?"cm-blink2":"cm-blink")
let i=Mr(t)
return i&&Cr(t.state,e),t.docChanged||t.selectionSet||i},mount(t,e){Cr(e.state,t)},class:"cm-cursorLayer"})
function Cr(t,e){e.style.animationDuration=t.facet(Tr).cursorBlinkRate+"ms"}const _r=Ar({above:!1,markers(t){let e=[],{main:i,ranges:n}=t.state.selection
for(let i of n)if(!i.empty)for(let n of yr.forRange(t,"cm-selectionBackground",i))e.push(n)
if(pe.ios&&!i.empty&&t.state.facet(Tr).iosSelectionHandles){for(let n of yr.forRange(t,"cm-selectionHandle cm-selectionHandle-start",C.cursor(i.from,1)))e.push(n)
for(let n of yr.forRange(t,"cm-selectionHandle cm-selectionHandle-end",C.cursor(i.to,1)))e.push(n)}return e},update:(t,e)=>t.docChanged||t.selectionSet||t.viewportChanged||Mr(t),class:"cm-selectionLayer"}),jr=pe.gecko&&153==pe.gecko_version?"#ffffff01":"transparent",Yr=H.highest(fr.theme({".cm-line":{"& ::selection, &::selection":{backgroundColor:`${jr} !important`},caretColor:"transparent !important"},".cm-content":{caretColor:"transparent !important","& :focus":{caretColor:"initial !important","&::selection, & ::selection":{backgroundColor:"Highlight !important"}}}})),Wr=ut.define({map:(t,e)=>null==t?null:e.mapPos(t)}),Er=U.define({create:()=>null,update:(t,e)=>(null!=t&&(t=e.changes.mapPos(t)),e.effects.reduce((t,e)=>e.is(Wr)?e.value:t,t))}),zr=Ei.fromClass(class{constructor(t){this.view=t,this.cursor=null,this.measureReq={read:this.readPos.bind(this),write:this.drawCursor.bind(this)}}update(t){var e
let i=t.state.field(Er)
null==i?null!=this.cursor&&(null===(e=this.cursor)||void 0===e||e.remove(),this.cursor=null):(this.cursor||(this.cursor=this.view.scrollDOM.appendChild(document.createElement("div")),this.cursor.className="cm-dropCursor"),(t.startState.field(Er)!=i||t.docChanged||t.geometryChanged)&&this.view.requestMeasure(this.measureReq))}readPos(){let{view:t}=this,e=t.state.field(Er),i=null!=e&&t.coordsAtPos(e)
if(!i)return null
let n=t.scrollDOM.getBoundingClientRect()
return{left:i.left-n.left+t.scrollDOM.scrollLeft*t.scaleX,top:i.top-n.top+t.scrollDOM.scrollTop*t.scaleY,height:i.bottom-i.top}}drawCursor(t){if(this.cursor){let{scaleX:e,scaleY:i}=this.view
t?(this.cursor.style.left=t.left/e+"px",this.cursor.style.top=t.top/i+"px",this.cursor.style.height=t.height/i+"px"):this.cursor.style.left="-100000px"}}destroy(){this.cursor&&this.cursor.remove()}setDropPos(t){this.view.state.field(Er)!=t&&this.view.dispatch({effects:Wr.of(t)})}},{eventObservers:{dragover(t){this.setDropPos(this.view.posAtCoords({x:t.clientX,y:t.clientY}))},dragleave(t){t.target!=this.view.contentDOM&&this.view.contentDOM.contains(t.relatedTarget)||this.setDropPos(null)},dragend(){this.setDropPos(null)},drop(){this.setDropPos(null)}}})
function qr(t,e,i,n,s){e.lastIndex=0
for(let r,o=t.iterRange(i,n),a=i;!o.next().done;a+=o.value.length)if(!o.lineBreak)for(;r=e.exec(o.value);)s(a+r.index,r)}class Dr{constructor(t){const{regexp:e,decoration:i,decorate:n,boundary:s,maxLength:r=1e3}=t
if(!e.global)throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set")
if(this.regexp=e,n)this.addMatch=(t,e,i,s)=>n(s,i,i+t[0].length,t,e)
else if("function"==typeof i)this.addMatch=(t,e,n,s)=>{let r=i(t,e,n)
r&&s(n,n+t[0].length,r)}
else{if(!i)throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator")
this.addMatch=(t,e,n,s)=>s(n,n+t[0].length,i)}this.boundary=s,this.maxLength=r}createDeco(t){let e=new Ct,i=e.add.bind(e)
for(let{from:e,to:n}of function(t,e){let i=t.visibleRanges
if(1==i.length&&i[0].from==t.viewport.from&&i[0].to==t.viewport.to)return i
let n=[]
for(let{from:s,to:r}of i)s=Math.max(t.state.doc.lineAt(s).from,s-e),r=Math.min(t.state.doc.lineAt(r).to,r+e),n.length&&n[n.length-1].to>=s?n[n.length-1].to=r:n.push({from:s,to:r})
return n}(t,this.maxLength))qr(t.state.doc,this.regexp,e,n,(e,n)=>this.addMatch(n,t,e,i))
return e.finish()}updateDeco(t,e){let i=1e9,n=-1
return t.docChanged&&t.changes.iterChanges((e,s,r,o)=>{o>=t.view.viewport.from&&r<=t.view.viewport.to&&(i=Math.min(r,i),n=Math.max(o,n))}),t.viewportMoved||n-i>1e3?this.createDeco(t.view):n>-1?this.updateRange(t.view,e.map(t.changes),i,n):e}updateRange(t,e,i,n){for(let s of t.visibleRanges){let r=Math.max(s.from,i),o=Math.min(s.to,n)
if(o>=r){let i=t.state.doc.lineAt(r),n=i.to<o?t.state.doc.lineAt(o):i,a=Math.max(s.from,i.from),l=Math.min(s.to,n.to)
if(this.boundary){for(;r>i.from;r--)if(this.boundary.test(i.text[r-1-i.from])){a=r
break}for(;o<n.to;o++)if(this.boundary.test(n.text[o-n.from])){l=o
break}}let h,c=[],O=(t,e,i)=>c.push(i.range(t,e))
if(i==n)for(this.regexp.lastIndex=a-i.from;(h=this.regexp.exec(i.text))&&h.index<l-i.from;)this.addMatch(h,t,h.index+i.from,O)
else qr(t.state.doc,this.regexp,a,l,(e,i)=>this.addMatch(i,t,e,O))
e=e.update({filterFrom:a,filterTo:l,filter:(t,e)=>t<a||e>l,add:c})}}return e}}const Lr=null!=/x/.unicode?"gu":"g",Ur=new RegExp("[\0-\b\n--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\ufeff￹-￼]",Lr),Br={0:"null",7:"bell",8:"backspace",10:"newline",11:"vertical tab",13:"carriage return",27:"escape",8203:"zero width space",8204:"zero width non-joiner",8205:"zero width joiner",8206:"left-to-right mark",8207:"right-to-left mark",8232:"line separator",8237:"left-to-right override",8238:"right-to-left override",8294:"left-to-right isolate",8295:"right-to-left isolate",8297:"pop directional isolate",8233:"paragraph separator",65279:"zero width no-break space",65532:"object replacement"}
let Vr=null
const Gr=Y.define({combine(t){let e=$t(t,{render:null,specialChars:Ur,addSpecialChars:null})
return(e.replaceTabs=!function(){var t
if(null==Vr&&"undefined"!=typeof document&&document.body){let e=document.body.style
Vr=null!=(null!==(t=e.tabSize)&&void 0!==t?t:e.MozTabSize)}return Vr||!1}())&&(e.specialChars=new RegExp("\t|"+e.specialChars.source,Lr)),e.addSpecialChars&&(e.specialChars=new RegExp(e.specialChars.source+"|"+e.addSpecialChars.source,Lr)),e}})
let Ir=null
class Nr extends ve{constructor(t,e){super(),this.options=t,this.code=e}eq(t){return t.code==this.code}toDOM(t){let e=function(t){return t>=32?"•":10==t?"␤":String.fromCharCode(9216+t)}(this.code),i=t.state.phrase("Control character")+" "+(Br[this.code]||"0x"+this.code.toString(16)),n=this.options.render&&this.options.render(this.code,i,e)
if(n)return n
let s=document.createElement("span")
return s.textContent=e,s.title=i,s.setAttribute("aria-label",i),s.className="cm-specialChar",s}ignoreEvent(){return!1}}class Hr extends ve{constructor(t){super(),this.width=t}eq(t){return t.width==this.width}toDOM(){let t=document.createElement("span")
return t.textContent="\t",t.className="cm-tab",t.style.width=this.width+"px",t}ignoreEvent(){return!1}}class Fr extends Pt{compare(t){return this==t||this.constructor==t.constructor&&this.eq(t)}eq(t){return!1}destroy(t){}}Fr.prototype.elementClass="",Fr.prototype.toDOM=void 0,Fr.prototype.mapMode=k.TrackBefore,Fr.prototype.startSide=Fr.prototype.endSide=-1,Fr.prototype.point=!0
const Kr=Y.define(),Jr=Y.define(),to=Y.define(),eo=Y.define({combine:t=>t.some(t=>t)})
const io=Ei.fromClass(class{constructor(t){this.view=t,this.domAfter=null,this.prevViewport=t.viewport,this.dom=document.createElement("div"),this.dom.className="cm-gutters cm-gutters-before",this.dom.setAttribute("aria-hidden","true"),this.dom.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.gutters=t.state.facet(to).map(e=>new oo(t,e)),this.fixed=!t.state.facet(eo)
for(let t of this.gutters)"after"==t.config.side?this.getDOMAfter().appendChild(t.dom):this.dom.appendChild(t.dom)
this.fixed&&(this.dom.style.position="sticky"),this.syncGutters(!1),t.scrollDOM.insertBefore(this.dom,t.contentDOM)}getDOMAfter(){return this.domAfter||(this.domAfter=document.createElement("div"),this.domAfter.className="cm-gutters cm-gutters-after",this.domAfter.setAttribute("aria-hidden","true"),this.domAfter.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.domAfter.style.position=this.fixed?"sticky":"",this.view.scrollDOM.appendChild(this.domAfter)),this.domAfter}update(t){if(this.updateGutters(t)){let e=this.prevViewport,i=t.view.viewport,n=Math.min(e.to,i.to)-Math.max(e.from,i.from)
this.syncGutters(n<.8*(i.to-i.from))}if(t.geometryChanged){let t=this.view.contentHeight/this.view.scaleY+"px"
this.dom.style.minHeight=t,this.domAfter&&(this.domAfter.style.minHeight=t)}this.view.state.facet(eo)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?"sticky":"",this.domAfter&&(this.domAfter.style.position=this.fixed?"sticky":"")),this.prevViewport=t.view.viewport}syncGutters(t){let e=this.dom.nextSibling
t&&(this.dom.remove(),this.domAfter&&this.domAfter.remove())
let i=Mt.iter(this.view.state.facet(Kr),this.view.viewport.from),n=[],s=this.gutters.map(t=>new ro(t,this.view.viewport,-this.view.documentPadding.top))
for(let t of this.view.viewportLineBlocks)if(n.length&&(n=[]),Array.isArray(t.type)){let e=!0
for(let r of t.type)if(r.type==Se.Text&&e){so(i,n,r.from)
for(let t of s)t.line(this.view,r,n)
e=!1}else if(r.widget)for(let t of s)t.widget(this.view,r)}else if(t.type==Se.Text){so(i,n,t.from)
for(let e of s)e.line(this.view,t,n)}else if(t.widget)for(let e of s)e.widget(this.view,t)
for(let t of s)t.finish()
t&&(this.view.scrollDOM.insertBefore(this.dom,e),this.domAfter&&this.view.scrollDOM.appendChild(this.domAfter))}updateGutters(t){let e=t.startState.facet(to),i=t.state.facet(to),n=t.docChanged||t.heightChanged||t.viewportChanged||!Mt.eq(t.startState.facet(Kr),t.state.facet(Kr),t.view.viewport.from,t.view.viewport.to)
if(e==i)for(let e of this.gutters)e.update(t)&&(n=!0)
else{n=!0
let s=[]
for(let n of i){let i=e.indexOf(n)
i<0?s.push(new oo(this.view,n)):(this.gutters[i].update(t),s.push(this.gutters[i]))}for(let t of this.gutters)t.dom.remove(),s.indexOf(t)<0&&t.destroy()
for(let t of s)"after"==t.config.side?this.getDOMAfter().appendChild(t.dom):this.dom.appendChild(t.dom)
this.gutters=s}return n}destroy(){for(let t of this.gutters)t.destroy()
this.dom.remove(),this.domAfter&&this.domAfter.remove()}},{provide:t=>fr.scrollMargins.of(e=>{let i=e.plugin(t)
if(!i||0==i.gutters.length||!i.fixed)return null
let n=i.dom.offsetWidth*e.scaleX,s=i.domAfter?i.domAfter.offsetWidth*e.scaleX:0
return e.textDirection==ei.LTR?{left:n,right:s}:{right:n,left:s}})})
function no(t){return Array.isArray(t)?t:[t]}function so(t,e,i){for(;t.value&&t.from<=i;)t.from==i&&e.push(t.value),t.next()}class ro{constructor(t,e,i){this.gutter=t,this.height=i,this.i=0,this.cursor=Mt.iter(t.markers,e.from)}addElement(t,e,i){let{gutter:n}=this,s=(e.top-this.height)/t.scaleY,r=e.height/t.scaleY
if(this.i==n.elements.length){let e=new ao(t,r,s,i)
n.elements.push(e),n.dom.appendChild(e.dom)}else n.elements[this.i].update(t,r,s,i)
this.height=e.bottom,this.i++}line(t,e,i){let n=[]
so(this.cursor,n,e.from),i.length&&(n=n.concat(i))
let s=this.gutter.config.lineMarker(t,e,n)
s&&n.unshift(s)
let r=this.gutter;(0!=n.length||r.config.renderEmptyElements)&&this.addElement(t,e,n)}widget(t,e){let i=this.gutter.config.widgetMarker(t,e.widget,e),n=i?[i]:null
for(let i of t.state.facet(Jr)){let s=i(t,e.widget,e)
s&&(n||(n=[])).push(s)}n&&this.addElement(t,e,n)}finish(){let t=this.gutter
for(;t.elements.length>this.i;){let e=t.elements.pop()
t.dom.removeChild(e.dom),e.destroy()}}}class oo{constructor(t,e){this.view=t,this.config=e,this.elements=[],this.spacer=null,this.dom=document.createElement("div"),this.dom.className="cm-gutter"+(this.config.class?" "+this.config.class:"")
for(let i in e.domEventHandlers)this.dom.addEventListener(i,n=>{let s,r=n.target
if(r!=this.dom&&this.dom.contains(r)){for(;r.parentNode!=this.dom;)r=r.parentNode
let t=r.getBoundingClientRect()
s=(t.top+t.bottom)/2}else s=n.clientY
let o=t.lineBlockAtHeight(s-t.documentTop)
e.domEventHandlers[i](t,o,n)&&n.preventDefault()})
this.markers=no(e.markers(t)),e.initialSpacer&&(this.spacer=new ao(t,0,0,[e.initialSpacer(t)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+="visibility: hidden; pointer-events: none")}update(t){let e=this.markers
if(this.markers=no(this.config.markers(t.view)),this.spacer&&this.config.updateSpacer){let e=this.config.updateSpacer(this.spacer.markers[0],t)
e!=this.spacer.markers[0]&&this.spacer.update(t.view,0,0,[e])}let i=t.view.viewport
return!Mt.eq(this.markers,e,i.from,i.to)||!!this.config.lineMarkerChange&&this.config.lineMarkerChange(t)}destroy(){for(let t of this.elements)t.destroy()}}class ao{constructor(t,e,i,n){this.height=-1,this.above=0,this.markers=[],this.dom=document.createElement("div"),this.dom.className="cm-gutterElement",this.update(t,e,i,n)}update(t,e,i,n){this.height!=e&&(this.height=e,this.dom.style.height=e+"px"),this.above!=i&&(this.dom.style.marginTop=(this.above=i)?i+"px":""),function(t,e){if(t.length!=e.length)return!1
for(let i=0;i<t.length;i++)if(!t[i].compare(e[i]))return!1
return!0}(this.markers,n)||this.setMarkers(t,n)}setMarkers(t,e){let i="cm-gutterElement",n=this.dom.firstChild
for(let s=0,r=0;;){let o=r,a=s<e.length?e[s++]:null,l=!1
if(a){let t=a.elementClass
t&&(i+=" "+t)
for(let t=r;t<this.markers.length;t++)if(this.markers[t].compare(a)){o=t,l=!0
break}}else o=this.markers.length
for(;r<o;){let t=this.markers[r++]
if(t.toDOM){t.destroy(n)
let e=n.nextSibling
n.remove(),n=e}}if(!a)break
a.toDOM&&(l?n=n.nextSibling:this.dom.insertBefore(a.toDOM(t),n)),l&&r++}this.dom.className=i,this.markers=e}destroy(){this.setMarkers(null,[])}}const lo=Y.define(),ho=Y.define(),co=Y.define({combine:t=>$t(t,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(t,e){let i=Object.assign({},t)
for(let t in e){let n=i[t],s=e[t]
i[t]=n?(t,e,i)=>n(t,e,i)||s(t,e,i):s}return i}})})
class Oo extends Fr{constructor(t){super(),this.number=t}eq(t){return this.number==t.number}toDOM(){return document.createTextNode(this.number)}}function fo(t,e){return t.state.facet(co).formatNumber(e,t.state)}const uo=to.compute([co],t=>({class:"cm-lineNumbers",renderEmptyElements:!1,markers:t=>t.state.facet(lo),lineMarker:(t,e,i)=>i.some(t=>t.toDOM)?null:new Oo(fo(t,t.state.doc.lineAt(e.from).number)),widgetMarker:(t,e,i)=>{for(let n of t.state.facet(ho)){let s=n(t,e,i)
if(s)return s}return null},lineMarkerChange:t=>t.startState.facet(co)!=t.state.facet(co),initialSpacer:t=>new Oo(fo(t,po(t.state.doc.lines))),updateSpacer(t,e){let i=fo(e.view,po(e.view.state.doc.lines))
return i==t.number?t:new Oo(i)},domEventHandlers:t.facet(co).domEventHandlers,side:"before"}))
function po(t){let e=9
for(;e<t;)e=10*e+9
return e}const go=1024
let mo=0
class Qo{constructor(t,e){this.from=t,this.to=e}}class wo{constructor(t={}){this.id=mo++,this.perNode=!!t.perNode,this.deserialize=t.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")}),this.combine=t.combine||null}add(t){if(this.perNode)throw new RangeError("Can't add per-node props to node types")
return"function"!=typeof t&&(t=So.match(t)),e=>{let i=t(e)
return void 0===i?null:[this,i]}}}wo.closedBy=new wo({deserialize:t=>t.split(" ")}),wo.openedBy=new wo({deserialize:t=>t.split(" ")}),wo.group=new wo({deserialize:t=>t.split(" ")}),wo.isolate=new wo({deserialize:t=>{if(t&&"rtl"!=t&&"ltr"!=t&&"auto"!=t)throw new RangeError("Invalid value for isolate: "+t)
return t||"auto"}}),wo.contextHash=new wo({perNode:!0}),wo.lookAhead=new wo({perNode:!0}),wo.mounted=new wo({perNode:!0})
class bo{constructor(t,e,i,n=!1){this.tree=t,this.overlay=e,this.parser=i,this.bracketed=n}static get(t){return t&&t.props&&t.props[wo.mounted.id]}}const vo=Object.create(null)
class So{constructor(t,e,i,n=0){this.name=t,this.props=e,this.id=i,this.flags=n}static define(t){let e=t.props&&t.props.length?Object.create(null):vo,i=(t.top?1:0)|(t.skipped?2:0)|(t.error?4:0)|(null==t.name?8:0),n=new So(t.name||"",e,t.id,i)
if(t.props)for(let i of t.props)if(Array.isArray(i)||(i=i(n)),i){if(i[0].perNode)throw new RangeError("Can't store a per-node prop on a node type")
e[i[0].id]=i[1]}return n}prop(t){return this.props[t.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(t){if("string"==typeof t){if(this.name==t)return!0
let e=this.prop(wo.group)
return!!e&&e.indexOf(t)>-1}return this.id==t}static match(t){let e=Object.create(null)
for(let i in t)for(let n of i.split(" "))e[n]=t[i]
return t=>{for(let i=t.prop(wo.group),n=-1;n<(i?i.length:0);n++){let s=e[n<0?t.name:i[n]]
if(s)return s}}}}So.none=new So("",Object.create(null),0,8)
class xo{constructor(t){this.types=t
for(let e=0;e<t.length;e++)if(t[e].id!=e)throw new RangeError("Node type ids should correspond to array positions when creating a node set")}extend(...t){let e=[]
for(let i of this.types){let n=null
for(let e of t){let t=e(i)
if(t){n||(n=Object.assign({},i.props))
let e=t[1],s=t[0]
s.combine&&s.id in n&&(e=s.combine(n[s.id],e)),n[s.id]=e}}e.push(n?new So(i.name,n,i.id,i.flags):i)}return new xo(e)}}const ko=new WeakMap,yo=new WeakMap
var $o
!function(t){t[t.ExcludeBuffers=1]="ExcludeBuffers",t[t.IncludeAnonymous=2]="IncludeAnonymous",t[t.IgnoreMounts=4]="IgnoreMounts",t[t.IgnoreOverlays=8]="IgnoreOverlays",t[t.EnterBracketed=16]="EnterBracketed"}($o||($o={}))
class Po{constructor(t,e,i,n,s){if(this.type=t,this.children=e,this.positions=i,this.length=n,this.props=null,s&&s.length){this.props=Object.create(null)
for(let[t,e]of s)this.props["number"==typeof t?t:t.id]=e}}toString(){let t=bo.get(this)
if(t&&!t.overlay)return t.tree.toString()
let e=""
for(let t of this.children){let i=t.toString()
i&&(e&&(e+=","),e+=i)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(e.length?"("+e+")":""):e}cursor(t=0){return new zo(this.topNode,t)}cursorAt(t,e=0,i=0){let n=ko.get(this)||this.topNode,s=new zo(n)
return s.moveTo(t,e),ko.set(this,s._tree),s}get topNode(){return new Ro(this,0,0,null)}resolve(t,e=0){let i=To(ko.get(this)||this.topNode,t,e,!1)
return ko.set(this,i),i}resolveInner(t,e=0){let i=To(yo.get(this)||this.topNode,t,e,!0)
return yo.set(this,i),i}resolveStack(t,e=0){return function(t,e,i){let n=t.resolveInner(e,i),s=null
for(let t=n instanceof Ro?n:n.context.parent;t;t=t.parent)if(t.index<0){let r=t.parent;(s||(s=[n])).push(r.resolve(e,i)),t=r}else{let r=bo.get(t.tree)
if(r&&r.overlay&&r.overlay[0].from<=e&&r.overlay[r.overlay.length-1].to>=e){let o=new Ro(r.tree,r.overlay[0].from+t.from,-1,t);(s||(s=[n])).push(To(o,e,i,!1))}}return s?Wo(s):n}(this,t,e)}iterate(t){let{enter:e,leave:i,from:n=0,to:s=this.length}=t,r=t.mode||0,o=(r&$o.IncludeAnonymous)>0
for(let t=this.cursor(r|$o.IncludeAnonymous);;){let r=!1
if(t.from<=s&&t.to>=n&&(!o&&t.type.isAnonymous||!1!==e(t))){if(t.firstChild())continue
r=!0}for(;r&&i&&(o||!t.type.isAnonymous)&&i(t),!t.nextSibling();){if(!t.parent())return
r=!0}}}prop(t){return t.perNode?this.props?this.props[t.id]:void 0:this.type.prop(t)}get propValues(){let t=[]
if(this.props)for(let e in this.props)t.push([+e,this.props[e]])
return t}balance(t={}){return this.children.length<=8?this:Uo(So.none,this.children,this.positions,0,this.children.length,0,this.length,(t,e,i)=>new Po(this.type,t,e,i,this.propValues),t.makeTree||((t,e,i)=>new Po(So.none,t,e,i)))}static build(t){return function(t){var e
let{buffer:i,nodeSet:n,maxBufferLength:s=go,reused:r=[],minRepeatType:o=n.types.length}=t,a=Array.isArray(i)?new Zo(i,i.length):i,l=n.types,h=0,c=0
function O(t,e,i,Q,w,b){let{id:v,start:S,end:x,size:k}=a,y=c,$=h
if(k<0){if(a.next(),-1==k){let e=r[v]
return i.push(e),void Q.push(S-t)}if(-3==k)return void(h=v)
if(-4==k)return void(c=v)
throw new RangeError(`Unrecognized record size: ${k}`)}let P,Z,X=l[v],A=S-t
if(x-S<=s&&(Z=g(a.pos-e,w))){let e=new Uint16Array(Z.size-Z.skip),i=a.pos-Z.size,s=e.length
for(;a.pos>i;)s=m(Z.start,e,s)
P=new Xo(e,x-Z.start,n),A=Z.start-t}else{let t=a.pos-k
a.next()
let e=[],i=[],n=v>=o?v:-1,r=0,l=x
for(;a.pos>t;)n>=0&&a.id==n&&a.size>=0?(a.end<=l-s&&(d(e,i,S,r,a.end,l,n,y,$),r=e.length,l=a.end),a.next()):b>2500?f(S,t,e,i):O(S,t,e,i,n,b+1)
if(n>=0&&r>0&&r<e.length&&d(e,i,S,r,S,l,n,y,$),e.reverse(),i.reverse(),n>-1&&r>0){let t=u(X,$)
P=Uo(X,e,i,0,e.length,0,x-S,t,t)}else P=p(X,e,i,x-S,y-x,$)}i.push(P),Q.push(A)}function f(t,e,i,r){let o=[],l=0,h=-1
for(;a.pos>e;){let{id:t,start:e,end:i,size:n}=a
if(n>4)a.next()
else{if(h>-1&&e<h)break
h<0&&(h=i-s),o.push(t,e,i),l++,a.next()}}if(l){let e=new Uint16Array(4*l),s=o[o.length-2]
for(let t=o.length-3,i=0;t>=0;t-=3)e[i++]=o[t],e[i++]=o[t+1]-s,e[i++]=o[t+2]-s,e[i++]=i
i.push(new Xo(e,o[2]-s,n)),r.push(s-t)}}function u(t,e){return(i,n,s)=>{let r,o,a=0,l=i.length-1
if(l>=0&&(r=i[l])instanceof Po){if(!l&&r.type==t&&r.length==s)return r;(o=r.prop(wo.lookAhead))&&(a=n[l]+r.length+o)}return p(t,i,n,s,a,e)}}function d(t,e,i,s,r,o,a,l,h){let c=[],O=[]
for(;t.length>s;)c.push(t.pop()),O.push(e.pop()+i-r)
t.push(p(n.types[a],c,O,o-r,l-o,h)),e.push(r-i)}function p(t,e,i,n,s,r,o){if(r){let t=[wo.contextHash,r]
o=o?[t].concat(o):[t]}if(s>25){let t=[wo.lookAhead,s]
o=o?[t].concat(o):[t]}return new Po(t,e,i,n,o)}function g(t,e){let i=a.fork(),n=0,r=0,l=0,h=i.end-s,c={size:0,start:0,skip:0}
t:for(let s=i.pos-t;i.pos>s;){let t=i.size
if(i.id==e&&t>=0){c.size=n,c.start=r,c.skip=l,l+=4,n+=4,i.next()
continue}let a=i.pos-t
if(t<0||a<s||i.start<h)break
let O=i.id>=o?4:0,f=i.start
for(i.next();i.pos>a;){if(i.size<0){if(-3!=i.size&&-4!=i.size)break t
O+=4}else i.id>=o&&(O+=4)
i.next()}r=f,n+=t,l+=O}return(e<0||n==t)&&(c.size=n,c.start=r,c.skip=l),c.size>4?c:void 0}function m(t,e,i){let{id:n,start:s,end:r,size:l}=a
if(a.next(),l>=0&&n<o){let o=i
if(l>4){let n=a.pos-(l-4)
for(;a.pos>n;)i=m(t,e,i)}e[--i]=o,e[--i]=r-t,e[--i]=s-t,e[--i]=n}else-3==l?h=n:-4==l&&(c=n)
return i}let Q=[],w=[]
for(;a.pos>0;)O(t.start||0,t.bufferStart||0,Q,w,-1,0)
let b=null!==(e=t.length)&&void 0!==e?e:Q.length?w[0]+Q[0].length:0
return new Po(l[t.topID],Q.reverse(),w.reverse(),b)}(t)}}Po.empty=new Po(So.none,[],[],0)
class Zo{constructor(t,e){this.buffer=t,this.index=e}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new Zo(this.buffer,this.index)}}class Xo{constructor(t,e,i){this.buffer=t,this.length=e,this.set=i}get type(){return So.none}toString(){let t=[]
for(let e=0;e<this.buffer.length;)t.push(this.childString(e)),e=this.buffer[e+3]
return t.join(",")}childString(t){let e=this.buffer[t],i=this.buffer[t+3],n=this.set.types[e],s=n.name
if(/\W/.test(s)&&!n.isError&&(s=JSON.stringify(s)),i==(t+=4))return s
let r=[]
for(;t<i;)r.push(this.childString(t)),t=this.buffer[t+3]
return s+"("+r.join(",")+")"}findChild(t,e,i,n,s){let{buffer:r}=this,o=-1
for(let a=t;a!=e&&!(Ao(s,n,r[a+1],r[a+2])&&(o=a,i>0));a=r[a+3]);return o}slice(t,e,i){let n=this.buffer,s=new Uint16Array(e-t),r=0
for(let o=t,a=0;o<e;){s[a++]=n[o++],s[a++]=n[o++]-i
let e=s[a++]=n[o++]-i
s[a++]=n[o++]-t,r=Math.max(r,e)}return new Xo(s,r,this.set)}}function Ao(t,e,i,n){switch(t){case-2:return i<e
case-1:return n>=e&&i<e
case 0:return i<e&&n>e
case 1:return i<=e&&n>e
case 2:return n>e
case 4:return!0}}function To(t,e,i,n){for(var s;t.from==t.to||(i<1?t.from>=e:t.from>e)||(i>-1?t.to<=e:t.to<e);){let e=!n&&t instanceof Ro&&t.index<0?null:t.parent
if(!e)return t
t=e}let r=n?0:$o.IgnoreOverlays
if(n)for(let n=t,o=n.parent;o;n=o,o=n.parent)n instanceof Ro&&n.index<0&&(null===(s=o.enter(e,i,r))||void 0===s?void 0:s.from)!=n.from&&(t=o)
for(;;){let n=t.enter(e,i,r)
if(!n)return t
t=n}}class Mo{cursor(t=0){return new zo(this,t)}getChild(t,e=null,i=null){let n=Co(this,t,e,i)
return n.length?n[0]:null}getChildren(t,e=null,i=null){return Co(this,t,e,i)}resolve(t,e=0){return To(this,t,e,!1)}resolveInner(t,e=0){return To(this,t,e,!0)}matchContext(t){return _o(this.parent,t)}enterUnfinishedNodesBefore(t){let e=this.childBefore(t),i=this
for(;e;){let t=e.lastChild
if(!t||t.to!=e.to)break
t.type.isError&&t.from==t.to?(i=e,e=t.prevSibling):e=t}return i}get node(){return this}get next(){return this.parent}}class Ro extends Mo{constructor(t,e,i,n){super(),this._tree=t,this.from=e,this.index=i,this._parent=n}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(t,e,i,n,s=0){for(let r=this;;){for(let{children:o,positions:a}=r._tree,l=e>0?o.length:-1;t!=l;t+=e){let l,h=o[t],c=a[t]+r.from
if(s&$o.EnterBracketed&&h instanceof Po&&(l=bo.get(h))&&!l.overlay&&l.bracketed&&i>=c&&i<=c+h.length||Ao(n,i,c,c+h.length))if(h instanceof Xo){if(s&$o.ExcludeBuffers)continue
let o=h.findChild(0,h.buffer.length,e,i-c,n)
if(o>-1)return new Yo(new jo(r,h,t,c),null,o)}else if(s&$o.IncludeAnonymous||!h.type.isAnonymous||qo(h)){let o
if(!(s&$o.IgnoreMounts)&&(o=bo.get(h))&&!o.overlay)return new Ro(o.tree,c,t,r)
let a=new Ro(h,c,t,r)
return s&$o.IncludeAnonymous||!a.type.isAnonymous?a:a.nextChild(e<0?h.children.length-1:0,e,i,n,s)}}if(s&$o.IncludeAnonymous||!r.type.isAnonymous)return null
if(t=r.index>=0?r.index+e:e<0?-1:r._parent._tree.children.length,r=r._parent,!r)return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(t){return this.nextChild(0,1,t,2)}childBefore(t){return this.nextChild(this._tree.children.length-1,-1,t,-2)}prop(t){return this._tree.prop(t)}enter(t,e,i=0){let n
if(!(i&$o.IgnoreOverlays)&&(n=bo.get(this._tree))&&n.overlay){let s=t-this.from,r=i&$o.EnterBracketed&&n.bracketed
for(let{from:t,to:i}of n.overlay)if((e>0||r?t<=s:t<s)&&(e<0||r?i>=s:i>s))return new Ro(n.tree,n.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,t,e,i)}nextSignificantParent(){let t=this
for(;t.type.isAnonymous&&t._parent;)t=t._parent
return t}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}}function Co(t,e,i,n){let s=t.cursor(),r=[]
if(!s.firstChild())return r
if(null!=i)for(let t=!1;!t;)if(t=s.type.is(i),!s.nextSibling())return r
for(;;){if(null!=n&&s.type.is(n))return r
if(s.type.is(e)&&r.push(s.node),!s.nextSibling())return null==n?r:[]}}function _o(t,e,i=e.length-1){for(let n=t;i>=0;n=n.parent){if(!n)return!1
if(!n.type.isAnonymous){if(e[i]&&e[i]!=n.name)return!1
i--}}return!0}class jo{constructor(t,e,i,n){this.parent=t,this.buffer=e,this.index=i,this.start=n}}class Yo extends Mo{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(t,e,i){super(),this.context=t,this._parent=e,this.index=i,this.type=t.buffer.set.types[t.buffer.buffer[i]]}child(t,e,i){let{buffer:n}=this.context,s=n.findChild(this.index+4,n.buffer[this.index+3],t,e-this.context.start,i)
return s<0?null:new Yo(this.context,this,s)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(t){return this.child(1,t,2)}childBefore(t){return this.child(-1,t,-2)}prop(t){return this.type.prop(t)}enter(t,e,i=0){if(i&$o.ExcludeBuffers)return null
let{buffer:n}=this.context,s=n.findChild(this.index+4,n.buffer[this.index+3],e>0?1:-1,t-this.context.start,e)
return s<0?null:new Yo(this.context,this,s)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(t){return this._parent?null:this.context.parent.nextChild(this.context.index+t,t,0,4)}get nextSibling(){let{buffer:t}=this.context,e=t.buffer[this.index+3]
return e<(this._parent?t.buffer[this._parent.index+3]:t.buffer.length)?new Yo(this.context,this._parent,e):this.externalSibling(1)}get prevSibling(){let{buffer:t}=this.context,e=this._parent?this._parent.index+4:0
return this.index==e?this.externalSibling(-1):new Yo(this.context,this._parent,t.findChild(e,this.index,-1,0,4))}get tree(){return null}toTree(){let t=[],e=[],{buffer:i}=this.context,n=this.index+4,s=i.buffer[this.index+3]
if(s>n){let r=i.buffer[this.index+1]
t.push(i.slice(n,s,r)),e.push(0)}return new Po(this.type,t,e,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}}function Wo(t){if(!t.length)return null
let e=0,i=t[0]
for(let n=1;n<t.length;n++){let s=t[n];(s.from>i.from||s.to<i.to)&&(i=s,e=n)}let n=i instanceof Ro&&i.index<0?null:i.parent,s=t.slice()
return n?s[e]=n:s.splice(e,1),new Eo(s,i)}class Eo{constructor(t,e){this.heads=t,this.node=e}get next(){return Wo(this.heads)}}class zo{get name(){return this.type.name}constructor(t,e=0){if(this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,this.mode=e&~$o.EnterBracketed,t instanceof Ro)this.yieldNode(t)
else{this._tree=t.context.parent,this.buffer=t.context
for(let e=t._parent;e;e=e._parent)this.stack.unshift(e.index)
this.bufferNode=t,this.yieldBuf(t.index)}}yieldNode(t){return!!t&&(this._tree=t,this.type=t.type,this.from=t.from,this.to=t.to,!0)}yieldBuf(t,e){this.index=t
let{start:i,buffer:n}=this.buffer
return this.type=e||n.set.types[n.buffer[t]],this.from=i+n.buffer[t+1],this.to=i+n.buffer[t+2],!0}yield(t){return!!t&&(t instanceof Ro?(this.buffer=null,this.yieldNode(t)):(this.buffer=t.context,this.yieldBuf(t.index,t.type)))}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(t,e,i){if(!this.buffer)return this.yield(this._tree.nextChild(t<0?this._tree._tree.children.length-1:0,t,e,i,this.mode))
let{buffer:n}=this.buffer,s=n.findChild(this.index+4,n.buffer[this.index+3],t,e-this.buffer.start,i)
return!(s<0)&&(this.stack.push(this.index),this.yieldBuf(s))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(t){return this.enterChild(1,t,2)}childBefore(t){return this.enterChild(-1,t,-2)}enter(t,e,i=this.mode){return this.buffer?!(i&$o.ExcludeBuffers)&&this.enterChild(1,t,e):this.yield(this._tree.enter(t,e,i))}parent(){if(!this.buffer)return this.yieldNode(this.mode&$o.IncludeAnonymous?this._tree._parent:this._tree.parent)
if(this.stack.length)return this.yieldBuf(this.stack.pop())
let t=this.mode&$o.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent()
return this.buffer=null,this.yieldNode(t)}sibling(t){if(!this.buffer)return!!this._tree._parent&&this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+t,t,0,4,this.mode))
let{buffer:e}=this.buffer,i=this.stack.length-1
if(t<0){let t=i<0?0:this.stack[i]+4
if(this.index!=t)return this.yieldBuf(e.findChild(t,this.index,-1,0,4))}else{let t=e.buffer[this.index+3]
if(t<(i<0?e.buffer.length:e.buffer[this.stack[i]+3]))return this.yieldBuf(t)}return i<0&&this.yield(this.buffer.parent.nextChild(this.buffer.index+t,t,0,4,this.mode))}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(t){let e,i,{buffer:n}=this
if(n){if(t>0){if(this.index<n.buffer.buffer.length)return!1}else for(let t=0;t<this.index;t++)if(n.buffer.buffer[t+3]<this.index)return!1;({index:e,parent:i}=n)}else({index:e,_parent:i}=this._tree)
for(;i;({index:e,_parent:i}=i))if(e>-1)for(let n=e+t,s=t<0?-1:i._tree.children.length;n!=s;n+=t){let t=i._tree.children[n]
if(this.mode&$o.IncludeAnonymous||t instanceof Xo||!t.type.isAnonymous||qo(t))return!1}return!0}move(t,e){if(e&&this.enterChild(t,0,4))return!0
for(;;){if(this.sibling(t))return!0
if(this.atLastNode(t)||!this.parent())return!1}}next(t=!0){return this.move(1,t)}prev(t=!0){return this.move(-1,t)}moveTo(t,e=0){for(;(this.from==this.to||(e<1?this.from>=t:this.from>t)||(e>-1?this.to<=t:this.to<t))&&this.parent(););for(;this.enterChild(1,t,e););return this}get node(){if(!this.buffer)return this._tree
let t=this.bufferNode,e=null,i=0
if(t&&t.context==this.buffer)t:for(let n=this.index,s=this.stack.length;s>=0;){for(let r=t;r;r=r._parent)if(r.index==n){if(n==this.index)return r
e=r,i=s+1
break t}n=this.stack[--s]}for(let t=i;t<this.stack.length;t++)e=new Yo(this.buffer,e,this.stack[t])
return this.bufferNode=new Yo(this.buffer,e,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(t,e){for(let i=0;;){let n=!1
if(this.type.isAnonymous||!1!==t(this)){if(this.firstChild()){i++
continue}this.type.isAnonymous||(n=!0)}for(;;){if(n&&e&&e(this),n=this.type.isAnonymous,!i)return
if(this.nextSibling())break
this.parent(),i--,n=!0}}}matchContext(t){if(!this.buffer)return _o(this.node.parent,t)
let{buffer:e}=this.buffer,{types:i}=e.set
for(let n=t.length-1,s=this.stack.length-1;n>=0;s--){if(s<0)return _o(this._tree,t,n)
let r=i[e.buffer[this.stack[s]]]
if(!r.isAnonymous){if(t[n]&&t[n]!=r.name)return!1
n--}}return!0}}function qo(t){return t.children.some(t=>t instanceof Xo||!t.type.isAnonymous||qo(t))}const Do=new WeakMap
function Lo(t,e){if(!t.isAnonymous||e instanceof Xo||e.type!=t)return 1
let i=Do.get(e)
if(null==i){i=1
for(let n of e.children){if(n.type!=t||!(n instanceof Po)){i=1
break}i+=Lo(t,n)}Do.set(e,i)}return i}function Uo(t,e,i,n,s,r,o,a,l){let h=0
for(let i=n;i<s;i++)h+=Lo(t,e[i])
let c=Math.ceil(1.5*h/8),O=[],f=[]
return function e(i,n,s,o,a){for(let h=s;h<o;){let s=h,u=n[h],d=Lo(t,i[h])
for(h++;h<o;h++){let e=Lo(t,i[h])
if(d+e>=c)break
d+=e}if(h==s+1){if(d>c){let t=i[s]
e(t.children,t.positions,0,t.children.length,n[s]+a)
continue}O.push(i[s])}else{let e=n[h-1]+i[h-1].length-u
O.push(Uo(t,i,n,s,h,u,e,null,l))}f.push(u+a-r)}}(e,i,n,s,0),(a||l)(O,f,o)}class Bo{constructor(){this.map=new WeakMap}setBuffer(t,e,i){let n=this.map.get(t)
n||this.map.set(t,n=new Map),n.set(e,i)}getBuffer(t,e){let i=this.map.get(t)
return i&&i.get(e)}set(t,e){t instanceof Yo?this.setBuffer(t.context.buffer,t.index,e):t instanceof Ro&&this.map.set(t.tree,e)}get(t){return t instanceof Yo?this.getBuffer(t.context.buffer,t.index):t instanceof Ro?this.map.get(t.tree):void 0}cursorSet(t,e){t.buffer?this.setBuffer(t.buffer.buffer,t.index,e):this.map.set(t.tree,e)}cursorGet(t){return t.buffer?this.getBuffer(t.buffer.buffer,t.index):this.map.get(t.tree)}}class Vo{constructor(t,e,i,n,s=!1,r=!1){this.from=t,this.to=e,this.tree=i,this.offset=n,this.open=(s?1:0)|(r?2:0)}get openStart(){return(1&this.open)>0}get openEnd(){return(2&this.open)>0}static addTree(t,e=[],i=!1){let n=[new Vo(0,t.length,t,0,!1,i)]
for(let i of e)i.to>t.length&&n.push(i)
return n}static applyChanges(t,e,i=128){if(!e.length)return t
let n=[],s=1,r=t.length?t[0]:null
for(let o=0,a=0,l=0;;o++){let h=o<e.length?e[o]:null,c=h?h.fromA:1e9
if(c-a>=i)for(;r&&r.from<c;){let e=r
if(a>=e.from||c<=e.to||l){let t=Math.max(e.from,a)-l,i=Math.min(e.to,c)-l
e=t>=i?null:new Vo(t,i,e.tree,e.offset+l,o>0,!!h)}if(e&&n.push(e),r.to>c)break
r=s<t.length?t[s++]:null}if(!h)break
a=h.toA,l=h.toA-h.toB}return n}}class Go{startParse(t,e,i){return"string"==typeof t&&(t=new Io(t)),i=i?i.length?i.map(t=>new Qo(t.from,t.to)):[new Qo(0,0)]:[new Qo(0,t.length)],this.createParse(t,e||[],i)}parse(t,e,i){let n=this.startParse(t,e,i)
for(;;){let t=n.advance()
if(t)return t}}}class Io{constructor(t){this.string=t}get length(){return this.string.length}chunk(t){return this.string.slice(t)}get lineChunks(){return!1}read(t,e){return this.string.slice(t,e)}}new wo({perNode:!0})
let No=0
class Ho{constructor(t,e,i,n){this.name=t,this.set=e,this.base=i,this.modified=n,this.id=No++}toString(){let{name:t}=this
for(let e of this.modified)e.name&&(t=`${e.name}(${t})`)
return t}static define(t,e){let i="string"==typeof t?t:"?"
if(t instanceof Ho&&(e=t),null==e?void 0:e.base)throw new Error("Can not derive from a modified tag")
let n=new Ho(i,[],null,[])
if(n.set.push(n),e)for(let t of e.set)n.set.push(t)
return n}static defineModifier(t){let e=new Ko(t)
return t=>t.modified.indexOf(e)>-1?t:Ko.get(t.base||t,t.modified.concat(e).sort((t,e)=>t.id-e.id))}}let Fo=0
class Ko{constructor(t){this.name=t,this.instances=[],this.id=Fo++}static get(t,e){if(!e.length)return t
let i=e[0].instances.find(i=>{return i.base==t&&(n=e,s=i.modified,n.length==s.length&&n.every((t,e)=>t==s[e]))
var n,s})
if(i)return i
let n=[],s=new Ho(t.name,n,t,e)
for(let t of e)t.instances.push(s)
let r=function(t){let e=[[]]
for(let i=0;i<t.length;i++)for(let n=0,s=e.length;n<s;n++)e.push(e[n].concat(t[i]))
return e.sort((t,e)=>e.length-t.length)}(e)
for(let e of t.set)if(!e.modified.length)for(let t of r)n.push(Ko.get(e,t))
return s}}function Jo(t){let e=Object.create(null)
for(let i in t){let n=t[i]
Array.isArray(n)||(n=[n])
for(let t of i.split(" "))if(t){let i=[],s=2,r=t
for(let e=0;;){if("..."==r&&e>0&&e+3==t.length){s=1
break}let n=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(r)
if(!n)throw new RangeError("Invalid path: "+t)
if(i.push("*"==n[0]?"":'"'==n[0][0]?JSON.parse(n[0]):n[0]),e+=n[0].length,e==t.length)break
let o=t[e++]
if(e==t.length&&"!"==o){s=0
break}if("/"!=o)throw new RangeError("Invalid path: "+t)
r=t.slice(e)}let o=i.length-1,a=i[o]
if(!a)throw new RangeError("Invalid path: "+t)
let l=new ea(n,s,o>0?i.slice(0,o):null)
e[a]=l.sort(e[a])}}return ta.add(e)}const ta=new wo({combine(t,e){let i,n,s
for(;t||e;){if(!t||e&&t.depth<=e.depth?(s=e,e=e.next):(s=t,t=t.next),i&&i.mode==s.mode&&!s.context&&!i.context)continue
let r=new ea(s.tags,s.mode,s.context)
i?i.next=r:n=r,i=r}return n}})
class ea{constructor(t,e,i,n){this.tags=t,this.mode=e,this.context=i,this.next=n}get opaque(){return 0==this.mode}get inherit(){return 1==this.mode}sort(t){return!t||t.depth<this.depth?(this.next=t,this):(t.next=this.sort(t.next),t)}get depth(){return this.context?this.context.length:0}}function ia(t,e){let i=Object.create(null)
for(let e of t)if(Array.isArray(e.tag))for(let t of e.tag)i[t.id]=e.class
else i[e.tag.id]=e.class
let{scope:n,all:s=null}=e||{}
return{style:t=>{let e=s
for(let n of t)for(let t of n.set){let n=i[t.id]
if(n){e=e?e+" "+n:n
break}}return e},scope:n}}function na(t,e,i,n=0,s=t.length){let r=new sa(n,Array.isArray(e)?e:[e],i)
r.highlightRange(t.cursor(),n,s,"",r.highlighters),r.flush(s)}ea.empty=new ea([],2,null)
class sa{constructor(t,e,i){this.at=t,this.highlighters=e,this.span=i,this.class=""}startSpan(t,e){e!=this.class&&(this.flush(t),t>this.at&&(this.at=t),this.class=e)}flush(t){t>this.at&&this.class&&this.span(this.at,t,this.class)}highlightRange(t,e,i,n,s){let{type:r,from:o,to:a}=t
if(o>=i||a<=e)return
r.isTop&&(s=this.highlighters.filter(t=>!t.scope||t.scope(r)))
let l=n,h=function(t){let e=t.type.prop(ta)
for(;e&&e.context&&!t.matchContext(e.context);)e=e.next
return e||null}(t)||ea.empty,c=function(t,e){let i=null
for(let n of t){let t=n.style(e)
t&&(i=i?i+" "+t:t)}return i}(s,h.tags)
if(c&&(l&&(l+=" "),l+=c,1==h.mode&&(n+=(n?" ":"")+c)),this.startSpan(Math.max(e,o),l),h.opaque)return
let O=t.tree&&t.tree.prop(wo.mounted)
if(O&&O.overlay){let r=t.node.enter(O.overlay[0].from+o,1),h=this.highlighters.filter(t=>!t.scope||t.scope(O.tree.type)),c=t.firstChild()
for(let f=0,u=o;;f++){let d=f<O.overlay.length?O.overlay[f]:null,p=d?d.from+o:a,g=Math.max(e,u),m=Math.min(i,p)
if(g<m&&c)for(;t.from<m&&(this.highlightRange(t,g,m,n,s),this.startSpan(Math.min(m,t.to),l),!(t.to>=p)&&t.nextSibling()););if(!d||p>i)break
u=d.to+o,u>e&&(this.highlightRange(r.cursor(),Math.max(e,d.from+o),Math.min(i,u),"",h),this.startSpan(Math.min(i,u),l))}c&&t.parent()}else if(t.firstChild()){O&&(n="")
do{if(!(t.to<=e)){if(t.from>=i)break
this.highlightRange(t,e,i,n,s),this.startSpan(Math.min(i,t.to),l)}}while(t.nextSibling())
t.parent()}}}const ra=Ho.define,oa=ra(),aa=ra(),la=ra(aa),ha=ra(aa),ca=ra(),Oa=ra(ca),fa=ra(ca),ua=ra(),da=ra(ua),pa=ra(),ga=ra(),ma=ra(),Qa=ra(ma),wa=ra(),ba={comment:oa,lineComment:ra(oa),blockComment:ra(oa),docComment:ra(oa),name:aa,variableName:ra(aa),typeName:la,tagName:ra(la),propertyName:ha,attributeName:ra(ha),className:ra(aa),labelName:ra(aa),namespace:ra(aa),macroName:ra(aa),literal:ca,string:Oa,docString:ra(Oa),character:ra(Oa),attributeValue:ra(Oa),number:fa,integer:ra(fa),float:ra(fa),bool:ra(ca),regexp:ra(ca),escape:ra(ca),color:ra(ca),url:ra(ca),keyword:pa,self:ra(pa),null:ra(pa),atom:ra(pa),unit:ra(pa),modifier:ra(pa),operatorKeyword:ra(pa),controlKeyword:ra(pa),definitionKeyword:ra(pa),moduleKeyword:ra(pa),operator:ga,derefOperator:ra(ga),arithmeticOperator:ra(ga),logicOperator:ra(ga),bitwiseOperator:ra(ga),compareOperator:ra(ga),updateOperator:ra(ga),definitionOperator:ra(ga),typeOperator:ra(ga),controlOperator:ra(ga),punctuation:ma,separator:ra(ma),bracket:Qa,angleBracket:ra(Qa),squareBracket:ra(Qa),paren:ra(Qa),brace:ra(Qa),content:ua,heading:da,heading1:ra(da),heading2:ra(da),heading3:ra(da),heading4:ra(da),heading5:ra(da),heading6:ra(da),contentSeparator:ra(ua),list:ra(ua),quote:ra(ua),emphasis:ra(ua),strong:ra(ua),link:ra(ua),monospace:ra(ua),strikethrough:ra(ua),inserted:ra(),deleted:ra(),changed:ra(),invalid:ra(),meta:wa,documentMeta:ra(wa),annotation:ra(wa),processingInstruction:ra(wa),definition:Ho.defineModifier("definition"),constant:Ho.defineModifier("constant"),function:Ho.defineModifier("function"),standard:Ho.defineModifier("standard"),local:Ho.defineModifier("local"),special:Ho.defineModifier("special")}
for(let t in ba){let e=ba[t]
e instanceof Ho&&(e.name=t)}var va
ia([{tag:ba.link,class:"tok-link"},{tag:ba.heading,class:"tok-heading"},{tag:ba.emphasis,class:"tok-emphasis"},{tag:ba.strong,class:"tok-strong"},{tag:ba.keyword,class:"tok-keyword"},{tag:ba.atom,class:"tok-atom"},{tag:ba.bool,class:"tok-bool"},{tag:ba.url,class:"tok-url"},{tag:ba.labelName,class:"tok-labelName"},{tag:ba.inserted,class:"tok-inserted"},{tag:ba.deleted,class:"tok-deleted"},{tag:ba.literal,class:"tok-literal"},{tag:ba.string,class:"tok-string"},{tag:ba.number,class:"tok-number"},{tag:[ba.regexp,ba.escape,ba.special(ba.string)],class:"tok-string2"},{tag:ba.variableName,class:"tok-variableName"},{tag:ba.local(ba.variableName),class:"tok-variableName tok-local"},{tag:ba.definition(ba.variableName),class:"tok-variableName tok-definition"},{tag:ba.special(ba.variableName),class:"tok-variableName2"},{tag:ba.definition(ba.propertyName),class:"tok-propertyName tok-definition"},{tag:ba.typeName,class:"tok-typeName"},{tag:ba.namespace,class:"tok-namespace"},{tag:ba.className,class:"tok-className"},{tag:ba.macroName,class:"tok-macroName"},{tag:ba.propertyName,class:"tok-propertyName"},{tag:ba.operator,class:"tok-operator"},{tag:ba.comment,class:"tok-comment"},{tag:ba.meta,class:"tok-meta"},{tag:ba.invalid,class:"tok-invalid"},{tag:ba.punctuation,class:"tok-punctuation"}])
const Sa=new wo
function xa(t){return Y.define({combine:t?e=>e.concat(t):void 0})}const ka=new wo
class ya{constructor(t,e,i=[],n=""){this.data=t,this.name=n,yt.prototype.hasOwnProperty("tree")||Object.defineProperty(yt.prototype,"tree",{get(){return Za(this)}}),this.parser=e,this.extension=[Ya.of(this),yt.languageData.of((t,e,i)=>{let n=$a(t,e,i),s=n.type.prop(Sa)
if(!s)return[]
let r=t.facet(s),o=n.type.prop(ka)
if(o){let s=n.resolve(e-n.from,i)
for(let e of o)if(e.test(s,t)){let i=t.facet(e.facet)
return"replace"==e.type?i:i.concat(r)}}return r})].concat(i)}isActiveAt(t,e,i=-1){return $a(t,e,i).type.prop(Sa)==this.data}findRegions(t){let e=t.facet(Ya)
if((null==e?void 0:e.data)==this.data)return[{from:0,to:t.doc.length}]
if(!e||!e.allowsNesting)return[]
let i=[],n=(t,e)=>{if(t.prop(Sa)==this.data)return void i.push({from:e,to:e+t.length})
let s=t.prop(wo.mounted)
if(s){if(s.tree.prop(Sa)==this.data){if(s.overlay)for(let t of s.overlay)i.push({from:t.from+e,to:t.to+e})
else i.push({from:e,to:e+t.length})
return}if(s.overlay){let t=i.length
if(n(s.tree,s.overlay[0].from+e),i.length>t)return}}for(let i=0;i<t.children.length;i++){let s=t.children[i]
s instanceof Po&&n(s,t.positions[i]+e)}}
return n(Za(t),0),i}get allowsNesting(){return!0}}function $a(t,e,i){let n=t.facet(Ya),s=Za(t).topNode
if(!n||n.allowsNesting)for(let t=s;t;t=t.enter(e,i,$o.ExcludeBuffers|$o.EnterBracketed))t.type.isTop&&(s=t)
return s}ya.setState=ut.define()
class Pa extends ya{constructor(t,e,i){super(t,e,[],i),this.parser=e}static define(t){let e=xa(t.languageData)
return new Pa(e,t.parser.configure({props:[Sa.add(t=>t.isTop?e:void 0)]}),t.name)}configure(t,e){return new Pa(this.data,this.parser.configure(t),e||this.name)}get allowsNesting(){return this.parser.hasWrappers()}}function Za(t){let e=t.field(ya.state,!1)
return e?e.tree:Po.empty}class Xa{constructor(t){this.doc=t,this.cursorPos=0,this.string="",this.cursor=t.iter()}get length(){return this.doc.length}syncTo(t){return this.string=this.cursor.next(t-this.cursorPos).value,this.cursorPos=t+this.string.length,this.cursorPos-this.string.length}chunk(t){return this.syncTo(t),this.string}get lineChunks(){return!0}read(t,e){let i=this.cursorPos-this.string.length
return t<i||e>=this.cursorPos?this.doc.sliceString(t,e):this.string.slice(t-i,e-i)}}let Aa=null
class Ta{constructor(t,e,i=[],n,s,r,o,a){this.parser=t,this.state=e,this.fragments=i,this.tree=n,this.treeLen=s,this.viewport=r,this.skipped=o,this.scheduleOn=a,this.parse=null,this.tempSkipped=[]}static create(t,e,i){return new Ta(t,e,[],Po.empty,0,i,[],null)}startParse(){return this.parser.startParse(new Xa(this.state.doc),this.fragments)}work(t,e){return null!=e&&e>=this.state.doc.length&&(e=void 0),this.tree!=Po.empty&&this.isDone(null!=e?e:this.state.doc.length)?(this.takeTree(),!0):this.withContext(()=>{var i
if("number"==typeof t){let e=Date.now()+t
t=()=>Date.now()>e}for(this.parse||(this.parse=this.startParse()),null!=e&&(null==this.parse.stoppedAt||this.parse.stoppedAt>e)&&e<this.state.doc.length&&this.parse.stopAt(e);;){let n=this.parse.advance()
if(n){if(this.fragments=this.withoutTempSkipped(Vo.addTree(n,this.fragments,null!=this.parse.stoppedAt)),this.treeLen=null!==(i=this.parse.stoppedAt)&&void 0!==i?i:this.state.doc.length,this.tree=n,this.parse=null,!(this.treeLen<(null!=e?e:this.state.doc.length)))return!0
this.parse=this.startParse()}if(t())return!1}})}takeTree(){let t,e
this.parse&&(t=this.parse.parsedPos)>=this.treeLen&&((null==this.parse.stoppedAt||this.parse.stoppedAt>t)&&this.parse.stopAt(t),this.withContext(()=>{for(;!(e=this.parse.advance()););}),this.treeLen=t,this.tree=e,this.fragments=this.withoutTempSkipped(Vo.addTree(this.tree,this.fragments,!0)),this.parse=null)}withContext(t){let e=Aa
Aa=this
try{return t()}finally{Aa=e}}withoutTempSkipped(t){for(let e;e=this.tempSkipped.pop();)t=Ma(t,e.from,e.to)
return t}changes(t,e){let{fragments:i,tree:n,treeLen:s,viewport:r,skipped:o}=this
if(this.takeTree(),!t.empty){let e=[]
if(t.iterChangedRanges((t,i,n,s)=>e.push({fromA:t,toA:i,fromB:n,toB:s})),i=Vo.applyChanges(i,e),n=Po.empty,s=0,r={from:t.mapPos(r.from,-1),to:t.mapPos(r.to,1)},this.skipped.length){o=[]
for(let e of this.skipped){let i=t.mapPos(e.from,1),n=t.mapPos(e.to,-1)
i<n&&o.push({from:i,to:n})}}}return new Ta(this.parser,e,i,n,s,r,o,this.scheduleOn)}updateViewport(t){if(this.viewport.from==t.from&&this.viewport.to==t.to)return!1
this.viewport=t
let e=this.skipped.length
for(let e=0;e<this.skipped.length;e++){let{from:i,to:n}=this.skipped[e]
i<t.to&&n>t.from&&(this.fragments=Ma(this.fragments,i,n),this.skipped.splice(e--,1))}return!(this.skipped.length>=e)&&(this.reset(),!0)}reset(){this.parse&&(this.takeTree(),this.parse=null)}skipUntilInView(t,e){this.skipped.push({from:t,to:e})}static getSkippingParser(t){return new class extends Go{createParse(e,i,n){let s=n[0].from,r=n[n.length-1].to
return{parsedPos:s,advance(){let e=Aa
if(e){for(let t of n)e.tempSkipped.push(t)
t&&(e.scheduleOn=e.scheduleOn?Promise.all([e.scheduleOn,t]):t)}return this.parsedPos=r,new Po(So.none,[],[],r-s)},stoppedAt:null,stopAt(){}}}}}isDone(t){t=Math.min(t,this.state.doc.length)
let e=this.fragments
return this.treeLen>=t&&e.length&&0==e[0].from&&e[0].to>=t}static get(){return Aa}}function Ma(t,e,i){return Vo.applyChanges(t,[{fromA:e,toA:i,fromB:e,toB:i}])}class Ra{constructor(t){this.context=t,this.tree=t.tree}apply(t){if(!t.docChanged&&this.tree==this.context.tree)return this
let e=this.context.changes(t.changes,t.state),i=this.context.treeLen==t.startState.doc.length?void 0:Math.max(t.changes.mapPos(this.context.treeLen),e.viewport.to)
return e.work(20,i)||e.takeTree(),new Ra(e)}static init(t){let e=Math.min(3e3,t.doc.length),i=Ta.create(t.facet(Ya).parser,t,{from:0,to:e})
return i.work(20,e)||i.takeTree(),new Ra(i)}}ya.state=U.define({create:Ra.init,update(t,e){for(let t of e.effects)if(t.is(ya.setState))return t.value
return e.startState.facet(Ya)!=e.state.facet(Ya)?Ra.init(e.state):t.apply(e)}})
let Ca=t=>{let e=setTimeout(()=>t(),500)
return()=>clearTimeout(e)}
"undefined"!=typeof requestIdleCallback&&(Ca=t=>{let e=-1,i=setTimeout(()=>{e=requestIdleCallback(t,{timeout:400})},100)
return()=>e<0?clearTimeout(i):cancelIdleCallback(e)})
const _a="undefined"!=typeof navigator&&(null===(va=navigator.scheduling)||void 0===va?void 0:va.isInputPending)?()=>navigator.scheduling.isInputPending():null,ja=Ei.fromClass(class{constructor(t){this.view=t,this.working=null,this.workScheduled=0,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(t){let e=this.view.state.field(ya.state).context;(e.updateViewport(t.view.viewport)||this.view.viewport.to>e.treeLen)&&this.scheduleWork(),(t.docChanged||t.selectionSet)&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(e)}scheduleWork(){if(this.working)return
let{state:t}=this.view,e=t.field(ya.state)
e.tree==e.context.tree&&e.context.isDone(t.doc.length)||(this.working=Ca(this.work))}work(t){this.working=null
let e=Date.now()
if(this.chunkEnd<e&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=e+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return
let{state:i,viewport:{to:n}}=this.view,s=i.field(ya.state)
if(s.tree==s.context.tree&&s.context.isDone(n+1e5))return
let r=Date.now()+Math.min(this.chunkBudget,100,t&&!_a?Math.max(25,t.timeRemaining()-5):1e9),o=s.context.treeLen<n&&i.doc.length>n+1e3,a=s.context.work(()=>_a&&_a()||Date.now()>r,n+(o?0:1e5))
this.chunkBudget-=Date.now()-e,(a||this.chunkBudget<=0)&&(s.context.takeTree(),this.view.dispatch({effects:ya.setState.of(new Ra(s.context))})),this.chunkBudget>0&&(!a||o)&&this.scheduleWork(),this.checkAsyncSchedule(s.context)}checkAsyncSchedule(t){t.scheduleOn&&(this.workScheduled++,t.scheduleOn.then(()=>this.scheduleWork()).catch(t=>_i(this.view.state,t)).then(()=>this.workScheduled--),t.scheduleOn=null)}destroy(){this.working&&this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}}),Ya=Y.define({combine:t=>t.length?t[0]:null,enables:t=>[ya.state,ja,fr.contentAttributes.compute([t],e=>{let i=e.facet(t)
return i&&i.name?{"data-language":i.name}:{}})]})
class Wa{constructor(t,e=[]){this.language=t,this.support=e,this.extension=[t,e]}}const Ea=Y.define(),za=Y.define({combine:t=>{if(!t.length)return"  "
let e=t[0]
if(!e||/\S/.test(e)||Array.from(e).some(t=>t!=e[0]))throw new Error("Invalid indent unit: "+JSON.stringify(t[0]))
return e}})
function qa(t){let e=t.facet(za)
return 9==e.charCodeAt(0)?t.tabSize*e.length:e.length}function Da(t,e){let i="",n=t.tabSize,s=t.facet(za)[0]
if("\t"==s){for(;e>=n;)i+="\t",e-=n
s=" "}for(let t=0;t<e;t++)i+=s
return i}function La(t,e){t instanceof yt&&(t=new Ua(t))
for(let i of t.state.facet(Ea)){let n=i(t,e)
if(void 0!==n)return n}let i=Za(t.state)
return i.length>=e?function(t,e,i){let n=e.resolveStack(i),s=e.resolveInner(i,-1).resolve(i,0).enterUnfinishedNodesBefore(i)
if(s!=n.node){let t=[]
for(let e=s;e&&!(e.from<n.node.from||e.to>n.node.to||e.from==n.node.from&&e.type==n.node.type);e=e.parent)t.push(e)
for(let e=t.length-1;e>=0;e--)n={node:t[e],next:n}}return Va(n,t,i)}(t,i,e):null}class Ua{constructor(t,e={}){this.state=t,this.options=e,this.unit=qa(t)}lineAt(t,e=1){let i=this.state.doc.lineAt(t),{simulateBreak:n,simulateDoubleBreak:s}=this.options
return null!=n&&n>=i.from&&n<=i.to?s&&n==t?{text:"",from:t}:(e<0?n<t:n<=t)?{text:i.text.slice(n-i.from),from:n}:{text:i.text.slice(0,n-i.from),from:i.from}:i}textAfterPos(t,e=1){if(this.options.simulateDoubleBreak&&t==this.options.simulateBreak)return""
let{text:i,from:n}=this.lineAt(t,e)
return i.slice(t-n,Math.min(i.length,t+100-n))}column(t,e=1){let{text:i,from:n}=this.lineAt(t,e),s=this.countColumn(i,t-n),r=this.options.overrideIndentation?this.options.overrideIndentation(n):-1
return r>-1&&(s+=r-this.countColumn(i,i.search(/\S|$/))),s}countColumn(t,e=t.length){return Bt(t,this.state.tabSize,e)}lineIndent(t,e=1){let{text:i,from:n}=this.lineAt(t,e),s=this.options.overrideIndentation
if(s){let t=s(n)
if(t>-1)return t}return this.countColumn(i,i.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}}const Ba=new wo
function Va(t,e,i){for(let n=t;n;n=n.next){let t=Ga(n.node)
if(t)return t(Na.create(e,i,n))}return 0}function Ga(t){let e=t.type.prop(Ba)
if(e)return e
let i,n=t.firstChild
if(n&&(i=n.type.prop(wo.closedBy))){let e=t.lastChild,n=e&&i.indexOf(e.name)>-1
return t=>Ka(t,!0,1,void 0,n&&!function(t){return t.pos==t.options.simulateBreak&&t.options.simulateDoubleBreak}(t)?e.from:void 0)}return null==t.parent?Ia:null}function Ia(){return 0}class Na extends Ua{constructor(t,e,i){super(t.state,t.options),this.base=t,this.pos=e,this.context=i}get node(){return this.context.node}static create(t,e,i){return new Na(t,e,i)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){return this.baseIndentFor(this.node)}baseIndentFor(t){let e=this.state.doc.lineAt(t.from)
for(;;){let i=t.resolve(e.from)
for(;i.parent&&i.parent.from==i.from;)i=i.parent
if(Ha(i,t))break
e=this.state.doc.lineAt(i.from)}return this.lineIndent(e.from)}continue(){return Va(this.context.next,this.base,this.pos)}}function Ha(t,e){for(let i=e;i;i=i.parent)if(t==i)return!0
return!1}function Fa({closing:t,align:e=!0,units:i=1}){return n=>Ka(n,e,i,t)}function Ka(t,e,i,n,s){let r=t.textAfter,o=r.match(/^\s*/)[0].length,a=n&&r.slice(o,o+n.length)==n||s==t.pos+o,l=e?function(t){let e=t.node,i=e.childAfter(e.from),n=e.lastChild
if(!i)return null
let s=t.options.simulateBreak,r=t.state.doc.lineAt(i.from),o=null==s||s<=r.from?r.to:Math.min(r.to,s)
for(let t=i.to;;){let s=e.childAfter(t)
if(!s||s==n)return null
if(!s.type.isSkipped){if(s.from>=o)return null
let t=/^ */.exec(r.text.slice(i.to-r.from))[0].length
return{from:i.from,to:i.to+t}}t=s.to}}(t):null
return l?a?t.column(l.from):t.column(l.to):t.baseIndent+(a?0:t.unit*i)}function Ja({except:t,units:e=1}={}){return i=>{let n=t&&t.test(i.textAfter)
return i.baseIndent+(n?0:e*i.unit)}}const tl=new wo
class el{constructor(t,e){let i
function n(t){let e=Nt.newName()
return(i||(i=Object.create(null)))["."+e]=t,e}this.specs=t
const s="string"==typeof e.all?e.all:e.all?n(e.all):void 0,r=e.scope
this.scope=r instanceof ya?t=>t.prop(Sa)==r.data:r?t=>t==r:void 0,this.style=ia(t.map(t=>({tag:t.tag,class:t.class||n(Object.assign({},t,{tag:null}))})),{all:s}).style,this.module=i?new Nt(i):null,this.themeType=e.themeType}static define(t,e){return new el(t,e||{})}}const il=Y.define(),nl=Y.define({combine:t=>t.length?[t[0]]:null})
function sl(t){let e=t.facet(il)
return e.length?e:t.facet(nl)}class rl{constructor(t){this.markCache=Object.create(null),this.tree=Za(t.state),this.decorations=this.buildDeco(t,sl(t.state)),this.decoratedTo=t.viewport.to}update(t){let e=Za(t.state),i=sl(t.state),n=i!=sl(t.startState),{viewport:s}=t.view,r=t.changes.mapPos(this.decoratedTo,1)
e.length<s.to&&!n&&e.type==this.tree.type&&r>=s.to?(this.decorations=this.decorations.map(t.changes),this.decoratedTo=r):(e!=this.tree||t.viewportChanged||n)&&(this.tree=e,this.decorations=this.buildDeco(t.view,i),this.decoratedTo=s.to)}buildDeco(t,e){if(!e||!this.tree.length)return xe.none
let i=new Ct
for(let{from:n,to:s}of t.visibleRanges)na(this.tree,e,(t,e,n)=>{i.add(t,e,this.markCache[n]||(this.markCache[n]=xe.mark({class:n})))},n,s)
return i.finish()}}const ol=H.high(Ei.fromClass(rl,{decorations:t=>t.decorations})),al=el.define([{tag:ba.meta,color:"#404740"},{tag:ba.link,textDecoration:"underline"},{tag:ba.heading,textDecoration:"underline",fontWeight:"bold"},{tag:ba.emphasis,fontStyle:"italic"},{tag:ba.strong,fontWeight:"bold"},{tag:ba.strikethrough,textDecoration:"line-through"},{tag:ba.keyword,color:"#708"},{tag:[ba.atom,ba.bool,ba.url,ba.contentSeparator,ba.labelName],color:"#219"},{tag:[ba.literal,ba.inserted],color:"#164"},{tag:[ba.string,ba.deleted],color:"#a11"},{tag:[ba.regexp,ba.escape,ba.special(ba.string)],color:"#e40"},{tag:ba.definition(ba.variableName),color:"#00f"},{tag:ba.local(ba.variableName),color:"#30a"},{tag:[ba.typeName,ba.namespace],color:"#085"},{tag:ba.className,color:"#167"},{tag:[ba.special(ba.variableName),ba.macroName],color:"#256"},{tag:ba.definition(ba.propertyName),color:"#00c"},{tag:ba.comment,color:"#940"},{tag:ba.invalid,color:"#f00"}]),ll=fr.baseTheme({"&.cm-focused .cm-matchingBracket":{backgroundColor:"#328c8252"},"&.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bb555544"}}),hl="()[]{}",cl=Y.define({combine:t=>$t(t,{afterCursor:!0,brackets:hl,maxScanDistance:1e4,renderMatch:ul})}),Ol=xe.mark({class:"cm-matchingBracket"}),fl=xe.mark({class:"cm-nonmatchingBracket"})
function ul(t){let e=[],i=t.matched?Ol:fl
return e.push(i.range(t.start.from,t.start.to)),t.end&&e.push(i.range(t.end.from,t.end.to)),e}function dl(t){let e=[],i=t.facet(cl)
for(let n of t.selection.ranges){if(!n.empty)continue
let s=wl(t,n.head,-1,i)||n.head>0&&wl(t,n.head-1,1,i)||i.afterCursor&&(wl(t,n.head,1,i)||n.head<t.doc.length&&wl(t,n.head+1,-1,i))
s&&(e=e.concat(i.renderMatch(s,t)))}return xe.set(e,!0)}const pl=[Ei.fromClass(class{constructor(t){this.paused=!1,this.decorations=dl(t.state)}update(t){(t.docChanged||t.selectionSet||this.paused)&&(t.view.composing?(this.decorations=this.decorations.map(t.changes),this.paused=!0):(this.decorations=dl(t.state),this.paused=!1))}},{decorations:t=>t.decorations}),ll]
const gl=new wo
function ml(t,e,i){let n=t.prop(e<0?wo.openedBy:wo.closedBy)
if(n)return n
if(1==t.name.length){let n=i.indexOf(t.name)
if(n>-1&&n%2==(e<0?1:0))return[i[n+e]]}return null}function Ql(t){let e=t.type.prop(gl)
return e?e(t.node):t}function wl(t,e,i,n={}){let s=n.maxScanDistance||1e4,r=n.brackets||hl,o=Za(t),a=o.resolveInner(e,i)
for(let n=a;n;n=n.parent){let s=ml(n.type,i,r)
if(s&&n.from<n.to){let o=Ql(n)
if(o&&(i>0?e>=o.from&&e<o.to:e>o.from&&e<=o.to))return bl(t,e,i,n,o,s,r)}}return function(t,e,i,n,s,r,o){if(i<0?!e:e==t.doc.length)return null
let a=i<0?t.sliceDoc(e-1,e):t.sliceDoc(e,e+1),l=o.indexOf(a)
if(l<0||l%2==0!=i>0)return null
let h={from:i<0?e-1:e,to:i>0?e+1:e},c=t.doc.iterRange(e,i>0?t.doc.length:0),O=0
for(let t=0;!c.next().done&&t<=r;){let r=c.value
i<0&&(t+=r.length)
let a=e+t*i
for(let t=i>0?0:r.length-1,e=i>0?r.length:-1;t!=e;t+=i){let e=o.indexOf(r[t])
if(!(e<0||n.resolveInner(a+t,1).type!=s))if(e%2==0==i>0)O++
else{if(1==O)return{start:h,end:{from:a+t,to:a+t+1},matched:e>>1==l>>1}
O--}}i>0&&(t+=r.length)}return c.done?{start:h,matched:!1}:null}(t,e,i,o,a.type,s,r)}function bl(t,e,i,n,s,r,o){let a=n.parent,l={from:s.from,to:s.to},h=0,c=null==a?void 0:a.cursor()
if(c&&(i<0?c.childBefore(n.from):c.childAfter(n.to)))do{if(i<0?c.to<=n.from:c.from>=n.to){if(0==h&&r.indexOf(c.type.name)>-1&&c.from<c.to){let t=Ql(c)
return{start:l,end:t?{from:t.from,to:t.to}:void 0,matched:!0}}if(ml(c.type,i,o))h++
else if(ml(c.type,-i,o)){if(0==h){let t=Ql(c)
return{start:l,end:t&&t.from<t.to?{from:t.from,to:t.to}:void 0,matched:!1}}h--}}}while(i<0?c.prevSibling():c.nextSibling())
return{start:l,matched:!1}}const vl=Object.create(null),Sl=[So.none],xl=[],kl=Object.create(null),yl=Object.create(null)
for(let[t,e]of[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","tagName"],["attribute","attributeName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]])yl[t]=Pl(vl,e)
function $l(t,e){xl.indexOf(t)>-1||(xl.push(t),console.warn(e))}function Pl(t,e){let i=[]
for(let n of e.split(" ")){let e=[]
for(let i of n.split(".")){let n=t[i]||ba[i]
n?"function"==typeof n?e.length?e=e.map(n):$l(i,`Modifier ${i} used at start of tag`):e.length?$l(i,`Tag ${i} used as modifier`):e=Array.isArray(n)?n:[n]:$l(i,`Unknown highlighting tag ${i}`)}for(let t of e)i.push(t)}if(!i.length)return 0
let n=e.replace(/ /g,"_"),s=n+" "+i.map(t=>t.id),r=kl[s]
if(r)return r.id
let o=kl[s]=So.define({id:Sl.length,name:n,props:[Jo({[n]:i})]})
return Sl.push(o),o.id}ei.RTL,ei.LTR
function Zl(t,e){return({state:i,dispatch:n})=>{if(i.readOnly)return!1
let s=t(e,i)
return!!s&&(n(i.update(s)),!0)}}const Xl=Zl(_l,0),Al=Zl(Cl,0),Tl=Zl((t,e)=>Cl(t,e,function(t){let e=[]
for(let i of t.selection.ranges){let n=t.doc.lineAt(i.from),s=i.to<=n.to?n:t.doc.lineAt(i.to)
s.from>n.from&&s.from==i.to&&(s=i.to==n.to+1?n:t.doc.lineAt(i.to-1))
let r=e.length-1
r>=0&&e[r].to>n.from?e[r].to=s.to:e.push({from:n.from+/^\s*/.exec(n.text)[0].length,to:s.to})}return e}(e)),0)
function Ml(t,e){let i=t.languageDataAt("commentTokens",e,1)
return i.length?i[0]:{}}const Rl=50
function Cl(t,e,i=e.selection.ranges){let n=i.map(t=>Ml(e,t.from).block)
if(!n.every(t=>t))return null
let s=i.map((t,i)=>function(t,{open:e,close:i},n,s){let r,o,a=t.sliceDoc(n-Rl,n),l=t.sliceDoc(s,s+Rl),h=/\s*$/.exec(a)[0].length,c=/^\s*/.exec(l)[0].length,O=a.length-h
if(a.slice(O-e.length,O)==e&&l.slice(c,c+i.length)==i)return{open:{pos:n-h,margin:h&&1},close:{pos:s+c,margin:c&&1}}
s-n<=2*Rl?r=o=t.sliceDoc(n,s):(r=t.sliceDoc(n,n+Rl),o=t.sliceDoc(s-Rl,s))
let f=/^\s*/.exec(r)[0].length,u=/\s*$/.exec(o)[0].length,d=o.length-u-i.length
return r.slice(f,f+e.length)==e&&o.slice(d,d+i.length)==i?{open:{pos:n+f+e.length,margin:/\s/.test(r.charAt(f+e.length))?1:0},close:{pos:s-u-i.length,margin:/\s/.test(o.charAt(d-1))?1:0}}:null}(e,n[i],t.from,t.to))
if(2!=t&&!s.every(t=>t))return{changes:e.changes(i.map((t,e)=>s[e]?[]:[{from:t.from,insert:n[e].open+" "},{from:t.to,insert:" "+n[e].close}]))}
if(1!=t&&s.some(t=>t)){let t=[]
for(let e,i=0;i<s.length;i++)if(e=s[i]){let s=n[i],{open:r,close:o}=e
t.push({from:r.pos-s.open.length,to:r.pos+r.margin},{from:o.pos-o.margin,to:o.pos+s.close.length})}return{changes:t}}return null}function _l(t,e,i=e.selection.ranges){let n=[],s=-1
t:for(let{from:t,to:r}of i){let i,o=n.length,a=1e9
for(let o=t;o<=r;){let l=e.doc.lineAt(o)
if(null==i&&(i=Ml(e,l.from).line,!i))continue t
if(l.from>s&&(t==r||r>l.from)){s=l.from
let t=/^\s*/.exec(l.text)[0].length,e=t==l.length,r=l.text.slice(t,t+i.length)==i?t:-1
t<l.text.length&&t<a&&(a=t),n.push({line:l,comment:r,token:i,indent:t,empty:e,single:!1})}o=l.to+1}if(a<1e9)for(let t=o;t<n.length;t++)n[t].indent<n[t].line.text.length&&(n[t].indent=a)
n.length==o+1&&(n[o].single=!0)}if(2!=t&&n.some(t=>t.comment<0&&(!t.empty||t.single))){let t=[]
for(let{line:e,token:i,indent:s,empty:r,single:o}of n)!o&&r||t.push({from:e.from+s,insert:i+" "})
let i=e.changes(t)
return{changes:i,selection:e.selection.map(i,1)}}if(1!=t&&n.some(t=>t.comment>=0)){let t=[]
for(let{line:e,comment:i,token:s}of n)if(i>=0){let n=e.from+i,r=n+s.length
" "==e.text[r-e.from]&&r++,t.push({from:n,to:r})}return{changes:t}}return null}const jl=ct.define(),Yl=ct.define(),Wl=Y.define(),El=Y.define({combine:t=>$t(t,{minDepth:100,newGroupDelay:500,joinToEvent:(t,e)=>e},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(t,e)=>(i,n)=>t(i,n)||e(i,n)})}),zl=U.define({create:()=>ih.empty,update(t,e){let i=e.state.facet(El),n=e.annotation(jl)
if(n){let s=Vl.fromTransaction(e,n.selection),r=n.side,o=0==r?t.undone:t.done
return o=s?Gl(o,o.length,i.minDepth,s):Fl(o,e.startState.selection),new ih(0==r?n.rest:o,0==r?o:n.rest)}let s=e.annotation(Yl)
if("full"!=s&&"before"!=s||(t=t.isolate()),!1===e.annotation(dt.addToHistory))return e.changes.empty?t:t.addMapping(e.changes.desc)
let r=Vl.fromTransaction(e),o=e.annotation(dt.time),a=e.annotation(dt.userEvent)
return r?t=t.addChanges(r,o,a,i,e):e.selection&&(t=t.addSelection(e.startState.selection,o,a,i.newGroupDelay)),"full"!=s&&"after"!=s||(t=t.isolate()),t},toJSON:t=>({done:t.done.map(t=>t.toJSON()),undone:t.undone.map(t=>t.toJSON())}),fromJSON:t=>new ih(t.done.map(Vl.fromJSON),t.undone.map(Vl.fromJSON))})
function ql(t,e){return function({state:i,dispatch:n}){if(!e&&i.readOnly)return!1
let s=i.field(zl,!1)
if(!s)return!1
let r=s.pop(t,i,e)
return!!r&&(n(r),!0)}}const Dl=ql(0,!1),Ll=ql(1,!1),Ul=ql(0,!0),Bl=ql(1,!0)
class Vl{constructor(t,e,i,n,s){this.changes=t,this.effects=e,this.mapped=i,this.startSelection=n,this.selectionsAfter=s}setSelAfter(t){return new Vl(this.changes,this.effects,this.mapped,this.startSelection,t)}toJSON(){var t,e,i
return{changes:null===(t=this.changes)||void 0===t?void 0:t.toJSON(),mapped:null===(e=this.mapped)||void 0===e?void 0:e.toJSON(),startSelection:null===(i=this.startSelection)||void 0===i?void 0:i.toJSON(),selectionsAfter:this.selectionsAfter.map(t=>t.toJSON())}}static fromJSON(t){return new Vl(t.changes&&$.fromJSON(t.changes),[],t.mapped&&y.fromJSON(t.mapped),t.startSelection&&C.fromJSON(t.startSelection),t.selectionsAfter.map(C.fromJSON))}static fromTransaction(t,e){let i=Nl
for(let e of t.startState.facet(Wl)){let n=e(t)
n.length&&(i=i.concat(n))}return!i.length&&t.changes.empty?null:new Vl(t.changes.invert(t.startState.doc),i,void 0,e||t.startState.selection,Nl)}static selection(t){return new Vl(void 0,Nl,void 0,void 0,t)}}function Gl(t,e,i,n){let s=e+1>i+20?e-i-1:0,r=t.slice(s,e)
return r.push(n),r}function Il(t,e){return t.length?e.length?t.concat(e):t:e}const Nl=[],Hl=200
function Fl(t,e){if(t.length){let i=t[t.length-1],n=i.selectionsAfter.slice(Math.max(0,i.selectionsAfter.length-Hl))
return n.length&&n[n.length-1].eq(e)?t:(n.push(e),Gl(t,t.length-1,1e9,i.setSelAfter(n)))}return[Vl.selection([e])]}function Kl(t){let e=t[t.length-1],i=t.slice()
return i[t.length-1]=e.setSelAfter(e.selectionsAfter.slice(0,e.selectionsAfter.length-1)),i}function Jl(t,e){if(!t.length)return t
let i=t.length,n=Nl
for(;i;){let s=th(t[i-1],e,n)
if(s.changes&&!s.changes.empty||s.effects.length){let e=t.slice(0,i)
return e[i-1]=s,e}e=s.mapped,i--,n=s.selectionsAfter}return n.length?[Vl.selection(n)]:Nl}function th(t,e,i){let n=Il(t.selectionsAfter.length?t.selectionsAfter.map(t=>t.map(e)):Nl,i)
if(!t.changes)return Vl.selection(n)
let s=t.changes.map(e),r=e.mapDesc(t.changes,!0),o=t.mapped?t.mapped.composeDesc(r):r
return new Vl(s,ut.mapEffects(t.effects,e),o,t.startSelection.map(r),n)}const eh=/^(input\.type|delete)($|\.)/
class ih{constructor(t,e,i=0,n=void 0){this.done=t,this.undone=e,this.prevTime=i,this.prevUserEvent=n}isolate(){return this.prevTime?new ih(this.done,this.undone):this}addChanges(t,e,i,n,s){let r=this.done,o=r[r.length-1]
return r=o&&o.changes&&!o.changes.empty&&t.changes&&(!i||eh.test(i))&&(!o.selectionsAfter.length&&e-this.prevTime<n.newGroupDelay&&n.joinToEvent(s,function(t,e){let i=[],n=!1
return t.iterChangedRanges((t,e)=>i.push(t,e)),e.iterChangedRanges((t,e,s,r)=>{for(let t=0;t<i.length;){let e=i[t++],o=i[t++]
r>=e&&s<=o&&(n=!0)}}),n}(o.changes,t.changes))||"input.type.compose"==i)?Gl(r,r.length-1,n.minDepth,new Vl(t.changes.compose(o.changes),Il(ut.mapEffects(t.effects,o.changes),o.effects),o.mapped,o.startSelection,Nl)):Gl(r,r.length,n.minDepth,t),new ih(r,Nl,e,i)}addSelection(t,e,i,n){let s=this.done.length?this.done[this.done.length-1].selectionsAfter:Nl
return s.length>0&&e-this.prevTime<n&&i==this.prevUserEvent&&i&&/^select($|\.)/.test(i)&&(r=s[s.length-1],o=t,r.ranges.length==o.ranges.length&&0===r.ranges.filter((t,e)=>t.empty!=o.ranges[e].empty).length)?this:new ih(Fl(this.done,t),this.undone,e,i)
var r,o}addMapping(t){return new ih(Jl(this.done,t),Jl(this.undone,t),this.prevTime,this.prevUserEvent)}pop(t,e,i){let n=0==t?this.done:this.undone
if(0==n.length)return null
let s=n[n.length-1],r=s.selectionsAfter[0]||(s.startSelection?s.startSelection.map(s.changes.invertedDesc,1):e.selection)
if(i&&s.selectionsAfter.length)return e.update({selection:s.selectionsAfter[s.selectionsAfter.length-1],annotations:jl.of({side:t,rest:Kl(n),selection:r}),userEvent:0==t?"select.undo":"select.redo",scrollIntoView:!0})
if(s.changes){let i=1==n.length?Nl:n.slice(0,n.length-1)
return s.mapped&&(i=Jl(i,s.mapped)),e.update({changes:s.changes,selection:s.startSelection,effects:s.effects,annotations:jl.of({side:t,rest:i,selection:r}),filter:!1,userEvent:0==t?"undo":"redo",scrollIntoView:!0})}return null}}ih.empty=new ih(Nl,Nl)
const nh=[{key:"Mod-z",run:Dl,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:Ll,preventDefault:!0},{linux:"Ctrl-Shift-z",run:Ll,preventDefault:!0},{key:"Mod-u",run:Ul,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:Bl,preventDefault:!0}]
function sh(t,e){return C.create(t.ranges.map(e),t.mainIndex)}function rh(t,e){return t.update({selection:e,scrollIntoView:!0,userEvent:"select"})}function oh({state:t,dispatch:e},i){let n=sh(t.selection,i)
return!n.eq(t.selection,!0)&&(e(rh(t,n)),!0)}function ah(t,e){return C.cursor(e?t.to:t.from)}function lh(t,e){return oh(t,i=>i.empty?t.moveByChar(i,e):ah(i,e))}function hh(t){return t.textDirectionAt(t.state.selection.main.head)==ei.LTR}const ch=t=>lh(t,!hh(t)),Oh=t=>lh(t,hh(t))
function fh(t,e){return oh(t,i=>i.empty?t.moveByGroup(i,e):ah(i,e))}function uh(t,e,i){if(e.type.prop(i))return!0
let n=e.to-e.from
return n&&(n>2||/[^\s,.;:]/.test(t.sliceDoc(e.from,e.to)))||e.firstChild}function dh(t,e,i){let n,s,r=Za(t).resolveInner(e.head),o=i?wo.closedBy:wo.openedBy
for(let n=e.head;;){let e=i?r.childAfter(n):r.childBefore(n)
if(!e)break
uh(t,e,o)?r=e:n=i?e.to:e.from}return s=r.type.prop(o)&&(n=i?wl(t,r.from,1):wl(t,r.to,-1))&&n.matched?i?n.end.to:n.end.from:i?r.to:r.from,C.cursor(s,i?-1:1)}function ph(t,e){return oh(t,i=>{if(!i.empty)return ah(i,e)
let n=t.moveVertically(i,e)
return n.head!=i.head?n:t.moveToLineBoundary(i,e)})}const gh=t=>ph(t,!1),mh=t=>ph(t,!0)
function Qh(t){let e,i=t.scrollDOM.clientHeight<t.scrollDOM.scrollHeight-2,n=0,s=0
if(i){for(let e of t.state.facet(fr.scrollMargins)){let i=e(t);(null==i?void 0:i.top)&&(n=Math.max(null==i?void 0:i.top,n)),(null==i?void 0:i.bottom)&&(s=Math.max(null==i?void 0:i.bottom,s))}e=t.scrollDOM.clientHeight-n-s}else e=(t.dom.ownerDocument.defaultView||window).innerHeight
return{marginTop:n,marginBottom:s,selfScroll:i,height:Math.max(t.defaultLineHeight,e-5)}}function wh(t,e){let i,n=Qh(t),{state:s}=t,r=sh(s.selection,i=>i.empty?t.moveVertically(i,e,n.height):ah(i,e))
if(r.eq(s.selection))return!1
if(n.selfScroll){let e=t.coordsAtPos(s.selection.main.head),o=t.scrollDOM.getBoundingClientRect(),a=o.top+n.marginTop,l=o.bottom-n.marginBottom
e&&e.top>a&&e.bottom<l&&(i=fr.scrollIntoView(r.main.head,{y:"start",yMargin:e.top-a}))}return t.dispatch(rh(s,r),{effects:i}),!0}const bh=t=>wh(t,!1),vh=t=>wh(t,!0)
function Sh(t,e,i){let n=t.lineBlockAt(e.head),s=t.moveToLineBoundary(e,i)
if(s.head==e.head&&s.head!=(i?n.to:n.from)&&(s=t.moveToLineBoundary(e,i,!1)),!i&&s.head==n.from&&n.length){let i=/^\s*/.exec(t.state.sliceDoc(n.from,Math.min(n.from+100,n.to)))[0].length
i&&e.head!=n.from+i&&(s=C.cursor(n.from+i))}return s}function xh(t,e,i){let n=sh(t.state.selection,t=>{t.undirectional&&t.head>=t.anchor!=e&&(t=C.range(t.head,t.anchor))
let n=i(t)
return C.range(t.anchor,n.head,n.goalColumn,n.bidiLevel||void 0,n.assoc)})
return!n.eq(t.state.selection)&&(t.dispatch(rh(t.state,n)),!0)}function kh(t,e){return xh(t,e,i=>t.moveByChar(i,e))}const yh=t=>kh(t,!hh(t)),$h=t=>kh(t,hh(t))
function Ph(t,e){return xh(t,e,i=>t.moveByGroup(i,e))}function Zh(t,e){return xh(t,e,i=>t.moveVertically(i,e))}const Xh=t=>Zh(t,!1),Ah=t=>Zh(t,!0)
function Th(t,e){return xh(t,e,i=>t.moveVertically(i,e,Qh(t).height))}const Mh=t=>Th(t,!1),Rh=t=>Th(t,!0),Ch=({state:t,dispatch:e})=>(e(rh(t,{anchor:0})),!0),_h=({state:t,dispatch:e})=>(e(rh(t,{anchor:t.doc.length})),!0),jh=({state:t,dispatch:e})=>(e(rh(t,{anchor:t.selection.main.anchor,head:0})),!0),Yh=({state:t,dispatch:e})=>(e(rh(t,{anchor:t.selection.main.anchor,head:t.doc.length})),!0)
function Wh(t,e){let{state:i}=t,n=i.selection,s=i.selection.ranges.slice()
for(let n of i.selection.ranges){let r=i.doc.lineAt(n.head)
if(e?r.to<t.state.doc.length:r.from>0)for(let i=n;;){let n=t.moveVertically(i,e)
if(n.head<r.from||n.head>r.to){s.some(t=>t.head==n.head)||s.push(n)
break}if(n.head==i.head)break
i=n}}return s.length!=n.ranges.length&&(t.dispatch(rh(i,C.create(s,s.length-1))),!0)}function Eh(t,e){if(t.state.readOnly)return!1
let i="delete.selection",{state:n}=t,s=n.changeByRange(n=>{let{from:s,to:r}=n
if(s==r){let o=e(n)
o<s?(i="delete.backward",o=zh(t,o,!1)):o>s&&(i="delete.forward",o=zh(t,o,!0)),s=Math.min(s,o),r=Math.max(r,o)}else s=zh(t,s,!1),r=zh(t,r,!0)
return s==r?{range:n}:{changes:{from:s,to:r},range:C.cursor(s,s<n.head?-1:1)}})
return!s.changes.empty&&(t.dispatch(n.update(s,{scrollIntoView:!0,userEvent:i,effects:"delete.selection"==i?fr.announce.of(n.phrase("Selection deleted")):void 0})),!0)}function zh(t,e,i){if(t instanceof fr)for(let n of t.state.facet(fr.atomicRanges).map(e=>e(t)))n.between(e,e,(t,n)=>{t<e&&n>e&&(e=i?n:t)})
return e}const qh=(t,e,i)=>Eh(t,n=>{let s,r,o=n.from,{state:a}=t,l=a.doc.lineAt(o)
if(i&&!e&&o>l.from&&o<l.from+200&&!/[^ \t]/.test(s=l.text.slice(0,o-l.from))){if("\t"==s[s.length-1])return o-1
let t=Bt(s,a.tabSize)%qa(a)||qa(a)
for(let e=0;e<t&&" "==s[s.length-1-e];e++)o--
r=o}else r=v(l.text,o-l.from,e,e)+l.from,r==o&&l.number!=(e?a.doc.lines:1)?r+=e?1:-1:!e&&/[\ufe00-\ufe0f]/.test(l.text.slice(r-l.from,o-l.from))&&(r=v(l.text,r-l.from,!1,!1)+l.from)
return r}),Dh=t=>qh(t,!1,!0),Lh=t=>qh(t,!0,!1),Uh=(t,e)=>Eh(t,i=>{let n=i.head,{state:s}=t,r=s.doc.lineAt(n),o=s.charCategorizer(n)
for(let t=null;;){if(n==(e?r.to:r.from)){n==i.head&&r.number!=(e?s.doc.lines:1)&&(n+=e?1:-1)
break}let a=v(r.text,n-r.from,e)+r.from,l=r.text.slice(Math.min(n,a)-r.from,Math.max(n,a)-r.from),h=o(l)
if(null!=t&&h!=t)break
" "==l&&n==i.head||(t=h),n=a}return n}),Bh=t=>Uh(t,!1)
function Vh(t){let e=[],i=-1
for(let n of t.selection.ranges){let s=t.doc.lineAt(n.from),r=t.doc.lineAt(n.to)
if(n.empty||n.to!=r.from||(r=t.doc.lineAt(n.to-1)),i>=s.number){let t=e[e.length-1]
t.to=r.to,t.ranges.push(n)}else e.push({from:s.from,to:r.to,ranges:[n]})
i=r.number+1}return e}function Gh(t,e,i){if(t.readOnly)return!1
let n=[],s=[]
for(let e of Vh(t)){if(i?e.to==t.doc.length:0==e.from)continue
let r=t.doc.lineAt(i?e.to+1:e.from-1),o=r.length+1
if(i){n.push({from:e.to,to:r.to},{from:e.from,insert:r.text+t.lineBreak})
for(let i of e.ranges)s.push(C.range(Math.min(t.doc.length,i.anchor+o),Math.min(t.doc.length,i.head+o)))}else{n.push({from:r.from,to:e.from},{from:e.to,insert:t.lineBreak+r.text})
for(let t of e.ranges)s.push(C.range(t.anchor-o,t.head-o))}}return!!n.length&&(e(t.update({changes:n,scrollIntoView:!0,selection:C.create(s,t.selection.mainIndex),userEvent:"move.line"})),!0)}function Ih(t,e,i){if(t.readOnly)return!1
let n=[]
for(let e of Vh(t))i?n.push({from:e.from,insert:t.doc.slice(e.from,e.to)+t.lineBreak}):n.push({from:e.to,insert:t.lineBreak+t.doc.slice(e.from,e.to)})
let s=t.changes(n)
return e(t.update({changes:s,selection:t.selection.map(s,i?1:-1),scrollIntoView:!0,userEvent:"input.copyline"})),!0}const Nh=Hh(!1)
function Hh(t){return({state:e,dispatch:i})=>{if(e.readOnly)return!1
let n=e.changeByRange(i=>{let{from:n,to:s}=i,r=e.doc.lineAt(n),o=!t&&n==s&&function(t,e){if(/\(\)|\[\]|\{\}/.test(t.sliceDoc(e-1,e+1)))return{from:e,to:e}
let i,n=Za(t).resolveInner(e),s=n.childBefore(e),r=n.childAfter(e)
return s&&r&&s.to<=e&&r.from>=e&&(i=s.type.prop(wo.closedBy))&&i.indexOf(r.name)>-1&&t.doc.lineAt(s.to).from==t.doc.lineAt(r.from).from&&!/\S/.test(t.sliceDoc(s.to,r.from))?{from:s.to,to:r.from}:null}(e,n)
t&&(n=s=(s<=r.to?r:e.doc.lineAt(s)).to)
let a=new Ua(e,{simulateBreak:n,simulateDoubleBreak:!!o}),l=La(a,n)
for(null==l&&(l=Bt(/^\s*/.exec(e.doc.lineAt(n).text)[0],e.tabSize));s<r.to&&/\s/.test(r.text[s-r.from]);)s++
o?({from:n,to:s}=o):n>r.from&&n<r.from+100&&!/\S/.test(r.text.slice(0,n))&&(n=r.from)
let h=["",Da(e,l)]
return o&&h.push(Da(e,a.lineIndent(r.from,-1))),{changes:{from:n,to:s,insert:O.of(h)},range:C.cursor(n+1+h[1].length)}})
return i(e.update(n,{scrollIntoView:!0,userEvent:"input"})),!0}}function Fh(t,e){let i=-1
return t.changeByRange(n=>{let s=[]
for(let r=n.from;r<=n.to;){let o=t.doc.lineAt(r)
o.number>i&&(n.empty||n.to>o.from)&&(e(o,s,n),i=o.number),r=o.to+1}let r=t.changes(s)
return{changes:s,range:C.range(r.mapPos(n.anchor,1),r.mapPos(n.head,1))}})}const Kh=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:t=>oh(t,e=>dh(t.state,e,!hh(t))),shift:t=>{let e=!hh(t)
return xh(t,e,i=>dh(t.state,i,e))}},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:t=>oh(t,e=>dh(t.state,e,hh(t))),shift:t=>{let e=hh(t)
return xh(t,e,i=>dh(t.state,i,e))}},{key:"Alt-ArrowUp",run:({state:t,dispatch:e})=>Gh(t,e,!1)},{key:"Shift-Alt-ArrowUp",run:({state:t,dispatch:e})=>Ih(t,e,!1)},{key:"Alt-ArrowDown",run:({state:t,dispatch:e})=>Gh(t,e,!0)},{key:"Shift-Alt-ArrowDown",run:({state:t,dispatch:e})=>Ih(t,e,!0)},{key:"Mod-Alt-ArrowUp",run:t=>Wh(t,!1)},{key:"Mod-Alt-ArrowDown",run:t=>Wh(t,!0)},{key:"Escape",run:({state:t,dispatch:e})=>{let i=t.selection,n=null
return i.ranges.length>1?n=C.create([i.main]):i.main.empty||(n=C.create([C.cursor(i.main.head)])),!!n&&(e(rh(t,n)),!0)}},{key:"Mod-Enter",run:Hh(!0)},{key:"Alt-l",mac:"Ctrl-l",run:({state:t,dispatch:e})=>{let i=Vh(t).map(({from:e,to:i})=>C.undirectionalRange(e,Math.min(i+1,t.doc.length)))
return e(t.update({selection:C.create(i),userEvent:"select"})),!0}},{key:"Mod-i",run:({state:t,dispatch:e})=>{let i=sh(t.selection,e=>{let i=Za(t),n=i.resolveStack(e.from,1)
if(e.empty){let t=i.resolveStack(e.from,-1)
t.node.from>=n.node.from&&t.node.to<=n.node.to&&(n=t)}for(let t=n;t;t=t.next){let{node:i}=t
if((i.from<e.from&&i.to>=e.to||i.to>e.to&&i.from<=e.from)&&t.next)return C.undirectionalRange(i.from,i.to)}return e})
return!i.eq(t.selection)&&(e(rh(t,i)),!0)},preventDefault:!0},{key:"Mod-[",run:({state:t,dispatch:e})=>!t.readOnly&&(e(t.update(Fh(t,(e,i)=>{let n=/^\s*/.exec(e.text)[0]
if(!n)return
let s=Bt(n,t.tabSize),r=0,o=Da(t,Math.max(0,s-qa(t)))
for(;r<n.length&&r<o.length&&n.charCodeAt(r)==o.charCodeAt(r);)r++
i.push({from:e.from+r,to:e.from+n.length,insert:o.slice(r)})}),{userEvent:"delete.dedent"})),!0)},{key:"Mod-]",run:({state:t,dispatch:e})=>!t.readOnly&&(e(t.update(Fh(t,(e,i)=>{i.push({from:e.from,insert:t.facet(za)})}),{userEvent:"input.indent"})),!0)},{key:"Mod-Alt-\\",run:({state:t,dispatch:e})=>{if(t.readOnly)return!1
let i=Object.create(null),n=new Ua(t,{overrideIndentation:t=>{let e=i[t]
return e??-1}}),s=Fh(t,(e,s,r)=>{let o=La(n,e.from)
if(null==o)return;/\S/.test(e.text)||(o=0)
let a=/^\s*/.exec(e.text)[0],l=Da(t,o);(a!=l||r.from<e.from+a.length)&&(i[e.from]=o,s.push({from:e.from,to:e.from+a.length,insert:l}))})
return s.changes.empty||e(t.update(s,{userEvent:"indent"})),!0}},{key:"Shift-Mod-k",run:t=>{if(t.state.readOnly)return!1
let{state:e}=t,i=e.changes(Vh(e).map(({from:t,to:i})=>(t>0?t--:i<e.doc.length&&i++,{from:t,to:i}))),n=sh(e.selection,e=>{let i
if(t.lineWrapping){let n=t.lineBlockAt(e.head),s=t.coordsAtPos(e.head,e.assoc||1)
s&&(i=n.bottom+t.documentTop-s.bottom+t.defaultLineHeight/2)}return t.moveVertically(e,!0,i)}).map(i)
return t.dispatch({changes:i,selection:n,scrollIntoView:!0,userEvent:"delete.line"}),!0}},{key:"Shift-Mod-\\",run:({state:t,dispatch:e})=>function(t,e){let i=!1,n=sh(t.selection,e=>{let n=wl(t,e.head,-1)||wl(t,e.head,1)||e.head>0&&wl(t,e.head-1,1)||e.head<t.doc.length&&wl(t,e.head+1,-1)
if(!n||!n.end)return e
i=!0
let s=n.start.from==e.head?n.end.to:n.end.from
return C.cursor(s)})
return!!i&&(e(rh(t,n)),!0)}(t,e)},{key:"Mod-/",run:t=>{let{state:e}=t,i=e.doc.lineAt(e.selection.main.from),n=Ml(t.state,i.from)
return n.line?Xl(t):!!n.block&&Tl(t)}},{key:"Alt-A",mac:"Ctrl-A",run:Al},{key:"Ctrl-m",mac:"Shift-Alt-m",run:t=>(t.setTabFocusMode(),!0)}].concat([{key:"ArrowLeft",run:ch,shift:yh,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:t=>fh(t,!hh(t)),shift:t=>Ph(t,!hh(t)),preventDefault:!0},{mac:"Cmd-ArrowLeft",run:t=>oh(t,e=>Sh(t,e,!hh(t))),shift:t=>{let e=!hh(t)
return xh(t,e,i=>Sh(t,i,e))},preventDefault:!0},{key:"ArrowRight",run:Oh,shift:$h,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:t=>fh(t,hh(t)),shift:t=>Ph(t,hh(t)),preventDefault:!0},{mac:"Cmd-ArrowRight",run:t=>oh(t,e=>Sh(t,e,hh(t))),shift:t=>{let e=hh(t)
return xh(t,e,i=>Sh(t,i,e))},preventDefault:!0},{key:"ArrowUp",run:gh,shift:Xh,preventDefault:!0},{mac:"Cmd-ArrowUp",run:Ch,shift:jh},{mac:"Ctrl-ArrowUp",run:bh,shift:Mh},{key:"ArrowDown",run:mh,shift:Ah,preventDefault:!0},{mac:"Cmd-ArrowDown",run:_h,shift:Yh},{mac:"Ctrl-ArrowDown",run:vh,shift:Rh},{key:"PageUp",run:bh,shift:Mh},{key:"PageDown",run:vh,shift:Rh},{key:"Home",run:t=>oh(t,e=>Sh(t,e,!1)),shift:t=>xh(t,!1,e=>Sh(t,e,!1)),preventDefault:!0},{key:"Mod-Home",run:Ch,shift:jh},{key:"End",run:t=>oh(t,e=>Sh(t,e,!0)),shift:t=>xh(t,!0,e=>Sh(t,e,!0)),preventDefault:!0},{key:"Mod-End",run:_h,shift:Yh},{key:"Enter",run:Nh,shift:Nh},{key:"Mod-a",run:({state:t,dispatch:e})=>(e(t.update({selection:{anchor:0,head:t.doc.length},userEvent:"select"})),!0)},{key:"Backspace",run:Dh,shift:Dh,preventDefault:!0},{key:"Delete",run:Lh,preventDefault:!0},{key:"Mod-Backspace",mac:"Alt-Backspace",run:Bh,preventDefault:!0},{key:"Mod-Delete",mac:"Alt-Delete",run:t=>Uh(t,!0),preventDefault:!0},{mac:"Mod-Backspace",run:t=>Eh(t,e=>{let i=t.moveToLineBoundary(e,!1).head
return e.head>i?i:Math.max(0,e.head-1)}),preventDefault:!0},{mac:"Mod-Delete",run:t=>Eh(t,e=>{let i=t.moveToLineBoundary(e,!0).head
return e.head<i?i:Math.min(t.state.doc.length,e.head+1)}),preventDefault:!0}].concat([{key:"Ctrl-b",run:ch,shift:yh,preventDefault:!0},{key:"Ctrl-f",run:Oh,shift:$h},{key:"Ctrl-p",run:gh,shift:Xh},{key:"Ctrl-n",run:mh,shift:Ah},{key:"Ctrl-a",run:t=>oh(t,e=>t.moveToLineBoundary(e,!1,!1)),shift:t=>xh(t,!1,e=>C.cursor(t.lineBlockAt(e.head).from))},{key:"Ctrl-e",run:t=>oh(t,e=>t.moveToLineBoundary(e,!0,!1)),shift:t=>xh(t,!0,e=>C.cursor(t.lineBlockAt(e.head).to))},{key:"Ctrl-d",run:Lh},{key:"Ctrl-h",run:Dh},{key:"Ctrl-k",run:t=>Eh(t,e=>{let i=t.lineBlockAt(e.head).to
return e.head<i?i:Math.min(t.state.doc.length,e.head+1)})},{key:"Ctrl-Alt-h",run:Bh},{key:"Ctrl-o",run:({state:t,dispatch:e})=>{if(t.readOnly)return!1
let i=t.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:O.of(["",""])},range:C.cursor(t.from)}))
return e(t.update(i,{scrollIntoView:!0,userEvent:"input"})),!0}},{key:"Ctrl-t",run:({state:t,dispatch:e})=>{if(t.readOnly)return!1
let i=t.changeByRange(e=>{if(!e.empty||0==e.from||e.from==t.doc.length)return{range:e}
let i=e.from,n=t.doc.lineAt(i),s=i==n.from?i-1:v(n.text,i-n.from,!1)+n.from,r=i==n.to?i+1:v(n.text,i-n.from,!0)+n.from
return{changes:{from:s,to:r,insert:t.doc.slice(i,r).append(t.doc.slice(s,i))},range:C.cursor(r)}})
return!i.changes.empty&&(e(t.update(i,{scrollIntoView:!0,userEvent:"move.character"})),!0)}},{key:"Ctrl-v",run:vh}].map(t=>({mac:t.key,run:t.run,shift:t.shift}))))
class Jh{constructor(t,e,i,n,s,r,o,a,l,h=0,c){this.p=t,this.stack=e,this.state=i,this.reducePos=n,this.pos=s,this.score=r,this.buffer=o,this.bufferBase=a,this.curContext=l,this.lookAhead=h,this.parent=c}toString(){return`[${this.stack.filter((t,e)=>e%3==0).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`}static start(t,e,i=0){let n=t.parser.context
return new Jh(t,[],e,i,i,0,[],0,n?new tc(n,n.start):null,0,null)}get context(){return this.curContext?this.curContext.context:null}pushState(t,e){this.stack.push(this.state,e,this.bufferBase+this.buffer.length),this.state=t}reduce(t){var e
let i=t>>19,n=65535&t,{parser:s}=this.p,r=this.reducePos<this.pos-25&&this.setLookAhead(this.pos),o=s.dynamicPrecedence(n)
if(o&&(this.score+=o),0==i)return n<s.minRepeatTerm&&this.reducePos<this.pos&&(this.reducePos=this.pos),this.pushState(s.getGoto(this.state,n,!0),this.reducePos),n<s.minRepeatTerm&&this.storeNode(n,this.reducePos,this.reducePos,r?8:4,!0),void this.reduceContext(n,this.reducePos)
let a=this.stack.length-3*(i-1)-(262144&t?6:0),l=a?this.stack[a-2]:this.p.ranges[0].from
n<s.minRepeatTerm&&l==this.reducePos&&this.reducePos<this.pos&&(this.reducePos=this.pos)
let h=this.reducePos-l
h>=2e3&&!(null===(e=this.p.parser.nodeSet.types[n])||void 0===e?void 0:e.isAnonymous)&&(l==this.p.lastBigReductionStart?(this.p.bigReductionCount++,this.p.lastBigReductionSize=h):this.p.lastBigReductionSize<h&&(this.p.bigReductionCount=1,this.p.lastBigReductionStart=l,this.p.lastBigReductionSize=h))
let c=a?this.stack[a-1]:0,O=this.bufferBase+this.buffer.length-c
if(n<s.minRepeatTerm||131072&t){let t=s.stateFlag(this.state,1)?this.pos:this.reducePos
this.storeNode(n,l,t,O+4,!0)}if(262144&t)this.state=this.stack[a]
else{let t=this.stack[a-3]
this.state=s.getGoto(t,n,!0)}for(;this.stack.length>a;)this.stack.pop()
this.reduceContext(n,l)}storeNode(t,e,i,n=4,s=!1){if(0==t&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){let t=this.buffer.length
if(t>0&&0==this.buffer[t-4]&&this.buffer[t-1]>-1){if(e==i)return
if(this.buffer[t-2]>=e)return void(this.buffer[t-2]=i)}}if(s&&this.pos!=i){let s=this.buffer.length
if(s>0&&(0!=this.buffer[s-4]||this.buffer[s-1]<0)){let t=!1
for(let e=s;e>0&&this.buffer[e-2]>i;e-=4)if(this.buffer[e-1]>=0){t=!0
break}if(t)for(;s>0&&this.buffer[s-2]>i;)this.buffer[s]=this.buffer[s-4],this.buffer[s+1]=this.buffer[s-3],this.buffer[s+2]=this.buffer[s-2],this.buffer[s+3]=this.buffer[s-1],s-=4,n>4&&(n-=4)}this.buffer[s]=t,this.buffer[s+1]=e,this.buffer[s+2]=i,this.buffer[s+3]=n}else this.buffer.push(t,e,i,n)}shift(t,e,i,n){if(131072&t)this.pushState(65535&t,this.pos)
else if(262144&t)this.pos=n,this.shiftContext(e,i),e<=this.p.parser.maxNode&&this.buffer.push(e,i,n,4)
else{let s=t,{parser:r}=this.p
this.pos=n
let o=r.stateFlag(s,1)
!o&&(n>i||e<=r.maxNode)&&(this.reducePos=n),this.pushState(s,o?i:Math.min(i,this.reducePos)),this.shiftContext(e,i),e<=r.maxNode&&this.buffer.push(e,i,n,4)}}apply(t,e,i,n){65536&t?this.reduce(t):this.shift(t,e,i,n)}useNode(t,e){let i=this.p.reused.length-1;(i<0||this.p.reused[i]!=t)&&(this.p.reused.push(t),i++)
let n=this.pos
this.reducePos=this.pos=n+t.length,this.pushState(e,n),this.buffer.push(i,n,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,t,this,this.p.stream.reset(this.pos-t.length)))}split(){let t=this,e=t.buffer.length
for(e&&0==t.buffer[e-4]&&(e-=4);e>0&&t.buffer[e-2]>t.reducePos;)e-=4
let i=t.buffer.slice(e),n=t.bufferBase+e
for(;t&&n==t.bufferBase;)t=t.parent
return new Jh(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,i,n,this.curContext,this.lookAhead,t)}recoverByDelete(t,e){let i=t<=this.p.parser.maxNode
i&&this.storeNode(t,this.pos,e,4),this.storeNode(0,this.pos,e,i?8:4),this.pos=this.reducePos=e,this.score-=190}canShift(t){for(let e=new ec(this);;){let i=this.p.parser.stateSlot(e.state,4)||this.p.parser.hasAction(e.state,t)
if(0==i)return!1
if(!(65536&i))return!0
e.reduce(i)}}recoverByInsert(t){if(this.stack.length>=300)return[]
let e=this.p.parser.nextStates(this.state)
if(e.length>8||this.stack.length>=120){let i=[]
for(let n,s=0;s<e.length;s+=2)(n=e[s+1])!=this.state&&this.p.parser.hasAction(n,t)&&i.push(e[s],n)
if(this.stack.length<120)for(let t=0;i.length<8&&t<e.length;t+=2){let n=e[t+1]
i.some((t,e)=>1&e&&t==n)||i.push(e[t],n)}e=i}let i=[]
for(let t=0;t<e.length&&i.length<4;t+=2){let n=e[t+1]
if(n==this.state)continue
let s=this.split()
s.pushState(n,this.pos),s.storeNode(0,s.pos,s.pos,4,!0),s.shiftContext(e[t],this.pos),s.reducePos=this.pos,s.score-=200,i.push(s)}return i}forceReduce(){let{parser:t}=this.p,e=t.stateSlot(this.state,5)
if(!(65536&e))return!1
if(!t.validAction(this.state,e)){let i=e>>19,n=65535&e,s=this.stack.length-3*i
if(s<0||t.getGoto(this.stack[s],n,!1)<0){let t=this.findForcedReduction()
if(null==t)return!1
e=t}this.storeNode(0,this.pos,this.pos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(e),!0}findForcedReduction(){let{parser:t}=this.p,e=[],i=(n,s)=>{if(!e.includes(n))return e.push(n),t.allActions(n,e=>{if(393216&e);else if(65536&e){let i=(e>>19)-s
if(i>1){let n=65535&e,s=this.stack.length-3*i
if(s>=0&&t.getGoto(this.stack[s],n,!1)>=0)return i<<19|65536|n}}else{let t=i(e,s+1)
if(null!=t)return t}})}
return i(this.state,0)}forceAll(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0)
break}return this}get deadEnd(){if(3!=this.stack.length)return!1
let{parser:t}=this.p
return 65535==t.data[t.stateSlot(this.state,1)]&&!t.stateSlot(this.state,4)}restart(){this.storeNode(0,this.pos,this.pos,4,!0),this.state=this.stack[0],this.stack.length=0}sameState(t){if(this.state!=t.state||this.stack.length!=t.stack.length)return!1
for(let e=0;e<this.stack.length;e+=3)if(this.stack[e]!=t.stack[e])return!1
return!0}get parser(){return this.p.parser}dialectEnabled(t){return this.p.parser.dialect.flags[t]}shiftContext(t,e){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,t,this,this.p.stream.reset(e)))}reduceContext(t,e){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,t,this,this.p.stream.reset(e)))}emitContext(){let t=this.buffer.length-1;(t<0||-3!=this.buffer[t])&&this.buffer.push(this.curContext.hash,this.pos,this.pos,-3)}emitLookAhead(){let t=this.buffer.length-1;(t<0||-4!=this.buffer[t])&&this.buffer.push(this.lookAhead,this.pos,this.pos,-4)}updateContext(t){if(t!=this.curContext.context){let e=new tc(this.curContext.tracker,t)
e.hash!=this.curContext.hash&&this.emitContext(),this.curContext=e}}setLookAhead(t){return!(t<=this.lookAhead)&&(this.emitLookAhead(),this.lookAhead=t,!0)}close(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}}class tc{constructor(t,e){this.tracker=t,this.context=e,this.hash=t.strict?t.hash(e):0}}class ec{constructor(t){this.start=t,this.state=t.state,this.stack=t.stack,this.base=this.stack.length}reduce(t){let e=65535&t,i=t>>19
0==i?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=3*(i-1)
let n=this.start.p.parser.getGoto(this.stack[this.base-3],e,!0)
this.state=n}}class ic{constructor(t,e,i){this.stack=t,this.pos=e,this.index=i,this.buffer=t.buffer,0==this.index&&this.maybeNext()}static create(t,e=t.bufferBase+t.buffer.length){return new ic(t,e,e-t.bufferBase)}maybeNext(){let t=this.stack.parent
null!=t&&(this.index=this.stack.bufferBase-t.bufferBase,this.stack=t,this.buffer=t.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,0==this.index&&this.maybeNext()}fork(){return new ic(this.stack,this.pos,this.index)}}function nc(t,e=Uint16Array){if("string"!=typeof t)return t
let i=null
for(let n=0,s=0;n<t.length;){let r=0
for(;;){let e=t.charCodeAt(n++),i=!1
if(126==e){r=65535
break}e>=92&&e--,e>=34&&e--
let s=e-32
if(s>=46&&(s-=46,i=!0),r+=s,i)break
r*=46}i?i[s++]=r:i=new e(r)}return i}class sc{constructor(){this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0}}const rc=new sc
class oc{constructor(t,e){this.input=t,this.ranges=e,this.chunk="",this.chunkOff=0,this.chunk2="",this.chunk2Pos=0,this.next=-1,this.token=rc,this.rangeIndex=0,this.pos=this.chunkPos=e[0].from,this.range=e[0],this.end=e[e.length-1].to,this.readNext()}resolveOffset(t,e){let i=this.range,n=this.rangeIndex,s=this.pos+t
for(;s<i.from;){if(!n)return null
let t=this.ranges[--n]
s-=i.from-t.to,i=t}for(;e<0?s>i.to:s>=i.to;){if(n==this.ranges.length-1)return null
let t=this.ranges[++n]
s+=t.from-i.to,i=t}return s}clipPos(t){if(t>=this.range.from&&t<this.range.to)return t
for(let e of this.ranges)if(e.to>t)return Math.max(t,e.from)
return this.end}peek(t){let e,i,n=this.chunkOff+t
if(n>=0&&n<this.chunk.length)e=this.pos+t,i=this.chunk.charCodeAt(n)
else{let n=this.resolveOffset(t,1)
if(null==n)return-1
if(e=n,e>=this.chunk2Pos&&e<this.chunk2Pos+this.chunk2.length)i=this.chunk2.charCodeAt(e-this.chunk2Pos)
else{let t=this.rangeIndex,n=this.range
for(;n.to<=e;)n=this.ranges[++t]
this.chunk2=this.input.chunk(this.chunk2Pos=e),e+this.chunk2.length>n.to&&(this.chunk2=this.chunk2.slice(0,n.to-e)),i=this.chunk2.charCodeAt(0)}}return e>=this.token.lookAhead&&(this.token.lookAhead=e+1),i}acceptToken(t,e=0){let i=e?this.resolveOffset(e,-1):this.pos
if(null==i||i<this.token.start)throw new RangeError("Token end out of bounds")
this.token.value=t,this.token.end=i}acceptTokenTo(t,e){this.token.value=t,this.token.end=e}getChunk(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){let{chunk:t,chunkPos:e}=this
this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=t,this.chunk2Pos=e,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos
let t=this.input.chunk(this.pos),e=this.pos+t.length
this.chunk=e>this.range.to?t.slice(0,this.range.to-this.pos):t,this.chunkPos=this.pos,this.chunkOff=0}}readNext(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}advance(t=1){for(this.chunkOff+=t;this.pos+t>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone()
t-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=t,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}setDone(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk="",this.next=-1}reset(t,e){if(e?(this.token=e,e.start=t,e.lookAhead=t+1,e.value=e.extended=-1):this.token=rc,this.pos!=t){if(this.pos=t,t==this.end)return this.setDone(),this
for(;t<this.range.from;)this.range=this.ranges[--this.rangeIndex]
for(;t>=this.range.to;)this.range=this.ranges[++this.rangeIndex]
t>=this.chunkPos&&t<this.chunkPos+this.chunk.length?this.chunkOff=t-this.chunkPos:(this.chunk="",this.chunkOff=0),this.readNext()}return this}read(t,e){if(t>=this.chunkPos&&e<=this.chunkPos+this.chunk.length)return this.chunk.slice(t-this.chunkPos,e-this.chunkPos)
if(t>=this.chunk2Pos&&e<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(t-this.chunk2Pos,e-this.chunk2Pos)
if(t>=this.range.from&&e<=this.range.to)return this.input.read(t,e)
let i=""
for(let n of this.ranges){if(n.from>=e)break
n.to>t&&(i+=this.input.read(Math.max(n.from,t),Math.min(n.to,e)))}return i}}class ac{constructor(t,e){this.data=t,this.id=e}token(t,e){let{parser:i}=e.p
cc(this.data,t,e,this.id,i.data,i.tokenPrecTable)}}ac.prototype.contextual=ac.prototype.fallback=ac.prototype.extend=!1
class lc{constructor(t,e,i){this.precTable=e,this.elseToken=i,this.data="string"==typeof t?nc(t):t}token(t,e){let i=t.pos,n=0
for(;;){let i=t.next<0,s=t.resolveOffset(1,1)
if(cc(this.data,t,e,0,this.data,this.precTable),t.token.value>-1)break
if(null==this.elseToken)return
if(i||n++,null==s)break
t.reset(s,t.token)}n&&(t.reset(i,t.token),t.acceptToken(this.elseToken,n))}}lc.prototype.contextual=ac.prototype.fallback=ac.prototype.extend=!1
class hc{constructor(t,e={}){this.token=t,this.contextual=!!e.contextual,this.fallback=!!e.fallback,this.extend=!!e.extend}}function cc(t,e,i,n,s,r){let o=0,a=1<<n,{dialect:l}=i.p.parser
t:for(;0!=(a&t[o]);){let i=t[o+1]
for(let n=o+3;n<i;n+=2)if((t[n+1]&a)>0){let i=t[n]
if(l.allows(i)&&(-1==e.token.value||e.token.value==i||fc(i,e.token.value,s,r))){e.acceptToken(i)
break}}let n=e.next,h=0,c=t[o+2]
if(!(e.next<0&&c>h&&65535==t[i+3*c-3])){for(;h<c;){let s=h+c>>1,r=i+s+(s<<1),a=t[r],l=t[r+1]||65536
if(n<a)c=s
else{if(!(n>=l)){o=t[r+2],e.advance()
continue t}h=s+1}}break}o=t[i+3*c-1]}}function Oc(t,e,i){for(let n,s=e;65535!=(n=t[s]);s++)if(n==i)return s-e
return-1}function fc(t,e,i,n){let s=Oc(i,n,e)
return s<0||Oc(i,n,t)<s}const uc="undefined"!=typeof process&&process.env&&/\bparse\b/.test(process.env.LOG)
let dc=null
function pc(t,e,i){let n=t.cursor($o.IncludeAnonymous)
for(n.moveTo(e);;)if(!(i<0?n.childBefore(e):n.childAfter(e)))for(;;){if((i<0?n.to<e:n.from>e)&&!n.type.isError)return i<0?Math.max(0,Math.min(n.to-1,e-25)):Math.min(t.length,Math.max(n.from+1,e+25))
if(i<0?n.prevSibling():n.nextSibling())break
if(!n.parent())return i<0?0:t.length}}class gc{constructor(t,e){this.fragments=t,this.nodeSet=e,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let t=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++]
if(t){for(this.safeFrom=t.openStart?pc(t.tree,t.from+t.offset,1)-t.offset:t.from,this.safeTo=t.openEnd?pc(t.tree,t.to+t.offset,-1)-t.offset:t.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop()
this.trees.push(t.tree),this.start.push(-t.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(t){if(t<this.nextStart)return null
for(;this.fragment&&this.safeTo<=t;)this.nextFragment()
if(!this.fragment)return null
for(;;){let e=this.trees.length-1
if(e<0)return this.nextFragment(),null
let i=this.trees[e],n=this.index[e]
if(n==i.children.length){this.trees.pop(),this.start.pop(),this.index.pop()
continue}let s=i.children[n],r=this.start[e]+i.positions[n]
if(r>t)return this.nextStart=r,null
if(s instanceof Po){if(r==t){if(r<this.safeFrom)return null
let t=r+s.length
if(t<=this.safeTo){let e=s.prop(wo.lookAhead)
if(!e||t+e<this.fragment.to)return s}}this.index[e]++,r+s.length>=Math.max(this.safeFrom,t)&&(this.trees.push(s),this.start.push(r),this.index.push(0))}else this.index[e]++,this.nextStart=r+s.length}}}class mc{constructor(t,e){this.stream=e,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=t.tokenizers.map(t=>new sc)}getActions(t){let e=0,i=null,{parser:n}=t.p,{tokenizers:s}=n,r=n.stateSlot(t.state,3),o=t.curContext?t.curContext.hash:0,a=0
for(let n=0;n<s.length;n++){if(!(1<<n&r))continue
let l=s[n],h=this.tokens[n]
if((!i||l.fallback)&&((l.contextual||h.start!=t.pos||h.mask!=r||h.context!=o)&&(this.updateCachedToken(h,l,t),h.mask=r,h.context=o),h.lookAhead>h.end+25&&(a=Math.max(h.lookAhead,a)),0!=h.value)){let n=e
if(h.extended>-1&&(e=this.addActions(t,h.extended,h.end,e)),e=this.addActions(t,h.value,h.end,e),!l.extend&&(i=h,e>n))break}}for(;this.actions.length>e;)this.actions.pop()
return a&&t.setLookAhead(a),i||t.pos!=this.stream.end||(i=new sc,i.value=t.p.parser.eofTerm,i.start=i.end=t.pos,e=this.addActions(t,i.value,i.end,e)),this.mainToken=i,this.actions}getMainToken(t){if(this.mainToken)return this.mainToken
let e=new sc,{pos:i,p:n}=t
return e.start=i,e.end=Math.min(i+1,n.stream.end),e.value=i==n.stream.end?n.parser.eofTerm:0,e}updateCachedToken(t,e,i){let n=this.stream.clipPos(i.pos)
if(e.token(this.stream.reset(n,t),i),t.value>-1){let{parser:e}=i.p
for(let n=0;n<e.specialized.length;n++)if(e.specialized[n]==t.value){let s=e.specializers[n](this.stream.read(t.start,t.end),i)
if(s>=0&&i.p.parser.dialect.allows(s>>1)){1&s?t.extended=s>>1:t.value=s>>1
break}}}else t.value=0,t.end=this.stream.clipPos(n+1)}putAction(t,e,i,n){for(let e=0;e<n;e+=3)if(this.actions[e]==t)return n
return this.actions[n++]=t,this.actions[n++]=e,this.actions[n++]=i,n}addActions(t,e,i,n){let{state:s}=t,{parser:r}=t.p,{data:o}=r
for(let t=0;t<2;t++)for(let a=r.stateSlot(s,t?2:1);;a+=3){if(65535==o[a]){if(1!=o[a+1]){0==n&&2==o[a+1]&&(n=this.putAction(xc(o,a+2),e,i,n))
break}a=xc(o,a+2)}o[a]==e&&(n=this.putAction(xc(o,a+1),e,i,n))}return n}}class Qc{constructor(t,e,i,n){this.parser=t,this.input=e,this.ranges=n,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.lastBigReductionStart=-1,this.lastBigReductionSize=0,this.bigReductionCount=0,this.stream=new oc(e,n),this.tokens=new mc(t,this.stream),this.topTerm=t.top[1]
let{from:s}=n[0]
this.stacks=[Jh.start(this,t.top[0],s)],this.fragments=i.length&&this.stream.end-s>4*t.bufferLength?new gc(i,t.nodeSet):null}get parsedPos(){return this.minStackPos}advance(){let t,e,i=this.stacks,n=this.minStackPos,s=this.stacks=[]
if(this.bigReductionCount>300&&1==i.length){let[t]=i
for(;t.forceReduce()&&t.stack.length&&t.stack[t.stack.length-2]>=this.lastBigReductionStart;);this.bigReductionCount=this.lastBigReductionSize=0}for(let r=0;r<i.length;r++){let o=i[r]
for(;;){if(this.tokens.mainToken=null,o.pos>n)s.push(o)
else{if(this.advanceStack(o,s,i))continue
{t||(t=[],e=[]),t.push(o)
let i=this.tokens.getMainToken(o)
e.push(i.value,i.end)}}break}}if(!s.length){let e=t&&function(t){let e=null
for(let i of t){let t=i.p.stoppedAt;(i.pos==i.p.stream.end||null!=t&&i.pos>t)&&i.p.parser.stateFlag(i.state,2)&&(!e||e.score<i.score)&&(e=i)}return e}(t)
if(e)return uc&&console.log("Finish with "+this.stackID(e)),this.stackToTree(e)
if(this.parser.strict)throw uc&&t&&console.log("Stuck with token "+(this.tokens.mainToken?this.parser.getName(this.tokens.mainToken.value):"none")),new SyntaxError("No parse at "+n)
this.recovering||(this.recovering=5)}if(this.recovering&&t){let i=null!=this.stoppedAt&&t[0].pos>this.stoppedAt?t[0]:this.runRecovery(t,e,s)
if(i)return uc&&console.log("Force-finish "+this.stackID(i)),this.stackToTree(i.forceAll())}if(this.recovering){let t=1==this.recovering?1:3*this.recovering
if(s.length>t)for(s.sort((t,e)=>e.score-t.score);s.length>t;)s.pop()
s.some(t=>t.reducePos>n)&&this.recovering--}else if(s.length>1){t:for(let t=0;t<s.length-1;t++){let e=s[t]
for(let i=t+1;i<s.length;i++){let n=s[i]
if(e.sameState(n)||e.buffer.length>500&&n.buffer.length>500){if(!((e.score-n.score||e.buffer.length-n.buffer.length)>0)){s.splice(t--,1)
continue t}s.splice(i--,1)}}}s.length>12&&(s.sort((t,e)=>e.score-t.score),s.splice(12,s.length-12))}this.minStackPos=s[0].pos
for(let t=1;t<s.length;t++)s[t].pos<this.minStackPos&&(this.minStackPos=s[t].pos)
return null}stopAt(t){if(null!=this.stoppedAt&&this.stoppedAt<t)throw new RangeError("Can't move stoppedAt forward")
this.stoppedAt=t}advanceStack(t,e,i){let n=t.pos,{parser:s}=this,r=uc?this.stackID(t)+" -> ":""
if(null!=this.stoppedAt&&n>this.stoppedAt)return t.forceReduce()?t:null
if(this.fragments){let e=t.curContext&&t.curContext.tracker.strict,i=e?t.curContext.hash:0
for(let o=this.fragments.nodeAt(n);o;){let n=this.parser.nodeSet.types[o.type.id]==o.type?s.getGoto(t.state,o.type.id):-1
if(n>-1&&o.length&&(!e||(o.prop(wo.contextHash)||0)==i))return t.useNode(o,n),uc&&console.log(r+this.stackID(t)+` (via reuse of ${s.getName(o.type.id)})`),!0
if(!(o instanceof Po)||0==o.children.length||o.positions[0]>0)break
let a=o.children[0]
if(!(a instanceof Po&&0==o.positions[0]))break
o=a}}let o=s.stateSlot(t.state,4)
if(o>0)return t.reduce(o),uc&&console.log(r+this.stackID(t)+` (via always-reduce ${s.getName(65535&o)})`),!0
if(t.stack.length>=8400)for(;t.stack.length>6e3&&t.forceReduce(););let a=this.tokens.getActions(t)
for(let o=0;o<a.length;){let l=a[o++],h=a[o++],c=a[o++],O=o==a.length||!i,f=O?t:t.split(),u=this.tokens.mainToken
if(f.apply(l,h,u?u.start:f.pos,c),uc&&console.log(r+this.stackID(f)+` (via ${65536&l?`reduce of ${s.getName(65535&l)}`:"shift"} for ${s.getName(h)} @ ${n}${f==t?"":", split"})`),O)return!0
f.pos>n?e.push(f):i.push(f)}return!1}advanceFully(t,e){let i=t.pos
for(;;){if(!this.advanceStack(t,null,null))return!1
if(t.pos>i)return wc(t,e),!0}}runRecovery(t,e,i){let n=null,s=!1
for(let r=0;r<t.length;r++){let o=t[r],a=e[r<<1],l=e[1+(r<<1)],h=uc?this.stackID(o)+" -> ":""
if(o.deadEnd){if(s)continue
if(s=!0,o.restart(),uc&&console.log(h+this.stackID(o)+" (restarted)"),this.advanceFully(o,i))continue}let c=o.split(),O=h
for(let t=0;t<10&&c.forceReduce();t++){if(uc&&console.log(O+this.stackID(c)+" (via force-reduce)"),this.advanceFully(c,i))break
uc&&(O=this.stackID(c)+" -> ")}for(let t of o.recoverByInsert(a))uc&&console.log(h+this.stackID(t)+" (via recover-insert)"),this.advanceFully(t,i)
this.stream.end>o.pos?(l==o.pos&&(l++,a=0),o.recoverByDelete(a,l),uc&&console.log(h+this.stackID(o)+` (via recover-delete ${this.parser.getName(a)})`),wc(o,i)):(!n||n.score<c.score)&&(n=c)}return n}stackToTree(t){return t.close(),Po.build({buffer:ic.create(t),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:t.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}stackID(t){let e=(dc||(dc=new WeakMap)).get(t)
return e||dc.set(t,e=String.fromCodePoint(this.nextStackID++)),e+t}}function wc(t,e){for(let i=0;i<e.length;i++){let n=e[i]
if(n.pos==t.pos&&n.sameState(t))return void(e[i].score<t.score&&(e[i]=t))}e.push(t)}class bc{constructor(t,e,i){this.source=t,this.flags=e,this.disabled=i}allows(t){return!this.disabled||0==this.disabled[t]}}const vc=t=>t
class Sc extends Go{constructor(t){if(super(),this.wrappers=[],14!=t.version)throw new RangeError(`Parser version (${t.version}) doesn't match runtime version (14)`)
let e=t.nodeNames.split(" ")
this.minRepeatTerm=e.length
for(let i=0;i<t.repeatNodeCount;i++)e.push("")
let i=Object.keys(t.topRules).map(e=>t.topRules[e][1]),n=[]
for(let t=0;t<e.length;t++)n.push([])
function s(t,e,i){n[t].push([e,e.deserialize(String(i))])}if(t.nodeProps)for(let e of t.nodeProps){let t=e[0]
"string"==typeof t&&(t=wo[t])
for(let i=1;i<e.length;){let n=e[i++]
if(n>=0)s(n,t,e[i++])
else{let r=e[i+-n]
for(let o=-n;o>0;o--)s(e[i++],t,r)
i++}}}this.nodeSet=new xo(e.map((e,s)=>So.define({name:s>=this.minRepeatTerm?void 0:e,id:s,props:n[s],top:i.indexOf(s)>-1,error:0==s,skipped:t.skippedNodes&&t.skippedNodes.indexOf(s)>-1}))),t.propSources&&(this.nodeSet=this.nodeSet.extend(...t.propSources)),this.strict=!1,this.bufferLength=go
let r=nc(t.tokenData)
this.context=t.context,this.specializerSpecs=t.specialized||[],this.specialized=new Uint16Array(this.specializerSpecs.length)
for(let t=0;t<this.specializerSpecs.length;t++)this.specialized[t]=this.specializerSpecs[t].term
this.specializers=this.specializerSpecs.map(kc),this.states=nc(t.states,Uint32Array),this.data=nc(t.stateData),this.goto=nc(t.goto),this.maxTerm=t.maxTerm,this.tokenizers=t.tokenizers.map(t=>"number"==typeof t?new ac(r,t):t),this.topRules=t.topRules,this.dialects=t.dialects||{},this.dynamicPrecedences=t.dynamicPrecedences||null,this.tokenPrecTable=t.tokenPrec,this.termNames=t.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}createParse(t,e,i){let n=new Qc(this,t,e,i)
for(let s of this.wrappers)n=s(n,t,e,i)
return n}getGoto(t,e,i=!1){let n=this.goto
if(e>=n[0])return-1
for(let s=n[e+1];;){let e=n[s++],r=1&e,o=n[s++]
if(r&&i)return o
for(let i=s+(e>>1);s<i;s++)if(n[s]==t)return o
if(r)return-1}}hasAction(t,e){let i=this.data
for(let n=0;n<2;n++)for(let s,r=this.stateSlot(t,n?2:1);;r+=3){if(65535==(s=i[r])){if(1!=i[r+1]){if(2==i[r+1])return xc(i,r+2)
break}s=i[r=xc(i,r+2)]}if(s==e||0==s)return xc(i,r+1)}return 0}stateSlot(t,e){return this.states[6*t+e]}stateFlag(t,e){return(this.stateSlot(t,0)&e)>0}validAction(t,e){return!!this.allActions(t,t=>t==e||null)}allActions(t,e){let i=this.stateSlot(t,4),n=i?e(i):void 0
for(let i=this.stateSlot(t,1);null==n;i+=3){if(65535==this.data[i]){if(1!=this.data[i+1])break
i=xc(this.data,i+2)}n=e(xc(this.data,i+1))}return n}nextStates(t){let e=[]
for(let i=this.stateSlot(t,1);;i+=3){if(65535==this.data[i]){if(1!=this.data[i+1])break
i=xc(this.data,i+2)}if(!(1&this.data[i+2])){let t=this.data[i+1]
e.some((e,i)=>1&i&&e==t)||e.push(this.data[i],t)}}return e}configure(t){let e=Object.assign(Object.create(Sc.prototype),this)
if(t.props&&(e.nodeSet=this.nodeSet.extend(...t.props)),t.top){let i=this.topRules[t.top]
if(!i)throw new RangeError(`Invalid top rule name ${t.top}`)
e.top=i}return t.tokenizers&&(e.tokenizers=this.tokenizers.map(e=>{let i=t.tokenizers.find(t=>t.from==e)
return i?i.to:e})),t.specializers&&(e.specializers=this.specializers.slice(),e.specializerSpecs=this.specializerSpecs.map((i,n)=>{let s=t.specializers.find(t=>t.from==i.external)
if(!s)return i
let r=Object.assign(Object.assign({},i),{external:s.to})
return e.specializers[n]=kc(r),r})),t.contextTracker&&(e.context=t.contextTracker),t.dialect&&(e.dialect=this.parseDialect(t.dialect)),null!=t.strict&&(e.strict=t.strict),t.wrap&&(e.wrappers=e.wrappers.concat(t.wrap)),null!=t.bufferLength&&(e.bufferLength=t.bufferLength),e}hasWrappers(){return this.wrappers.length>0}getName(t){return this.termNames?this.termNames[t]:String(t<=this.maxNode&&this.nodeSet.types[t].name||t)}get eofTerm(){return this.maxNode+1}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(t){let e=this.dynamicPrecedences
return null==e?0:e[t]||0}parseDialect(t){let e=Object.keys(this.dialects),i=e.map(()=>!1)
if(t)for(let n of t.split(" ")){let t=e.indexOf(n)
t>=0&&(i[t]=!0)}let n=null
for(let t=0;t<e.length;t++)if(!i[t])for(let i,s=this.dialects[e[t]];65535!=(i=this.data[s++]);)(n||(n=new Uint8Array(this.maxTerm+1)))[i]=1
return new bc(t,i,n)}static deserialize(t){return new Sc(t)}}function xc(t,e){return t[e]|t[e+1]<<16}function kc(t){if(t.external){let e=t.extend?1:0
return(i,n)=>t.external(i,n)<<1|e}return t.get}const yc=[9,10,11,12,13,32,133,160,5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8232,8233,8239,8287,12288],$c=new class{constructor(t){this.start=t.start,this.shift=t.shift||vc,this.reduce=t.reduce||vc,this.reuse=t.reuse||vc,this.hash=t.hash||(()=>0),this.strict=!1!==t.strict}}({start:!1,shift:(t,e)=>5==e||6==e||321==e?t:322==e,strict:!1}),Pc=new hc((t,e)=>{let{next:i}=t;(125==i||-1==i||e.context)&&t.acceptToken(319)},{contextual:!0,fallback:!0}),Zc=new hc((t,e)=>{let i,{next:n}=t
yc.indexOf(n)>-1||(47!=n||47!=(i=t.peek(1))&&42!=i)&&(125==n||59==n||-1==n||e.context||t.acceptToken(317))},{contextual:!0}),Xc=new hc((t,e)=>{91!=t.next||e.context||t.acceptToken(318)},{contextual:!0}),Ac=new hc((t,e)=>{let{next:i}=t
if(43==i||45==i){if(t.advance(),i==t.next){t.advance()
let i=!e.context&&e.canShift(1)
t.acceptToken(i?1:2)}}else 63==i&&46==t.peek(1)&&(t.advance(),t.advance(),(t.next<48||t.next>57)&&t.acceptToken(3))},{contextual:!0})
function Tc(t,e){return t>=65&&t<=90||t>=97&&t<=122||95==t||t>=192||!e&&t>=48&&t<=57}const Mc=new hc((t,e)=>{if(60!=t.next||!e.dialectEnabled(0))return
if(t.advance(),47==t.next)return
let i=0
for(;yc.indexOf(t.next)>-1;)t.advance(),i++
if(Tc(t.next,!0)){for(t.advance(),i++;Tc(t.next,!1);)t.advance(),i++
for(;yc.indexOf(t.next)>-1;)t.advance(),i++
if(44==t.next)return
for(let e=0;;e++){if(7==e){if(!Tc(t.next,!0))return
break}if(t.next!="extends".charCodeAt(e))break
t.advance(),i++}}t.acceptToken(4,-i)}),Rc=Jo({"get set async static":ba.modifier,"for while do if else switch try catch finally return throw break continue default case defer":ba.controlKeyword,"in of await yield void typeof delete instanceof as satisfies":ba.operatorKeyword,"let var const using function class extends":ba.definitionKeyword,"import export from":ba.moduleKeyword,"with debugger new":ba.keyword,TemplateString:ba.special(ba.string),super:ba.atom,BooleanLiteral:ba.bool,this:ba.self,null:ba.null,Star:ba.modifier,VariableName:ba.variableName,"CallExpression/VariableName TaggedTemplateExpression/VariableName":ba.function(ba.variableName),VariableDefinition:ba.definition(ba.variableName),Label:ba.labelName,PropertyName:ba.propertyName,PrivatePropertyName:ba.special(ba.propertyName),"CallExpression/MemberExpression/PropertyName":ba.function(ba.propertyName),"FunctionDeclaration/VariableDefinition":ba.function(ba.definition(ba.variableName)),"ClassDeclaration/VariableDefinition":ba.definition(ba.className),"NewExpression/VariableName":ba.className,PropertyDefinition:ba.definition(ba.propertyName),PrivatePropertyDefinition:ba.definition(ba.special(ba.propertyName)),UpdateOp:ba.updateOperator,"LineComment Hashbang":ba.lineComment,BlockComment:ba.blockComment,Number:ba.number,String:ba.string,Escape:ba.escape,ArithOp:ba.arithmeticOperator,LogicOp:ba.logicOperator,BitOp:ba.bitwiseOperator,CompareOp:ba.compareOperator,RegExp:ba.regexp,Equals:ba.definitionOperator,Arrow:ba.function(ba.punctuation),": Spread":ba.punctuation,"( )":ba.paren,"[ ]":ba.squareBracket,"{ }":ba.brace,"InterpolationStart InterpolationEnd":ba.special(ba.brace),".":ba.derefOperator,", ;":ba.separator,"@":ba.meta,TypeName:ba.typeName,TypeDefinition:ba.definition(ba.typeName),"type enum interface implements namespace module declare":ba.definitionKeyword,"abstract global Privacy readonly override":ba.modifier,"is keyof unique infer asserts":ba.operatorKeyword,JSXAttributeValue:ba.attributeValue,JSXText:ba.content,"JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag":ba.angleBracket,"JSXIdentifier JSXNameSpacedName":ba.tagName,"JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName":ba.attributeName,"JSXBuiltin/JSXIdentifier":ba.standard(ba.tagName)}),Cc={__proto__:null,export:20,as:25,from:33,default:36,async:41,function:42,in:52,out:55,const:56,extends:60,this:64,true:72,false:72,null:84,void:88,typeof:92,super:108,new:142,delete:154,yield:163,await:167,class:172,public:237,private:237,protected:237,readonly:239,instanceof:258,satisfies:261,import:294,keyof:351,unique:355,infer:361,asserts:397,is:399,abstract:419,implements:421,type:423,let:426,var:428,using:431,interface:437,enum:441,namespace:447,module:449,declare:453,global:457,defer:473,for:478,of:487,while:490,with:494,do:498,if:502,else:504,switch:508,case:514,try:520,catch:524,finally:528,return:532,throw:536,break:540,continue:544,debugger:548},_c={__proto__:null,async:129,get:131,set:133,declare:195,public:197,private:197,protected:197,static:199,abstract:201,override:203,readonly:209,accessor:211,new:403},jc={__proto__:null,"<":193},Yc=Sc.deserialize({version:14,states:"$GSQ%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Im'#ImO1XQ`O'#GtO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JsO6[Q!0MxO'#JtO6uQ`O'#F^O6zQ,UO'#FuOOQ!0Lf'#Fg'#FgO7VO7dO'#FgO9XQMhO'#F}O9`Q`O'#F|OOQ!0Lf'#Jt'#JtOOQ!0Lb'#Js'#JsO9eQ`O'#GxOOQ['#K`'#K`O9pQ`O'#IZO9uQ!0LrO'#I[OOQ['#Ja'#JaOOQ['#I`'#I`Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GtO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EzO;hQMhO'#FfO;xQ`O'#GtOOQO'#Ka'#KaO;}Q`O'#KaO<]Q`O'#G|O<]Q`O'#G}O<]Q`O'#HPO9kQ`O'#HSO=SQ`O'#HVO>kQ`O'#CeO>{Q`O'#HdO?TQ`O'#HjO?TQ`O'#HlO`QlO'#HnO?TQ`O'#HpO?TQ`O'#HsO?YQ`O'#HyO?_Q!0LsO'#IPO%[QlO'#IRO?jQ!0LsO'#ITO?uQ!0LsO'#IVO9uQ!0LrO'#IXO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FfOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jw'#JwO%[QlO'#JwOOQO'#Jz'#JzOOQO'#Ii'#IiOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#KO'#KOOC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jy'#JyODlQpO'#JzOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CEO)CEOOOOO'#Ia'#IaOFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ib'#IbOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Id'#IdOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IeOGyQ`O'#JuOIxQ!fO'#JuO+}QlO'#JuOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KUOKPQ`O'#KTOKPQ`O'#KTOKXQ`O,5;^OK^Q`O'#KSOOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KRONtQ`O'#KQO9eQ`O'#KQO! YQ`O'#KQO! bQ`O,5;]O! gQ`O'#KQO!#lQ!fO'#JtOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#J{'#J{OOQO-E<k-E<kO9kQ`O,5=`O!$rQ`O,5=`O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;eO!(|QpO,5;eO%[QlO,5;eOOQ['#FU'#FUOOQ['#FW'#FWO%[QlO,5;fO%[QlO,5;fO%[QlO,5;fO%[QlO,5;fO%[QlO,5;fO%[QlO,5;fO%[QlO,5;fO%[QlO,5;fO%[QlO,5;fO%[QlO,5;fOOQ['#F['#F[O!)[QlO,5;uOOQ!0Lf,5;z,5;zOOQ!0Lf,5;{,5;{OOQ!0Lf,5;},5;}O%[QlO'#IqO!+_Q!0LrO,5<jO%[QlO,5;fO!&zQMhO,5;fO!+|QMhO,5;fO!-nQMhO'#E^O%[QlO,5;xOOQ!0Lf,5;|,5;|O!-uQ,UO'#FkO!.rQ,UO'#KYO!.^Q,UO'#KYO!.yQ,UO'#KYOOQO'#KY'#KYO!/_Q,UO,5<TOOOW,5<a,5<aO!/pQlO'#FwOOOW'#Ip'#IpO7VO7dO,5<RO!/wQ,UO'#FyOOQ!0Lf,5<R,5<RO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<fO!1pQ`O,5<iO!3YQ(CWO'#GYO!3jQ`O'#GZO!3oQ`O'#GZO!5_Q(CWO'#G_O!6dQpO'#GcOOQO'#Go'#GoO!,TQMhO'#GnOOQO'#Gq'#GqO!,TQMhO'#GpO!7VQ$IUO'#JmOOQ!0Lh'#Jm'#JmO!7aQ`O'#JlO!7oQ`O'#JkO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<fO1SQ`O'#DZO!,TQMhO'#GQO!,TQMhO'#GSO!8gQ`O'#GUO!8lQ`O'#GVO!3oQ`O'#G]O!,TQMhO'#GbO<]Q`O'#JlO!8qQ`O'#EqO!9`Q`O,5<hOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KS'#KSO!:iQ!0LrO'#KbO9uQ!0LrO,5=dO`QlO,5>uOOQ['#Ji'#JiOOQ[,5>v,5>vOOQ[-E<^-E<^O!<hQ!0MxO,5:bO!=[QpO,5:`O!?WQ!0MxO,5:jO%[QlO,5:jO!AnQ!0MxO,5:lOOQO,5@{,5@{O!B_QMhO,5=`O!BmQ!0LrO'#JjO9`Q`O'#JjO!COQ!0LrO,59ZO!CZQpO,59ZO!CcQMhO,59ZO:dQMhO,59ZO!CnQ`O,5;ZO!CvQ`O'#HcO!D[Q`O'#KeO%[QlO,5<OO!=[QpO,5<QO!DdQ`O,5={O!DiQ`O,5={O!DnQ`O,5={O!D|Q`O,5={O9uQ!0LrO,5={O<]Q`O,5=kOOQO'#Cy'#CyO!ETQpO,5=hO!E]QMhO,5=iO!EhQ`O,5=kO!EmQ!bO,5=nO!EuQ`O'#KaO?YQ`O'#HXO9kQ`O'#HZO!EzQ`O'#HZO:dQMhO'#H]O!FPQ`O'#H]OOQ[,5=q,5=qO!FUQ`O'#H^O!FgQ`O'#CoO!FlQ`O,59PO!FvQ`O,59PO!H{QlO,59POOQ[,59P,59PO!I]Q!0LrO,59PO%[QlO,59PO!KhQlO'#HfOOQ['#Hg'#HgOOQ['#Hh'#HhO`QlO,5>OO!LOQ`O,5>OO`QlO,5>UO`QlO,5>WO!LTQ`O,5>YO`QlO,5>[O!LYQ`O,5>_O!L_QlO,5>eOOQ[,5>k,5>kO%[QlO,5>kO9uQ!0LrO,5>mOOQ[,5>o,5>oO#!iQ`O,5>oOOQ[,5>q,5>qO#!iQ`O,5>qOOQ[,5>s,5>sO##VQpO'#D_O%[QlO'#JwO##aQpO'#JwO##{QpO'#DmO#$^QpO'#DmO#&oQlO'#DmO#&vQ`O'#JvO#'OQ`O,5:WO#'TQ`O'#EtO#'`Q`O'#EtO#'eQ`O'#KVO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CZQpO,5;YO!CcQMhO,5;YO:dQMhO,5;YO#(`Q`O,5@cO#(eQ07dO,5:sOOQO-E<g-E<gO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!COQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CZQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I_'#I_P#+RO&2DjO,58|POOO,58|,58|OOOO-E<_-E<_OOQ!0Lh1G.p1G.pOOOO-E<`-E<`OOOO,59},59}O#+^Q!bO,59}OOOO-E<b-E<bOOQ!0Lf1G/g1G/gO#+cQ!fO,5?PO+}QlO,5?POOQO,5?V,5?VO#+mQlO'#IeOOQO-E<c-E<cO#+zQ`O,5@aO#,SQ!fO,5@aO#,ZQ`O,5@oOOQ!0Lf1G/m1G/mO%[QlO,5@pO#,cQ`O'#IkOOQO-E<i-E<iO#,ZQ`O,5@oOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@mO#,wQ!0LrO,5@mO#-YQ!0LrO,5@mO#-aQ`O,5@lO9eQ`O,5@lO#-iQ`O,5@lO#-wQ`O'#InO#-aQ`O,5@lOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2zO9kQ`O1G2zOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GX'#GXO#0rQ!0MzO'#JmO!$wQlO1G0uO#2}Q!fO'#JxO%[QlO'#JxO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1P1G1PO%[QlO1G1POOQ!0Lf1G1g1G1gO#3^Q`O1G1PO#5rQ!0MxO1G1QO#5yQ!0MxO1G1QO#8aQ!0MxO1G1QO#8hQ!0MxO1G1QO#;OQ!0MxO1G1QO#=fQ!0MxO1G1QO#=mQ!0MxO1G1QO#=tQ!0MxO1G1QO#@[Q!0MxO1G1QO#@cQ!0MxO1G1QO#BpQ?MtO'#CiO#DkQ?MtO1G1aO#DrQ?MtO'#JtO#EVQ!0MxO,5?]OOQ!0Lb-E<o-E<oO#GdQ!0MxO1G1QO#HaQ!0MzO1G1QOOQ!0Lf1G1Q1G1QO#IdQMjO'#J}O#InQ`O,5:xO#IsQ!0MxO1G1dO#JgQ,UO,5<XO#JoQ,UO,5<YO#JwQ,UO'#FpO#K`Q`O'#FoOOQO'#KZ'#KZOOQO'#Io'#IoO#KeQ,UO1G1oOOQ!0Lf1G1o1G1oOOOW1G1z1G1zO#KvQ?MtO'#JsO#LQQ`O,5<cO!)[QlO,5<cOOOW-E<n-E<nOOQ!0Lf1G1m1G1mO#LVQpO'#KYOOQ!0Lf,5<e,5<eO#L_QpO,5<eO#LdQMhO'#DTOOOO'#Ic'#IcO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2QO!8lQ`O'#IsO#LvQ`O,5<{OOQ!0Lh,5<x,5<xO!,TQMhO'#IvO#MdQMjO,5=YO!,TQMhO'#IxO#NVQMjO,5=[O!&zQMhO,5=^OOQO1G2T1G2TO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GcO$!dQ!dO,5<tO$!kQ`O'#K]O9eQ`O'#K]O$!yQ`O,5<vO$#aQ!dO'#C{O!,TQMhO,5<uO$#kQ`O'#G[O$$PQ`O,5<uO$$UQ!dO'#GXO$$cQ!dO'#K^O$$mQ`O'#K^O!&zQMhO'#K^O$$rQ`O,5<yO$$wQlO'#JwO$%RQpO'#GdO#$^QpO'#GdO$%dQ`O'#GhO!3oQ`O'#GlO$%iQ!0LrO'#IuO$%tQpO,5<}OOQ!0Lp,5<},5<}O$%{QpO'#GdO$&YQpO'#GeO$&kQpO'#GeO$&pQMjO,5=YO$'QQMjO,5=[OOQ!0Lh,5=_,5=_O!,TQMhO,5@WO!,TQMhO,5@WO$'bQ`O'#IzO$'vQ`O,5@VO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@WO$)TQ$IYO,59uOOQ!0Lh'#Jq'#JqO$)vQMjO,5<lO$*iQMjO,5<nO@zQ`O,5<pOOQ!0Lh,5<q,5<qO$*sQ`O,5<wO$*xQMjO,5<|O$+YQ`O'#KQO!$wQlO1G2SO$+_Q`O1G2SO9eQ`O'#KTO$+dQ`O'#D_O9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I|O$+rQ!0LrO,5@|OOQ[1G3O1G3OOOQ[1G4a1G4aOOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-tQ!0MxO1G0UOOQ[1G2z1G2zO!&zQMhO1G2zO%[QlO1G2zO#.tQ`O1G2zO$/xQMhO'#EkOOQ!0Lb,5@U,5@UO$0VQ!0LrO,5@UOOQ[1G.u1G.uO!COQ!0LrO1G.uO!CZQpO1G.uO!CcQMhO1G.uO$0hQ`O1G0uO$0mQ`O'#CiO$0xQ`O'#KfO$1QQ`O,5=}O$1VQ`O'#KfO$1[Q`O'#KfO$1jQ`O'#JSO$1xQ`O,5APO$2QQ!fO1G1jOOQ!0Lf1G1l1G1lO9kQ`O1G3gO@zQ`O1G3gO$2XQ`O1G3gO$2^Q`O1G3gO!DnQ`O1G3gO9uQ!0LrO1G3gOOQ[1G3g1G3gO!EhQ`O1G3VO!&zQMhO1G3SO$2cQ`O1G3SOOQ[1G3T1G3TO!&zQMhO1G3TO$2hQ`O1G3TO$2pQpO'#HROOQ[1G3V1G3VO!6_QpO'#JOO!EmQ!bO1G3YOOQ[1G3Y1G3YOOQ[,5=s,5=sO$2xQMhO,5=uO9kQ`O,5=uO$%dQ`O,5=wO9`Q`O,5=wO!CZQpO,5=wO!CcQMhO,5=wO:dQMhO,5=wO$3WQ`O'#KdO$3cQ`O,5=xOOQ[1G.k1G.kO$3hQ!0LrO1G.kO@zQ`O1G.kO$3sQ`O1G.kO9uQ!0LrO1G.kO$5{Q!fO,5ARO$6YQ`O,5ARO9eQ`O,5ARO$6eQlO,5>QO$6lQ`O,5>QOOQ[1G3j1G3jO`QlO1G3jOOQ[1G3p1G3pOOQ[1G3r1G3rO?TQ`O1G3tO$6qQlO1G3vO$:uQlO'#HuOOQ[1G3y1G3yO$;SQ`O'#H{O?YQ`O'#H}OOQ[1G4P1G4PO$;[QlO1G4PO9uQ!0LrO1G4VOOQ[1G4X1G4XOOQ!0Lb'#G`'#G`O9uQ!0LrO1G4ZO9uQ!0LrO1G4]O$?cQ`O,5@cO9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CZQpO,5:XO$?hQ?MtO,5:XOOQO,5;`,5;`O$?rQpO'#IfO$@YQ`O,5@bOOQ!0Lf1G/r1G/rO!)[QlO,5;`O$@bQpO'#IlO$@lQ`O,5@qOOQ!0Lb1G0y1G0yO#$^QpO,5:XOOQO'#Ih'#IhO$@tQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CZQpO1G0tO!CcQMhO1G0tOOQ!0Lb1G5}1G5}O!COQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@{Q!0LrO1G0mO$AWQ!0LrO1G0mO!CZQpO1G0^ODWQpO1G0^O$AfQ!0LrO1G0mOOQO1G0^1G0^O$AzQ!0MxO1G0mPOOO-E<]-E<]POOO1G.h1G.hOOOO1G/i1G/iO$BUQ!bO,5<jO$B^Q!fO1G4kOOQO1G4q1G4qO%[QlO,5?PO$BhQ`O1G5{O$BpQ`O1G6ZO$BxQ!fO1G6[O9eQ`O,5?VO$CSQ!0MxO1G6XO%[QlO1G6XO$CdQ!0LrO1G6XO$CuQ`O1G6WO$CuQ`O1G6WO9eQ`O1G6WO$C}Q`O,5?YO9eQ`O,5?YOOQO,5?Y,5?YO$DcQ`O,5?YO$+YQ`O,5?YOOQO-E<l-E<lOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(f7+(fO!&zQMhO7+(fO%[QlO7+(fO$DqQ`O7+(fO$D|QMhO7+(fO$E[Q!0MzO,5=YO$GgQ!0MzO,5=[O$IrQ!0MzO,5=YO$LTQ!0MzO,5=[O$NfQ!0MzO,59uO%!kQ!0MzO,5<lO%$vQ!0MzO,5<nO%'RQ!0MzO,5<|OOQ!0Lf7+&a7+&aO%)dQ!0MxO7+&aO%*WQlO'#IgO%*eQ`O,5@dO%*mQ!fO,5@dOOQ!0Lf1G0P1G0PO%*wQ`O7+&kOOQ!0Lf7+&k7+&kO%*|Q?MtO,5:fO%[QlO7+&{O%+WQ?MtO,5:bO%+eQ?MtO,5:jO%+oQ?MtO,5:lO%+yQMhO'#IjO%,TQ`O,5@iOOQ!0Lh1G0d1G0dOOQO1G1s1G1sOOQO1G1t1G1tO%,]Q!jO,5<[O!)[QlO,5<ZOOQO-E<m-E<mOOQ!0Lf7+'Z7+'ZOOOW7+'f7+'fOOOW1G1}1G1}O%,hQ`O1G1}OOQ!0Lf1G2P1G2POOOO,59o,59oO%,mQ!dO,59oOOOO-E<a-E<aOOQ!0Lh1G/X1G/XO%,tQ!0MxO7+'lOOQ!0Lh,5?_,5?_O%-hQMhO1G2gP%-oQ`O'#IsPOQ!0Lh-E<q-E<qO%.]QMjO,5?bOOQ!0Lh-E<t-E<tO%/OQMjO,5?dOOQ!0Lh-E<v-E<vO%/YQ!dO1G2xO%/aQ!dO'#CrO%/wQMhO'#KTO$$wQlO'#JwOOQ!0Lh1G2`1G2`O%0RQ`O'#IrO%0jQ`O,5@wO%0jQ`O,5@wO%0rQ`O,5@wO%0}Q`O,5@wOOQO1G2b1G2bO%1]QMjO1G2aO$+YQ`O'#K]O!,TQMhO1G2aO%1mQ(CWO'#ItO%1zQ`O,5@xO!&zQMhO,5@xO%2SQ!dO,5@xOOQ!0Lh1G2e1G2eO%4dQ!fO'#CiO%4nQ`O,5=QOOQ!0Lb,5=O,5=OO%4vQpO,5=OOOQ!0Lb,5=P,5=POCwQ`O,5=OO%5RQpO,5=OOOQ!0Lb,5=S,5=SO$+YQ`O,5=WOOQO,5?a,5?aOOQO-E<s-E<sOOQ!0Lp1G2i1G2iO#$^QpO,5=OO$$wQlO,5=QO%5aQ`O,5=PO%5lQpO,5=PO!,TQMhO'#IvO%6fQMjO1G2tO!,TQMhO'#IxO%7XQMjO1G2vO%7cQMjO1G5rO%7mQMjO1G5rOOQO,5?f,5?fOOQO-E<x-E<xOOQO1G.{1G.{O!,TQMhO1G5rO!,TQMhO1G5rO!=[QpO,59wO%[QlO,59wOOQ!0Lh,5<k,5<kO%7zQ`O1G2[O!,TQMhO1G2cO%8PQ!0MxO7+'nOOQ!0Lf7+'n7+'nO!$wQlO7+'nO%8sQ`O,5;`OOQ!0Lb,5?h,5?hOOQ!0Lb-E<z-E<zO%8xQ!dO'#K_O#(ZQ`O7+(fO4UQ!fO7+(fO$DtQ`O7+(fO%9SQ!0MvO'#CiO%9gQ!0MvO,5=TO%9zQ`O,5=TO%:SQ`O,5=TOOQ!0Lb1G5p1G5pOOQ[7+$a7+$aO!COQ!0LrO7+$aO!CZQpO7+$aO!$wQlO7+&aO%:XQ`O'#JRO%:pQ`O,5AQOOQO1G3i1G3iO9kQ`O,5AQO%:pQ`O,5AQO%:xQ`O,5AQOOQO,5?n,5?nOOQO-E=Q-E=QOOQ!0Lf7+'U7+'UO%:}Q`O7+)RO9uQ!0LrO7+)RO9kQ`O7+)RO@zQ`O7+)RO%;SQ`O7+)ROOQ[7+)R7+)ROOQ[7+(q7+(qO%;XQ!0MvO7+(nO!&zQMhO7+(nO!EcQ`O7+(oOOQ[7+(o7+(oO!&zQMhO7+(oO%;cQ`O'#KcO%;nQ`O,5=mOOQO,5?j,5?jOOQO-E<|-E<|OOQ[7+(t7+(tO%=QQpO'#H[OOQ[1G3a1G3aO!&zQMhO1G3aO%[QlO1G3aO%=XQ`O1G3aO%=dQMhO1G3aO9uQ!0LrO1G3cO$%dQ`O1G3cO9`Q`O1G3cO!CZQpO1G3cO!CcQMhO1G3cO%=rQ`O'#JQO%>WQ`O,5AOO%>`QpO,5AOOOQ!0Lb1G3d1G3dOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>kQ`O7+$VO%[QlO1G6mO%[QlO1G6nO%>pQ!0LrO1G6mO%>zQlO1G3lO%?RQ`O1G3lO%?WQlO1G3lOOQ[7+)U7+)UO9uQ!0LrO7+)`O`QlO7+)bOOQ['#Ki'#KiOOQ['#JT'#JTO%?_QlO,5>aOOQ[,5>a,5>aO%[QlO'#HvO%?lQ`O'#HxOOQ[,5>g,5>gO9eQ`O,5>gOOQ[,5>i,5>iOOQ[7+)k7+)kOOQ[7+)q7+)qOOQ[7+)u7+)uOOQ[7+)w7+)wO%?qQpO1G5}O%@]Q`O1G0zOOQO1G/s1G/sO%@hQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?Q,5?QOOQO-E<d-E<dO%@rQ?MtO1G0zOOQO,5?W,5?WOOQO-E<j-E<jO!CZQpO1G/sOOQO-E<f-E<fOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CZQpO7+&`OOQO7+%x7+%xO$AzQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@|Q!0LrO7+&XO!COQ!0LrO7+%xO!CZQpO7+%xO%AXQ!0LrO7+&XO%AgQ!0MxO7++sO%[QlO7++sO%AwQ`O7++rO%AwQ`O7++rOOQO1G4t1G4tO9eQ`O1G4tO%BPQ`O1G4tOOQS7+%}7+%}O#(ZQ`O<<LQO4UQ!fO<<LQO%B_Q`O<<LQOOQ[<<LQ<<LQO!&zQMhO<<LQO%[QlO<<LQO%BgQ`O<<LQO%BrQ!0MzO,5?bO%D}Q!0MzO,5?dO%GYQ!0MzO1G2aO%IkQ!0MzO1G2tO%KvQ!0MzO1G2vO%NRQ!fO,5?RO%[QlO,5?ROOQO-E<e-E<eO%N]Q`O1G6OOOQ!0Lf<<JV<<JVO%NeQ?MtO1G0uO&!lQ?MtO1G1QO&!sQ?MtO1G1QO&$tQ?MtO1G1QO&${Q?MtO1G1QO&&|Q?MtO1G1QO&(}Q?MtO1G1QO&)UQ?MtO1G1QO&)]Q?MtO1G1QO&+^Q?MtO1G1QO&+eQ?MtO1G1QO&+lQ!0MxO<<JgO&-dQ?MtO1G1QO&.aQ?MvO1G1QO&/dQ?MvO'#JmO&1jQ?MtO1G1dO&1wQ?MtO1G0UO&2RQMjO,5?UOOQO-E<h-E<hO!)[QlO'#FrOOQO'#K['#K[OOQO1G1v1G1vO&2]Q`O1G1uO&2bQ?MtO,5?]OOOW7+'i7+'iOOOO1G/Z1G/ZO&2lQ!dO1G4yOOQ!0Lh7+(R7+(RP!&zQMhO,5?_O!,TQMhO7+(dO&2sQ`O,5?^O9eQ`O,5?^O$+YQ`O,5?^OOQO-E<p-E<pO&3RQ`O1G6cO&3RQ`O1G6cO&3ZQ`O1G6cO&3fQMjO7+'{O&3vQ!dO,5?`O&4QQ`O,5?`O!&zQMhO,5?`OOQO-E<r-E<rO&4VQ!dO1G6dO&4aQ`O1G6dO&4iQ`O1G2lO!&zQMhO1G2lOOQ!0Lb1G2j1G2jOOQ!0Lb1G2k1G2kO%4vQpO1G2jO!CZQpO1G2jOCwQ`O1G2jOOQ!0Lb1G2r1G2rO&4nQpO1G2jO&4|Q`O1G2lO$+YQ`O1G2kOCwQ`O1G2kO$$wQlO1G2lO&5UQ`O1G2kO&5xQMjO,5?bOOQ!0Lh-E<u-E<uO&6kQMjO,5?dOOQ!0Lh-E<w-E<wO!,TQMhO7++^O&6uQMjO7++^O&7PQMjO7++^OOQ!0Lh1G/c1G/cO&7^Q`O1G/cOOQ!0Lh7+'v7+'vO&7cQMjO7+'}O&7sQ!0MxO<<KYOOQ!0Lf<<KY<<KYO&8gQ`O1G0zO!&zQMhO'#I{O&8lQ`O,5@yO&:nQ!fO<<LQO!&zQMhO1G2oO&:uQ!0LrO1G2oOOQ[<<G{<<G{O!COQ!0LrO<<G{O&;WQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?m,5?mO&;zQ`O,5?mO&<PQ`O,5?mOOQO-E=P-E=PO&<_Q`O1G6lO&<_Q`O1G6lO9kQ`O1G6lO@zQ`O<<LmOOQ[<<Lm<<LmO&<gQ`O<<LmO9uQ!0LrO<<LmO9kQ`O<<LmOOQ[<<LY<<LYO%;XQ!0MvO<<LYOOQ[<<LZ<<LZO!EcQ`O<<LZO&<lQpO'#I}O&<wQ`O,5@}O!)[QlO,5@}OOQ[1G3X1G3XOOQO'#JP'#JPO9uQ!0LrO'#JPO&=PQpO,5=vOOQ[,5=v,5=vO&=WQpO'#EgO&=_QpO'#GfO&=dQ`O7+({O&=iQ`O7+({OOQ[7+({7+({O!&zQMhO7+({O%[QlO7+({O&=qQ`O7+({OOQ[7+(}7+(}O9uQ!0LrO7+(}O$%dQ`O7+(}O9`Q`O7+(}O!CZQpO7+(}O&=|Q`O,5?lOOQO-E=O-E=OOOQO'#H_'#H_O&>XQ`O1G6jO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>aQ`O7+,XO&>fQ`O7+,YO%[QlO7+,XO%[QlO7+,YOOQ[7+)W7+)WO&>kQ`O7+)WO&>pQlO7+)WO&>wQ`O7+)WOOQ[<<Lz<<LzOOQ[<<L|<<L|OOQ[-E=R-E=ROOQ[1G3{1G3{O&>|Q`O,5>bOOQ[,5>d,5>dO&?RQ`O1G4RO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&?WQ?MtO1G6[O?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AzQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!COQ!0LrO<<IdO&?bQ!0LrO<<IsO&?mQ!0MxO<= _O&?}Q`O<= ^OOQO7+*`7+*`O9eQ`O7+*`OOQ[ANAlANAlO&@VQ!fOANAlO!&zQMhOANAlO#(ZQ`OANAlO4UQ!fOANAlO&@^Q`OANAlO%[QlOANAlO&@fQ!0MzO7+'{O&BwQ!0MzO,5?bO&ESQ!0MzO,5?dO&G_Q!0MzO7+'}O&IpQ!fO1G4mO&IzQ?MtO7+&aO&LOQ?MvO,5=YO&NVQ?MvO,5=[O&NgQ?MvO,5=YO&NwQ?MvO,5=[O' XQ?MvO,59uO'#_Q?MvO,5<lO'%bQ?MvO,5<nO''vQ?MvO,5<|O')lQ?MtO7+'lO')yQ?MtO7+'nO'*WQ`O,5<^OOQO7+'a7+'aOOQ!0Lh7+*e7+*eO'*]QMjO<<LOOOQO1G4x1G4xO'*dQ`O1G4xO'*oQ`O1G4xO'*}Q`O7++}O'*}Q`O7++}O!&zQMhO1G4zO'+VQ!dO1G4zO'+aQ`O7+,OO'+iQ`O7+(WO'+tQ!dO7+(WOOQ!0Lb7+(U7+(UOOQ!0Lb7+(V7+(VO!CZQpO7+(UOCwQ`O7+(UO',OQ`O7+(WO!&zQMhO7+(WO$+YQ`O7+(VO',TQ`O7+(WOCwQ`O7+(VO',]QMjO<<NxO!,TQMhO<<NxOOQ!0Lh7+$}7+$}O',gQ!dO,5?gOOQO-E<y-E<yO',qQ!0MvO7+(ZO!&zQMhO7+(ZOOQ[AN=gAN=gO9kQ`O1G5XOOQO1G5X1G5XO'-RQ`O1G5XO'-WQ`O7+,WO'-WQ`O7+,WO9uQ!0LrOANBXO@zQ`OANBXOOQ[ANBXANBXO'-`Q`OANBXOOQ[ANAtANAtOOQ[ANAuANAuO'-eQ`O,5?iOOQO-E<{-E<{O'-pQ?MtO1G6iOOQO,5?k,5?kOOQO-E<}-E<}OOQ[1G3b1G3bO'-zQ`O,5=QOOQ[<<Lg<<LgO!&zQMhO<<LgO&=dQ`O<<LgO'.PQ`O<<LgO%[QlO<<LgOOQ[<<Li<<LiO9uQ!0LrO<<LiO$%dQ`O<<LiO9`Q`O<<LiO'.XQpO1G5WO'.dQ`O7+,UOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= s<= sOOQ[<= t<= tO'.lQ`O<= sO'.qQ`O<= tOOQ[<<Lr<<LrO'.vQ`O<<LrO'.{QlO<<LrOOQ[1G3|1G3|O?YQ`O7+)mO'/SQ`O<<JQO'/_Q?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AzQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<Mz<<MzOOQ[G27WG27WO!&zQMhOG27WO#(ZQ`OG27WO'/iQ!fOG27WO4UQ!fOG27WO'/pQ`OG27WO'/xQ?MtO<<JgO'0VQ?MvO1G2aO'1{Q?MvO,5?bO'4OQ?MvO,5?dO'6RQ?MvO1G2tO'8UQ?MvO1G2vO':XQ?MtO<<KYO':fQ?MtO<<I{OOQO1G1x1G1xO!,TQMhOANAjOOQO7+*d7+*dO':sQ`O7+*dO';OQ`O<= iO';WQ!dO7+*fOOQ!0Lb<<Kr<<KrO$+YQ`O<<KrOCwQ`O<<KrO';bQ`O<<KrO!&zQMhO<<KrOOQ!0Lb<<Kp<<KpO!CZQpO<<KpO';mQ!dO<<KrOOQ!0Lb<<Kq<<KqO';wQ`O<<KrO!&zQMhO<<KrO$+YQ`O<<KqO';|QMjOANDdO'<WQ!0MvO<<KuOOQO7+*s7+*sO9kQ`O7+*sO'<hQ`O<= rOOQ[G27sG27sO9uQ!0LrOG27sO@zQ`OG27sO!)[QlO1G5TO'<pQ`O7+,TO'<xQ`O1G2lO&=dQ`OANBROOQ[ANBRANBRO!&zQMhOANBRO'<}Q`OANBROOQ[ANBTANBTO9uQ!0LrOANBTO$%dQ`OANBTOOQO'#H`'#H`OOQO7+*r7+*rOOQ[G22wG22wOOQ[ANE_ANE_OOQ[ANE`ANE`OOQ[ANB^ANB^O'=VQ`OANB^OOQ[<<MX<<MXO!)[QlOAN?lOOQOG24yG24yO$AzQ!0MxOG24yO#(ZQ`OLD,rOOQ[LD,rLD,rO!&zQMhOLD,rO'=[Q!fOLD,rO'=cQ?MvO7+'{O'?XQ?MvO,5?bO'A[Q?MvO,5?dO'C_Q?MvO7+'}O'ETQMjOG27UOOQO<<NO<<NOOOQ!0LbANA^ANA^O$+YQ`OANA^OCwQ`OANA^O'EeQ!dOANA^OOQ!0LbANA[ANA[O'ElQ`OANA^O!&zQMhOANA^O'EwQ!dOANA^OOQ!0LbANA]ANA]OOQO<<N_<<N_OOQ[LD-_LD-_O9uQ!0LrOLD-_O'FRQ?MtO7+*oOOQO'#Gg'#GgOOQ[G27mG27mO&=dQ`OG27mO!&zQMhOG27mOOQ[G27oG27oO9uQ!0LrOG27oOOQ[G27xG27xO'F]Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!^!$(!^O#(ZQ`O!$(!^O!&zQMhO!$(!^O'FgQ!0MzOG27UOOQ!0LbG26xG26xO$+YQ`OG26xO'HxQ`OG26xOCwQ`OG26xO'ITQ!dOG26xO!&zQMhOG26xOOQ[!$(!y!$(!yOOQ[LD-XLD-XO&=dQ`OLD-XOOQ[LD-ZLD-ZOOQ[!)9Ex!)9ExO#(ZQ`O!)9ExOOQ!0LbLD,dLD,dO$+YQ`OLD,dOCwQ`OLD,dO'I[Q`OLD,dO'IgQ!dOLD,dOOQ[!$(!s!$(!sOOQ[!.K;d!.K;dO'InQ?MvOG27UOOQ!0Lb!$(!O!$(!OO$+YQ`O!$(!OOCwQ`O!$(!OO'KdQ`O!$(!OOOQ!0Lb!)9Ej!)9EjO$+YQ`O!)9EjOCwQ`O!)9EjOOQ!0Lb!.K;U!.K;UO$+YQ`O!.K;UOOQ!0Lb!4/0p!4/0pO!)[QlO'#DzO1PQ`O'#EXO'KoQ!fO'#JsO'KvQ!L^O'#DvO'K}QlO'#EOO'LUQ!fO'#CiO'NlQ!fO'#CiO!)[QlO'#EQO'N|QlO,5;ZO!)[QlO,5;fO!)[QlO,5;fO!)[QlO,5;fO!)[QlO,5;fO!)[QlO,5;fO!)[QlO,5;fO!)[QlO,5;fO!)[QlO,5;fO!)[QlO,5;fO!)[QlO,5;fO!)[QlO'#IqO(#PQ`O,5<jO!)[QlO,5;fO(#XQMhO,5;fO($rQMhO,5;fO!)[QlO,5;xO!&zQMhO'#GnO(#XQMhO'#GnO!&zQMhO'#GpO(#XQMhO'#GpO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GQO(#XQMhO'#GQO!&zQMhO'#GSO(#XQMhO'#GSO!&zQMhO'#GbO(#XQMhO'#GbO!)[QlO,5:jO($yQpO'#D_O!)[QlO,5@pO'N|QlO1G0uO(%TQ?MtO'#CiO!)[QlO1G2QO!&zQMhO'#IvO(#XQMhO'#IvO!&zQMhO'#IxO(#XQMhO'#IxO(%_Q!dO'#CrO!&zQMhO,5<uO(#XQMhO,5<uO'N|QlO1G2SO!)[QlO7+&{O!&zQMhO1G2aO(#XQMhO1G2aO!&zQMhO'#IvO(#XQMhO'#IvO!&zQMhO'#IxO(#XQMhO'#IxO!&zQMhO1G2cO(#XQMhO1G2cO'N|QlO7+'nO'N|QlO7+&aO!&zQMhOANAjO(#XQMhOANAjO(%rQ`O'#EoO(%wQ`O'#EoO(&PQ`O'#F^O(&UQ`O'#EzO(&ZQ`O'#KUO(&fQ`O'#KSO(&qQ`O,5;ZO(&vQMjO,5<fO(&}Q`O'#GZO('SQ`O'#GZO('XQ`O,5<fO('aQ`O,5<hO('iQ`O,5;ZO('qQ?MtO1G1aO('xQ`O,5<uO('}Q`O,5<uO((SQ`O,5<wO((XQ`O,5<wO((^Q`O1G2SO((cQ`O1G0uO((hQMjO<<LOO((oQMjO<<LOO((vQMhO'#F}O9`Q`O'#F|OAuQ`O'#EnO!)[QlO,5;uO!3oQ`O'#GZO!3oQ`O'#GZO!3oQ`O'#G]O!3oQ`O'#G]O!,TQMhO7+(dO!,TQMhO7+(dO%/YQ!dO1G2xO%/YQ!dO1G2xO!&zQMhO,5=^O!&zQMhO,5=^",stateData:"(){~O'}OS(OOSTOS(PRQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$X|O$oiO%i}O%k!QO%m!OO%n!OO%o!OO%r!RO%t!SO%w!TO%x!TO%z!UO&X!WO&_!XO&a!YO&c!ZO&e![O&h!]O&n!^O&t!_O&v!`O&x!aO&z!bO&|!cO(USO(WTO(ZUO(bVO(p[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$X!kO$oiO(U!dO(WTO(ZUO(bVO(p[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<XO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(V!lO(WTO(ZUO(f!mO(p!sO~O(P!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#lfX#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#w]X#y]X#{]X#|]X$R]X'{]X(b]X(s]X(z]X({]X~O!g%SX~P(qO_!}O(W#PO(X!}O(Y#PO~O_#QO(Y#PO(Z#PO([#QO~Ox#SO!U#TO(c#TO(d#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$X!kO$oiO(U<]O(WTO(ZUO(bVO(p[O~O![#ZO!]#WO!Y(iP!Y(wP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$X!kO$oiO(WTO(ZUO(bVO(p[O~Op#mO![#iO!|]O#j#lO#k#iO(U<^O!k(tP~P.iO!l#oO(U#nO~O!x#sO!|]O%i#tO~O#l#uO~O!g#vO#l#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#o$OO#p$PO#q$PO#r$PO#s$QO#t$RO#u$RO#v$bO#w$SO#y$UO#{$WO#|$XO(bVO(s$YO(z#|O({#}O~Oa(gX'{(gX'x(gX!k(gX!Y(gX!_(gX%j(gX!g(gX~P1qO#S$dO#`$eO$R$eOP(hXR(hX[(hXj(hXr(hX!Q(hX!S(hX!](hX!l(hX!p(hX#R(hX#o(hX#p(hX#q(hX#r(hX#s(hX#t(hX#u(hX#v(hX#w(hX#y(hX#{(hX#|(hX(b(hX(s(hX(z(hX({(hX!_(hX%j(hX~Oa(hX'{(hX'x(hX!Y(hX!k(hXv(hX!g(hX~P4UO#`$eO~O$^$hO$`$gO$g$mO~OSfO!_$nO$j$oO$l$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#k%cO$X%`O$u%^O$w%_O$z%aO(U$sO(WTO(ZUO(b$uO(z$}O({%POg(_P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(U%gO~O!g%mO~Oa%nO'{%nO~O!Q%rO~P%[O(V!lO~P%[O%o%vO~P%[Oh%VO!l%eO(U%gO(V!lO~Oe%}O!l%eO(U%gO~Oj$RO~O!_&PO(U%gO(V!lO(WTO(ZUO`)XP~O!Q&SO!l&RO%k&VO&U&WO~P;SO!x#sO~O%t&YO!S)TX!_)TX(U)TX~O(U&ZO~Ol!PO!u&`O%k!QO%m!OO%n!OO%o!OO%r!RO%t!SO%w!TO%x!TO~Od&eOe&dO!x&bO%i&cO%|&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%i}O%m!OO%n!OO%o!OO%r!RO%t!SO%w!TO%x!TO%z!UO~Ob&kO#`&nO%k&iO(V!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'y&{O'{%nO~Oa%nO'y'OO'{%nO~Oa%nO'y'QO'{%nO~O'x]X!Y]Xv]X!k]X&]]X!_]X%j]X!g]X~P(qO!b'`O!c'WO!d'WO(V!lO(WTO(ZUO~Os'UO!S'TO!['XO(f'SO!^(jP!^(yP~P@nOn'cO!_'aO(U%gO~Oe'hO!l%eO(U%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<XO#T!pO#U!pO#W!pO#X!pO(V!lO(WTO(ZUO(f!mO(p!sO~O!b'nO!c'mO!d'mO#V!pO#['oO#]'oO~PBYOa%nOh%VO!g#vO!l%eO'{%nO(s'qO~O!p'uO#`'sO~PChOs!nO!S!oO(WTO(ZUO(f!mO(p!sO~O!_XOs(nX!S(nX!b(nX!c(nX!d(nX!|(nX#T(nX#U(nX#V(nX#W(nX#X(nX#[(nX#](nX(V(nX(W(nX(Z(nX(f(nX(p(nX~O!c'mO!d'mO(V!lO~PDWO(Q'yO(R'yO(S'{O~O_!}O(W'}O(X!}O(Y'}O~O_#QO(Y'}O(Z'}O([#QO~Ov(PO~P%[Ox#SO!U#TO(c#TO(d(SO~O![(UO!Y'XX!Y'_X!]'XX!]'_X~P+}O!](WO!Y(iX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](WO!l#xO!p$[O#R$RO#o$OO#p$PO#q$PO#r$PO#s$QO#t$RO#u$RO#v$bO#w$SO#y$UO#{$WO#|$XO(bVO(s$YO(z#|O({#}O~O!Y(iX~PHRO!Y(]O~O!Y(vX!](vX!g(vX!k(vX(s(vX~O#`(vX#l#dX!^(vX~PJUO#`(^O!Y(xX!](xX~O!](_O!Y(wX~O!Y(bO~O#`$eO~PJUO!^(cO~P`OR#zO!Q#yO!S#{O!l#xO(bVOP!na[!naj!nar!na!]!na!p!na#R!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#w!na#y!na#{!na#|!na(s!na(z!na({!na~Oa!na'{!na'x!na!Y!na!k!nav!na!_!na%j!na!g!na~PKlO!k(dO~O!g#vO#`(eO(s'qO!](uXa(uX'{(uX~O!k(uX~PNXO!S%hO!_%iO!|]O#j(jO#k(iO(U%gO~O!](kO!k(tX~O!k(mO~O!S%hO!_%iO#k(iO(U%gO~OP(hXR(hX[(hXj(hXr(hX!Q(hX!S(hX!](hX!l(hX!p(hX#R(hX#o(hX#p(hX#q(hX#r(hX#s(hX#t(hX#u(hX#v(hX#w(hX#y(hX#{(hX#|(hX(b(hX(s(hX(z(hX({(hX~O!g#vO!k(hX~P! uOR(oO!Q(nO!l#xO#S$dO!|!{a!S!{a~O!x!{a%i!{a!_!{a#j!{a#k!{a(U!{a~P!#vO!x(sO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$X!kO$oiO(U!dO(WTO(ZUO(bVO(p[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<uO!S${O!_$|O!i>WO!l$xO#k<{O$X%`O$u<wO$w<yO$z%aO(U(wO(WTO(ZUO(b$uO(z$}O({%PO~O#l(yO~O![({O!k(lP~P%[O(f(}O(p[O~O!S)PO!l#xO(f(}O(p[O~OP<WOQ<WOSfOd>SOe!iOpkOr<WOskOtkOzkO|<WO!O<WO!SWO!WkO!XkO!_!eO!i<ZO!lZO!o<WO!p<WO!q<WO!s<[O!u<_O!x!hO$X!kO$o>QO(U)^O(WTO(ZUO(bVO(p[O~O!]$_Oa$ra'{$ra'x$ra!k$ra!Y$ra!_$ra%j$ra!g$ra~Ol)eO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#k%cO$X%`O$u%^O$w%_O$z%aO(U(wO(WTO(ZUO(b$uO(z$}O({%PO~Og(qP~P!,TO!Q)jO!g)iO!_$_X$[$_X$^$_X$`$_X$g$_X~O!g)iO!_(|X$[(|X$^(|X$`(|X$g(|X~O!Q)jO~P!.^O!Q)jO!_(|X$[(|X$^(|X$`(|X$g(|X~O!_)lO$[)pO$^)kO$`)kO$g)qO~O![)tO~P!)[O$^$hO$`$gO$g)xO~On${X!Q${X#S${X'z${X(z${X({${X~OgmXg${XnmX!]mX#`mX~P!0SOx)zO(c){O(d)}O~On*WO!Q*PO'z*QO(z$}O({%PO~Og*OO~P!1WOg*XO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<uO!S*ZO!_*[O!i>WO!l$xO#k<{O$X%`O$u<wO$w<yO$z%aO(WTO(ZUO(b$uO(z$}O({%PO~Op*aO![*_O(U*YO!k)PP~P!1uO#l*bO~O!l*cO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<uO!S${O!_$|O!i>WO!l$xO#k<{O$X%`O$u<wO$w<yO$z%aO(U*eO(WTO(ZUO(b$uO(z$}O({%PO~O![*hO!Y)QP~P!3tOr*tOs!nO!S*jO!b*rO!c*lO!d*lO!l*cO#[*sO%a*nO(V!lO(WTO(ZUO(f!mO~O!^*qO~P!5iO#S$dOn(aX!Q(aX'z(aX(z(aX({(aX!](aX#`(aX~Og(aX$P(aX~P!6kOn*yO#`*xOg(`X!](`X~O!]*zOg(_X~Oj%dOk%dOl%dO(U&ZOg(_P~Os*}O~Og*OO(U&ZO~O!l+TO~O(U(wO~Op+XO!S%hO![#iO!_%iO!|]O#j#lO#k#iO(U%gO!k(tP~O!g#vO#l+YO~O!S%hO![+[O!](_O!_%iO(U%gO!Y(wP~Os']O!S+_O![+^O(WTO(ZUO(f+]O~O!^(yP~P!9|O!]+`Oa)UX'{)UX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#o$OO#p$PO#q$PO#r$PO#s$QO#t$RO#u$RO#v$bO#w$SO#y$UO#{$WO#|$XO(bVO(s$YO(z#|O({#}O~Oa!ja!]!ja'{!ja'x!ja!Y!ja!k!jav!ja!_!ja%j!ja!g!ja~P!:tO(f(}O~OR#zO!Q#yO!S#{O!l#xO(bVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#w!ra#y!ra#{!ra#|!ra(s!ra(z!ra({!ra~Oa!ra'{!ra'x!ra!Y!ra!k!rav!ra!_!ra%j!ra!g!ra~P!=aOR#zO!Q#yO!S#{O!l#xO(bVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#w!ta#y!ta#{!ta#|!ta(s!ta(z!ta({!ta~Oa!ta'{!ta'x!ta!Y!ta!k!tav!ta!_!ta%j!ta!g!ta~P!?wOh%VOn+iO!_'aO%j+hO~O!g+kOa(^X!_(^X'{(^X!](^X~Oa%nO!_XO'{%nO~Oh%VO!l%eO~Oh%VO!l%eO(U%gO~O!g#vO#l(yO~Ob+vO%k+wO(U+sO(WTO(ZUO!^)YP~O!]+xO`)XX~O[+|O~O`+}O~O!_&PO(U%gO(V!lO`)XP~O%k,QO~P;SOh%VO#`,UO~Oh%VOn,XO!_$|O~O!_,ZO~O!Q,]O!_XO~O%o%vO~O!x,bO~Oe,gO~Ob,hO(U#nO(WTO(ZUO!^)WP~Oe%}O~O%k!QO(U&ZO~P=gO[,mO`,lO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$oiO%i}O(WTO(ZUO(bVO(p[O~O!_!eO!u!gO$X!kO(U!dO~P!GOO`,lOa%nO'{%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$X!kO$oiO(U!dO(WTO(ZUO(bVO(p[O~Oa,rOl!OO!uwO%m!OO%n!OO%o!OO~P!IhO!l&oO~O&_,xO~O!_,zO~O&p,|O&r,}OP&maQ&maS&maY&maa&mad&mae&mal&map&mar&mas&mat&maz&ma|&ma!O&ma!S&ma!W&ma!X&ma!_&ma!i&ma!l&ma!o&ma!p&ma!q&ma!s&ma!u&ma!x&ma!|&ma$X&ma$o&ma%i&ma%k&ma%m&ma%n&ma%o&ma%r&ma%t&ma%w&ma%x&ma%z&ma&X&ma&_&ma&a&ma&c&ma&e&ma&h&ma&n&ma&t&ma&v&ma&x&ma&z&ma&|&ma'x&ma(U&ma(W&ma(Z&ma(b&ma(p&ma!^&ma&f&mab&ma&k&ma~O(U-SO~Oh!eX!]#iX!^#iX!g!RX!g!eX!l!eX#`#iX~O!]!eX!^!eX~P#!nO!g-WOh(kX!](kX!^(kX!g(kX!l(kXr(kX(s(kX~Oh%VO!g-YO!l%eO!]!aX!^!aX~Os!nO!S!oO(WTO(ZUO(f!mO~OP<WOQ<WOSfOd>SOe!iOpkOr<WOskOtkOzkO|<WO!O<WO!SWO!WkO!XkO!_!eO!i<ZO!lZO!o<WO!p<WO!q<WO!s<[O!u<_O!x!hO$X!kO$o>QO(WTO(ZUO(bVO(p[O~O(U=RO~P#$oO!]-^O!^(jX~O!^-`O~O#`-aO!]#hX!^#hX~O!g-WO~O!]-bO!^(yX~O!^-dO~O!c-eO!d-eO(V!lO~P#$^O!^-hO~P'_On-kO!_'aO~O!Y-pO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(V!{a(W!{a(Z!{a(f!{a(p!{a~P!#vO!p-uO#`-sO~PChO!c-wO!d-wO(V!lO~PDWOa%nO#`-sO'{%nO~Oa%nO!g#vO#`-sO'{%nO~Oa%nO!g#vO!p-uO#`-sO'{%nO(s'qO~O(Q'yO(R'yO(S-|O~Ov-}O~O!Y'Xa!]'Xa~P!:tO![.RO!Y'XX!]'XX~P%[O!](WO!Y(ia~O!Y(ia~PHRO!](_O!Y(wa~O!S%hO![.VO!_%iO(U%gO!Y'_X!]'_X~O#`.XO!](ua!k(uaa(ua'{(ua~O!g#vO~P#,wO!](kO!k(ta~O!S%hO!_%iO#k.]O(U%gO~Op.bO!S%hO![._O!_%iO!|]O#j.aO#k._O(U%gO!]'bX!k'bX~OR.fO!l#xO~Oh%VOn.iO!_'aO%j.hO~Oa#ci!]#ci'{#ci'x#ci!Y#ci!k#civ#ci!_#ci%j#ci!g#ci~P!:tOn>^O!Q*PO'z*QO(z$}O({%PO~O#l#_aa#_a#`#_a'{#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#l(aXP(aXR(aX[(aXa(aXj(aXr(aX!S(aX!l(aX!p(aX#R(aX#o(aX#p(aX#q(aX#r(aX#s(aX#t(aX#u(aX#v(aX#w(aX#y(aX#{(aX#|(aX'{(aX(b(aX(s(aX!k(aX!Y(aX'x(aXv(aX!_(aX%j(aX!g(aX~P!6kO!].vO!k(lX~P!:tO!k.yO~O!Y.{O~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(bVO[#nia#nij#nir#ni!]#ni#R#ni#p#ni#q#ni#r#ni#s#ni#t#ni#u#ni#v#ni#w#ni#y#ni#{#ni#|#ni'{#ni(s#ni(z#ni({#ni'x#ni!Y#ni!k#niv#ni!_#ni%j#ni!g#ni~O#o#ni~P#3cO#o$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#o$OO#p$PO#q$PO#r$PO(bVO[#nia#nij#ni!]#ni#R#ni#t#ni#u#ni#v#ni#w#ni#y#ni#{#ni#|#ni'{#ni(s#ni(z#ni({#ni'x#ni!Y#ni!k#niv#ni!_#ni%j#ni!g#ni~O#s#ni~P#6QO#s$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#o$OO#p$PO#q$PO#r$PO#s$QO#t$RO#u$RO#v$bO(bVOa#ni!]#ni#y#ni#{#ni#|#ni'{#ni(s#ni(z#ni({#ni'x#ni!Y#ni!k#niv#ni!_#ni%j#ni!g#ni~O#w#ni~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#o$OO#p$PO#q$PO#r$PO#s$QO#t$RO#u$RO#v$bO#w$SO(bVO({#}Oa#ni!]#ni#{#ni#|#ni'{#ni(s#ni(z#ni'x#ni!Y#ni!k#niv#ni!_#ni%j#ni!g#ni~O#y$UO~P#;VO#y#ni~P#;VO#w$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#o$OO#p$PO#q$PO#r$PO#s$QO#t$RO#u$RO#v$bO#w$SO#y$UO(bVO(z#|O({#}Oa#ni!]#ni#|#ni'{#ni(s#ni'x#ni!Y#ni!k#niv#ni!_#ni%j#ni!g#ni~O#{#ni~P#={O#{$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#lfX#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#w]X#y]X#{]X#|]X$R]X(b]X(s]X(z]X({]X!]]X!^]X~O$P]X~P#@jOP$[OR#zO[<oOj<dOr<mO!Q#yO!S#{O!l#xO!p$[O#R<dO#o<aO#p<bO#q<bO#r<bO#s<cO#t<dO#u<dO#v<nO#w<eO#y<gO#{<iO#|<jO(bVO(s$YO(z#|O({#}O~O$P.}O~P#BwO#S$dO#`<pO$R<pO$P(hX!^(hX~P! uOa'ea!]'ea'{'ea'x'ea!k'ea!Y'eav'ea!_'ea%j'ea!g'ea~P!:tO[#nia#nij#nir#ni!]#ni#R#ni#s#ni#t#ni#u#ni#v#ni#w#ni#y#ni#{#ni#|#ni'{#ni(s#ni'x#ni!Y#ni!k#niv#ni!_#ni%j#ni!g#ni~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#o$OO#p$PO#q$PO#r$PO(bVO(z#ni({#ni~P#EyOn>^O!Q*PO'z*QO(z$}O({%POP#niR#ni!S#ni!l#ni!p#ni#o#ni#p#ni#q#ni#r#ni(b#ni~P#EyO!]/ROg(qX~P!1WOg/TO~Oa$Qi!]$Qi'{$Qi'x$Qi!Y$Qi!k$Qiv$Qi!_$Qi%j$Qi!g$Qi~P!:tO$^/UO$`/UO~O$^/VO$`/VO~O!g)iO#`/WO!_$dX$[$dX$^$dX$`$dX$g$dX~O![/XO~O!_)lO$[/ZO$^)kO$`)kO$g/[O~O!]<kO!^(gX~P#BwO!^/]O~O!g)iO$g(|X~O$g/_O~Ov/`O~P!&zOx)zO(c){O(d/cO~O!S/fO~O(z$}On%ba!Q%ba'z%ba({%ba!]%ba#`%ba~Og%ba$P%ba~P#L{O({%POn%da!Q%da'z%da(z%da!]%da#`%da~Og%da$P%da~P#MnO!]fX!gfX!kfX!k${X(sfX~P!0SOp%WO![/oO!](_O(U/nO!Y(wP!Y)QP~P!1uOr*tO!b*rO!c*lO!d*lO!l*cO#[*sO%a*nO(V!lO(WTO(ZUO~Os'UO!S/pO![+^O!^*qO(f=OO!^(yP~P$ [O!k/qO~P#/sO!]/rO!g#vO(s'qO!k)PX~O!k/wO~OnoX!QoX'zoX(zoX({oX~O!g#vO!koX~P$#OOp/yO!S%hO![*_O!_%iO(U%gO!k)PP~O#l/zO~O!Y${X!]${X!g%SX~P!0SO!]/{O!Y)QX~P#/sO!g/}O~O!Y0PO~OpkO(U0QO~P.iOh%VOr0VO!g#vO!l%eO(s'qO~O!g+kO~Oa%nO!]0ZO'{%nO~O!^0]O~P!5iO!c0^O!d0^O(V!lO~P#$^Os!nO!S0_O(WTO(ZUO(f!mO~O#[0aO~Og%ba!]%ba#`%ba$P%ba~P!1WOg%da!]%da#`%da$P%da~P!1WOj%dOk%dOl%dO(U&ZOg'nX!]'nX~O!]*zOg(_a~Og0jO~On0lO#`0kOg(`a!](`a~OR0mO!Q0mO!S0nO#S$dOn}a'z}a(z}a({}a!]}a#`}a~Og}a$P}a~P$(cO!Q*PO'z*QOn$ta(z$ta({$ta!]$ta#`$ta~Og$ta$P$ta~P$)_O!Q*PO'z*QOn$va(z$va({$va!]$va#`$va~Og$va$P$va~P$*QO#l0qO~Og%Ua!]%Ua#`%Ua$P%Ua~P!1WO!g#vO~O#l0tO~O!]#iX!^#iX!g!RX#`#iX~O!]+`Oa)Ua'{)Ua~OR#zO!Q#yO!S#{O!l#xO(bVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#w!ri#y!ri#{!ri#|!ri(s!ri(z!ri({!ri~Oa!ri'{!ri'x!ri!Y!ri!k!riv!ri!_!ri%j!ri!g!ri~P$+}Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<uO!S${O!_$|O!i>WO!l$xO#k<{O$X%`O$u<wO$w<yO$z%aO(WTO(ZUO(b$uO(z$}O({%PO~Op0}O%^1OO(U0|O~P$.eO!g+kOa(^a!_(^a'{(^a!](^a~O#l1UO~O[]X!]fX!^fX~O!]1VO!^)YX~O!^1XO~O[1YO~Ob1[O(U+sO(WTO(ZUO~O!_&PO(U%gO`'vX!]'vX~O!]+xO`)Xa~O!k1_O~P!:tO[1bO~O`1cO~O#`1hO~On1kO!_$|O~O(f(}O!^)VP~Oh%VOn1tO!_1qO%j1sO~O[2OO!]1|O!^)WX~O!^2PO~O`2ROa%nO'{%nO~O(U#nO(WTO(ZUO~O#S$dO#`$eO$R$eOP(hXR(hX[(hXr(hX!Q(hX!S(hX!](hX!l(hX!p(hX#R(hX#o(hX#p(hX#q(hX#r(hX#s(hX#t(hX#u(hX#v(hX#w(hX#y(hX#{(hX#|(hX(b(hX(s(hX(z(hX({(hX~Oj2UO&]2VOa(hX~P$4OOj2UO#`$eO&]2VO~Oa2XO~P%[Oa2ZO~O&f2^OP&diQ&diS&diY&dia&did&die&dil&dip&dir&dis&dit&diz&di|&di!O&di!S&di!W&di!X&di!_&di!i&di!l&di!o&di!p&di!q&di!s&di!u&di!x&di!|&di$X&di$o&di%i&di%k&di%m&di%n&di%o&di%r&di%t&di%w&di%x&di%z&di&X&di&_&di&a&di&c&di&e&di&h&di&n&di&t&di&v&di&x&di&z&di&|&di'x&di(U&di(W&di(Z&di(b&di(p&di!^&dib&di&k&di~Ob2dO!^2bO&k2cO~P`O!_XO!l2fO~O&r,}OP&miQ&miS&miY&mia&mid&mie&mil&mip&mir&mis&mit&miz&mi|&mi!O&mi!S&mi!W&mi!X&mi!_&mi!i&mi!l&mi!o&mi!p&mi!q&mi!s&mi!u&mi!x&mi!|&mi$X&mi$o&mi%i&mi%k&mi%m&mi%n&mi%o&mi%r&mi%t&mi%w&mi%x&mi%z&mi&X&mi&_&mi&a&mi&c&mi&e&mi&h&mi&n&mi&t&mi&v&mi&x&mi&z&mi&|&mi'x&mi(U&mi(W&mi(Z&mi(b&mi(p&mi!^&mi&f&mib&mi&k&mi~O!Y2lO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2qO(f!mO!]'YX!^'YX~P@nO!]-^O!^(ja~O!]'`X!^'`X~P!9|O!]-bO!^(ya~O!^2yO~P'_Oa%nO#`3SO'{%nO~Oa%nO!g#vO#`3SO'{%nO~Oa%nO!g#vO!p3WO#`3SO'{%nO(s'qO~Oa%nO'{%nO~P!:tO!]$_Ov$ra~O!Y'Xi!]'Xi~P!:tO!](WO!Y(ii~O!](_O!Y(wi~O!Y(xi!](xi~P!:tO!](ui!k(uia(ui'{(ui~P!:tO#`3YO!](ui!k(uia(ui'{(ui~O!](kO!k(ti~O!S%hO!_%iO!|]O#j3_O#k3^O(U%gO~O!S%hO!_%iO#k3^O(U%gO~On3fO!_'aO%j3eO~Oh%VOn3fO!_'aO%j3eO~O#l%baP%baR%ba[%baa%baj%bar%ba!S%ba!l%ba!p%ba#R%ba#o%ba#p%ba#q%ba#r%ba#s%ba#t%ba#u%ba#v%ba#w%ba#y%ba#{%ba#|%ba'{%ba(b%ba(s%ba!k%ba!Y%ba'x%bav%ba!_%ba%j%ba!g%ba~P#L{O#l%daP%daR%da[%daa%daj%dar%da!S%da!l%da!p%da#R%da#o%da#p%da#q%da#r%da#s%da#t%da#u%da#v%da#w%da#y%da#{%da#|%da'{%da(b%da(s%da!k%da!Y%da'x%dav%da!_%da%j%da!g%da~P#MnO#l%baP%baR%ba[%baa%baj%bar%ba!S%ba!]%ba!l%ba!p%ba#R%ba#o%ba#p%ba#q%ba#r%ba#s%ba#t%ba#u%ba#v%ba#w%ba#y%ba#{%ba#|%ba'{%ba(b%ba(s%ba!k%ba!Y%ba'x%ba#`%bav%ba!_%ba%j%ba!g%ba~P#/sO#l%daP%daR%da[%daa%daj%dar%da!S%da!]%da!l%da!p%da#R%da#o%da#p%da#q%da#r%da#s%da#t%da#u%da#v%da#w%da#y%da#{%da#|%da'{%da(b%da(s%da!k%da!Y%da'x%da#`%dav%da!_%da%j%da!g%da~P#/sO#l}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#w}a#y}a#{}a#|}a'{}a(b}a(s}a!k}a!Y}a'x}av}a!_}a%j}a!g}a~P$(cO#l$taP$taR$ta[$taa$taj$tar$ta!S$ta!l$ta!p$ta#R$ta#o$ta#p$ta#q$ta#r$ta#s$ta#t$ta#u$ta#v$ta#w$ta#y$ta#{$ta#|$ta'{$ta(b$ta(s$ta!k$ta!Y$ta'x$tav$ta!_$ta%j$ta!g$ta~P$)_O#l$vaP$vaR$va[$vaa$vaj$var$va!S$va!l$va!p$va#R$va#o$va#p$va#q$va#r$va#s$va#t$va#u$va#v$va#w$va#y$va#{$va#|$va'{$va(b$va(s$va!k$va!Y$va'x$vav$va!_$va%j$va!g$va~P$*QO#l%UaP%UaR%Ua[%Uaa%Uaj%Uar%Ua!S%Ua!]%Ua!l%Ua!p%Ua#R%Ua#o%Ua#p%Ua#q%Ua#r%Ua#s%Ua#t%Ua#u%Ua#v%Ua#w%Ua#y%Ua#{%Ua#|%Ua'{%Ua(b%Ua(s%Ua!k%Ua!Y%Ua'x%Ua#`%Uav%Ua!_%Ua%j%Ua!g%Ua~P#/sOa#cq!]#cq'{#cq'x#cq!Y#cq!k#cqv#cq!_#cq%j#cq!g#cq~P!:tO![3nO!]'ZX!k'ZX~P%[O!].vO!k(la~O!].vO!k(la~P!:tO!Y3qO~O$P!na!^!na~PKlO$P!ja!]!ja!^!ja~P#BwO$P!ra!^!ra~P!=aO$P!ta!^!ta~P!?wOg'^X!]'^X~P!,TO!]/ROg(qa~OSfO!_4VO$e4WO~O!^4[O~Ov4]O~P#/sOa$nq!]$nq'{$nq'x$nq!Y$nq!k$nqv$nq!_$nq%j$nq!g$nq~P!:tO!Y4_O~P!&zO!S4`O~O!Q*PO'z*QO({%POn'ja(z'ja!]'ja#`'ja~Og'ja$P'ja~P%-tO!Q*PO'z*QOn'la(z'la({'la!]'la#`'la~Og'la$P'la~P%.gO(s$YO~P#/sO!YfX!Y${X!]fX!]${X!g%SX#`fX~P!0SOp%WO(U=XO~P!1uOp4dO!S%hO![4cO!_%iO(U%gO!]'fX!k'fX~O!]/rO!k)Pa~O!]/rO!g#vO!k)Pa~O!]/rO!g#vO(s'qO!k)Pa~Og$}i!]$}i#`$}i$P$}i~P!1WO![4lO!Y'hX!]'hX~P!3tO!]/{O!Y)Qa~O!]/{O!Y)Qa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#lfX#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#w]X#y]X#{]X#|]X$R]X(b]X(s]X(z]X({]X~Oj%ZX!g%ZX~P%2^Oj4qO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4vO!l%eO(s'qO~Or4{O!g#vO(s'qO~Os!nO!S4|O(WTO(ZUO(f!mO~O(z$}On%bi!Q%bi'z%bi({%bi!]%bi#`%bi~Og%bi$P%bi~P%5}O({%POn%di!Q%di'z%di(z%di!]%di#`%di~Og%di$P%di~P%6pOg(`i!](`i~P!1WO#`5SOg(`i!](`i~P!1WO!k5XO~Oa$pq!]$pq'{$pq'x$pq!Y$pq!k$pqv$pq!_$pq%j$pq!g$pq~P!:tO!Y5]O~O!]5^O!_)RX~P#/sOa${X!_${X%_]X'{${X!]${X~P!0SO%_5aOaoX!_oX'{oX!]oX~P$#OOp5bO(U#nO~O%_5aO~Ob5hO%k5iO(U+sO(WTO(ZUO!]'uX!^'uX~O!]1VO!^)Ya~O[5mO~O`5nO~O[5rO~Oa%nO'{%nO~P#/sO!]5wO#`5yO!^)VX~O!^5zO~Or6QOs!nO!S*jO!b!yO!c!vO!d!vO!|<XO#T!pO#U!pO#V!pO#W!pO#X!pO#[6PO#]!zO(V!lO(WTO(ZUO(f!mO(p!sO~O!^6OO~P%;sOn6VO!_1qO%j6UO~Oh%VOn6VO!_1qO%j6UO~Ob6^O(U#nO(WTO(ZUO!]'tX!^'tX~O!]1|O!^)Wa~O(WTO(ZUO(f6`O~O`6dO~Oj6gO&]6hO~PNXO!k6iO~P%[Oa6kO~Oa6kO~P%[Ob2dO!^6pO&k2cO~P`O!g6rO~O!g6tOh(ki!](ki!^(ki!g(ki!l(kir(ki(s(ki~O#`6uO!]#hi!^#hi~O!]!ai!^!ai~P#BwO!]#hi!^#hi~P#BwOa%nO#`7OO'{%nO~Oa%nO!g#vO#`7OO'{%nO~O!](uq!k(uqa(uq'{(uq~P!:tO!](kO!k(tq~O!S%hO!_%iO#k7VO(U%gO~O!_'aO%j7YO~On7^O!_'aO%j7YO~O#l'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#w'ja#y'ja#{'ja#|'ja'{'ja(b'ja(s'ja!k'ja!Y'ja'x'jav'ja!_'ja%j'ja!g'ja~P%-tO#l'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#w'la#y'la#{'la#|'la'{'la(b'la(s'la!k'la!Y'la'x'lav'la!_'la%j'la!g'la~P%.gO#l$}iP$}iR$}i[$}ia$}ij$}ir$}i!S$}i!]$}i!l$}i!p$}i#R$}i#o$}i#p$}i#q$}i#r$}i#s$}i#t$}i#u$}i#v$}i#w$}i#y$}i#{$}i#|$}i'{$}i(b$}i(s$}i!k$}i!Y$}i'x$}i#`$}iv$}i!_$}i%j$}i!g$}i~P#/sO#l%biP%biR%bi[%bia%bij%bir%bi!S%bi!l%bi!p%bi#R%bi#o%bi#p%bi#q%bi#r%bi#s%bi#t%bi#u%bi#v%bi#w%bi#y%bi#{%bi#|%bi'{%bi(b%bi(s%bi!k%bi!Y%bi'x%biv%bi!_%bi%j%bi!g%bi~P%5}O#l%diP%diR%di[%dia%dij%dir%di!S%di!l%di!p%di#R%di#o%di#p%di#q%di#r%di#s%di#t%di#u%di#v%di#w%di#y%di#{%di#|%di'{%di(b%di(s%di!k%di!Y%di'x%div%di!_%di%j%di!g%di~P%6pO!]'Za!k'Za~P!:tO!].vO!k(li~O$P#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(bVO[#nij#nir#ni#R#ni#p#ni#q#ni#r#ni#s#ni#t#ni#u#ni#v#ni#w#ni#y#ni#{#ni#|#ni$P#ni(s#ni(z#ni({#ni!]#ni!^#ni~O#o#ni~P%NrO#o<aO~P%NrOP$[OR#zOr<mO!Q#yO!S#{O!l#xO!p$[O#o<aO#p<bO#q<bO#r<bO(bVO[#nij#ni#R#ni#t#ni#u#ni#v#ni#w#ni#y#ni#{#ni#|#ni$P#ni(s#ni(z#ni({#ni!]#ni!^#ni~O#s#ni~P&!zO#s<cO~P&!zOP$[OR#zO[<oOj<dOr<mO!Q#yO!S#{O!l#xO!p$[O#R<dO#o<aO#p<bO#q<bO#r<bO#s<cO#t<dO#u<dO#v<nO(bVO#y#ni#{#ni#|#ni$P#ni(s#ni(z#ni({#ni!]#ni!^#ni~O#w#ni~P&%SOP$[OR#zO[<oOj<dOr<mO!Q#yO!S#{O!l#xO!p$[O#R<dO#o<aO#p<bO#q<bO#r<bO#s<cO#t<dO#u<dO#v<nO#w<eO(bVO({#}O#{#ni#|#ni$P#ni(s#ni(z#ni!]#ni!^#ni~O#y<gO~P&'TO#y#ni~P&'TO#w<eO~P&%SOP$[OR#zO[<oOj<dOr<mO!Q#yO!S#{O!l#xO!p$[O#R<dO#o<aO#p<bO#q<bO#r<bO#s<cO#t<dO#u<dO#v<nO#w<eO#y<gO(bVO(z#|O({#}O#|#ni$P#ni(s#ni!]#ni!^#ni~O#{#ni~P&)dO#{<iO~P&)dOa#}y!]#}y'{#}y'x#}y!Y#}y!k#}yv#}y!_#}y%j#}y!g#}y~P!:tO[#nij#nir#ni#R#ni#s#ni#t#ni#u#ni#v#ni#w#ni#y#ni#{#ni#|#ni$P#ni(s#ni!]#ni!^#ni~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#o<aO#p<bO#q<bO#r<bO(bVO(z#ni({#ni~P&,`On>_O!Q*PO'z*QO(z$}O({%POP#niR#ni!S#ni!l#ni!p#ni#o#ni#p#ni#q#ni#r#ni(b#ni~P&,`O#S$dOP(aXR(aX[(aXj(aXn(aXr(aX!Q(aX!S(aX!l(aX!p(aX#R(aX#o(aX#p(aX#q(aX#r(aX#s(aX#t(aX#u(aX#v(aX#w(aX#y(aX#{(aX#|(aX$P(aX'z(aX(b(aX(s(aX(z(aX({(aX!](aX!^(aX~O$P$Qi!]$Qi!^$Qi~P#BwO$P!ri!^!ri~P$+}Og'^a!]'^a~P!1WO!^7pO~O!]'ea!^'ea~P#BwO!Y7qO~P#/sO!g#vO(s'qO!]'fa!k'fa~O!]/rO!k)Pi~O!]/rO!g#vO!k)Pi~Og$}q!]$}q#`$}q$P$}q~P!1WO!Y'ha!]'ha~P#/sO!g7xO~O!]/{O!Y)Qi~P#/sO!]/{O!Y)Qi~O!Y7{O~Oh%VOr8QO!l%eO(s'qO~Oj8SO!g#vO~Or8VO!g#vO(s'qO~O!Q*PO'z*QO({%POn'ka(z'ka!]'ka#`'ka~Og'ka$P'ka~P&5aO!Q*PO'z*QOn'ma(z'ma({'ma!]'ma#`'ma~Og'ma$P'ma~P&6SOg(`q!](`q~P!1WO#`8XOg(`q!](`q~P!1WO!Y8YO~Og%Pq!]%Pq#`%Pq$P%Pq~P!1WOa$py!]$py'{$py'x$py!Y$py!k$pyv$py!_$py%j$py!g$py~P!:tO!g6tO~O!]5^O!_)Ra~O!_'aOP$UaR$Ua[$Uaj$Uar$Ua!Q$Ua!S$Ua!]$Ua!l$Ua!p$Ua#R$Ua#o$Ua#p$Ua#q$Ua#r$Ua#s$Ua#t$Ua#u$Ua#v$Ua#w$Ua#y$Ua#{$Ua#|$Ua(b$Ua(s$Ua(z$Ua({$Ua~O%j7YO~P&8tO%_8^Oa%]i!_%]i'{%]i!]%]i~Oa#cy!]#cy'{#cy'x#cy!Y#cy!k#cyv#cy!_#cy%j#cy!g#cy~P!:tO[8`O~Ob8bO(U+sO(WTO(ZUO~O!]1VO!^)Yi~O`8fO~O(f(}O!]'qX!^'qX~O!]5wO!^)Va~O!^8pO~P%;sO(p!sO~P$&YO#[8qO~O!_1qO~O!_1qO%j8sO~On8vO!_1qO%j8sO~O[8{O!]'ta!^'ta~O!]1|O!^)Wi~O!k9PO~O!k9QO~O!k9TO~O!k9TO~P%[Oa9VO~O!g9WO~O!k9XO~O!](xi!^(xi~P#BwOa%nO#`9aO'{%nO~O!](uy!k(uya(uy'{(uy~P!:tO!](kO!k(ty~O%j9dO~P&8tO!_'aO%j9dO~O#l$}qP$}qR$}q[$}qa$}qj$}qr$}q!S$}q!]$}q!l$}q!p$}q#R$}q#o$}q#p$}q#q$}q#r$}q#s$}q#t$}q#u$}q#v$}q#w$}q#y$}q#{$}q#|$}q'{$}q(b$}q(s$}q!k$}q!Y$}q'x$}q#`$}qv$}q!_$}q%j$}q!g$}q~P#/sO#l'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#w'ka#y'ka#{'ka#|'ka'{'ka(b'ka(s'ka!k'ka!Y'ka'x'kav'ka!_'ka%j'ka!g'ka~P&5aO#l'maP'maR'ma['maa'maj'mar'ma!S'ma!l'ma!p'ma#R'ma#o'ma#p'ma#q'ma#r'ma#s'ma#t'ma#u'ma#v'ma#w'ma#y'ma#{'ma#|'ma'{'ma(b'ma(s'ma!k'ma!Y'ma'x'mav'ma!_'ma%j'ma!g'ma~P&6SO#l%PqP%PqR%Pq[%Pqa%Pqj%Pqr%Pq!S%Pq!]%Pq!l%Pq!p%Pq#R%Pq#o%Pq#p%Pq#q%Pq#r%Pq#s%Pq#t%Pq#u%Pq#v%Pq#w%Pq#y%Pq#{%Pq#|%Pq'{%Pq(b%Pq(s%Pq!k%Pq!Y%Pq'x%Pq#`%Pqv%Pq!_%Pq%j%Pq!g%Pq~P#/sO!]'Zi!k'Zi~P!:tO$P#cq!]#cq!^#cq~P#BwO(z$}OP%baR%ba[%baj%bar%ba!S%ba!l%ba!p%ba#R%ba#o%ba#p%ba#q%ba#r%ba#s%ba#t%ba#u%ba#v%ba#w%ba#y%ba#{%ba#|%ba$P%ba(b%ba(s%ba!]%ba!^%ba~On%ba!Q%ba'z%ba({%ba~P&JXO({%POP%daR%da[%daj%dar%da!S%da!l%da!p%da#R%da#o%da#p%da#q%da#r%da#s%da#t%da#u%da#v%da#w%da#y%da#{%da#|%da$P%da(b%da(s%da!]%da!^%da~On%da!Q%da'z%da(z%da~P&L`On>_O!Q*PO'z*QO({%PO~P&JXOn>_O!Q*PO'z*QO(z$}O~P&L`OR0mO!Q0mO!S0nO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#w}a#y}a#{}a#|}a$P}a'z}a(b}a(s}a(z}a({}a!]}a!^}a~O!Q*PO'z*QOP$taR$ta[$taj$tan$tar$ta!S$ta!l$ta!p$ta#R$ta#o$ta#p$ta#q$ta#r$ta#s$ta#t$ta#u$ta#v$ta#w$ta#y$ta#{$ta#|$ta$P$ta(b$ta(s$ta(z$ta({$ta!]$ta!^$ta~O!Q*PO'z*QOP$vaR$va[$vaj$van$var$va!S$va!l$va!p$va#R$va#o$va#p$va#q$va#r$va#s$va#t$va#u$va#v$va#w$va#y$va#{$va#|$va$P$va(b$va(s$va(z$va({$va!]$va!^$va~On>_O!Q*PO'z*QO(z$}O({%PO~OP%UaR%Ua[%Uaj%Uar%Ua!S%Ua!l%Ua!p%Ua#R%Ua#o%Ua#p%Ua#q%Ua#r%Ua#s%Ua#t%Ua#u%Ua#v%Ua#w%Ua#y%Ua#{%Ua#|%Ua$P%Ua(b%Ua(s%Ua!]%Ua!^%Ua~P''eO$P$nq!]$nq!^$nq~P#BwO$P$pq!]$pq!^$pq~P#BwO!^9qO~O$P9rO~P!1WO!g#vO!]'fi!k'fi~O!g#vO(s'qO!]'fi!k'fi~O!]/rO!k)Pq~O!Y'hi!]'hi~P#/sO!]/{O!Y)Qq~Or9yO!g#vO(s'qO~O[9{O!Y9zO~P#/sO!Y9zO~Oj:RO!g#vO~Og(`y!](`y~P!1WO!]'oa!_'oa~P#/sOa%]q!_%]q'{%]q!]%]q~P#/sO[:WO~O!]1VO!^)Yq~O`:[O~O#`:]O!]'qa!^'qa~O!]5wO!^)Vi~P#BwO!S:_O~O!_1qO%j:bO~O(WTO(ZUO(f:gO~O!]1|O!^)Wq~O!k:jO~O!k:kO~O!k:lO~O!k:lO~P%[O#`:oO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%j:tO~P&8tO!_'aO%j:tO~O$P#}y!]#}y!^#}y~P#BwOP$}iR$}i[$}ij$}ir$}i!S$}i!l$}i!p$}i#R$}i#o$}i#p$}i#q$}i#r$}i#s$}i#t$}i#u$}i#v$}i#w$}i#y$}i#{$}i#|$}i$P$}i(b$}i(s$}i!]$}i!^$}i~P''eO!Q*PO'z*QO({%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#w'ja#y'ja#{'ja#|'ja$P'ja(b'ja(s'ja(z'ja!]'ja!^'ja~O!Q*PO'z*QOP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#w'la#y'la#{'la#|'la$P'la(b'la(s'la(z'la({'la!]'la!^'la~O(z$}OP%biR%bi[%bij%bin%bir%bi!Q%bi!S%bi!l%bi!p%bi#R%bi#o%bi#p%bi#q%bi#r%bi#s%bi#t%bi#u%bi#v%bi#w%bi#y%bi#{%bi#|%bi$P%bi'z%bi(b%bi(s%bi({%bi!]%bi!^%bi~O({%POP%diR%di[%dij%din%dir%di!Q%di!S%di!l%di!p%di#R%di#o%di#p%di#q%di#r%di#s%di#t%di#u%di#v%di#w%di#y%di#{%di#|%di$P%di'z%di(b%di(s%di(z%di!]%di!^%di~O$P$py!]$py!^$py~P#BwO$P#cy!]#cy!^#cy~P#BwO!g#vO!]'fq!k'fq~O!]/rO!k)Py~O!Y'hq!]'hq~P#/sOr;OO!g#vO(s'qO~O[;SO!Y;RO~P#/sO!Y;RO~Og(`!R!](`!R~P!1WOa%]y!_%]y'{%]y!]%]y~P#/sO!]1VO!^)Yy~O!]5wO!^)Vq~O(U;ZO~O!_1qO%j;^O~O!k;aO~O%j;fO~P&8tOP$}qR$}q[$}qj$}qr$}q!S$}q!l$}q!p$}q#R$}q#o$}q#p$}q#q$}q#r$}q#s$}q#t$}q#u$}q#v$}q#w$}q#y$}q#{$}q#|$}q$P$}q(b$}q(s$}q!]$}q!^$}q~P''eO!Q*PO'z*QO({%POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#w'ka#y'ka#{'ka#|'ka$P'ka(b'ka(s'ka(z'ka!]'ka!^'ka~O!Q*PO'z*QOP'maR'ma['maj'man'mar'ma!S'ma!l'ma!p'ma#R'ma#o'ma#p'ma#q'ma#r'ma#s'ma#t'ma#u'ma#v'ma#w'ma#y'ma#{'ma#|'ma$P'ma(b'ma(s'ma(z'ma({'ma!]'ma!^'ma~OP%PqR%Pq[%Pqj%Pqr%Pq!S%Pq!l%Pq!p%Pq#R%Pq#o%Pq#p%Pq#q%Pq#r%Pq#s%Pq#t%Pq#u%Pq#v%Pq#w%Pq#y%Pq#{%Pq#|%Pq$P%Pq(b%Pq(s%Pq!]%Pq!^%Pq~P''eOg%f!Z!]%f!Z#`%f!Z$P%f!Z~P!1WO!Y;jO~P#/sOr;kO!g#vO(s'qO~O[;mO!Y;jO~P#/sO!]'qq!^'qq~P#BwO!]#h!Z!^#h!Z~P#BwO#l%f!ZP%f!ZR%f!Z[%f!Za%f!Zj%f!Zr%f!Z!S%f!Z!]%f!Z!l%f!Z!p%f!Z#R%f!Z#o%f!Z#p%f!Z#q%f!Z#r%f!Z#s%f!Z#t%f!Z#u%f!Z#v%f!Z#w%f!Z#y%f!Z#{%f!Z#|%f!Z'{%f!Z(b%f!Z(s%f!Z!k%f!Z!Y%f!Z'x%f!Z#`%f!Zv%f!Z!_%f!Z%j%f!Z!g%f!Z~P#/sOr;vO!g#vO(s'qO~O!Y;wO~P#/sOr<OO!g#vO(s'qO~O!Y<PO~P#/sOP%f!ZR%f!Z[%f!Zj%f!Zr%f!Z!S%f!Z!l%f!Z!p%f!Z#R%f!Z#o%f!Z#p%f!Z#q%f!Z#r%f!Z#s%f!Z#t%f!Z#u%f!Z#v%f!Z#w%f!Z#y%f!Z#{%f!Z#|%f!Z$P%f!Z(b%f!Z(s%f!Z!]%f!Z!^%f!Z~P''eOr<SO!g#vO(s'qO~Ov(gX~P1qO!Q%rO~P!)[O(V!lO~P!)[O!YfX!]fX#`fX~P%2^OP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#lfX#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#w]X#y]X#{]X#|]X$R]X(b]X(s]X(z]X({]X~O!gfX!k]X!kfX(sfX~P'LcOP<WOQ<WOSfOd>SOe!iOpkOr<WOskOtkOzkO|<WO!O<WO!SWO!WkO!XkO!_XO!i<ZO!lZO!o<WO!p<WO!q<WO!s<[O!u<_O!x!hO$X!kO$o>QO(U)^O(WTO(ZUO(bVO(p[O~O!]<kO!^$ra~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<vO!S${O!_$|O!i>XO!l$xO#k<|O$X%`O$u<xO$w<zO$z%aO(U(wO(WTO(ZUO(b$uO(z$}O({%PO~Ol)eO~P(#XOr!eX(s!eX~P#!nO!^]X!^fX~P'LcO!YfX!Y${X!]fX!]${X#`fX~P!0SO#l<`O~O!g#vO#l<`O~O#`<pO~Oj<dO~O#`=PO!](xX!^(xX~O#`<pO!](vX!^(vX~O#l=QO~Og=SO~P!1WO#l=YO~O#l=ZO~Og=SO(U&ZO~O!g#vO#l=[O~O!g#vO#l=QO~O$P=]O~P#BwO#l=^O~O#l=_O~O#l=dO~O#l=eO~O#l=fO~O#l=gO~O$P=hO~P!1WO$P=iO~P!1WOl=tO~P7eOk#S#T#U#W#X#[#j#k#v$o$u$w$z%^%_%i%j%k%r%t%w%x%z%|~(PT#p!X'}(V#qs#o#rr!Q(O$^(U$`(f~",goto:"$9_)^PPPPPP)_PP)bP)sP+X/^PPPP6lPP7SPP=PPPP@sPA]PA]PPPA]PCePA]PA]PA]PCiPCnPD]PIVPPPIZPPPPIZL^PPPLdMUPIZPIZPP! dIZPPPIZPIZP!#kIZP!'R!(W!(aP!)T!)X!)T!,fPPPPPPP!-V!(WPP!-g!/XP!2hIZIZ!2m!5y!:g!:g!>f!>nPPP!>tIZPPPPPPPPP!BTP!CbPPIZ!DsPIZPIZIZIZIZIZPIZ!FVP!IaP!LgP!Lk!Lu!Ly!LyP!I^P!L}!L}P#!TP#!XIZPIZ#!_#%dCiA]PA]PA]A]P#&qA]A]#)TA]#+{A]#.XA]A]#.w#1]#1]#1b#1k#1]#1vPP#1]PA]#2`A]#6_A]A]6lPPP#:dPPP#:}#:}P#:}P#;e#:}PP#;kP#;bP#;b#<O#;b#<j#<p#<s)bP#<v)bP#=P#=P#=PP)bP)bP)bP)bPP)bP#=V#=YP#=Y)bP#=^P#=aP)bP)bP)bP)bP)bP)b)bPP#=g#=m#=x#>O#>U#>[#>b#>p#>v#?Q#?W#?b#?h#?x#@O#@p#AS#AY#A`#An#BT#Cx#DW#D_#Ey#FX#Gy#HX#H_#He#Hk#Hu#H{#IR#I]#Io#IuPPPPPPPPPPP#I{PPPPPPP#Jp#M}$ g$ n$ vPPP$'bP$'k$*d$0}$1Q$1T$2S$2V$2^$2fP$2l$2oP$3]$3a$4X$5g$5l$6SPP$6X$6_$6c$6f$6j$6n$7j$8R$8j$8n$8q$8t$9O$9R$9V$9ZR!|RoqOXst!Z#d%m&r&t&u&w,u,z2^2aY!vQ'a-g1q5}Q%tvQ%|yQ&T|Q&j!VS'W!e-^Q'g!iS'm!r!yU*l$|*[*pQ+q%}S,O&V&WQ,f&dQ-e'`Q-o'hQ-w'nQ0^*rQ1d,QQ1{,gR<}<[%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'c's(U(W(^(e(y({)P*O*j+Y+_,r,u,z-k-s.R.X.v.}/p0_0n0t1U1t2U2V2X2Z2^2a2c3S3Y3n4|6V6g6h6k7O8v9V9aS#q]<X!r)`$Z$n'X)t-Y-a/X2q4V5y6u:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>TU+Q%]<u<vQ+v&PQ,h&gQ,o&oQ0z+iQ1P+kQ1[+wQ2T,mQ3b.iQ5b1OQ5h1VQ6^1|Q7[3fQ8b5iR9g7^'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'c's(U(W(^(e(y({)P)t*O*j+Y+_+i,r,u,z-Y-a-k-s.R.X.i.v.}/X/p0_0n0t1U1t2U2V2X2Z2^2a2c2q3S3Y3f3n4V4|5y6V6g6h6k6u7O7^8v9V9a:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>T!S!nQ!r!v!y!z$|'W'`'a'm'n'o*l*p*r*s-^-e-g-w0^0a1q5}6P%[$ti#v$b$c$d$x${%O%Q%^%_%c)z*S*U*W*Z*b*h*x*y+h+k,U,X.h/R/f/o/z/{/}0b0d0k0l0q1h1k1s3e4`4a4l4q5S5^5a6U7Y7x8S8X8^8s9d9r9{:R:b:t;S;^;f;m<n<o<q<r<s<t<w<x<y<z<{<|=T=U=V=W=Y=Z=^=_=`=a=b=c=d=e=h=i>Q>Y>Z>^>_Q&X|S'U!e*[S']%i-bQ+v&PQ,R&WQ,h&gQ0p+TQ1[+wQ1a+}Q2S,lQ2T,mQ5h1VQ5q1cQ6^1|Q6a2OQ6b2RQ8b5iQ8e5nQ9O6dQ:Z8fQ:h8{R;X:[rnOXst!V!Z#d%m&i&r&t&u&w,u,z2^2aR,j&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'c's(W(^(e(y({)P)t*O*j+Y+_+i,r,u,z-Y-a-k-s.R.X.i.v.}/X/p0_0n0t1U1t2U2V2X2Z2^2a2c2q3S3Y3f3n4V4|5y6V6g6h6k6u7O7^8v9V9a:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>S>T[#]WZ#W#Z'X(U!b%jm#h#i#l$x%e%h(_(i(j(k*Z*_*c+[+^+`,q-W.V.].^._.a/o/r2f3^3_4c6t7VQ%wxQ%{yW&Q|&V&W,QQ&_!TQ'd!hQ'f!iQ(r#sS+p%|%}Q+t&PQ,a&bQ,e&dS-n'g'hQ.k(sQ1T+qQ1Z+wQ1]+xQ1`+|Q1v,bS1z,f,gQ3O-oQ5g1VQ5k1YQ5p1bQ6]1{Q8a5iQ8d5mQ8h5rQ:V8`R;V:W!U$zi$d%O%Q%^%_%c*S*U*b*x*y/R/z0b0d0k0l0q4a5S8X9r>Q>Y>Z!^%yy!i!u%{%|%}'V'f'g'h'l'v*k+p+q-Z-n-o-v0T0W1T2w3O3V4t4u4x8P9}Q+j%wQ,V&[Q,Y&]Q,d&dQ.j(rQ1u,aU1y,e,f,gQ3g.kQ6W1vS6[1z1{Q8z6]#f>U#v$b$c$x${)z*W*Z*h+h+k,U,X.h/f/o/{/}1h1k1s3e4`4l4q5^5a6U7Y7x8S8^8s9d9{:R:b:t;S;^;f;m<q<s<w<y<{=T=V=Y=^=`=b=d=h>^>_o>V<n<o<r<t<x<z<|=U=W=Z=_=a=c=e=iW%Ti%V*z>QS&[!Q&iQ&]!RQ&^!SU+O%[%d=tR,T&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)z*S*U*W*Z*b*h*x*y+h+k,U,X.h/R/f/o/z/{/}0b0d0k0l0q1h1k1s3e4`4a4l4q5S5^5a6U7Y7x8S8X8^8s9d9r9{:R:b:t;S;^;f;m<n<o<q<r<s<t<w<x<y<z<{<|=T=U=V=W=Y=Z=^=_=`=a=b=c=d=e=h=i>Q>Y>Z>^>_T){$u)|V+Q%]<u<vW']!e%i*[-bS)O#y#zQ+e%rQ+{&SS.d(n(oQ1l,ZQ5V0mR8k5w'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'c's(U(W(^(e(y({)P)t*O*j+Y+_+i,r,u,z-Y-a-k-s.R.X.i.v.}/X/p0_0n0t1U1t2U2V2X2Z2^2a2c2q3S3Y3f3n4V4|5y6V6g6h6k6u7O7^8v9V9a:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>T$i$^c#Y#e%q%s%u(T(Z(u(z)S)T)U)V)W)X)Y)Z)[)])_)a)c)h)r+f+z-[-z.P.U.W.u.x.|/O/P/Q/d0r2o2t3Q3X3m3r3s3t3u3v3w3x3y3z3{3|3}4O4R4S4Z5Z5e6w6}7S7c7d7m7n8m9Z9_9i9o9p:q;Y;b<Y=wT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'c's(U(W(^(e(y({)P)t*O*j+Y+_+i,r,u,z-Y-a-k-s.R.X.i.v.}/X/p0_0n0t1U1t2U2V2X2Z2^2a2c2q3S3Y3f3n4V4|5y6V6g6h6k6u7O7^8v9V9a:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>TQ'Y!eR2r-^!W!nQ!e!r!v!y!z$|'W'`'a'm'n'o*[*l*p*r*s-^-e-g-w0^0a1q5}6PR1n,]nqOXst!Z#d%m&r&t&u&w,u,z2^2aQ&y!^Q'w!xS(t#u<`Q+n%zQ,_&_Q,`&aQ-l'eQ-y'pS.t(y=QS0s+Y=[Q1R+oQ1p,^Q2e,|Q2g,}Q2n-XQ2|-mQ3P-qS5[0t=fQ5c1SS5f1U=gQ6v2pQ6z2}Q7P3UQ8_5dQ9[6xQ9]6{Q9`7QR:n9X$d$]c#Y#e%s%u(T(Z(u(z)S)T)U)V)W)X)Y)Z)[)])_)a)c)h)r+f+z-[-z.P.U.W.u.x.|/P/Q/d0r2o2t3Q3X3m3r3s3t3u3v3w3x3y3z3{3|3}4O4R4S4Z5Z5e6w6}7S7c7d7m7n8m9Z9_9i9o9p:q;Y;b<Y=wS(p#p'jQ)Q#zS+d%q/OS.e(o(qR3`.f'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'c's(U(W(^(e(y({)P)t*O*j+Y+_+i,r,u,z-Y-a-k-s.R.X.i.v.}/X/p0_0n0t1U1t2U2V2X2Z2^2a2c2q3S3Y3f3n4V4|5y6V6g6h6k6u7O7^8v9V9a:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>TS#q]<XQ&t!XQ&u!YQ&w![Q&x!]R2],xQ'b!hQ+g%wQ-j'dS.g(r+jQ2z-iW3d.j.k0y0{Q6y2{W7W3a3c3g5`U9c7X7Z7]U:s9e9f9hS;d:r:uQ;r;eR;z;sU!wQ'a-gT5{1q5}!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(k,u,z.^2^2a]!pQ!r'a-g1q5}T#q]<X%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'c's(U(W(^(e(y({)P*O*j+Y+_+i,r,u,z-k-s.R.X.i.v.}/p0_0n0t1U1t2U2V2X2Z2^2a2c3S3Y3f3n4|6V6g6h6k7O7^8v9V9aS)O#y#zS.d(n(o!s=m$Z$n'X)t-Y-a/X2q4V5y6u:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>TU$fd)`,oS(q#p'jU*w%R(x4QU0o+P.p7iQ5`0zQ7X3bQ9f7[R:u9gm!tQ!r!v!y!z'a'm'n'o-g-w1q5}6PQ'u!uS(g#g2WS-u'l'xQ/u*^Q0T*kQ3W-xQ4h/vQ4t0VQ4u0WQ4z0`Q7t4bS8P4v4xS8T4{4}Q9t7uQ9x7{Q9}8QQ:S8VS:}9y9zS;i;O;RS;u;j;kS;};v;wS<R<O<PR<U<SQ#wbQ't!uS(f#g2WS(h#m+XQ+Z%fQ+l%xQ+r&OU-t'l'u'xQ.Y(gU/t*^*a/yQ0U*kQ0X*mQ1Q+mQ1w,cS3T-u-xQ3].bS4g/u/vQ4p0RS4s0T0`Q4w0YQ6Y1xQ7R3WS7s4b4dQ7w4hU8O4t4z4}Q8R4yQ8x6ZS9s7t7uQ9w7{Q:P8TQ:Q8UQ:e8yQ:{9tS:|9x9zQ;U:SQ;`:fS;h:};RS;t;i;jS;|;u;wS<Q;}<PQ<T<RQ<V<UQ=p=kQ=|=uR=}=vV!wQ'a-g%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'c's(U(W(^(e(y({)P*O*j+Y+_+i,r,u,z-k-s.R.X.i.v.}/p0_0n0t1U1t2U2V2X2Z2^2a2c3S3Y3f3n4|6V6g6h6k7O7^8v9V9aS#wz!j!r=j$Z$n'X)t-Y-a/X2q4V5y6u:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>TR=p>S%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'c's(U(W(^(e(y({)P*O*j+Y+_+i,r,u,z-k-s.R.X.i.v.}/p0_0n0t1U1t2U2V2X2Z2^2a2c3S3Y3f3n4|6V6g6h6k7O7^8v9V9aQ%fj!^%xy!i!u%{%|%}'V'f'g'h'l'v*k+p+q-Z-n-o-v0T0W1T2w3O3V4t4u4x8P9}S&Oz!jQ+m%yQ,c&dW1x,d,e,f,gU6Z1y1z1{S8y6[6]Q:f8z!r=k$Z$n'X)t-Y-a/X2q4V5y6u:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>TQ=u>RR=v>S%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'c's(W(^(e(y({)P*O*j+Y+_+i,r,u,z-k-s.R.X.i.v.}/p0_0n0t1U1t2U2V2X2Z2^2a2c3S3Y3f3n4|6V6g6h6k7O7^8v9V9aY#bWZ#W#Z(U!b%jm#h#i#l$x%e%h(_(i(j(k*Z*_*c+[+^+`,q-W.V.].^._.a/o/r2f3^3_4c6t7VQ,p&o!p=l$Z$n)t-Y-a/X2q4V5y6u:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>TR=o'XU'^!e%i*[R2u-bX'[!e%i*[-b%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'c's(U(W(^(e(y({)P*O*j+Y+_,r,u,z-k-s.R.X.v.}/p0_0n0t1U1t2U2V2X2Z2^2a2c3S3Y3n4|6V6g6h6k7O8v9V9a!r)`$Z$n'X)t-Y-a/X2q4V5y6u:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>TQ,o&oQ0z+iQ3b.iQ7[3fR9g7^!b$Tc#Y%q(T(Z(u(z)[)])a)h+z-z.P.U.W.u.x/d0r3Q3X3m3}5Z5e6}7S7c9_:q<Y!P<f)_)r-[/O2o2t3r3{3|4R4Z6w7d7m7n8m9Z9i9o9p;Y;b=w!f$Vc#Y%q(T(Z(u(z)X)Y)[)])a)h+z-z.P.U.W.u.x/d0r3Q3X3m3}5Z5e6}7S7c9_:q<Y!T<h)_)r-[/O2o2t3r3x3y3{3|4R4Z6w7d7m7n8m9Z9i9o9p;Y;b=w!^$Zc#Y%q(T(Z(u(z)a)h+z-z.P.U.W.u.x/d0r3Q3X3m3}5Z5e6}7S7c9_:q<YQ4a/mz>T)_)r-[/O2o2t3r4R4Z6w7d7m7n8m9Z9i9o9p;Y;b=wQ>Y>[R>Z>]'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'c's(U(W(^(e(y({)P)t*O*j+Y+_+i,r,u,z-Y-a-k-s.R.X.i.v.}/X/p0_0n0t1U1t2U2V2X2Z2^2a2c2q3S3Y3f3n4V4|5y6V6g6h6k6u7O7^8v9V9a:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>TS$oh$pR4W/W'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'c's(U(W(^(e(y({)P)t*O*j+Y+_+i,r,u,z-Y-a-k-s.R.X.i.v.}/W/X/p0_0n0t1U1t2U2V2X2Z2^2a2c2q3S3Y3f3n4V4|5y6V6g6h6k6u7O7^8v9V9a:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>TT$kf$qQ$ifS)k$l)oR)w$qT$jf$qT)m$l)o'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'c's(U(W(^(e(y({)P)t*O*j+Y+_+i,r,u,z-Y-a-k-s.R.X.i.v.}/W/X/p0_0n0t1U1t2U2V2X2Z2^2a2c2q3S3Y3f3n4V4|5y6V6g6h6k6u7O7^8v9V9a:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>TT$oh$pQ$rhR)v$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'c's(U(W(^(e(y({)P*O*j+Y+_+i,r,u,z-k-s.R.X.i.v.}/p0_0n0t1U1t2U2V2X2Z2^2a2c3S3Y3f3n4|6V6g6h6k7O7^8v9V9a!s>R$Z$n'X)t-Y-a/X2q4V5y6u:]:o<W<Z<[<_<`<a<b<c<d<e<f<g<h<i<j<k<m<p<}=P=Q=S=[=]=f=g>T#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'c)P)t*j+_+i,r,u,z-k.i/X/p0_0n1t2U2V2X2Z2^2a2c3f4V4|6V6g6h6k7^8v9V!U%Ri$d%O%Q%^%_%c*S*U*b*x*y/R/z0b0d0k0l0q4a5S8X9r>Q>Y>Z#f(x#v$b$c$x${)z*W*Z*h+h+k,U,X.h/f/o/{/}1h1k1s3e4`4l4q5^5a6U7Y7x8S8^8s9d9{:R:b:t;S;^;f;m<q<s<w<y<{=T=V=Y=^=`=b=d=h>^>_Q+U%aQ/e*Po4Q<n<o<r<t<x<z<|=U=W=Z=_=a=c=e=i!U$yi$d%O%Q%^%_%c*S*U*b*x*y/R/z0b0d0k0l0q4a5S8X9r>Q>Y>ZQ*d$zU*m$|*[*pQ+V%bQ0Y*n#f=r#v$b$c$x${)z*W*Z*h+h+k,U,X.h/f/o/{/}1h1k1s3e4`4l4q5^5a6U7Y7x8S8^8s9d9{:R:b:t;S;^;f;m<q<s<w<y<{=T=V=Y=^=`=b=d=h>^>_n=s<n<o<r<t<x<z<|=U=W=Z=_=a=c=e=iQ=x>UQ=y>VQ=z>WR={>X!U%Ri$d%O%Q%^%_%c*S*U*b*x*y/R/z0b0d0k0l0q4a5S8X9r>Q>Y>Z#f(x#v$b$c$x${)z*W*Z*h+h+k,U,X.h/f/o/{/}1h1k1s3e4`4l4q5^5a6U7Y7x8S8^8s9d9{:R:b:t;S;^;f;m<q<s<w<y<{=T=V=Y=^=`=b=d=h>^>_o4Q<n<o<r<t<x<z<|=U=W=Z=_=a=c=e=inoOXst!Z#d%m&r&t&u&w,u,z2^2aS*g${*ZQ-T'OQ-U'QR4k/{%[%Si#v$b$c$d$x${%O%Q%^%_%c)z*S*U*W*Z*b*h*x*y+h+k,U,X.h/R/f/o/z/{/}0b0d0k0l0q1h1k1s3e4`4a4l4q5S5^5a6U7Y7x8S8X8^8s9d9r9{:R:b:t;S;^;f;m<n<o<q<r<s<t<w<x<y<z<{<|=T=U=V=W=Y=Z=^=_=`=a=b=c=d=e=h=i>Q>Y>Z>^>_Q,W&]Q1j,YQ5u1iR8j5vV*o$|*[*pU*o$|*[*pT5|1q5}S0R*j/pQ4y0_T8U4|:_Q+l%xQ0X*mQ1Q+mQ1w,cQ6Y1xQ8x6ZQ:e8yR;`:f!U%Oi$d%O%Q%^%_%c*S*U*b*x*y/R/z0b0d0k0l0q4a5S8X9r>Q>Y>Zx*S$v)f*T*v+W/x0f0g4T4i5T5U5Y7r8W:T:z=q>O>PS0b*u0c#f<q#v$b$c$x${)z*W*Z*h+h+k,U,X.h/f/o/{/}1h1k1s3e4`4l4q5^5a6U7Y7x8S8^8s9d9{:R:b:t;S;^;f;m<q<s<w<y<{=T=V=Y=^=`=b=d=h>^>_n<r<n<o<r<t<x<z<|=U=W=Z=_=a=c=e=i!d=T(v)d*]*f.l.o.s/a/m0O0x1g3j4^4j4n5t7_7b7y7|8Z8]9v:O:U;P;T;g;l;x>[>]`=U4P7e7h7l9j:v:y;{S=`.n3kT=a7g9m!U%Qi$d%O%Q%^%_%c*S*U*b*x*y/R/z0b0d0k0l0q4a5S8X9r>Q>Y>Z|*U$v)f*V*u+W/i/x0f0g4T4i5O5T5U5Y7r8W:T:z=q>O>PS0d*v0e#f<s#v$b$c$x${)z*W*Z*h+h+k,U,X.h/f/o/{/}1h1k1s3e4`4l4q5^5a6U7Y7x8S8^8s9d9{:R:b:t;S;^;f;m<q<s<w<y<{=T=V=Y=^=`=b=d=h>^>_n<t<n<o<r<t<x<z<|=U=W=Z=_=a=c=e=i!h=V(v)d*]*f.m.n.s/a/m0O0x1g3h3j4^4j4n5t7_7`7b7y7|8Z8]9v:O:U;P;T;g;l;x>[>]d=W4P7f7g7l9j9k:v:w:y;{S=b.o3lT=c7h9nrnOXst!V!Z#d%m&i&r&t&u&w,u,z2^2aQ&f!UR,r&ornOXst!V!Z#d%m&i&r&t&u&w,u,z2^2aR&f!UQ,[&^R1f,TsnOXst!V!Z#d%m&i&r&t&u&w,u,z2^2aQ1r,aS6T1u1vU8r6R6S6WS:a8t8uS;[:`:cQ;o;]R;y;pQ&m!VR,k&iR6a2OR:h8{W&Q|&V&W,QR1]+xQ&r!WR,u&sR,{&xT2_,z2aR-P&yQ-O&yR2h-PQ'z!{R-{'zSsOtQ#dXT%ps#dQ#OTR'|#OQ#RUR(O#RQ)|$uR/b)|Q#UVR(R#UQ#XWU(X#X(Y.SQ(Y#YR.S(ZQ-_'YR2s-_Q.w(zS3o.w3pR3p.xQ-g'aR2x-gY!rQ'a-g1q5}R'k!rQ/S)fR4U/SU#_W%h*ZU(`#_(a.TQ(a#`R.T([Q-c'^R2v-ct`OXst!V!Z#d%m&i&k&r&t&u&w,u,z2^2aS#hZ%eU#r`#h.^R.^(kQ(l#jQ.Z(hW.c(l.Z3Z7TQ3Z.[R7T3[Q)o$lR/Y)oQ$phR)u$pQ$`cU)b$`.O<lQ.O<YR<l)rQ/s*^W4e/s4f7v9uU4f/t/u/vS7v4g4hR9u7w$e*R$v(v)d)f*]*f*u*v+R+S+W.n.o.q.r.s/a/i/k/m/x0O0f0g0x1g3h3i3j4P4T4^4i4j4n5O5Q5T5U5Y5t7_7`7a7b7g7h7j7k7l7r7y7|8W8Z8]9j9k9l9v:O:T:U:v:w:x:y:z;P;T;g;l;x;{=q>O>P>[>]Q/|*fU4m/|4o7zQ4o0OR7z4nS*p$|*[R0[*px*T$v)f*u*v+W/x0f0g4T4i5T5U5Y7r8W:T:z=q>O>P!d.l(v)d*]*f.n.o.s/a/m0O0x1g3j4^4j4n5t7_7b7y7|8Z8]9v:O:U;P;T;g;l;x>[>]U/j*T.l7ea7e4P7g7h7l9j:v:y;{Q0c*uQ3k.nU5P0c3k9mR9m7g|*V$v)f*u*v+W/i/x0f0g4T4i5O5T5U5Y7r8W:T:z=q>O>P!h.m(v)d*]*f.n.o.s/a/m0O0x1g3h3j4^4j4n5t7_7`7b7y7|8Z8]9v:O:U;P;T;g;l;x>[>]U/l*V.m7fe7f4P7g7h7l9j9k:v:w:y;{Q0e*vQ3l.oU5R0e3l9nR9n7hQ*{%UR0i*{Q5_0xR8[5_Q+a%kR0w+aQ5x1lS8l5x:^R:^8mQ,^&_R1o,^Q5}1qR8o5}Q1},hS6_1}8|R8|6aQ1W+tW5j1W5l8c:XQ5l1ZQ8c5kR:X8dQ+y&QR1^+yQ2a,zR6o2aYrOXst#dQ&v!ZQ+c%mQ,t&rQ,v&tQ,w&uQ,y&wQ2[,uS2_,z2aR6n2^Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'r!uQ+b%lQ+n%zQ,S&XQ,j&mQ-R&|W-r'l't'u'xQ-y'pQ0Z*oQ1R+oQ1e,RS2Q,k,nQ2i-QQ2j-TQ2k-UQ3P-qW3R-t-u-x-zQ5c1SQ5o1aQ5s1gQ6X1wQ6c2SQ6m2]U6|3Q3T3WQ7P3UQ8_5dQ8g5qQ8i5tQ8n5|Q8w6YQ8}6bS9^6}7RQ9`7QQ:Y8eQ:d8xQ:i9OQ:p9_Q;W:ZQ;_:eQ;c:qQ;n;XR;q;`Q%zyQ'e!iQ'p!uU+o%{%|%}Q-X'VU-m'f'g'hS-q'l'vQ0S*kS1S+p+qQ2p-ZS2}-n-oQ3U-vS4r0T0WQ5d1TQ6x2wQ6{3OQ7Q3VU7}4t4u4xQ9|8PR;Q9}S$wi>QR*|%VU%Ui%V>QR0h*zQ$viS(v#v+kS)d$b$cQ)f$dQ*]$xS*f${*ZQ*u%OQ*v%QQ+R%^Q+S%_Q+W%cQ.n<qQ.o<sQ.q<wQ.r<yQ.s<{Q/a)zQ/i*SQ/k*UQ/m*WQ/x*bS0O*h/oQ0f*xQ0g*yl0x+h,X.h1k1s3e6U7Y8s9d:b:t;^;fQ1g,UQ3h=TQ3i=VQ3j=YS4P<n<oQ4T/RS4^/f4`Q4i/zQ4j/{Q4n/}Q5O0bQ5Q0dQ5T0kQ5U0lQ5Y0qQ5t1hQ7_=^Q7`=`Q7a=bQ7b=dQ7g<rQ7h<tQ7j<xQ7k<zQ7l<|Q7r4aQ7y4lQ7|4qQ8W5SQ8Z5^Q8]5aQ9j=ZQ9k=UQ9l=WQ9v7xQ:O8SQ:T8XQ:U8^Q:v=_Q:w=aQ:x=cQ:y=eQ:z9rQ;P9{Q;T:RQ;g=hQ;l;SQ;x;mQ;{=iQ=q>QQ>O>YQ>P>ZQ>[>^R>]>_Q+P%]Q.p<uR7i<vnpOXst!Z#d%m&r&t&u&w,u,z2^2aQ!fPS#fZ#oQ&|!`W'i!o*j0_4|Q(Q#SQ)R#{Q)s$nS,n&k&nQ,s&oQ-Q&{S-V'T/pQ-i'cQ.z)PQ/^)tQ0u+_Q0{+iQ2Y,rQ2{-kQ3c.iQ4Y/XQ5W0nQ6S1tQ6e2UQ6f2VQ6j2XQ6l2ZQ6q2cQ7]3fQ7o4VQ8u6VQ9R6gQ9S6hQ9U6kQ9h7^Q:c8vR:m9V#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'c)P*j+_+i,r,u,z-k.i/p0_0n1t2U2V2X2Z2^2a2c3f4|6V6g6h6k7^8v9VQ#YWQ#eYQ%quQ%svS%uw!gS(T#W(WQ(Z#ZQ(u#uQ(z#xQ)S$OQ)T$PQ)U$QQ)V$RQ)W$SQ)X$TQ)Y$UQ)Z$VQ)[$WQ)]$XQ)_$ZQ)a$_Q)c$aQ)h$eW)r$n)t/X4VQ+f%tQ+z&RS-['X2qQ-z'sS.P(U.RQ.U(^Q.W(eQ.u(yQ.x({Q.|<WQ/O<ZQ/P<[Q/Q<_Q/d*OQ0r+YQ2o-YQ2t-aQ3Q-sQ3X.XQ3m.vQ3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{<iQ3|<jQ3}.}Q4O<mQ4R<pQ4S<}Q4Z<kQ5Z0tQ5e1UQ6w=PQ6}3SQ7S3YQ7c3nQ7d=QQ7m=SQ7n=[Q8m5yQ9Z6uQ9_7OQ9i=]Q9o=fQ9p=gQ:q9aQ;Y:]Q;b:oQ<Y#SR=w>TR#[WR'Z!el!tQ!r!v!y!z'a'm'n'o-g-w1q5}6PS'V!e-^U*k$|*[*pS-Z'W'`S0W*l*rQ0`*sQ2w-eQ4x0^R4}0aR(|#xQ!fQT-f'a-g]!qQ!r'a-g1q5}Q#p]R'j<XR)g$dY!uQ'a-g1q5}Q'l!rS'v!v!yS'x!z6PS-v'm'nQ-x'oR3V-wT#kZ%eS#jZ%eS%km,qU(h#h#i#lS.[(i(jQ.`(kQ0v+`Q3[.]U3].^._.aS7U3^3_R9b7Vd#^W#W#Z%h(U(_*Z+[.V/or#gZm#h#i#l%e(i(j(k+`.].^._.a3^3_7VS*^$x*cQ/v*_Q2W,qQ2m-WQ4b/rQ6s2fQ7u4cQ9Y6tT=n'X+^V#aW%h*ZU#`W%h*ZS(V#W(_U([#Z+[/oS-]'X+^T.Q(U.VV'_!e%i*[Q$lfR)y$qT)n$l)oR4X/WT*`$x*cT*i${*ZQ0y+hQ1i,XQ3a.hQ5v1kQ6R1sQ7Z3eQ8t6UQ9e7YQ:`8sQ:r9dQ;]:bQ;e:tQ;p;^R;s;fnqOXst!Z#d%m&r&t&u&w,u,z2^2aQ&l!VR,j&itmOXst!U!V!Z#d%m&i&r&t&u&w,u,z2^2aR,q&oT%lm,qR1m,ZR,i&gQ&U|S,P&V&WR1`,QR+u&PT&p!W&sT&q!W&sT2`,z2a",nodeNames:"⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty VariableDefinition Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",maxTerm:381,context:$c,nodeProps:[["isolate",-8,5,6,14,37,39,51,53,55,""],["group",-26,9,17,19,68,208,212,216,217,219,222,225,235,238,244,246,248,250,253,259,265,267,269,271,273,275,276,"Statement",-34,13,14,32,35,36,42,51,54,55,57,62,70,72,76,80,82,84,85,110,111,121,122,137,140,142,143,144,145,146,148,149,168,170,172,"Expression",-23,31,33,37,41,43,45,174,176,178,179,181,182,183,185,186,187,189,190,191,202,204,206,207,"Type",-3,88,103,109,"ClassItem"],["openedBy",23,"<",38,"InterpolationStart",56,"[",60,"{",73,"(",161,"JSXStartCloseTag"],["closedBy",-2,24,169,">",40,"InterpolationEnd",50,"]",61,"}",74,")",166,"JSXEndTag"]],propSources:[Rc],skippedNodes:[0,5,6,279],repeatNodeCount:37,tokenData:"$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$j&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$j&j([!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU([!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$j&j(XpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(XpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Xp([!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$j&j(Xp([!b'}0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(Y#S$j&j(O0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$j&j(Xp([!b(O0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$j&j!p),Q(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#w(Ch$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#w(Ch$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(W':f$j&j([!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$j&j([!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$j&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$e`$j&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$e``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$e`$j&j([!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ([!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$e`([!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$j&j(Xp([!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$j&j(Xp([!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$j&j([!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$j&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS([!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$j&j(XpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(XpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Xp([!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$j&j(p%1l(Xp([!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$j&j(Xp([!b$^#t(U,2j(f$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$j&j(Xp([!b$^#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$j&j(Xp([!b#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$j&j$R(Ch(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva({+JY$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$j&j#{(Ch(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Z';W$j&j(XpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$j&j(XpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$j&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$e`$j&j(XpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(XpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$e`(XpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$j&j(Xp([!b(V%&f#r(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$j&j(Xp([!b#o(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$j&j(Xp([!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$j&j(Xp([!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$j&j(Xp([!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$j&j(Xp([!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$j&j(Xp([!b#p(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$j&j(Xp([!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$j&j([!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$j&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$j&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$j&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$j&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$j&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$j&j([!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ([!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse([!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX([!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$j&j([!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$j&j(Xp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$j&j(Xp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Xp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Xp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(XpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$j&j(XpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$j&j(Xp([!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Xp([!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Xp([!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Xp([!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$j&j(Xp([!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$j&j(Xp([!b(P0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$j&j(Xp([!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$j&j([!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$j&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW([!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$j&j(XpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(XpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Xp([!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$j&j$R(Ch(Xp([!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$[#t$j&j(Xp([!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$j&j(Xp([!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$j&j(Xp([!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$j&j(Xp([!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$j&j(Xp([!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$j&j(Xp([!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$j&j(Xp([!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$j&j$P)Lv(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Xp([!b$o7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$l&j(Xp([!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#s(Ch(Xp([!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$R(Ch(Xp([!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#t(Ch(Xp([!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#l(Cl$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#t(Ch$g#|$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#t(Ch$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#s(Ch$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#s(Ch$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(s(Ct$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$j&j#|(Ch(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$j&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$j&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$j&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$j&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$j&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$j&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#y(Ch$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$j&j(Xp([!b(b+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$j&j(Xp([!b(U,2j$`#t(f$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$j&j(Xp([!b$`#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Xp([!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(z+JY$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$j&j(Xp([!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$j&j(Xp([!b'}0/l$^#t(U,2j(f$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$j&j(Xp([!b(O0/l$^#t(U,2j(f$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",tokenizers:[Zc,Xc,Ac,Mc,2,3,4,5,6,7,8,9,10,11,12,13,14,Pc,new lc("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(d~~",141,341),new lc("j~RQYZXz{^~^O(R~~aP!P!Qd~iO(S~~",25,324)],topRules:{Script:[0,7],SingleExpression:[1,277],SingleClassItem:[2,278]},dialects:{jsx:0,ts:15179},dynamicPrecedences:{80:1,82:1,94:1,170:1,200:1},specialized:[{term:328,get:t=>Cc[t]||-1},{term:344,get:t=>_c[t]||-1},{term:95,get:t=>jc[t]||-1}],tokenPrec:15205})
function Wc(t){let e=Object.keys(t).join(""),i=/\w/.test(e)
return i&&(e=e.replace(/\w/g,"")),`[${i?"\\w":""}${e.replace(/[^\w\s]/g,"\\$&")}]`}function Ec(t){let e=t.map(t=>"string"==typeof t?{label:t}:t),[i,n]=e.every(t=>/^\w+$/.test(t.label))?[/\w*$/,/\w+$/]:function(t){let e=Object.create(null),i=Object.create(null)
for(let{label:n}of t){e[n[0]]=!0
for(let t=1;t<n.length;t++)i[n[t]]=!0}let n=Wc(e)+Wc(i)+"*$"
return[new RegExp("^"+n),new RegExp(n)]}(e)
return t=>{let s=t.matchBefore(n)
return s||t.explicit?{from:s?s.from:t.pos,options:e,validFor:i}:null}}const zc=ct.define(),qc=fr.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",height:"100%",listStyle:"none",margin:0,padding:0,"& > li, & > completion-section":{padding:"1px 3px",lineHeight:1.2},"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer"},"& > completion-section":{display:"list-item",borderBottom:"1px solid silver",paddingLeft:"0.5em",opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#777"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#444"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"···"',opacity:.5,display:"block",textAlign:"center",cursor:"pointer"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"400px",boxSizing:"border-box",whiteSpace:"pre-line"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},".cm-completionInfo.cm-completionInfo-left-narrow":{right:"30px"},".cm-completionInfo.cm-completionInfo-right-narrow":{left:"30px"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",display:"inline-block",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6",boxSizing:"content-box"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'ƒ'"}},".cm-completionIcon-class":{"&:after":{content:"'○'"}},".cm-completionIcon-interface":{"&:after":{content:"'◌'"}},".cm-completionIcon-variable":{"&:after":{content:"'𝑥'"}},".cm-completionIcon-constant":{"&:after":{content:"'𝐶'"}},".cm-completionIcon-type":{"&:after":{content:"'𝑡'"}},".cm-completionIcon-enum":{"&:after":{content:"'∪'"}},".cm-completionIcon-property":{"&:after":{content:"'□'"}},".cm-completionIcon-keyword":{"&:after":{content:"'🔑︎'"}},".cm-completionIcon-namespace":{"&:after":{content:"'▢'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}})
class Dc{constructor(t,e,i,n){this.field=t,this.line=e,this.from=i,this.to=n}}class Lc{constructor(t,e,i){this.field=t,this.from=e,this.to=i}map(t){let e=t.mapPos(this.from,-1,k.TrackDel),i=t.mapPos(this.to,1,k.TrackDel)
return null==e||null==i?null:new Lc(this.field,e,i)}}class Uc{constructor(t,e){this.lines=t,this.fieldPositions=e}instantiate(t,e){let i=[],n=[e],s=t.doc.lineAt(e),r=/^\s*/.exec(s.text)[0]
for(let s of this.lines){if(i.length){let i=r,o=/^\t*/.exec(s)[0].length
for(let e=0;e<o;e++)i+=t.facet(za)
n.push(e+i.length-o),s=i+s.slice(o)}i.push(s),e+=s.length+1}let o=this.fieldPositions.map(t=>new Lc(t.field,n[t.line]+t.from,n[t.line]+t.to))
return{text:i,ranges:o}}static parse(t){let e,i=[],n=[],s=[]
for(let r of t.split(/\r\n?|\n/)){for(;e=/[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(r);){let t=e[1]?+e[1]:null,o=e[2]||e[3]||"",a=-1
0===t&&(t=1e9)
let l=o.replace(/\\[{}]/g,t=>t[1])
for(let e=0;e<i.length;e++)(null!=t?i[e].seq==t:l&&i[e].name==l)&&(a=e)
if(a<0){let e=0
for(;e<i.length&&(null==t||null!=i[e].seq&&i[e].seq<t);)e++
i.splice(e,0,{seq:t,name:l}),a=e
for(let t of s)t.field>=a&&t.field++}for(let t of s)if(t.line==n.length&&t.from>e.index){let i=e[2]?3+(e[1]||"").length:2
t.from-=i,t.to-=i}s.push(new Dc(a,n.length,e.index,e.index+l.length)),r=r.slice(0,e.index)+o+r.slice(e.index+e[0].length)}r=r.replace(/\\([{}])/g,(t,e,i)=>{for(let t of s)t.line==n.length&&t.from>i&&(t.from--,t.to--)
return e}),n.push(r)}return new Uc(n,s)}}let Bc=xe.widget({widget:new class extends ve{toDOM(){let t=document.createElement("span")
return t.className="cm-snippetFieldPosition",t}ignoreEvent(){return!1}}}),Vc=xe.mark({class:"cm-snippetField"})
class Gc{constructor(t,e){this.ranges=t,this.active=e,this.deco=xe.set(t.map(t=>(t.from==t.to?Bc:Vc).range(t.from,t.to)),!0)}map(t){let e=[]
for(let i of this.ranges){let n=i.map(t)
if(!n)return null
e.push(n)}return new Gc(e,this.active)}selectionInsideField(t){return t.ranges.every(t=>this.ranges.some(e=>e.field==this.active&&e.from<=t.from&&e.to>=t.to))}}const Ic=ut.define({map:(t,e)=>t&&t.map(e)}),Nc=ut.define(),Hc=U.define({create:()=>null,update(t,e){for(let i of e.effects){if(i.is(Ic))return i.value
if(i.is(Nc)&&t)return new Gc(t.ranges,i.value)}return t&&e.docChanged&&(t=t.map(e.changes)),t&&e.selection&&!t.selectionInsideField(e.selection)&&(t=null),t},provide:t=>fr.decorations.from(t,t=>t?t.deco:xe.none)})
function Fc(t,e){return C.create(t.filter(t=>t.field==e).map(t=>C.range(t.from,t.to)))}function Kc(t){let e=Uc.parse(t)
return(t,i,n,s)=>{let{text:r,ranges:o}=e.instantiate(t.state,n),{main:a}=t.state.selection,l={changes:{from:n,to:s==a.from?a.to:s,insert:O.of(r)},scrollIntoView:!0,annotations:i?[zc.of(i),dt.userEvent.of("input.complete")]:void 0}
if(o.length&&(l.selection=Fc(o,0)),o.some(t=>t.field>0)){let e=new Gc(o,0),i=l.effects=[Ic.of(e)]
void 0===t.state.field(Hc,!1)&&i.push(ut.appendConfig.of([Hc,iO,sO,qc]))}t.dispatch(t.state.update(l))}}function Jc(t){return({state:e,dispatch:i})=>{let n=e.field(Hc,!1)
if(!n||t<0&&0==n.active)return!1
let s=n.active+t,r=t>0&&!n.ranges.some(e=>e.field==s+t)
return i(e.update({selection:Fc(n.ranges,s),effects:Ic.of(r?null:new Gc(n.ranges,s)),scrollIntoView:!0})),!0}}const tO=[{key:"Tab",run:Jc(1),shift:Jc(-1)},{key:"Escape",run:({state:t,dispatch:e})=>!!t.field(Hc,!1)&&(e(t.update({effects:Ic.of(null)})),!0)}],eO=Y.define({combine:t=>t.length?t[0]:tO}),iO=H.highest(br.compute([eO],t=>t.facet(eO)))
function nO(t,e){return{...e,apply:Kc(t)}}const sO=fr.domEventHandlers({mousedown(t,e){let i,n=e.state.field(Hc,!1)
if(!n||null==(i=e.posAtCoords({x:t.clientX,y:t.clientY})))return!1
let s=n.ranges.find(t=>t.from<=i&&t.to>=i)
return!(!s||s.field==n.active)&&(e.dispatch({selection:Fc(n.ranges,s.field),effects:Ic.of(n.ranges.some(t=>t.field>s.field)?new Gc(n.ranges,s.field):null),scrollIntoView:!0}),!0)}}),rO=new class extends Pt{}
rO.startSide=1,rO.endSide=-1
const oO=[nO("function ${name}(${params}) {\n\t${}\n}",{label:"function",detail:"definition",type:"keyword"}),nO("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}",{label:"for",detail:"loop",type:"keyword"}),nO("for (let ${name} of ${collection}) {\n\t${}\n}",{label:"for",detail:"of loop",type:"keyword"}),nO("do {\n\t${}\n} while (${})",{label:"do",detail:"loop",type:"keyword"}),nO("while (${}) {\n\t${}\n}",{label:"while",detail:"loop",type:"keyword"}),nO("try {\n\t${}\n} catch (${error}) {\n\t${}\n}",{label:"try",detail:"/ catch block",type:"keyword"}),nO("if (${}) {\n\t${}\n}",{label:"if",detail:"block",type:"keyword"}),nO("if (${}) {\n\t${}\n} else {\n\t${}\n}",{label:"if",detail:"/ else block",type:"keyword"}),nO("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}",{label:"class",detail:"definition",type:"keyword"}),nO('import {${names}} from "${module}"\n${}',{label:"import",detail:"named",type:"keyword"}),nO('import ${name} from "${module}"\n${}',{label:"import",detail:"default",type:"keyword"})],aO=oO.concat([nO("interface ${name} {\n\t${}\n}",{label:"interface",detail:"definition",type:"keyword"}),nO("type ${name} = ${type}",{label:"type",detail:"definition",type:"keyword"}),nO("enum ${name} {\n\t${}\n}",{label:"enum",detail:"definition",type:"keyword"})]),lO=new Bo,hO=new Set(["Script","Block","FunctionExpression","FunctionDeclaration","ArrowFunction","MethodDeclaration","ForStatement"])
function cO(t){return(e,i)=>{let n=e.node.getChild("VariableDefinition")
return n&&i(n,t),!0}}const OO=["FunctionDeclaration"],fO={FunctionDeclaration:cO("function"),ClassDeclaration:cO("class"),ClassExpression:()=>!0,EnumDeclaration:cO("constant"),TypeAliasDeclaration:cO("type"),NamespaceDeclaration:cO("namespace"),VariableDefinition(t,e){t.matchContext(OO)||e(t,"variable")},TypeDefinition(t,e){e(t,"type")},__proto__:null}
function uO(t,e){let i=lO.get(e)
if(i)return i
let n=[],s=!0
function r(e,i){let s=t.sliceString(e.from,e.to)
n.push({label:s,type:i})}return e.cursor($o.IncludeAnonymous).iterate(e=>{if(s)s=!1
else if(e.name){let t=fO[e.name]
if(t&&t(e,r)||hO.has(e.name))return!1}else if(e.to-e.from>8192){for(let i of uO(t,e.node))n.push(i)
return!1}}),lO.set(e,n),n}const dO=/^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,pO=["TemplateString","String","RegExp","LineComment","BlockComment","VariableDefinition","TypeDefinition","Label","PropertyDefinition","PropertyName","PrivatePropertyDefinition","PrivatePropertyName","JSXText","JSXAttributeValue","JSXOpenTag","JSXCloseTag","JSXSelfClosingTag",".","?."]
function gO(t){let e=Za(t.state).resolveInner(t.pos,-1)
if(pO.indexOf(e.name)>-1)return null
let i="VariableName"==e.name||e.to-e.from<20&&dO.test(t.state.sliceDoc(e.from,e.to))
if(!i&&!t.explicit)return null
let n=[]
for(let i=e;i;i=i.parent)hO.has(i.name)&&(n=n.concat(uO(t.state.doc,i)))
return{options:n,from:i?e.from:t.pos,validFor:dO}}const mO=Pa.define({name:"javascript",parser:Yc.configure({props:[Ba.add({IfStatement:Ja({except:/^\s*({|else\b)/}),TryStatement:Ja({except:/^\s*({|catch\b|finally\b)/}),LabeledStatement:t=>t.baseIndent,SwitchBody:t=>{let e=t.textAfter,i=/^\s*\}/.test(e),n=/^\s*(case|default)\b/.test(e)
return t.baseIndent+(i?0:n?1:2)*t.unit},Block:Fa({closing:"}"}),ArrowFunction:t=>t.baseIndent+t.unit,"TemplateString BlockComment":()=>null,"Statement Property":Ja({except:/^\s*{/}),JSXElement(t){let e=/^\s*<\//.test(t.textAfter)
return t.lineIndent(t.node.from)+(e?0:t.unit)},JSXEscape(t){let e=/\s*\}/.test(t.textAfter)
return t.lineIndent(t.node.from)+(e?0:t.unit)},"JSXOpenTag JSXSelfClosingTag":t=>t.column(t.node.from)+t.unit}),tl.add({"Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType":function(t){let e=t.firstChild,i=t.lastChild
return e&&e.to<i.from?{from:e.to,to:i.type.isError?t.to:i.from}:null},BlockComment:t=>({from:t.from+2,to:t.to-2}),JSXElement(t){let e=t.firstChild
if(!e||"JSXSelfClosingTag"==e.name)return null
let i=t.lastChild
return{from:e.to,to:i.type.isError?t.to:i.from}},"JSXSelfClosingTag JSXOpenTag"(t){var e
let i=null===(e=t.firstChild)||void 0===e?void 0:e.nextSibling,n=t.lastChild
return!i||i.type.isError?null:{from:i.to,to:n.type.isError?t.to:n.from}}})]}),languageData:{closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"//",block:{open:"/*",close:"*/"}},indentOnInput:/^\s*(?:case |default:|\{|\}|<\/)$/,wordChars:"$"}}),QO={test:t=>/^JSX/.test(t.name),facet:xa({commentTokens:{block:{open:"{/*",close:"*/}"}}})},wO=mO.configure({dialect:"ts"},"typescript"),bO=mO.configure({dialect:"jsx",props:[ka.add(t=>t.isTop?[QO]:void 0)]}),vO=mO.configure({dialect:"jsx ts",props:[ka.add(t=>t.isTop?[QO]:void 0)]},"typescript")
let SO=t=>({label:t,type:"keyword"})
const xO="break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(SO),kO=xO.concat(["declare","implements","private","protected","public"].map(SO))
function yO(t,e,i=t.length){for(let n=null==e?void 0:e.firstChild;n;n=n.nextSibling)if("JSXIdentifier"==n.name||"JSXBuiltin"==n.name||"JSXNamespacedName"==n.name||"JSXMemberExpression"==n.name)return t.sliceString(n.from,Math.min(n.to,i))
return""}const $O="object"==typeof navigator&&/Android\b/.test(navigator.userAgent),PO=fr.inputHandler.of((t,e,i,n,s)=>{if(($O?t.composing:t.compositionStarted)||t.state.readOnly||e!=i||">"!=n&&"/"!=n||!mO.isActiveAt(t.state,e,-1))return!1
let r=s(),{state:o}=r,a=o.changeByRange(t=>{var e
let i,{head:s}=t,r=Za(o).resolveInner(s-1,-1)
if("JSXStartTag"==r.name&&(r=r.parent),o.doc.sliceString(s-1,s)!=n||"JSXAttributeValue"==r.name&&r.to>s);else{if(">"==n&&"JSXFragmentTag"==r.name)return{range:t,changes:{from:s,insert:"</>"}}
if("/"==n&&"JSXStartCloseTag"==r.name){let t=r.parent,n=t.parent
if(n&&t.from==s-2&&((i=yO(o.doc,n.firstChild,s))||"JSXFragmentTag"==(null===(e=n.firstChild)||void 0===e?void 0:e.name))){let t=`${i}>`
return{range:C.cursor(s+t.length,-1),changes:{from:s,insert:t}}}}else if(">"==n){let e=function(t){for(;;){if("JSXOpenTag"==t.name||"JSXSelfClosingTag"==t.name||"JSXFragmentTag"==t.name)return t
if("JSXEscape"==t.name||!t.parent)return null
t=t.parent}}(r)
if(e&&"JSXOpenTag"==e.name&&!/^\/?>|^<\//.test(o.doc.sliceString(s,s+2))&&(i=yO(o.doc,e,s)))return{range:t,changes:{from:s,insert:`</${i}>`}}}}return{range:t}})
return!a.changes.empty&&(t.dispatch([r,o.update(a,{userEvent:"input.complete",scrollIntoView:!0})]),!0)}),ZO=[function(t={}){return[co.of(t),[io],uo]}(),function(t={}){return[Gr.of(t),Ir||(Ir=Ei.fromClass(class{constructor(t){this.view=t,this.decorations=xe.none,this.decorationCache=Object.create(null),this.decorator=this.makeDecorator(t.state.facet(Gr)),this.decorations=this.decorator.createDeco(t)}makeDecorator(t){return new Dr({regexp:t.specialChars,decoration:(e,i,n)=>{let{doc:s}=i.state,r=S(e[0],0)
if(9==r){let t=s.lineAt(n),e=i.state.tabSize,r=Bt(t.text,e,n-t.from)
return xe.replace({widget:new Hr((e-r%e)*this.view.defaultCharacterWidth/this.view.scaleX)})}return this.decorationCache[r]||(this.decorationCache[r]=xe.replace({widget:new Nr(t,r)}))},boundary:t.replaceTabs?void 0:/[^]/})}update(t){let e=t.state.facet(Gr)
t.startState.facet(Gr)!=e?(this.decorator=this.makeDecorator(e),this.decorations=this.decorator.createDeco(t.view)):this.decorations=this.decorator.updateDeco(t,this.decorations)}},{decorations:t=>t.decorations}))]}(),function(t={}){return[zl,El.of(t),fr.domEventHandlers({beforeinput(t,e){let i="historyUndo"==t.inputType?Dl:"historyRedo"==t.inputType?Ll:null
return!!i&&(t.preventDefault(),i(e))}})]}(),function(t={}){return[Tr.of(t),Rr,_r,Yr,Ai.of(!0)]}(),[Er,zr],yt.allowMultipleSelections.of(!0),yt.transactionFilter.of(t=>{if(!t.docChanged||!t.isUserEvent("input.type")&&!t.isUserEvent("input.complete"))return t
let e=t.startState.languageDataAt("indentOnInput",t.startState.selection.main.head)
if(!e.length)return t
let i=t.newDoc,{head:n}=t.newSelection.main,s=i.lineAt(n)
if(n>s.from+200)return t
let r=i.sliceString(s.from,n)
if(!e.some(t=>t.test(r)))return t
let{state:o}=t,a=-1,l=[]
for(let{head:t}of o.selection.ranges){let e=o.doc.lineAt(t)
if(e.from==a)continue
a=e.from
let i=La(o,e.from)
if(null==i)continue
let n=/^\s*/.exec(e.text)[0],s=Da(o,i)
n!=s&&l.push({from:e.from,to:e.from+n.length,insert:s})}return l.length?[t,{changes:l,sequential:!0}]:t}),function(t,e){let i,n=[ol]
return t instanceof el&&(t.module&&n.push(fr.styleModule.of(t.module)),i=t.themeType),(null==e?void 0:e.fallback)?n.push(nl.of(t)):i?n.push(il.computeN([fr.darkTheme],e=>e.facet(fr.darkTheme)==("dark"==i)?[t]:[])):n.push(il.of(t)),n}(al,{fallback:!0}),function(t={}){return[cl.of(t),pl]}(),br.of([...Kh,...nh]),function(t={}){let e=t.jsx?t.typescript?vO:bO:t.typescript?wO:mO,i=t.typescript?aO.concat(kO):oO.concat(xO)
return new Wa(e,[mO.data.of({autocomplete:(n=pO,s=Ec(i),t=>{for(let e=Za(t.state).resolveInner(t.pos,-1);e;e=e.parent){if(n.indexOf(e.name)>-1)return null
if(e.type.isTop)break}return s(t)})}),mO.data.of({autocomplete:gO}),t.jsx?PO:[]])
var n,s}()]
export{fr as EditorView,ZO as config}
