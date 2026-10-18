import { Leaf } from 'wordgard/doc';
import { CodeBlock, CodeBlockLanguage, LineBreak } from 'wordgard/types';
import { Wordgard, Decoration, decoratePlots } from 'wordgard/editor';
import { codeBlockLanguage } from 'wordgard/schema';
import { StringStream } from '@codemirror/streamparser';
import { c, cpp, csharp, dart, java, kotlin, objectiveC, scala } from '@codemirror/legacy-modes/mode/clike';
import { css, less } from '@codemirror/legacy-modes/mode/css';
import { go } from '@codemirror/legacy-modes/mode/go';
import { html, xml } from '@codemirror/legacy-modes/mode/xml';
import { json, javascript, typescript } from '@codemirror/legacy-modes/mode/javascript';
import { jinja2 } from '@codemirror/legacy-modes/mode/jinja2';
import { msSQL, mySQL, pgSQL, standardSQL, sqlite } from '@codemirror/legacy-modes/mode/sql';
import { python } from '@codemirror/legacy-modes/mode/python';
import { rust } from '@codemirror/legacy-modes/mode/rust';
import { sass } from '@codemirror/legacy-modes/mode/sass';
import { wast } from '@codemirror/legacy-modes/mode/wast';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';
import { cobol } from '@codemirror/legacy-modes/mode/cobol';
import { clojure } from '@codemirror/legacy-modes/mode/clojure';
import { commonLisp } from '@codemirror/legacy-modes/mode/commonlisp';
import { elm } from '@codemirror/legacy-modes/mode/elm';
import { erlang } from '@codemirror/legacy-modes/mode/erlang';
import { haskell } from '@codemirror/legacy-modes/mode/haskell';
import { julia } from '@codemirror/legacy-modes/mode/julia';
import { lua } from '@codemirror/legacy-modes/mode/lua';
import { fSharp, oCaml, sml } from '@codemirror/legacy-modes/mode/mllike';
import { perl } from '@codemirror/legacy-modes/mode/perl';
import { r } from '@codemirror/legacy-modes/mode/r';
import { ruby } from '@codemirror/legacy-modes/mode/ruby';
import { scheme } from '@codemirror/legacy-modes/mode/scheme';
import { shell } from '@codemirror/legacy-modes/mode/shell';
import { swift } from '@codemirror/legacy-modes/mode/swift';
import { stex } from '@codemirror/legacy-modes/mode/stex';

const theme = /*@__PURE__*/Wordgard.styles({
    ".wg-t-keyword": { color: "#708" },
    ".wg-t-atom, .wg-t-bool, .wg-t-label": { color: "#219" },
    ".wg-t-literal, .wg-t-number": { color: "#164" },
    ".wg-t-string": { color: "#a11" },
    ".wg-t-name, .wg-t-prop": {},
    ".wg-t-local": { color: "#30a" },
    ".wg-t-def": { color: "#00f" },
    ".wg-t-type, .wg-t-namespace, .wg-t-class": { color: "#085" },
    ".wg-t-macro, .wg-t-special": { color: "#256" },
    ".wg-t-comment": { color: "#940" },
    ".wg-t-error": { color: "#f00" }
});
const tokenMap = /*@__PURE__*/(() => new Map)();
function tokenClass(token) {
    let cls = tokenMap.get(token);
    if (cls === undefined)
        tokenMap.set(token, cls = getTokenClass(token));
    return cls;
}
function getTokenClass(token) {
    if (/\.local/.test(token))
        return "local";
    if (token == "variable-2" || token == "variableName.special")
        return "special";
    if (token == "def" || token == "variableName.definition")
        return "def";
    if (/^keyword/.test(token))
        return "keyword";
    if (/^string/.test(token))
        return "string";
    if (/^(variable|name)/.test(token))
        return "name";
    if (/^(type|tag)/.test(token))
        return "type";
    if (/^(attribute|prop)/.test(token))
        return "prop";
    if (/^type/.test(token))
        return "type";
    if (/^(error|invalid)/.test(token))
        return "error";
    if (/^string/.test(token))
        return "string";
    if (/^number/.test(token))
        return "number";
    if (/^bool/.test(token))
        return "bool";
    if (/^atom/.test(token))
        return "atom";
    if (/^(literal|regexp|color)/.test(token))
        return "literal";
    if (/^label/.test(token))
        return "label";
    if (/^class/.test(token))
        return "class";
    if (/^namespace/.test(token))
        return "namespace";
    if (/^label/.test(token))
        return "label";
    if (/^macro/.test(token))
        return "macro";
    if (/comment/i.test(token))
        return "comment";
    return null;
}
const tokenDeco = /*@__PURE__*/(() => ({
    keyword: Decoration.Range.attribute("class", "wg-t-keyword"),
    atom: Decoration.Range.attribute("class", "wg-t-atom"),
    bool: Decoration.Range.attribute("class", "wg-t-bool"),
    label: Decoration.Range.attribute("class", "wg-t-label"),
    literal: Decoration.Range.attribute("class", "wg-t-literal"),
    number: Decoration.Range.attribute("class", "wg-t-number"),
    string: Decoration.Range.attribute("class", "wg-t-string"),
    name: Decoration.Range.attribute("class", "wg-t-name"),
    prop: Decoration.Range.attribute("class", "wg-t-prop"),
    local: Decoration.Range.attribute("class", "wg-t-local"),
    def: Decoration.Range.attribute("class", "wg-t-def"),
    type: Decoration.Range.attribute("class", "wg-t-type"),
    namespace: Decoration.Range.attribute("class", "wg-t-namespace"),
    class: Decoration.Range.attribute("class", "wg-t-class"),
    macro: Decoration.Range.attribute("class", "wg-t-macro"),
    special: Decoration.Range.attribute("class", "wg-t-special"),
    comment: Decoration.Range.attribute("class", "wg-t-comment"),
    error: Decoration.Range.attribute("class", "wg-t-error")
}))();
function blockText(plot) {
    let text = "";
    for (let ch of plot.content) {
        if (ch.is(Leaf.Text))
            text += ch.param;
        else if (ch.type == LineBreak.type)
            text += "\n";
        else if (ch.isLeaf)
            text += " ";
        else
            return null;
    }
    return text;
}
function readToken(token, stream, state) {
    stream.start = stream.pos;
    for (let i = 0; i < 10; i++) {
        let result = token(stream, state);
        if (stream.pos > stream.start)
            return result;
    }
    stream.skipToEnd();
    return "";
}
const maxHighlight = 10000;
function highlightBlock(text, language, add) {
    let { parser } = language;
    let pos = 0, state = parser.startState ? parser.startState(2) : true;
    hl: for (let line of text.split("\n")) {
        let stream = new StringStream(line, 4, 2);
        if (stream.eol()) {
            parser.blankLine?.(state, 2);
        }
        else {
            while (!stream.eol()) {
                let token = readToken(parser.token, stream, state);
                if (token) {
                    let cls = tokenClass(token);
                    if (cls)
                        add(tokenDeco[cls], pos + stream.start, pos + stream.pos);
                }
                if (pos + stream.pos > maxHighlight)
                    break hl;
            }
        }
        pos += line.length + 1;
    }
}
function highlightCode(options = {}) {
    let map = new Map;
    let langOptions = [];
    for (let lang of options.languages || []) {
        langOptions.push(lang.name);
        for (let alias of lang.alias)
            map.set(alias, lang);
    }
    return [
        theme,
        codeBlockLanguage.options.of(langOptions),
        decoratePlots({
            type: CodeBlock,
            ranges: (block, add) => {
                let lang = options.getLanguage ? options.getLanguage(block) : undefined;
                if (!lang) {
                    let langName = block.mark(CodeBlockLanguage);
                    if (langName)
                        lang = map.get(langName);
                }
                if (lang) {
                    let text = blockText(block);
                    if (text)
                        highlightBlock(text, lang, add);
                }
            }
        })
    ];
}

class Language {
    name;
    alias;
    parser;
    constructor(
    name, 
    alias, 
    parser) {
        this.name = name;
        this.alias = alias;
        this.parser = parser;
    }
    static of(spec) {
        return new Language(spec.name, (spec.alias || []).concat(spec.name).map(s => s.toLowerCase()), spec.parser);
    }
}
function lang(name, parser, alias) {
    return Language.of({ name, alias, parser });
}
const C = /*@__PURE__*/lang("C", c);
const Cpp = /*@__PURE__*/lang("C++", cpp, ["cpp"]);
const Csharp = /*@__PURE__*/lang("C#", csharp, ["csharp"]);
const Dart = /*@__PURE__*/lang("Dart", dart);
const Java = /*@__PURE__*/lang("Java", java);
const Kotlin = /*@__PURE__*/lang("Kotlin", kotlin);
const ObjectiveC = /*@__PURE__*/lang("ObjectiveC", objectiveC, ["objective-c", "objc"]);
const Scala = /*@__PURE__*/lang("Scala", scala);
const CSS = /*@__PURE__*/lang("CSS", css);
const Less = /*@__PURE__*/lang("Less", less);
const Go = /*@__PURE__*/lang("Go", go);
const HTML = /*@__PURE__*/lang("HTML", html, ["xhtml"]);
const XML = /*@__PURE__*/lang("XML", xml, ["rss", "wsdl", "xsd"]);
const JavaScript = /*@__PURE__*/lang("JavaScript", javascript, ["ecmascript", "js", "node"]);
const TypeScript = /*@__PURE__*/lang("TypeScript", typescript, ["ts"]);
const JSON = /*@__PURE__*/lang("JSON", json, ["json5"]);
const Jinja2 = /*@__PURE__*/lang("Jinja2", jinja2);
const SQL = /*@__PURE__*/lang("SQL", standardSQL);
const MSSQL = /*@__PURE__*/lang("MSSQL", msSQL);
const MySQL = /*@__PURE__*/lang("MySQL", mySQL);
const PostgreSQL = /*@__PURE__*/lang("PostgreSQL", pgSQL, ["postgres", "pgsql"]);
const SQLite = /*@__PURE__*/lang("SQLite", sqlite);
const Python = /*@__PURE__*/lang("Python", python);
const Rust = /*@__PURE__*/lang("Rust", rust);
const Sass = /*@__PURE__*/lang("Sass", sass);
const WebAssembly = /*@__PURE__*/lang("WebAssembly", wast, ["wast"]);
const YAML = /*@__PURE__*/lang("YAML", yaml, ["yml"]);
const Cobol = /*@__PURE__*/lang("Cobol", cobol);
const Clojure = /*@__PURE__*/lang("Clojure", clojure, ["clojurescript"]);
const CommonLisp = /*@__PURE__*/lang("CommonLisp", commonLisp, ["lisp", "cl"]);
const Elm = /*@__PURE__*/lang("Elm", elm);
const Erlang = /*@__PURE__*/lang("Erlang", erlang);
const Haskell = /*@__PURE__*/lang("Haskell", haskell);
const Julia = /*@__PURE__*/lang("Julia", julia);
const Lua = /*@__PURE__*/lang("Lua", lua);
const OCaml = /*@__PURE__*/lang("OCaml", oCaml);
const FSharp = /*@__PURE__*/lang("F#", fSharp, ["fsharp"]);
const SML = /*@__PURE__*/lang("SML", sml);
const Perl = /*@__PURE__*/lang("Perl", perl);
const R = /*@__PURE__*/lang("R", r);
const Ruby = /*@__PURE__*/lang("Ruby", ruby, ["jruby", "rb"]);
const Scheme = /*@__PURE__*/lang("Scheme", scheme);
const Shell = /*@__PURE__*/lang("Shell", shell, ["bash", "sh", "zsh"]);
const Swift = /*@__PURE__*/lang("Swift", swift);
const LaTeX = /*@__PURE__*/lang("LaTeX", stex, ["stex", "tex"]);
const baseLanguages = [C, CSS, Cpp, HTML, Java, JavaScript, JSON, Python, Ruby, Rust, TypeScript, XML];

export { C, CSS, Clojure, Cobol, CommonLisp, Cpp, Csharp, Dart, Elm, Erlang, FSharp, Go, HTML, Haskell, JSON, Java, JavaScript, Jinja2, Julia, Kotlin, LaTeX, Language, Less, Lua, MSSQL, MySQL, OCaml, ObjectiveC, Perl, PostgreSQL, Python, R, Ruby, Rust, SML, SQL, SQLite, Sass, Scala, Scheme, Shell, Swift, TypeScript, WebAssembly, XML, YAML, baseLanguages, highlightCode };
