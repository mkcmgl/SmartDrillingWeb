import { defineComponent as MQ, ref as $e, onMounted as RQ, onUnmounted as OQ, createElementBlock as la, openBlock as ua, withModifiers as PQ, normalizeStyle as ca, createCommentVNode as Vc, createElementVNode as Oi, renderSlot as kc, createApp as GQ, nextTick as NQ } from "vue";
function VQ(i) {
  return { all: i = i || /* @__PURE__ */ new Map(), on: function(A, e) {
    var n = i.get(A);
    n ? n.push(e) : i.set(A, [e]);
  }, off: function(A, e) {
    var n = i.get(A);
    n && (e ? n.splice(n.indexOf(e) >>> 0, 1) : i.set(A, []));
  }, emit: function(A, e) {
    var n = i.get(A);
    n && n.slice().map(function(s) {
      s(e);
    }), (n = i.get("*")) && n.slice().map(function(s) {
      s(A, e);
    });
  } };
}
const rn = VQ();
var Pi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, mr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var kQ = mr.exports, Wc;
function WQ() {
  return Wc || (Wc = 1, function(i, A) {
    (function() {
      var e, n = "4.17.21", s = 200, o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", c = "Invalid `variable` option passed into `_.template`", h = "__lodash_hash_undefined__", d = 500, w = "__lodash_placeholder__", p = 1, m = 2, U = 4, v = 1, E = 2, T = 1, S = 2, x = 4, Y = 8, X = 16, K = 32, D = 64, z = 128, j = 256, G = 512, mA = 30, DA = "...", RA = 800, lA = 16, xA = 1, ie = 2, XA = 3, QA = 1 / 0, $A = 9007199254740991, P = 17976931348623157e292, R = NaN, W = 4294967295, BA = W - 1, oA = W >>> 1, uA = [
        ["ary", z],
        ["bind", T],
        ["bindKey", S],
        ["curry", Y],
        ["curryRight", X],
        ["flip", G],
        ["partial", K],
        ["partialRight", D],
        ["rearg", j]
      ], gA = "[object Arguments]", _A = "[object Array]", wA = "[object AsyncFunction]", se = "[object Boolean]", ot = "[object Date]", jf = "[object DOMException]", Jr = "[object Error]", Yr = "[object Function]", hl = "[object GeneratorFunction]", ze = "[object Map]", Zn = "[object Number]", Ad = "[object Null]", at = "[object Object]", fl = "[object Promise]", ed = "[object Proxy]", qn = "[object RegExp]", Xe = "[object Set]", $n = "[object String]", Zr = "[object Symbol]", td = "[object Undefined]", jn = "[object WeakMap]", nd = "[object WeakSet]", Ar = "[object ArrayBuffer]", pn = "[object DataView]", Gs = "[object Float32Array]", Ns = "[object Float64Array]", Vs = "[object Int8Array]", ks = "[object Int16Array]", Ws = "[object Int32Array]", zs = "[object Uint8Array]", Xs = "[object Uint8ClampedArray]", Js = "[object Uint16Array]", Ys = "[object Uint32Array]", rd = /\b__p \+= '';/g, id = /\b(__p \+=) '' \+/g, sd = /(__e\(.*?\)|\b__t\)) \+\n'';/g, dl = /&(?:amp|lt|gt|quot|#39);/g, Bl = /[&<>"']/g, od = RegExp(dl.source), ad = RegExp(Bl.source), ld = /<%-([\s\S]+?)%>/g, ud = /<%([\s\S]+?)%>/g, gl = /<%=([\s\S]+?)%>/g, cd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hd = /^\w*$/, fd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zs = /[\\^$.*+?()[\]{}|]/g, dd = RegExp(Zs.source), qs = /^\s+/, Bd = /\s/, gd = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, wd = /\{\n\/\* \[wrapped with (.+)\] \*/, pd = /,? & /, Cd = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, md = /[()=,{}\[\]\/\s]/, Qd = /\\(\\)?/g, Ud = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, wl = /\w*$/, vd = /^[-+]0x[0-9a-f]+$/i, Fd = /^0b[01]+$/i, Id = /^\[object .+?Constructor\]$/, Ed = /^0o[0-7]+$/i, _d = /^(?:0|[1-9]\d*)$/, yd = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, qr = /($^)/, Hd = /['\n\r\u2028\u2029\\]/g, $r = "\\ud800-\\udfff", bd = "\\u0300-\\u036f", Sd = "\\ufe20-\\ufe2f", xd = "\\u20d0-\\u20ff", pl = bd + Sd + xd, Cl = "\\u2700-\\u27bf", ml = "a-z\\xdf-\\xf6\\xf8-\\xff", Ld = "\\xac\\xb1\\xd7\\xf7", Td = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Dd = "\\u2000-\\u206f", Kd = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ql = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ul = "\\ufe0e\\ufe0f", vl = Ld + Td + Dd + Kd, $s = "['’]", Md = "[" + $r + "]", Fl = "[" + vl + "]", jr = "[" + pl + "]", Il = "\\d+", Rd = "[" + Cl + "]", El = "[" + ml + "]", _l = "[^" + $r + vl + Il + Cl + ml + Ql + "]", js = "\\ud83c[\\udffb-\\udfff]", Od = "(?:" + jr + "|" + js + ")", yl = "[^" + $r + "]", Ao = "(?:\\ud83c[\\udde6-\\uddff]){2}", eo = "[\\ud800-\\udbff][\\udc00-\\udfff]", Cn = "[" + Ql + "]", Hl = "\\u200d", bl = "(?:" + El + "|" + _l + ")", Pd = "(?:" + Cn + "|" + _l + ")", Sl = "(?:" + $s + "(?:d|ll|m|re|s|t|ve))?", xl = "(?:" + $s + "(?:D|LL|M|RE|S|T|VE))?", Ll = Od + "?", Tl = "[" + Ul + "]?", Gd = "(?:" + Hl + "(?:" + [yl, Ao, eo].join("|") + ")" + Tl + Ll + ")*", Nd = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Vd = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Dl = Tl + Ll + Gd, kd = "(?:" + [Rd, Ao, eo].join("|") + ")" + Dl, Wd = "(?:" + [yl + jr + "?", jr, Ao, eo, Md].join("|") + ")", zd = RegExp($s, "g"), Xd = RegExp(jr, "g"), to = RegExp(js + "(?=" + js + ")|" + Wd + Dl, "g"), Jd = RegExp([
        Cn + "?" + El + "+" + Sl + "(?=" + [Fl, Cn, "$"].join("|") + ")",
        Pd + "+" + xl + "(?=" + [Fl, Cn + bl, "$"].join("|") + ")",
        Cn + "?" + bl + "+" + Sl,
        Cn + "+" + xl,
        Vd,
        Nd,
        Il,
        kd
      ].join("|"), "g"), Yd = RegExp("[" + Hl + $r + pl + Ul + "]"), Zd = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, qd = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], $d = -1, LA = {};
      LA[Gs] = LA[Ns] = LA[Vs] = LA[ks] = LA[Ws] = LA[zs] = LA[Xs] = LA[Js] = LA[Ys] = !0, LA[gA] = LA[_A] = LA[Ar] = LA[se] = LA[pn] = LA[ot] = LA[Jr] = LA[Yr] = LA[ze] = LA[Zn] = LA[at] = LA[qn] = LA[Xe] = LA[$n] = LA[jn] = !1;
      var bA = {};
      bA[gA] = bA[_A] = bA[Ar] = bA[pn] = bA[se] = bA[ot] = bA[Gs] = bA[Ns] = bA[Vs] = bA[ks] = bA[Ws] = bA[ze] = bA[Zn] = bA[at] = bA[qn] = bA[Xe] = bA[$n] = bA[Zr] = bA[zs] = bA[Xs] = bA[Js] = bA[Ys] = !0, bA[Jr] = bA[Yr] = bA[jn] = !1;
      var jd = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, AB = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, eB = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, tB = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, nB = parseFloat, rB = parseInt, Kl = typeof Pi == "object" && Pi && Pi.Object === Object && Pi, iB = typeof self == "object" && self && self.Object === Object && self, ee = Kl || iB || Function("return this")(), no = A && !A.nodeType && A, Yt = no && !0 && i && !i.nodeType && i, Ml = Yt && Yt.exports === no, ro = Ml && Kl.process, Le = function() {
        try {
          var F = Yt && Yt.require && Yt.require("util").types;
          return F || ro && ro.binding && ro.binding("util");
        } catch {
        }
      }(), Rl = Le && Le.isArrayBuffer, Ol = Le && Le.isDate, Pl = Le && Le.isMap, Gl = Le && Le.isRegExp, Nl = Le && Le.isSet, Vl = Le && Le.isTypedArray;
      function Ue(F, y, _) {
        switch (_.length) {
          case 0:
            return F.call(y);
          case 1:
            return F.call(y, _[0]);
          case 2:
            return F.call(y, _[0], _[1]);
          case 3:
            return F.call(y, _[0], _[1], _[2]);
        }
        return F.apply(y, _);
      }
      function sB(F, y, _, k) {
        for (var eA = -1, vA = F == null ? 0 : F.length; ++eA < vA; ) {
          var YA = F[eA];
          y(k, YA, _(YA), F);
        }
        return k;
      }
      function Te(F, y) {
        for (var _ = -1, k = F == null ? 0 : F.length; ++_ < k && y(F[_], _, F) !== !1; )
          ;
        return F;
      }
      function oB(F, y) {
        for (var _ = F == null ? 0 : F.length; _-- && y(F[_], _, F) !== !1; )
          ;
        return F;
      }
      function kl(F, y) {
        for (var _ = -1, k = F == null ? 0 : F.length; ++_ < k; )
          if (!y(F[_], _, F))
            return !1;
        return !0;
      }
      function Ft(F, y) {
        for (var _ = -1, k = F == null ? 0 : F.length, eA = 0, vA = []; ++_ < k; ) {
          var YA = F[_];
          y(YA, _, F) && (vA[eA++] = YA);
        }
        return vA;
      }
      function Ai(F, y) {
        var _ = F == null ? 0 : F.length;
        return !!_ && mn(F, y, 0) > -1;
      }
      function io(F, y, _) {
        for (var k = -1, eA = F == null ? 0 : F.length; ++k < eA; )
          if (_(y, F[k]))
            return !0;
        return !1;
      }
      function KA(F, y) {
        for (var _ = -1, k = F == null ? 0 : F.length, eA = Array(k); ++_ < k; )
          eA[_] = y(F[_], _, F);
        return eA;
      }
      function It(F, y) {
        for (var _ = -1, k = y.length, eA = F.length; ++_ < k; )
          F[eA + _] = y[_];
        return F;
      }
      function so(F, y, _, k) {
        var eA = -1, vA = F == null ? 0 : F.length;
        for (k && vA && (_ = F[++eA]); ++eA < vA; )
          _ = y(_, F[eA], eA, F);
        return _;
      }
      function aB(F, y, _, k) {
        var eA = F == null ? 0 : F.length;
        for (k && eA && (_ = F[--eA]); eA--; )
          _ = y(_, F[eA], eA, F);
        return _;
      }
      function oo(F, y) {
        for (var _ = -1, k = F == null ? 0 : F.length; ++_ < k; )
          if (y(F[_], _, F))
            return !0;
        return !1;
      }
      var lB = ao("length");
      function uB(F) {
        return F.split("");
      }
      function cB(F) {
        return F.match(Cd) || [];
      }
      function Wl(F, y, _) {
        var k;
        return _(F, function(eA, vA, YA) {
          if (y(eA, vA, YA))
            return k = vA, !1;
        }), k;
      }
      function ei(F, y, _, k) {
        for (var eA = F.length, vA = _ + (k ? 1 : -1); k ? vA-- : ++vA < eA; )
          if (y(F[vA], vA, F))
            return vA;
        return -1;
      }
      function mn(F, y, _) {
        return y === y ? vB(F, y, _) : ei(F, zl, _);
      }
      function hB(F, y, _, k) {
        for (var eA = _ - 1, vA = F.length; ++eA < vA; )
          if (k(F[eA], y))
            return eA;
        return -1;
      }
      function zl(F) {
        return F !== F;
      }
      function Xl(F, y) {
        var _ = F == null ? 0 : F.length;
        return _ ? uo(F, y) / _ : R;
      }
      function ao(F) {
        return function(y) {
          return y == null ? e : y[F];
        };
      }
      function lo(F) {
        return function(y) {
          return F == null ? e : F[y];
        };
      }
      function Jl(F, y, _, k, eA) {
        return eA(F, function(vA, YA, HA) {
          _ = k ? (k = !1, vA) : y(_, vA, YA, HA);
        }), _;
      }
      function fB(F, y) {
        var _ = F.length;
        for (F.sort(y); _--; )
          F[_] = F[_].value;
        return F;
      }
      function uo(F, y) {
        for (var _, k = -1, eA = F.length; ++k < eA; ) {
          var vA = y(F[k]);
          vA !== e && (_ = _ === e ? vA : _ + vA);
        }
        return _;
      }
      function co(F, y) {
        for (var _ = -1, k = Array(F); ++_ < F; )
          k[_] = y(_);
        return k;
      }
      function dB(F, y) {
        return KA(y, function(_) {
          return [_, F[_]];
        });
      }
      function Yl(F) {
        return F && F.slice(0, jl(F) + 1).replace(qs, "");
      }
      function ve(F) {
        return function(y) {
          return F(y);
        };
      }
      function ho(F, y) {
        return KA(y, function(_) {
          return F[_];
        });
      }
      function er(F, y) {
        return F.has(y);
      }
      function Zl(F, y) {
        for (var _ = -1, k = F.length; ++_ < k && mn(y, F[_], 0) > -1; )
          ;
        return _;
      }
      function ql(F, y) {
        for (var _ = F.length; _-- && mn(y, F[_], 0) > -1; )
          ;
        return _;
      }
      function BB(F, y) {
        for (var _ = F.length, k = 0; _--; )
          F[_] === y && ++k;
        return k;
      }
      var gB = lo(jd), wB = lo(AB);
      function pB(F) {
        return "\\" + tB[F];
      }
      function CB(F, y) {
        return F == null ? e : F[y];
      }
      function Qn(F) {
        return Yd.test(F);
      }
      function mB(F) {
        return Zd.test(F);
      }
      function QB(F) {
        for (var y, _ = []; !(y = F.next()).done; )
          _.push(y.value);
        return _;
      }
      function fo(F) {
        var y = -1, _ = Array(F.size);
        return F.forEach(function(k, eA) {
          _[++y] = [eA, k];
        }), _;
      }
      function $l(F, y) {
        return function(_) {
          return F(y(_));
        };
      }
      function Et(F, y) {
        for (var _ = -1, k = F.length, eA = 0, vA = []; ++_ < k; ) {
          var YA = F[_];
          (YA === y || YA === w) && (F[_] = w, vA[eA++] = _);
        }
        return vA;
      }
      function ti(F) {
        var y = -1, _ = Array(F.size);
        return F.forEach(function(k) {
          _[++y] = k;
        }), _;
      }
      function UB(F) {
        var y = -1, _ = Array(F.size);
        return F.forEach(function(k) {
          _[++y] = [k, k];
        }), _;
      }
      function vB(F, y, _) {
        for (var k = _ - 1, eA = F.length; ++k < eA; )
          if (F[k] === y)
            return k;
        return -1;
      }
      function FB(F, y, _) {
        for (var k = _ + 1; k--; )
          if (F[k] === y)
            return k;
        return k;
      }
      function Un(F) {
        return Qn(F) ? EB(F) : lB(F);
      }
      function Je(F) {
        return Qn(F) ? _B(F) : uB(F);
      }
      function jl(F) {
        for (var y = F.length; y-- && Bd.test(F.charAt(y)); )
          ;
        return y;
      }
      var IB = lo(eB);
      function EB(F) {
        for (var y = to.lastIndex = 0; to.test(F); )
          ++y;
        return y;
      }
      function _B(F) {
        return F.match(to) || [];
      }
      function yB(F) {
        return F.match(Jd) || [];
      }
      var HB = function F(y) {
        y = y == null ? ee : vn.defaults(ee.Object(), y, vn.pick(ee, qd));
        var _ = y.Array, k = y.Date, eA = y.Error, vA = y.Function, YA = y.Math, HA = y.Object, Bo = y.RegExp, bB = y.String, De = y.TypeError, ni = _.prototype, SB = vA.prototype, Fn = HA.prototype, ri = y["__core-js_shared__"], ii = SB.toString, EA = Fn.hasOwnProperty, xB = 0, Au = function() {
          var t = /[^.]+$/.exec(ri && ri.keys && ri.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        }(), si = Fn.toString, LB = ii.call(HA), TB = ee._, DB = Bo(
          "^" + ii.call(EA).replace(Zs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), oi = Ml ? y.Buffer : e, _t = y.Symbol, ai = y.Uint8Array, eu = oi ? oi.allocUnsafe : e, li = $l(HA.getPrototypeOf, HA), tu = HA.create, nu = Fn.propertyIsEnumerable, ui = ni.splice, ru = _t ? _t.isConcatSpreadable : e, tr = _t ? _t.iterator : e, Zt = _t ? _t.toStringTag : e, ci = function() {
          try {
            var t = en(HA, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        }(), KB = y.clearTimeout !== ee.clearTimeout && y.clearTimeout, MB = k && k.now !== ee.Date.now && k.now, RB = y.setTimeout !== ee.setTimeout && y.setTimeout, hi = YA.ceil, fi = YA.floor, go = HA.getOwnPropertySymbols, OB = oi ? oi.isBuffer : e, iu = y.isFinite, PB = ni.join, GB = $l(HA.keys, HA), ZA = YA.max, oe = YA.min, NB = k.now, VB = y.parseInt, su = YA.random, kB = ni.reverse, wo = en(y, "DataView"), nr = en(y, "Map"), po = en(y, "Promise"), In = en(y, "Set"), rr = en(y, "WeakMap"), ir = en(HA, "create"), di = rr && new rr(), En = {}, WB = tn(wo), zB = tn(nr), XB = tn(po), JB = tn(In), YB = tn(rr), Bi = _t ? _t.prototype : e, sr = Bi ? Bi.valueOf : e, ou = Bi ? Bi.toString : e;
        function B(t) {
          if (PA(t) && !nA(t) && !(t instanceof hA)) {
            if (t instanceof Ke)
              return t;
            if (EA.call(t, "__wrapped__"))
              return ac(t);
          }
          return new Ke(t);
        }
        var _n = /* @__PURE__ */ function() {
          function t() {
          }
          return function(r) {
            if (!OA(r))
              return {};
            if (tu)
              return tu(r);
            t.prototype = r;
            var a = new t();
            return t.prototype = e, a;
          };
        }();
        function gi() {
        }
        function Ke(t, r) {
          this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = e;
        }
        B.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: ld,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: ud,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: gl,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: B
          }
        }, B.prototype = gi.prototype, B.prototype.constructor = B, Ke.prototype = _n(gi.prototype), Ke.prototype.constructor = Ke;
        function hA(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = W, this.__views__ = [];
        }
        function ZB() {
          var t = new hA(this.__wrapped__);
          return t.__actions__ = ge(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ge(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ge(this.__views__), t;
        }
        function qB() {
          if (this.__filtered__) {
            var t = new hA(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function $B() {
          var t = this.__wrapped__.value(), r = this.__dir__, a = nA(t), u = r < 0, f = a ? t.length : 0, g = uw(0, f, this.__views__), C = g.start, Q = g.end, I = Q - C, H = u ? Q : C - 1, b = this.__iteratees__, L = b.length, O = 0, J = oe(I, this.__takeCount__);
          if (!a || !u && f == I && J == I)
            return Su(t, this.__actions__);
          var q = [];
          A:
            for (; I-- && O < J; ) {
              H += r;
              for (var iA = -1, $ = t[H]; ++iA < L; ) {
                var cA = b[iA], dA = cA.iteratee, Ee = cA.type, de = dA($);
                if (Ee == ie)
                  $ = de;
                else if (!de) {
                  if (Ee == xA)
                    continue A;
                  break A;
                }
              }
              q[O++] = $;
            }
          return q;
        }
        hA.prototype = _n(gi.prototype), hA.prototype.constructor = hA;
        function qt(t) {
          var r = -1, a = t == null ? 0 : t.length;
          for (this.clear(); ++r < a; ) {
            var u = t[r];
            this.set(u[0], u[1]);
          }
        }
        function jB() {
          this.__data__ = ir ? ir(null) : {}, this.size = 0;
        }
        function Ag(t) {
          var r = this.has(t) && delete this.__data__[t];
          return this.size -= r ? 1 : 0, r;
        }
        function eg(t) {
          var r = this.__data__;
          if (ir) {
            var a = r[t];
            return a === h ? e : a;
          }
          return EA.call(r, t) ? r[t] : e;
        }
        function tg(t) {
          var r = this.__data__;
          return ir ? r[t] !== e : EA.call(r, t);
        }
        function ng(t, r) {
          var a = this.__data__;
          return this.size += this.has(t) ? 0 : 1, a[t] = ir && r === e ? h : r, this;
        }
        qt.prototype.clear = jB, qt.prototype.delete = Ag, qt.prototype.get = eg, qt.prototype.has = tg, qt.prototype.set = ng;
        function lt(t) {
          var r = -1, a = t == null ? 0 : t.length;
          for (this.clear(); ++r < a; ) {
            var u = t[r];
            this.set(u[0], u[1]);
          }
        }
        function rg() {
          this.__data__ = [], this.size = 0;
        }
        function ig(t) {
          var r = this.__data__, a = wi(r, t);
          if (a < 0)
            return !1;
          var u = r.length - 1;
          return a == u ? r.pop() : ui.call(r, a, 1), --this.size, !0;
        }
        function sg(t) {
          var r = this.__data__, a = wi(r, t);
          return a < 0 ? e : r[a][1];
        }
        function og(t) {
          return wi(this.__data__, t) > -1;
        }
        function ag(t, r) {
          var a = this.__data__, u = wi(a, t);
          return u < 0 ? (++this.size, a.push([t, r])) : a[u][1] = r, this;
        }
        lt.prototype.clear = rg, lt.prototype.delete = ig, lt.prototype.get = sg, lt.prototype.has = og, lt.prototype.set = ag;
        function ut(t) {
          var r = -1, a = t == null ? 0 : t.length;
          for (this.clear(); ++r < a; ) {
            var u = t[r];
            this.set(u[0], u[1]);
          }
        }
        function lg() {
          this.size = 0, this.__data__ = {
            hash: new qt(),
            map: new (nr || lt)(),
            string: new qt()
          };
        }
        function ug(t) {
          var r = Hi(this, t).delete(t);
          return this.size -= r ? 1 : 0, r;
        }
        function cg(t) {
          return Hi(this, t).get(t);
        }
        function hg(t) {
          return Hi(this, t).has(t);
        }
        function fg(t, r) {
          var a = Hi(this, t), u = a.size;
          return a.set(t, r), this.size += a.size == u ? 0 : 1, this;
        }
        ut.prototype.clear = lg, ut.prototype.delete = ug, ut.prototype.get = cg, ut.prototype.has = hg, ut.prototype.set = fg;
        function $t(t) {
          var r = -1, a = t == null ? 0 : t.length;
          for (this.__data__ = new ut(); ++r < a; )
            this.add(t[r]);
        }
        function dg(t) {
          return this.__data__.set(t, h), this;
        }
        function Bg(t) {
          return this.__data__.has(t);
        }
        $t.prototype.add = $t.prototype.push = dg, $t.prototype.has = Bg;
        function Ye(t) {
          var r = this.__data__ = new lt(t);
          this.size = r.size;
        }
        function gg() {
          this.__data__ = new lt(), this.size = 0;
        }
        function wg(t) {
          var r = this.__data__, a = r.delete(t);
          return this.size = r.size, a;
        }
        function pg(t) {
          return this.__data__.get(t);
        }
        function Cg(t) {
          return this.__data__.has(t);
        }
        function mg(t, r) {
          var a = this.__data__;
          if (a instanceof lt) {
            var u = a.__data__;
            if (!nr || u.length < s - 1)
              return u.push([t, r]), this.size = ++a.size, this;
            a = this.__data__ = new ut(u);
          }
          return a.set(t, r), this.size = a.size, this;
        }
        Ye.prototype.clear = gg, Ye.prototype.delete = wg, Ye.prototype.get = pg, Ye.prototype.has = Cg, Ye.prototype.set = mg;
        function au(t, r) {
          var a = nA(t), u = !a && nn(t), f = !a && !u && xt(t), g = !a && !u && !f && Sn(t), C = a || u || f || g, Q = C ? co(t.length, bB) : [], I = Q.length;
          for (var H in t)
            (r || EA.call(t, H)) && !(C && // Safari 9 has enumerable `arguments.length` in strict mode.
            (H == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            f && (H == "offset" || H == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            g && (H == "buffer" || H == "byteLength" || H == "byteOffset") || // Skip index properties.
            dt(H, I))) && Q.push(H);
          return Q;
        }
        function lu(t) {
          var r = t.length;
          return r ? t[Ho(0, r - 1)] : e;
        }
        function Qg(t, r) {
          return bi(ge(t), jt(r, 0, t.length));
        }
        function Ug(t) {
          return bi(ge(t));
        }
        function Co(t, r, a) {
          (a !== e && !Ze(t[r], a) || a === e && !(r in t)) && ct(t, r, a);
        }
        function or(t, r, a) {
          var u = t[r];
          (!(EA.call(t, r) && Ze(u, a)) || a === e && !(r in t)) && ct(t, r, a);
        }
        function wi(t, r) {
          for (var a = t.length; a--; )
            if (Ze(t[a][0], r))
              return a;
          return -1;
        }
        function vg(t, r, a, u) {
          return yt(t, function(f, g, C) {
            r(u, f, a(f), C);
          }), u;
        }
        function uu(t, r) {
          return t && tt(r, jA(r), t);
        }
        function Fg(t, r) {
          return t && tt(r, pe(r), t);
        }
        function ct(t, r, a) {
          r == "__proto__" && ci ? ci(t, r, {
            configurable: !0,
            enumerable: !0,
            value: a,
            writable: !0
          }) : t[r] = a;
        }
        function mo(t, r) {
          for (var a = -1, u = r.length, f = _(u), g = t == null; ++a < u; )
            f[a] = g ? e : Aa(t, r[a]);
          return f;
        }
        function jt(t, r, a) {
          return t === t && (a !== e && (t = t <= a ? t : a), r !== e && (t = t >= r ? t : r)), t;
        }
        function Me(t, r, a, u, f, g) {
          var C, Q = r & p, I = r & m, H = r & U;
          if (a && (C = f ? a(t, u, f, g) : a(t)), C !== e)
            return C;
          if (!OA(t))
            return t;
          var b = nA(t);
          if (b) {
            if (C = hw(t), !Q)
              return ge(t, C);
          } else {
            var L = ae(t), O = L == Yr || L == hl;
            if (xt(t))
              return Tu(t, Q);
            if (L == at || L == gA || O && !f) {
              if (C = I || O ? {} : ju(t), !Q)
                return I ? ew(t, Fg(C, t)) : Aw(t, uu(C, t));
            } else {
              if (!bA[L])
                return f ? t : {};
              C = fw(t, L, Q);
            }
          }
          g || (g = new Ye());
          var J = g.get(t);
          if (J)
            return J;
          g.set(t, C), yc(t) ? t.forEach(function($) {
            C.add(Me($, r, a, $, t, g));
          }) : Ec(t) && t.forEach(function($, cA) {
            C.set(cA, Me($, r, a, cA, t, g));
          });
          var q = H ? I ? Po : Oo : I ? pe : jA, iA = b ? e : q(t);
          return Te(iA || t, function($, cA) {
            iA && (cA = $, $ = t[cA]), or(C, cA, Me($, r, a, cA, t, g));
          }), C;
        }
        function Ig(t) {
          var r = jA(t);
          return function(a) {
            return cu(a, t, r);
          };
        }
        function cu(t, r, a) {
          var u = a.length;
          if (t == null)
            return !u;
          for (t = HA(t); u--; ) {
            var f = a[u], g = r[f], C = t[f];
            if (C === e && !(f in t) || !g(C))
              return !1;
          }
          return !0;
        }
        function hu(t, r, a) {
          if (typeof t != "function")
            throw new De(l);
          return dr(function() {
            t.apply(e, a);
          }, r);
        }
        function ar(t, r, a, u) {
          var f = -1, g = Ai, C = !0, Q = t.length, I = [], H = r.length;
          if (!Q)
            return I;
          a && (r = KA(r, ve(a))), u ? (g = io, C = !1) : r.length >= s && (g = er, C = !1, r = new $t(r));
          A:
            for (; ++f < Q; ) {
              var b = t[f], L = a == null ? b : a(b);
              if (b = u || b !== 0 ? b : 0, C && L === L) {
                for (var O = H; O--; )
                  if (r[O] === L)
                    continue A;
                I.push(b);
              } else g(r, L, u) || I.push(b);
            }
          return I;
        }
        var yt = Ou(et), fu = Ou(Uo, !0);
        function Eg(t, r) {
          var a = !0;
          return yt(t, function(u, f, g) {
            return a = !!r(u, f, g), a;
          }), a;
        }
        function pi(t, r, a) {
          for (var u = -1, f = t.length; ++u < f; ) {
            var g = t[u], C = r(g);
            if (C != null && (Q === e ? C === C && !Ie(C) : a(C, Q)))
              var Q = C, I = g;
          }
          return I;
        }
        function _g(t, r, a, u) {
          var f = t.length;
          for (a = rA(a), a < 0 && (a = -a > f ? 0 : f + a), u = u === e || u > f ? f : rA(u), u < 0 && (u += f), u = a > u ? 0 : bc(u); a < u; )
            t[a++] = r;
          return t;
        }
        function du(t, r) {
          var a = [];
          return yt(t, function(u, f, g) {
            r(u, f, g) && a.push(u);
          }), a;
        }
        function te(t, r, a, u, f) {
          var g = -1, C = t.length;
          for (a || (a = Bw), f || (f = []); ++g < C; ) {
            var Q = t[g];
            r > 0 && a(Q) ? r > 1 ? te(Q, r - 1, a, u, f) : It(f, Q) : u || (f[f.length] = Q);
          }
          return f;
        }
        var Qo = Pu(), Bu = Pu(!0);
        function et(t, r) {
          return t && Qo(t, r, jA);
        }
        function Uo(t, r) {
          return t && Bu(t, r, jA);
        }
        function Ci(t, r) {
          return Ft(r, function(a) {
            return Bt(t[a]);
          });
        }
        function An(t, r) {
          r = bt(r, t);
          for (var a = 0, u = r.length; t != null && a < u; )
            t = t[nt(r[a++])];
          return a && a == u ? t : e;
        }
        function gu(t, r, a) {
          var u = r(t);
          return nA(t) ? u : It(u, a(t));
        }
        function he(t) {
          return t == null ? t === e ? td : Ad : Zt && Zt in HA(t) ? lw(t) : Uw(t);
        }
        function vo(t, r) {
          return t > r;
        }
        function yg(t, r) {
          return t != null && EA.call(t, r);
        }
        function Hg(t, r) {
          return t != null && r in HA(t);
        }
        function bg(t, r, a) {
          return t >= oe(r, a) && t < ZA(r, a);
        }
        function Fo(t, r, a) {
          for (var u = a ? io : Ai, f = t[0].length, g = t.length, C = g, Q = _(g), I = 1 / 0, H = []; C--; ) {
            var b = t[C];
            C && r && (b = KA(b, ve(r))), I = oe(b.length, I), Q[C] = !a && (r || f >= 120 && b.length >= 120) ? new $t(C && b) : e;
          }
          b = t[0];
          var L = -1, O = Q[0];
          A:
            for (; ++L < f && H.length < I; ) {
              var J = b[L], q = r ? r(J) : J;
              if (J = a || J !== 0 ? J : 0, !(O ? er(O, q) : u(H, q, a))) {
                for (C = g; --C; ) {
                  var iA = Q[C];
                  if (!(iA ? er(iA, q) : u(t[C], q, a)))
                    continue A;
                }
                O && O.push(q), H.push(J);
              }
            }
          return H;
        }
        function Sg(t, r, a, u) {
          return et(t, function(f, g, C) {
            r(u, a(f), g, C);
          }), u;
        }
        function lr(t, r, a) {
          r = bt(r, t), t = nc(t, r);
          var u = t == null ? t : t[nt(Oe(r))];
          return u == null ? e : Ue(u, t, a);
        }
        function wu(t) {
          return PA(t) && he(t) == gA;
        }
        function xg(t) {
          return PA(t) && he(t) == Ar;
        }
        function Lg(t) {
          return PA(t) && he(t) == ot;
        }
        function ur(t, r, a, u, f) {
          return t === r ? !0 : t == null || r == null || !PA(t) && !PA(r) ? t !== t && r !== r : Tg(t, r, a, u, ur, f);
        }
        function Tg(t, r, a, u, f, g) {
          var C = nA(t), Q = nA(r), I = C ? _A : ae(t), H = Q ? _A : ae(r);
          I = I == gA ? at : I, H = H == gA ? at : H;
          var b = I == at, L = H == at, O = I == H;
          if (O && xt(t)) {
            if (!xt(r))
              return !1;
            C = !0, b = !1;
          }
          if (O && !b)
            return g || (g = new Ye()), C || Sn(t) ? Zu(t, r, a, u, f, g) : ow(t, r, I, a, u, f, g);
          if (!(a & v)) {
            var J = b && EA.call(t, "__wrapped__"), q = L && EA.call(r, "__wrapped__");
            if (J || q) {
              var iA = J ? t.value() : t, $ = q ? r.value() : r;
              return g || (g = new Ye()), f(iA, $, a, u, g);
            }
          }
          return O ? (g || (g = new Ye()), aw(t, r, a, u, f, g)) : !1;
        }
        function Dg(t) {
          return PA(t) && ae(t) == ze;
        }
        function Io(t, r, a, u) {
          var f = a.length, g = f, C = !u;
          if (t == null)
            return !g;
          for (t = HA(t); f--; ) {
            var Q = a[f];
            if (C && Q[2] ? Q[1] !== t[Q[0]] : !(Q[0] in t))
              return !1;
          }
          for (; ++f < g; ) {
            Q = a[f];
            var I = Q[0], H = t[I], b = Q[1];
            if (C && Q[2]) {
              if (H === e && !(I in t))
                return !1;
            } else {
              var L = new Ye();
              if (u)
                var O = u(H, b, I, t, r, L);
              if (!(O === e ? ur(b, H, v | E, u, L) : O))
                return !1;
            }
          }
          return !0;
        }
        function pu(t) {
          if (!OA(t) || ww(t))
            return !1;
          var r = Bt(t) ? DB : Id;
          return r.test(tn(t));
        }
        function Kg(t) {
          return PA(t) && he(t) == qn;
        }
        function Mg(t) {
          return PA(t) && ae(t) == Xe;
        }
        function Rg(t) {
          return PA(t) && Ki(t.length) && !!LA[he(t)];
        }
        function Cu(t) {
          return typeof t == "function" ? t : t == null ? Ce : typeof t == "object" ? nA(t) ? Uu(t[0], t[1]) : Qu(t) : Gc(t);
        }
        function Eo(t) {
          if (!fr(t))
            return GB(t);
          var r = [];
          for (var a in HA(t))
            EA.call(t, a) && a != "constructor" && r.push(a);
          return r;
        }
        function Og(t) {
          if (!OA(t))
            return Qw(t);
          var r = fr(t), a = [];
          for (var u in t)
            u == "constructor" && (r || !EA.call(t, u)) || a.push(u);
          return a;
        }
        function _o(t, r) {
          return t < r;
        }
        function mu(t, r) {
          var a = -1, u = we(t) ? _(t.length) : [];
          return yt(t, function(f, g, C) {
            u[++a] = r(f, g, C);
          }), u;
        }
        function Qu(t) {
          var r = No(t);
          return r.length == 1 && r[0][2] ? ec(r[0][0], r[0][1]) : function(a) {
            return a === t || Io(a, t, r);
          };
        }
        function Uu(t, r) {
          return ko(t) && Ac(r) ? ec(nt(t), r) : function(a) {
            var u = Aa(a, t);
            return u === e && u === r ? ea(a, t) : ur(r, u, v | E);
          };
        }
        function mi(t, r, a, u, f) {
          t !== r && Qo(r, function(g, C) {
            if (f || (f = new Ye()), OA(g))
              Pg(t, r, C, a, mi, u, f);
            else {
              var Q = u ? u(zo(t, C), g, C + "", t, r, f) : e;
              Q === e && (Q = g), Co(t, C, Q);
            }
          }, pe);
        }
        function Pg(t, r, a, u, f, g, C) {
          var Q = zo(t, a), I = zo(r, a), H = C.get(I);
          if (H) {
            Co(t, a, H);
            return;
          }
          var b = g ? g(Q, I, a + "", t, r, C) : e, L = b === e;
          if (L) {
            var O = nA(I), J = !O && xt(I), q = !O && !J && Sn(I);
            b = I, O || J || q ? nA(Q) ? b = Q : NA(Q) ? b = ge(Q) : J ? (L = !1, b = Tu(I, !0)) : q ? (L = !1, b = Du(I, !0)) : b = [] : Br(I) || nn(I) ? (b = Q, nn(Q) ? b = Sc(Q) : (!OA(Q) || Bt(Q)) && (b = ju(I))) : L = !1;
          }
          L && (C.set(I, b), f(b, I, u, g, C), C.delete(I)), Co(t, a, b);
        }
        function vu(t, r) {
          var a = t.length;
          if (a)
            return r += r < 0 ? a : 0, dt(r, a) ? t[r] : e;
        }
        function Fu(t, r, a) {
          r.length ? r = KA(r, function(g) {
            return nA(g) ? function(C) {
              return An(C, g.length === 1 ? g[0] : g);
            } : g;
          }) : r = [Ce];
          var u = -1;
          r = KA(r, ve(Z()));
          var f = mu(t, function(g, C, Q) {
            var I = KA(r, function(H) {
              return H(g);
            });
            return { criteria: I, index: ++u, value: g };
          });
          return fB(f, function(g, C) {
            return jg(g, C, a);
          });
        }
        function Gg(t, r) {
          return Iu(t, r, function(a, u) {
            return ea(t, u);
          });
        }
        function Iu(t, r, a) {
          for (var u = -1, f = r.length, g = {}; ++u < f; ) {
            var C = r[u], Q = An(t, C);
            a(Q, C) && cr(g, bt(C, t), Q);
          }
          return g;
        }
        function Ng(t) {
          return function(r) {
            return An(r, t);
          };
        }
        function yo(t, r, a, u) {
          var f = u ? hB : mn, g = -1, C = r.length, Q = t;
          for (t === r && (r = ge(r)), a && (Q = KA(t, ve(a))); ++g < C; )
            for (var I = 0, H = r[g], b = a ? a(H) : H; (I = f(Q, b, I, u)) > -1; )
              Q !== t && ui.call(Q, I, 1), ui.call(t, I, 1);
          return t;
        }
        function Eu(t, r) {
          for (var a = t ? r.length : 0, u = a - 1; a--; ) {
            var f = r[a];
            if (a == u || f !== g) {
              var g = f;
              dt(f) ? ui.call(t, f, 1) : xo(t, f);
            }
          }
          return t;
        }
        function Ho(t, r) {
          return t + fi(su() * (r - t + 1));
        }
        function Vg(t, r, a, u) {
          for (var f = -1, g = ZA(hi((r - t) / (a || 1)), 0), C = _(g); g--; )
            C[u ? g : ++f] = t, t += a;
          return C;
        }
        function bo(t, r) {
          var a = "";
          if (!t || r < 1 || r > $A)
            return a;
          do
            r % 2 && (a += t), r = fi(r / 2), r && (t += t);
          while (r);
          return a;
        }
        function sA(t, r) {
          return Xo(tc(t, r, Ce), t + "");
        }
        function kg(t) {
          return lu(xn(t));
        }
        function Wg(t, r) {
          var a = xn(t);
          return bi(a, jt(r, 0, a.length));
        }
        function cr(t, r, a, u) {
          if (!OA(t))
            return t;
          r = bt(r, t);
          for (var f = -1, g = r.length, C = g - 1, Q = t; Q != null && ++f < g; ) {
            var I = nt(r[f]), H = a;
            if (I === "__proto__" || I === "constructor" || I === "prototype")
              return t;
            if (f != C) {
              var b = Q[I];
              H = u ? u(b, I, Q) : e, H === e && (H = OA(b) ? b : dt(r[f + 1]) ? [] : {});
            }
            or(Q, I, H), Q = Q[I];
          }
          return t;
        }
        var _u = di ? function(t, r) {
          return di.set(t, r), t;
        } : Ce, zg = ci ? function(t, r) {
          return ci(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: na(r),
            writable: !0
          });
        } : Ce;
        function Xg(t) {
          return bi(xn(t));
        }
        function Re(t, r, a) {
          var u = -1, f = t.length;
          r < 0 && (r = -r > f ? 0 : f + r), a = a > f ? f : a, a < 0 && (a += f), f = r > a ? 0 : a - r >>> 0, r >>>= 0;
          for (var g = _(f); ++u < f; )
            g[u] = t[u + r];
          return g;
        }
        function Jg(t, r) {
          var a;
          return yt(t, function(u, f, g) {
            return a = r(u, f, g), !a;
          }), !!a;
        }
        function Qi(t, r, a) {
          var u = 0, f = t == null ? u : t.length;
          if (typeof r == "number" && r === r && f <= oA) {
            for (; u < f; ) {
              var g = u + f >>> 1, C = t[g];
              C !== null && !Ie(C) && (a ? C <= r : C < r) ? u = g + 1 : f = g;
            }
            return f;
          }
          return So(t, r, Ce, a);
        }
        function So(t, r, a, u) {
          var f = 0, g = t == null ? 0 : t.length;
          if (g === 0)
            return 0;
          r = a(r);
          for (var C = r !== r, Q = r === null, I = Ie(r), H = r === e; f < g; ) {
            var b = fi((f + g) / 2), L = a(t[b]), O = L !== e, J = L === null, q = L === L, iA = Ie(L);
            if (C)
              var $ = u || q;
            else H ? $ = q && (u || O) : Q ? $ = q && O && (u || !J) : I ? $ = q && O && !J && (u || !iA) : J || iA ? $ = !1 : $ = u ? L <= r : L < r;
            $ ? f = b + 1 : g = b;
          }
          return oe(g, BA);
        }
        function yu(t, r) {
          for (var a = -1, u = t.length, f = 0, g = []; ++a < u; ) {
            var C = t[a], Q = r ? r(C) : C;
            if (!a || !Ze(Q, I)) {
              var I = Q;
              g[f++] = C === 0 ? 0 : C;
            }
          }
          return g;
        }
        function Hu(t) {
          return typeof t == "number" ? t : Ie(t) ? R : +t;
        }
        function Fe(t) {
          if (typeof t == "string")
            return t;
          if (nA(t))
            return KA(t, Fe) + "";
          if (Ie(t))
            return ou ? ou.call(t) : "";
          var r = t + "";
          return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
        }
        function Ht(t, r, a) {
          var u = -1, f = Ai, g = t.length, C = !0, Q = [], I = Q;
          if (a)
            C = !1, f = io;
          else if (g >= s) {
            var H = r ? null : iw(t);
            if (H)
              return ti(H);
            C = !1, f = er, I = new $t();
          } else
            I = r ? [] : Q;
          A:
            for (; ++u < g; ) {
              var b = t[u], L = r ? r(b) : b;
              if (b = a || b !== 0 ? b : 0, C && L === L) {
                for (var O = I.length; O--; )
                  if (I[O] === L)
                    continue A;
                r && I.push(L), Q.push(b);
              } else f(I, L, a) || (I !== Q && I.push(L), Q.push(b));
            }
          return Q;
        }
        function xo(t, r) {
          return r = bt(r, t), t = nc(t, r), t == null || delete t[nt(Oe(r))];
        }
        function bu(t, r, a, u) {
          return cr(t, r, a(An(t, r)), u);
        }
        function Ui(t, r, a, u) {
          for (var f = t.length, g = u ? f : -1; (u ? g-- : ++g < f) && r(t[g], g, t); )
            ;
          return a ? Re(t, u ? 0 : g, u ? g + 1 : f) : Re(t, u ? g + 1 : 0, u ? f : g);
        }
        function Su(t, r) {
          var a = t;
          return a instanceof hA && (a = a.value()), so(r, function(u, f) {
            return f.func.apply(f.thisArg, It([u], f.args));
          }, a);
        }
        function Lo(t, r, a) {
          var u = t.length;
          if (u < 2)
            return u ? Ht(t[0]) : [];
          for (var f = -1, g = _(u); ++f < u; )
            for (var C = t[f], Q = -1; ++Q < u; )
              Q != f && (g[f] = ar(g[f] || C, t[Q], r, a));
          return Ht(te(g, 1), r, a);
        }
        function xu(t, r, a) {
          for (var u = -1, f = t.length, g = r.length, C = {}; ++u < f; ) {
            var Q = u < g ? r[u] : e;
            a(C, t[u], Q);
          }
          return C;
        }
        function To(t) {
          return NA(t) ? t : [];
        }
        function Do(t) {
          return typeof t == "function" ? t : Ce;
        }
        function bt(t, r) {
          return nA(t) ? t : ko(t, r) ? [t] : oc(FA(t));
        }
        var Yg = sA;
        function St(t, r, a) {
          var u = t.length;
          return a = a === e ? u : a, !r && a >= u ? t : Re(t, r, a);
        }
        var Lu = KB || function(t) {
          return ee.clearTimeout(t);
        };
        function Tu(t, r) {
          if (r)
            return t.slice();
          var a = t.length, u = eu ? eu(a) : new t.constructor(a);
          return t.copy(u), u;
        }
        function Ko(t) {
          var r = new t.constructor(t.byteLength);
          return new ai(r).set(new ai(t)), r;
        }
        function Zg(t, r) {
          var a = r ? Ko(t.buffer) : t.buffer;
          return new t.constructor(a, t.byteOffset, t.byteLength);
        }
        function qg(t) {
          var r = new t.constructor(t.source, wl.exec(t));
          return r.lastIndex = t.lastIndex, r;
        }
        function $g(t) {
          return sr ? HA(sr.call(t)) : {};
        }
        function Du(t, r) {
          var a = r ? Ko(t.buffer) : t.buffer;
          return new t.constructor(a, t.byteOffset, t.length);
        }
        function Ku(t, r) {
          if (t !== r) {
            var a = t !== e, u = t === null, f = t === t, g = Ie(t), C = r !== e, Q = r === null, I = r === r, H = Ie(r);
            if (!Q && !H && !g && t > r || g && C && I && !Q && !H || u && C && I || !a && I || !f)
              return 1;
            if (!u && !g && !H && t < r || H && a && f && !u && !g || Q && a && f || !C && f || !I)
              return -1;
          }
          return 0;
        }
        function jg(t, r, a) {
          for (var u = -1, f = t.criteria, g = r.criteria, C = f.length, Q = a.length; ++u < C; ) {
            var I = Ku(f[u], g[u]);
            if (I) {
              if (u >= Q)
                return I;
              var H = a[u];
              return I * (H == "desc" ? -1 : 1);
            }
          }
          return t.index - r.index;
        }
        function Mu(t, r, a, u) {
          for (var f = -1, g = t.length, C = a.length, Q = -1, I = r.length, H = ZA(g - C, 0), b = _(I + H), L = !u; ++Q < I; )
            b[Q] = r[Q];
          for (; ++f < C; )
            (L || f < g) && (b[a[f]] = t[f]);
          for (; H--; )
            b[Q++] = t[f++];
          return b;
        }
        function Ru(t, r, a, u) {
          for (var f = -1, g = t.length, C = -1, Q = a.length, I = -1, H = r.length, b = ZA(g - Q, 0), L = _(b + H), O = !u; ++f < b; )
            L[f] = t[f];
          for (var J = f; ++I < H; )
            L[J + I] = r[I];
          for (; ++C < Q; )
            (O || f < g) && (L[J + a[C]] = t[f++]);
          return L;
        }
        function ge(t, r) {
          var a = -1, u = t.length;
          for (r || (r = _(u)); ++a < u; )
            r[a] = t[a];
          return r;
        }
        function tt(t, r, a, u) {
          var f = !a;
          a || (a = {});
          for (var g = -1, C = r.length; ++g < C; ) {
            var Q = r[g], I = u ? u(a[Q], t[Q], Q, a, t) : e;
            I === e && (I = t[Q]), f ? ct(a, Q, I) : or(a, Q, I);
          }
          return a;
        }
        function Aw(t, r) {
          return tt(t, Vo(t), r);
        }
        function ew(t, r) {
          return tt(t, qu(t), r);
        }
        function vi(t, r) {
          return function(a, u) {
            var f = nA(a) ? sB : vg, g = r ? r() : {};
            return f(a, t, Z(u, 2), g);
          };
        }
        function yn(t) {
          return sA(function(r, a) {
            var u = -1, f = a.length, g = f > 1 ? a[f - 1] : e, C = f > 2 ? a[2] : e;
            for (g = t.length > 3 && typeof g == "function" ? (f--, g) : e, C && fe(a[0], a[1], C) && (g = f < 3 ? e : g, f = 1), r = HA(r); ++u < f; ) {
              var Q = a[u];
              Q && t(r, Q, u, g);
            }
            return r;
          });
        }
        function Ou(t, r) {
          return function(a, u) {
            if (a == null)
              return a;
            if (!we(a))
              return t(a, u);
            for (var f = a.length, g = r ? f : -1, C = HA(a); (r ? g-- : ++g < f) && u(C[g], g, C) !== !1; )
              ;
            return a;
          };
        }
        function Pu(t) {
          return function(r, a, u) {
            for (var f = -1, g = HA(r), C = u(r), Q = C.length; Q--; ) {
              var I = C[t ? Q : ++f];
              if (a(g[I], I, g) === !1)
                break;
            }
            return r;
          };
        }
        function tw(t, r, a) {
          var u = r & T, f = hr(t);
          function g() {
            var C = this && this !== ee && this instanceof g ? f : t;
            return C.apply(u ? a : this, arguments);
          }
          return g;
        }
        function Gu(t) {
          return function(r) {
            r = FA(r);
            var a = Qn(r) ? Je(r) : e, u = a ? a[0] : r.charAt(0), f = a ? St(a, 1).join("") : r.slice(1);
            return u[t]() + f;
          };
        }
        function Hn(t) {
          return function(r) {
            return so(Oc(Rc(r).replace(zd, "")), t, "");
          };
        }
        function hr(t) {
          return function() {
            var r = arguments;
            switch (r.length) {
              case 0:
                return new t();
              case 1:
                return new t(r[0]);
              case 2:
                return new t(r[0], r[1]);
              case 3:
                return new t(r[0], r[1], r[2]);
              case 4:
                return new t(r[0], r[1], r[2], r[3]);
              case 5:
                return new t(r[0], r[1], r[2], r[3], r[4]);
              case 6:
                return new t(r[0], r[1], r[2], r[3], r[4], r[5]);
              case 7:
                return new t(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
            }
            var a = _n(t.prototype), u = t.apply(a, r);
            return OA(u) ? u : a;
          };
        }
        function nw(t, r, a) {
          var u = hr(t);
          function f() {
            for (var g = arguments.length, C = _(g), Q = g, I = bn(f); Q--; )
              C[Q] = arguments[Q];
            var H = g < 3 && C[0] !== I && C[g - 1] !== I ? [] : Et(C, I);
            if (g -= H.length, g < a)
              return zu(
                t,
                r,
                Fi,
                f.placeholder,
                e,
                C,
                H,
                e,
                e,
                a - g
              );
            var b = this && this !== ee && this instanceof f ? u : t;
            return Ue(b, this, C);
          }
          return f;
        }
        function Nu(t) {
          return function(r, a, u) {
            var f = HA(r);
            if (!we(r)) {
              var g = Z(a, 3);
              r = jA(r), a = function(Q) {
                return g(f[Q], Q, f);
              };
            }
            var C = t(r, a, u);
            return C > -1 ? f[g ? r[C] : C] : e;
          };
        }
        function Vu(t) {
          return ft(function(r) {
            var a = r.length, u = a, f = Ke.prototype.thru;
            for (t && r.reverse(); u--; ) {
              var g = r[u];
              if (typeof g != "function")
                throw new De(l);
              if (f && !C && yi(g) == "wrapper")
                var C = new Ke([], !0);
            }
            for (u = C ? u : a; ++u < a; ) {
              g = r[u];
              var Q = yi(g), I = Q == "wrapper" ? Go(g) : e;
              I && Wo(I[0]) && I[1] == (z | Y | K | j) && !I[4].length && I[9] == 1 ? C = C[yi(I[0])].apply(C, I[3]) : C = g.length == 1 && Wo(g) ? C[Q]() : C.thru(g);
            }
            return function() {
              var H = arguments, b = H[0];
              if (C && H.length == 1 && nA(b))
                return C.plant(b).value();
              for (var L = 0, O = a ? r[L].apply(this, H) : b; ++L < a; )
                O = r[L].call(this, O);
              return O;
            };
          });
        }
        function Fi(t, r, a, u, f, g, C, Q, I, H) {
          var b = r & z, L = r & T, O = r & S, J = r & (Y | X), q = r & G, iA = O ? e : hr(t);
          function $() {
            for (var cA = arguments.length, dA = _(cA), Ee = cA; Ee--; )
              dA[Ee] = arguments[Ee];
            if (J)
              var de = bn($), _e = BB(dA, de);
            if (u && (dA = Mu(dA, u, f, J)), g && (dA = Ru(dA, g, C, J)), cA -= _e, J && cA < H) {
              var VA = Et(dA, de);
              return zu(
                t,
                r,
                Fi,
                $.placeholder,
                a,
                dA,
                VA,
                Q,
                I,
                H - cA
              );
            }
            var qe = L ? a : this, wt = O ? qe[t] : t;
            return cA = dA.length, Q ? dA = vw(dA, Q) : q && cA > 1 && dA.reverse(), b && I < cA && (dA.length = I), this && this !== ee && this instanceof $ && (wt = iA || hr(wt)), wt.apply(qe, dA);
          }
          return $;
        }
        function ku(t, r) {
          return function(a, u) {
            return Sg(a, t, r(u), {});
          };
        }
        function Ii(t, r) {
          return function(a, u) {
            var f;
            if (a === e && u === e)
              return r;
            if (a !== e && (f = a), u !== e) {
              if (f === e)
                return u;
              typeof a == "string" || typeof u == "string" ? (a = Fe(a), u = Fe(u)) : (a = Hu(a), u = Hu(u)), f = t(a, u);
            }
            return f;
          };
        }
        function Mo(t) {
          return ft(function(r) {
            return r = KA(r, ve(Z())), sA(function(a) {
              var u = this;
              return t(r, function(f) {
                return Ue(f, u, a);
              });
            });
          });
        }
        function Ei(t, r) {
          r = r === e ? " " : Fe(r);
          var a = r.length;
          if (a < 2)
            return a ? bo(r, t) : r;
          var u = bo(r, hi(t / Un(r)));
          return Qn(r) ? St(Je(u), 0, t).join("") : u.slice(0, t);
        }
        function rw(t, r, a, u) {
          var f = r & T, g = hr(t);
          function C() {
            for (var Q = -1, I = arguments.length, H = -1, b = u.length, L = _(b + I), O = this && this !== ee && this instanceof C ? g : t; ++H < b; )
              L[H] = u[H];
            for (; I--; )
              L[H++] = arguments[++Q];
            return Ue(O, f ? a : this, L);
          }
          return C;
        }
        function Wu(t) {
          return function(r, a, u) {
            return u && typeof u != "number" && fe(r, a, u) && (a = u = e), r = gt(r), a === e ? (a = r, r = 0) : a = gt(a), u = u === e ? r < a ? 1 : -1 : gt(u), Vg(r, a, u, t);
          };
        }
        function _i(t) {
          return function(r, a) {
            return typeof r == "string" && typeof a == "string" || (r = Pe(r), a = Pe(a)), t(r, a);
          };
        }
        function zu(t, r, a, u, f, g, C, Q, I, H) {
          var b = r & Y, L = b ? C : e, O = b ? e : C, J = b ? g : e, q = b ? e : g;
          r |= b ? K : D, r &= ~(b ? D : K), r & x || (r &= -4);
          var iA = [
            t,
            r,
            f,
            J,
            L,
            q,
            O,
            Q,
            I,
            H
          ], $ = a.apply(e, iA);
          return Wo(t) && rc($, iA), $.placeholder = u, ic($, t, r);
        }
        function Ro(t) {
          var r = YA[t];
          return function(a, u) {
            if (a = Pe(a), u = u == null ? 0 : oe(rA(u), 292), u && iu(a)) {
              var f = (FA(a) + "e").split("e"), g = r(f[0] + "e" + (+f[1] + u));
              return f = (FA(g) + "e").split("e"), +(f[0] + "e" + (+f[1] - u));
            }
            return r(a);
          };
        }
        var iw = In && 1 / ti(new In([, -0]))[1] == QA ? function(t) {
          return new In(t);
        } : sa;
        function Xu(t) {
          return function(r) {
            var a = ae(r);
            return a == ze ? fo(r) : a == Xe ? UB(r) : dB(r, t(r));
          };
        }
        function ht(t, r, a, u, f, g, C, Q) {
          var I = r & S;
          if (!I && typeof t != "function")
            throw new De(l);
          var H = u ? u.length : 0;
          if (H || (r &= -97, u = f = e), C = C === e ? C : ZA(rA(C), 0), Q = Q === e ? Q : rA(Q), H -= f ? f.length : 0, r & D) {
            var b = u, L = f;
            u = f = e;
          }
          var O = I ? e : Go(t), J = [
            t,
            r,
            a,
            u,
            f,
            b,
            L,
            g,
            C,
            Q
          ];
          if (O && mw(J, O), t = J[0], r = J[1], a = J[2], u = J[3], f = J[4], Q = J[9] = J[9] === e ? I ? 0 : t.length : ZA(J[9] - H, 0), !Q && r & (Y | X) && (r &= -25), !r || r == T)
            var q = tw(t, r, a);
          else r == Y || r == X ? q = nw(t, r, Q) : (r == K || r == (T | K)) && !f.length ? q = rw(t, r, a, u) : q = Fi.apply(e, J);
          var iA = O ? _u : rc;
          return ic(iA(q, J), t, r);
        }
        function Ju(t, r, a, u) {
          return t === e || Ze(t, Fn[a]) && !EA.call(u, a) ? r : t;
        }
        function Yu(t, r, a, u, f, g) {
          return OA(t) && OA(r) && (g.set(r, t), mi(t, r, e, Yu, g), g.delete(r)), t;
        }
        function sw(t) {
          return Br(t) ? e : t;
        }
        function Zu(t, r, a, u, f, g) {
          var C = a & v, Q = t.length, I = r.length;
          if (Q != I && !(C && I > Q))
            return !1;
          var H = g.get(t), b = g.get(r);
          if (H && b)
            return H == r && b == t;
          var L = -1, O = !0, J = a & E ? new $t() : e;
          for (g.set(t, r), g.set(r, t); ++L < Q; ) {
            var q = t[L], iA = r[L];
            if (u)
              var $ = C ? u(iA, q, L, r, t, g) : u(q, iA, L, t, r, g);
            if ($ !== e) {
              if ($)
                continue;
              O = !1;
              break;
            }
            if (J) {
              if (!oo(r, function(cA, dA) {
                if (!er(J, dA) && (q === cA || f(q, cA, a, u, g)))
                  return J.push(dA);
              })) {
                O = !1;
                break;
              }
            } else if (!(q === iA || f(q, iA, a, u, g))) {
              O = !1;
              break;
            }
          }
          return g.delete(t), g.delete(r), O;
        }
        function ow(t, r, a, u, f, g, C) {
          switch (a) {
            case pn:
              if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset)
                return !1;
              t = t.buffer, r = r.buffer;
            case Ar:
              return !(t.byteLength != r.byteLength || !g(new ai(t), new ai(r)));
            case se:
            case ot:
            case Zn:
              return Ze(+t, +r);
            case Jr:
              return t.name == r.name && t.message == r.message;
            case qn:
            case $n:
              return t == r + "";
            case ze:
              var Q = fo;
            case Xe:
              var I = u & v;
              if (Q || (Q = ti), t.size != r.size && !I)
                return !1;
              var H = C.get(t);
              if (H)
                return H == r;
              u |= E, C.set(t, r);
              var b = Zu(Q(t), Q(r), u, f, g, C);
              return C.delete(t), b;
            case Zr:
              if (sr)
                return sr.call(t) == sr.call(r);
          }
          return !1;
        }
        function aw(t, r, a, u, f, g) {
          var C = a & v, Q = Oo(t), I = Q.length, H = Oo(r), b = H.length;
          if (I != b && !C)
            return !1;
          for (var L = I; L--; ) {
            var O = Q[L];
            if (!(C ? O in r : EA.call(r, O)))
              return !1;
          }
          var J = g.get(t), q = g.get(r);
          if (J && q)
            return J == r && q == t;
          var iA = !0;
          g.set(t, r), g.set(r, t);
          for (var $ = C; ++L < I; ) {
            O = Q[L];
            var cA = t[O], dA = r[O];
            if (u)
              var Ee = C ? u(dA, cA, O, r, t, g) : u(cA, dA, O, t, r, g);
            if (!(Ee === e ? cA === dA || f(cA, dA, a, u, g) : Ee)) {
              iA = !1;
              break;
            }
            $ || ($ = O == "constructor");
          }
          if (iA && !$) {
            var de = t.constructor, _e = r.constructor;
            de != _e && "constructor" in t && "constructor" in r && !(typeof de == "function" && de instanceof de && typeof _e == "function" && _e instanceof _e) && (iA = !1);
          }
          return g.delete(t), g.delete(r), iA;
        }
        function ft(t) {
          return Xo(tc(t, e, cc), t + "");
        }
        function Oo(t) {
          return gu(t, jA, Vo);
        }
        function Po(t) {
          return gu(t, pe, qu);
        }
        var Go = di ? function(t) {
          return di.get(t);
        } : sa;
        function yi(t) {
          for (var r = t.name + "", a = En[r], u = EA.call(En, r) ? a.length : 0; u--; ) {
            var f = a[u], g = f.func;
            if (g == null || g == t)
              return f.name;
          }
          return r;
        }
        function bn(t) {
          var r = EA.call(B, "placeholder") ? B : t;
          return r.placeholder;
        }
        function Z() {
          var t = B.iteratee || ra;
          return t = t === ra ? Cu : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function Hi(t, r) {
          var a = t.__data__;
          return gw(r) ? a[typeof r == "string" ? "string" : "hash"] : a.map;
        }
        function No(t) {
          for (var r = jA(t), a = r.length; a--; ) {
            var u = r[a], f = t[u];
            r[a] = [u, f, Ac(f)];
          }
          return r;
        }
        function en(t, r) {
          var a = CB(t, r);
          return pu(a) ? a : e;
        }
        function lw(t) {
          var r = EA.call(t, Zt), a = t[Zt];
          try {
            t[Zt] = e;
            var u = !0;
          } catch {
          }
          var f = si.call(t);
          return u && (r ? t[Zt] = a : delete t[Zt]), f;
        }
        var Vo = go ? function(t) {
          return t == null ? [] : (t = HA(t), Ft(go(t), function(r) {
            return nu.call(t, r);
          }));
        } : oa, qu = go ? function(t) {
          for (var r = []; t; )
            It(r, Vo(t)), t = li(t);
          return r;
        } : oa, ae = he;
        (wo && ae(new wo(new ArrayBuffer(1))) != pn || nr && ae(new nr()) != ze || po && ae(po.resolve()) != fl || In && ae(new In()) != Xe || rr && ae(new rr()) != jn) && (ae = function(t) {
          var r = he(t), a = r == at ? t.constructor : e, u = a ? tn(a) : "";
          if (u)
            switch (u) {
              case WB:
                return pn;
              case zB:
                return ze;
              case XB:
                return fl;
              case JB:
                return Xe;
              case YB:
                return jn;
            }
          return r;
        });
        function uw(t, r, a) {
          for (var u = -1, f = a.length; ++u < f; ) {
            var g = a[u], C = g.size;
            switch (g.type) {
              case "drop":
                t += C;
                break;
              case "dropRight":
                r -= C;
                break;
              case "take":
                r = oe(r, t + C);
                break;
              case "takeRight":
                t = ZA(t, r - C);
                break;
            }
          }
          return { start: t, end: r };
        }
        function cw(t) {
          var r = t.match(wd);
          return r ? r[1].split(pd) : [];
        }
        function $u(t, r, a) {
          r = bt(r, t);
          for (var u = -1, f = r.length, g = !1; ++u < f; ) {
            var C = nt(r[u]);
            if (!(g = t != null && a(t, C)))
              break;
            t = t[C];
          }
          return g || ++u != f ? g : (f = t == null ? 0 : t.length, !!f && Ki(f) && dt(C, f) && (nA(t) || nn(t)));
        }
        function hw(t) {
          var r = t.length, a = new t.constructor(r);
          return r && typeof t[0] == "string" && EA.call(t, "index") && (a.index = t.index, a.input = t.input), a;
        }
        function ju(t) {
          return typeof t.constructor == "function" && !fr(t) ? _n(li(t)) : {};
        }
        function fw(t, r, a) {
          var u = t.constructor;
          switch (r) {
            case Ar:
              return Ko(t);
            case se:
            case ot:
              return new u(+t);
            case pn:
              return Zg(t, a);
            case Gs:
            case Ns:
            case Vs:
            case ks:
            case Ws:
            case zs:
            case Xs:
            case Js:
            case Ys:
              return Du(t, a);
            case ze:
              return new u();
            case Zn:
            case $n:
              return new u(t);
            case qn:
              return qg(t);
            case Xe:
              return new u();
            case Zr:
              return $g(t);
          }
        }
        function dw(t, r) {
          var a = r.length;
          if (!a)
            return t;
          var u = a - 1;
          return r[u] = (a > 1 ? "& " : "") + r[u], r = r.join(a > 2 ? ", " : " "), t.replace(gd, `{
/* [wrapped with ` + r + `] */
`);
        }
        function Bw(t) {
          return nA(t) || nn(t) || !!(ru && t && t[ru]);
        }
        function dt(t, r) {
          var a = typeof t;
          return r = r ?? $A, !!r && (a == "number" || a != "symbol" && _d.test(t)) && t > -1 && t % 1 == 0 && t < r;
        }
        function fe(t, r, a) {
          if (!OA(a))
            return !1;
          var u = typeof r;
          return (u == "number" ? we(a) && dt(r, a.length) : u == "string" && r in a) ? Ze(a[r], t) : !1;
        }
        function ko(t, r) {
          if (nA(t))
            return !1;
          var a = typeof t;
          return a == "number" || a == "symbol" || a == "boolean" || t == null || Ie(t) ? !0 : hd.test(t) || !cd.test(t) || r != null && t in HA(r);
        }
        function gw(t) {
          var r = typeof t;
          return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
        }
        function Wo(t) {
          var r = yi(t), a = B[r];
          if (typeof a != "function" || !(r in hA.prototype))
            return !1;
          if (t === a)
            return !0;
          var u = Go(a);
          return !!u && t === u[0];
        }
        function ww(t) {
          return !!Au && Au in t;
        }
        var pw = ri ? Bt : aa;
        function fr(t) {
          var r = t && t.constructor, a = typeof r == "function" && r.prototype || Fn;
          return t === a;
        }
        function Ac(t) {
          return t === t && !OA(t);
        }
        function ec(t, r) {
          return function(a) {
            return a == null ? !1 : a[t] === r && (r !== e || t in HA(a));
          };
        }
        function Cw(t) {
          var r = Ti(t, function(u) {
            return a.size === d && a.clear(), u;
          }), a = r.cache;
          return r;
        }
        function mw(t, r) {
          var a = t[1], u = r[1], f = a | u, g = f < (T | S | z), C = u == z && a == Y || u == z && a == j && t[7].length <= r[8] || u == (z | j) && r[7].length <= r[8] && a == Y;
          if (!(g || C))
            return t;
          u & T && (t[2] = r[2], f |= a & T ? 0 : x);
          var Q = r[3];
          if (Q) {
            var I = t[3];
            t[3] = I ? Mu(I, Q, r[4]) : Q, t[4] = I ? Et(t[3], w) : r[4];
          }
          return Q = r[5], Q && (I = t[5], t[5] = I ? Ru(I, Q, r[6]) : Q, t[6] = I ? Et(t[5], w) : r[6]), Q = r[7], Q && (t[7] = Q), u & z && (t[8] = t[8] == null ? r[8] : oe(t[8], r[8])), t[9] == null && (t[9] = r[9]), t[0] = r[0], t[1] = f, t;
        }
        function Qw(t) {
          var r = [];
          if (t != null)
            for (var a in HA(t))
              r.push(a);
          return r;
        }
        function Uw(t) {
          return si.call(t);
        }
        function tc(t, r, a) {
          return r = ZA(r === e ? t.length - 1 : r, 0), function() {
            for (var u = arguments, f = -1, g = ZA(u.length - r, 0), C = _(g); ++f < g; )
              C[f] = u[r + f];
            f = -1;
            for (var Q = _(r + 1); ++f < r; )
              Q[f] = u[f];
            return Q[r] = a(C), Ue(t, this, Q);
          };
        }
        function nc(t, r) {
          return r.length < 2 ? t : An(t, Re(r, 0, -1));
        }
        function vw(t, r) {
          for (var a = t.length, u = oe(r.length, a), f = ge(t); u--; ) {
            var g = r[u];
            t[u] = dt(g, a) ? f[g] : e;
          }
          return t;
        }
        function zo(t, r) {
          if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
            return t[r];
        }
        var rc = sc(_u), dr = RB || function(t, r) {
          return ee.setTimeout(t, r);
        }, Xo = sc(zg);
        function ic(t, r, a) {
          var u = r + "";
          return Xo(t, dw(u, Fw(cw(u), a)));
        }
        function sc(t) {
          var r = 0, a = 0;
          return function() {
            var u = NB(), f = lA - (u - a);
            if (a = u, f > 0) {
              if (++r >= RA)
                return arguments[0];
            } else
              r = 0;
            return t.apply(e, arguments);
          };
        }
        function bi(t, r) {
          var a = -1, u = t.length, f = u - 1;
          for (r = r === e ? u : r; ++a < r; ) {
            var g = Ho(a, f), C = t[g];
            t[g] = t[a], t[a] = C;
          }
          return t.length = r, t;
        }
        var oc = Cw(function(t) {
          var r = [];
          return t.charCodeAt(0) === 46 && r.push(""), t.replace(fd, function(a, u, f, g) {
            r.push(f ? g.replace(Qd, "$1") : u || a);
          }), r;
        });
        function nt(t) {
          if (typeof t == "string" || Ie(t))
            return t;
          var r = t + "";
          return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
        }
        function tn(t) {
          if (t != null) {
            try {
              return ii.call(t);
            } catch {
            }
            try {
              return t + "";
            } catch {
            }
          }
          return "";
        }
        function Fw(t, r) {
          return Te(uA, function(a) {
            var u = "_." + a[0];
            r & a[1] && !Ai(t, u) && t.push(u);
          }), t.sort();
        }
        function ac(t) {
          if (t instanceof hA)
            return t.clone();
          var r = new Ke(t.__wrapped__, t.__chain__);
          return r.__actions__ = ge(t.__actions__), r.__index__ = t.__index__, r.__values__ = t.__values__, r;
        }
        function Iw(t, r, a) {
          (a ? fe(t, r, a) : r === e) ? r = 1 : r = ZA(rA(r), 0);
          var u = t == null ? 0 : t.length;
          if (!u || r < 1)
            return [];
          for (var f = 0, g = 0, C = _(hi(u / r)); f < u; )
            C[g++] = Re(t, f, f += r);
          return C;
        }
        function Ew(t) {
          for (var r = -1, a = t == null ? 0 : t.length, u = 0, f = []; ++r < a; ) {
            var g = t[r];
            g && (f[u++] = g);
          }
          return f;
        }
        function _w() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var r = _(t - 1), a = arguments[0], u = t; u--; )
            r[u - 1] = arguments[u];
          return It(nA(a) ? ge(a) : [a], te(r, 1));
        }
        var yw = sA(function(t, r) {
          return NA(t) ? ar(t, te(r, 1, NA, !0)) : [];
        }), Hw = sA(function(t, r) {
          var a = Oe(r);
          return NA(a) && (a = e), NA(t) ? ar(t, te(r, 1, NA, !0), Z(a, 2)) : [];
        }), bw = sA(function(t, r) {
          var a = Oe(r);
          return NA(a) && (a = e), NA(t) ? ar(t, te(r, 1, NA, !0), e, a) : [];
        });
        function Sw(t, r, a) {
          var u = t == null ? 0 : t.length;
          return u ? (r = a || r === e ? 1 : rA(r), Re(t, r < 0 ? 0 : r, u)) : [];
        }
        function xw(t, r, a) {
          var u = t == null ? 0 : t.length;
          return u ? (r = a || r === e ? 1 : rA(r), r = u - r, Re(t, 0, r < 0 ? 0 : r)) : [];
        }
        function Lw(t, r) {
          return t && t.length ? Ui(t, Z(r, 3), !0, !0) : [];
        }
        function Tw(t, r) {
          return t && t.length ? Ui(t, Z(r, 3), !0) : [];
        }
        function Dw(t, r, a, u) {
          var f = t == null ? 0 : t.length;
          return f ? (a && typeof a != "number" && fe(t, r, a) && (a = 0, u = f), _g(t, r, a, u)) : [];
        }
        function lc(t, r, a) {
          var u = t == null ? 0 : t.length;
          if (!u)
            return -1;
          var f = a == null ? 0 : rA(a);
          return f < 0 && (f = ZA(u + f, 0)), ei(t, Z(r, 3), f);
        }
        function uc(t, r, a) {
          var u = t == null ? 0 : t.length;
          if (!u)
            return -1;
          var f = u - 1;
          return a !== e && (f = rA(a), f = a < 0 ? ZA(u + f, 0) : oe(f, u - 1)), ei(t, Z(r, 3), f, !0);
        }
        function cc(t) {
          var r = t == null ? 0 : t.length;
          return r ? te(t, 1) : [];
        }
        function Kw(t) {
          var r = t == null ? 0 : t.length;
          return r ? te(t, QA) : [];
        }
        function Mw(t, r) {
          var a = t == null ? 0 : t.length;
          return a ? (r = r === e ? 1 : rA(r), te(t, r)) : [];
        }
        function Rw(t) {
          for (var r = -1, a = t == null ? 0 : t.length, u = {}; ++r < a; ) {
            var f = t[r];
            u[f[0]] = f[1];
          }
          return u;
        }
        function hc(t) {
          return t && t.length ? t[0] : e;
        }
        function Ow(t, r, a) {
          var u = t == null ? 0 : t.length;
          if (!u)
            return -1;
          var f = a == null ? 0 : rA(a);
          return f < 0 && (f = ZA(u + f, 0)), mn(t, r, f);
        }
        function Pw(t) {
          var r = t == null ? 0 : t.length;
          return r ? Re(t, 0, -1) : [];
        }
        var Gw = sA(function(t) {
          var r = KA(t, To);
          return r.length && r[0] === t[0] ? Fo(r) : [];
        }), Nw = sA(function(t) {
          var r = Oe(t), a = KA(t, To);
          return r === Oe(a) ? r = e : a.pop(), a.length && a[0] === t[0] ? Fo(a, Z(r, 2)) : [];
        }), Vw = sA(function(t) {
          var r = Oe(t), a = KA(t, To);
          return r = typeof r == "function" ? r : e, r && a.pop(), a.length && a[0] === t[0] ? Fo(a, e, r) : [];
        });
        function kw(t, r) {
          return t == null ? "" : PB.call(t, r);
        }
        function Oe(t) {
          var r = t == null ? 0 : t.length;
          return r ? t[r - 1] : e;
        }
        function Ww(t, r, a) {
          var u = t == null ? 0 : t.length;
          if (!u)
            return -1;
          var f = u;
          return a !== e && (f = rA(a), f = f < 0 ? ZA(u + f, 0) : oe(f, u - 1)), r === r ? FB(t, r, f) : ei(t, zl, f, !0);
        }
        function zw(t, r) {
          return t && t.length ? vu(t, rA(r)) : e;
        }
        var Xw = sA(fc);
        function fc(t, r) {
          return t && t.length && r && r.length ? yo(t, r) : t;
        }
        function Jw(t, r, a) {
          return t && t.length && r && r.length ? yo(t, r, Z(a, 2)) : t;
        }
        function Yw(t, r, a) {
          return t && t.length && r && r.length ? yo(t, r, e, a) : t;
        }
        var Zw = ft(function(t, r) {
          var a = t == null ? 0 : t.length, u = mo(t, r);
          return Eu(t, KA(r, function(f) {
            return dt(f, a) ? +f : f;
          }).sort(Ku)), u;
        });
        function qw(t, r) {
          var a = [];
          if (!(t && t.length))
            return a;
          var u = -1, f = [], g = t.length;
          for (r = Z(r, 3); ++u < g; ) {
            var C = t[u];
            r(C, u, t) && (a.push(C), f.push(u));
          }
          return Eu(t, f), a;
        }
        function Jo(t) {
          return t == null ? t : kB.call(t);
        }
        function $w(t, r, a) {
          var u = t == null ? 0 : t.length;
          return u ? (a && typeof a != "number" && fe(t, r, a) ? (r = 0, a = u) : (r = r == null ? 0 : rA(r), a = a === e ? u : rA(a)), Re(t, r, a)) : [];
        }
        function jw(t, r) {
          return Qi(t, r);
        }
        function Ap(t, r, a) {
          return So(t, r, Z(a, 2));
        }
        function ep(t, r) {
          var a = t == null ? 0 : t.length;
          if (a) {
            var u = Qi(t, r);
            if (u < a && Ze(t[u], r))
              return u;
          }
          return -1;
        }
        function tp(t, r) {
          return Qi(t, r, !0);
        }
        function np(t, r, a) {
          return So(t, r, Z(a, 2), !0);
        }
        function rp(t, r) {
          var a = t == null ? 0 : t.length;
          if (a) {
            var u = Qi(t, r, !0) - 1;
            if (Ze(t[u], r))
              return u;
          }
          return -1;
        }
        function ip(t) {
          return t && t.length ? yu(t) : [];
        }
        function sp(t, r) {
          return t && t.length ? yu(t, Z(r, 2)) : [];
        }
        function op(t) {
          var r = t == null ? 0 : t.length;
          return r ? Re(t, 1, r) : [];
        }
        function ap(t, r, a) {
          return t && t.length ? (r = a || r === e ? 1 : rA(r), Re(t, 0, r < 0 ? 0 : r)) : [];
        }
        function lp(t, r, a) {
          var u = t == null ? 0 : t.length;
          return u ? (r = a || r === e ? 1 : rA(r), r = u - r, Re(t, r < 0 ? 0 : r, u)) : [];
        }
        function up(t, r) {
          return t && t.length ? Ui(t, Z(r, 3), !1, !0) : [];
        }
        function cp(t, r) {
          return t && t.length ? Ui(t, Z(r, 3)) : [];
        }
        var hp = sA(function(t) {
          return Ht(te(t, 1, NA, !0));
        }), fp = sA(function(t) {
          var r = Oe(t);
          return NA(r) && (r = e), Ht(te(t, 1, NA, !0), Z(r, 2));
        }), dp = sA(function(t) {
          var r = Oe(t);
          return r = typeof r == "function" ? r : e, Ht(te(t, 1, NA, !0), e, r);
        });
        function Bp(t) {
          return t && t.length ? Ht(t) : [];
        }
        function gp(t, r) {
          return t && t.length ? Ht(t, Z(r, 2)) : [];
        }
        function wp(t, r) {
          return r = typeof r == "function" ? r : e, t && t.length ? Ht(t, e, r) : [];
        }
        function Yo(t) {
          if (!(t && t.length))
            return [];
          var r = 0;
          return t = Ft(t, function(a) {
            if (NA(a))
              return r = ZA(a.length, r), !0;
          }), co(r, function(a) {
            return KA(t, ao(a));
          });
        }
        function dc(t, r) {
          if (!(t && t.length))
            return [];
          var a = Yo(t);
          return r == null ? a : KA(a, function(u) {
            return Ue(r, e, u);
          });
        }
        var pp = sA(function(t, r) {
          return NA(t) ? ar(t, r) : [];
        }), Cp = sA(function(t) {
          return Lo(Ft(t, NA));
        }), mp = sA(function(t) {
          var r = Oe(t);
          return NA(r) && (r = e), Lo(Ft(t, NA), Z(r, 2));
        }), Qp = sA(function(t) {
          var r = Oe(t);
          return r = typeof r == "function" ? r : e, Lo(Ft(t, NA), e, r);
        }), Up = sA(Yo);
        function vp(t, r) {
          return xu(t || [], r || [], or);
        }
        function Fp(t, r) {
          return xu(t || [], r || [], cr);
        }
        var Ip = sA(function(t) {
          var r = t.length, a = r > 1 ? t[r - 1] : e;
          return a = typeof a == "function" ? (t.pop(), a) : e, dc(t, a);
        });
        function Bc(t) {
          var r = B(t);
          return r.__chain__ = !0, r;
        }
        function Ep(t, r) {
          return r(t), t;
        }
        function Si(t, r) {
          return r(t);
        }
        var _p = ft(function(t) {
          var r = t.length, a = r ? t[0] : 0, u = this.__wrapped__, f = function(g) {
            return mo(g, t);
          };
          return r > 1 || this.__actions__.length || !(u instanceof hA) || !dt(a) ? this.thru(f) : (u = u.slice(a, +a + (r ? 1 : 0)), u.__actions__.push({
            func: Si,
            args: [f],
            thisArg: e
          }), new Ke(u, this.__chain__).thru(function(g) {
            return r && !g.length && g.push(e), g;
          }));
        });
        function yp() {
          return Bc(this);
        }
        function Hp() {
          return new Ke(this.value(), this.__chain__);
        }
        function bp() {
          this.__values__ === e && (this.__values__ = Hc(this.value()));
          var t = this.__index__ >= this.__values__.length, r = t ? e : this.__values__[this.__index__++];
          return { done: t, value: r };
        }
        function Sp() {
          return this;
        }
        function xp(t) {
          for (var r, a = this; a instanceof gi; ) {
            var u = ac(a);
            u.__index__ = 0, u.__values__ = e, r ? f.__wrapped__ = u : r = u;
            var f = u;
            a = a.__wrapped__;
          }
          return f.__wrapped__ = t, r;
        }
        function Lp() {
          var t = this.__wrapped__;
          if (t instanceof hA) {
            var r = t;
            return this.__actions__.length && (r = new hA(this)), r = r.reverse(), r.__actions__.push({
              func: Si,
              args: [Jo],
              thisArg: e
            }), new Ke(r, this.__chain__);
          }
          return this.thru(Jo);
        }
        function Tp() {
          return Su(this.__wrapped__, this.__actions__);
        }
        var Dp = vi(function(t, r, a) {
          EA.call(t, a) ? ++t[a] : ct(t, a, 1);
        });
        function Kp(t, r, a) {
          var u = nA(t) ? kl : Eg;
          return a && fe(t, r, a) && (r = e), u(t, Z(r, 3));
        }
        function Mp(t, r) {
          var a = nA(t) ? Ft : du;
          return a(t, Z(r, 3));
        }
        var Rp = Nu(lc), Op = Nu(uc);
        function Pp(t, r) {
          return te(xi(t, r), 1);
        }
        function Gp(t, r) {
          return te(xi(t, r), QA);
        }
        function Np(t, r, a) {
          return a = a === e ? 1 : rA(a), te(xi(t, r), a);
        }
        function gc(t, r) {
          var a = nA(t) ? Te : yt;
          return a(t, Z(r, 3));
        }
        function wc(t, r) {
          var a = nA(t) ? oB : fu;
          return a(t, Z(r, 3));
        }
        var Vp = vi(function(t, r, a) {
          EA.call(t, a) ? t[a].push(r) : ct(t, a, [r]);
        });
        function kp(t, r, a, u) {
          t = we(t) ? t : xn(t), a = a && !u ? rA(a) : 0;
          var f = t.length;
          return a < 0 && (a = ZA(f + a, 0)), Mi(t) ? a <= f && t.indexOf(r, a) > -1 : !!f && mn(t, r, a) > -1;
        }
        var Wp = sA(function(t, r, a) {
          var u = -1, f = typeof r == "function", g = we(t) ? _(t.length) : [];
          return yt(t, function(C) {
            g[++u] = f ? Ue(r, C, a) : lr(C, r, a);
          }), g;
        }), zp = vi(function(t, r, a) {
          ct(t, a, r);
        });
        function xi(t, r) {
          var a = nA(t) ? KA : mu;
          return a(t, Z(r, 3));
        }
        function Xp(t, r, a, u) {
          return t == null ? [] : (nA(r) || (r = r == null ? [] : [r]), a = u ? e : a, nA(a) || (a = a == null ? [] : [a]), Fu(t, r, a));
        }
        var Jp = vi(function(t, r, a) {
          t[a ? 0 : 1].push(r);
        }, function() {
          return [[], []];
        });
        function Yp(t, r, a) {
          var u = nA(t) ? so : Jl, f = arguments.length < 3;
          return u(t, Z(r, 4), a, f, yt);
        }
        function Zp(t, r, a) {
          var u = nA(t) ? aB : Jl, f = arguments.length < 3;
          return u(t, Z(r, 4), a, f, fu);
        }
        function qp(t, r) {
          var a = nA(t) ? Ft : du;
          return a(t, Di(Z(r, 3)));
        }
        function $p(t) {
          var r = nA(t) ? lu : kg;
          return r(t);
        }
        function jp(t, r, a) {
          (a ? fe(t, r, a) : r === e) ? r = 1 : r = rA(r);
          var u = nA(t) ? Qg : Wg;
          return u(t, r);
        }
        function AC(t) {
          var r = nA(t) ? Ug : Xg;
          return r(t);
        }
        function eC(t) {
          if (t == null)
            return 0;
          if (we(t))
            return Mi(t) ? Un(t) : t.length;
          var r = ae(t);
          return r == ze || r == Xe ? t.size : Eo(t).length;
        }
        function tC(t, r, a) {
          var u = nA(t) ? oo : Jg;
          return a && fe(t, r, a) && (r = e), u(t, Z(r, 3));
        }
        var nC = sA(function(t, r) {
          if (t == null)
            return [];
          var a = r.length;
          return a > 1 && fe(t, r[0], r[1]) ? r = [] : a > 2 && fe(r[0], r[1], r[2]) && (r = [r[0]]), Fu(t, te(r, 1), []);
        }), Li = MB || function() {
          return ee.Date.now();
        };
        function rC(t, r) {
          if (typeof r != "function")
            throw new De(l);
          return t = rA(t), function() {
            if (--t < 1)
              return r.apply(this, arguments);
          };
        }
        function pc(t, r, a) {
          return r = a ? e : r, r = t && r == null ? t.length : r, ht(t, z, e, e, e, e, r);
        }
        function Cc(t, r) {
          var a;
          if (typeof r != "function")
            throw new De(l);
          return t = rA(t), function() {
            return --t > 0 && (a = r.apply(this, arguments)), t <= 1 && (r = e), a;
          };
        }
        var Zo = sA(function(t, r, a) {
          var u = T;
          if (a.length) {
            var f = Et(a, bn(Zo));
            u |= K;
          }
          return ht(t, u, r, a, f);
        }), mc = sA(function(t, r, a) {
          var u = T | S;
          if (a.length) {
            var f = Et(a, bn(mc));
            u |= K;
          }
          return ht(r, u, t, a, f);
        });
        function Qc(t, r, a) {
          r = a ? e : r;
          var u = ht(t, Y, e, e, e, e, e, r);
          return u.placeholder = Qc.placeholder, u;
        }
        function Uc(t, r, a) {
          r = a ? e : r;
          var u = ht(t, X, e, e, e, e, e, r);
          return u.placeholder = Uc.placeholder, u;
        }
        function vc(t, r, a) {
          var u, f, g, C, Q, I, H = 0, b = !1, L = !1, O = !0;
          if (typeof t != "function")
            throw new De(l);
          r = Pe(r) || 0, OA(a) && (b = !!a.leading, L = "maxWait" in a, g = L ? ZA(Pe(a.maxWait) || 0, r) : g, O = "trailing" in a ? !!a.trailing : O);
          function J(VA) {
            var qe = u, wt = f;
            return u = f = e, H = VA, C = t.apply(wt, qe), C;
          }
          function q(VA) {
            return H = VA, Q = dr(cA, r), b ? J(VA) : C;
          }
          function iA(VA) {
            var qe = VA - I, wt = VA - H, Nc = r - qe;
            return L ? oe(Nc, g - wt) : Nc;
          }
          function $(VA) {
            var qe = VA - I, wt = VA - H;
            return I === e || qe >= r || qe < 0 || L && wt >= g;
          }
          function cA() {
            var VA = Li();
            if ($(VA))
              return dA(VA);
            Q = dr(cA, iA(VA));
          }
          function dA(VA) {
            return Q = e, O && u ? J(VA) : (u = f = e, C);
          }
          function Ee() {
            Q !== e && Lu(Q), H = 0, u = I = f = Q = e;
          }
          function de() {
            return Q === e ? C : dA(Li());
          }
          function _e() {
            var VA = Li(), qe = $(VA);
            if (u = arguments, f = this, I = VA, qe) {
              if (Q === e)
                return q(I);
              if (L)
                return Lu(Q), Q = dr(cA, r), J(I);
            }
            return Q === e && (Q = dr(cA, r)), C;
          }
          return _e.cancel = Ee, _e.flush = de, _e;
        }
        var iC = sA(function(t, r) {
          return hu(t, 1, r);
        }), sC = sA(function(t, r, a) {
          return hu(t, Pe(r) || 0, a);
        });
        function oC(t) {
          return ht(t, G);
        }
        function Ti(t, r) {
          if (typeof t != "function" || r != null && typeof r != "function")
            throw new De(l);
          var a = function() {
            var u = arguments, f = r ? r.apply(this, u) : u[0], g = a.cache;
            if (g.has(f))
              return g.get(f);
            var C = t.apply(this, u);
            return a.cache = g.set(f, C) || g, C;
          };
          return a.cache = new (Ti.Cache || ut)(), a;
        }
        Ti.Cache = ut;
        function Di(t) {
          if (typeof t != "function")
            throw new De(l);
          return function() {
            var r = arguments;
            switch (r.length) {
              case 0:
                return !t.call(this);
              case 1:
                return !t.call(this, r[0]);
              case 2:
                return !t.call(this, r[0], r[1]);
              case 3:
                return !t.call(this, r[0], r[1], r[2]);
            }
            return !t.apply(this, r);
          };
        }
        function aC(t) {
          return Cc(2, t);
        }
        var lC = Yg(function(t, r) {
          r = r.length == 1 && nA(r[0]) ? KA(r[0], ve(Z())) : KA(te(r, 1), ve(Z()));
          var a = r.length;
          return sA(function(u) {
            for (var f = -1, g = oe(u.length, a); ++f < g; )
              u[f] = r[f].call(this, u[f]);
            return Ue(t, this, u);
          });
        }), qo = sA(function(t, r) {
          var a = Et(r, bn(qo));
          return ht(t, K, e, r, a);
        }), Fc = sA(function(t, r) {
          var a = Et(r, bn(Fc));
          return ht(t, D, e, r, a);
        }), uC = ft(function(t, r) {
          return ht(t, j, e, e, e, r);
        });
        function cC(t, r) {
          if (typeof t != "function")
            throw new De(l);
          return r = r === e ? r : rA(r), sA(t, r);
        }
        function hC(t, r) {
          if (typeof t != "function")
            throw new De(l);
          return r = r == null ? 0 : ZA(rA(r), 0), sA(function(a) {
            var u = a[r], f = St(a, 0, r);
            return u && It(f, u), Ue(t, this, f);
          });
        }
        function fC(t, r, a) {
          var u = !0, f = !0;
          if (typeof t != "function")
            throw new De(l);
          return OA(a) && (u = "leading" in a ? !!a.leading : u, f = "trailing" in a ? !!a.trailing : f), vc(t, r, {
            leading: u,
            maxWait: r,
            trailing: f
          });
        }
        function dC(t) {
          return pc(t, 1);
        }
        function BC(t, r) {
          return qo(Do(r), t);
        }
        function gC() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return nA(t) ? t : [t];
        }
        function wC(t) {
          return Me(t, U);
        }
        function pC(t, r) {
          return r = typeof r == "function" ? r : e, Me(t, U, r);
        }
        function CC(t) {
          return Me(t, p | U);
        }
        function mC(t, r) {
          return r = typeof r == "function" ? r : e, Me(t, p | U, r);
        }
        function QC(t, r) {
          return r == null || cu(t, r, jA(r));
        }
        function Ze(t, r) {
          return t === r || t !== t && r !== r;
        }
        var UC = _i(vo), vC = _i(function(t, r) {
          return t >= r;
        }), nn = wu(/* @__PURE__ */ function() {
          return arguments;
        }()) ? wu : function(t) {
          return PA(t) && EA.call(t, "callee") && !nu.call(t, "callee");
        }, nA = _.isArray, FC = Rl ? ve(Rl) : xg;
        function we(t) {
          return t != null && Ki(t.length) && !Bt(t);
        }
        function NA(t) {
          return PA(t) && we(t);
        }
        function IC(t) {
          return t === !0 || t === !1 || PA(t) && he(t) == se;
        }
        var xt = OB || aa, EC = Ol ? ve(Ol) : Lg;
        function _C(t) {
          return PA(t) && t.nodeType === 1 && !Br(t);
        }
        function yC(t) {
          if (t == null)
            return !0;
          if (we(t) && (nA(t) || typeof t == "string" || typeof t.splice == "function" || xt(t) || Sn(t) || nn(t)))
            return !t.length;
          var r = ae(t);
          if (r == ze || r == Xe)
            return !t.size;
          if (fr(t))
            return !Eo(t).length;
          for (var a in t)
            if (EA.call(t, a))
              return !1;
          return !0;
        }
        function HC(t, r) {
          return ur(t, r);
        }
        function bC(t, r, a) {
          a = typeof a == "function" ? a : e;
          var u = a ? a(t, r) : e;
          return u === e ? ur(t, r, e, a) : !!u;
        }
        function $o(t) {
          if (!PA(t))
            return !1;
          var r = he(t);
          return r == Jr || r == jf || typeof t.message == "string" && typeof t.name == "string" && !Br(t);
        }
        function SC(t) {
          return typeof t == "number" && iu(t);
        }
        function Bt(t) {
          if (!OA(t))
            return !1;
          var r = he(t);
          return r == Yr || r == hl || r == wA || r == ed;
        }
        function Ic(t) {
          return typeof t == "number" && t == rA(t);
        }
        function Ki(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= $A;
        }
        function OA(t) {
          var r = typeof t;
          return t != null && (r == "object" || r == "function");
        }
        function PA(t) {
          return t != null && typeof t == "object";
        }
        var Ec = Pl ? ve(Pl) : Dg;
        function xC(t, r) {
          return t === r || Io(t, r, No(r));
        }
        function LC(t, r, a) {
          return a = typeof a == "function" ? a : e, Io(t, r, No(r), a);
        }
        function TC(t) {
          return _c(t) && t != +t;
        }
        function DC(t) {
          if (pw(t))
            throw new eA(o);
          return pu(t);
        }
        function KC(t) {
          return t === null;
        }
        function MC(t) {
          return t == null;
        }
        function _c(t) {
          return typeof t == "number" || PA(t) && he(t) == Zn;
        }
        function Br(t) {
          if (!PA(t) || he(t) != at)
            return !1;
          var r = li(t);
          if (r === null)
            return !0;
          var a = EA.call(r, "constructor") && r.constructor;
          return typeof a == "function" && a instanceof a && ii.call(a) == LB;
        }
        var jo = Gl ? ve(Gl) : Kg;
        function RC(t) {
          return Ic(t) && t >= -9007199254740991 && t <= $A;
        }
        var yc = Nl ? ve(Nl) : Mg;
        function Mi(t) {
          return typeof t == "string" || !nA(t) && PA(t) && he(t) == $n;
        }
        function Ie(t) {
          return typeof t == "symbol" || PA(t) && he(t) == Zr;
        }
        var Sn = Vl ? ve(Vl) : Rg;
        function OC(t) {
          return t === e;
        }
        function PC(t) {
          return PA(t) && ae(t) == jn;
        }
        function GC(t) {
          return PA(t) && he(t) == nd;
        }
        var NC = _i(_o), VC = _i(function(t, r) {
          return t <= r;
        });
        function Hc(t) {
          if (!t)
            return [];
          if (we(t))
            return Mi(t) ? Je(t) : ge(t);
          if (tr && t[tr])
            return QB(t[tr]());
          var r = ae(t), a = r == ze ? fo : r == Xe ? ti : xn;
          return a(t);
        }
        function gt(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = Pe(t), t === QA || t === -1 / 0) {
            var r = t < 0 ? -1 : 1;
            return r * P;
          }
          return t === t ? t : 0;
        }
        function rA(t) {
          var r = gt(t), a = r % 1;
          return r === r ? a ? r - a : r : 0;
        }
        function bc(t) {
          return t ? jt(rA(t), 0, W) : 0;
        }
        function Pe(t) {
          if (typeof t == "number")
            return t;
          if (Ie(t))
            return R;
          if (OA(t)) {
            var r = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = OA(r) ? r + "" : r;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = Yl(t);
          var a = Fd.test(t);
          return a || Ed.test(t) ? rB(t.slice(2), a ? 2 : 8) : vd.test(t) ? R : +t;
        }
        function Sc(t) {
          return tt(t, pe(t));
        }
        function kC(t) {
          return t ? jt(rA(t), -9007199254740991, $A) : t === 0 ? t : 0;
        }
        function FA(t) {
          return t == null ? "" : Fe(t);
        }
        var WC = yn(function(t, r) {
          if (fr(r) || we(r)) {
            tt(r, jA(r), t);
            return;
          }
          for (var a in r)
            EA.call(r, a) && or(t, a, r[a]);
        }), xc = yn(function(t, r) {
          tt(r, pe(r), t);
        }), Ri = yn(function(t, r, a, u) {
          tt(r, pe(r), t, u);
        }), zC = yn(function(t, r, a, u) {
          tt(r, jA(r), t, u);
        }), XC = ft(mo);
        function JC(t, r) {
          var a = _n(t);
          return r == null ? a : uu(a, r);
        }
        var YC = sA(function(t, r) {
          t = HA(t);
          var a = -1, u = r.length, f = u > 2 ? r[2] : e;
          for (f && fe(r[0], r[1], f) && (u = 1); ++a < u; )
            for (var g = r[a], C = pe(g), Q = -1, I = C.length; ++Q < I; ) {
              var H = C[Q], b = t[H];
              (b === e || Ze(b, Fn[H]) && !EA.call(t, H)) && (t[H] = g[H]);
            }
          return t;
        }), ZC = sA(function(t) {
          return t.push(e, Yu), Ue(Lc, e, t);
        });
        function qC(t, r) {
          return Wl(t, Z(r, 3), et);
        }
        function $C(t, r) {
          return Wl(t, Z(r, 3), Uo);
        }
        function jC(t, r) {
          return t == null ? t : Qo(t, Z(r, 3), pe);
        }
        function Am(t, r) {
          return t == null ? t : Bu(t, Z(r, 3), pe);
        }
        function em(t, r) {
          return t && et(t, Z(r, 3));
        }
        function tm(t, r) {
          return t && Uo(t, Z(r, 3));
        }
        function nm(t) {
          return t == null ? [] : Ci(t, jA(t));
        }
        function rm(t) {
          return t == null ? [] : Ci(t, pe(t));
        }
        function Aa(t, r, a) {
          var u = t == null ? e : An(t, r);
          return u === e ? a : u;
        }
        function im(t, r) {
          return t != null && $u(t, r, yg);
        }
        function ea(t, r) {
          return t != null && $u(t, r, Hg);
        }
        var sm = ku(function(t, r, a) {
          r != null && typeof r.toString != "function" && (r = si.call(r)), t[r] = a;
        }, na(Ce)), om = ku(function(t, r, a) {
          r != null && typeof r.toString != "function" && (r = si.call(r)), EA.call(t, r) ? t[r].push(a) : t[r] = [a];
        }, Z), am = sA(lr);
        function jA(t) {
          return we(t) ? au(t) : Eo(t);
        }
        function pe(t) {
          return we(t) ? au(t, !0) : Og(t);
        }
        function lm(t, r) {
          var a = {};
          return r = Z(r, 3), et(t, function(u, f, g) {
            ct(a, r(u, f, g), u);
          }), a;
        }
        function um(t, r) {
          var a = {};
          return r = Z(r, 3), et(t, function(u, f, g) {
            ct(a, f, r(u, f, g));
          }), a;
        }
        var cm = yn(function(t, r, a) {
          mi(t, r, a);
        }), Lc = yn(function(t, r, a, u) {
          mi(t, r, a, u);
        }), hm = ft(function(t, r) {
          var a = {};
          if (t == null)
            return a;
          var u = !1;
          r = KA(r, function(g) {
            return g = bt(g, t), u || (u = g.length > 1), g;
          }), tt(t, Po(t), a), u && (a = Me(a, p | m | U, sw));
          for (var f = r.length; f--; )
            xo(a, r[f]);
          return a;
        });
        function fm(t, r) {
          return Tc(t, Di(Z(r)));
        }
        var dm = ft(function(t, r) {
          return t == null ? {} : Gg(t, r);
        });
        function Tc(t, r) {
          if (t == null)
            return {};
          var a = KA(Po(t), function(u) {
            return [u];
          });
          return r = Z(r), Iu(t, a, function(u, f) {
            return r(u, f[0]);
          });
        }
        function Bm(t, r, a) {
          r = bt(r, t);
          var u = -1, f = r.length;
          for (f || (f = 1, t = e); ++u < f; ) {
            var g = t == null ? e : t[nt(r[u])];
            g === e && (u = f, g = a), t = Bt(g) ? g.call(t) : g;
          }
          return t;
        }
        function gm(t, r, a) {
          return t == null ? t : cr(t, r, a);
        }
        function wm(t, r, a, u) {
          return u = typeof u == "function" ? u : e, t == null ? t : cr(t, r, a, u);
        }
        var Dc = Xu(jA), Kc = Xu(pe);
        function pm(t, r, a) {
          var u = nA(t), f = u || xt(t) || Sn(t);
          if (r = Z(r, 4), a == null) {
            var g = t && t.constructor;
            f ? a = u ? new g() : [] : OA(t) ? a = Bt(g) ? _n(li(t)) : {} : a = {};
          }
          return (f ? Te : et)(t, function(C, Q, I) {
            return r(a, C, Q, I);
          }), a;
        }
        function Cm(t, r) {
          return t == null ? !0 : xo(t, r);
        }
        function mm(t, r, a) {
          return t == null ? t : bu(t, r, Do(a));
        }
        function Qm(t, r, a, u) {
          return u = typeof u == "function" ? u : e, t == null ? t : bu(t, r, Do(a), u);
        }
        function xn(t) {
          return t == null ? [] : ho(t, jA(t));
        }
        function Um(t) {
          return t == null ? [] : ho(t, pe(t));
        }
        function vm(t, r, a) {
          return a === e && (a = r, r = e), a !== e && (a = Pe(a), a = a === a ? a : 0), r !== e && (r = Pe(r), r = r === r ? r : 0), jt(Pe(t), r, a);
        }
        function Fm(t, r, a) {
          return r = gt(r), a === e ? (a = r, r = 0) : a = gt(a), t = Pe(t), bg(t, r, a);
        }
        function Im(t, r, a) {
          if (a && typeof a != "boolean" && fe(t, r, a) && (r = a = e), a === e && (typeof r == "boolean" ? (a = r, r = e) : typeof t == "boolean" && (a = t, t = e)), t === e && r === e ? (t = 0, r = 1) : (t = gt(t), r === e ? (r = t, t = 0) : r = gt(r)), t > r) {
            var u = t;
            t = r, r = u;
          }
          if (a || t % 1 || r % 1) {
            var f = su();
            return oe(t + f * (r - t + nB("1e-" + ((f + "").length - 1))), r);
          }
          return Ho(t, r);
        }
        var Em = Hn(function(t, r, a) {
          return r = r.toLowerCase(), t + (a ? Mc(r) : r);
        });
        function Mc(t) {
          return ta(FA(t).toLowerCase());
        }
        function Rc(t) {
          return t = FA(t), t && t.replace(yd, gB).replace(Xd, "");
        }
        function _m(t, r, a) {
          t = FA(t), r = Fe(r);
          var u = t.length;
          a = a === e ? u : jt(rA(a), 0, u);
          var f = a;
          return a -= r.length, a >= 0 && t.slice(a, f) == r;
        }
        function ym(t) {
          return t = FA(t), t && ad.test(t) ? t.replace(Bl, wB) : t;
        }
        function Hm(t) {
          return t = FA(t), t && dd.test(t) ? t.replace(Zs, "\\$&") : t;
        }
        var bm = Hn(function(t, r, a) {
          return t + (a ? "-" : "") + r.toLowerCase();
        }), Sm = Hn(function(t, r, a) {
          return t + (a ? " " : "") + r.toLowerCase();
        }), xm = Gu("toLowerCase");
        function Lm(t, r, a) {
          t = FA(t), r = rA(r);
          var u = r ? Un(t) : 0;
          if (!r || u >= r)
            return t;
          var f = (r - u) / 2;
          return Ei(fi(f), a) + t + Ei(hi(f), a);
        }
        function Tm(t, r, a) {
          t = FA(t), r = rA(r);
          var u = r ? Un(t) : 0;
          return r && u < r ? t + Ei(r - u, a) : t;
        }
        function Dm(t, r, a) {
          t = FA(t), r = rA(r);
          var u = r ? Un(t) : 0;
          return r && u < r ? Ei(r - u, a) + t : t;
        }
        function Km(t, r, a) {
          return a || r == null ? r = 0 : r && (r = +r), VB(FA(t).replace(qs, ""), r || 0);
        }
        function Mm(t, r, a) {
          return (a ? fe(t, r, a) : r === e) ? r = 1 : r = rA(r), bo(FA(t), r);
        }
        function Rm() {
          var t = arguments, r = FA(t[0]);
          return t.length < 3 ? r : r.replace(t[1], t[2]);
        }
        var Om = Hn(function(t, r, a) {
          return t + (a ? "_" : "") + r.toLowerCase();
        });
        function Pm(t, r, a) {
          return a && typeof a != "number" && fe(t, r, a) && (r = a = e), a = a === e ? W : a >>> 0, a ? (t = FA(t), t && (typeof r == "string" || r != null && !jo(r)) && (r = Fe(r), !r && Qn(t)) ? St(Je(t), 0, a) : t.split(r, a)) : [];
        }
        var Gm = Hn(function(t, r, a) {
          return t + (a ? " " : "") + ta(r);
        });
        function Nm(t, r, a) {
          return t = FA(t), a = a == null ? 0 : jt(rA(a), 0, t.length), r = Fe(r), t.slice(a, a + r.length) == r;
        }
        function Vm(t, r, a) {
          var u = B.templateSettings;
          a && fe(t, r, a) && (r = e), t = FA(t), r = Ri({}, r, u, Ju);
          var f = Ri({}, r.imports, u.imports, Ju), g = jA(f), C = ho(f, g), Q, I, H = 0, b = r.interpolate || qr, L = "__p += '", O = Bo(
            (r.escape || qr).source + "|" + b.source + "|" + (b === gl ? Ud : qr).source + "|" + (r.evaluate || qr).source + "|$",
            "g"
          ), J = "//# sourceURL=" + (EA.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++$d + "]") + `
`;
          t.replace(O, function($, cA, dA, Ee, de, _e) {
            return dA || (dA = Ee), L += t.slice(H, _e).replace(Hd, pB), cA && (Q = !0, L += `' +
__e(` + cA + `) +
'`), de && (I = !0, L += `';
` + de + `;
__p += '`), dA && (L += `' +
((__t = (` + dA + `)) == null ? '' : __t) +
'`), H = _e + $.length, $;
          }), L += `';
`;
          var q = EA.call(r, "variable") && r.variable;
          if (!q)
            L = `with (obj) {
` + L + `
}
`;
          else if (md.test(q))
            throw new eA(c);
          L = (I ? L.replace(rd, "") : L).replace(id, "$1").replace(sd, "$1;"), L = "function(" + (q || "obj") + `) {
` + (q ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (Q ? ", __e = _.escape" : "") + (I ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + L + `return __p
}`;
          var iA = Pc(function() {
            return vA(g, J + "return " + L).apply(e, C);
          });
          if (iA.source = L, $o(iA))
            throw iA;
          return iA;
        }
        function km(t) {
          return FA(t).toLowerCase();
        }
        function Wm(t) {
          return FA(t).toUpperCase();
        }
        function zm(t, r, a) {
          if (t = FA(t), t && (a || r === e))
            return Yl(t);
          if (!t || !(r = Fe(r)))
            return t;
          var u = Je(t), f = Je(r), g = Zl(u, f), C = ql(u, f) + 1;
          return St(u, g, C).join("");
        }
        function Xm(t, r, a) {
          if (t = FA(t), t && (a || r === e))
            return t.slice(0, jl(t) + 1);
          if (!t || !(r = Fe(r)))
            return t;
          var u = Je(t), f = ql(u, Je(r)) + 1;
          return St(u, 0, f).join("");
        }
        function Jm(t, r, a) {
          if (t = FA(t), t && (a || r === e))
            return t.replace(qs, "");
          if (!t || !(r = Fe(r)))
            return t;
          var u = Je(t), f = Zl(u, Je(r));
          return St(u, f).join("");
        }
        function Ym(t, r) {
          var a = mA, u = DA;
          if (OA(r)) {
            var f = "separator" in r ? r.separator : f;
            a = "length" in r ? rA(r.length) : a, u = "omission" in r ? Fe(r.omission) : u;
          }
          t = FA(t);
          var g = t.length;
          if (Qn(t)) {
            var C = Je(t);
            g = C.length;
          }
          if (a >= g)
            return t;
          var Q = a - Un(u);
          if (Q < 1)
            return u;
          var I = C ? St(C, 0, Q).join("") : t.slice(0, Q);
          if (f === e)
            return I + u;
          if (C && (Q += I.length - Q), jo(f)) {
            if (t.slice(Q).search(f)) {
              var H, b = I;
              for (f.global || (f = Bo(f.source, FA(wl.exec(f)) + "g")), f.lastIndex = 0; H = f.exec(b); )
                var L = H.index;
              I = I.slice(0, L === e ? Q : L);
            }
          } else if (t.indexOf(Fe(f), Q) != Q) {
            var O = I.lastIndexOf(f);
            O > -1 && (I = I.slice(0, O));
          }
          return I + u;
        }
        function Zm(t) {
          return t = FA(t), t && od.test(t) ? t.replace(dl, IB) : t;
        }
        var qm = Hn(function(t, r, a) {
          return t + (a ? " " : "") + r.toUpperCase();
        }), ta = Gu("toUpperCase");
        function Oc(t, r, a) {
          return t = FA(t), r = a ? e : r, r === e ? mB(t) ? yB(t) : cB(t) : t.match(r) || [];
        }
        var Pc = sA(function(t, r) {
          try {
            return Ue(t, e, r);
          } catch (a) {
            return $o(a) ? a : new eA(a);
          }
        }), $m = ft(function(t, r) {
          return Te(r, function(a) {
            a = nt(a), ct(t, a, Zo(t[a], t));
          }), t;
        });
        function jm(t) {
          var r = t == null ? 0 : t.length, a = Z();
          return t = r ? KA(t, function(u) {
            if (typeof u[1] != "function")
              throw new De(l);
            return [a(u[0]), u[1]];
          }) : [], sA(function(u) {
            for (var f = -1; ++f < r; ) {
              var g = t[f];
              if (Ue(g[0], this, u))
                return Ue(g[1], this, u);
            }
          });
        }
        function AQ(t) {
          return Ig(Me(t, p));
        }
        function na(t) {
          return function() {
            return t;
          };
        }
        function eQ(t, r) {
          return t == null || t !== t ? r : t;
        }
        var tQ = Vu(), nQ = Vu(!0);
        function Ce(t) {
          return t;
        }
        function ra(t) {
          return Cu(typeof t == "function" ? t : Me(t, p));
        }
        function rQ(t) {
          return Qu(Me(t, p));
        }
        function iQ(t, r) {
          return Uu(t, Me(r, p));
        }
        var sQ = sA(function(t, r) {
          return function(a) {
            return lr(a, t, r);
          };
        }), oQ = sA(function(t, r) {
          return function(a) {
            return lr(t, a, r);
          };
        });
        function ia(t, r, a) {
          var u = jA(r), f = Ci(r, u);
          a == null && !(OA(r) && (f.length || !u.length)) && (a = r, r = t, t = this, f = Ci(r, jA(r)));
          var g = !(OA(a) && "chain" in a) || !!a.chain, C = Bt(t);
          return Te(f, function(Q) {
            var I = r[Q];
            t[Q] = I, C && (t.prototype[Q] = function() {
              var H = this.__chain__;
              if (g || H) {
                var b = t(this.__wrapped__), L = b.__actions__ = ge(this.__actions__);
                return L.push({ func: I, args: arguments, thisArg: t }), b.__chain__ = H, b;
              }
              return I.apply(t, It([this.value()], arguments));
            });
          }), t;
        }
        function aQ() {
          return ee._ === this && (ee._ = TB), this;
        }
        function sa() {
        }
        function lQ(t) {
          return t = rA(t), sA(function(r) {
            return vu(r, t);
          });
        }
        var uQ = Mo(KA), cQ = Mo(kl), hQ = Mo(oo);
        function Gc(t) {
          return ko(t) ? ao(nt(t)) : Ng(t);
        }
        function fQ(t) {
          return function(r) {
            return t == null ? e : An(t, r);
          };
        }
        var dQ = Wu(), BQ = Wu(!0);
        function oa() {
          return [];
        }
        function aa() {
          return !1;
        }
        function gQ() {
          return {};
        }
        function wQ() {
          return "";
        }
        function pQ() {
          return !0;
        }
        function CQ(t, r) {
          if (t = rA(t), t < 1 || t > $A)
            return [];
          var a = W, u = oe(t, W);
          r = Z(r), t -= W;
          for (var f = co(u, r); ++a < t; )
            r(a);
          return f;
        }
        function mQ(t) {
          return nA(t) ? KA(t, nt) : Ie(t) ? [t] : ge(oc(FA(t)));
        }
        function QQ(t) {
          var r = ++xB;
          return FA(t) + r;
        }
        var UQ = Ii(function(t, r) {
          return t + r;
        }, 0), vQ = Ro("ceil"), FQ = Ii(function(t, r) {
          return t / r;
        }, 1), IQ = Ro("floor");
        function EQ(t) {
          return t && t.length ? pi(t, Ce, vo) : e;
        }
        function _Q(t, r) {
          return t && t.length ? pi(t, Z(r, 2), vo) : e;
        }
        function yQ(t) {
          return Xl(t, Ce);
        }
        function HQ(t, r) {
          return Xl(t, Z(r, 2));
        }
        function bQ(t) {
          return t && t.length ? pi(t, Ce, _o) : e;
        }
        function SQ(t, r) {
          return t && t.length ? pi(t, Z(r, 2), _o) : e;
        }
        var xQ = Ii(function(t, r) {
          return t * r;
        }, 1), LQ = Ro("round"), TQ = Ii(function(t, r) {
          return t - r;
        }, 0);
        function DQ(t) {
          return t && t.length ? uo(t, Ce) : 0;
        }
        function KQ(t, r) {
          return t && t.length ? uo(t, Z(r, 2)) : 0;
        }
        return B.after = rC, B.ary = pc, B.assign = WC, B.assignIn = xc, B.assignInWith = Ri, B.assignWith = zC, B.at = XC, B.before = Cc, B.bind = Zo, B.bindAll = $m, B.bindKey = mc, B.castArray = gC, B.chain = Bc, B.chunk = Iw, B.compact = Ew, B.concat = _w, B.cond = jm, B.conforms = AQ, B.constant = na, B.countBy = Dp, B.create = JC, B.curry = Qc, B.curryRight = Uc, B.debounce = vc, B.defaults = YC, B.defaultsDeep = ZC, B.defer = iC, B.delay = sC, B.difference = yw, B.differenceBy = Hw, B.differenceWith = bw, B.drop = Sw, B.dropRight = xw, B.dropRightWhile = Lw, B.dropWhile = Tw, B.fill = Dw, B.filter = Mp, B.flatMap = Pp, B.flatMapDeep = Gp, B.flatMapDepth = Np, B.flatten = cc, B.flattenDeep = Kw, B.flattenDepth = Mw, B.flip = oC, B.flow = tQ, B.flowRight = nQ, B.fromPairs = Rw, B.functions = nm, B.functionsIn = rm, B.groupBy = Vp, B.initial = Pw, B.intersection = Gw, B.intersectionBy = Nw, B.intersectionWith = Vw, B.invert = sm, B.invertBy = om, B.invokeMap = Wp, B.iteratee = ra, B.keyBy = zp, B.keys = jA, B.keysIn = pe, B.map = xi, B.mapKeys = lm, B.mapValues = um, B.matches = rQ, B.matchesProperty = iQ, B.memoize = Ti, B.merge = cm, B.mergeWith = Lc, B.method = sQ, B.methodOf = oQ, B.mixin = ia, B.negate = Di, B.nthArg = lQ, B.omit = hm, B.omitBy = fm, B.once = aC, B.orderBy = Xp, B.over = uQ, B.overArgs = lC, B.overEvery = cQ, B.overSome = hQ, B.partial = qo, B.partialRight = Fc, B.partition = Jp, B.pick = dm, B.pickBy = Tc, B.property = Gc, B.propertyOf = fQ, B.pull = Xw, B.pullAll = fc, B.pullAllBy = Jw, B.pullAllWith = Yw, B.pullAt = Zw, B.range = dQ, B.rangeRight = BQ, B.rearg = uC, B.reject = qp, B.remove = qw, B.rest = cC, B.reverse = Jo, B.sampleSize = jp, B.set = gm, B.setWith = wm, B.shuffle = AC, B.slice = $w, B.sortBy = nC, B.sortedUniq = ip, B.sortedUniqBy = sp, B.split = Pm, B.spread = hC, B.tail = op, B.take = ap, B.takeRight = lp, B.takeRightWhile = up, B.takeWhile = cp, B.tap = Ep, B.throttle = fC, B.thru = Si, B.toArray = Hc, B.toPairs = Dc, B.toPairsIn = Kc, B.toPath = mQ, B.toPlainObject = Sc, B.transform = pm, B.unary = dC, B.union = hp, B.unionBy = fp, B.unionWith = dp, B.uniq = Bp, B.uniqBy = gp, B.uniqWith = wp, B.unset = Cm, B.unzip = Yo, B.unzipWith = dc, B.update = mm, B.updateWith = Qm, B.values = xn, B.valuesIn = Um, B.without = pp, B.words = Oc, B.wrap = BC, B.xor = Cp, B.xorBy = mp, B.xorWith = Qp, B.zip = Up, B.zipObject = vp, B.zipObjectDeep = Fp, B.zipWith = Ip, B.entries = Dc, B.entriesIn = Kc, B.extend = xc, B.extendWith = Ri, ia(B, B), B.add = UQ, B.attempt = Pc, B.camelCase = Em, B.capitalize = Mc, B.ceil = vQ, B.clamp = vm, B.clone = wC, B.cloneDeep = CC, B.cloneDeepWith = mC, B.cloneWith = pC, B.conformsTo = QC, B.deburr = Rc, B.defaultTo = eQ, B.divide = FQ, B.endsWith = _m, B.eq = Ze, B.escape = ym, B.escapeRegExp = Hm, B.every = Kp, B.find = Rp, B.findIndex = lc, B.findKey = qC, B.findLast = Op, B.findLastIndex = uc, B.findLastKey = $C, B.floor = IQ, B.forEach = gc, B.forEachRight = wc, B.forIn = jC, B.forInRight = Am, B.forOwn = em, B.forOwnRight = tm, B.get = Aa, B.gt = UC, B.gte = vC, B.has = im, B.hasIn = ea, B.head = hc, B.identity = Ce, B.includes = kp, B.indexOf = Ow, B.inRange = Fm, B.invoke = am, B.isArguments = nn, B.isArray = nA, B.isArrayBuffer = FC, B.isArrayLike = we, B.isArrayLikeObject = NA, B.isBoolean = IC, B.isBuffer = xt, B.isDate = EC, B.isElement = _C, B.isEmpty = yC, B.isEqual = HC, B.isEqualWith = bC, B.isError = $o, B.isFinite = SC, B.isFunction = Bt, B.isInteger = Ic, B.isLength = Ki, B.isMap = Ec, B.isMatch = xC, B.isMatchWith = LC, B.isNaN = TC, B.isNative = DC, B.isNil = MC, B.isNull = KC, B.isNumber = _c, B.isObject = OA, B.isObjectLike = PA, B.isPlainObject = Br, B.isRegExp = jo, B.isSafeInteger = RC, B.isSet = yc, B.isString = Mi, B.isSymbol = Ie, B.isTypedArray = Sn, B.isUndefined = OC, B.isWeakMap = PC, B.isWeakSet = GC, B.join = kw, B.kebabCase = bm, B.last = Oe, B.lastIndexOf = Ww, B.lowerCase = Sm, B.lowerFirst = xm, B.lt = NC, B.lte = VC, B.max = EQ, B.maxBy = _Q, B.mean = yQ, B.meanBy = HQ, B.min = bQ, B.minBy = SQ, B.stubArray = oa, B.stubFalse = aa, B.stubObject = gQ, B.stubString = wQ, B.stubTrue = pQ, B.multiply = xQ, B.nth = zw, B.noConflict = aQ, B.noop = sa, B.now = Li, B.pad = Lm, B.padEnd = Tm, B.padStart = Dm, B.parseInt = Km, B.random = Im, B.reduce = Yp, B.reduceRight = Zp, B.repeat = Mm, B.replace = Rm, B.result = Bm, B.round = LQ, B.runInContext = F, B.sample = $p, B.size = eC, B.snakeCase = Om, B.some = tC, B.sortedIndex = jw, B.sortedIndexBy = Ap, B.sortedIndexOf = ep, B.sortedLastIndex = tp, B.sortedLastIndexBy = np, B.sortedLastIndexOf = rp, B.startCase = Gm, B.startsWith = Nm, B.subtract = TQ, B.sum = DQ, B.sumBy = KQ, B.template = Vm, B.times = CQ, B.toFinite = gt, B.toInteger = rA, B.toLength = bc, B.toLower = km, B.toNumber = Pe, B.toSafeInteger = kC, B.toString = FA, B.toUpper = Wm, B.trim = zm, B.trimEnd = Xm, B.trimStart = Jm, B.truncate = Ym, B.unescape = Zm, B.uniqueId = QQ, B.upperCase = qm, B.upperFirst = ta, B.each = gc, B.eachRight = wc, B.first = hc, ia(B, function() {
          var t = {};
          return et(B, function(r, a) {
            EA.call(B.prototype, a) || (t[a] = r);
          }), t;
        }(), { chain: !1 }), B.VERSION = n, Te(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          B[t].placeholder = B;
        }), Te(["drop", "take"], function(t, r) {
          hA.prototype[t] = function(a) {
            a = a === e ? 1 : ZA(rA(a), 0);
            var u = this.__filtered__ && !r ? new hA(this) : this.clone();
            return u.__filtered__ ? u.__takeCount__ = oe(a, u.__takeCount__) : u.__views__.push({
              size: oe(a, W),
              type: t + (u.__dir__ < 0 ? "Right" : "")
            }), u;
          }, hA.prototype[t + "Right"] = function(a) {
            return this.reverse()[t](a).reverse();
          };
        }), Te(["filter", "map", "takeWhile"], function(t, r) {
          var a = r + 1, u = a == xA || a == XA;
          hA.prototype[t] = function(f) {
            var g = this.clone();
            return g.__iteratees__.push({
              iteratee: Z(f, 3),
              type: a
            }), g.__filtered__ = g.__filtered__ || u, g;
          };
        }), Te(["head", "last"], function(t, r) {
          var a = "take" + (r ? "Right" : "");
          hA.prototype[t] = function() {
            return this[a](1).value()[0];
          };
        }), Te(["initial", "tail"], function(t, r) {
          var a = "drop" + (r ? "" : "Right");
          hA.prototype[t] = function() {
            return this.__filtered__ ? new hA(this) : this[a](1);
          };
        }), hA.prototype.compact = function() {
          return this.filter(Ce);
        }, hA.prototype.find = function(t) {
          return this.filter(t).head();
        }, hA.prototype.findLast = function(t) {
          return this.reverse().find(t);
        }, hA.prototype.invokeMap = sA(function(t, r) {
          return typeof t == "function" ? new hA(this) : this.map(function(a) {
            return lr(a, t, r);
          });
        }), hA.prototype.reject = function(t) {
          return this.filter(Di(Z(t)));
        }, hA.prototype.slice = function(t, r) {
          t = rA(t);
          var a = this;
          return a.__filtered__ && (t > 0 || r < 0) ? new hA(a) : (t < 0 ? a = a.takeRight(-t) : t && (a = a.drop(t)), r !== e && (r = rA(r), a = r < 0 ? a.dropRight(-r) : a.take(r - t)), a);
        }, hA.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, hA.prototype.toArray = function() {
          return this.take(W);
        }, et(hA.prototype, function(t, r) {
          var a = /^(?:filter|find|map|reject)|While$/.test(r), u = /^(?:head|last)$/.test(r), f = B[u ? "take" + (r == "last" ? "Right" : "") : r], g = u || /^find/.test(r);
          f && (B.prototype[r] = function() {
            var C = this.__wrapped__, Q = u ? [1] : arguments, I = C instanceof hA, H = Q[0], b = I || nA(C), L = function(cA) {
              var dA = f.apply(B, It([cA], Q));
              return u && O ? dA[0] : dA;
            };
            b && a && typeof H == "function" && H.length != 1 && (I = b = !1);
            var O = this.__chain__, J = !!this.__actions__.length, q = g && !O, iA = I && !J;
            if (!g && b) {
              C = iA ? C : new hA(this);
              var $ = t.apply(C, Q);
              return $.__actions__.push({ func: Si, args: [L], thisArg: e }), new Ke($, O);
            }
            return q && iA ? t.apply(this, Q) : ($ = this.thru(L), q ? u ? $.value()[0] : $.value() : $);
          });
        }), Te(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var r = ni[t], a = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", u = /^(?:pop|shift)$/.test(t);
          B.prototype[t] = function() {
            var f = arguments;
            if (u && !this.__chain__) {
              var g = this.value();
              return r.apply(nA(g) ? g : [], f);
            }
            return this[a](function(C) {
              return r.apply(nA(C) ? C : [], f);
            });
          };
        }), et(hA.prototype, function(t, r) {
          var a = B[r];
          if (a) {
            var u = a.name + "";
            EA.call(En, u) || (En[u] = []), En[u].push({ name: r, func: a });
          }
        }), En[Fi(e, S).name] = [{
          name: "wrapper",
          func: e
        }], hA.prototype.clone = ZB, hA.prototype.reverse = qB, hA.prototype.value = $B, B.prototype.at = _p, B.prototype.chain = yp, B.prototype.commit = Hp, B.prototype.next = bp, B.prototype.plant = xp, B.prototype.reverse = Lp, B.prototype.toJSON = B.prototype.valueOf = B.prototype.value = Tp, B.prototype.first = B.prototype.head, tr && (B.prototype[tr] = Sp), B;
      }, vn = HB();
      Yt ? ((Yt.exports = vn)._ = vn, no._ = vn) : ee._ = vn;
    }).call(kQ);
  }(mr, mr.exports)), mr.exports;
}
WQ();
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var La = function(i, A) {
  return La = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
  }, La(i, A);
};
function At(i, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  La(i, A);
  function e() {
    this.constructor = i;
  }
  i.prototype = A === null ? Object.create(A) : (e.prototype = A.prototype, new e());
}
var Ta = function() {
  return Ta = Object.assign || function(A) {
    for (var e, n = 1, s = arguments.length; n < s; n++) {
      e = arguments[n];
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (A[o] = e[o]);
    }
    return A;
  }, Ta.apply(this, arguments);
};
function Be(i, A, e, n) {
  function s(o) {
    return o instanceof e ? o : new e(function(l) {
      l(o);
    });
  }
  return new (e || (e = Promise))(function(o, l) {
    function c(w) {
      try {
        d(n.next(w));
      } catch (p) {
        l(p);
      }
    }
    function h(w) {
      try {
        d(n.throw(w));
      } catch (p) {
        l(p);
      }
    }
    function d(w) {
      w.done ? o(w.value) : s(w.value).then(c, h);
    }
    d((n = n.apply(i, [])).next());
  });
}
function le(i, A) {
  var e = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, s, o, l;
  return l = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function c(d) {
    return function(w) {
      return h([d, w]);
    };
  }
  function h(d) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; e; ) try {
      if (n = 1, s && (o = d[0] & 2 ? s.return : d[0] ? s.throw || ((o = s.return) && o.call(s), 0) : s.next) && !(o = o.call(s, d[1])).done) return o;
      switch (s = 0, o && (d = [d[0] & 2, o.value]), d[0]) {
        case 0:
        case 1:
          o = d;
          break;
        case 4:
          return e.label++, { value: d[1], done: !1 };
        case 5:
          e.label++, s = d[1], d = [0];
          continue;
        case 7:
          d = e.ops.pop(), e.trys.pop();
          continue;
        default:
          if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (d[0] === 6 || d[0] === 2)) {
            e = 0;
            continue;
          }
          if (d[0] === 3 && (!o || d[1] > o[0] && d[1] < o[3])) {
            e.label = d[1];
            break;
          }
          if (d[0] === 6 && e.label < o[1]) {
            e.label = o[1], o = d;
            break;
          }
          if (o && e.label < o[2]) {
            e.label = o[2], e.ops.push(d);
            break;
          }
          o[2] && e.ops.pop(), e.trys.pop();
          continue;
      }
      d = A.call(i, e);
    } catch (w) {
      d = [6, w], s = 0;
    } finally {
      n = o = 0;
    }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}
function Gi(i, A, e) {
  if (arguments.length === 2) for (var n = 0, s = A.length, o; n < s; n++)
    (o || !(n in A)) && (o || (o = Array.prototype.slice.call(A, 0, n)), o[n] = A[n]);
  return i.concat(o || A);
}
var Ut = (
  /** @class */
  function() {
    function i(A, e, n, s) {
      this.left = A, this.top = e, this.width = n, this.height = s;
    }
    return i.prototype.add = function(A, e, n, s) {
      return new i(this.left + A, this.top + e, this.width + n, this.height + s);
    }, i.fromClientRect = function(A, e) {
      return new i(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height);
    }, i.fromDOMRectList = function(A, e) {
      var n = Array.from(e).find(function(s) {
        return s.width !== 0;
      });
      return n ? new i(n.left + A.windowBounds.left, n.top + A.windowBounds.top, n.width, n.height) : i.EMPTY;
    }, i.EMPTY = new i(0, 0, 0, 0), i;
  }()
), Hs = function(i, A) {
  return Ut.fromClientRect(i, A.getBoundingClientRect());
}, zQ = function(i) {
  var A = i.body, e = i.documentElement;
  if (!A || !e)
    throw new Error("Unable to get document size");
  var n = Math.max(Math.max(A.scrollWidth, e.scrollWidth), Math.max(A.offsetWidth, e.offsetWidth), Math.max(A.clientWidth, e.clientWidth)), s = Math.max(Math.max(A.scrollHeight, e.scrollHeight), Math.max(A.offsetHeight, e.offsetHeight), Math.max(A.clientHeight, e.clientHeight));
  return new Ut(0, 0, n, s);
}, bs = function(i) {
  for (var A = [], e = 0, n = i.length; e < n; ) {
    var s = i.charCodeAt(e++);
    if (s >= 55296 && s <= 56319 && e < n) {
      var o = i.charCodeAt(e++);
      (o & 64512) === 56320 ? A.push(((s & 1023) << 10) + (o & 1023) + 65536) : (A.push(s), e--);
    } else
      A.push(s);
  }
  return A;
}, WA = function() {
  for (var i = [], A = 0; A < arguments.length; A++)
    i[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, i);
  var e = i.length;
  if (!e)
    return "";
  for (var n = [], s = -1, o = ""; ++s < e; ) {
    var l = i[s];
    l <= 65535 ? n.push(l) : (l -= 65536, n.push((l >> 10) + 55296, l % 1024 + 56320)), (s + 1 === e || n.length > 16384) && (o += String.fromCharCode.apply(String, n), n.length = 0);
  }
  return o;
}, zc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", XQ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ni = 0; Ni < zc.length; Ni++)
  XQ[zc.charCodeAt(Ni)] = Ni;
var Xc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Qr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Vi = 0; Vi < Xc.length; Vi++)
  Qr[Xc.charCodeAt(Vi)] = Vi;
var JQ = function(i) {
  var A = i.length * 0.75, e = i.length, n, s = 0, o, l, c, h;
  i[i.length - 1] === "=" && (A--, i[i.length - 2] === "=" && A--);
  var d = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), w = Array.isArray(d) ? d : new Uint8Array(d);
  for (n = 0; n < e; n += 4)
    o = Qr[i.charCodeAt(n)], l = Qr[i.charCodeAt(n + 1)], c = Qr[i.charCodeAt(n + 2)], h = Qr[i.charCodeAt(n + 3)], w[s++] = o << 2 | l >> 4, w[s++] = (l & 15) << 4 | c >> 2, w[s++] = (c & 3) << 6 | h & 63;
  return d;
}, YQ = function(i) {
  for (var A = i.length, e = [], n = 0; n < A; n += 2)
    e.push(i[n + 1] << 8 | i[n]);
  return e;
}, ZQ = function(i) {
  for (var A = i.length, e = [], n = 0; n < A; n += 4)
    e.push(i[n + 3] << 24 | i[n + 2] << 16 | i[n + 1] << 8 | i[n]);
  return e;
}, cn = 5, nl = 11, ha = 2, qQ = nl - cn, zh = 65536 >> cn, $Q = 1 << cn, fa = $Q - 1, jQ = 1024 >> cn, A0 = zh + jQ, e0 = A0, t0 = 32, n0 = e0 + t0, r0 = 65536 >> nl, i0 = 1 << qQ, s0 = i0 - 1, Jc = function(i, A, e) {
  return i.slice ? i.slice(A, e) : new Uint16Array(Array.prototype.slice.call(i, A, e));
}, o0 = function(i, A, e) {
  return i.slice ? i.slice(A, e) : new Uint32Array(Array.prototype.slice.call(i, A, e));
}, a0 = function(i, A) {
  var e = JQ(i), n = Array.isArray(e) ? ZQ(e) : new Uint32Array(e), s = Array.isArray(e) ? YQ(e) : new Uint16Array(e), o = 24, l = Jc(s, o / 2, n[4] / 2), c = n[5] === 2 ? Jc(s, (o + n[4]) / 2) : o0(n, Math.ceil((o + n[4]) / 4));
  return new l0(n[0], n[1], n[2], n[3], l, c);
}, l0 = (
  /** @class */
  function() {
    function i(A, e, n, s, o, l) {
      this.initialValue = A, this.errorValue = e, this.highStart = n, this.highValueIndex = s, this.index = o, this.data = l;
    }
    return i.prototype.get = function(A) {
      var e;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return e = this.index[A >> cn], e = (e << ha) + (A & fa), this.data[e];
        if (A <= 65535)
          return e = this.index[zh + (A - 55296 >> cn)], e = (e << ha) + (A & fa), this.data[e];
        if (A < this.highStart)
          return e = n0 - r0 + (A >> nl), e = this.index[e], e += A >> cn & s0, e = this.index[e], e = (e << ha) + (A & fa), this.data[e];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, i;
  }()
), Yc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u0 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ki = 0; ki < Yc.length; ki++)
  u0[Yc.charCodeAt(ki)] = ki;
var c0 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Zc = 50, h0 = 1, Xh = 2, Jh = 3, f0 = 4, d0 = 5, qc = 7, Yh = 8, $c = 9, Mt = 10, Da = 11, jc = 12, Ka = 13, B0 = 14, Ur = 15, Ma = 16, Wi = 17, gr = 18, g0 = 19, Ah = 20, Ra = 21, wr = 22, da = 23, Ln = 24, ye = 25, vr = 26, Fr = 27, Tn = 28, w0 = 29, on = 30, p0 = 31, zi = 32, Xi = 33, Oa = 34, Pa = 35, Ga = 36, Kr = 37, Na = 38, cs = 39, hs = 40, Ba = 41, Zh = 42, C0 = 43, m0 = [9001, 65288], qh = "!", fA = "×", Ji = "÷", Va = a0(c0), pt = [on, Ga], ka = [h0, Xh, Jh, d0], $h = [Mt, Yh], eh = [Fr, vr], Q0 = ka.concat($h), th = [Na, cs, hs, Oa, Pa], U0 = [Ur, Ka], v0 = function(i, A) {
  A === void 0 && (A = "strict");
  var e = [], n = [], s = [];
  return i.forEach(function(o, l) {
    var c = Va.get(o);
    if (c > Zc ? (s.push(!0), c -= Zc) : s.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(o) !== -1)
      return n.push(l), e.push(Ma);
    if (c === f0 || c === Da) {
      if (l === 0)
        return n.push(l), e.push(on);
      var h = e[l - 1];
      return Q0.indexOf(h) === -1 ? (n.push(n[l - 1]), e.push(h)) : (n.push(l), e.push(on));
    }
    if (n.push(l), c === p0)
      return e.push(A === "strict" ? Ra : Kr);
    if (c === Zh || c === w0)
      return e.push(on);
    if (c === C0)
      return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? e.push(Kr) : e.push(on);
    e.push(c);
  }), [n, e, s];
}, ga = function(i, A, e, n) {
  var s = n[e];
  if (Array.isArray(i) ? i.indexOf(s) !== -1 : i === s)
    for (var o = e; o <= n.length; ) {
      o++;
      var l = n[o];
      if (l === A)
        return !0;
      if (l !== Mt)
        break;
    }
  if (s === Mt)
    for (var o = e; o > 0; ) {
      o--;
      var c = n[o];
      if (Array.isArray(i) ? i.indexOf(c) !== -1 : i === c)
        for (var h = e; h <= n.length; ) {
          h++;
          var l = n[h];
          if (l === A)
            return !0;
          if (l !== Mt)
            break;
        }
      if (c !== Mt)
        break;
    }
  return !1;
}, nh = function(i, A) {
  for (var e = i; e >= 0; ) {
    var n = A[e];
    if (n === Mt)
      e--;
    else
      return n;
  }
  return 0;
}, F0 = function(i, A, e, n, s) {
  if (e[n] === 0)
    return fA;
  var o = n - 1;
  if (Array.isArray(s) && s[o] === !0)
    return fA;
  var l = o - 1, c = o + 1, h = A[o], d = l >= 0 ? A[l] : 0, w = A[c];
  if (h === Xh && w === Jh)
    return fA;
  if (ka.indexOf(h) !== -1)
    return qh;
  if (ka.indexOf(w) !== -1 || $h.indexOf(w) !== -1)
    return fA;
  if (nh(o, A) === Yh)
    return Ji;
  if (Va.get(i[o]) === Da || (h === zi || h === Xi) && Va.get(i[c]) === Da || h === qc || w === qc || h === $c || [Mt, Ka, Ur].indexOf(h) === -1 && w === $c || [Wi, gr, g0, Ln, Tn].indexOf(w) !== -1 || nh(o, A) === wr || ga(da, wr, o, A) || ga([Wi, gr], Ra, o, A) || ga(jc, jc, o, A))
    return fA;
  if (h === Mt)
    return Ji;
  if (h === da || w === da)
    return fA;
  if (w === Ma || h === Ma)
    return Ji;
  if ([Ka, Ur, Ra].indexOf(w) !== -1 || h === B0 || d === Ga && U0.indexOf(h) !== -1 || h === Tn && w === Ga || w === Ah || pt.indexOf(w) !== -1 && h === ye || pt.indexOf(h) !== -1 && w === ye || h === Fr && [Kr, zi, Xi].indexOf(w) !== -1 || [Kr, zi, Xi].indexOf(h) !== -1 && w === vr || pt.indexOf(h) !== -1 && eh.indexOf(w) !== -1 || eh.indexOf(h) !== -1 && pt.indexOf(w) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Fr, vr].indexOf(h) !== -1 && (w === ye || [wr, Ur].indexOf(w) !== -1 && A[c + 1] === ye) || // ( OP | HY ) × NU
  [wr, Ur].indexOf(h) !== -1 && w === ye || // NU ×	(NU | SY | IS)
  h === ye && [ye, Tn, Ln].indexOf(w) !== -1)
    return fA;
  if ([ye, Tn, Ln, Wi, gr].indexOf(w) !== -1)
    for (var p = o; p >= 0; ) {
      var m = A[p];
      if (m === ye)
        return fA;
      if ([Tn, Ln].indexOf(m) !== -1)
        p--;
      else
        break;
    }
  if ([Fr, vr].indexOf(w) !== -1)
    for (var p = [Wi, gr].indexOf(h) !== -1 ? l : o; p >= 0; ) {
      var m = A[p];
      if (m === ye)
        return fA;
      if ([Tn, Ln].indexOf(m) !== -1)
        p--;
      else
        break;
    }
  if (Na === h && [Na, cs, Oa, Pa].indexOf(w) !== -1 || [cs, Oa].indexOf(h) !== -1 && [cs, hs].indexOf(w) !== -1 || [hs, Pa].indexOf(h) !== -1 && w === hs || th.indexOf(h) !== -1 && [Ah, vr].indexOf(w) !== -1 || th.indexOf(w) !== -1 && h === Fr || pt.indexOf(h) !== -1 && pt.indexOf(w) !== -1 || h === Ln && pt.indexOf(w) !== -1 || pt.concat(ye).indexOf(h) !== -1 && w === wr && m0.indexOf(i[c]) === -1 || pt.concat(ye).indexOf(w) !== -1 && h === gr)
    return fA;
  if (h === Ba && w === Ba) {
    for (var U = e[o], v = 1; U > 0 && (U--, A[U] === Ba); )
      v++;
    if (v % 2 !== 0)
      return fA;
  }
  return h === zi && w === Xi ? fA : Ji;
}, I0 = function(i, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var e = v0(i, A.lineBreak), n = e[0], s = e[1], o = e[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (s = s.map(function(c) {
    return [ye, on, Zh].indexOf(c) !== -1 ? Kr : c;
  }));
  var l = A.wordBreak === "keep-all" ? o.map(function(c, h) {
    return c && i[h] >= 19968 && i[h] <= 40959;
  }) : void 0;
  return [n, s, l];
}, E0 = (
  /** @class */
  function() {
    function i(A, e, n, s) {
      this.codePoints = A, this.required = e === qh, this.start = n, this.end = s;
    }
    return i.prototype.slice = function() {
      return WA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, i;
  }()
), _0 = function(i, A) {
  var e = bs(i), n = I0(e, A), s = n[0], o = n[1], l = n[2], c = e.length, h = 0, d = 0;
  return {
    next: function() {
      if (d >= c)
        return { done: !0, value: null };
      for (var w = fA; d < c && (w = F0(e, o, s, ++d, l)) === fA; )
        ;
      if (w !== fA || d === c) {
        var p = new E0(e, w, h, d);
        return h = d, { value: p, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, y0 = 1, H0 = 2, zr = 4, rh = 8, Bs = 10, ih = 47, yr = 92, b0 = 9, S0 = 32, Yi = 34, pr = 61, x0 = 35, L0 = 36, T0 = 37, Zi = 39, qi = 40, Cr = 41, D0 = 95, me = 45, K0 = 33, M0 = 60, R0 = 62, O0 = 64, P0 = 91, G0 = 93, N0 = 61, V0 = 123, $i = 63, k0 = 125, sh = 124, W0 = 126, z0 = 128, oh = 65533, wa = 42, ln = 43, X0 = 44, J0 = 58, Y0 = 59, Mr = 46, Z0 = 0, q0 = 8, $0 = 11, j0 = 14, AU = 31, eU = 127, rt = -1, jh = 48, Af = 97, ef = 101, tU = 102, nU = 117, rU = 122, tf = 65, nf = 69, rf = 70, iU = 85, sU = 90, ue = function(i) {
  return i >= jh && i <= 57;
}, oU = function(i) {
  return i >= 55296 && i <= 57343;
}, Dn = function(i) {
  return ue(i) || i >= tf && i <= rf || i >= Af && i <= tU;
}, aU = function(i) {
  return i >= Af && i <= rU;
}, lU = function(i) {
  return i >= tf && i <= sU;
}, uU = function(i) {
  return aU(i) || lU(i);
}, cU = function(i) {
  return i >= z0;
}, ji = function(i) {
  return i === Bs || i === b0 || i === S0;
}, gs = function(i) {
  return uU(i) || cU(i) || i === D0;
}, ah = function(i) {
  return gs(i) || ue(i) || i === me;
}, hU = function(i) {
  return i >= Z0 && i <= q0 || i === $0 || i >= j0 && i <= AU || i === eU;
}, Kt = function(i, A) {
  return i !== yr ? !1 : A !== Bs;
}, As = function(i, A, e) {
  return i === me ? gs(A) || Kt(A, e) : gs(i) ? !0 : !!(i === yr && Kt(i, A));
}, pa = function(i, A, e) {
  return i === ln || i === me ? ue(A) ? !0 : A === Mr && ue(e) : ue(i === Mr ? A : i);
}, fU = function(i) {
  var A = 0, e = 1;
  (i[A] === ln || i[A] === me) && (i[A] === me && (e = -1), A++);
  for (var n = []; ue(i[A]); )
    n.push(i[A++]);
  var s = n.length ? parseInt(WA.apply(void 0, n), 10) : 0;
  i[A] === Mr && A++;
  for (var o = []; ue(i[A]); )
    o.push(i[A++]);
  var l = o.length, c = l ? parseInt(WA.apply(void 0, o), 10) : 0;
  (i[A] === nf || i[A] === ef) && A++;
  var h = 1;
  (i[A] === ln || i[A] === me) && (i[A] === me && (h = -1), A++);
  for (var d = []; ue(i[A]); )
    d.push(i[A++]);
  var w = d.length ? parseInt(WA.apply(void 0, d), 10) : 0;
  return e * (s + c * Math.pow(10, -l)) * Math.pow(10, h * w);
}, dU = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, BU = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, gU = {
  type: 4
  /* COMMA_TOKEN */
}, wU = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, pU = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, CU = {
  type: 21
  /* COLUMN_TOKEN */
}, mU = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, QU = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, UU = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, vU = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, FU = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, es = {
  type: 23
  /* BAD_URL_TOKEN */
}, IU = {
  type: 1
  /* BAD_STRING_TOKEN */
}, EU = {
  type: 25
  /* CDO_TOKEN */
}, _U = {
  type: 24
  /* CDC_TOKEN */
}, yU = {
  type: 26
  /* COLON_TOKEN */
}, HU = {
  type: 27
  /* SEMICOLON_TOKEN */
}, bU = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, SU = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, xU = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Wa = {
  type: 32
  /* EOF_TOKEN */
}, sf = (
  /** @class */
  function() {
    function i() {
      this._value = [];
    }
    return i.prototype.write = function(A) {
      this._value = this._value.concat(bs(A));
    }, i.prototype.read = function() {
      for (var A = [], e = this.consumeToken(); e !== Wa; )
        A.push(e), e = this.consumeToken();
      return A;
    }, i.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case Yi:
          return this.consumeStringToken(Yi);
        case x0:
          var e = this.peekCodePoint(0), n = this.peekCodePoint(1), s = this.peekCodePoint(2);
          if (ah(e) || Kt(n, s)) {
            var o = As(e, n, s) ? H0 : y0, l = this.consumeName();
            return { type: 5, value: l, flags: o };
          }
          break;
        case L0:
          if (this.peekCodePoint(0) === pr)
            return this.consumeCodePoint(), wU;
          break;
        case Zi:
          return this.consumeStringToken(Zi);
        case qi:
          return dU;
        case Cr:
          return BU;
        case wa:
          if (this.peekCodePoint(0) === pr)
            return this.consumeCodePoint(), FU;
          break;
        case ln:
          if (pa(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case X0:
          return gU;
        case me:
          var c = A, h = this.peekCodePoint(0), d = this.peekCodePoint(1);
          if (pa(c, h, d))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (As(c, h, d))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (h === me && d === R0)
            return this.consumeCodePoint(), this.consumeCodePoint(), _U;
          break;
        case Mr:
          if (pa(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case ih:
          if (this.peekCodePoint(0) === wa)
            for (this.consumeCodePoint(); ; ) {
              var w = this.consumeCodePoint();
              if (w === wa && (w = this.consumeCodePoint(), w === ih))
                return this.consumeToken();
              if (w === rt)
                return this.consumeToken();
            }
          break;
        case J0:
          return yU;
        case Y0:
          return HU;
        case M0:
          if (this.peekCodePoint(0) === K0 && this.peekCodePoint(1) === me && this.peekCodePoint(2) === me)
            return this.consumeCodePoint(), this.consumeCodePoint(), EU;
          break;
        case O0:
          var p = this.peekCodePoint(0), m = this.peekCodePoint(1), U = this.peekCodePoint(2);
          if (As(p, m, U)) {
            var l = this.consumeName();
            return { type: 7, value: l };
          }
          break;
        case P0:
          return bU;
        case yr:
          if (Kt(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case G0:
          return SU;
        case N0:
          if (this.peekCodePoint(0) === pr)
            return this.consumeCodePoint(), pU;
          break;
        case V0:
          return UU;
        case k0:
          return vU;
        case nU:
        case iU:
          var v = this.peekCodePoint(0), E = this.peekCodePoint(1);
          return v === ln && (Dn(E) || E === $i) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case sh:
          if (this.peekCodePoint(0) === pr)
            return this.consumeCodePoint(), mU;
          if (this.peekCodePoint(0) === sh)
            return this.consumeCodePoint(), CU;
          break;
        case W0:
          if (this.peekCodePoint(0) === pr)
            return this.consumeCodePoint(), QU;
          break;
        case rt:
          return Wa;
      }
      return ji(A) ? (this.consumeWhiteSpace(), xU) : ue(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : gs(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: WA(A) };
    }, i.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, i.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, i.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, i.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], e = this.consumeCodePoint(); Dn(e) && A.length < 6; )
        A.push(e), e = this.consumeCodePoint();
      for (var n = !1; e === $i && A.length < 6; )
        A.push(e), e = this.consumeCodePoint(), n = !0;
      if (n) {
        var s = parseInt(WA.apply(void 0, A.map(function(h) {
          return h === $i ? jh : h;
        })), 16), o = parseInt(WA.apply(void 0, A.map(function(h) {
          return h === $i ? rf : h;
        })), 16);
        return { type: 30, start: s, end: o };
      }
      var l = parseInt(WA.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === me && Dn(this.peekCodePoint(1))) {
        this.consumeCodePoint(), e = this.consumeCodePoint();
        for (var c = []; Dn(e) && c.length < 6; )
          c.push(e), e = this.consumeCodePoint();
        var o = parseInt(WA.apply(void 0, c), 16);
        return { type: 30, start: l, end: o };
      } else
        return { type: 30, start: l, end: l };
    }, i.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === qi ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === qi ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, i.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === rt)
        return { type: 22, value: "" };
      var e = this.peekCodePoint(0);
      if (e === Zi || e === Yi) {
        var n = this.consumeStringToken(this.consumeCodePoint());
        return n.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === rt || this.peekCodePoint(0) === Cr) ? (this.consumeCodePoint(), { type: 22, value: n.value }) : (this.consumeBadUrlRemnants(), es);
      }
      for (; ; ) {
        var s = this.consumeCodePoint();
        if (s === rt || s === Cr)
          return { type: 22, value: WA.apply(void 0, A) };
        if (ji(s))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === rt || this.peekCodePoint(0) === Cr ? (this.consumeCodePoint(), { type: 22, value: WA.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), es);
        if (s === Yi || s === Zi || s === qi || hU(s))
          return this.consumeBadUrlRemnants(), es;
        if (s === yr)
          if (Kt(s, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), es;
        else
          A.push(s);
      }
    }, i.prototype.consumeWhiteSpace = function() {
      for (; ji(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, i.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === Cr || A === rt)
          return;
        Kt(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, i.prototype.consumeStringSlice = function(A) {
      for (var e = 5e4, n = ""; A > 0; ) {
        var s = Math.min(e, A);
        n += WA.apply(void 0, this._value.splice(0, s)), A -= s;
      }
      return this._value.shift(), n;
    }, i.prototype.consumeStringToken = function(A) {
      var e = "", n = 0;
      do {
        var s = this._value[n];
        if (s === rt || s === void 0 || s === A)
          return e += this.consumeStringSlice(n), { type: 0, value: e };
        if (s === Bs)
          return this._value.splice(0, n), IU;
        if (s === yr) {
          var o = this._value[n + 1];
          o !== rt && o !== void 0 && (o === Bs ? (e += this.consumeStringSlice(n), n = -1, this._value.shift()) : Kt(s, o) && (e += this.consumeStringSlice(n), e += WA(this.consumeEscapedCodePoint()), n = -1));
        }
        n++;
      } while (!0);
    }, i.prototype.consumeNumber = function() {
      var A = [], e = zr, n = this.peekCodePoint(0);
      for ((n === ln || n === me) && A.push(this.consumeCodePoint()); ue(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      n = this.peekCodePoint(0);
      var s = this.peekCodePoint(1);
      if (n === Mr && ue(s))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = rh; ue(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      n = this.peekCodePoint(0), s = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((n === nf || n === ef) && ((s === ln || s === me) && ue(o) || ue(s)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = rh; ue(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [fU(A), e];
    }, i.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), e = A[0], n = A[1], s = this.peekCodePoint(0), o = this.peekCodePoint(1), l = this.peekCodePoint(2);
      if (As(s, o, l)) {
        var c = this.consumeName();
        return { type: 15, number: e, flags: n, unit: c };
      }
      return s === T0 ? (this.consumeCodePoint(), { type: 16, number: e, flags: n }) : { type: 17, number: e, flags: n };
    }, i.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (Dn(A)) {
        for (var e = WA(A); Dn(this.peekCodePoint(0)) && e.length < 6; )
          e += WA(this.consumeCodePoint());
        ji(this.peekCodePoint(0)) && this.consumeCodePoint();
        var n = parseInt(e, 16);
        return n === 0 || oU(n) || n > 1114111 ? oh : n;
      }
      return A === rt ? oh : A;
    }, i.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var e = this.consumeCodePoint();
        if (ah(e))
          A += WA(e);
        else if (Kt(e, this.peekCodePoint(0)))
          A += WA(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(e), A;
      }
    }, i;
  }()
), of = (
  /** @class */
  function() {
    function i(A) {
      this._tokens = A;
    }
    return i.create = function(A) {
      var e = new sf();
      return e.write(A), new i(e.read());
    }, i.parseValue = function(A) {
      return i.create(A).parseComponentValue();
    }, i.parseValues = function(A) {
      return i.create(A).parseComponentValues();
    }, i.prototype.parseComponentValue = function() {
      for (var A = this.consumeToken(); A.type === 31; )
        A = this.consumeToken();
      if (A.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(A);
      var e = this.consumeComponentValue();
      do
        A = this.consumeToken();
      while (A.type === 31);
      if (A.type === 32)
        return e;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, i.prototype.parseComponentValues = function() {
      for (var A = []; ; ) {
        var e = this.consumeComponentValue();
        if (e.type === 32)
          return A;
        A.push(e), A.push();
      }
    }, i.prototype.consumeComponentValue = function() {
      var A = this.consumeToken();
      switch (A.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(A.type);
        case 19:
          return this.consumeFunction(A);
      }
      return A;
    }, i.prototype.consumeSimpleBlock = function(A) {
      for (var e = { type: A, values: [] }, n = this.consumeToken(); ; ) {
        if (n.type === 32 || TU(n, A))
          return e;
        this.reconsumeToken(n), e.values.push(this.consumeComponentValue()), n = this.consumeToken();
      }
    }, i.prototype.consumeFunction = function(A) {
      for (var e = {
        name: A.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var n = this.consumeToken();
        if (n.type === 32 || n.type === 3)
          return e;
        this.reconsumeToken(n), e.values.push(this.consumeComponentValue());
      }
    }, i.prototype.consumeToken = function() {
      var A = this._tokens.shift();
      return typeof A > "u" ? Wa : A;
    }, i.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, i;
  }()
), Xr = function(i) {
  return i.type === 15;
}, Yn = function(i) {
  return i.type === 17;
}, yA = function(i) {
  return i.type === 20;
}, LU = function(i) {
  return i.type === 0;
}, za = function(i, A) {
  return yA(i) && i.value === A;
}, af = function(i) {
  return i.type !== 31;
}, kn = function(i) {
  return i.type !== 31 && i.type !== 4;
}, it = function(i) {
  var A = [], e = [];
  return i.forEach(function(n) {
    if (n.type === 4) {
      if (e.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      A.push(e), e = [];
      return;
    }
    n.type !== 31 && e.push(n);
  }), e.length && A.push(e), A;
}, TU = function(i, A) {
  return A === 11 && i.type === 12 || A === 28 && i.type === 29 ? !0 : A === 2 && i.type === 3;
}, kt = function(i) {
  return i.type === 17 || i.type === 15;
}, JA = function(i) {
  return i.type === 16 || kt(i);
}, lf = function(i) {
  return i.length > 1 ? [i[0], i[1]] : [i[0]];
}, re = {
  type: 17,
  number: 0,
  flags: zr
}, rl = {
  type: 16,
  number: 50,
  flags: zr
}, Rt = {
  type: 16,
  number: 100,
  flags: zr
}, Ir = function(i, A, e) {
  var n = i[0], s = i[1];
  return [SA(n, A), SA(typeof s < "u" ? s : n, e)];
}, SA = function(i, A) {
  if (i.type === 16)
    return i.number / 100 * A;
  if (Xr(i))
    switch (i.unit) {
      case "rem":
      case "em":
        return 16 * i.number;
      // TODO use correct font-size
      case "px":
      default:
        return i.number;
    }
  return i.number;
}, uf = "deg", cf = "grad", hf = "rad", ff = "turn", Ss = {
  name: "angle",
  parse: function(i, A) {
    if (A.type === 15)
      switch (A.unit) {
        case uf:
          return Math.PI * A.number / 180;
        case cf:
          return Math.PI / 200 * A.number;
        case hf:
          return A.number;
        case ff:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, df = function(i) {
  return i.type === 15 && (i.unit === uf || i.unit === cf || i.unit === hf || i.unit === ff);
}, Bf = function(i) {
  var A = i.filter(yA).map(function(e) {
    return e.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [re, re];
    case "to top":
    case "bottom":
      return Ve(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [re, Rt];
    case "to right":
    case "left":
      return Ve(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Rt, Rt];
    case "to bottom":
    case "top":
      return Ve(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Rt, re];
    case "to left":
    case "right":
      return Ve(270);
  }
  return 0;
}, Ve = function(i) {
  return Math.PI * i / 180;
}, Gt = {
  name: "color",
  parse: function(i, A) {
    if (A.type === 18) {
      var e = DU[A.name];
      if (typeof e > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return e(i, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var n = A.value.substring(0, 1), s = A.value.substring(1, 2), o = A.value.substring(2, 3);
        return Ot(parseInt(n + n, 16), parseInt(s + s, 16), parseInt(o + o, 16), 1);
      }
      if (A.value.length === 4) {
        var n = A.value.substring(0, 1), s = A.value.substring(1, 2), o = A.value.substring(2, 3), l = A.value.substring(3, 4);
        return Ot(parseInt(n + n, 16), parseInt(s + s, 16), parseInt(o + o, 16), parseInt(l + l, 16) / 255);
      }
      if (A.value.length === 6) {
        var n = A.value.substring(0, 2), s = A.value.substring(2, 4), o = A.value.substring(4, 6);
        return Ot(parseInt(n, 16), parseInt(s, 16), parseInt(o, 16), 1);
      }
      if (A.value.length === 8) {
        var n = A.value.substring(0, 2), s = A.value.substring(2, 4), o = A.value.substring(4, 6), l = A.value.substring(6, 8);
        return Ot(parseInt(n, 16), parseInt(s, 16), parseInt(o, 16), parseInt(l, 16) / 255);
      }
    }
    if (A.type === 20) {
      var c = Qt[A.value.toUpperCase()];
      if (typeof c < "u")
        return c;
    }
    return Qt.TRANSPARENT;
  }
}, Nt = function(i) {
  return (255 & i) === 0;
}, Ae = function(i) {
  var A = 255 & i, e = 255 & i >> 8, n = 255 & i >> 16, s = 255 & i >> 24;
  return A < 255 ? "rgba(" + s + "," + n + "," + e + "," + A / 255 + ")" : "rgb(" + s + "," + n + "," + e + ")";
}, Ot = function(i, A, e, n) {
  return (i << 24 | A << 16 | e << 8 | Math.round(n * 255) << 0) >>> 0;
}, lh = function(i, A) {
  if (i.type === 17)
    return i.number;
  if (i.type === 16) {
    var e = A === 3 ? 1 : 255;
    return A === 3 ? i.number / 100 * e : Math.round(i.number / 100 * e);
  }
  return 0;
}, uh = function(i, A) {
  var e = A.filter(kn);
  if (e.length === 3) {
    var n = e.map(lh), s = n[0], o = n[1], l = n[2];
    return Ot(s, o, l, 1);
  }
  if (e.length === 4) {
    var c = e.map(lh), s = c[0], o = c[1], l = c[2], h = c[3];
    return Ot(s, o, l, h);
  }
  return 0;
};
function Ca(i, A, e) {
  return e < 0 && (e += 1), e >= 1 && (e -= 1), e < 1 / 6 ? (A - i) * e * 6 + i : e < 1 / 2 ? A : e < 2 / 3 ? (A - i) * 6 * (2 / 3 - e) + i : i;
}
var ch = function(i, A) {
  var e = A.filter(kn), n = e[0], s = e[1], o = e[2], l = e[3], c = (n.type === 17 ? Ve(n.number) : Ss.parse(i, n)) / (Math.PI * 2), h = JA(s) ? s.number / 100 : 0, d = JA(o) ? o.number / 100 : 0, w = typeof l < "u" && JA(l) ? SA(l, 1) : 1;
  if (h === 0)
    return Ot(d * 255, d * 255, d * 255, 1);
  var p = d <= 0.5 ? d * (h + 1) : d + h - d * h, m = d * 2 - p, U = Ca(m, p, c + 1 / 3), v = Ca(m, p, c), E = Ca(m, p, c - 1 / 3);
  return Ot(U * 255, v * 255, E * 255, w);
}, DU = {
  hsl: ch,
  hsla: ch,
  rgb: uh,
  rgba: uh
}, Hr = function(i, A) {
  return Gt.parse(i, of.create(A).parseComponentValue());
}, Qt = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
}, KU = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(i, A) {
    return A.map(function(e) {
      if (yA(e))
        switch (e.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, MU = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, xs = function(i, A) {
  var e = Gt.parse(i, A[0]), n = A[1];
  return n && JA(n) ? { color: e, stop: n } : { color: e, stop: null };
}, hh = function(i, A) {
  var e = i[0], n = i[i.length - 1];
  e.stop === null && (e.stop = re), n.stop === null && (n.stop = Rt);
  for (var s = [], o = 0, l = 0; l < i.length; l++) {
    var c = i[l].stop;
    if (c !== null) {
      var h = SA(c, A);
      h > o ? s.push(h) : s.push(o), o = h;
    } else
      s.push(null);
  }
  for (var d = null, l = 0; l < s.length; l++) {
    var w = s[l];
    if (w === null)
      d === null && (d = l);
    else if (d !== null) {
      for (var p = l - d, m = s[d - 1], U = (w - m) / (p + 1), v = 1; v <= p; v++)
        s[d + v - 1] = U * v;
      d = null;
    }
  }
  return i.map(function(E, T) {
    var S = E.color;
    return { color: S, stop: Math.max(Math.min(1, s[T] / A), 0) };
  });
}, RU = function(i, A, e) {
  var n = A / 2, s = e / 2, o = SA(i[0], A) - n, l = s - SA(i[1], e);
  return (Math.atan2(l, o) + Math.PI * 2) % (Math.PI * 2);
}, OU = function(i, A, e) {
  var n = typeof i == "number" ? i : RU(i, A, e), s = Math.abs(A * Math.sin(n)) + Math.abs(e * Math.cos(n)), o = A / 2, l = e / 2, c = s / 2, h = Math.sin(n - Math.PI / 2) * c, d = Math.cos(n - Math.PI / 2) * c;
  return [s, o - d, o + d, l - h, l + h];
}, je = function(i, A) {
  return Math.sqrt(i * i + A * A);
}, fh = function(i, A, e, n, s) {
  var o = [
    [0, 0],
    [0, A],
    [i, 0],
    [i, A]
  ];
  return o.reduce(function(l, c) {
    var h = c[0], d = c[1], w = je(e - h, n - d);
    return (s ? w < l.optimumDistance : w > l.optimumDistance) ? {
      optimumCorner: c,
      optimumDistance: w
    } : l;
  }, {
    optimumDistance: s ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, PU = function(i, A, e, n, s) {
  var o = 0, l = 0;
  switch (i.size) {
    case 0:
      i.shape === 0 ? o = l = Math.min(Math.abs(A), Math.abs(A - n), Math.abs(e), Math.abs(e - s)) : i.shape === 1 && (o = Math.min(Math.abs(A), Math.abs(A - n)), l = Math.min(Math.abs(e), Math.abs(e - s)));
      break;
    case 2:
      if (i.shape === 0)
        o = l = Math.min(je(A, e), je(A, e - s), je(A - n, e), je(A - n, e - s));
      else if (i.shape === 1) {
        var c = Math.min(Math.abs(e), Math.abs(e - s)) / Math.min(Math.abs(A), Math.abs(A - n)), h = fh(n, s, A, e, !0), d = h[0], w = h[1];
        o = je(d - A, (w - e) / c), l = c * o;
      }
      break;
    case 1:
      i.shape === 0 ? o = l = Math.max(Math.abs(A), Math.abs(A - n), Math.abs(e), Math.abs(e - s)) : i.shape === 1 && (o = Math.max(Math.abs(A), Math.abs(A - n)), l = Math.max(Math.abs(e), Math.abs(e - s)));
      break;
    case 3:
      if (i.shape === 0)
        o = l = Math.max(je(A, e), je(A, e - s), je(A - n, e), je(A - n, e - s));
      else if (i.shape === 1) {
        var c = Math.max(Math.abs(e), Math.abs(e - s)) / Math.max(Math.abs(A), Math.abs(A - n)), p = fh(n, s, A, e, !1), d = p[0], w = p[1];
        o = je(d - A, (w - e) / c), l = c * o;
      }
      break;
  }
  return Array.isArray(i.size) && (o = SA(i.size[0], n), l = i.size.length === 2 ? SA(i.size[1], s) : o), [o, l];
}, GU = function(i, A) {
  var e = Ve(180), n = [];
  return it(A).forEach(function(s, o) {
    if (o === 0) {
      var l = s[0];
      if (l.type === 20 && l.value === "to") {
        e = Bf(s);
        return;
      } else if (df(l)) {
        e = Ss.parse(i, l);
        return;
      }
    }
    var c = xs(i, s);
    n.push(c);
  }), {
    angle: e,
    stops: n,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, ts = function(i, A) {
  var e = Ve(180), n = [];
  return it(A).forEach(function(s, o) {
    if (o === 0) {
      var l = s[0];
      if (l.type === 20 && ["top", "left", "right", "bottom"].indexOf(l.value) !== -1) {
        e = Bf(s);
        return;
      } else if (df(l)) {
        e = (Ss.parse(i, l) + Ve(270)) % Ve(360);
        return;
      }
    }
    var c = xs(i, s);
    n.push(c);
  }), {
    angle: e,
    stops: n,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, NU = function(i, A) {
  var e = Ve(180), n = [], s = 1, o = 0, l = 3, c = [];
  return it(A).forEach(function(h, d) {
    var w = h[0];
    if (d === 0) {
      if (yA(w) && w.value === "linear") {
        s = 1;
        return;
      } else if (yA(w) && w.value === "radial") {
        s = 2;
        return;
      }
    }
    if (w.type === 18) {
      if (w.name === "from") {
        var p = Gt.parse(i, w.values[0]);
        n.push({ stop: re, color: p });
      } else if (w.name === "to") {
        var p = Gt.parse(i, w.values[0]);
        n.push({ stop: Rt, color: p });
      } else if (w.name === "color-stop") {
        var m = w.values.filter(kn);
        if (m.length === 2) {
          var p = Gt.parse(i, m[1]), U = m[0];
          Yn(U) && n.push({
            stop: { type: 16, number: U.number * 100, flags: U.flags },
            color: p
          });
        }
      }
    }
  }), s === 1 ? {
    angle: (e + Ve(180)) % Ve(360),
    stops: n,
    type: s
  } : { size: l, shape: o, stops: n, position: c, type: s };
}, gf = "closest-side", wf = "farthest-side", pf = "closest-corner", Cf = "farthest-corner", mf = "circle", Qf = "ellipse", Uf = "cover", vf = "contain", VU = function(i, A) {
  var e = 0, n = 3, s = [], o = [];
  return it(A).forEach(function(l, c) {
    var h = !0;
    if (c === 0) {
      var d = !1;
      h = l.reduce(function(p, m) {
        if (d)
          if (yA(m))
            switch (m.value) {
              case "center":
                return o.push(rl), p;
              case "top":
              case "left":
                return o.push(re), p;
              case "right":
              case "bottom":
                return o.push(Rt), p;
            }
          else (JA(m) || kt(m)) && o.push(m);
        else if (yA(m))
          switch (m.value) {
            case mf:
              return e = 0, !1;
            case Qf:
              return e = 1, !1;
            case "at":
              return d = !0, !1;
            case gf:
              return n = 0, !1;
            case Uf:
            case wf:
              return n = 1, !1;
            case vf:
            case pf:
              return n = 2, !1;
            case Cf:
              return n = 3, !1;
          }
        else if (kt(m) || JA(m))
          return Array.isArray(n) || (n = []), n.push(m), !1;
        return p;
      }, h);
    }
    if (h) {
      var w = xs(i, l);
      s.push(w);
    }
  }), {
    size: n,
    shape: e,
    stops: s,
    position: o,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, ns = function(i, A) {
  var e = 0, n = 3, s = [], o = [];
  return it(A).forEach(function(l, c) {
    var h = !0;
    if (c === 0 ? h = l.reduce(function(w, p) {
      if (yA(p))
        switch (p.value) {
          case "center":
            return o.push(rl), !1;
          case "top":
          case "left":
            return o.push(re), !1;
          case "right":
          case "bottom":
            return o.push(Rt), !1;
        }
      else if (JA(p) || kt(p))
        return o.push(p), !1;
      return w;
    }, h) : c === 1 && (h = l.reduce(function(w, p) {
      if (yA(p))
        switch (p.value) {
          case mf:
            return e = 0, !1;
          case Qf:
            return e = 1, !1;
          case vf:
          case gf:
            return n = 0, !1;
          case wf:
            return n = 1, !1;
          case pf:
            return n = 2, !1;
          case Uf:
          case Cf:
            return n = 3, !1;
        }
      else if (kt(p) || JA(p))
        return Array.isArray(n) || (n = []), n.push(p), !1;
      return w;
    }, h)), h) {
      var d = xs(i, l);
      s.push(d);
    }
  }), {
    size: n,
    shape: e,
    stops: s,
    position: o,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, kU = function(i) {
  return i.type === 1;
}, WU = function(i) {
  return i.type === 2;
}, il = {
  name: "image",
  parse: function(i, A) {
    if (A.type === 22) {
      var e = {
        url: A.value,
        type: 0
        /* URL */
      };
      return i.cache.addImage(A.value), e;
    }
    if (A.type === 18) {
      var n = Ff[A.name];
      if (typeof n > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return n(i, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function zU(i) {
  return !(i.type === 20 && i.value === "none") && (i.type !== 18 || !!Ff[i.name]);
}
var Ff = {
  "linear-gradient": GU,
  "-moz-linear-gradient": ts,
  "-ms-linear-gradient": ts,
  "-o-linear-gradient": ts,
  "-webkit-linear-gradient": ts,
  "radial-gradient": VU,
  "-moz-radial-gradient": ns,
  "-ms-radial-gradient": ns,
  "-o-radial-gradient": ns,
  "-webkit-radial-gradient": ns,
  "-webkit-gradient": NU
}, XU = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(i, A) {
    if (A.length === 0)
      return [];
    var e = A[0];
    return e.type === 20 && e.value === "none" ? [] : A.filter(function(n) {
      return kn(n) && zU(n);
    }).map(function(n) {
      return il.parse(i, n);
    });
  }
}, JU = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(i, A) {
    return A.map(function(e) {
      if (yA(e))
        switch (e.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, YU = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(i, A) {
    return it(A).map(function(e) {
      return e.filter(JA);
    }).map(lf);
  }
}, ZU = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(i, A) {
    return it(A).map(function(e) {
      return e.filter(yA).map(function(n) {
        return n.value;
      }).join(" ");
    }).map(qU);
  }
}, qU = function(i) {
  switch (i) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
}, Vn;
(function(i) {
  i.AUTO = "auto", i.CONTAIN = "contain", i.COVER = "cover";
})(Vn || (Vn = {}));
var $U = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(i, A) {
    return it(A).map(function(e) {
      return e.filter(jU);
    });
  }
}, jU = function(i) {
  return yA(i) || JA(i);
}, Ls = function(i) {
  return {
    name: "border-" + i + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, Av = Ls("top"), ev = Ls("right"), tv = Ls("bottom"), nv = Ls("left"), Ts = function(i) {
  return {
    name: "border-radius-" + i,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, e) {
      return lf(e.filter(JA));
    }
  };
}, rv = Ts("top-left"), iv = Ts("top-right"), sv = Ts("bottom-right"), ov = Ts("bottom-left"), Ds = function(i) {
  return {
    name: "border-" + i + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
}, av = Ds("top"), lv = Ds("right"), uv = Ds("bottom"), cv = Ds("left"), Ks = function(i) {
  return {
    name: "border-" + i + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, e) {
      return Xr(e) ? e.number : 0;
    }
  };
}, hv = Ks("top"), fv = Ks("right"), dv = Ks("bottom"), Bv = Ks("left"), gv = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, wv = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(i, A) {
    switch (A) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, pv = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(i, A) {
    return A.filter(yA).reduce(
      function(e, n) {
        return e | Cv(n.value);
      },
      0
      /* NONE */
    );
  }
}, Cv = function(i) {
  switch (i) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, mv = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(i, A) {
    switch (A) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
}, Qv = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(i, A) {
    return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
  }
}, ws;
(function(i) {
  i.NORMAL = "normal", i.STRICT = "strict";
})(ws || (ws = {}));
var Uv = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(i, A) {
    switch (A) {
      case "strict":
        return ws.STRICT;
      case "normal":
      default:
        return ws.NORMAL;
    }
  }
}, vv = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, dh = function(i, A) {
  return yA(i) && i.value === "normal" ? 1.2 * A : i.type === 17 ? A * i.number : JA(i) ? SA(i, A) : A;
}, Fv = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(i, A) {
    return A.type === 20 && A.value === "none" ? null : il.parse(i, A);
  }
}, Iv = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(i, A) {
    switch (A) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, Xa = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(i, A) {
    switch (A) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
}, Ms = function(i) {
  return {
    name: "margin-" + i,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, Ev = Ms("top"), _v = Ms("right"), yv = Ms("bottom"), Hv = Ms("left"), bv = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(i, A) {
    return A.filter(yA).map(function(e) {
      switch (e.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
}, Sv = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(i, A) {
    switch (A) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, Rs = function(i) {
  return {
    name: "padding-" + i,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, xv = Rs("top"), Lv = Rs("right"), Tv = Rs("bottom"), Dv = Rs("left"), Kv = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(i, A) {
    switch (A) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
}, Mv = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(i, A) {
    switch (A) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
}, Rv = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(i, A) {
    return A.length === 1 && za(A[0], "none") ? [] : it(A).map(function(e) {
      for (var n = {
        color: Qt.TRANSPARENT,
        offsetX: re,
        offsetY: re,
        blur: re
      }, s = 0, o = 0; o < e.length; o++) {
        var l = e[o];
        kt(l) ? (s === 0 ? n.offsetX = l : s === 1 ? n.offsetY = l : n.blur = l, s++) : n.color = Gt.parse(i, l);
      }
      return n;
    });
  }
}, Ov = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(i, A) {
    switch (A) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, Pv = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(i, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var e = Vv[A.name];
      if (typeof e > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return e(A.values);
    }
    return null;
  }
}, Gv = function(i) {
  var A = i.filter(function(e) {
    return e.type === 17;
  }).map(function(e) {
    return e.number;
  });
  return A.length === 6 ? A : null;
}, Nv = function(i) {
  var A = i.filter(function(h) {
    return h.type === 17;
  }).map(function(h) {
    return h.number;
  }), e = A[0], n = A[1];
  A[2], A[3];
  var s = A[4], o = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var l = A[12], c = A[13];
  return A[14], A[15], A.length === 16 ? [e, n, s, o, l, c] : null;
}, Vv = {
  matrix: Gv,
  matrix3d: Nv
}, Bh = {
  type: 16,
  number: 50,
  flags: zr
}, kv = [Bh, Bh], Wv = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(i, A) {
    var e = A.filter(JA);
    return e.length !== 2 ? kv : [e[0], e[1]];
  }
}, zv = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(i, A) {
    switch (A) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
}, br;
(function(i) {
  i.NORMAL = "normal", i.BREAK_ALL = "break-all", i.KEEP_ALL = "keep-all";
})(br || (br = {}));
var Xv = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(i, A) {
    switch (A) {
      case "break-all":
        return br.BREAK_ALL;
      case "keep-all":
        return br.KEEP_ALL;
      case "normal":
      default:
        return br.NORMAL;
    }
  }
}, Jv = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(i, A) {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (Yn(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, If = {
  name: "time",
  parse: function(i, A) {
    if (A.type === 15)
      switch (A.unit.toLowerCase()) {
        case "s":
          return 1e3 * A.number;
        case "ms":
          return A.number;
      }
    throw new Error("Unsupported time type");
  }
}, Yv = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(i, A) {
    return Yn(A) ? A.number : 1;
  }
}, Zv = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, qv = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(i, A) {
    return A.filter(yA).map(function(e) {
      switch (e.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(e) {
      return e !== 0;
    });
  }
}, $v = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(i, A) {
    var e = [], n = [];
    return A.forEach(function(s) {
      switch (s.type) {
        case 20:
        case 0:
          e.push(s.value);
          break;
        case 17:
          e.push(s.number.toString());
          break;
        case 4:
          n.push(e.join(" ")), e.length = 0;
          break;
      }
    }), e.length && n.push(e.join(" ")), n.map(function(s) {
      return s.indexOf(" ") === -1 ? s : "'" + s + "'";
    });
  }
}, jv = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, AF = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(i, A) {
    if (Yn(A))
      return A.number;
    if (yA(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, eF = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(i, A) {
    return A.filter(yA).map(function(e) {
      return e.value;
    });
  }
}, tF = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(i, A) {
    switch (A) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, qA = function(i, A) {
  return (i & A) !== 0;
}, nF = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(i, A) {
    if (A.length === 0)
      return [];
    var e = A[0];
    return e.type === 20 && e.value === "none" ? [] : A;
  }
}, rF = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(i, A) {
    if (A.length === 0)
      return null;
    var e = A[0];
    if (e.type === 20 && e.value === "none")
      return null;
    for (var n = [], s = A.filter(af), o = 0; o < s.length; o++) {
      var l = s[o], c = s[o + 1];
      if (l.type === 20) {
        var h = c && Yn(c) ? c.number : 1;
        n.push({ counter: l.value, increment: h });
      }
    }
    return n;
  }
}, iF = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(i, A) {
    if (A.length === 0)
      return [];
    for (var e = [], n = A.filter(af), s = 0; s < n.length; s++) {
      var o = n[s], l = n[s + 1];
      if (yA(o) && o.value !== "none") {
        var c = l && Yn(l) ? l.number : 0;
        e.push({ counter: o.value, reset: c });
      }
    }
    return e;
  }
}, sF = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(i, A) {
    return A.filter(Xr).map(function(e) {
      return If.parse(i, e);
    });
  }
}, oF = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(i, A) {
    if (A.length === 0)
      return null;
    var e = A[0];
    if (e.type === 20 && e.value === "none")
      return null;
    var n = [], s = A.filter(LU);
    if (s.length % 2 !== 0)
      return null;
    for (var o = 0; o < s.length; o += 2) {
      var l = s[o].value, c = s[o + 1].value;
      n.push({ open: l, close: c });
    }
    return n;
  }
}, gh = function(i, A, e) {
  if (!i)
    return "";
  var n = i[Math.min(A, i.length - 1)];
  return n ? e ? n.open : n.close : "";
}, aF = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(i, A) {
    return A.length === 1 && za(A[0], "none") ? [] : it(A).map(function(e) {
      for (var n = {
        color: 255,
        offsetX: re,
        offsetY: re,
        blur: re,
        spread: re,
        inset: !1
      }, s = 0, o = 0; o < e.length; o++) {
        var l = e[o];
        za(l, "inset") ? n.inset = !0 : kt(l) ? (s === 0 ? n.offsetX = l : s === 1 ? n.offsetY = l : s === 2 ? n.blur = l : n.spread = l, s++) : n.color = Gt.parse(i, l);
      }
      return n;
    });
  }
}, lF = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(i, A) {
    var e = [
      0,
      1,
      2
      /* MARKERS */
    ], n = [];
    return A.filter(yA).forEach(function(s) {
      switch (s.value) {
        case "stroke":
          n.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          n.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          n.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), e.forEach(function(s) {
      n.indexOf(s) === -1 && n.push(s);
    }), n;
  }
}, uF = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, cF = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(i, A) {
    return Xr(A) ? A.number : 0;
  }
}, hF = (
  /** @class */
  function() {
    function i(A, e) {
      var n, s;
      this.animationDuration = V(A, sF, e.animationDuration), this.backgroundClip = V(A, KU, e.backgroundClip), this.backgroundColor = V(A, MU, e.backgroundColor), this.backgroundImage = V(A, XU, e.backgroundImage), this.backgroundOrigin = V(A, JU, e.backgroundOrigin), this.backgroundPosition = V(A, YU, e.backgroundPosition), this.backgroundRepeat = V(A, ZU, e.backgroundRepeat), this.backgroundSize = V(A, $U, e.backgroundSize), this.borderTopColor = V(A, Av, e.borderTopColor), this.borderRightColor = V(A, ev, e.borderRightColor), this.borderBottomColor = V(A, tv, e.borderBottomColor), this.borderLeftColor = V(A, nv, e.borderLeftColor), this.borderTopLeftRadius = V(A, rv, e.borderTopLeftRadius), this.borderTopRightRadius = V(A, iv, e.borderTopRightRadius), this.borderBottomRightRadius = V(A, sv, e.borderBottomRightRadius), this.borderBottomLeftRadius = V(A, ov, e.borderBottomLeftRadius), this.borderTopStyle = V(A, av, e.borderTopStyle), this.borderRightStyle = V(A, lv, e.borderRightStyle), this.borderBottomStyle = V(A, uv, e.borderBottomStyle), this.borderLeftStyle = V(A, cv, e.borderLeftStyle), this.borderTopWidth = V(A, hv, e.borderTopWidth), this.borderRightWidth = V(A, fv, e.borderRightWidth), this.borderBottomWidth = V(A, dv, e.borderBottomWidth), this.borderLeftWidth = V(A, Bv, e.borderLeftWidth), this.boxShadow = V(A, aF, e.boxShadow), this.color = V(A, gv, e.color), this.direction = V(A, wv, e.direction), this.display = V(A, pv, e.display), this.float = V(A, mv, e.cssFloat), this.fontFamily = V(A, $v, e.fontFamily), this.fontSize = V(A, jv, e.fontSize), this.fontStyle = V(A, tF, e.fontStyle), this.fontVariant = V(A, eF, e.fontVariant), this.fontWeight = V(A, AF, e.fontWeight), this.letterSpacing = V(A, Qv, e.letterSpacing), this.lineBreak = V(A, Uv, e.lineBreak), this.lineHeight = V(A, vv, e.lineHeight), this.listStyleImage = V(A, Fv, e.listStyleImage), this.listStylePosition = V(A, Iv, e.listStylePosition), this.listStyleType = V(A, Xa, e.listStyleType), this.marginTop = V(A, Ev, e.marginTop), this.marginRight = V(A, _v, e.marginRight), this.marginBottom = V(A, yv, e.marginBottom), this.marginLeft = V(A, Hv, e.marginLeft), this.opacity = V(A, Yv, e.opacity);
      var o = V(A, bv, e.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = V(A, Sv, e.overflowWrap), this.paddingTop = V(A, xv, e.paddingTop), this.paddingRight = V(A, Lv, e.paddingRight), this.paddingBottom = V(A, Tv, e.paddingBottom), this.paddingLeft = V(A, Dv, e.paddingLeft), this.paintOrder = V(A, lF, e.paintOrder), this.position = V(A, Mv, e.position), this.textAlign = V(A, Kv, e.textAlign), this.textDecorationColor = V(A, Zv, (n = e.textDecorationColor) !== null && n !== void 0 ? n : e.color), this.textDecorationLine = V(A, qv, (s = e.textDecorationLine) !== null && s !== void 0 ? s : e.textDecoration), this.textShadow = V(A, Rv, e.textShadow), this.textTransform = V(A, Ov, e.textTransform), this.transform = V(A, Pv, e.transform), this.transformOrigin = V(A, Wv, e.transformOrigin), this.visibility = V(A, zv, e.visibility), this.webkitTextStrokeColor = V(A, uF, e.webkitTextStrokeColor), this.webkitTextStrokeWidth = V(A, cF, e.webkitTextStrokeWidth), this.wordBreak = V(A, Xv, e.wordBreak), this.zIndex = V(A, Jv, e.zIndex);
    }
    return i.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, i.prototype.isTransparent = function() {
      return Nt(this.backgroundColor);
    }, i.prototype.isTransformed = function() {
      return this.transform !== null;
    }, i.prototype.isPositioned = function() {
      return this.position !== 0;
    }, i.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, i.prototype.isFloating = function() {
      return this.float !== 0;
    }, i.prototype.isInlineLevel = function() {
      return qA(
        this.display,
        4
        /* INLINE */
      ) || qA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || qA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || qA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || qA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || qA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, i;
  }()
), fF = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(A, e) {
      this.content = V(A, nF, e.content), this.quotes = V(A, oF, e.quotes);
    }
    return i;
  }()
), wh = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(A, e) {
      this.counterIncrement = V(A, rF, e.counterIncrement), this.counterReset = V(A, iF, e.counterReset);
    }
    return i;
  }()
), V = function(i, A, e) {
  var n = new sf(), s = e !== null && typeof e < "u" ? e.toString() : A.initialValue;
  n.write(s);
  var o = new of(n.read());
  switch (A.type) {
    case 2:
      var l = o.parseComponentValue();
      return A.parse(i, yA(l) ? l.value : A.initialValue);
    case 0:
      return A.parse(i, o.parseComponentValue());
    case 1:
      return A.parse(i, o.parseComponentValues());
    case 4:
      return o.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return Ss.parse(i, o.parseComponentValue());
        case "color":
          return Gt.parse(i, o.parseComponentValue());
        case "image":
          return il.parse(i, o.parseComponentValue());
        case "length":
          var c = o.parseComponentValue();
          return kt(c) ? c : re;
        case "length-percentage":
          var h = o.parseComponentValue();
          return JA(h) ? h : re;
        case "time":
          return If.parse(i, o.parseComponentValue());
      }
      break;
  }
}, dF = "data-html2canvas-debug", BF = function(i) {
  var A = i.getAttribute(dF);
  switch (A) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, Ja = function(i, A) {
  var e = BF(i);
  return e === 1 || A === e;
}, st = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(A, e) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, Ja(
        e,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new hF(A, window.getComputedStyle(e, null)), qa(e) && (this.styles.animationDuration.some(function(n) {
        return n > 0;
      }) && (e.style.animationDuration = "0s"), this.styles.transform !== null && (e.style.transform = "none")), this.bounds = Hs(this.context, e), Ja(
        e,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return i;
  }()
), gF = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", ph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Er = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var rs = 0; rs < ph.length; rs++)
  Er[ph.charCodeAt(rs)] = rs;
var wF = function(i) {
  var A = i.length * 0.75, e = i.length, n, s = 0, o, l, c, h;
  i[i.length - 1] === "=" && (A--, i[i.length - 2] === "=" && A--);
  var d = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), w = Array.isArray(d) ? d : new Uint8Array(d);
  for (n = 0; n < e; n += 4)
    o = Er[i.charCodeAt(n)], l = Er[i.charCodeAt(n + 1)], c = Er[i.charCodeAt(n + 2)], h = Er[i.charCodeAt(n + 3)], w[s++] = o << 2 | l >> 4, w[s++] = (l & 15) << 4 | c >> 2, w[s++] = (c & 3) << 6 | h & 63;
  return d;
}, pF = function(i) {
  for (var A = i.length, e = [], n = 0; n < A; n += 2)
    e.push(i[n + 1] << 8 | i[n]);
  return e;
}, CF = function(i) {
  for (var A = i.length, e = [], n = 0; n < A; n += 4)
    e.push(i[n + 3] << 24 | i[n + 2] << 16 | i[n + 1] << 8 | i[n]);
  return e;
}, hn = 5, sl = 11, ma = 2, mF = sl - hn, Ef = 65536 >> hn, QF = 1 << hn, Qa = QF - 1, UF = 1024 >> hn, vF = Ef + UF, FF = vF, IF = 32, EF = FF + IF, _F = 65536 >> sl, yF = 1 << mF, HF = yF - 1, Ch = function(i, A, e) {
  return i.slice ? i.slice(A, e) : new Uint16Array(Array.prototype.slice.call(i, A, e));
}, bF = function(i, A, e) {
  return i.slice ? i.slice(A, e) : new Uint32Array(Array.prototype.slice.call(i, A, e));
}, SF = function(i, A) {
  var e = wF(i), n = Array.isArray(e) ? CF(e) : new Uint32Array(e), s = Array.isArray(e) ? pF(e) : new Uint16Array(e), o = 24, l = Ch(s, o / 2, n[4] / 2), c = n[5] === 2 ? Ch(s, (o + n[4]) / 2) : bF(n, Math.ceil((o + n[4]) / 4));
  return new xF(n[0], n[1], n[2], n[3], l, c);
}, xF = (
  /** @class */
  function() {
    function i(A, e, n, s, o, l) {
      this.initialValue = A, this.errorValue = e, this.highStart = n, this.highValueIndex = s, this.index = o, this.data = l;
    }
    return i.prototype.get = function(A) {
      var e;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return e = this.index[A >> hn], e = (e << ma) + (A & Qa), this.data[e];
        if (A <= 65535)
          return e = this.index[Ef + (A - 55296 >> hn)], e = (e << ma) + (A & Qa), this.data[e];
        if (A < this.highStart)
          return e = EF - _F + (A >> sl), e = this.index[e], e += A >> hn & HF, e = this.index[e], e = (e << ma) + (A & Qa), this.data[e];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, i;
  }()
), mh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", LF = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var is = 0; is < mh.length; is++)
  LF[mh.charCodeAt(is)] = is;
var TF = 1, Ua = 2, va = 3, Qh = 4, Uh = 5, DF = 7, vh = 8, Fa = 9, Ia = 10, Fh = 11, Ih = 12, Eh = 13, _h = 14, Ea = 15, KF = function(i) {
  for (var A = [], e = 0, n = i.length; e < n; ) {
    var s = i.charCodeAt(e++);
    if (s >= 55296 && s <= 56319 && e < n) {
      var o = i.charCodeAt(e++);
      (o & 64512) === 56320 ? A.push(((s & 1023) << 10) + (o & 1023) + 65536) : (A.push(s), e--);
    } else
      A.push(s);
  }
  return A;
}, MF = function() {
  for (var i = [], A = 0; A < arguments.length; A++)
    i[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, i);
  var e = i.length;
  if (!e)
    return "";
  for (var n = [], s = -1, o = ""; ++s < e; ) {
    var l = i[s];
    l <= 65535 ? n.push(l) : (l -= 65536, n.push((l >> 10) + 55296, l % 1024 + 56320)), (s + 1 === e || n.length > 16384) && (o += String.fromCharCode.apply(String, n), n.length = 0);
  }
  return o;
}, RF = SF(gF), Ge = "×", _a = "÷", OF = function(i) {
  return RF.get(i);
}, PF = function(i, A, e) {
  var n = e - 2, s = A[n], o = A[e - 1], l = A[e];
  if (o === Ua && l === va)
    return Ge;
  if (o === Ua || o === va || o === Qh || l === Ua || l === va || l === Qh)
    return _a;
  if (o === vh && [vh, Fa, Fh, Ih].indexOf(l) !== -1 || (o === Fh || o === Fa) && (l === Fa || l === Ia) || (o === Ih || o === Ia) && l === Ia || l === Eh || l === Uh || l === DF || o === TF)
    return Ge;
  if (o === Eh && l === _h) {
    for (; s === Uh; )
      s = A[--n];
    if (s === _h)
      return Ge;
  }
  if (o === Ea && l === Ea) {
    for (var c = 0; s === Ea; )
      c++, s = A[--n];
    if (c % 2 === 0)
      return Ge;
  }
  return _a;
}, GF = function(i) {
  var A = KF(i), e = A.length, n = 0, s = 0, o = A.map(OF);
  return {
    next: function() {
      if (n >= e)
        return { done: !0, value: null };
      for (var l = Ge; n < e && (l = PF(A, o, ++n)) === Ge; )
        ;
      if (l !== Ge || n === e) {
        var c = MF.apply(null, A.slice(s, n));
        return s = n, { value: c, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, NF = function(i) {
  for (var A = GF(i), e = [], n; !(n = A.next()).done; )
    n.value && e.push(n.value.slice());
  return e;
}, VF = function(i) {
  var A = 123;
  if (i.createRange) {
    var e = i.createRange();
    if (e.getBoundingClientRect) {
      var n = i.createElement("boundtest");
      n.style.height = A + "px", n.style.display = "block", i.body.appendChild(n), e.selectNode(n);
      var s = e.getBoundingClientRect(), o = Math.round(s.height);
      if (i.body.removeChild(n), o === A)
        return !0;
    }
  }
  return !1;
}, kF = function(i) {
  var A = i.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", i.body.appendChild(A);
  var e = i.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var n = A.firstChild, s = bs(n.data).map(function(h) {
    return WA(h);
  }), o = 0, l = {}, c = s.every(function(h, d) {
    e.setStart(n, o), e.setEnd(n, o + h.length);
    var w = e.getBoundingClientRect();
    o += h.length;
    var p = w.x > l.x || w.y > l.y;
    return l = w, d === 0 ? !0 : p;
  });
  return i.body.removeChild(A), c;
}, WF = function() {
  return typeof new Image().crossOrigin < "u";
}, zF = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, XF = function(i) {
  var A = new Image(), e = i.createElement("canvas"), n = e.getContext("2d");
  if (!n)
    return !1;
  A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    n.drawImage(A, 0, 0), e.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, yh = function(i) {
  return i[0] === 0 && i[1] === 255 && i[2] === 0 && i[3] === 255;
}, JF = function(i) {
  var A = i.createElement("canvas"), e = 100;
  A.width = e, A.height = e;
  var n = A.getContext("2d");
  if (!n)
    return Promise.reject(!1);
  n.fillStyle = "rgb(0, 255, 0)", n.fillRect(0, 0, e, e);
  var s = new Image(), o = A.toDataURL();
  s.src = o;
  var l = Ya(e, e, 0, 0, s);
  return n.fillStyle = "red", n.fillRect(0, 0, e, e), Hh(l).then(function(c) {
    n.drawImage(c, 0, 0);
    var h = n.getImageData(0, 0, e, e).data;
    n.fillStyle = "red", n.fillRect(0, 0, e, e);
    var d = i.createElement("div");
    return d.style.backgroundImage = "url(" + o + ")", d.style.height = e + "px", yh(h) ? Hh(Ya(e, e, 0, 0, d)) : Promise.reject(!1);
  }).then(function(c) {
    return n.drawImage(c, 0, 0), yh(n.getImageData(0, 0, e, e).data);
  }).catch(function() {
    return !1;
  });
}, Ya = function(i, A, e, n, s) {
  var o = "http://www.w3.org/2000/svg", l = document.createElementNS(o, "svg"), c = document.createElementNS(o, "foreignObject");
  return l.setAttributeNS(null, "width", i.toString()), l.setAttributeNS(null, "height", A.toString()), c.setAttributeNS(null, "width", "100%"), c.setAttributeNS(null, "height", "100%"), c.setAttributeNS(null, "x", e.toString()), c.setAttributeNS(null, "y", n.toString()), c.setAttributeNS(null, "externalResourcesRequired", "true"), l.appendChild(c), c.appendChild(s), l;
}, Hh = function(i) {
  return new Promise(function(A, e) {
    var n = new Image();
    n.onload = function() {
      return A(n);
    }, n.onerror = e, n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(i));
  });
}, ne = {
  get SUPPORT_RANGE_BOUNDS() {
    var i = VF(document);
    return Object.defineProperty(ne, "SUPPORT_RANGE_BOUNDS", { value: i }), i;
  },
  get SUPPORT_WORD_BREAKING() {
    var i = ne.SUPPORT_RANGE_BOUNDS && kF(document);
    return Object.defineProperty(ne, "SUPPORT_WORD_BREAKING", { value: i }), i;
  },
  get SUPPORT_SVG_DRAWING() {
    var i = XF(document);
    return Object.defineProperty(ne, "SUPPORT_SVG_DRAWING", { value: i }), i;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var i = typeof Array.from == "function" && typeof window.fetch == "function" ? JF(document) : Promise.resolve(!1);
    return Object.defineProperty(ne, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: i }), i;
  },
  get SUPPORT_CORS_IMAGES() {
    var i = WF();
    return Object.defineProperty(ne, "SUPPORT_CORS_IMAGES", { value: i }), i;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var i = zF();
    return Object.defineProperty(ne, "SUPPORT_RESPONSE_TYPE", { value: i }), i;
  },
  get SUPPORT_CORS_XHR() {
    var i = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(ne, "SUPPORT_CORS_XHR", { value: i }), i;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var i = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(ne, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: i }), i;
  }
}, Sr = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(A, e) {
      this.text = A, this.bounds = e;
    }
    return i;
  }()
), YF = function(i, A, e, n) {
  var s = $F(A, e), o = [], l = 0;
  return s.forEach(function(c) {
    if (e.textDecorationLine.length || c.trim().length > 0)
      if (ne.SUPPORT_RANGE_BOUNDS) {
        var h = bh(n, l, c.length).getClientRects();
        if (h.length > 1) {
          var d = ol(c), w = 0;
          d.forEach(function(m) {
            o.push(new Sr(m, Ut.fromDOMRectList(i, bh(n, w + l, m.length).getClientRects()))), w += m.length;
          });
        } else
          o.push(new Sr(c, Ut.fromDOMRectList(i, h)));
      } else {
        var p = n.splitText(c.length);
        o.push(new Sr(c, ZF(i, n))), n = p;
      }
    else ne.SUPPORT_RANGE_BOUNDS || (n = n.splitText(c.length));
    l += c.length;
  }), o;
}, ZF = function(i, A) {
  var e = A.ownerDocument;
  if (e) {
    var n = e.createElement("html2canvaswrapper");
    n.appendChild(A.cloneNode(!0));
    var s = A.parentNode;
    if (s) {
      s.replaceChild(n, A);
      var o = Hs(i, n);
      return n.firstChild && s.replaceChild(n.firstChild, n), o;
    }
  }
  return Ut.EMPTY;
}, bh = function(i, A, e) {
  var n = i.ownerDocument;
  if (!n)
    throw new Error("Node has no owner document");
  var s = n.createRange();
  return s.setStart(i, A), s.setEnd(i, A + e), s;
}, ol = function(i) {
  if (ne.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(i)).map(function(e) {
      return e.segment;
    });
  }
  return NF(i);
}, qF = function(i, A) {
  if (ne.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var e = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(e.segment(i)).map(function(n) {
      return n.segment;
    });
  }
  return AI(i, A);
}, $F = function(i, A) {
  return A.letterSpacing !== 0 ? ol(i) : qF(i, A);
}, jF = [32, 160, 4961, 65792, 65793, 4153, 4241], AI = function(i, A) {
  for (var e = _0(i, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), n = [], s, o = function() {
    if (s.value) {
      var l = s.value.slice(), c = bs(l), h = "";
      c.forEach(function(d) {
        jF.indexOf(d) === -1 ? h += WA(d) : (h.length && n.push(h), n.push(WA(d)), h = "");
      }), h.length && n.push(h);
    }
  }; !(s = e.next()).done; )
    o();
  return n;
}, eI = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(A, e, n) {
      this.text = tI(e.data, n.textTransform), this.textBounds = YF(A, this.text, n, e);
    }
    return i;
  }()
), tI = function(i, A) {
  switch (A) {
    case 1:
      return i.toLowerCase();
    case 3:
      return i.replace(nI, rI);
    case 2:
      return i.toUpperCase();
    default:
      return i;
  }
}, nI = /(^|\s|:|-|\(|\))([a-z])/g, rI = function(i, A, e) {
  return i.length > 0 ? A + e.toUpperCase() : i;
}, _f = (
  /** @class */
  function(i) {
    At(A, i);
    function A(e, n) {
      var s = i.call(this, e, n) || this;
      return s.src = n.currentSrc || n.src, s.intrinsicWidth = n.naturalWidth, s.intrinsicHeight = n.naturalHeight, s.context.cache.addImage(s.src), s;
    }
    return A;
  }(st)
), yf = (
  /** @class */
  function(i) {
    At(A, i);
    function A(e, n) {
      var s = i.call(this, e, n) || this;
      return s.canvas = n, s.intrinsicWidth = n.width, s.intrinsicHeight = n.height, s;
    }
    return A;
  }(st)
), Hf = (
  /** @class */
  function(i) {
    At(A, i);
    function A(e, n) {
      var s = i.call(this, e, n) || this, o = new XMLSerializer(), l = Hs(e, n);
      return n.setAttribute("width", l.width + "px"), n.setAttribute("height", l.height + "px"), s.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(n)), s.intrinsicWidth = n.width.baseVal.value, s.intrinsicHeight = n.height.baseVal.value, s.context.cache.addImage(s.svg), s;
    }
    return A;
  }(st)
), bf = (
  /** @class */
  function(i) {
    At(A, i);
    function A(e, n) {
      var s = i.call(this, e, n) || this;
      return s.value = n.value, s;
    }
    return A;
  }(st)
), Za = (
  /** @class */
  function(i) {
    At(A, i);
    function A(e, n) {
      var s = i.call(this, e, n) || this;
      return s.start = n.start, s.reversed = typeof n.reversed == "boolean" && n.reversed === !0, s;
    }
    return A;
  }(st)
), iI = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], sI = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], oI = function(i) {
  return i.width > i.height ? new Ut(i.left + (i.width - i.height) / 2, i.top, i.height, i.height) : i.width < i.height ? new Ut(i.left, i.top + (i.height - i.width) / 2, i.width, i.width) : i;
}, aI = function(i) {
  var A = i.type === lI ? new Array(i.value.length + 1).join("•") : i.value;
  return A.length === 0 ? i.placeholder || "" : A;
}, ps = "checkbox", Cs = "radio", lI = "password", Sh = 707406591, al = (
  /** @class */
  function(i) {
    At(A, i);
    function A(e, n) {
      var s = i.call(this, e, n) || this;
      switch (s.type = n.type.toLowerCase(), s.checked = n.checked, s.value = aI(n), (s.type === ps || s.type === Cs) && (s.styles.backgroundColor = 3739148031, s.styles.borderTopColor = s.styles.borderRightColor = s.styles.borderBottomColor = s.styles.borderLeftColor = 2779096575, s.styles.borderTopWidth = s.styles.borderRightWidth = s.styles.borderBottomWidth = s.styles.borderLeftWidth = 1, s.styles.borderTopStyle = s.styles.borderRightStyle = s.styles.borderBottomStyle = s.styles.borderLeftStyle = 1, s.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], s.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], s.bounds = oI(s.bounds)), s.type) {
        case ps:
          s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = iI;
          break;
        case Cs:
          s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = sI;
          break;
      }
      return s;
    }
    return A;
  }(st)
), Sf = (
  /** @class */
  function(i) {
    At(A, i);
    function A(e, n) {
      var s = i.call(this, e, n) || this, o = n.options[n.selectedIndex || 0];
      return s.value = o && o.text || "", s;
    }
    return A;
  }(st)
), xf = (
  /** @class */
  function(i) {
    At(A, i);
    function A(e, n) {
      var s = i.call(this, e, n) || this;
      return s.value = n.value, s;
    }
    return A;
  }(st)
), Lf = (
  /** @class */
  function(i) {
    At(A, i);
    function A(e, n) {
      var s = i.call(this, e, n) || this;
      s.src = n.src, s.width = parseInt(n.width, 10) || 0, s.height = parseInt(n.height, 10) || 0, s.backgroundColor = s.styles.backgroundColor;
      try {
        if (n.contentWindow && n.contentWindow.document && n.contentWindow.document.documentElement) {
          s.tree = Df(e, n.contentWindow.document.documentElement);
          var o = n.contentWindow.document.documentElement ? Hr(e, getComputedStyle(n.contentWindow.document.documentElement).backgroundColor) : Qt.TRANSPARENT, l = n.contentWindow.document.body ? Hr(e, getComputedStyle(n.contentWindow.document.body).backgroundColor) : Qt.TRANSPARENT;
          s.backgroundColor = Nt(o) ? Nt(l) ? s.styles.backgroundColor : l : o;
        }
      } catch {
      }
      return s;
    }
    return A;
  }(st)
), uI = ["OL", "UL", "MENU"], fs = function(i, A, e, n) {
  for (var s = A.firstChild, o = void 0; s; s = o)
    if (o = s.nextSibling, Kf(s) && s.data.trim().length > 0)
      e.textNodes.push(new eI(i, s, e.styles));
    else if (Gn(s))
      if (Pf(s) && s.assignedNodes)
        s.assignedNodes().forEach(function(c) {
          return fs(i, c, e, n);
        });
      else {
        var l = Tf(i, s);
        l.styles.isVisible() && (cI(s, l, n) ? l.flags |= 4 : hI(l.styles) && (l.flags |= 2), uI.indexOf(s.tagName) !== -1 && (l.flags |= 8), e.elements.push(l), s.slot, s.shadowRoot ? fs(i, s.shadowRoot, l, n) : !ms(s) && !Mf(s) && !Qs(s) && fs(i, s, l, n));
      }
}, Tf = function(i, A) {
  return $a(A) ? new _f(i, A) : Rf(A) ? new yf(i, A) : Mf(A) ? new Hf(i, A) : fI(A) ? new bf(i, A) : dI(A) ? new Za(i, A) : BI(A) ? new al(i, A) : Qs(A) ? new Sf(i, A) : ms(A) ? new xf(i, A) : Of(A) ? new Lf(i, A) : new st(i, A);
}, Df = function(i, A) {
  var e = Tf(i, A);
  return e.flags |= 4, fs(i, A, e, e), e;
}, cI = function(i, A, e) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || ll(i) && e.styles.isTransparent();
}, hI = function(i) {
  return i.isPositioned() || i.isFloating();
}, Kf = function(i) {
  return i.nodeType === Node.TEXT_NODE;
}, Gn = function(i) {
  return i.nodeType === Node.ELEMENT_NODE;
}, qa = function(i) {
  return Gn(i) && typeof i.style < "u" && !ds(i);
}, ds = function(i) {
  return typeof i.className == "object";
}, fI = function(i) {
  return i.tagName === "LI";
}, dI = function(i) {
  return i.tagName === "OL";
}, BI = function(i) {
  return i.tagName === "INPUT";
}, gI = function(i) {
  return i.tagName === "HTML";
}, Mf = function(i) {
  return i.tagName === "svg";
}, ll = function(i) {
  return i.tagName === "BODY";
}, Rf = function(i) {
  return i.tagName === "CANVAS";
}, xh = function(i) {
  return i.tagName === "VIDEO";
}, $a = function(i) {
  return i.tagName === "IMG";
}, Of = function(i) {
  return i.tagName === "IFRAME";
}, Lh = function(i) {
  return i.tagName === "STYLE";
}, wI = function(i) {
  return i.tagName === "SCRIPT";
}, ms = function(i) {
  return i.tagName === "TEXTAREA";
}, Qs = function(i) {
  return i.tagName === "SELECT";
}, Pf = function(i) {
  return i.tagName === "SLOT";
}, Th = function(i) {
  return i.tagName.indexOf("-") > 0;
}, pI = (
  /** @class */
  function() {
    function i() {
      this.counters = {};
    }
    return i.prototype.getCounterValue = function(A) {
      var e = this.counters[A];
      return e && e.length ? e[e.length - 1] : 1;
    }, i.prototype.getCounterValues = function(A) {
      var e = this.counters[A];
      return e || [];
    }, i.prototype.pop = function(A) {
      var e = this;
      A.forEach(function(n) {
        return e.counters[n].pop();
      });
    }, i.prototype.parse = function(A) {
      var e = this, n = A.counterIncrement, s = A.counterReset, o = !0;
      n !== null && n.forEach(function(c) {
        var h = e.counters[c.counter];
        h && c.increment !== 0 && (o = !1, h.length || h.push(1), h[Math.max(0, h.length - 1)] += c.increment);
      });
      var l = [];
      return o && s.forEach(function(c) {
        var h = e.counters[c.counter];
        l.push(c.counter), h || (h = e.counters[c.counter] = []), h.push(c.reset);
      }), l;
    }, i;
  }()
), Dh = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Kh = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
}, CI = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
}, mI = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
}, Kn = function(i, A, e, n, s, o) {
  return i < A || i > e ? Rr(i, s, o.length > 0) : n.integers.reduce(function(l, c, h) {
    for (; i >= c; )
      i -= c, l += n.values[h];
    return l;
  }, "") + o;
}, Gf = function(i, A, e, n) {
  var s = "";
  do
    e || i--, s = n(i) + s, i /= A;
  while (i * A >= A);
  return s;
}, kA = function(i, A, e, n, s) {
  var o = e - A + 1;
  return (i < 0 ? "-" : "") + (Gf(Math.abs(i), o, n, function(l) {
    return WA(Math.floor(l % o) + A);
  }) + s);
}, sn = function(i, A, e) {
  e === void 0 && (e = ". ");
  var n = A.length;
  return Gf(Math.abs(i), n, !1, function(s) {
    return A[Math.floor(s % n)];
  }) + e;
}, On = 1, Lt = 2, Tt = 4, _r = 8, Ct = function(i, A, e, n, s, o) {
  if (i < -9999 || i > 9999)
    return Rr(i, 4, s.length > 0);
  var l = Math.abs(i), c = s;
  if (l === 0)
    return A[0] + c;
  for (var h = 0; l > 0 && h <= 4; h++) {
    var d = l % 10;
    d === 0 && qA(o, On) && c !== "" ? c = A[d] + c : d > 1 || d === 1 && h === 0 || d === 1 && h === 1 && qA(o, Lt) || d === 1 && h === 1 && qA(o, Tt) && i > 100 || d === 1 && h > 1 && qA(o, _r) ? c = A[d] + (h > 0 ? e[h - 1] : "") + c : d === 1 && h > 0 && (c = e[h - 1] + c), l = Math.floor(l / 10);
  }
  return (i < 0 ? n : "") + c;
}, Mh = "十百千萬", Rh = "拾佰仟萬", Oh = "マイナス", ya = "마이너스", Rr = function(i, A, e) {
  var n = e ? ". " : "", s = e ? "、" : "", o = e ? ", " : "", l = e ? " " : "";
  switch (A) {
    case 0:
      return "•" + l;
    case 1:
      return "◦" + l;
    case 2:
      return "◾" + l;
    case 5:
      var c = kA(i, 48, 57, !0, n);
      return c.length < 4 ? "0" + c : c;
    case 4:
      return sn(i, "〇一二三四五六七八九", s);
    case 6:
      return Kn(i, 1, 3999, Dh, 3, n).toLowerCase();
    case 7:
      return Kn(i, 1, 3999, Dh, 3, n);
    case 8:
      return kA(i, 945, 969, !1, n);
    case 9:
      return kA(i, 97, 122, !1, n);
    case 10:
      return kA(i, 65, 90, !1, n);
    case 11:
      return kA(i, 1632, 1641, !0, n);
    case 12:
    case 49:
      return Kn(i, 1, 9999, Kh, 3, n);
    case 35:
      return Kn(i, 1, 9999, Kh, 3, n).toLowerCase();
    case 13:
      return kA(i, 2534, 2543, !0, n);
    case 14:
    case 30:
      return kA(i, 6112, 6121, !0, n);
    case 15:
      return sn(i, "子丑寅卯辰巳午未申酉戌亥", s);
    case 16:
      return sn(i, "甲乙丙丁戊己庚辛壬癸", s);
    case 17:
    case 48:
      return Ct(i, "零一二三四五六七八九", Mh, "負", s, Lt | Tt | _r);
    case 47:
      return Ct(i, "零壹貳參肆伍陸柒捌玖", Rh, "負", s, On | Lt | Tt | _r);
    case 42:
      return Ct(i, "零一二三四五六七八九", Mh, "负", s, Lt | Tt | _r);
    case 41:
      return Ct(i, "零壹贰叁肆伍陆柒捌玖", Rh, "负", s, On | Lt | Tt | _r);
    case 26:
      return Ct(i, "〇一二三四五六七八九", "十百千万", Oh, s, 0);
    case 25:
      return Ct(i, "零壱弐参四伍六七八九", "拾百千万", Oh, s, On | Lt | Tt);
    case 31:
      return Ct(i, "영일이삼사오육칠팔구", "십백천만", ya, o, On | Lt | Tt);
    case 33:
      return Ct(i, "零一二三四五六七八九", "十百千萬", ya, o, 0);
    case 32:
      return Ct(i, "零壹貳參四五六七八九", "拾百千", ya, o, On | Lt | Tt);
    case 18:
      return kA(i, 2406, 2415, !0, n);
    case 20:
      return Kn(i, 1, 19999, mI, 3, n);
    case 21:
      return kA(i, 2790, 2799, !0, n);
    case 22:
      return kA(i, 2662, 2671, !0, n);
    case 22:
      return Kn(i, 1, 10999, CI, 3, n);
    case 23:
      return sn(i, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return sn(i, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return kA(i, 3302, 3311, !0, n);
    case 28:
      return sn(i, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", s);
    case 29:
      return sn(i, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", s);
    case 34:
      return kA(i, 3792, 3801, !0, n);
    case 37:
      return kA(i, 6160, 6169, !0, n);
    case 38:
      return kA(i, 4160, 4169, !0, n);
    case 39:
      return kA(i, 2918, 2927, !0, n);
    case 40:
      return kA(i, 1776, 1785, !0, n);
    case 43:
      return kA(i, 3046, 3055, !0, n);
    case 44:
      return kA(i, 3174, 3183, !0, n);
    case 45:
      return kA(i, 3664, 3673, !0, n);
    case 46:
      return kA(i, 3872, 3881, !0, n);
    case 3:
    default:
      return kA(i, 48, 57, !0, n);
  }
}, Nf = "data-html2canvas-ignore", Ph = (
  /** @class */
  function() {
    function i(A, e, n) {
      if (this.context = A, this.options = n, this.scrolledElements = [], this.referenceElement = e, this.counters = new pI(), this.quoteDepth = 0, !e.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(e.ownerDocument.documentElement, !1);
    }
    return i.prototype.toIFrame = function(A, e) {
      var n = this, s = QI(A, e);
      if (!s.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var o = A.defaultView.pageXOffset, l = A.defaultView.pageYOffset, c = s.contentWindow, h = c.document, d = FI(s).then(function() {
        return Be(n, void 0, void 0, function() {
          var w, p;
          return le(this, function(m) {
            switch (m.label) {
              case 0:
                return this.scrolledElements.forEach(yI), c && (c.scrollTo(e.left, e.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (c.scrollY !== e.top || c.scrollX !== e.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(c.scrollX - e.left, c.scrollY - e.top, 0, 0))), w = this.options.onclone, p = this.clonedReferenceElement, typeof p > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : h.fonts && h.fonts.ready ? [4, h.fonts.ready] : [3, 2];
              case 1:
                m.sent(), m.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, vI(h)] : [3, 4];
              case 3:
                m.sent(), m.label = 4;
              case 4:
                return typeof w == "function" ? [2, Promise.resolve().then(function() {
                  return w(h, p);
                }).then(function() {
                  return s;
                })] : [2, s];
            }
          });
        });
      });
      return h.open(), h.write(EI(document.doctype) + "<html></html>"), _I(this.referenceElement.ownerDocument, o, l), h.replaceChild(h.adoptNode(this.documentElement), h.documentElement), h.close(), d;
    }, i.prototype.createElementClone = function(A) {
      if (Ja(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (Rf(A))
        return this.createCanvasClone(A);
      if (xh(A))
        return this.createVideoClone(A);
      if (Lh(A))
        return this.createStyleClone(A);
      var e = A.cloneNode(!1);
      return $a(e) && ($a(A) && A.currentSrc && A.currentSrc !== A.src && (e.src = A.currentSrc, e.srcset = ""), e.loading === "lazy" && (e.loading = "eager")), Th(e) ? this.createCustomElementClone(e) : e;
    }, i.prototype.createCustomElementClone = function(A) {
      var e = document.createElement("html2canvascustomelement");
      return Ha(A.style, e), e;
    }, i.prototype.createStyleClone = function(A) {
      try {
        var e = A.sheet;
        if (e && e.cssRules) {
          var n = [].slice.call(e.cssRules, 0).reduce(function(o, l) {
            return l && typeof l.cssText == "string" ? o + l.cssText : o;
          }, ""), s = A.cloneNode(!1);
          return s.textContent = n, s;
        }
      } catch (o) {
        if (this.context.logger.error("Unable to access cssRules property", o), o.name !== "SecurityError")
          throw o;
      }
      return A.cloneNode(!1);
    }, i.prototype.createCanvasClone = function(A) {
      var e;
      if (this.options.inlineImages && A.ownerDocument) {
        var n = A.ownerDocument.createElement("img");
        try {
          return n.src = A.toDataURL(), n;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
        }
      }
      var s = A.cloneNode(!1);
      try {
        s.width = A.width, s.height = A.height;
        var o = A.getContext("2d"), l = s.getContext("2d");
        if (l)
          if (!this.options.allowTaint && o)
            l.putImageData(o.getImageData(0, 0, A.width, A.height), 0, 0);
          else {
            var c = (e = A.getContext("webgl2")) !== null && e !== void 0 ? e : A.getContext("webgl");
            if (c) {
              var h = c.getContextAttributes();
              (h == null ? void 0 : h.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
            }
            l.drawImage(A, 0, 0);
          }
        return s;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", A);
      }
      return s;
    }, i.prototype.createVideoClone = function(A) {
      var e = A.ownerDocument.createElement("canvas");
      e.width = A.offsetWidth, e.height = A.offsetHeight;
      var n = e.getContext("2d");
      try {
        return n && (n.drawImage(A, 0, 0, e.width, e.height), this.options.allowTaint || n.getImageData(0, 0, e.width, e.height)), e;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", A);
      }
      var s = A.ownerDocument.createElement("canvas");
      return s.width = A.offsetWidth, s.height = A.offsetHeight, s;
    }, i.prototype.appendChildNode = function(A, e, n) {
      (!Gn(e) || !wI(e) && !e.hasAttribute(Nf) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(e))) && (!this.options.copyStyles || !Gn(e) || !Lh(e)) && A.appendChild(this.cloneNode(e, n));
    }, i.prototype.cloneChildNodes = function(A, e, n) {
      for (var s = this, o = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; o; o = o.nextSibling)
        if (Gn(o) && Pf(o) && typeof o.assignedNodes == "function") {
          var l = o.assignedNodes();
          l.length && l.forEach(function(c) {
            return s.appendChildNode(e, c, n);
          });
        } else
          this.appendChildNode(e, o, n);
    }, i.prototype.cloneNode = function(A, e) {
      if (Kf(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var n = A.ownerDocument.defaultView;
      if (n && Gn(A) && (qa(A) || ds(A))) {
        var s = this.createElementClone(A);
        s.style.transitionProperty = "none";
        var o = n.getComputedStyle(A), l = n.getComputedStyle(A, ":before"), c = n.getComputedStyle(A, ":after");
        this.referenceElement === A && qa(s) && (this.clonedReferenceElement = s), ll(s) && SI(s);
        var h = this.counters.parse(new wh(this.context, o)), d = this.resolvePseudoContent(A, s, l, xr.BEFORE);
        Th(A) && (e = !0), xh(A) || this.cloneChildNodes(A, s, e), d && s.insertBefore(d, s.firstChild);
        var w = this.resolvePseudoContent(A, s, c, xr.AFTER);
        return w && s.appendChild(w), this.counters.pop(h), (o && (this.options.copyStyles || ds(A)) && !Of(A) || e) && Ha(o, s), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([s, A.scrollLeft, A.scrollTop]), (ms(A) || Qs(A)) && (ms(s) || Qs(s)) && (s.value = A.value), s;
      }
      return A.cloneNode(!1);
    }, i.prototype.resolvePseudoContent = function(A, e, n, s) {
      var o = this;
      if (n) {
        var l = n.content, c = e.ownerDocument;
        if (!(!c || !l || l === "none" || l === "-moz-alt-content" || n.display === "none")) {
          this.counters.parse(new wh(this.context, n));
          var h = new fF(this.context, n), d = c.createElement("html2canvaspseudoelement");
          Ha(n, d), h.content.forEach(function(p) {
            if (p.type === 0)
              d.appendChild(c.createTextNode(p.value));
            else if (p.type === 22) {
              var m = c.createElement("img");
              m.src = p.value, m.style.opacity = "1", d.appendChild(m);
            } else if (p.type === 18) {
              if (p.name === "attr") {
                var U = p.values.filter(yA);
                U.length && d.appendChild(c.createTextNode(A.getAttribute(U[0].value) || ""));
              } else if (p.name === "counter") {
                var v = p.values.filter(kn), E = v[0], T = v[1];
                if (E && yA(E)) {
                  var S = o.counters.getCounterValue(E.value), x = T && yA(T) ? Xa.parse(o.context, T.value) : 3;
                  d.appendChild(c.createTextNode(Rr(S, x, !1)));
                }
              } else if (p.name === "counters") {
                var Y = p.values.filter(kn), E = Y[0], X = Y[1], T = Y[2];
                if (E && yA(E)) {
                  var K = o.counters.getCounterValues(E.value), D = T && yA(T) ? Xa.parse(o.context, T.value) : 3, z = X && X.type === 0 ? X.value : "", j = K.map(function(DA) {
                    return Rr(DA, D, !1);
                  }).join(z);
                  d.appendChild(c.createTextNode(j));
                }
              }
            } else if (p.type === 20)
              switch (p.value) {
                case "open-quote":
                  d.appendChild(c.createTextNode(gh(h.quotes, o.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  d.appendChild(c.createTextNode(gh(h.quotes, --o.quoteDepth, !1)));
                  break;
                default:
                  d.appendChild(c.createTextNode(p.value));
              }
          }), d.className = ja + " " + Al;
          var w = s === xr.BEFORE ? " " + ja : " " + Al;
          return ds(e) ? e.className.baseValue += w : e.className += w, d;
        }
      }
    }, i.destroy = function(A) {
      return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
    }, i;
  }()
), xr;
(function(i) {
  i[i.BEFORE = 0] = "BEFORE", i[i.AFTER = 1] = "AFTER";
})(xr || (xr = {}));
var QI = function(i, A) {
  var e = i.createElement("iframe");
  return e.className = "html2canvas-container", e.style.visibility = "hidden", e.style.position = "fixed", e.style.left = "-10000px", e.style.top = "0px", e.style.border = "0", e.width = A.width.toString(), e.height = A.height.toString(), e.scrolling = "no", e.setAttribute(Nf, "true"), i.body.appendChild(e), e;
}, UI = function(i) {
  return new Promise(function(A) {
    if (i.complete) {
      A();
      return;
    }
    if (!i.src) {
      A();
      return;
    }
    i.onload = A, i.onerror = A;
  });
}, vI = function(i) {
  return Promise.all([].slice.call(i.images, 0).map(UI));
}, FI = function(i) {
  return new Promise(function(A, e) {
    var n = i.contentWindow;
    if (!n)
      return e("No window assigned for iframe");
    var s = n.document;
    n.onload = i.onload = function() {
      n.onload = i.onload = null;
      var o = setInterval(function() {
        s.body.childNodes.length > 0 && s.readyState === "complete" && (clearInterval(o), A(i));
      }, 50);
    };
  });
}, II = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Ha = function(i, A) {
  for (var e = i.length - 1; e >= 0; e--) {
    var n = i.item(e);
    II.indexOf(n) === -1 && A.style.setProperty(n, i.getPropertyValue(n));
  }
  return A;
}, EI = function(i) {
  var A = "";
  return i && (A += "<!DOCTYPE ", i.name && (A += i.name), i.internalSubset && (A += i.internalSubset), i.publicId && (A += '"' + i.publicId + '"'), i.systemId && (A += '"' + i.systemId + '"'), A += ">"), A;
}, _I = function(i, A, e) {
  i && i.defaultView && (A !== i.defaultView.pageXOffset || e !== i.defaultView.pageYOffset) && i.defaultView.scrollTo(A, e);
}, yI = function(i) {
  var A = i[0], e = i[1], n = i[2];
  A.scrollLeft = e, A.scrollTop = n;
}, HI = ":before", bI = ":after", ja = "___html2canvas___pseudoelement_before", Al = "___html2canvas___pseudoelement_after", Gh = `{
    content: "" !important;
    display: none !important;
}`, SI = function(i) {
  xI(i, "." + ja + HI + Gh + `
         .` + Al + bI + Gh);
}, xI = function(i, A) {
  var e = i.ownerDocument;
  if (e) {
    var n = e.createElement("style");
    n.textContent = A, i.appendChild(n);
  }
}, Vf = (
  /** @class */
  function() {
    function i() {
    }
    return i.getOrigin = function(A) {
      var e = i._link;
      return e ? (e.href = A, e.href = e.href, e.protocol + e.hostname + e.port) : "about:blank";
    }, i.isSameOrigin = function(A) {
      return i.getOrigin(A) === i._origin;
    }, i.setContext = function(A) {
      i._link = A.document.createElement("a"), i._origin = i.getOrigin(A.location.href);
    }, i._origin = "about:blank", i;
  }()
), LI = (
  /** @class */
  function() {
    function i(A, e) {
      this.context = A, this._options = e, this._cache = {};
    }
    return i.prototype.addImage = function(A) {
      var e = Promise.resolve();
      return this.has(A) || (Sa(A) || MI(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), e;
    }, i.prototype.match = function(A) {
      return this._cache[A];
    }, i.prototype.loadImage = function(A) {
      return Be(this, void 0, void 0, function() {
        var e, n, s, o, l = this;
        return le(this, function(c) {
          switch (c.label) {
            case 0:
              return e = Vf.isSameOrigin(A), n = !ba(A) && this._options.useCORS === !0 && ne.SUPPORT_CORS_IMAGES && !e, s = !ba(A) && !e && !Sa(A) && typeof this._options.proxy == "string" && ne.SUPPORT_CORS_XHR && !n, !e && this._options.allowTaint === !1 && !ba(A) && !Sa(A) && !s && !n ? [
                2
                /*return*/
              ] : (o = A, s ? [4, this.proxy(o)] : [3, 2]);
            case 1:
              o = c.sent(), c.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(h, d) {
                var w = new Image();
                w.onload = function() {
                  return h(w);
                }, w.onerror = d, (RI(o) || n) && (w.crossOrigin = "anonymous"), w.src = o, w.complete === !0 && setTimeout(function() {
                  return h(w);
                }, 500), l._options.imageTimeout > 0 && setTimeout(function() {
                  return d("Timed out (" + l._options.imageTimeout + "ms) loading image");
                }, l._options.imageTimeout);
              })];
            case 3:
              return [2, c.sent()];
          }
        });
      });
    }, i.prototype.has = function(A) {
      return typeof this._cache[A] < "u";
    }, i.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, i.prototype.proxy = function(A) {
      var e = this, n = this._options.proxy;
      if (!n)
        throw new Error("No proxy defined");
      var s = A.substring(0, 256);
      return new Promise(function(o, l) {
        var c = ne.SUPPORT_RESPONSE_TYPE ? "blob" : "text", h = new XMLHttpRequest();
        h.onload = function() {
          if (h.status === 200)
            if (c === "text")
              o(h.response);
            else {
              var p = new FileReader();
              p.addEventListener("load", function() {
                return o(p.result);
              }, !1), p.addEventListener("error", function(m) {
                return l(m);
              }, !1), p.readAsDataURL(h.response);
            }
          else
            l("Failed to proxy resource " + s + " with status code " + h.status);
        }, h.onerror = l;
        var d = n.indexOf("?") > -1 ? "&" : "?";
        if (h.open("GET", "" + n + d + "url=" + encodeURIComponent(A) + "&responseType=" + c), c !== "text" && h instanceof XMLHttpRequest && (h.responseType = c), e._options.imageTimeout) {
          var w = e._options.imageTimeout;
          h.timeout = w, h.ontimeout = function() {
            return l("Timed out (" + w + "ms) proxying " + s);
          };
        }
        h.send();
      });
    }, i;
  }()
), TI = /^data:image\/svg\+xml/i, DI = /^data:image\/.*;base64,/i, KI = /^data:image\/.*/i, MI = function(i) {
  return ne.SUPPORT_SVG_DRAWING || !OI(i);
}, ba = function(i) {
  return KI.test(i);
}, RI = function(i) {
  return DI.test(i);
}, Sa = function(i) {
  return i.substr(0, 4) === "blob";
}, OI = function(i) {
  return i.substr(-3).toLowerCase() === "svg" || TI.test(i);
}, N = (
  /** @class */
  function() {
    function i(A, e) {
      this.type = 0, this.x = A, this.y = e;
    }
    return i.prototype.add = function(A, e) {
      return new i(this.x + A, this.y + e);
    }, i;
  }()
), Mn = function(i, A, e) {
  return new N(i.x + (A.x - i.x) * e, i.y + (A.y - i.y) * e);
}, ss = (
  /** @class */
  function() {
    function i(A, e, n, s) {
      this.type = 1, this.start = A, this.startControl = e, this.endControl = n, this.end = s;
    }
    return i.prototype.subdivide = function(A, e) {
      var n = Mn(this.start, this.startControl, A), s = Mn(this.startControl, this.endControl, A), o = Mn(this.endControl, this.end, A), l = Mn(n, s, A), c = Mn(s, o, A), h = Mn(l, c, A);
      return e ? new i(this.start, n, l, h) : new i(h, c, o, this.end);
    }, i.prototype.add = function(A, e) {
      return new i(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e));
    }, i.prototype.reverse = function() {
      return new i(this.end, this.endControl, this.startControl, this.start);
    }, i;
  }()
), Ne = function(i) {
  return i.type === 1;
}, PI = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(A) {
      var e = A.styles, n = A.bounds, s = Ir(e.borderTopLeftRadius, n.width, n.height), o = s[0], l = s[1], c = Ir(e.borderTopRightRadius, n.width, n.height), h = c[0], d = c[1], w = Ir(e.borderBottomRightRadius, n.width, n.height), p = w[0], m = w[1], U = Ir(e.borderBottomLeftRadius, n.width, n.height), v = U[0], E = U[1], T = [];
      T.push((o + h) / n.width), T.push((v + p) / n.width), T.push((l + E) / n.height), T.push((d + m) / n.height);
      var S = Math.max.apply(Math, T);
      S > 1 && (o /= S, l /= S, h /= S, d /= S, p /= S, m /= S, v /= S, E /= S);
      var x = n.width - h, Y = n.height - m, X = n.width - p, K = n.height - E, D = e.borderTopWidth, z = e.borderRightWidth, j = e.borderBottomWidth, G = e.borderLeftWidth, mA = SA(e.paddingTop, A.bounds.width), DA = SA(e.paddingRight, A.bounds.width), RA = SA(e.paddingBottom, A.bounds.width), lA = SA(e.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || l > 0 ? MA(n.left + G / 3, n.top + D / 3, o - G / 3, l - D / 3, IA.TOP_LEFT) : new N(n.left + G / 3, n.top + D / 3), this.topRightBorderDoubleOuterBox = o > 0 || l > 0 ? MA(n.left + x, n.top + D / 3, h - z / 3, d - D / 3, IA.TOP_RIGHT) : new N(n.left + n.width - z / 3, n.top + D / 3), this.bottomRightBorderDoubleOuterBox = p > 0 || m > 0 ? MA(n.left + X, n.top + Y, p - z / 3, m - j / 3, IA.BOTTOM_RIGHT) : new N(n.left + n.width - z / 3, n.top + n.height - j / 3), this.bottomLeftBorderDoubleOuterBox = v > 0 || E > 0 ? MA(n.left + G / 3, n.top + K, v - G / 3, E - j / 3, IA.BOTTOM_LEFT) : new N(n.left + G / 3, n.top + n.height - j / 3), this.topLeftBorderDoubleInnerBox = o > 0 || l > 0 ? MA(n.left + G * 2 / 3, n.top + D * 2 / 3, o - G * 2 / 3, l - D * 2 / 3, IA.TOP_LEFT) : new N(n.left + G * 2 / 3, n.top + D * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || l > 0 ? MA(n.left + x, n.top + D * 2 / 3, h - z * 2 / 3, d - D * 2 / 3, IA.TOP_RIGHT) : new N(n.left + n.width - z * 2 / 3, n.top + D * 2 / 3), this.bottomRightBorderDoubleInnerBox = p > 0 || m > 0 ? MA(n.left + X, n.top + Y, p - z * 2 / 3, m - j * 2 / 3, IA.BOTTOM_RIGHT) : new N(n.left + n.width - z * 2 / 3, n.top + n.height - j * 2 / 3), this.bottomLeftBorderDoubleInnerBox = v > 0 || E > 0 ? MA(n.left + G * 2 / 3, n.top + K, v - G * 2 / 3, E - j * 2 / 3, IA.BOTTOM_LEFT) : new N(n.left + G * 2 / 3, n.top + n.height - j * 2 / 3), this.topLeftBorderStroke = o > 0 || l > 0 ? MA(n.left + G / 2, n.top + D / 2, o - G / 2, l - D / 2, IA.TOP_LEFT) : new N(n.left + G / 2, n.top + D / 2), this.topRightBorderStroke = o > 0 || l > 0 ? MA(n.left + x, n.top + D / 2, h - z / 2, d - D / 2, IA.TOP_RIGHT) : new N(n.left + n.width - z / 2, n.top + D / 2), this.bottomRightBorderStroke = p > 0 || m > 0 ? MA(n.left + X, n.top + Y, p - z / 2, m - j / 2, IA.BOTTOM_RIGHT) : new N(n.left + n.width - z / 2, n.top + n.height - j / 2), this.bottomLeftBorderStroke = v > 0 || E > 0 ? MA(n.left + G / 2, n.top + K, v - G / 2, E - j / 2, IA.BOTTOM_LEFT) : new N(n.left + G / 2, n.top + n.height - j / 2), this.topLeftBorderBox = o > 0 || l > 0 ? MA(n.left, n.top, o, l, IA.TOP_LEFT) : new N(n.left, n.top), this.topRightBorderBox = h > 0 || d > 0 ? MA(n.left + x, n.top, h, d, IA.TOP_RIGHT) : new N(n.left + n.width, n.top), this.bottomRightBorderBox = p > 0 || m > 0 ? MA(n.left + X, n.top + Y, p, m, IA.BOTTOM_RIGHT) : new N(n.left + n.width, n.top + n.height), this.bottomLeftBorderBox = v > 0 || E > 0 ? MA(n.left, n.top + K, v, E, IA.BOTTOM_LEFT) : new N(n.left, n.top + n.height), this.topLeftPaddingBox = o > 0 || l > 0 ? MA(n.left + G, n.top + D, Math.max(0, o - G), Math.max(0, l - D), IA.TOP_LEFT) : new N(n.left + G, n.top + D), this.topRightPaddingBox = h > 0 || d > 0 ? MA(n.left + Math.min(x, n.width - z), n.top + D, x > n.width + z ? 0 : Math.max(0, h - z), Math.max(0, d - D), IA.TOP_RIGHT) : new N(n.left + n.width - z, n.top + D), this.bottomRightPaddingBox = p > 0 || m > 0 ? MA(n.left + Math.min(X, n.width - G), n.top + Math.min(Y, n.height - j), Math.max(0, p - z), Math.max(0, m - j), IA.BOTTOM_RIGHT) : new N(n.left + n.width - z, n.top + n.height - j), this.bottomLeftPaddingBox = v > 0 || E > 0 ? MA(n.left + G, n.top + Math.min(K, n.height - j), Math.max(0, v - G), Math.max(0, E - j), IA.BOTTOM_LEFT) : new N(n.left + G, n.top + n.height - j), this.topLeftContentBox = o > 0 || l > 0 ? MA(n.left + G + lA, n.top + D + mA, Math.max(0, o - (G + lA)), Math.max(0, l - (D + mA)), IA.TOP_LEFT) : new N(n.left + G + lA, n.top + D + mA), this.topRightContentBox = h > 0 || d > 0 ? MA(n.left + Math.min(x, n.width + G + lA), n.top + D + mA, x > n.width + G + lA ? 0 : h - G + lA, d - (D + mA), IA.TOP_RIGHT) : new N(n.left + n.width - (z + DA), n.top + D + mA), this.bottomRightContentBox = p > 0 || m > 0 ? MA(n.left + Math.min(X, n.width - (G + lA)), n.top + Math.min(Y, n.height + D + mA), Math.max(0, p - (z + DA)), m - (j + RA), IA.BOTTOM_RIGHT) : new N(n.left + n.width - (z + DA), n.top + n.height - (j + RA)), this.bottomLeftContentBox = v > 0 || E > 0 ? MA(n.left + G + lA, n.top + K, Math.max(0, v - (G + lA)), E - (j + RA), IA.BOTTOM_LEFT) : new N(n.left + G + lA, n.top + n.height - (j + RA));
    }
    return i;
  }()
), IA;
(function(i) {
  i[i.TOP_LEFT = 0] = "TOP_LEFT", i[i.TOP_RIGHT = 1] = "TOP_RIGHT", i[i.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", i[i.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(IA || (IA = {}));
var MA = function(i, A, e, n, s) {
  var o = 4 * ((Math.sqrt(2) - 1) / 3), l = e * o, c = n * o, h = i + e, d = A + n;
  switch (s) {
    case IA.TOP_LEFT:
      return new ss(new N(i, d), new N(i, d - c), new N(h - l, A), new N(h, A));
    case IA.TOP_RIGHT:
      return new ss(new N(i, A), new N(i + l, A), new N(h, d - c), new N(h, d));
    case IA.BOTTOM_RIGHT:
      return new ss(new N(h, A), new N(h, A + c), new N(i + l, d), new N(i, d));
    case IA.BOTTOM_LEFT:
    default:
      return new ss(new N(h, d), new N(h - l, d), new N(i, A + c), new N(i, A));
  }
}, Us = function(i) {
  return [i.topLeftBorderBox, i.topRightBorderBox, i.bottomRightBorderBox, i.bottomLeftBorderBox];
}, GI = function(i) {
  return [
    i.topLeftContentBox,
    i.topRightContentBox,
    i.bottomRightContentBox,
    i.bottomLeftContentBox
  ];
}, vs = function(i) {
  return [
    i.topLeftPaddingBox,
    i.topRightPaddingBox,
    i.bottomRightPaddingBox,
    i.bottomLeftPaddingBox
  ];
}, NI = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(A, e, n) {
      this.offsetX = A, this.offsetY = e, this.matrix = n, this.type = 0, this.target = 6;
    }
    return i;
  }()
), os = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(A, e) {
      this.path = A, this.target = e, this.type = 1;
    }
    return i;
  }()
), VI = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return i;
  }()
), kI = function(i) {
  return i.type === 0;
}, kf = function(i) {
  return i.type === 1;
}, WI = function(i) {
  return i.type === 2;
}, Nh = function(i, A) {
  return i.length === A.length ? i.some(function(e, n) {
    return e === A[n];
  }) : !1;
}, zI = function(i, A, e, n, s) {
  return i.map(function(o, l) {
    switch (l) {
      case 0:
        return o.add(A, e);
      case 1:
        return o.add(A + n, e);
      case 2:
        return o.add(A + n, e + s);
      case 3:
        return o.add(A, e + s);
    }
    return o;
  });
}, Wf = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return i;
  }()
), zf = (
  /** @class */
  function() {
    function i(A, e) {
      if (this.container = A, this.parent = e, this.effects = [], this.curves = new PI(this.container), this.container.styles.opacity < 1 && this.effects.push(new VI(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var n = this.container.bounds.left + this.container.styles.transformOrigin[0].number, s = this.container.bounds.top + this.container.styles.transformOrigin[1].number, o = this.container.styles.transform;
        this.effects.push(new NI(n, s, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var l = Us(this.curves), c = vs(this.curves);
        Nh(l, c) ? this.effects.push(new os(
          l,
          6
          /* CONTENT */
        )) : (this.effects.push(new os(
          l,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new os(
          c,
          4
          /* CONTENT */
        )));
      }
    }
    return i.prototype.getEffects = function(A) {
      for (var e = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, n = this.parent, s = this.effects.slice(0); n; ) {
        var o = n.effects.filter(function(h) {
          return !kf(h);
        });
        if (e || n.container.styles.position !== 0 || !n.parent) {
          if (s.unshift.apply(s, o), e = [
            2,
            3
            /* FIXED */
          ].indexOf(n.container.styles.position) === -1, n.container.styles.overflowX !== 0) {
            var l = Us(n.curves), c = vs(n.curves);
            Nh(l, c) || s.unshift(new os(
              c,
              6
              /* CONTENT */
            ));
          }
        } else
          s.unshift.apply(s, o);
        n = n.parent;
      }
      return s.filter(function(h) {
        return qA(h.target, A);
      });
    }, i;
  }()
), el = function(i, A, e, n) {
  i.container.elements.forEach(function(s) {
    var o = qA(
      s.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), l = qA(
      s.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), c = new zf(s, i);
    qA(
      s.styles.display,
      2048
      /* LIST_ITEM */
    ) && n.push(c);
    var h = qA(
      s.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : n;
    if (o || l) {
      var d = o || s.styles.isPositioned() ? e : A, w = new Wf(c);
      if (s.styles.isPositioned() || s.styles.opacity < 1 || s.styles.isTransformed()) {
        var p = s.styles.zIndex.order;
        if (p < 0) {
          var m = 0;
          d.negativeZIndex.some(function(v, E) {
            return p > v.element.container.styles.zIndex.order ? (m = E, !1) : m > 0;
          }), d.negativeZIndex.splice(m, 0, w);
        } else if (p > 0) {
          var U = 0;
          d.positiveZIndex.some(function(v, E) {
            return p >= v.element.container.styles.zIndex.order ? (U = E + 1, !1) : U > 0;
          }), d.positiveZIndex.splice(U, 0, w);
        } else
          d.zeroOrAutoZIndexOrTransformedOrOpacity.push(w);
      } else
        s.styles.isFloating() ? d.nonPositionedFloats.push(w) : d.nonPositionedInlineLevel.push(w);
      el(c, w, o ? w : e, h);
    } else
      s.styles.isInlineLevel() ? A.inlineLevel.push(c) : A.nonInlineLevel.push(c), el(c, A, e, h);
    qA(
      s.flags,
      8
      /* IS_LIST_OWNER */
    ) && Xf(s, h);
  });
}, Xf = function(i, A) {
  for (var e = i instanceof Za ? i.start : 1, n = i instanceof Za ? i.reversed : !1, s = 0; s < A.length; s++) {
    var o = A[s];
    o.container instanceof bf && typeof o.container.value == "number" && o.container.value !== 0 && (e = o.container.value), o.listValue = Rr(e, o.container.styles.listStyleType, !0), e += n ? -1 : 1;
  }
}, XI = function(i) {
  var A = new zf(i, null), e = new Wf(A), n = [];
  return el(A, e, e, n), Xf(A.container, n), e;
}, Vh = function(i, A) {
  switch (A) {
    case 0:
      return ke(i.topLeftBorderBox, i.topLeftPaddingBox, i.topRightBorderBox, i.topRightPaddingBox);
    case 1:
      return ke(i.topRightBorderBox, i.topRightPaddingBox, i.bottomRightBorderBox, i.bottomRightPaddingBox);
    case 2:
      return ke(i.bottomRightBorderBox, i.bottomRightPaddingBox, i.bottomLeftBorderBox, i.bottomLeftPaddingBox);
    case 3:
    default:
      return ke(i.bottomLeftBorderBox, i.bottomLeftPaddingBox, i.topLeftBorderBox, i.topLeftPaddingBox);
  }
}, JI = function(i, A) {
  switch (A) {
    case 0:
      return ke(i.topLeftBorderBox, i.topLeftBorderDoubleOuterBox, i.topRightBorderBox, i.topRightBorderDoubleOuterBox);
    case 1:
      return ke(i.topRightBorderBox, i.topRightBorderDoubleOuterBox, i.bottomRightBorderBox, i.bottomRightBorderDoubleOuterBox);
    case 2:
      return ke(i.bottomRightBorderBox, i.bottomRightBorderDoubleOuterBox, i.bottomLeftBorderBox, i.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return ke(i.bottomLeftBorderBox, i.bottomLeftBorderDoubleOuterBox, i.topLeftBorderBox, i.topLeftBorderDoubleOuterBox);
  }
}, YI = function(i, A) {
  switch (A) {
    case 0:
      return ke(i.topLeftBorderDoubleInnerBox, i.topLeftPaddingBox, i.topRightBorderDoubleInnerBox, i.topRightPaddingBox);
    case 1:
      return ke(i.topRightBorderDoubleInnerBox, i.topRightPaddingBox, i.bottomRightBorderDoubleInnerBox, i.bottomRightPaddingBox);
    case 2:
      return ke(i.bottomRightBorderDoubleInnerBox, i.bottomRightPaddingBox, i.bottomLeftBorderDoubleInnerBox, i.bottomLeftPaddingBox);
    case 3:
    default:
      return ke(i.bottomLeftBorderDoubleInnerBox, i.bottomLeftPaddingBox, i.topLeftBorderDoubleInnerBox, i.topLeftPaddingBox);
  }
}, ZI = function(i, A) {
  switch (A) {
    case 0:
      return as(i.topLeftBorderStroke, i.topRightBorderStroke);
    case 1:
      return as(i.topRightBorderStroke, i.bottomRightBorderStroke);
    case 2:
      return as(i.bottomRightBorderStroke, i.bottomLeftBorderStroke);
    case 3:
    default:
      return as(i.bottomLeftBorderStroke, i.topLeftBorderStroke);
  }
}, as = function(i, A) {
  var e = [];
  return Ne(i) ? e.push(i.subdivide(0.5, !1)) : e.push(i), Ne(A) ? e.push(A.subdivide(0.5, !0)) : e.push(A), e;
}, ke = function(i, A, e, n) {
  var s = [];
  return Ne(i) ? s.push(i.subdivide(0.5, !1)) : s.push(i), Ne(e) ? s.push(e.subdivide(0.5, !0)) : s.push(e), Ne(n) ? s.push(n.subdivide(0.5, !0).reverse()) : s.push(n), Ne(A) ? s.push(A.subdivide(0.5, !1).reverse()) : s.push(A), s;
}, Jf = function(i) {
  var A = i.bounds, e = i.styles;
  return A.add(e.borderLeftWidth, e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth), -(e.borderTopWidth + e.borderBottomWidth));
}, Fs = function(i) {
  var A = i.styles, e = i.bounds, n = SA(A.paddingLeft, e.width), s = SA(A.paddingRight, e.width), o = SA(A.paddingTop, e.width), l = SA(A.paddingBottom, e.width);
  return e.add(n + A.borderLeftWidth, o + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + n + s), -(A.borderTopWidth + A.borderBottomWidth + o + l));
}, qI = function(i, A) {
  return i === 0 ? A.bounds : i === 2 ? Fs(A) : Jf(A);
}, $I = function(i, A) {
  return i === 0 ? A.bounds : i === 2 ? Fs(A) : Jf(A);
}, xa = function(i, A, e) {
  var n = qI(Pn(i.styles.backgroundOrigin, A), i), s = $I(Pn(i.styles.backgroundClip, A), i), o = jI(Pn(i.styles.backgroundSize, A), e, n), l = o[0], c = o[1], h = Ir(Pn(i.styles.backgroundPosition, A), n.width - l, n.height - c), d = AE(Pn(i.styles.backgroundRepeat, A), h, o, n, s), w = Math.round(n.left + h[0]), p = Math.round(n.top + h[1]);
  return [d, w, p, l, c];
}, Rn = function(i) {
  return yA(i) && i.value === Vn.AUTO;
}, ls = function(i) {
  return typeof i == "number";
}, jI = function(i, A, e) {
  var n = A[0], s = A[1], o = A[2], l = i[0], c = i[1];
  if (!l)
    return [0, 0];
  if (JA(l) && c && JA(c))
    return [SA(l, e.width), SA(c, e.height)];
  var h = ls(o);
  if (yA(l) && (l.value === Vn.CONTAIN || l.value === Vn.COVER)) {
    if (ls(o)) {
      var d = e.width / e.height;
      return d < o != (l.value === Vn.COVER) ? [e.width, e.width / o] : [e.height * o, e.height];
    }
    return [e.width, e.height];
  }
  var w = ls(n), p = ls(s), m = w || p;
  if (Rn(l) && (!c || Rn(c))) {
    if (w && p)
      return [n, s];
    if (!h && !m)
      return [e.width, e.height];
    if (m && h) {
      var U = w ? n : s * o, v = p ? s : n / o;
      return [U, v];
    }
    var E = w ? n : e.width, T = p ? s : e.height;
    return [E, T];
  }
  if (h) {
    var S = 0, x = 0;
    return JA(l) ? S = SA(l, e.width) : JA(c) && (x = SA(c, e.height)), Rn(l) ? S = x * o : (!c || Rn(c)) && (x = S / o), [S, x];
  }
  var Y = null, X = null;
  if (JA(l) ? Y = SA(l, e.width) : c && JA(c) && (X = SA(c, e.height)), Y !== null && (!c || Rn(c)) && (X = w && p ? Y / n * s : e.height), X !== null && Rn(l) && (Y = w && p ? X / s * n : e.width), Y !== null && X !== null)
    return [Y, X];
  throw new Error("Unable to calculate background-size for element");
}, Pn = function(i, A) {
  var e = i[A];
  return typeof e > "u" ? i[0] : e;
}, AE = function(i, A, e, n, s) {
  var o = A[0], l = A[1], c = e[0], h = e[1];
  switch (i) {
    case 2:
      return [
        new N(Math.round(n.left), Math.round(n.top + l)),
        new N(Math.round(n.left + n.width), Math.round(n.top + l)),
        new N(Math.round(n.left + n.width), Math.round(h + n.top + l)),
        new N(Math.round(n.left), Math.round(h + n.top + l))
      ];
    case 3:
      return [
        new N(Math.round(n.left + o), Math.round(n.top)),
        new N(Math.round(n.left + o + c), Math.round(n.top)),
        new N(Math.round(n.left + o + c), Math.round(n.height + n.top)),
        new N(Math.round(n.left + o), Math.round(n.height + n.top))
      ];
    case 1:
      return [
        new N(Math.round(n.left + o), Math.round(n.top + l)),
        new N(Math.round(n.left + o + c), Math.round(n.top + l)),
        new N(Math.round(n.left + o + c), Math.round(n.top + l + h)),
        new N(Math.round(n.left + o), Math.round(n.top + l + h))
      ];
    default:
      return [
        new N(Math.round(s.left), Math.round(s.top)),
        new N(Math.round(s.left + s.width), Math.round(s.top)),
        new N(Math.round(s.left + s.width), Math.round(s.height + s.top)),
        new N(Math.round(s.left), Math.round(s.height + s.top))
      ];
  }
}, eE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", kh = "Hidden Text", tE = (
  /** @class */
  function() {
    function i(A) {
      this._data = {}, this._document = A;
    }
    return i.prototype.parseMetrics = function(A, e) {
      var n = this._document.createElement("div"), s = this._document.createElement("img"), o = this._document.createElement("span"), l = this._document.body;
      n.style.visibility = "hidden", n.style.fontFamily = A, n.style.fontSize = e, n.style.margin = "0", n.style.padding = "0", n.style.whiteSpace = "nowrap", l.appendChild(n), s.src = eE, s.width = 1, s.height = 1, s.style.margin = "0", s.style.padding = "0", s.style.verticalAlign = "baseline", o.style.fontFamily = A, o.style.fontSize = e, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(kh)), n.appendChild(o), n.appendChild(s);
      var c = s.offsetTop - o.offsetTop + 2;
      n.removeChild(o), n.appendChild(this._document.createTextNode(kh)), n.style.lineHeight = "normal", s.style.verticalAlign = "super";
      var h = s.offsetTop - n.offsetTop + 2;
      return l.removeChild(n), { baseline: c, middle: h };
    }, i.prototype.getMetrics = function(A, e) {
      var n = A + " " + e;
      return typeof this._data[n] > "u" && (this._data[n] = this.parseMetrics(A, e)), this._data[n];
    }, i;
  }()
), Yf = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(A, e) {
      this.context = A, this.options = e;
    }
    return i;
  }()
), nE = 1e4, rE = (
  /** @class */
  function(i) {
    At(A, i);
    function A(e, n) {
      var s = i.call(this, e, n) || this;
      return s._activeEffects = [], s.canvas = n.canvas ? n.canvas : document.createElement("canvas"), s.ctx = s.canvas.getContext("2d"), n.canvas || (s.canvas.width = Math.floor(n.width * n.scale), s.canvas.height = Math.floor(n.height * n.scale), s.canvas.style.width = n.width + "px", s.canvas.style.height = n.height + "px"), s.fontMetrics = new tE(document), s.ctx.scale(s.options.scale, s.options.scale), s.ctx.translate(-n.x, -n.y), s.ctx.textBaseline = "bottom", s._activeEffects = [], s.context.logger.debug("Canvas renderer initialized (" + n.width + "x" + n.height + ") with scale " + n.scale), s;
    }
    return A.prototype.applyEffects = function(e) {
      for (var n = this; this._activeEffects.length; )
        this.popEffect();
      e.forEach(function(s) {
        return n.applyEffect(s);
      });
    }, A.prototype.applyEffect = function(e) {
      this.ctx.save(), WI(e) && (this.ctx.globalAlpha = e.opacity), kI(e) && (this.ctx.translate(e.offsetX, e.offsetY), this.ctx.transform(e.matrix[0], e.matrix[1], e.matrix[2], e.matrix[3], e.matrix[4], e.matrix[5]), this.ctx.translate(-e.offsetX, -e.offsetY)), kf(e) && (this.path(e.path), this.ctx.clip()), this._activeEffects.push(e);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(e) {
      return Be(this, void 0, void 0, function() {
        var n;
        return le(this, function(s) {
          switch (s.label) {
            case 0:
              return n = e.element.container.styles, n.isVisible() ? [4, this.renderStackContent(e)] : [3, 2];
            case 1:
              s.sent(), s.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNode = function(e) {
      return Be(this, void 0, void 0, function() {
        return le(this, function(n) {
          switch (n.label) {
            case 0:
              if (qA(
                e.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
            case 1:
              return n.sent(), [4, this.renderNodeContent(e)];
            case 2:
              n.sent(), n.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderTextWithLetterSpacing = function(e, n, s) {
      var o = this;
      if (n === 0)
        this.ctx.fillText(e.text, e.bounds.left, e.bounds.top + s);
      else {
        var l = ol(e.text);
        l.reduce(function(c, h) {
          return o.ctx.fillText(h, c, e.bounds.top + s), c + o.ctx.measureText(h).width;
        }, e.bounds.left);
      }
    }, A.prototype.createFontStyle = function(e) {
      var n = e.fontVariant.filter(function(l) {
        return l === "normal" || l === "small-caps";
      }).join(""), s = lE(e.fontFamily).join(", "), o = Xr(e.fontSize) ? "" + e.fontSize.number + e.fontSize.unit : e.fontSize.number + "px";
      return [
        [e.fontStyle, n, e.fontWeight, o, s].join(" "),
        s,
        o
      ];
    }, A.prototype.renderTextNode = function(e, n) {
      return Be(this, void 0, void 0, function() {
        var s, o, l, c, h, d, w, p, m = this;
        return le(this, function(U) {
          return s = this.createFontStyle(n), o = s[0], l = s[1], c = s[2], this.ctx.font = o, this.ctx.direction = n.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", h = this.fontMetrics.getMetrics(l, c), d = h.baseline, w = h.middle, p = n.paintOrder, e.textBounds.forEach(function(v) {
            p.forEach(function(E) {
              switch (E) {
                case 0:
                  m.ctx.fillStyle = Ae(n.color), m.renderTextWithLetterSpacing(v, n.letterSpacing, d);
                  var T = n.textShadow;
                  T.length && v.text.trim().length && (T.slice(0).reverse().forEach(function(S) {
                    m.ctx.shadowColor = Ae(S.color), m.ctx.shadowOffsetX = S.offsetX.number * m.options.scale, m.ctx.shadowOffsetY = S.offsetY.number * m.options.scale, m.ctx.shadowBlur = S.blur.number, m.renderTextWithLetterSpacing(v, n.letterSpacing, d);
                  }), m.ctx.shadowColor = "", m.ctx.shadowOffsetX = 0, m.ctx.shadowOffsetY = 0, m.ctx.shadowBlur = 0), n.textDecorationLine.length && (m.ctx.fillStyle = Ae(n.textDecorationColor || n.color), n.textDecorationLine.forEach(function(S) {
                    switch (S) {
                      case 1:
                        m.ctx.fillRect(v.bounds.left, Math.round(v.bounds.top + d), v.bounds.width, 1);
                        break;
                      case 2:
                        m.ctx.fillRect(v.bounds.left, Math.round(v.bounds.top), v.bounds.width, 1);
                        break;
                      case 3:
                        m.ctx.fillRect(v.bounds.left, Math.ceil(v.bounds.top + w), v.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  n.webkitTextStrokeWidth && v.text.trim().length && (m.ctx.strokeStyle = Ae(n.webkitTextStrokeColor), m.ctx.lineWidth = n.webkitTextStrokeWidth, m.ctx.lineJoin = window.chrome ? "miter" : "round", m.ctx.strokeText(v.text, v.bounds.left, v.bounds.top + d)), m.ctx.strokeStyle = "", m.ctx.lineWidth = 0, m.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderReplacedElement = function(e, n, s) {
      if (s && e.intrinsicWidth > 0 && e.intrinsicHeight > 0) {
        var o = Fs(e), l = vs(n);
        this.path(l), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(s, 0, 0, e.intrinsicWidth, e.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(e) {
      return Be(this, void 0, void 0, function() {
        var n, s, o, l, c, h, x, x, d, w, p, m, X, U, v, K, E, T, S, x, Y, X, K;
        return le(this, function(D) {
          switch (D.label) {
            case 0:
              this.applyEffects(e.getEffects(
                4
                /* CONTENT */
              )), n = e.container, s = e.curves, o = n.styles, l = 0, c = n.textNodes, D.label = 1;
            case 1:
              return l < c.length ? (h = c[l], [4, this.renderTextNode(h, o)]) : [3, 4];
            case 2:
              D.sent(), D.label = 3;
            case 3:
              return l++, [3, 1];
            case 4:
              if (!(n instanceof _f)) return [3, 8];
              D.label = 5;
            case 5:
              return D.trys.push([5, 7, , 8]), [4, this.context.cache.match(n.src)];
            case 6:
              return x = D.sent(), this.renderReplacedElement(n, s, x), [3, 8];
            case 7:
              return D.sent(), this.context.logger.error("Error loading image " + n.src), [3, 8];
            case 8:
              if (n instanceof yf && this.renderReplacedElement(n, s, n.canvas), !(n instanceof Hf)) return [3, 12];
              D.label = 9;
            case 9:
              return D.trys.push([9, 11, , 12]), [4, this.context.cache.match(n.svg)];
            case 10:
              return x = D.sent(), this.renderReplacedElement(n, s, x), [3, 12];
            case 11:
              return D.sent(), this.context.logger.error("Error loading svg " + n.svg.substring(0, 255)), [3, 12];
            case 12:
              return n instanceof Lf && n.tree ? (d = new A(this.context, {
                scale: this.options.scale,
                backgroundColor: n.backgroundColor,
                x: 0,
                y: 0,
                width: n.width,
                height: n.height
              }), [4, d.render(n.tree)]) : [3, 14];
            case 13:
              w = D.sent(), n.width && n.height && this.ctx.drawImage(w, 0, 0, n.width, n.height, n.bounds.left, n.bounds.top, n.bounds.width, n.bounds.height), D.label = 14;
            case 14:
              if (n instanceof al && (p = Math.min(n.bounds.width, n.bounds.height), n.type === ps ? n.checked && (this.ctx.save(), this.path([
                new N(n.bounds.left + p * 0.39363, n.bounds.top + p * 0.79),
                new N(n.bounds.left + p * 0.16, n.bounds.top + p * 0.5549),
                new N(n.bounds.left + p * 0.27347, n.bounds.top + p * 0.44071),
                new N(n.bounds.left + p * 0.39694, n.bounds.top + p * 0.5649),
                new N(n.bounds.left + p * 0.72983, n.bounds.top + p * 0.23),
                new N(n.bounds.left + p * 0.84, n.bounds.top + p * 0.34085),
                new N(n.bounds.left + p * 0.39363, n.bounds.top + p * 0.79)
              ]), this.ctx.fillStyle = Ae(Sh), this.ctx.fill(), this.ctx.restore()) : n.type === Cs && n.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(n.bounds.left + p / 2, n.bounds.top + p / 2, p / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = Ae(Sh), this.ctx.fill(), this.ctx.restore())), iE(n) && n.value.length) {
                switch (m = this.createFontStyle(o), X = m[0], U = m[1], v = this.fontMetrics.getMetrics(X, U).baseline, this.ctx.font = X, this.ctx.fillStyle = Ae(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = oE(n.styles.textAlign), K = Fs(n), E = 0, n.styles.textAlign) {
                  case 1:
                    E += K.width / 2;
                    break;
                  case 2:
                    E += K.width;
                    break;
                }
                T = K.add(E, 0, 0, -K.height / 2 + 1), this.ctx.save(), this.path([
                  new N(K.left, K.top),
                  new N(K.left + K.width, K.top),
                  new N(K.left + K.width, K.top + K.height),
                  new N(K.left, K.top + K.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Sr(n.value, T), o.letterSpacing, v), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!qA(
                n.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (n.styles.listStyleImage === null) return [3, 19];
              if (S = n.styles.listStyleImage, S.type !== 0) return [3, 18];
              x = void 0, Y = S.url, D.label = 15;
            case 15:
              return D.trys.push([15, 17, , 18]), [4, this.context.cache.match(Y)];
            case 16:
              return x = D.sent(), this.ctx.drawImage(x, n.bounds.left - (x.width + 10), n.bounds.top), [3, 18];
            case 17:
              return D.sent(), this.context.logger.error("Error loading list-style-image " + Y), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              e.listValue && n.styles.listStyleType !== -1 && (X = this.createFontStyle(o)[0], this.ctx.font = X, this.ctx.fillStyle = Ae(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", K = new Ut(n.bounds.left, n.bounds.top + SA(n.styles.paddingTop, n.bounds.width), n.bounds.width, dh(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Sr(e.listValue, K), o.letterSpacing, dh(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), D.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderStackContent = function(e) {
      return Be(this, void 0, void 0, function() {
        var n, s, S, o, l, S, c, h, S, d, w, S, p, m, S, U, v, S, E, T, S;
        return le(this, function(x) {
          switch (x.label) {
            case 0:
              if (qA(
                e.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(e.element)];
            case 1:
              x.sent(), n = 0, s = e.negativeZIndex, x.label = 2;
            case 2:
              return n < s.length ? (S = s[n], [4, this.renderStack(S)]) : [3, 5];
            case 3:
              x.sent(), x.label = 4;
            case 4:
              return n++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(e.element)];
            case 6:
              x.sent(), o = 0, l = e.nonInlineLevel, x.label = 7;
            case 7:
              return o < l.length ? (S = l[o], [4, this.renderNode(S)]) : [3, 10];
            case 8:
              x.sent(), x.label = 9;
            case 9:
              return o++, [3, 7];
            case 10:
              c = 0, h = e.nonPositionedFloats, x.label = 11;
            case 11:
              return c < h.length ? (S = h[c], [4, this.renderStack(S)]) : [3, 14];
            case 12:
              x.sent(), x.label = 13;
            case 13:
              return c++, [3, 11];
            case 14:
              d = 0, w = e.nonPositionedInlineLevel, x.label = 15;
            case 15:
              return d < w.length ? (S = w[d], [4, this.renderStack(S)]) : [3, 18];
            case 16:
              x.sent(), x.label = 17;
            case 17:
              return d++, [3, 15];
            case 18:
              p = 0, m = e.inlineLevel, x.label = 19;
            case 19:
              return p < m.length ? (S = m[p], [4, this.renderNode(S)]) : [3, 22];
            case 20:
              x.sent(), x.label = 21;
            case 21:
              return p++, [3, 19];
            case 22:
              U = 0, v = e.zeroOrAutoZIndexOrTransformedOrOpacity, x.label = 23;
            case 23:
              return U < v.length ? (S = v[U], [4, this.renderStack(S)]) : [3, 26];
            case 24:
              x.sent(), x.label = 25;
            case 25:
              return U++, [3, 23];
            case 26:
              E = 0, T = e.positiveZIndex, x.label = 27;
            case 27:
              return E < T.length ? (S = T[E], [4, this.renderStack(S)]) : [3, 30];
            case 28:
              x.sent(), x.label = 29;
            case 29:
              return E++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.mask = function(e) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(e.slice(0).reverse()), this.ctx.closePath();
    }, A.prototype.path = function(e) {
      this.ctx.beginPath(), this.formatPath(e), this.ctx.closePath();
    }, A.prototype.formatPath = function(e) {
      var n = this;
      e.forEach(function(s, o) {
        var l = Ne(s) ? s.start : s;
        o === 0 ? n.ctx.moveTo(l.x, l.y) : n.ctx.lineTo(l.x, l.y), Ne(s) && n.ctx.bezierCurveTo(s.startControl.x, s.startControl.y, s.endControl.x, s.endControl.y, s.end.x, s.end.y);
      });
    }, A.prototype.renderRepeat = function(e, n, s, o) {
      this.path(e), this.ctx.fillStyle = n, this.ctx.translate(s, o), this.ctx.fill(), this.ctx.translate(-s, -o);
    }, A.prototype.resizeImage = function(e, n, s) {
      var o;
      if (e.width === n && e.height === s)
        return e;
      var l = (o = this.canvas.ownerDocument) !== null && o !== void 0 ? o : document, c = l.createElement("canvas");
      c.width = Math.max(1, n), c.height = Math.max(1, s);
      var h = c.getContext("2d");
      return h.drawImage(e, 0, 0, e.width, e.height, 0, 0, n, s), c;
    }, A.prototype.renderBackgroundImage = function(e) {
      return Be(this, void 0, void 0, function() {
        var n, s, o, l, c, h;
        return le(this, function(d) {
          switch (d.label) {
            case 0:
              n = e.styles.backgroundImage.length - 1, s = function(w) {
                var p, m, U, mA, XA, QA, lA, xA, j, v, mA, XA, QA, lA, xA, E, T, S, x, Y, X, K, D, z, j, G, mA, DA, RA, lA, xA, ie, XA, QA, $A, P, R, W, BA, oA, uA, gA;
                return le(this, function(_A) {
                  switch (_A.label) {
                    case 0:
                      if (w.type !== 0) return [3, 5];
                      p = void 0, m = w.url, _A.label = 1;
                    case 1:
                      return _A.trys.push([1, 3, , 4]), [4, o.context.cache.match(m)];
                    case 2:
                      return p = _A.sent(), [3, 4];
                    case 3:
                      return _A.sent(), o.context.logger.error("Error loading background-image " + m), [3, 4];
                    case 4:
                      return p && (U = xa(e, n, [
                        p.width,
                        p.height,
                        p.width / p.height
                      ]), mA = U[0], XA = U[1], QA = U[2], lA = U[3], xA = U[4], j = o.ctx.createPattern(o.resizeImage(p, lA, xA), "repeat"), o.renderRepeat(mA, j, XA, QA)), [3, 6];
                    case 5:
                      kU(w) ? (v = xa(e, n, [null, null, null]), mA = v[0], XA = v[1], QA = v[2], lA = v[3], xA = v[4], E = OU(w.angle, lA, xA), T = E[0], S = E[1], x = E[2], Y = E[3], X = E[4], K = document.createElement("canvas"), K.width = lA, K.height = xA, D = K.getContext("2d"), z = D.createLinearGradient(S, Y, x, X), hh(w.stops, T).forEach(function(wA) {
                        return z.addColorStop(wA.stop, Ae(wA.color));
                      }), D.fillStyle = z, D.fillRect(0, 0, lA, xA), lA > 0 && xA > 0 && (j = o.ctx.createPattern(K, "repeat"), o.renderRepeat(mA, j, XA, QA))) : WU(w) && (G = xa(e, n, [
                        null,
                        null,
                        null
                      ]), mA = G[0], DA = G[1], RA = G[2], lA = G[3], xA = G[4], ie = w.position.length === 0 ? [rl] : w.position, XA = SA(ie[0], lA), QA = SA(ie[ie.length - 1], xA), $A = PU(w, XA, QA, lA, xA), P = $A[0], R = $A[1], P > 0 && R > 0 && (W = o.ctx.createRadialGradient(DA + XA, RA + QA, 0, DA + XA, RA + QA, P), hh(w.stops, P * 2).forEach(function(wA) {
                        return W.addColorStop(wA.stop, Ae(wA.color));
                      }), o.path(mA), o.ctx.fillStyle = W, P !== R ? (BA = e.bounds.left + 0.5 * e.bounds.width, oA = e.bounds.top + 0.5 * e.bounds.height, uA = R / P, gA = 1 / uA, o.ctx.save(), o.ctx.translate(BA, oA), o.ctx.transform(1, 0, 0, uA, 0, 0), o.ctx.translate(-BA, -oA), o.ctx.fillRect(DA, gA * (RA - oA) + oA, lA, xA * gA), o.ctx.restore()) : o.ctx.fill())), _A.label = 6;
                    case 6:
                      return n--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, o = this, l = 0, c = e.styles.backgroundImage.slice(0).reverse(), d.label = 1;
            case 1:
              return l < c.length ? (h = c[l], [5, s(h)]) : [3, 4];
            case 2:
              d.sent(), d.label = 3;
            case 3:
              return l++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderSolidBorder = function(e, n, s) {
      return Be(this, void 0, void 0, function() {
        return le(this, function(o) {
          return this.path(Vh(s, n)), this.ctx.fillStyle = Ae(e), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(e, n, s, o) {
      return Be(this, void 0, void 0, function() {
        var l, c;
        return le(this, function(h) {
          switch (h.label) {
            case 0:
              return n < 3 ? [4, this.renderSolidBorder(e, s, o)] : [3, 2];
            case 1:
              return h.sent(), [
                2
                /*return*/
              ];
            case 2:
              return l = JI(o, s), this.path(l), this.ctx.fillStyle = Ae(e), this.ctx.fill(), c = YI(o, s), this.path(c), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(e) {
      return Be(this, void 0, void 0, function() {
        var n, s, o, l, c, h, d, w, p = this;
        return le(this, function(m) {
          switch (m.label) {
            case 0:
              return this.applyEffects(e.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), n = e.container.styles, s = !Nt(n.backgroundColor) || n.backgroundImage.length, o = [
                { style: n.borderTopStyle, color: n.borderTopColor, width: n.borderTopWidth },
                { style: n.borderRightStyle, color: n.borderRightColor, width: n.borderRightWidth },
                { style: n.borderBottomStyle, color: n.borderBottomColor, width: n.borderBottomWidth },
                { style: n.borderLeftStyle, color: n.borderLeftColor, width: n.borderLeftWidth }
              ], l = sE(Pn(n.backgroundClip, 0), e.curves), s || n.boxShadow.length ? (this.ctx.save(), this.path(l), this.ctx.clip(), Nt(n.backgroundColor) || (this.ctx.fillStyle = Ae(n.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(e.container)]) : [3, 2];
            case 1:
              m.sent(), this.ctx.restore(), n.boxShadow.slice(0).reverse().forEach(function(U) {
                p.ctx.save();
                var v = Us(e.curves), E = U.inset ? 0 : nE, T = zI(v, -E + (U.inset ? 1 : -1) * U.spread.number, (U.inset ? 1 : -1) * U.spread.number, U.spread.number * (U.inset ? -2 : 2), U.spread.number * (U.inset ? -2 : 2));
                U.inset ? (p.path(v), p.ctx.clip(), p.mask(T)) : (p.mask(v), p.ctx.clip(), p.path(T)), p.ctx.shadowOffsetX = U.offsetX.number + E, p.ctx.shadowOffsetY = U.offsetY.number, p.ctx.shadowColor = Ae(U.color), p.ctx.shadowBlur = U.blur.number, p.ctx.fillStyle = U.inset ? Ae(U.color) : "rgba(0,0,0,1)", p.ctx.fill(), p.ctx.restore();
              }), m.label = 2;
            case 2:
              c = 0, h = 0, d = o, m.label = 3;
            case 3:
              return h < d.length ? (w = d[h], w.style !== 0 && !Nt(w.color) && w.width > 0 ? w.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                w.color,
                w.width,
                c,
                e.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return m.sent(), [3, 11];
            case 5:
              return w.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                w.color,
                w.width,
                c,
                e.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return m.sent(), [3, 11];
            case 7:
              return w.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(w.color, w.width, c, e.curves)];
            case 8:
              return m.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(w.color, c, e.curves)];
            case 10:
              m.sent(), m.label = 11;
            case 11:
              c++, m.label = 12;
            case 12:
              return h++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderDashedDottedBorder = function(e, n, s, o, l) {
      return Be(this, void 0, void 0, function() {
        var c, h, d, w, p, m, U, v, E, T, S, x, Y, X, K, D, K, D;
        return le(this, function(z) {
          return this.ctx.save(), c = ZI(o, s), h = Vh(o, s), l === 2 && (this.path(h), this.ctx.clip()), Ne(h[0]) ? (d = h[0].start.x, w = h[0].start.y) : (d = h[0].x, w = h[0].y), Ne(h[1]) ? (p = h[1].end.x, m = h[1].end.y) : (p = h[1].x, m = h[1].y), s === 0 || s === 2 ? U = Math.abs(d - p) : U = Math.abs(w - m), this.ctx.beginPath(), l === 3 ? this.formatPath(c) : this.formatPath(h.slice(0, 2)), v = n < 3 ? n * 3 : n * 2, E = n < 3 ? n * 2 : n, l === 3 && (v = n, E = n), T = !0, U <= v * 2 ? T = !1 : U <= v * 2 + E ? (S = U / (2 * v + E), v *= S, E *= S) : (x = Math.floor((U + E) / (v + E)), Y = (U - x * v) / (x - 1), X = (U - (x + 1) * v) / x, E = X <= 0 || Math.abs(E - Y) < Math.abs(E - X) ? Y : X), T && (l === 3 ? this.ctx.setLineDash([0, v + E]) : this.ctx.setLineDash([v, E])), l === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = n) : this.ctx.lineWidth = n * 2 + 1.1, this.ctx.strokeStyle = Ae(e), this.ctx.stroke(), this.ctx.setLineDash([]), l === 2 && (Ne(h[0]) && (K = h[3], D = h[0], this.ctx.beginPath(), this.formatPath([new N(K.end.x, K.end.y), new N(D.start.x, D.start.y)]), this.ctx.stroke()), Ne(h[1]) && (K = h[1], D = h[2], this.ctx.beginPath(), this.formatPath([new N(K.end.x, K.end.y), new N(D.start.x, D.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.render = function(e) {
      return Be(this, void 0, void 0, function() {
        var n;
        return le(this, function(s) {
          switch (s.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = Ae(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), n = XI(e), [4, this.renderStack(n)];
            case 1:
              return s.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  }(Yf)
), iE = function(i) {
  return i instanceof xf || i instanceof Sf ? !0 : i instanceof al && i.type !== Cs && i.type !== ps;
}, sE = function(i, A) {
  switch (i) {
    case 0:
      return Us(A);
    case 2:
      return GI(A);
    case 1:
    default:
      return vs(A);
  }
}, oE = function(i) {
  switch (i) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, aE = ["-apple-system", "system-ui"], lE = function(i) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? i.filter(function(A) {
    return aE.indexOf(A) === -1;
  }) : i;
}, uE = (
  /** @class */
  function(i) {
    At(A, i);
    function A(e, n) {
      var s = i.call(this, e, n) || this;
      return s.canvas = n.canvas ? n.canvas : document.createElement("canvas"), s.ctx = s.canvas.getContext("2d"), s.options = n, s.canvas.width = Math.floor(n.width * n.scale), s.canvas.height = Math.floor(n.height * n.scale), s.canvas.style.width = n.width + "px", s.canvas.style.height = n.height + "px", s.ctx.scale(s.options.scale, s.options.scale), s.ctx.translate(-n.x, -n.y), s.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + n.width + "x" + n.height + " at " + n.x + "," + n.y + ") with scale " + n.scale), s;
    }
    return A.prototype.render = function(e) {
      return Be(this, void 0, void 0, function() {
        var n, s;
        return le(this, function(o) {
          switch (o.label) {
            case 0:
              return n = Ya(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, e), [4, cE(n)];
            case 1:
              return s = o.sent(), this.options.backgroundColor && (this.ctx.fillStyle = Ae(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(s, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(Yf)
), cE = function(i) {
  return new Promise(function(A, e) {
    var n = new Image();
    n.onload = function() {
      A(n);
    }, n.onerror = e, n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(i));
  });
}, hE = (
  /** @class */
  function() {
    function i(A) {
      var e = A.id, n = A.enabled;
      this.id = e, this.enabled = n, this.start = Date.now();
    }
    return i.prototype.debug = function() {
      for (var A = [], e = 0; e < arguments.length; e++)
        A[e] = arguments[e];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Gi([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, i.prototype.getTime = function() {
      return Date.now() - this.start;
    }, i.prototype.info = function() {
      for (var A = [], e = 0; e < arguments.length; e++)
        A[e] = arguments[e];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Gi([this.id, this.getTime() + "ms"], A));
    }, i.prototype.warn = function() {
      for (var A = [], e = 0; e < arguments.length; e++)
        A[e] = arguments[e];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Gi([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, i.prototype.error = function() {
      for (var A = [], e = 0; e < arguments.length; e++)
        A[e] = arguments[e];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Gi([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, i.instances = {}, i;
  }()
), fE = (
  /** @class */
  function() {
    function i(A, e) {
      var n;
      this.windowBounds = e, this.instanceName = "#" + i.instanceCount++, this.logger = new hE({ id: this.instanceName, enabled: A.logging }), this.cache = (n = A.cache) !== null && n !== void 0 ? n : new LI(this, A);
    }
    return i.instanceCount = 1, i;
  }()
), dE = function(i, A) {
  return A === void 0 && (A = {}), BE(i, A);
};
typeof window < "u" && Vf.setContext(window);
var BE = function(i, A) {
  return Be(void 0, void 0, void 0, function() {
    var e, n, s, o, l, c, h, d, w, p, m, U, v, E, T, S, x, Y, X, K, z, D, z, j, G, mA, DA, RA, lA, xA, ie, XA, QA, $A, P, R, W, BA, oA, uA;
    return le(this, function(gA) {
      switch (gA.label) {
        case 0:
          if (!i || typeof i != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (e = i.ownerDocument, !e)
            throw new Error("Element is not attached to a Document");
          if (n = e.defaultView, !n)
            throw new Error("Document is not attached to a Window");
          return s = {
            allowTaint: (j = A.allowTaint) !== null && j !== void 0 ? j : !1,
            imageTimeout: (G = A.imageTimeout) !== null && G !== void 0 ? G : 15e3,
            proxy: A.proxy,
            useCORS: (mA = A.useCORS) !== null && mA !== void 0 ? mA : !1
          }, o = Ta({ logging: (DA = A.logging) !== null && DA !== void 0 ? DA : !0, cache: A.cache }, s), l = {
            windowWidth: (RA = A.windowWidth) !== null && RA !== void 0 ? RA : n.innerWidth,
            windowHeight: (lA = A.windowHeight) !== null && lA !== void 0 ? lA : n.innerHeight,
            scrollX: (xA = A.scrollX) !== null && xA !== void 0 ? xA : n.pageXOffset,
            scrollY: (ie = A.scrollY) !== null && ie !== void 0 ? ie : n.pageYOffset
          }, c = new Ut(l.scrollX, l.scrollY, l.windowWidth, l.windowHeight), h = new fE(o, c), d = (XA = A.foreignObjectRendering) !== null && XA !== void 0 ? XA : !1, w = {
            allowTaint: (QA = A.allowTaint) !== null && QA !== void 0 ? QA : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: d,
            copyStyles: d
          }, h.logger.debug("Starting document clone with size " + c.width + "x" + c.height + " scrolled to " + -c.left + "," + -c.top), p = new Ph(h, i, w), m = p.clonedReferenceElement, m ? [4, p.toIFrame(e, c)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return U = gA.sent(), v = ll(m) || gI(m) ? zQ(m.ownerDocument) : Hs(h, m), E = v.width, T = v.height, S = v.left, x = v.top, Y = gE(h, m, A.backgroundColor), X = {
            canvas: A.canvas,
            backgroundColor: Y,
            scale: (P = ($A = A.scale) !== null && $A !== void 0 ? $A : n.devicePixelRatio) !== null && P !== void 0 ? P : 1,
            x: ((R = A.x) !== null && R !== void 0 ? R : 0) + S,
            y: ((W = A.y) !== null && W !== void 0 ? W : 0) + x,
            width: (BA = A.width) !== null && BA !== void 0 ? BA : Math.ceil(E),
            height: (oA = A.height) !== null && oA !== void 0 ? oA : Math.ceil(T)
          }, d ? (h.logger.debug("Document cloned, using foreign object rendering"), z = new uE(h, X), [4, z.render(m)]) : [3, 3];
        case 2:
          return K = gA.sent(), [3, 5];
        case 3:
          return h.logger.debug("Document cloned, element located at " + S + "," + x + " with size " + E + "x" + T + " using computed rendering"), h.logger.debug("Starting DOM parsing"), D = Df(h, m), Y === D.styles.backgroundColor && (D.styles.backgroundColor = Qt.TRANSPARENT), h.logger.debug("Starting renderer for element at " + X.x + "," + X.y + " with size " + X.width + "x" + X.height), z = new rE(h, X), [4, z.render(D)];
        case 4:
          K = gA.sent(), gA.label = 5;
        case 5:
          return (!((uA = A.removeContainer) !== null && uA !== void 0) || uA) && (Ph.destroy(U) || h.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), h.logger.debug("Finished rendering"), [2, K];
      }
    });
  });
}, gE = function(i, A, e) {
  var n = A.ownerDocument, s = n.documentElement ? Hr(i, getComputedStyle(n.documentElement).backgroundColor) : Qt.TRANSPARENT, o = n.body ? Hr(i, getComputedStyle(n.body).backgroundColor) : Qt.TRANSPARENT, l = typeof e == "string" ? Hr(i, e) : e === null ? Qt.TRANSPARENT : 4294967295;
  return A === n.documentElement ? Nt(s) ? Nt(o) ? l : o : s : l;
};
class Os extends Error {
  /** @internal */
  constructor(A, e) {
    super(e), this.type = A;
  }
}
class fn extends Os {
  /** @internal */
  constructor(A, e) {
    super("Configuration", A), this.node = e;
  }
}
class wE extends Os {
  /** @internal */
  constructor(A) {
    super("PopoutBlocked", A);
  }
}
class pE extends Os {
  /** @internal */
  constructor(A) {
    super("API", A);
  }
}
class Dt extends Os {
  /** @internal */
  constructor(A) {
    super("Bind", A);
  }
}
class Ps extends Error {
  constructor(A, e, n) {
    super(`${A}: ${e}${n === void 0 ? "" : ": " + n}`);
  }
}
class pA extends Ps {
  constructor(A, e) {
    super("Assert", A, e);
  }
}
class xe extends Ps {
  constructor(A, e, n) {
    super("UnreachableCase", A, `${e}${n === void 0 ? "" : ": " + n}`);
  }
}
class TA extends Ps {
  constructor(A, e) {
    super("UnexpectedNull", A, e);
  }
}
class tA extends Ps {
  constructor(A, e) {
    super("UnexpectedUndefined", A, e);
  }
}
var Is;
(function(i) {
  let A = !1;
  const e = {
    PopoutCannotBeCreatedWithGroundItemConfig: {
      id: 0,
      default: "Popout cannot be created with ground ItemConfig"
    },
    PleaseRegisterAConstructorFunction: {
      id: 1,
      default: "Please register a constructor function"
    },
    ComponentTypeNotRegisteredAndBindComponentEventHandlerNotAssigned: {
      id: 2,
      default: "Component type not registered and BindComponentEvent handler not assigned"
    },
    ComponentIsAlreadyRegistered: {
      id: 3,
      default: "Component is already registered"
    },
    ComponentIsNotVirtuable: {
      id: 4,
      default: "Component is not virtuable. Requires rootHtmlElement field/getter"
    },
    VirtualComponentDoesNotHaveRootHtmlElement: {
      id: 5,
      default: 'Virtual component does not have getter "rootHtmlElement"'
    },
    ItemConfigIsNotTypeComponent: {
      id: 6,
      default: "ItemConfig is not of type component"
    },
    InvalidNumberPartInSizeString: {
      id: 7,
      default: "Invalid number part in size string"
    },
    UnknownUnitInSizeString: {
      id: 8,
      default: "Unknown unit in size string"
    },
    UnsupportedUnitInSizeString: {
      id: 9,
      default: "Unsupported unit in size string"
    }
  };
  i.idCount = Object.keys(e).length;
  const n = Object.values(e);
  function s() {
    if (!A)
      for (let o = 0; o < i.idCount; o++) {
        const l = n[o];
        if (l.id !== o)
          throw new pA("INSI00110", `${o}: ${l.id}`);
        Qe[o] = l.default;
      }
    A = !0;
  }
  i.checkInitialise = s;
})(Is || (Is = {}));
const Qe = new Array(Is.idCount);
var Lr;
(function(i) {
  i.defaultComponentBaseZIndex = "auto", i.defaultComponentDragZIndex = "32", i.defaultComponentStackMaximisedZIndex = "41";
})(Lr || (Lr = {}));
var Es;
(function(i) {
  i.width = "width", i.height = "height";
})(Es || (Es = {}));
var Wt;
(function(i) {
  i.top = "top", i.left = "left", i.right = "right", i.bottom = "bottom";
})(Wt || (Wt = {}));
var Tr;
(function(i) {
  i.base = "base", i.drag = "drag", i.stackMaximised = "stackMaximised";
})(Tr || (Tr = {}));
const CE = {
  base: Lr.defaultComponentBaseZIndex,
  drag: Lr.defaultComponentDragZIndex,
  stackMaximised: Lr.defaultComponentStackMaximisedZIndex
};
var Wh;
(function(i) {
  function A(n) {
    return e(n);
  }
  i.isJson = A;
  function e(n) {
    return !Array.isArray(n) && n !== null && typeof n == "object";
  }
  i.isJsonObject = e;
})(Wh || (Wh = {}));
var M;
(function(i) {
  i.ground = "ground", i.row = "row", i.column = "column", i.stack = "stack", i.component = "component";
})(M || (M = {}));
var Or;
(function(i) {
  i.none = "none", i.always = "always", i.onload = "onload";
})(Or || (Or = {}));
var UA;
(function(i) {
  i.Pixel = "px", i.Percent = "%", i.Fractional = "fr", i.Em = "em";
})(UA || (UA = {}));
(function(i) {
  function A(n) {
    switch (n) {
      case i.Pixel:
        return i.Pixel;
      case i.Percent:
        return i.Percent;
      case i.Fractional:
        return i.Fractional;
      case i.Em:
        return i.Em;
      default:
        return;
    }
  }
  i.tryParse = A;
  function e(n) {
    switch (n) {
      case i.Pixel:
        return i.Pixel;
      case i.Percent:
        return i.Percent;
      case i.Fractional:
        return i.Fractional;
      case i.Em:
        return i.Em;
      default:
        throw new xe("SUEF44998", n);
    }
  }
  i.format = e;
})(UA || (UA = {}));
function CA(i) {
  return i.toString(10) + "px";
}
function Nn(i) {
  const A = i.replace("px", "");
  return parseFloat(A);
}
function mE(i) {
  i = i.trimStart();
  const A = i.length;
  if (A === 0)
    return { numericPart: "", firstNonNumericCharPart: "" };
  {
    let e = A, n = !1;
    for (let l = 0; l < A; l++) {
      const c = i[l];
      if (!QE(c))
        if (c !== ".") {
          e = l;
          break;
        } else if (n) {
          e = l;
          break;
        } else
          n = !0;
    }
    const s = i.substring(0, e), o = i.substring(e).trim();
    return { numericPart: s, firstNonNumericCharPart: o };
  }
}
function QE(i) {
  return i >= "0" && i <= "9";
}
function UE(i) {
  return i.offsetWidth;
}
function be(i, A) {
  const e = CA(A);
  i.style.width = e;
}
function vE(i) {
  return i.offsetHeight;
}
function Se(i, A) {
  const e = CA(A);
  i.style.height = e;
}
function Pt(i) {
  return {
    width: i.offsetWidth,
    height: i.offsetHeight
  };
}
function Vt(i, A) {
  A ? i.style.display = "" : i.style.display = "none";
}
function FE(i) {
  const A = "absolute";
  i.style.position !== A && (i.style.position = A);
}
function an(i, A) {
  if (A !== void 0) {
    for (const e in A)
      if (A.hasOwnProperty(e)) {
        const n = A[e], s = i[e];
        i[e] = Wn(s, n);
      }
  }
  return i;
}
function Wn(i, A) {
  if (typeof A != "object")
    return A;
  if (Array.isArray(A)) {
    const e = A.length, n = new Array(e);
    for (let s = 0; s < e; s++) {
      const o = A[s];
      n[s] = Wn({}, o);
    }
    return n;
  } else {
    if (A === null)
      return null;
    {
      const e = A;
      return i === void 0 ? an({}, e) : typeof i != "object" ? an({}, e) : Array.isArray(i) ? an({}, e) : an(i === null ? {} : i, e);
    }
  }
}
function IE(i, A) {
  const e = A.indexOf(i);
  if (e === -1)
    throw new Error("Can't remove item from array. Item is not in the array");
  A.splice(e, 1);
}
function Zf() {
  return (Math.random() * 1e15).toString(36).replace(".", "");
}
function EE(i) {
  return i instanceof Error ? i.message : typeof i == "string" ? i : "Unknown Error";
}
var Pr;
(function(i) {
  const A = [
    "settings",
    "hasHeaders",
    "constrainDragToContainer",
    "selectionEnabled",
    "dimensions",
    "borderWidth",
    "minItemHeight",
    "minItemWidth",
    "headerHeight",
    "dragProxyWidth",
    "dragProxyHeight",
    "labels",
    "close",
    "maximise",
    "minimise",
    "popout",
    "content",
    "componentType",
    "componentState",
    "id",
    "width",
    "type",
    "height",
    "isClosable",
    "title",
    "popoutWholeStack",
    "openPopouts",
    "parentId",
    "activeItemIndex",
    "reorderEnabled",
    "borderGrabWidth"
    //Maximum 36 entries, do not cross this line!
  ], e = [
    !0,
    !1,
    "row",
    "column",
    "stack",
    "component",
    "close",
    "maximise",
    "minimise",
    "open in new window"
  ];
  function n() {
    if (A.length > 36)
      throw new Error("Too many keys in config minifier map");
  }
  i.checkInitialise = n;
  function s(U, v) {
    const E = {};
    for (const T in U)
      if (U.hasOwnProperty(T)) {
        let S;
        v ? S = c(T) : S = h(T);
        const x = U[T];
        E[S] = l(x, v);
      }
    return E;
  }
  i.translateObject = s;
  function o(U, v) {
    const E = U.length, T = new Array(E);
    for (let S = 0; S < E; S++) {
      const x = U[S];
      T[S] = l(x, v);
    }
    return T;
  }
  function l(U, v) {
    return typeof U == "object" ? U === null ? null : Array.isArray(U) ? o(U, v) : s(U, v) : v ? d(U) : w(U);
  }
  function c(U) {
    if (typeof U == "string" && U.length === 1)
      return "___" + U;
    const v = p(U);
    return v === -1 ? U : v.toString(36);
  }
  function h(U) {
    return U.length === 1 ? A[parseInt(U, 36)] : U.substr(0, 3) === "___" ? U[3] : U;
  }
  function d(U) {
    if (typeof U == "string" && U.length === 1)
      return "___" + U;
    const v = m(U);
    return v === -1 ? U : v.toString(36);
  }
  function w(U) {
    return typeof U == "string" && U.length === 1 ? e[parseInt(U, 36)] : typeof U == "string" && U.substr(0, 3) === "___" ? U[3] : U;
  }
  function p(U) {
    for (let v = 0; v < A.length; v++)
      if (A[v] === U)
        return v;
    return -1;
  }
  function m(U) {
    for (let v = 0; v < e.length; v++)
      if (e[v] === U)
        return v;
    return -1;
  }
})(Pr || (Pr = {}));
var aA;
(function(i) {
  i.defaults = {
    type: M.ground,
    content: [],
    size: 1,
    sizeUnit: UA.Fractional,
    minSize: void 0,
    minSizeUnit: UA.Pixel,
    id: "",
    isClosable: !0
  };
  function A(l, c) {
    switch (l.type) {
      case M.ground:
      case M.row:
      case M.column:
        return zn.createCopy(l, c);
      case M.stack:
        return vt.createCopy(l, c);
      case M.component:
        return zt.createCopy(l);
      default:
        throw new xe("CICC91354", l.type, "Invalid Config Item type specified");
    }
  }
  i.createCopy = A;
  function e(l) {
    switch (l) {
      case M.ground:
        throw new pA("CICCDR91562");
      // Get default root from LayoutConfig
      case M.row:
      case M.column:
        return zn.createDefault(l);
      case M.stack:
        return vt.createDefault();
      case M.component:
        return zt.createDefault();
      default:
        throw new xe("CICCDD91563", l, "Invalid Config Item type specified");
    }
  }
  i.createDefault = e;
  function n(l) {
    return l.type === M.component;
  }
  i.isComponentItem = n;
  function s(l) {
    return l.type === M.stack;
  }
  i.isStackItem = s;
  function o(l) {
    return l.type === M.ground;
  }
  i.isGroundItem = o;
})(aA || (aA = {}));
var We;
(function(i) {
  i.defaultMaximised = !1, function(A) {
    function e(n, s) {
      if (n !== void 0)
        return {
          show: s ?? n.show,
          popout: n.popout,
          close: n.close,
          maximise: n.maximise,
          minimise: n.minimise,
          tabDropdown: n.tabDropdown
        };
    }
    A.createCopy = e;
  }(i.Header || (i.Header = {}));
})(We || (We = {}));
var vt;
(function(i) {
  i.defaultActiveItemIndex = 0;
  function A(s, o) {
    return {
      type: s.type,
      content: e(o !== void 0 ? o : s.content),
      size: s.size,
      sizeUnit: s.sizeUnit,
      minSize: s.minSize,
      minSizeUnit: s.minSizeUnit,
      id: s.id,
      maximised: s.maximised,
      isClosable: s.isClosable,
      activeItemIndex: s.activeItemIndex,
      header: We.Header.createCopy(s.header)
    };
  }
  i.createCopy = A;
  function e(s) {
    const o = s.length, l = new Array(o);
    for (let c = 0; c < o; c++)
      l[c] = aA.createCopy(s[c]);
    return l;
  }
  i.copyContent = e;
  function n() {
    return {
      type: M.stack,
      content: [],
      size: aA.defaults.size,
      sizeUnit: aA.defaults.sizeUnit,
      minSize: aA.defaults.minSize,
      minSizeUnit: aA.defaults.minSizeUnit,
      id: aA.defaults.id,
      maximised: We.defaultMaximised,
      isClosable: aA.defaults.isClosable,
      activeItemIndex: i.defaultActiveItemIndex,
      header: void 0
    };
  }
  i.createDefault = n;
})(vt || (vt = {}));
var zt;
(function(i) {
  i.defaultReorderEnabled = !0;
  function A(o) {
    const l = o.componentType;
    if (typeof l == "string")
      return l;
  }
  i.resolveComponentTypeName = A;
  function e(o) {
    return {
      type: o.type,
      content: [],
      size: o.size,
      sizeUnit: o.sizeUnit,
      minSize: o.minSize,
      minSizeUnit: o.minSizeUnit,
      id: o.id,
      maximised: o.maximised,
      isClosable: o.isClosable,
      reorderEnabled: o.reorderEnabled,
      title: o.title,
      header: We.Header.createCopy(o.header),
      componentType: o.componentType,
      componentState: Wn(void 0, o.componentState)
    };
  }
  i.createCopy = e;
  function n(o = "", l, c = "") {
    return {
      type: M.component,
      content: [],
      size: aA.defaults.size,
      sizeUnit: aA.defaults.sizeUnit,
      minSize: aA.defaults.minSize,
      minSizeUnit: aA.defaults.minSizeUnit,
      id: aA.defaults.id,
      maximised: We.defaultMaximised,
      isClosable: aA.defaults.isClosable,
      reorderEnabled: i.defaultReorderEnabled,
      title: c,
      header: void 0,
      componentType: o,
      componentState: l
    };
  }
  i.createDefault = n;
  function s(o) {
    return Wn({}, o);
  }
  i.copyComponentType = s;
})(zt || (zt = {}));
var zn;
(function(i) {
  function A(o) {
    switch (o.type) {
      case M.row:
      case M.column:
      case M.stack:
      case M.component:
        return !0;
      case M.ground:
        return !1;
      default:
        throw new xe("CROCOSPCICIC13687", o.type);
    }
  }
  i.isChildItemConfig = A;
  function e(o, l) {
    return {
      type: o.type,
      content: n(l !== void 0 ? l : o.content),
      size: o.size,
      sizeUnit: o.sizeUnit,
      minSize: o.minSize,
      minSizeUnit: o.minSizeUnit,
      id: o.id,
      isClosable: o.isClosable
    };
  }
  i.createCopy = e;
  function n(o) {
    const l = o.length, c = new Array(l);
    for (let h = 0; h < l; h++)
      c[h] = aA.createCopy(o[h]);
    return c;
  }
  i.copyContent = n;
  function s(o) {
    return {
      type: o,
      content: [],
      size: aA.defaults.size,
      sizeUnit: aA.defaults.sizeUnit,
      minSize: aA.defaults.minSize,
      minSizeUnit: aA.defaults.minSizeUnit,
      id: aA.defaults.id,
      isClosable: aA.defaults.isClosable
    };
  }
  i.createDefault = s;
})(zn || (zn = {}));
var gn;
(function(i) {
  function A(n) {
    return aA.createCopy(n);
  }
  i.createCopy = A;
  function e(n) {
    switch (n.type) {
      case M.row:
      case M.column:
      case M.stack:
      case M.component:
        return !0;
      case M.ground:
        return !1;
      default:
        throw new xe("CROCOSPCICIC13687", n.type);
    }
  }
  i.isRootItemConfig = e;
})(gn || (gn = {}));
var tl;
(function(i) {
  function A(e) {
    const n = e === void 0 ? [] : [e];
    return {
      type: M.ground,
      content: n,
      size: 100,
      sizeUnit: UA.Percent,
      minSize: 0,
      minSizeUnit: UA.Pixel,
      id: "",
      isClosable: !1,
      title: "",
      reorderEnabled: !1
    };
  }
  i.create = A;
})(tl || (tl = {}));
var AA;
(function(i) {
  (function(c) {
    c.defaults = {
      constrainDragToContainer: !0,
      reorderEnabled: !0,
      popoutWholeStack: !1,
      blockedPopoutsThrowError: !0,
      closePopoutsOnUnload: !0,
      responsiveMode: Or.none,
      tabOverlapAllowance: 0,
      reorderOnTabMenuClick: !0,
      tabControlOffset: 10,
      popInOnClose: !1
    };
    function h(d) {
      return {
        constrainDragToContainer: d.constrainDragToContainer,
        reorderEnabled: d.reorderEnabled,
        popoutWholeStack: d.popoutWholeStack,
        blockedPopoutsThrowError: d.blockedPopoutsThrowError,
        closePopoutsOnUnload: d.closePopoutsOnUnload,
        responsiveMode: d.responsiveMode,
        tabOverlapAllowance: d.tabOverlapAllowance,
        reorderOnTabMenuClick: d.reorderOnTabMenuClick,
        tabControlOffset: d.tabControlOffset,
        popInOnClose: d.popInOnClose
      };
    }
    c.createCopy = h;
  })(i.Settings || (i.Settings = {})), function(c) {
    function h(d) {
      return {
        borderWidth: d.borderWidth,
        borderGrabWidth: d.borderGrabWidth,
        defaultMinItemHeight: d.defaultMinItemHeight,
        defaultMinItemHeightUnit: d.defaultMinItemHeightUnit,
        defaultMinItemWidth: d.defaultMinItemWidth,
        defaultMinItemWidthUnit: d.defaultMinItemWidthUnit,
        headerHeight: d.headerHeight,
        dragProxyWidth: d.dragProxyWidth,
        dragProxyHeight: d.dragProxyHeight
      };
    }
    c.createCopy = h, c.defaults = {
      borderWidth: 5,
      borderGrabWidth: 5,
      defaultMinItemHeight: 0,
      defaultMinItemHeightUnit: UA.Pixel,
      defaultMinItemWidth: 10,
      defaultMinItemWidthUnit: UA.Pixel,
      headerHeight: 20,
      dragProxyWidth: 300,
      dragProxyHeight: 200
    };
  }(i.Dimensions || (i.Dimensions = {})), function(c) {
    function h(d) {
      return {
        show: d.show,
        popout: d.popout,
        dock: d.dock,
        close: d.close,
        maximise: d.maximise,
        minimise: d.minimise,
        tabDropdown: d.tabDropdown
      };
    }
    c.createCopy = h, c.defaults = {
      show: Wt.top,
      popout: "open in new window",
      dock: "dock",
      maximise: "maximise",
      minimise: "minimise",
      close: "close",
      tabDropdown: "additional tabs"
    };
  }(i.Header || (i.Header = {}));
  function A(c) {
    return "parentId" in c;
  }
  i.isPopout = A;
  function e() {
    return {
      root: void 0,
      openPopouts: [],
      dimensions: i.Dimensions.defaults,
      settings: i.Settings.defaults,
      header: i.Header.defaults,
      resolved: !0
    };
  }
  i.createDefault = e;
  function n(c) {
    return A(c) ? Gr.createCopy(c) : {
      root: c.root === void 0 ? void 0 : gn.createCopy(c.root),
      openPopouts: i.copyOpenPopouts(c.openPopouts),
      settings: i.Settings.createCopy(c.settings),
      dimensions: i.Dimensions.createCopy(c.dimensions),
      header: i.Header.createCopy(c.header),
      resolved: c.resolved
    };
  }
  i.createCopy = n;
  function s(c) {
    const h = c.length, d = new Array(h);
    for (let w = 0; w < h; w++)
      d[w] = Gr.createCopy(c[w]);
    return d;
  }
  i.copyOpenPopouts = s;
  function o(c) {
    return Pr.translateObject(c, !0);
  }
  i.minifyConfig = o;
  function l(c) {
    return Pr.translateObject(c, !1);
  }
  i.unminifyConfig = l;
})(AA || (AA = {}));
var Gr;
(function(i) {
  (function(e) {
    function n(s) {
      return {
        width: s.width,
        height: s.height,
        left: s.left,
        top: s.top
      };
    }
    e.createCopy = n, e.defaults = {
      width: null,
      height: null,
      left: null,
      top: null
    };
  })(i.Window || (i.Window = {}));
  function A(e) {
    return {
      root: e.root === void 0 ? void 0 : gn.createCopy(e.root),
      openPopouts: AA.copyOpenPopouts(e.openPopouts),
      settings: AA.Settings.createCopy(e.settings),
      dimensions: AA.Dimensions.createCopy(e.dimensions),
      header: AA.Header.createCopy(e.header),
      parentId: e.parentId,
      indexInParent: e.indexInParent,
      window: i.Window.createCopy(e.window),
      resolved: e.resolved
    };
  }
  i.createCopy = A;
})(Gr || (Gr = {}));
var GA;
(function(i) {
  function A(m, U) {
    switch (m.type) {
      case M.ground:
        throw new fn("ItemConfig cannot specify type ground", JSON.stringify(m));
      case M.row:
      case M.column:
        return _s.resolve(m, U);
      case M.stack:
        return Nr.resolve(m, U);
      case M.component:
        return Xt.resolve(m, U);
      default:
        throw new xe("UCUICR55499", m.type);
    }
  }
  i.resolve = A;
  function e(m) {
    if (m === void 0)
      return [];
    {
      const U = m.length, v = new Array(U);
      for (let E = 0; E < U; E++)
        v[E] = i.resolve(m[E], !1);
      return v;
    }
  }
  i.resolveContent = e;
  function n(m) {
    return m === void 0 ? aA.defaults.id : Array.isArray(m) ? m.length === 0 ? aA.defaults.id : m[0] : m;
  }
  i.resolveId = n;
  function s(m, U, v, E) {
    if (m !== void 0)
      return ys(m, [UA.Percent, UA.Fractional]);
    if (U !== void 0 || v !== void 0) {
      if (U !== void 0)
        return { size: U, sizeUnit: UA.Percent };
      if (v !== void 0)
        return { size: v, sizeUnit: UA.Percent };
      throw new tA("CRS33390");
    } else
      return E ? { size: 50, sizeUnit: UA.Percent } : { size: aA.defaults.size, sizeUnit: aA.defaults.sizeUnit };
  }
  i.resolveSize = s;
  function o(m, U, v) {
    if (m !== void 0)
      return ys(m, [UA.Pixel]);
    {
      const E = U !== void 0;
      return E || v !== void 0 ? E ? { size: U, sizeUnit: UA.Pixel } : { size: v, sizeUnit: UA.Pixel } : { size: aA.defaults.minSize, sizeUnit: aA.defaults.minSizeUnit };
    }
  }
  i.resolveMinSize = o;
  function l(m) {
    return m.size !== void 0 ? 1 : m.width !== void 0 || m.height !== void 0 ? 2 : 0;
  }
  i.calculateSizeWidthHeightSpecificationType = l;
  function c(m) {
    return m.type === M.ground;
  }
  i.isGround = c;
  function h(m) {
    return m.type === M.row;
  }
  i.isRow = h;
  function d(m) {
    return m.type === M.column;
  }
  i.isColumn = d;
  function w(m) {
    return m.type === M.stack;
  }
  i.isStack = w;
  function p(m) {
    return m.type === M.component;
  }
  i.isComponent = p;
})(GA || (GA = {}));
var Xn;
(function(i) {
  const A = "__glMaximised";
  (function(n) {
    function s(o, l) {
      var c;
      if (!(o === void 0 && l === void 0))
        return {
          show: (c = o == null ? void 0 : o.show) !== null && c !== void 0 ? c : l === void 0 ? void 0 : l ? AA.Header.defaults.show : !1,
          popout: o == null ? void 0 : o.popout,
          maximise: o == null ? void 0 : o.maximise,
          close: o == null ? void 0 : o.close,
          minimise: o == null ? void 0 : o.minimise,
          tabDropdown: o == null ? void 0 : o.tabDropdown
        };
    }
    n.resolve = s;
  })(i.Header || (i.Header = {}));
  function e(n) {
    let s, o = n.id, l = !1;
    if (o === void 0)
      s = aA.defaults.id;
    else if (Array.isArray(o)) {
      const h = o.findIndex((d) => d === A);
      h > 0 && (l = !0, o = o.splice(h, 1)), o.length > 0 ? s = o[0] : s = aA.defaults.id;
    } else
      s = o;
    let c;
    return n.maximised !== void 0 ? c = n.maximised : c = l, { id: s, maximised: c };
  }
  i.resolveIdAndMaximised = e;
})(Xn || (Xn = {}));
var Nr;
(function(i) {
  function A(o, l) {
    var c, h;
    const { id: d, maximised: w } = Xn.resolveIdAndMaximised(o), { size: p, sizeUnit: m } = GA.resolveSize(o.size, o.width, o.height, l), { size: U, sizeUnit: v } = GA.resolveMinSize(o.minSize, o.minWidth, o.minHeight);
    return {
      type: M.stack,
      content: n(o.content),
      size: p,
      sizeUnit: m,
      minSize: U,
      minSizeUnit: v,
      id: d,
      maximised: w,
      isClosable: (c = o.isClosable) !== null && c !== void 0 ? c : aA.defaults.isClosable,
      activeItemIndex: (h = o.activeItemIndex) !== null && h !== void 0 ? h : vt.defaultActiveItemIndex,
      header: Xn.Header.resolve(o.header, o.hasHeaders)
    };
  }
  i.resolve = A;
  function e(o) {
    return {
      type: M.stack,
      content: s(o.content),
      size: Vr(o.size, o.sizeUnit),
      minSize: ul(o.minSize, o.minSizeUnit),
      id: o.id,
      maximised: o.maximised,
      isClosable: o.isClosable,
      activeItemIndex: o.activeItemIndex,
      header: We.Header.createCopy(o.header)
    };
  }
  i.fromResolved = e;
  function n(o) {
    if (o === void 0)
      return [];
    {
      const l = o.length, c = new Array(l);
      for (let h = 0; h < l; h++) {
        const d = o[h], w = GA.resolve(d, !1);
        if (aA.isComponentItem(w))
          c[h] = w;
        else
          throw new pA("UCUSICRC91114", JSON.stringify(w));
      }
      return c;
    }
  }
  function s(o) {
    const l = o.length, c = new Array(l);
    for (let h = 0; h < l; h++) {
      const d = o[h];
      c[h] = Xt.fromResolved(d);
    }
    return c;
  }
})(Nr || (Nr = {}));
var Xt;
(function(i) {
  function A(s, o) {
    var l, c, h;
    let d = s.componentType;
    if (d === void 0 && (d = s.componentName), d === void 0)
      throw new Error("ComponentItemConfig.componentType is undefined");
    {
      const { id: w, maximised: p } = Xn.resolveIdAndMaximised(s);
      let m;
      s.title === void 0 || s.title === "" ? m = i.componentTypeToTitle(d) : m = s.title;
      const { size: U, sizeUnit: v } = GA.resolveSize(s.size, s.width, s.height, o), { size: E, sizeUnit: T } = GA.resolveMinSize(s.minSize, s.minWidth, s.minHeight);
      return {
        type: s.type,
        content: [],
        size: U,
        sizeUnit: v,
        minSize: E,
        minSizeUnit: T,
        id: w,
        maximised: p,
        isClosable: (l = s.isClosable) !== null && l !== void 0 ? l : aA.defaults.isClosable,
        reorderEnabled: (c = s.reorderEnabled) !== null && c !== void 0 ? c : zt.defaultReorderEnabled,
        title: m,
        header: Xn.Header.resolve(s.header, s.hasHeaders),
        componentType: d,
        componentState: (h = s.componentState) !== null && h !== void 0 ? h : {}
      };
    }
  }
  i.resolve = A;
  function e(s) {
    return {
      type: M.component,
      size: Vr(s.size, s.sizeUnit),
      minSize: ul(s.minSize, s.minSizeUnit),
      id: s.id,
      maximised: s.maximised,
      isClosable: s.isClosable,
      reorderEnabled: s.reorderEnabled,
      title: s.title,
      header: We.Header.createCopy(s.header),
      componentType: s.componentType,
      componentState: Wn(void 0, s.componentState)
    };
  }
  i.fromResolved = e;
  function n(s) {
    switch (typeof s) {
      case "string":
        return s;
      case "number":
        return s.toString();
      case "boolean":
        return s.toString();
      default:
        return "";
    }
  }
  i.componentTypeToTitle = n;
})(Xt || (Xt = {}));
var _s;
(function(i) {
  function A(l) {
    switch (l.type) {
      case M.row:
      case M.column:
      case M.stack:
      case M.component:
        return !0;
      case M.ground:
        return !1;
      default:
        throw new xe("UROCOSPCICIC13687", l.type);
    }
  }
  i.isChildItemConfig = A;
  function e(l, c) {
    var h;
    const { size: d, sizeUnit: w } = GA.resolveSize(l.size, l.width, l.height, c), { size: p, sizeUnit: m } = GA.resolveMinSize(l.minSize, l.minWidth, l.minHeight);
    return {
      type: l.type,
      content: i.resolveContent(l.content),
      size: d,
      sizeUnit: w,
      minSize: p,
      minSizeUnit: m,
      id: GA.resolveId(l.id),
      isClosable: (h = l.isClosable) !== null && h !== void 0 ? h : aA.defaults.isClosable
    };
  }
  i.resolve = e;
  function n(l) {
    return {
      type: l.type,
      content: o(l.content),
      size: Vr(l.size, l.sizeUnit),
      minSize: ul(l.minSize, l.minSizeUnit),
      id: l.id,
      isClosable: l.isClosable
    };
  }
  i.fromResolved = n;
  function s(l) {
    if (l === void 0)
      return [];
    {
      const c = l.length, h = new Array(c);
      let d = !1, w = !1;
      for (let U = 0; U < c; U++) {
        const v = l[U];
        if (i.isChildItemConfig(v)) {
          if (!w) {
            const E = GA.calculateSizeWidthHeightSpecificationType(v);
            switch (E) {
              case 0:
                break;
              case 2:
                d = !0;
                break;
              case 1:
                w = !0;
                break;
              default:
                throw new xe("ROCICRC87556", E);
            }
          }
          h[U] = v;
        } else
          throw new fn("ItemConfig is not Row, Column or Stack", v);
      }
      let p;
      w ? p = !1 : d ? p = !0 : p = !1;
      const m = new Array(c);
      for (let U = 0; U < c; U++) {
        const v = h[U], E = GA.resolve(v, p);
        if (zn.isChildItemConfig(E))
          m[U] = E;
        else
          throw new pA("UROCOSPIC99512", JSON.stringify(E));
      }
      return m;
    }
  }
  i.resolveContent = s;
  function o(l) {
    const c = l.length, h = new Array(c);
    for (let d = 0; d < c; d++) {
      const w = l[d], p = w.type;
      let m;
      switch (p) {
        case M.row:
        case M.column:
          m = i.fromResolved(w);
          break;
        case M.stack:
          m = Nr.fromResolved(w);
          break;
        case M.component:
          m = Xt.fromResolved(w);
          break;
        default:
          throw new xe("ROCICFRC44797", p);
      }
      h[d] = m;
    }
    return h;
  }
})(_s || (_s = {}));
var Jn;
(function(i) {
  function A(s) {
    switch (s.type) {
      case M.row:
      case M.column:
      case M.stack:
      case M.component:
        return !0;
      case M.ground:
        return !1;
      default:
        throw new xe("URICIR23687", s.type);
    }
  }
  i.isRootItemConfig = A;
  function e(s) {
    if (s !== void 0) {
      const o = GA.resolve(s, !1);
      if (gn.isRootItemConfig(o))
        return o;
      throw new fn("ItemConfig is not Row, Column or Stack", JSON.stringify(s));
    }
  }
  i.resolve = e;
  function n(s) {
    if (s !== void 0) {
      const o = s.type;
      switch (o) {
        case M.row:
        case M.column:
          return _s.fromResolved(s);
        case M.stack:
          return Nr.fromResolved(s);
        case M.component:
          return Xt.fromResolved(s);
        default:
          throw new xe("RICFROU89921", o);
      }
    }
  }
  i.fromResolvedOrUndefined = n;
})(Jn || (Jn = {}));
var ce;
(function(i) {
  (function(l) {
    function c(h) {
      var d, w, p, m, U, v, E, T, S, x;
      return {
        constrainDragToContainer: (d = h == null ? void 0 : h.constrainDragToContainer) !== null && d !== void 0 ? d : AA.Settings.defaults.constrainDragToContainer,
        reorderEnabled: (w = h == null ? void 0 : h.reorderEnabled) !== null && w !== void 0 ? w : AA.Settings.defaults.reorderEnabled,
        popoutWholeStack: (p = h == null ? void 0 : h.popoutWholeStack) !== null && p !== void 0 ? p : AA.Settings.defaults.popoutWholeStack,
        blockedPopoutsThrowError: (m = h == null ? void 0 : h.blockedPopoutsThrowError) !== null && m !== void 0 ? m : AA.Settings.defaults.blockedPopoutsThrowError,
        closePopoutsOnUnload: (U = h == null ? void 0 : h.closePopoutsOnUnload) !== null && U !== void 0 ? U : AA.Settings.defaults.closePopoutsOnUnload,
        responsiveMode: (v = h == null ? void 0 : h.responsiveMode) !== null && v !== void 0 ? v : AA.Settings.defaults.responsiveMode,
        tabOverlapAllowance: (E = h == null ? void 0 : h.tabOverlapAllowance) !== null && E !== void 0 ? E : AA.Settings.defaults.tabOverlapAllowance,
        reorderOnTabMenuClick: (T = h == null ? void 0 : h.reorderOnTabMenuClick) !== null && T !== void 0 ? T : AA.Settings.defaults.reorderOnTabMenuClick,
        tabControlOffset: (S = h == null ? void 0 : h.tabControlOffset) !== null && S !== void 0 ? S : AA.Settings.defaults.tabControlOffset,
        popInOnClose: (x = h == null ? void 0 : h.popInOnClose) !== null && x !== void 0 ? x : AA.Settings.defaults.popInOnClose
      };
    }
    l.resolve = c;
  })(i.Settings || (i.Settings = {})), function(l) {
    function c(p) {
      var m, U, v, E, T;
      const { size: S, sizeUnit: x } = l.resolveDefaultMinItemHeight(p), { size: Y, sizeUnit: X } = l.resolveDefaultMinItemWidth(p);
      return {
        borderWidth: (m = p == null ? void 0 : p.borderWidth) !== null && m !== void 0 ? m : AA.Dimensions.defaults.borderWidth,
        borderGrabWidth: (U = p == null ? void 0 : p.borderGrabWidth) !== null && U !== void 0 ? U : AA.Dimensions.defaults.borderGrabWidth,
        defaultMinItemHeight: S,
        defaultMinItemHeightUnit: x,
        defaultMinItemWidth: Y,
        defaultMinItemWidthUnit: X,
        headerHeight: (v = p == null ? void 0 : p.headerHeight) !== null && v !== void 0 ? v : AA.Dimensions.defaults.headerHeight,
        dragProxyWidth: (E = p == null ? void 0 : p.dragProxyWidth) !== null && E !== void 0 ? E : AA.Dimensions.defaults.dragProxyWidth,
        dragProxyHeight: (T = p == null ? void 0 : p.dragProxyHeight) !== null && T !== void 0 ? T : AA.Dimensions.defaults.dragProxyHeight
      };
    }
    l.resolve = c;
    function h(p) {
      return {
        borderWidth: p.borderWidth,
        borderGrabWidth: p.borderGrabWidth,
        defaultMinItemHeight: Vr(p.defaultMinItemHeight, p.defaultMinItemHeightUnit),
        defaultMinItemWidth: Vr(p.defaultMinItemWidth, p.defaultMinItemWidthUnit),
        headerHeight: p.headerHeight,
        dragProxyWidth: p.dragProxyWidth,
        dragProxyHeight: p.dragProxyHeight
      };
    }
    l.fromResolved = h;
    function d(p) {
      const m = p == null ? void 0 : p.defaultMinItemHeight;
      return m === void 0 ? { size: AA.Dimensions.defaults.defaultMinItemHeight, sizeUnit: AA.Dimensions.defaults.defaultMinItemHeightUnit } : ys(m, [UA.Pixel]);
    }
    l.resolveDefaultMinItemHeight = d;
    function w(p) {
      const m = p == null ? void 0 : p.defaultMinItemWidth;
      return m === void 0 ? { size: AA.Dimensions.defaults.defaultMinItemWidth, sizeUnit: AA.Dimensions.defaults.defaultMinItemWidthUnit } : ys(m, [UA.Pixel]);
    }
    l.resolveDefaultMinItemWidth = w;
  }(i.Dimensions || (i.Dimensions = {})), function(l) {
    function c(h, d, w) {
      var p, m, U, v, E, T, S, x, Y, X, K, D;
      let z;
      return (h == null ? void 0 : h.show) !== void 0 ? z = h.show : d !== void 0 && d.hasHeaders !== void 0 ? z = d.hasHeaders ? AA.Header.defaults.show : !1 : z = AA.Header.defaults.show, {
        show: z,
        popout: (m = (p = h == null ? void 0 : h.popout) !== null && p !== void 0 ? p : w == null ? void 0 : w.popout) !== null && m !== void 0 ? m : (d == null ? void 0 : d.showPopoutIcon) === !1 ? !1 : AA.Header.defaults.popout,
        dock: (v = (U = h == null ? void 0 : h.popin) !== null && U !== void 0 ? U : w == null ? void 0 : w.popin) !== null && v !== void 0 ? v : AA.Header.defaults.dock,
        maximise: (T = (E = h == null ? void 0 : h.maximise) !== null && E !== void 0 ? E : w == null ? void 0 : w.maximise) !== null && T !== void 0 ? T : (d == null ? void 0 : d.showMaximiseIcon) === !1 ? !1 : AA.Header.defaults.maximise,
        close: (x = (S = h == null ? void 0 : h.close) !== null && S !== void 0 ? S : w == null ? void 0 : w.close) !== null && x !== void 0 ? x : (d == null ? void 0 : d.showCloseIcon) === !1 ? !1 : AA.Header.defaults.close,
        minimise: (X = (Y = h == null ? void 0 : h.minimise) !== null && Y !== void 0 ? Y : w == null ? void 0 : w.minimise) !== null && X !== void 0 ? X : AA.Header.defaults.minimise,
        tabDropdown: (D = (K = h == null ? void 0 : h.tabDropdown) !== null && K !== void 0 ? K : w == null ? void 0 : w.tabDropdown) !== null && D !== void 0 ? D : AA.Header.defaults.tabDropdown
      };
    }
    l.resolve = c;
  }(i.Header || (i.Header = {}));
  function A(l) {
    return "parentId" in l || "indexInParent" in l || "window" in l;
  }
  i.isPopout = A;
  function e(l) {
    if (A(l))
      return Dr.resolve(l);
    {
      let c;
      return l.root !== void 0 ? c = l.root : l.content !== void 0 && l.content.length > 0 ? c = l.content[0] : c = void 0, {
        resolved: !0,
        root: Jn.resolve(c),
        openPopouts: i.resolveOpenPopouts(l.openPopouts),
        dimensions: i.Dimensions.resolve(l.dimensions),
        settings: i.Settings.resolve(l.settings),
        header: i.Header.resolve(l.header, l.settings, l.labels)
      };
    }
  }
  i.resolve = e;
  function n(l) {
    return {
      root: Jn.fromResolvedOrUndefined(l.root),
      openPopouts: Dr.fromResolvedArray(l.openPopouts),
      settings: AA.Settings.createCopy(l.settings),
      dimensions: i.Dimensions.fromResolved(l.dimensions),
      header: AA.Header.createCopy(l.header)
    };
  }
  i.fromResolved = n;
  function s(l) {
    const c = l;
    return c.resolved !== void 0 && c.resolved === !0;
  }
  i.isResolved = s;
  function o(l) {
    if (l === void 0)
      return [];
    {
      const c = l.length, h = new Array(c);
      for (let d = 0; d < c; d++)
        h[d] = Dr.resolve(l[d]);
      return h;
    }
  }
  i.resolveOpenPopouts = o;
})(ce || (ce = {}));
var Dr;
(function(i) {
  (function(s) {
    function o(c, h) {
      var d, w, p, m, U, v, E, T;
      let S;
      const x = Gr.Window.defaults;
      return c !== void 0 ? S = {
        width: (d = c.width) !== null && d !== void 0 ? d : x.width,
        height: (w = c.height) !== null && w !== void 0 ? w : x.height,
        left: (p = c.left) !== null && p !== void 0 ? p : x.left,
        top: (m = c.top) !== null && m !== void 0 ? m : x.top
      } : S = {
        width: (U = h == null ? void 0 : h.width) !== null && U !== void 0 ? U : x.width,
        height: (v = h == null ? void 0 : h.height) !== null && v !== void 0 ? v : x.height,
        left: (E = h == null ? void 0 : h.left) !== null && E !== void 0 ? E : x.left,
        top: (T = h == null ? void 0 : h.top) !== null && T !== void 0 ? T : x.top
      }, S;
    }
    s.resolve = o;
    function l(c) {
      return {
        width: c.width === null ? void 0 : c.width,
        height: c.height === null ? void 0 : c.height,
        left: c.left === null ? void 0 : c.left,
        top: c.top === null ? void 0 : c.top
      };
    }
    s.fromResolved = l;
  })(i.Window || (i.Window = {}));
  function A(s) {
    var o, l;
    let c;
    return s.root !== void 0 ? c = s.root : s.content !== void 0 && s.content.length > 0 ? c = s.content[0] : c = void 0, {
      root: Jn.resolve(c),
      openPopouts: ce.resolveOpenPopouts(s.openPopouts),
      dimensions: ce.Dimensions.resolve(s.dimensions),
      settings: ce.Settings.resolve(s.settings),
      header: ce.Header.resolve(s.header, s.settings, s.labels),
      parentId: (o = s.parentId) !== null && o !== void 0 ? o : null,
      indexInParent: (l = s.indexInParent) !== null && l !== void 0 ? l : null,
      window: i.Window.resolve(s.window, s.dimensions),
      resolved: !0
    };
  }
  i.resolve = A;
  function e(s) {
    return {
      root: Jn.fromResolvedOrUndefined(s.root),
      openPopouts: n(s.openPopouts),
      dimensions: ce.Dimensions.fromResolved(s.dimensions),
      settings: AA.Settings.createCopy(s.settings),
      header: AA.Header.createCopy(s.header),
      parentId: s.parentId,
      indexInParent: s.indexInParent,
      window: i.Window.fromResolved(s.window)
    };
  }
  i.fromResolved = e;
  function n(s) {
    const o = s.length, l = new Array(o);
    for (let c = 0; c < o; c++) {
      const h = s[c];
      l[c] = i.fromResolved(h);
    }
    return l;
  }
  i.fromResolvedArray = n;
})(Dr || (Dr = {}));
function ys(i, A) {
  const { numericPart: e, firstNonNumericCharPart: n } = mE(i), s = Number.parseInt(e, 10);
  if (isNaN(s))
    throw new fn(`${Qe[
      7
      /* InvalidNumberPartInSizeString */
    ]}: ${i}`);
  {
    const o = UA.tryParse(n);
    if (o === void 0)
      throw new fn(`${Qe[
        8
        /* UnknownUnitInSizeString */
      ]}: ${i}`);
    if (A.includes(o))
      return { size: s, sizeUnit: o };
    throw new fn(`${Qe[
      9
      /* UnsupportedUnitInSizeString */
    ]}: ${i}`);
  }
}
function Vr(i, A) {
  return i.toString(10) + UA.format(A);
}
function ul(i, A) {
  if (i !== void 0)
    return i.toString(10) + UA.format(A);
}
class zA {
  constructor() {
    this._allEventSubscriptions = [], this._subscriptionsMap = /* @__PURE__ */ new Map(), this.unbind = this.removeEventListener, this.trigger = this.emit;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tryBubbleEvent(A, e) {
  }
  /**
   * Emit an event and notify listeners
   *
   * @param eventName - The name of the event
   * @param args - Additional arguments that will be passed to the listener
   */
  emit(A, ...e) {
    let n = this._subscriptionsMap.get(A);
    if (n !== void 0) {
      n = n.slice();
      for (let s = 0; s < n.length; s++) {
        const o = n[s];
        o(...e);
      }
    }
    this.emitAllEvent(A, e), this.tryBubbleEvent(A, e);
  }
  /** @internal */
  emitUnknown(A, ...e) {
    let n = this._subscriptionsMap.get(A);
    if (n !== void 0) {
      n = n.slice();
      for (let s = 0; s < n.length; s++)
        n[s](...e);
    }
    this.emitAllEvent(A, e), this.tryBubbleEvent(A, e);
  }
  /* @internal **/
  emitBaseBubblingEvent(A) {
    const e = new zA.BubblingEvent(A, this);
    this.emitUnknown(A, e);
  }
  /** @internal */
  emitUnknownBubblingEvent(A) {
    const e = new zA.BubblingEvent(A, this);
    this.emitUnknown(A, e);
  }
  /**
   * Removes a listener for an event.
   * @param eventName - The name of the event
   * @param callback - The previously registered callback method (optional)
   */
  removeEventListener(A, e) {
    const n = e;
    this.removeUnknownEventListener(A, n);
  }
  off(A, e) {
    this.removeEventListener(A, e);
  }
  /**
   * Listen for events
   *
   * @param eventName - The name of the event to listen to
   * @param callback - The callback to execute when the event occurs
   */
  addEventListener(A, e) {
    const n = e;
    this.addUnknownEventListener(A, n);
  }
  on(A, e) {
    this.addEventListener(A, e);
  }
  /** @internal */
  addUnknownEventListener(A, e) {
    if (A === zA.ALL_EVENT)
      this._allEventSubscriptions.push(e);
    else {
      let n = this._subscriptionsMap.get(A);
      n !== void 0 ? n.push(e) : (n = [e], this._subscriptionsMap.set(A, n));
    }
  }
  /** @internal */
  removeUnknownEventListener(A, e) {
    if (A === zA.ALL_EVENT)
      this.removeSubscription(A, this._allEventSubscriptions, e);
    else {
      const n = this._subscriptionsMap.get(A);
      if (n === void 0)
        throw new Error("No subscribtions to unsubscribe for event " + A);
      this.removeSubscription(A, n, e);
    }
  }
  /** @internal */
  removeSubscription(A, e, n) {
    const s = e.indexOf(n);
    if (s < 0)
      throw new Error("Nothing to unbind for " + A);
    e.splice(s, 1);
  }
  /** @internal */
  emitAllEvent(A, e) {
    const n = this._allEventSubscriptions.length;
    if (n > 0) {
      const s = e.slice();
      s.unshift(A);
      const o = this._allEventSubscriptions.slice();
      for (let l = 0; l < n; l++)
        o[l](...s);
    }
  }
}
(function(i) {
  i.ALL_EVENT = "__all", i.headerClickEventName = "stackHeaderClick", i.headerTouchStartEventName = "stackHeaderTouchStart";
  class A {
    /** @internal */
    constructor(o, l) {
      this._name = o, this._target = l, this._isPropagationStopped = !1;
    }
    get name() {
      return this._name;
    }
    get target() {
      return this._target;
    }
    /** @deprecated Use {@link (EventEmitter:namespace).(BubblingEvent:class).target} instead */
    get origin() {
      return this._target;
    }
    get isPropagationStopped() {
      return this._isPropagationStopped;
    }
    stopPropagation() {
      this._isPropagationStopped = !0;
    }
  }
  i.BubblingEvent = A;
  class e extends A {
    /** @internal */
    constructor(o, l, c) {
      super(o, l), this._mouseEvent = c;
    }
    get mouseEvent() {
      return this._mouseEvent;
    }
  }
  i.ClickBubblingEvent = e;
  class n extends A {
    /** @internal */
    constructor(o, l, c) {
      super(o, l), this._touchEvent = c;
    }
    get touchEvent() {
      return this._touchEvent;
    }
  }
  i.TouchStartBubblingEvent = n;
})(zA || (zA = {}));
class _E extends zA {
  /** @internal */
  constructor(A, e, n, s, o, l, c, h, d) {
    super(), this._config = A, this._parent = e, this._layoutManager = n, this._element = s, this._updateItemConfigEvent = o, this._showEvent = l, this._hideEvent = c, this._focusEvent = h, this._blurEvent = d, this._stackMaximised = !1, this._width = 0, this._height = 0, this._visible = !0, this._isShownWithZeroDimensions = !0, this._componentType = A.componentType, this._isClosable = A.isClosable, this._initialState = A.componentState, this._state = this._initialState, this._boundComponent = this.layoutManager.bindComponent(this, A), this.updateElementPositionPropertyFromBoundComponent();
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get parent() {
    return this._parent;
  }
  /** @internal @deprecated use {@link (ComponentContainer:class).componentType} */
  get componentName() {
    return this._componentType;
  }
  get componentType() {
    return this._componentType;
  }
  get virtual() {
    return this._boundComponent.virtual;
  }
  get component() {
    return this._boundComponent.component;
  }
  get tab() {
    return this._tab;
  }
  get title() {
    return this._parent.title;
  }
  get layoutManager() {
    return this._layoutManager;
  }
  get isHidden() {
    return !this._visible;
  }
  get visible() {
    return this._visible;
  }
  get state() {
    return this._state;
  }
  /** Return the initial component state */
  get initialState() {
    return this._initialState;
  }
  /** The inner DOM element where the container's content is intended to live in */
  get element() {
    return this._element;
  }
  /** @internal */
  destroy() {
    this.releaseComponent(), this.stateRequestEvent = void 0, this.emit("destroy");
  }
  /** @deprecated use {@link (ComponentContainer:class).element } */
  getElement() {
    return this._element;
  }
  /**
   * Hides the container's component item (and hence, the container) if not already hidden.
   * Emits hide event prior to hiding the container.
   */
  hide() {
    this._hideEvent();
  }
  /**
   * Shows the container's component item (and hence, the container) if not visible.
   * Emits show event prior to hiding the container.
   */
  show() {
    this._showEvent();
  }
  /**
   * Focus this component in Layout.
   */
  focus(A = !1) {
    this._focusEvent(A);
  }
  /**
   * Remove focus from this component in Layout.
   */
  blur(A = !1) {
    this._blurEvent(A);
  }
  /**
   * Set the size from within the container. Traverses up
   * the item tree until it finds a row or column element
   * and resizes its items accordingly.
   *
   * If this container isn't a descendant of a row or column
   * it returns false
   * @param width - The new width in pixel
   * @param height - The new height in pixel
   *
   * @returns resizeSuccesful
   *
   * @internal
   */
  setSize(A, e) {
    let n = this._parent;
    if (n.isColumn || n.isRow || n.parent === null)
      throw new pA("ICSSPRC", "ComponentContainer cannot have RowColumn Parent");
    {
      let s;
      do
        s = n, n = n.parent;
      while (n !== null && !n.isColumn && !n.isRow);
      if (n === null)
        return !1;
      {
        const o = n.isColumn ? "height" : "width", l = this[o];
        if (l === null)
          throw new TA("ICSSCS11194");
        {
          const c = o === "height" ? e : A, h = l * (1 / (s.size / 100)), d = c / h * 100, w = (s.size - d) / (n.contentItems.length - 1);
          for (let p = 0; p < n.contentItems.length; p++) {
            const m = n.contentItems[p];
            m === s ? m.size = d : m.size += w;
          }
          return n.updateSize(!1), !0;
        }
      }
    }
  }
  /**
   * Closes the container if it is closable. Can be called by
   * both the component within at as well as the contentItem containing
   * it. Emits a close event before the container itself is closed.
   */
  close() {
    this._isClosable && (this.emit("close"), this._parent.close());
  }
  /** Replaces component without affecting layout */
  replaceComponent(A) {
    if (this.releaseComponent(), GA.isComponent(A)) {
      const e = Xt.resolve(A, !1);
      if (this._initialState = e.componentState, this._state = this._initialState, this._componentType = e.componentType, this._updateItemConfigEvent(e), this._boundComponent = this.layoutManager.bindComponent(this, e), this.updateElementPositionPropertyFromBoundComponent(), this._boundComponent.virtual) {
        if (this.virtualVisibilityChangeRequiredEvent !== void 0 && this.virtualVisibilityChangeRequiredEvent(this, this._visible), this.virtualRectingRequiredEvent !== void 0) {
          this._layoutManager.fireBeforeVirtualRectingEvent(1);
          try {
            this.virtualRectingRequiredEvent(this, this._width, this._height);
          } finally {
            this._layoutManager.fireAfterVirtualRectingEvent();
          }
        }
        this.setBaseLogicalZIndex();
      }
      this.emit("stateChanged");
    } else
      throw new Error("ReplaceComponent not passed a component ItemConfig");
  }
  /**
   * Returns the initial component state or the latest passed in setState()
   * @returns state
   * @deprecated Use {@link (ComponentContainer:class).initialState}
   */
  getState() {
    return this._state;
  }
  /**
   * Merges the provided state into the current one
   * @deprecated Use {@link (ComponentContainer:class).stateRequestEvent}
   */
  extendState(A) {
    const e = an(this._state, A);
    this.setState(e);
  }
  /**
   * Sets the component state
   * @deprecated Use {@link (ComponentContainer:class).stateRequestEvent}
   */
  setState(A) {
    this._state = A, this._parent.emitBaseBubblingEvent("stateChanged");
  }
  /**
   * Set's the components title
   */
  setTitle(A) {
    this._parent.setTitle(A);
  }
  /** @internal */
  setTab(A) {
    this._tab = A, this.emit("tab", A);
  }
  /** @internal */
  setVisibility(A) {
    this._boundComponent.virtual && this.virtualVisibilityChangeRequiredEvent !== void 0 && this.virtualVisibilityChangeRequiredEvent(this, A), A ? this._visible ? this._isShownWithZeroDimensions && (this._height !== 0 || this._width !== 0) && (this._isShownWithZeroDimensions = !1, this.setSizeToNodeSize(this._width, this._height, !0), this.emitShow()) : (this._visible = !0, this._height === 0 && this._width === 0 ? this._isShownWithZeroDimensions = !0 : (this._isShownWithZeroDimensions = !1, this.setSizeToNodeSize(this._width, this._height, !0), this.emitShow())) : this._visible && (this._visible = !1, this._isShownWithZeroDimensions = !1, this.emitHide());
  }
  setBaseLogicalZIndex() {
    this.setLogicalZIndex(Tr.base);
  }
  setLogicalZIndex(A) {
    A !== this._logicalZIndex && (this._logicalZIndex = A, this.notifyVirtualZIndexChangeRequired());
  }
  /**
   * Set the container's size, but considered temporary (for dragging)
   * so don't emit any events.
   * @internal
   */
  enterDragMode(A, e) {
    this._width = A, this._height = e, be(this._element, A), Se(this._element, e), this.setLogicalZIndex(Tr.drag), this.drag();
  }
  /** @internal */
  exitDragMode() {
    this.setBaseLogicalZIndex();
  }
  /** @internal */
  enterStackMaximised() {
    this._stackMaximised = !0, this.setLogicalZIndex(Tr.stackMaximised);
  }
  /** @internal */
  exitStackMaximised() {
    this.setBaseLogicalZIndex(), this._stackMaximised = !1;
  }
  /** @internal */
  drag() {
    if (this._boundComponent.virtual && this.virtualRectingRequiredEvent !== void 0) {
      this._layoutManager.fireBeforeVirtualRectingEvent(1);
      try {
        this.virtualRectingRequiredEvent(this, this._width, this._height);
      } finally {
        this._layoutManager.fireAfterVirtualRectingEvent();
      }
    }
  }
  /**
   * Sets the container's size. Called by the container's component item.
   * To instead set the size programmatically from within the component itself,
   * use the public setSize method
   * @param width - in px
   * @param height - in px
   * @param force - set even if no change
   * @internal
   */
  setSizeToNodeSize(A, e, n) {
    (A !== this._width || e !== this._height || n) && (this._width = A, this._height = e, be(this._element, A), Se(this._element, e), this._boundComponent.virtual ? this.addVirtualSizedContainerToLayoutManager() : (this.emit("resize"), this.checkShownFromZeroDimensions()));
  }
  /** @internal */
  notifyVirtualRectingRequired() {
    this.virtualRectingRequiredEvent !== void 0 && (this.virtualRectingRequiredEvent(this, this._width, this._height), this.emit("resize"), this.checkShownFromZeroDimensions());
  }
  /** @internal */
  notifyVirtualZIndexChangeRequired() {
    if (this.virtualZIndexChangeRequiredEvent !== void 0) {
      const A = this._logicalZIndex, e = CE[A];
      this.virtualZIndexChangeRequiredEvent(this, A, e);
    }
  }
  /** @internal */
  updateElementPositionPropertyFromBoundComponent() {
    this._boundComponent.virtual ? this._element.style.position = "static" : this._element.style.position = "";
  }
  /** @internal */
  addVirtualSizedContainerToLayoutManager() {
    this._layoutManager.beginVirtualSizedContainerAdding();
    try {
      this._layoutManager.addVirtualSizedContainer(this);
    } finally {
      this._layoutManager.endVirtualSizedContainerAdding();
    }
  }
  /** @internal */
  checkShownFromZeroDimensions() {
    this._isShownWithZeroDimensions && (this._height !== 0 || this._width !== 0) && (this._isShownWithZeroDimensions = !1, this.emitShow());
  }
  /** @internal */
  emitShow() {
    this.emit("shown"), this.emit("show");
  }
  /** @internal */
  emitHide() {
    this.emit("hide");
  }
  /** @internal */
  releaseComponent() {
    this._stackMaximised && this.exitStackMaximised(), this.emit("beforeComponentRelease", this._boundComponent.component), this.layoutManager.unbindComponent(this, this._boundComponent.virtual, this._boundComponent.component);
  }
}
class yE extends zA {
  /**
   * @param _config - GoldenLayout item config
   * @param _initialWindowSize - A map with width, height, top and left
   * @internal
   */
  constructor(A, e, n) {
    super(), this._config = A, this._initialWindowSize = e, this._layoutManager = n, this._isInitialised = !1, this._popoutWindow = null, this.createWindow();
  }
  toConfig() {
    var A, e;
    if (this._isInitialised === !1)
      throw new Error("Can't create config, layout not yet initialised");
    const s = this.getGlInstance().saveLayout();
    let o, l;
    this._popoutWindow === null ? (o = null, l = null) : (o = (A = this._popoutWindow.screenX) !== null && A !== void 0 ? A : this._popoutWindow.screenLeft, l = (e = this._popoutWindow.screenY) !== null && e !== void 0 ? e : this._popoutWindow.screenTop);
    const c = {
      width: this.getGlInstance().width,
      height: this.getGlInstance().height,
      left: o,
      top: l
    };
    return {
      root: s.root,
      openPopouts: s.openPopouts,
      settings: s.settings,
      dimensions: s.dimensions,
      header: s.header,
      window: c,
      parentId: this._config.parentId,
      indexInParent: this._config.indexInParent,
      resolved: !0
    };
  }
  getGlInstance() {
    if (this._popoutWindow === null)
      throw new TA("BPGGI24693");
    return this._popoutWindow.__glInstance;
  }
  /**
   * Retrieves the native BrowserWindow backing this popout.
   * Might throw an UnexpectedNullError exception when the window is not initialized yet.
   * @public
   */
  getWindow() {
    if (this._popoutWindow === null)
      throw new TA("BPGW087215");
    return this._popoutWindow;
  }
  close() {
    if (this.getGlInstance())
      this.getGlInstance().closeWindow();
    else
      try {
        this.getWindow().close();
      } catch {
      }
  }
  /**
   * Returns the popped out item to its original position. If the original
   * parent isn't available anymore it falls back to the layout's topmost element
   */
  popIn() {
    let A, e = this._config.indexInParent;
    if (!this._config.parentId)
      return;
    const n = this.getGlInstance().saveLayout(), o = an({}, n).root;
    if (o === void 0)
      throw new tA("BPPIR19998");
    const l = this._layoutManager.groundItem;
    if (l === void 0)
      throw new tA("BPPIG34972");
    A = l.getItemsByPopInParentId(this._config.parentId)[0], A || (l.contentItems.length > 0 ? A = l.contentItems[0] : A = l, e = 0);
    const c = this._layoutManager.createAndInitContentItem(o, A);
    A.addChild(c, e), this._layoutManager.layoutConfig.settings.popInOnClose ? this._onClose() : this.close();
  }
  /**
   * Creates the URL and window parameter
   * and opens a new window
   * @internal
   */
  createWindow() {
    const A = this.createUrl(), e = Math.floor(Math.random() * 1e6).toString(36), n = this.serializeWindowFeatures({
      width: this._initialWindowSize.width,
      height: this._initialWindowSize.height,
      innerWidth: this._initialWindowSize.width,
      innerHeight: this._initialWindowSize.height,
      menubar: "no",
      toolbar: "no",
      location: "no",
      personalbar: "no",
      resizable: "yes",
      scrollbars: "no",
      status: "no"
    });
    if (this._popoutWindow = globalThis.open(A, e, n), !this._popoutWindow) {
      if (this._layoutManager.layoutConfig.settings.blockedPopoutsThrowError === !0)
        throw new wE("Popout blocked");
      return;
    }
    this._popoutWindow.addEventListener("load", () => this.positionWindow(), { passive: !0 }), this._popoutWindow.addEventListener("beforeunload", () => {
      this._layoutManager.layoutConfig.settings.popInOnClose ? this.popIn() : this._onClose();
    }, { passive: !0 }), this._checkReadyInterval = setInterval(() => this.checkReady(), 10);
  }
  /** @internal */
  checkReady() {
    if (this._popoutWindow === null)
      throw new TA("BPCR01844");
    this._popoutWindow.__glInstance && this._popoutWindow.__glInstance.isInitialised && (this.onInitialised(), this._checkReadyInterval !== void 0 && (clearInterval(this._checkReadyInterval), this._checkReadyInterval = void 0));
  }
  /**
   * Serialises a map of key:values to a window options string
   *
   * @param windowOptions -
   *
   * @returns serialised window options
   * @internal
   */
  serializeWindowFeatures(A) {
    const e = [];
    for (const n in A)
      e.push(n + "=" + A[n].toString());
    return e.join(",");
  }
  /**
   * Creates the URL for the new window, including the
   * config GET parameter
   *
   * @returns URL
   * @internal
   */
  createUrl() {
    const A = "gl-window-config-" + Zf(), e = AA.minifyConfig(this._config);
    try {
      localStorage.setItem(A, JSON.stringify(e));
    } catch (s) {
      throw new Error("Error while writing to localStorage " + EE(s));
    }
    const n = new URL(location.href);
    return n.searchParams.set("gl-window", A), n.toString();
  }
  /**
   * Move the newly created window roughly to
   * where the component used to be.
   * @internal
   */
  positionWindow() {
    if (this._popoutWindow === null)
      throw new Error("BrowserPopout.positionWindow: null popoutWindow");
    this._popoutWindow.moveTo(this._initialWindowSize.left, this._initialWindowSize.top), this._popoutWindow.focus();
  }
  /**
   * Callback when the new window is opened and the GoldenLayout instance
   * within it is initialised
   * @internal
   */
  onInitialised() {
    this._isInitialised = !0, this.getGlInstance().on("popIn", () => this.popIn()), this.emit("initialised");
  }
  /**
   * Invoked 50ms after the window unload event
   * @internal
   */
  _onClose() {
    setTimeout(() => this.emit("closed"), 50);
  }
}
class He extends zA {
  /** @internal */
  constructor(A, e, n, s) {
    super(), this.layoutManager = A, this._parent = n, this._element = s, this._popInParentIds = [], this._type = e.type, this._id = e.id, this._isInitialised = !1, this.isGround = !1, this.isRow = !1, this.isColumn = !1, this.isStack = !1, this.isComponent = !1, this.size = e.size, this.sizeUnit = e.sizeUnit, this.minSize = e.minSize, this.minSizeUnit = e.minSizeUnit, this._isClosable = e.isClosable, this._pendingEventPropagations = {}, this._throttledEvents = ["stateChanged"], this._contentItems = this.createContentItems(e.content);
  }
  get type() {
    return this._type;
  }
  get id() {
    return this._id;
  }
  set id(A) {
    this._id = A;
  }
  /** @internal */
  get popInParentIds() {
    return this._popInParentIds;
  }
  get parent() {
    return this._parent;
  }
  get contentItems() {
    return this._contentItems;
  }
  get isClosable() {
    return this._isClosable;
  }
  get element() {
    return this._element;
  }
  get isInitialised() {
    return this._isInitialised;
  }
  static isStack(A) {
    return A.isStack;
  }
  static isComponentItem(A) {
    return A.isComponent;
  }
  static isComponentParentableItem(A) {
    return A.isStack || A.isGround;
  }
  /**
   * Removes a child node (and its children) from the tree
   * @param contentItem - The child item to remove
   * @param keepChild - Whether to destroy the removed item
   */
  removeChild(A, e = !1) {
    const n = this._contentItems.indexOf(A);
    if (n === -1)
      throw new Error("Can't remove child item. Unknown content item");
    if (e || this._contentItems[n].destroy(), this._contentItems.splice(n, 1), this._contentItems.length > 0)
      this.updateSize(!1);
    else if (!this.isGround && this._isClosable === !0) {
      if (this._parent === null)
        throw new TA("CIUC00874");
      this._parent.removeChild(this);
    }
  }
  /**
   * Sets up the tree structure for the newly added child
   * The responsibility for the actual DOM manipulations lies
   * with the concrete item
   *
   * @param contentItem -
   * @param index - If omitted item will be appended
   * @param suspendResize - Used by descendent implementations
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addChild(A, e, n) {
    return e ?? (e = this._contentItems.length), this._contentItems.splice(e, 0, A), A.setParent(this), this._isInitialised === !0 && A._isInitialised === !1 && A.init(), e;
  }
  /**
   * Replaces oldChild with newChild
   * @param oldChild -
   * @param newChild -
   * @internal
   */
  replaceChild(A, e, n = !1) {
    const s = this._contentItems.indexOf(A), o = A._element.parentNode;
    if (s === -1)
      throw new pA("CIRCI23232", "Can't replace child. oldChild is not child of this");
    if (o === null)
      throw new TA("CIRCP23232");
    if (o.replaceChild(e._element, A._element), n === !0 && (A._parent = null, A.destroy()), this._contentItems[s] = e, e.setParent(this), e.size = A.size, e.sizeUnit = A.sizeUnit, e.minSize = A.minSize, e.minSizeUnit = A.minSizeUnit, e._parent === null)
      throw new TA("CIRCNC45699");
    e._parent._isInitialised === !0 && e._isInitialised === !1 && e.init(), this.updateSize(!1);
  }
  /**
   * Convenience method.
   * Shorthand for this.parent.removeChild( this )
   */
  remove() {
    if (this._parent === null)
      throw new TA("CIR11110");
    this._parent.removeChild(this);
  }
  /**
   * Removes the component from the layout and creates a new
   * browser window with the component and its children inside
   */
  popout() {
    const A = Zf(), e = this.layoutManager.createPopoutFromContentItem(this, void 0, A, void 0);
    return this.emitBaseBubblingEvent("stateChanged"), e;
  }
  /** @internal */
  calculateConfigContent() {
    const A = this._contentItems, e = A.length, n = new Array(e);
    for (let s = 0; s < e; s++) {
      const o = A[s];
      n[s] = o.toConfig();
    }
    return n;
  }
  /** @internal */
  highlightDropZone(A, e, n) {
    const s = this.layoutManager.dropTargetIndicator;
    if (s === null)
      throw new TA("ACIHDZ5593");
    s.highlightArea(n, 1);
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDrop(A, e) {
    this.addChild(A);
  }
  /** @internal */
  show() {
    this.layoutManager.beginSizeInvalidation();
    try {
      Vt(this._element, !0);
      for (let A = 0; A < this._contentItems.length; A++)
        this._contentItems[A].show();
    } finally {
      this.layoutManager.endSizeInvalidation();
    }
  }
  /**
   * Destroys this item ands its children
   * @internal
   */
  destroy() {
    for (let A = 0; A < this._contentItems.length; A++)
      this._contentItems[A].destroy();
    this._contentItems = [], this.emitBaseBubblingEvent("beforeItemDestroyed"), this._element.remove(), this.emitBaseBubblingEvent("itemDestroyed");
  }
  /**
   * Returns the area the component currently occupies
   * @internal
   */
  getElementArea(A) {
    A = A ?? this._element;
    const e = A.getBoundingClientRect(), n = e.top + document.body.scrollTop, s = e.left + document.body.scrollLeft, o = e.width, l = e.height;
    return {
      x1: s,
      y1: n,
      x2: s + o,
      y2: n + l,
      surface: o * l,
      contentItem: this
    };
  }
  /**
   * The tree of content items is created in two steps: First all content items are instantiated,
   * then init is called recursively from top to bottem. This is the basic init function,
   * it can be used, extended or overwritten by the content items
   *
   * Its behaviour depends on the content item
   * @internal
   */
  init() {
    this._isInitialised = !0, this.emitBaseBubblingEvent("itemCreated"), this.emitUnknownBubblingEvent(this.type + "Created");
  }
  /** @internal */
  setParent(A) {
    this._parent = A;
  }
  /** @internal */
  addPopInParentId(A) {
    this.popInParentIds.includes(A) || this.popInParentIds.push(A);
  }
  /** @internal */
  initContentItems() {
    for (let A = 0; A < this._contentItems.length; A++)
      this._contentItems[A].init();
  }
  /** @internal */
  hide() {
    this.layoutManager.beginSizeInvalidation();
    try {
      Vt(this._element, !1);
    } finally {
      this.layoutManager.endSizeInvalidation();
    }
  }
  /** @internal */
  updateContentItemsSize(A) {
    for (let e = 0; e < this._contentItems.length; e++)
      this._contentItems[e].updateSize(A);
  }
  /**
   * creates all content items for this node at initialisation time
   * PLEASE NOTE, please see addChild for adding contentItems at runtime
   * @internal
   */
  createContentItems(A) {
    const e = A.length, n = new Array(e);
    for (let s = 0; s < A.length; s++)
      n[s] = this.layoutManager.createContentItem(A[s], this);
    return n;
  }
  /**
   * Called for every event on the item tree. Decides whether the event is a bubbling
   * event and propagates it to its parent
   *
   * @param name - The name of the event
   * @param event -
   * @internal
   */
  propagateEvent(A, e) {
    if (e.length === 1) {
      const n = e[0];
      n instanceof zA.BubblingEvent && n.isPropagationStopped === !1 && this._isInitialised === !0 && (this.isGround === !1 && this._parent ? this._parent.emitUnknown(A, n) : this.scheduleEventPropagationToLayoutManager(A, n));
    }
  }
  tryBubbleEvent(A, e) {
    if (e.length === 1) {
      const n = e[0];
      n instanceof zA.BubblingEvent && n.isPropagationStopped === !1 && this._isInitialised === !0 && (this.isGround === !1 && this._parent ? this._parent.emitUnknown(A, n) : this.scheduleEventPropagationToLayoutManager(A, n));
    }
  }
  /**
   * All raw events bubble up to the Ground element. Some events that
   * are propagated to - and emitted by - the layoutManager however are
   * only string-based, batched and sanitized to make them more usable
   *
   * @param name - The name of the event
   * @internal
   */
  scheduleEventPropagationToLayoutManager(A, e) {
    this._throttledEvents.indexOf(A) === -1 ? this.layoutManager.emitUnknown(A, e) : this._pendingEventPropagations[A] !== !0 && (this._pendingEventPropagations[A] = !0, globalThis.requestAnimationFrame(() => this.propagateEventToLayoutManager(A, e)));
  }
  /**
   * Callback for events scheduled by _scheduleEventPropagationToLayoutManager
   *
   * @param name - The name of the event
   * @internal
   */
  propagateEventToLayoutManager(A, e) {
    this._pendingEventPropagations[A] = !1, this.layoutManager.emitUnknown(A, e);
  }
}
class un extends He {
  /** @internal */
  constructor(A, e, n) {
    super(A, e, n, document.createElement("div")), this._parentItem = n, this._focused = !1, this.isComponent = !0, this._reorderEnabled = e.reorderEnabled, this.applyUpdatableConfig(e), this._initialWantMaximise = e.maximised;
    const s = document.createElement("div");
    s.classList.add(
      "lm_content"
      /* Content */
    ), this.element.appendChild(s), this._container = new _E(e, this, A, s, (o) => this.handleUpdateItemConfigEvent(o), () => this.show(), () => this.hide(), (o) => this.focus(o), (o) => this.blur(o));
  }
  /** @internal @deprecated use {@link (ComponentItem:class).componentType} */
  get componentName() {
    return this._container.componentType;
  }
  get componentType() {
    return this._container.componentType;
  }
  get reorderEnabled() {
    return this._reorderEnabled;
  }
  /** @internal */
  get initialWantMaximise() {
    return this._initialWantMaximise;
  }
  get component() {
    return this._container.component;
  }
  get container() {
    return this._container;
  }
  get parentItem() {
    return this._parentItem;
  }
  get headerConfig() {
    return this._headerConfig;
  }
  get title() {
    return this._title;
  }
  get tab() {
    return this._tab;
  }
  get focused() {
    return this._focused;
  }
  /** @internal */
  destroy() {
    this._container.destroy(), super.destroy();
  }
  applyUpdatableConfig(A) {
    this.setTitle(A.title), this._headerConfig = A.header;
  }
  toConfig() {
    const A = this._container.stateRequestEvent, e = A === void 0 ? this._container.state : A();
    return {
      type: M.component,
      content: [],
      size: this.size,
      sizeUnit: this.sizeUnit,
      minSize: this.minSize,
      minSizeUnit: this.minSizeUnit,
      id: this.id,
      maximised: !1,
      isClosable: this.isClosable,
      reorderEnabled: this._reorderEnabled,
      title: this._title,
      header: We.Header.createCopy(this._headerConfig),
      componentType: zt.copyComponentType(this.componentType),
      componentState: e
    };
  }
  close() {
    if (this.parent === null)
      throw new TA("CIC68883");
    this.parent.removeChild(this, !1);
  }
  // Used by Drag Proxy
  /** @internal */
  enterDragMode(A, e) {
    be(this.element, A), Se(this.element, e), this._container.enterDragMode(A, e);
  }
  /** @internal */
  exitDragMode() {
    this._container.exitDragMode();
  }
  /** @internal */
  enterStackMaximised() {
    this._container.enterStackMaximised();
  }
  /** @internal */
  exitStackMaximised() {
    this._container.exitStackMaximised();
  }
  // Used by Drag Proxy
  /** @internal */
  drag() {
    this._container.drag();
  }
  /** @internal */
  updateSize(A) {
    this.updateNodeSize(A);
  }
  /** @internal */
  init() {
    this.updateNodeSize(!1), super.init(), this._container.emit("open"), this.initContentItems();
  }
  /**
   * Set this component's title
   *
   * @public
   * @param title -
   */
  setTitle(A) {
    this._title = A, this.emit("titleChanged", A), this.emit("stateChanged");
  }
  setTab(A) {
    this._tab = A, this.emit("tab", A), this._container.setTab(A);
  }
  /** @internal */
  hide() {
    super.hide(), this._container.setVisibility(!1);
  }
  /** @internal */
  show() {
    super.show(), this._container.setVisibility(!0);
  }
  /**
   * Focuses the item if it is not already focused
   */
  focus(A = !1) {
    this.parentItem.setActiveComponentItem(this, !0, A);
  }
  /** @internal */
  setFocused(A) {
    this._focused = !0, this.tab.setFocused(), A || this.emitBaseBubblingEvent("focus");
  }
  /**
   * Blurs (defocuses) the item if it is focused
   */
  blur(A = !1) {
    this._focused && this.layoutManager.setFocusedComponentItem(void 0, A);
  }
  /** @internal */
  setBlurred(A) {
    this._focused = !1, this.tab.setBlurred(), A || this.emitBaseBubblingEvent("blur");
  }
  /** @internal */
  setParent(A) {
    this._parentItem = A, super.setParent(A);
  }
  /** @internal */
  handleUpdateItemConfigEvent(A) {
    this.applyUpdatableConfig(A);
  }
  /** @internal */
  updateNodeSize(A) {
    if (this.element.style.display !== "none") {
      const { width: e, height: n } = Pt(this.element);
      this._container.setSizeToNodeSize(e, n, A);
    }
  }
}
class qf extends He {
  constructor() {
    super(...arguments), this._focused = !1;
  }
  get focused() {
    return this._focused;
  }
  /** @internal */
  setFocusedValue(A) {
    this._focused = A;
  }
}
class cl extends zA {
  constructor(A, e) {
    super(), this._eElement = A, this._pointerTracking = !1, this._pointerDownEventListener = (n) => this.onPointerDown(n), this._pointerMoveEventListener = (n) => this.onPointerMove(n), this._pointerUpEventListener = (n) => this.onPointerUp(n), this._timeout = void 0, this._allowableTargets = [A, ...e], this._oDocument = document, this._eBody = document.body, this._nDelay = 1800, this._nDistance = 10, this._nX = 0, this._nY = 0, this._nOriginalX = 0, this._nOriginalY = 0, this._dragging = !1, this._eElement.addEventListener("pointerdown", this._pointerDownEventListener, { passive: !0 });
  }
  destroy() {
    this.checkRemovePointerTrackingEventListeners(), this._eElement.removeEventListener("pointerdown", this._pointerDownEventListener);
  }
  cancelDrag() {
    this.processDragStop(void 0);
  }
  onPointerDown(A) {
    if (this._allowableTargets.includes(A.target) && A.isPrimary) {
      const e = this.getPointerCoordinates(A);
      this.processPointerDown(e);
    }
  }
  processPointerDown(A) {
    this._nOriginalX = A.x, this._nOriginalY = A.y, this._oDocument.addEventListener("pointermove", this._pointerMoveEventListener), this._oDocument.addEventListener("pointerup", this._pointerUpEventListener, { passive: !0 }), this._pointerTracking = !0, this._timeout = setTimeout(() => {
      try {
        this.startDrag();
      } catch (e) {
        throw console.error(e), e;
      }
    }, this._nDelay);
  }
  onPointerMove(A) {
    this._pointerTracking && (this.processDragMove(A), A.preventDefault());
  }
  processDragMove(A) {
    this._nX = A.pageX - this._nOriginalX, this._nY = A.pageY - this._nOriginalY, this._dragging === !1 && (Math.abs(this._nX) > this._nDistance || Math.abs(this._nY) > this._nDistance) && this.startDrag(), this._dragging && this.emit("drag", this._nX, this._nY, A);
  }
  onPointerUp(A) {
    this.processDragStop(A);
  }
  processDragStop(A) {
    var e;
    this._timeout !== void 0 && (clearTimeout(this._timeout), this._timeout = void 0), this.checkRemovePointerTrackingEventListeners(), this._dragging === !0 && (this._eBody.classList.remove(
      "lm_dragging"
      /* Dragging */
    ), this._eElement.classList.remove(
      "lm_dragging"
      /* Dragging */
    ), (e = this._oDocument.querySelector("iframe")) === null || e === void 0 || e.style.setProperty("pointer-events", ""), this._dragging = !1, this.emit("dragStop", A));
  }
  checkRemovePointerTrackingEventListeners() {
    this._pointerTracking && (this._oDocument.removeEventListener("pointermove", this._pointerMoveEventListener), this._oDocument.removeEventListener("pointerup", this._pointerUpEventListener), this._pointerTracking = !1);
  }
  startDrag() {
    var A;
    this._timeout !== void 0 && (clearTimeout(this._timeout), this._timeout = void 0), this._dragging = !0, this._eBody.classList.add(
      "lm_dragging"
      /* Dragging */
    ), this._eElement.classList.add(
      "lm_dragging"
      /* Dragging */
    ), (A = this._oDocument.querySelector("iframe")) === null || A === void 0 || A.style.setProperty("pointer-events", "none"), this.emit("dragStart", this._nOriginalX, this._nOriginalY);
  }
  getPointerCoordinates(A) {
    return {
      x: A.pageX,
      y: A.pageY
    };
  }
}
class HE {
  constructor(A, e, n) {
    this._isVertical = A, this._size = e, this._grabSize = n < this._size ? this._size : n, this._element = document.createElement("div"), this._element.classList.add(
      "lm_splitter"
      /* Splitter */
    );
    const s = document.createElement("div");
    s.classList.add(
      "lm_drag_handle"
      /* DragHandle */
    );
    const o = this._grabSize - this._size, l = o / 2;
    this._isVertical ? (s.style.top = CA(-l), s.style.height = CA(this._size + o), this._element.classList.add(
      "lm_vertical"
      /* Vertical */
    ), this._element.style.height = CA(this._size)) : (s.style.left = CA(-l), s.style.width = CA(this._size + o), this._element.classList.add(
      "lm_horizontal"
      /* Horizontal */
    ), this._element.style.width = CA(this._size)), this._element.appendChild(s), this._dragListener = new cl(this._element, [s]);
  }
  get element() {
    return this._element;
  }
  destroy() {
    this._element.remove();
  }
  on(A, e) {
    this._dragListener.on(A, e);
  }
}
class wn extends He {
  /** @internal */
  constructor(A, e, n, s) {
    switch (super(e, n, s, wn.createElement(document, A)), this._rowOrColumnParent = s, this._splitter = [], this.isRow = !A, this.isColumn = A, this._childElementContainer = this.element, this._splitterSize = e.layoutConfig.dimensions.borderWidth, this._splitterGrabSize = e.layoutConfig.dimensions.borderGrabWidth, this._isColumn = A, this._dimension = A ? "height" : "width", this._splitterPosition = null, this._splitterMinPosition = null, this._splitterMaxPosition = null, n.type) {
      case M.row:
      case M.column:
        this._configType = n.type;
        break;
      default:
        throw new pA("ROCCCT00925");
    }
  }
  newComponent(A, e, n, s) {
    const o = {
      type: "component",
      componentType: A,
      componentState: e,
      title: n
    };
    return this.newItem(o, s);
  }
  addComponent(A, e, n, s) {
    const o = {
      type: "component",
      componentType: A,
      componentState: e,
      title: n
    };
    return this.addItem(o, s);
  }
  newItem(A, e) {
    e = this.addItem(A, e);
    const n = this.contentItems[e];
    return He.isStack(n) && GA.isComponent(A) ? n.contentItems[0] : n;
  }
  addItem(A, e) {
    this.layoutManager.checkMinimiseMaximisedStack();
    const n = GA.resolve(A, !1), s = this.layoutManager.createAndInitContentItem(n, this);
    return this.addChild(s, e, !1);
  }
  /**
   * Add a new contentItem to the Row or Column
   *
   * @param contentItem -
   * @param index - The position of the new item within the Row or Column.
   *                If no index is provided the item will be added to the end
   * @param suspendResize - If true the items won't be resized. This will leave the item in
   *                        an inconsistent state and is only intended to be used if multiple
   *                        children need to be added in one go and resize is called afterwards
   *
   * @returns
   */
  addChild(A, e, n) {
    if (e === void 0 && (e = this.contentItems.length), this.contentItems.length > 0) {
      const o = this.createSplitter(Math.max(0, e - 1)).element;
      e > 0 ? (this.contentItems[e - 1].element.insertAdjacentElement("afterend", o), o.insertAdjacentElement("afterend", A.element)) : (this.contentItems[0].element.insertAdjacentElement("beforebegin", o), o.insertAdjacentElement("beforebegin", A.element));
    } else
      this._childElementContainer.appendChild(A.element);
    super.addChild(A, e);
    const s = 1 / this.contentItems.length * 100;
    if (n === !0)
      return this.emitBaseBubblingEvent("stateChanged"), e;
    for (let o = 0; o < this.contentItems.length; o++) {
      const l = this.contentItems[o];
      if (l === A)
        A.size = s;
      else {
        const c = l.size *= (100 - s) / 100;
        l.size = c;
      }
    }
    return this.updateSize(!1), this.emitBaseBubblingEvent("stateChanged"), e;
  }
  /**
   * Removes a child of this element
   *
   * @param contentItem -
   * @param keepChild - If true the child will be removed, but not destroyed
   *
   */
  removeChild(A, e) {
    const n = this.contentItems.indexOf(A), s = Math.max(n - 1, 0);
    if (n === -1)
      throw new Error("Can't remove child. ContentItem is not child of this Row or Column");
    if (this._splitter[s] && (this._splitter[s].destroy(), this._splitter.splice(s, 1)), super.removeChild(A, e), this.contentItems.length === 1 && this.isClosable === !0) {
      const o = this.contentItems[0];
      this.contentItems.length = 0, this._rowOrColumnParent.replaceChild(this, o, !0);
    } else
      this.updateSize(!1), this.emitBaseBubblingEvent("stateChanged");
  }
  /**
   * Replaces a child of this Row or Column with another contentItem
   */
  replaceChild(A, e) {
    const n = A.size;
    super.replaceChild(A, e), e.size = n, this.updateSize(!1), this.emitBaseBubblingEvent("stateChanged");
  }
  /**
   * Called whenever the dimensions of this item or one of its parents change
   */
  updateSize(A) {
    this.layoutManager.beginVirtualSizedContainerAdding();
    try {
      this.updateNodeSize(), this.updateContentItemsSize(A);
    } finally {
      this.layoutManager.endVirtualSizedContainerAdding();
    }
  }
  /**
   * Invoked recursively by the layout manager. ContentItem.init appends
   * the contentItem's DOM elements to the container, RowOrColumn init adds splitters
   * in between them
   * @internal
   */
  init() {
    if (this.isInitialised !== !0) {
      this.updateNodeSize();
      for (let A = 0; A < this.contentItems.length; A++)
        this._childElementContainer.appendChild(this.contentItems[A].element);
      super.init();
      for (let A = 0; A < this.contentItems.length - 1; A++)
        this.contentItems[A].element.insertAdjacentElement("afterend", this.createSplitter(A).element);
      this.initContentItems();
    }
  }
  toConfig() {
    return {
      type: this.type,
      content: this.calculateConfigContent(),
      size: this.size,
      sizeUnit: this.sizeUnit,
      minSize: this.minSize,
      minSizeUnit: this.minSizeUnit,
      id: this.id,
      isClosable: this.isClosable
    };
  }
  /** @internal */
  setParent(A) {
    this._rowOrColumnParent = A, super.setParent(A);
  }
  /** @internal */
  updateNodeSize() {
    this.contentItems.length > 0 && (this.calculateRelativeSizes(), this.setAbsoluteSizes()), this.emitBaseBubblingEvent("stateChanged"), this.emit("resize");
  }
  /**
   * Turns the relative sizes calculated by calculateRelativeSizes into
   * absolute pixel values and applies them to the children's DOM elements
   *
   * Assigns additional pixels to counteract Math.floor
   * @internal
   */
  setAbsoluteSizes() {
    const A = this.calculateAbsoluteSizes();
    for (let e = 0; e < this.contentItems.length; e++)
      A.additionalPixel - e > 0 && A.itemSizes[e]++, this._isColumn ? (be(this.contentItems[e].element, A.crossAxisSize), Se(this.contentItems[e].element, A.itemSizes[e])) : (be(this.contentItems[e].element, A.itemSizes[e]), Se(this.contentItems[e].element, A.crossAxisSize));
  }
  /**
   * Calculates the absolute sizes of all of the children of this Item.
   * @returns Set with absolute sizes and additional pixels.
   * @internal
   */
  calculateAbsoluteSizes() {
    const A = (this.contentItems.length - 1) * this._splitterSize, { width: e, height: n } = Pt(this.element);
    let s, o;
    this._isColumn ? (s = n - A, o = e) : (s = e - A, o = n);
    let l = 0;
    const c = [];
    for (let d = 0; d < this.contentItems.length; d++) {
      const w = this.contentItems[d];
      let p;
      if (w.sizeUnit === UA.Percent)
        p = Math.floor(s * (w.size / 100));
      else
        throw new pA("ROCCAS6692");
      l += p, c.push(p);
    }
    const h = Math.floor(s - l);
    return {
      itemSizes: c,
      additionalPixel: h,
      totalSize: s,
      crossAxisSize: o
    };
  }
  /**
   * Calculates the relative sizes of all children of this Item. The logic
   * is as follows:
   *
   * - Add up the total size of all items that have a configured size
   *
   * - If the total == 100 (check for floating point errors)
   *        Excellent, job done
   *
   * - If the total is \> 100,
   *        set the size of items without set dimensions to 1/3 and add this to the total
   *        set the size off all items so that the total is hundred relative to their original size
   *
   * - If the total is \< 100
   *        If there are items without set dimensions, distribute the remainder to 100 evenly between them
   *        If there are no items without set dimensions, increase all items sizes relative to
   *        their original size so that they add up to 100
   *
   * @internal
   */
  calculateRelativeSizes() {
    let A = 0;
    const e = [];
    let n = 0;
    for (let s = 0; s < this.contentItems.length; s++) {
      const o = this.contentItems[s];
      switch (o.sizeUnit) {
        case UA.Percent: {
          A += o.size;
          break;
        }
        case UA.Fractional: {
          e.push(o), n += o.size;
          break;
        }
        default:
          throw new pA("ROCCRS49110", JSON.stringify(o));
      }
    }
    if (Math.round(A) === 100) {
      this.respectMinItemSize();
      return;
    } else if (Math.round(A) < 100 && e.length > 0) {
      const s = 100 - A;
      for (let o = 0; o < e.length; o++) {
        const l = e[o];
        l.size = s * (l.size / n), l.sizeUnit = UA.Percent;
      }
      this.respectMinItemSize();
      return;
    } else {
      if (Math.round(A) > 100 && e.length > 0) {
        for (let s = 0; s < e.length; s++) {
          const o = e[s];
          o.size = 50 * (o.size / n), o.sizeUnit = UA.Percent;
        }
        A += 50;
      }
      for (let s = 0; s < this.contentItems.length; s++) {
        const o = this.contentItems[s];
        o.size = o.size / A * 100;
      }
      this.respectMinItemSize();
    }
  }
  /**
   * Adjusts the column widths to respect the dimensions minItemWidth if set.
   * @internal
   */
  respectMinItemSize() {
    const A = this.calculateContentItemMinSize(this);
    if (!(A <= 0 || this.contentItems.length <= 1)) {
      let e = 0, n = 0;
      const s = [], o = [], l = this.calculateAbsoluteSizes();
      for (let c = 0; c < l.itemSizes.length; c++) {
        const h = l.itemSizes[c];
        let d;
        h < A ? (n += A - h, d = {
          size: A
        }) : (e += h - A, d = {
          size: h
        }, s.push(d)), o.push(d);
      }
      if (n === 0 || n > e)
        return;
      {
        const c = n / e;
        let h = n;
        for (let d = 0; d < s.length; d++) {
          const w = s[d], p = Math.round((w.size - A) * c);
          h -= p, w.size -= p;
        }
        h !== 0 && (o[o.length - 1].size -= h);
        for (let d = 0; d < this.contentItems.length; d++) {
          const w = this.contentItems[d];
          w.size = o[d].size / l.totalSize * 100;
        }
      }
    }
  }
  /**
   * Instantiates a new Splitter, binds events to it and adds
   * it to the array of splitters at the position specified as the index argument
   *
   * What it doesn't do though is append the splitter to the DOM
   *
   * @param index - The position of the splitter
   *
   * @returns
   * @internal
   */
  createSplitter(A) {
    const e = new HE(this._isColumn, this._splitterSize, this._splitterGrabSize);
    return e.on("drag", (n, s) => this.onSplitterDrag(e, n, s)), e.on("dragStop", () => this.onSplitterDragStop(e)), e.on("dragStart", () => this.onSplitterDragStart(e)), this._splitter.splice(A, 0, e), e;
  }
  /**
   * Locates the instance of Splitter in the array of
   * registered splitters and returns a map containing the contentItem
   * before and after the splitters, both of which are affected if the
   * splitter is moved
   *
   * @returns A map of contentItems that the splitter affects
   * @internal
   */
  getSplitItems(A) {
    const e = this._splitter.indexOf(A);
    return {
      before: this.contentItems[e],
      after: this.contentItems[e + 1]
    };
  }
  calculateContentItemMinSize(A) {
    const e = A.minSize;
    if (e !== void 0) {
      if (A.minSizeUnit === UA.Pixel)
        return e;
      throw new pA("ROCGMD98831", JSON.stringify(A));
    } else {
      const n = this.layoutManager.layoutConfig.dimensions;
      return this._isColumn ? n.defaultMinItemHeight : n.defaultMinItemWidth;
    }
  }
  /**
   * Gets the minimum dimensions for the given item configuration array
   * @internal
   */
  calculateContentItemsTotalMinSize(A) {
    let e = 0;
    for (const n of A)
      e += this.calculateContentItemMinSize(n);
    return e;
  }
  /**
   * Invoked when a splitter's dragListener fires dragStart. Calculates the splitters
   * movement area once (so that it doesn't need calculating on every mousemove event)
   * @internal
   */
  onSplitterDragStart(A) {
    const e = this.getSplitItems(A), n = Nn(e.before.element.style[this._dimension]), s = Nn(e.after.element.style[this._dimension]), o = this.calculateContentItemsTotalMinSize(e.before.contentItems), l = this.calculateContentItemsTotalMinSize(e.after.contentItems);
    this._splitterPosition = 0, this._splitterMinPosition = -1 * (n - o), this._splitterMaxPosition = s - l;
  }
  /**
   * Invoked when a splitter's DragListener fires drag. Updates the splitter's DOM position,
   * but not the sizes of the elements the splitter controls in order to minimize resize events
   *
   * @param splitter -
   * @param offsetX - Relative pixel values to the splitter's original position. Can be negative
   * @param offsetY - Relative pixel values to the splitter's original position. Can be negative
   * @internal
   */
  onSplitterDrag(A, e, n) {
    let s = this._isColumn ? n : e;
    if (this._splitterMinPosition === null || this._splitterMaxPosition === null)
      throw new TA("ROCOSD59226");
    s = Math.max(s, this._splitterMinPosition), s = Math.min(s, this._splitterMaxPosition), this._splitterPosition = s;
    const o = CA(s);
    this._isColumn ? A.element.style.top = o : A.element.style.left = o;
  }
  /**
   * Invoked when a splitter's DragListener fires dragStop. Resets the splitters DOM position,
   * and applies the new sizes to the elements before and after the splitter and their children
   * on the next animation frame
   * @internal
   */
  onSplitterDragStop(A) {
    if (this._splitterPosition === null)
      throw new TA("ROCOSDS66932");
    {
      const e = this.getSplitItems(A), n = Nn(e.before.element.style[this._dimension]), s = Nn(e.after.element.style[this._dimension]), o = (this._splitterPosition + n) / (n + s), l = e.before.size + e.after.size;
      e.before.size = o * l, e.after.size = (1 - o) * l, A.element.style.top = CA(0), A.element.style.left = CA(0), globalThis.requestAnimationFrame(() => this.updateSize(!1));
    }
  }
}
(function(i) {
  function A(s, o) {
    return o === "width" ? UE(s) : vE(s);
  }
  i.getElementDimensionSize = A;
  function e(s, o, l) {
    return o === "width" ? be(s, l) : Se(s, l);
  }
  i.setElementDimensionSize = e;
  function n(s, o) {
    const l = s.createElement("div");
    return l.classList.add(
      "lm_item"
      /* Item */
    ), o ? l.classList.add(
      "lm_column"
      /* Column */
    ) : l.classList.add(
      "lm_row"
      /* Row */
    ), l;
  }
  i.createElement = n;
})(wn || (wn = {}));
class Jt extends qf {
  constructor(A, e, n) {
    super(A, tl.create(e), null, Jt.createElement(document)), this.isGround = !0, this._childElementContainer = this.element, this._containerElement = n;
    let s = null;
    for (; ; ) {
      const o = s ? s.previousSibling : this._containerElement.lastChild;
      if (o instanceof Element && o.classList.contains(
        "lm_content"
        /* Content */
      ))
        s = o;
      else
        break;
    }
    this._containerElement.insertBefore(this.element, s);
  }
  init() {
    if (this.isInitialised !== !0) {
      this.updateNodeSize();
      for (let A = 0; A < this.contentItems.length; A++)
        this._childElementContainer.appendChild(this.contentItems[A].element);
      super.init(), this.initContentItems();
    }
  }
  /**
   * Loads a new Layout
   * Internal only.  To load a new layout with API, use {@link (LayoutManager:class).loadLayout}
   */
  loadRoot(A) {
    if (this.clearRoot(), A !== void 0) {
      const e = this.layoutManager.createAndInitContentItem(A, this);
      this.addChild(e, 0);
    }
  }
  clearRoot() {
    const A = this.contentItems;
    switch (A.length) {
      case 0:
        return;
      case 1: {
        A[0].remove();
        return;
      }
      default:
        throw new pA("GILR07721");
    }
  }
  /**
   * Adds a ContentItem child to root ContentItem.
   * Internal only.  To load a add with API, use {@link (LayoutManager:class).addItem}
   * @returns -1 if added as root otherwise index in root ContentItem's content
   */
  addItem(A, e) {
    this.layoutManager.checkMinimiseMaximisedStack();
    const n = GA.resolve(A, !1);
    let s;
    if (this.contentItems.length > 0 ? s = this.contentItems[0] : s = this, s.isComponent)
      throw new Error("Cannot add item as child to ComponentItem");
    {
      const o = this.layoutManager.createAndInitContentItem(n, s);
      return e = s.addChild(o, e), s === this ? -1 : e;
    }
  }
  loadComponentAsRoot(A) {
    this.clearRoot();
    const e = GA.resolve(A, !1);
    if (e.maximised)
      throw new Error("Root Component cannot be maximised");
    {
      const n = new un(this.layoutManager, e, this);
      n.init(), this.addChild(n, 0);
    }
  }
  /**
   * Adds a Root ContentItem.
   * Internal only.  To replace Root ContentItem with API, use {@link (LayoutManager:class).loadLayout}
   */
  addChild(A, e) {
    if (this.contentItems.length > 0)
      throw new Error("Ground node can only have a single child");
    return this._childElementContainer.appendChild(A.element), e = super.addChild(A, e), this.updateSize(!1), this.emitBaseBubblingEvent("stateChanged"), e;
  }
  /** @internal */
  calculateConfigContent() {
    const A = this.contentItems, e = A.length, n = new Array(e);
    for (let s = 0; s < e; s++) {
      const l = A[s].toConfig();
      if (gn.isRootItemConfig(l))
        n[s] = l;
      else
        throw new pA("RCCC66832");
    }
    return n;
  }
  /** @internal */
  setSize(A, e) {
    A === void 0 || e === void 0 ? this.updateSize(!1) : (be(this.element, A), Se(this.element, e), this.contentItems.length > 0 && (be(this.contentItems[0].element, A), Se(this.contentItems[0].element, e)), this.updateContentItemsSize(!1));
  }
  /**
   * Adds a Root ContentItem.
   * Internal only.  To replace Root ContentItem with API, use {@link (LayoutManager:class).updateRootSize}
   */
  updateSize(A) {
    this.layoutManager.beginVirtualSizedContainerAdding();
    try {
      this.updateNodeSize(), this.updateContentItemsSize(A);
    } finally {
      this.layoutManager.endVirtualSizedContainerAdding();
    }
  }
  createSideAreas() {
    const e = Jt.Area.oppositeSides, n = new Array(Object.keys(e).length);
    let s = 0;
    for (const o in e) {
      const l = o, c = this.getElementArea();
      if (c === null)
        throw new TA("RCSA77553");
      c.side = l, e[l][1] === "2" ? c[l] = c[e[l]] - 50 : c[l] = c[e[l]] + 50, c.surface = (c.x2 - c.x1) * (c.y2 - c.y1), n[s++] = c;
    }
    return n;
  }
  highlightDropZone(A, e, n) {
    this.layoutManager.tabDropPlaceholder.remove(), super.highlightDropZone(A, e, n);
  }
  onDrop(A, e) {
    if (A.isComponent) {
      const n = vt.createDefault(), s = A;
      n.header = We.Header.createCopy(s.headerConfig);
      const o = this.layoutManager.createAndInitContentItem(n, this);
      o.addChild(A), A = o;
    }
    if (this.contentItems.length === 0)
      this.addChild(A);
    else {
      if (A.type === M.row || A.type === M.column) {
        const l = vt.createDefault(), c = this.layoutManager.createContentItem(l, this);
        c.addChild(A), A = c;
      }
      const n = e.side[0] == "x" ? M.row : M.column, s = e.side[1] == "2", o = this.contentItems[0];
      if (!(o instanceof wn) || o.type !== n) {
        const l = aA.createDefault(n), c = this.layoutManager.createContentItem(l, this);
        this.replaceChild(o, c), c.addChild(A, s ? 0 : void 0, !0), c.addChild(o, s ? void 0 : 0, !0), o.size = 50, A.size = 50, A.sizeUnit = UA.Percent, c.updateSize(!1);
      } else {
        const l = o.contentItems[s ? 0 : o.contentItems.length - 1];
        o.addChild(A, s ? 0 : void 0, !0), l.size *= 0.5, A.size = l.size, A.sizeUnit = UA.Percent, o.updateSize(!1);
      }
    }
  }
  // No ContentItem can dock with groundItem.  However Stack can have a GroundItem parent and Stack requires that
  // its parent implement dock() function.  Accordingly this function is implemented but throws an exception as it should
  // never be called
  dock() {
    throw new pA("GID87731");
  }
  // No ContentItem can dock with groundItem.  However Stack can have a GroundItem parent and Stack requires that
  // its parent implement validateDocking() function.  Accordingly this function is implemented but throws an exception as it should
  // never be called
  validateDocking() {
    throw new pA("GIVD87732");
  }
  getAllContentItems() {
    const A = [this];
    return this.deepGetAllContentItems(this.contentItems, A), A;
  }
  getConfigMaximisedItems() {
    const A = [];
    return this.deepFilterContentItems(this.contentItems, A, (e) => He.isStack(e) && e.initialWantMaximise ? !0 : !!(He.isComponentItem(e) && e.initialWantMaximise)), A;
  }
  getItemsByPopInParentId(A) {
    const e = [];
    return this.deepFilterContentItems(this.contentItems, e, (n) => n.popInParentIds.includes(A)), e;
  }
  toConfig() {
    throw new Error("Cannot generate GroundItem config");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setActiveComponentItem(A, e, n) {
  }
  updateNodeSize() {
    const { width: A, height: e } = Pt(this._containerElement);
    be(this.element, A), Se(this.element, e), this.contentItems.length > 0 && (be(this.contentItems[0].element, A), Se(this.contentItems[0].element, e));
  }
  deepGetAllContentItems(A, e) {
    for (let n = 0; n < A.length; n++) {
      const s = A[n];
      e.push(s), this.deepGetAllContentItems(s.contentItems, e);
    }
  }
  deepFilterContentItems(A, e, n) {
    for (let s = 0; s < A.length; s++) {
      const o = A[s];
      n(o) && e.push(o), this.deepFilterContentItems(o.contentItems, e, n);
    }
  }
}
(function(i) {
  (function(e) {
    e.oppositeSides = {
      y2: "y1",
      x2: "x1",
      y1: "y2",
      x1: "x2"
    };
  })(i.Area || (i.Area = {}));
  function A(e) {
    const n = e.createElement("div");
    return n.classList.add(
      "lm_goldenlayout"
      /* GoldenLayout */
    ), n.classList.add(
      "lm_item"
      /* Item */
    ), n.classList.add(
      "lm_root"
      /* Root */
    ), n;
  }
  i.createElement = A;
})(Jt || (Jt = {}));
class us {
  constructor(A, e, n, s) {
    this._header = A, this._pushEvent = s, this._clickEventListener = (o) => this.onClick(o), this._touchStartEventListener = (o) => this.onTouchStart(o), this._element = document.createElement("div"), this._element.classList.add(n), this._element.title = e, this._header.on("destroy", () => this.destroy()), this._element.addEventListener("click", this._clickEventListener, { passive: !0 }), this._element.addEventListener("touchstart", this._touchStartEventListener, { passive: !0 }), this._header.controlsContainerElement.appendChild(this._element);
  }
  get element() {
    return this._element;
  }
  destroy() {
    var A;
    this._element.removeEventListener("click", this._clickEventListener), this._element.removeEventListener("touchstart", this._touchStartEventListener), (A = this._element.parentNode) === null || A === void 0 || A.removeChild(this._element);
  }
  onClick(A) {
    this._pushEvent(A);
  }
  onTouchStart(A) {
    this._pushEvent(A);
  }
}
class bE {
  /** @internal */
  constructor(A, e, n, s, o) {
    var l;
    this._layoutManager = A, this._componentItem = e, this._closeEvent = n, this._focusEvent = s, this._dragStartEvent = o, this._isActive = !1, this._tabClickListener = (h) => this.onTabClickDown(h), this._tabTouchStartListener = (h) => this.onTabTouchStart(h), this._closeClickListener = () => this.onCloseClick(), this._closeTouchStartListener = () => this.onCloseTouchStart(), this._dragStartListener = (h, d) => this.onDragStart(h, d), this._contentItemDestroyListener = () => this.onContentItemDestroy(), this._tabTitleChangedListener = (h) => this.setTitle(h), this._element = document.createElement("div"), this._element.classList.add(
      "lm_tab"
      /* Tab */
    ), this._titleElement = document.createElement("span"), this._titleElement.classList.add(
      "lm_title"
      /* Title */
    ), this._closeElement = document.createElement("div"), this._closeElement.classList.add(
      "lm_close_tab"
      /* CloseTab */
    ), this._element.appendChild(this._titleElement), this._element.appendChild(this._closeElement), e.isClosable ? this._closeElement.style.display = "" : this._closeElement.style.display = "none", this.setTitle(e.title), this._componentItem.on("titleChanged", this._tabTitleChangedListener), ((l = e.reorderEnabled) !== null && l !== void 0 ? l : this._layoutManager.layoutConfig.settings.reorderEnabled) && this.enableReorder(), this._element.addEventListener("click", this._tabClickListener, { passive: !0 }), this._element.addEventListener("touchstart", this._tabTouchStartListener, { passive: !0 }), this._componentItem.isClosable ? (this._closeElement.addEventListener("click", this._closeClickListener, { passive: !0 }), this._closeElement.addEventListener("touchstart", this._closeTouchStartListener, { passive: !0 })) : (this._closeElement.remove(), this._closeElement = void 0), this._componentItem.setTab(this), this._layoutManager.emit("tabCreated", this);
  }
  get isActive() {
    return this._isActive;
  }
  // get header(): Header { return this._header; }
  get componentItem() {
    return this._componentItem;
  }
  /** @deprecated use {@link (Tab:class).componentItem} */
  get contentItem() {
    return this._componentItem;
  }
  get element() {
    return this._element;
  }
  get titleElement() {
    return this._titleElement;
  }
  get closeElement() {
    return this._closeElement;
  }
  get reorderEnabled() {
    return this._dragListener !== void 0;
  }
  set reorderEnabled(A) {
    A !== this.reorderEnabled && (A ? this.enableReorder() : this.disableReorder());
  }
  /**
   * Sets the tab's title to the provided string and sets
   * its title attribute to a pure text representation (without
   * html tags) of the same string.
   */
  setTitle(A) {
    this._titleElement.innerText = A, this._element.title = A;
  }
  /**
   * Sets this tab's active state. To programmatically
   * switch tabs, use Stack.setActiveComponentItem( item ) instead.
   */
  setActive(A) {
    A !== this._isActive && (this._isActive = A, A ? this._element.classList.add(
      "lm_active"
      /* Active */
    ) : this._element.classList.remove(
      "lm_active"
      /* Active */
    ));
  }
  /**
   * Destroys the tab
   * @internal
   */
  destroy() {
    var A, e;
    this._closeEvent = void 0, this._focusEvent = void 0, this._dragStartEvent = void 0, this._element.removeEventListener("click", this._tabClickListener), this._element.removeEventListener("touchstart", this._tabTouchStartListener), (A = this._closeElement) === null || A === void 0 || A.removeEventListener("click", this._closeClickListener), (e = this._closeElement) === null || e === void 0 || e.removeEventListener("touchstart", this._closeTouchStartListener), this._componentItem.off("titleChanged", this._tabTitleChangedListener), this.reorderEnabled && this.disableReorder(), this._element.remove();
  }
  /** @internal */
  setBlurred() {
    this._element.classList.remove(
      "lm_focused"
      /* Focused */
    ), this._titleElement.classList.remove(
      "lm_focused"
      /* Focused */
    );
  }
  /** @internal */
  setFocused() {
    this._element.classList.add(
      "lm_focused"
      /* Focused */
    ), this._titleElement.classList.add(
      "lm_focused"
      /* Focused */
    );
  }
  /**
   * Callback for the DragListener
   * @param x - The tabs absolute x position
   * @param y - The tabs absolute y position
   * @internal
   */
  onDragStart(A, e) {
    if (this._dragListener === void 0)
      throw new tA("TODSDLU10093");
    if (this._dragStartEvent === void 0)
      throw new tA("TODS23309");
    this._dragStartEvent(A, e, this._dragListener, this.componentItem);
  }
  /** @internal */
  onContentItemDestroy() {
    this._dragListener !== void 0 && (this._dragListener.destroy(), this._dragListener = void 0);
  }
  /**
   * Callback when the tab is clicked
   * @internal
   */
  onTabClickDown(A) {
    const e = A.target;
    (e === this._element || e === this._titleElement) && (A.button === 0 ? this.notifyFocus() : A.button === 1 && this._componentItem.isClosable && this.notifyClose());
  }
  /** @internal */
  onTabTouchStart(A) {
    A.target === this._element && this.notifyFocus();
  }
  /**
   * Callback when the tab's close button is clicked
   * @internal
   */
  onCloseClick() {
    this.notifyClose();
  }
  /** @internal */
  onCloseTouchStart() {
    this.notifyClose();
  }
  /**
   * Callback to capture tab close button mousedown
   * to prevent tab from activating.
   * @internal
   */
  // private onCloseMousedown(): void {
  //     // event.stopPropagation();
  // }
  /** @internal */
  notifyClose() {
    if (this._closeEvent === void 0)
      throw new tA("TNC15007");
    this._closeEvent(this._componentItem);
  }
  /** @internal */
  notifyFocus() {
    if (this._focusEvent === void 0)
      throw new tA("TNA15007");
    this._focusEvent(this._componentItem);
  }
  /** @internal */
  enableReorder() {
    this._dragListener = new cl(this._element, [this._titleElement]), this._dragListener.on("dragStart", this._dragStartListener), this._componentItem.on("destroy", this._contentItemDestroyListener);
  }
  /** @internal */
  disableReorder() {
    if (this._dragListener === void 0)
      throw new tA("TDR87745");
    this._componentItem.off("destroy", this._contentItemDestroyListener), this._dragListener.off("dragStart", this._dragStartListener), this._dragListener = void 0;
  }
}
class SE {
  constructor(A, e, n, s, o) {
    this._layoutManager = A, this._componentRemoveEvent = e, this._componentFocusEvent = n, this._componentDragStartEvent = s, this._dropdownActiveChangedEvent = o, this._tabs = [], this._lastVisibleTabIndex = -1, this._dropdownActive = !1, this._element = document.createElement("section"), this._element.classList.add(
      "lm_tabs"
      /* Tabs */
    ), this._dropdownElement = document.createElement("section"), this._dropdownElement.classList.add(
      "lm_tabdropdown_list"
      /* TabDropdownList */
    ), this._dropdownElement.style.display = "none";
  }
  get tabs() {
    return this._tabs;
  }
  get tabCount() {
    return this._tabs.length;
  }
  get lastVisibleTabIndex() {
    return this._lastVisibleTabIndex;
  }
  get element() {
    return this._element;
  }
  get dropdownElement() {
    return this._dropdownElement;
  }
  get dropdownActive() {
    return this._dropdownActive;
  }
  destroy() {
    for (let A = 0; A < this._tabs.length; A++)
      this._tabs[A].destroy();
  }
  /**
   * Creates a new tab and associates it with a contentItem
   * @param index - The position of the tab
   */
  createTab(A, e) {
    for (let s = 0; s < this._tabs.length; s++)
      if (this._tabs[s].componentItem === A)
        return;
    const n = new bE(this._layoutManager, A, (s) => this.handleTabCloseEvent(s), (s) => this.handleTabFocusEvent(s), (s, o, l, c) => this.handleTabDragStartEvent(s, o, l, c));
    e === void 0 && (e = this._tabs.length), this._tabs.splice(e, 0, n), e < this._element.childNodes.length ? this._element.insertBefore(n.element, this._element.childNodes[e]) : this._element.appendChild(n.element);
  }
  removeTab(A) {
    for (let e = 0; e < this._tabs.length; e++)
      if (this._tabs[e].componentItem === A) {
        this._tabs[e].destroy(), this._tabs.splice(e, 1);
        return;
      }
    throw new Error("contentItem is not controlled by this header");
  }
  processActiveComponentChanged(A) {
    let e = -1;
    for (let n = 0; n < this._tabs.length; n++) {
      const s = this._tabs[n].componentItem === A;
      this._tabs[n].setActive(s), s && (e = n);
    }
    if (e < 0)
      throw new pA("HSACI56632");
    if (this._layoutManager.layoutConfig.settings.reorderOnTabMenuClick && this._lastVisibleTabIndex !== -1 && e > this._lastVisibleTabIndex) {
      const n = this._tabs[e];
      for (let s = e; s > 0; s--)
        this._tabs[s] = this._tabs[s - 1];
      this._tabs[0] = n;
    }
  }
  /**
   * Pushes the tabs to the tab dropdown if the available space is not sufficient
   */
  updateTabSizes(A, e) {
    let n = !1;
    this.tryUpdateTabSizes(n, A, e) || (n = !0, this.tryUpdateTabSizes(n, A, e)), n !== this._dropdownActive && (this._dropdownActive = n, this._dropdownActiveChangedEvent());
  }
  tryUpdateTabSizes(A, e, n) {
    if (this._tabs.length > 0) {
      if (n === void 0)
        throw new Error("non-empty tabs must have active component item");
      let s = 0, o = !1;
      const l = this._layoutManager.layoutConfig.settings.tabOverlapAllowance, c = this._tabs.indexOf(n.tab), h = this._tabs[c];
      this._lastVisibleTabIndex = -1;
      for (let d = 0; d < this._tabs.length; d++) {
        const w = this._tabs[d].element;
        w.parentElement !== this._element && this._element.appendChild(w);
        const p = getComputedStyle(h.element).marginRight, m = Nn(p), U = w.offsetWidth + m;
        s += U;
        let v = 0;
        if (c <= d)
          v = s;
        else {
          const E = getComputedStyle(h.element).marginRight, T = Nn(E);
          v = s + h.element.offsetWidth + T;
        }
        if (v > e) {
          if (o)
            d === c && (w.style.zIndex = "auto", w.style.marginLeft = "", w.parentElement !== this._element && this._element.appendChild(w));
          else {
            let E;
            if (c > 0 && c <= d ? E = (v - e) / (d - 1) : E = (v - e) / d, E < l) {
              for (let T = 0; T <= d; T++) {
                const S = T !== c && T !== 0 ? "-" + CA(E) : "";
                this._tabs[T].element.style.zIndex = CA(d - T), this._tabs[T].element.style.marginLeft = S;
              }
              this._lastVisibleTabIndex = d, w.parentElement !== this._element && this._element.appendChild(w);
            } else
              o = !0;
          }
          if (o && d !== c)
            if (A)
              w.style.zIndex = "auto", w.style.marginLeft = "", w.parentElement !== this._dropdownElement && this._dropdownElement.appendChild(w);
            else
              return !1;
        } else
          this._lastVisibleTabIndex = d, w.style.zIndex = "auto", w.style.marginLeft = "", w.parentElement !== this._element && this._element.appendChild(w);
      }
    }
    return !0;
  }
  /**
   * Shows drop down for additional tabs when there are too many to display.
   */
  showAdditionalTabsDropdown() {
    this._dropdownElement.style.display = "";
  }
  /**
   * Hides drop down for additional tabs when there are too many to display.
   */
  hideAdditionalTabsDropdown() {
    this._dropdownElement.style.display = "none";
  }
  handleTabCloseEvent(A) {
    this._componentRemoveEvent(A);
  }
  handleTabFocusEvent(A) {
    this._componentFocusEvent(A);
  }
  handleTabDragStartEvent(A, e, n, s) {
    this._componentDragStartEvent(A, e, n, s);
  }
}
class xE extends zA {
  /** @internal */
  constructor(A, e, n, s, o, l, c, h, d, w, p, m, U) {
    super(), this._layoutManager = A, this._parent = e, this._configClosable = s, this._getActiveComponentItemEvent = o, this._popoutEvent = c, this._maximiseToggleEvent = h, this._clickEvent = d, this._touchStartEvent = w, this._componentRemoveEvent = p, this._componentFocusEvent = m, this._componentDragStartEvent = U, this._clickListener = (v) => this.onClick(v), this._touchStartListener = (v) => this.onTouchStart(v), this._rowColumnClosable = !0, this._closeButton = null, this._popoutButton = null, this._tabsContainer = new SE(this._layoutManager, (v) => this.handleTabInitiatedComponentRemoveEvent(v), (v) => this.handleTabInitiatedComponentFocusEvent(v), (v, E, T, S) => this.handleTabInitiatedDragStartEvent(v, E, T, S), () => this.processTabDropdownActiveChanged()), this._show = n.show, this._popoutEnabled = n.popoutEnabled, this._popoutLabel = n.popoutLabel, this._maximiseEnabled = n.maximiseEnabled, this._maximiseLabel = n.maximiseLabel, this._minimiseEnabled = n.minimiseEnabled, this._minimiseLabel = n.minimiseLabel, this._closeEnabled = n.closeEnabled, this._closeLabel = n.closeLabel, this._tabDropdownEnabled = n.tabDropdownEnabled, this._tabDropdownLabel = n.tabDropdownLabel, this.setSide(n.side), this._canRemoveComponent = this._configClosable, this._element = document.createElement("section"), this._element.classList.add(
      "lm_header"
      /* Header */
    ), this._controlsContainerElement = document.createElement("section"), this._controlsContainerElement.classList.add(
      "lm_controls"
      /* Controls */
    ), this._element.appendChild(this._tabsContainer.element), this._element.appendChild(this._controlsContainerElement), this._element.appendChild(this._tabsContainer.dropdownElement), this._element.addEventListener("click", this._clickListener, { passive: !0 }), this._element.addEventListener("touchstart", this._touchStartListener, { passive: !0 }), this._documentMouseUpListener = () => this._tabsContainer.hideAdditionalTabsDropdown(), globalThis.document.addEventListener("mouseup", this._documentMouseUpListener, { passive: !0 }), this._tabControlOffset = this._layoutManager.layoutConfig.settings.tabControlOffset, this._tabDropdownEnabled && (this._tabDropdownButton = new us(this, this._tabDropdownLabel, "lm_tabdropdown", () => this._tabsContainer.showAdditionalTabsDropdown())), this._popoutEnabled && (this._popoutButton = new us(this, this._popoutLabel, "lm_popout", () => this.handleButtonPopoutEvent())), this._maximiseEnabled && (this._maximiseButton = new us(this, this._maximiseLabel, "lm_maximise", (v) => this.handleButtonMaximiseToggleEvent(v))), this._configClosable && (this._closeButton = new us(this, this._closeLabel, "lm_close", () => l())), this.processTabDropdownActiveChanged();
  }
  // /** @internal */
  // private _activeComponentItem: ComponentItem | null = null; // only used to identify active tab
  get show() {
    return this._show;
  }
  get side() {
    return this._side;
  }
  get leftRightSided() {
    return this._leftRightSided;
  }
  get layoutManager() {
    return this._layoutManager;
  }
  get parent() {
    return this._parent;
  }
  get tabs() {
    return this._tabsContainer.tabs;
  }
  get lastVisibleTabIndex() {
    return this._tabsContainer.lastVisibleTabIndex;
  }
  get element() {
    return this._element;
  }
  get tabsContainerElement() {
    return this._tabsContainer.element;
  }
  get controlsContainerElement() {
    return this._controlsContainerElement;
  }
  /**
   * Destroys the entire header
   * @internal
   */
  destroy() {
    this.emit("destroy"), this._popoutEvent = void 0, this._maximiseToggleEvent = void 0, this._clickEvent = void 0, this._touchStartEvent = void 0, this._componentRemoveEvent = void 0, this._componentFocusEvent = void 0, this._componentDragStartEvent = void 0, this._tabsContainer.destroy(), globalThis.document.removeEventListener("mouseup", this._documentMouseUpListener), this._element.remove();
  }
  /**
   * Creates a new tab and associates it with a contentItem
   * @param index - The position of the tab
   * @internal
   */
  createTab(A, e) {
    this._tabsContainer.createTab(A, e);
  }
  /**
   * Finds a tab based on the contentItem its associated with and removes it.
   * Cannot remove tab if it has the active ComponentItem
   * @internal
   */
  removeTab(A) {
    this._tabsContainer.removeTab(A);
  }
  /** @internal */
  processActiveComponentChanged(A) {
    this._tabsContainer.processActiveComponentChanged(A), this.updateTabSizes();
  }
  /** @internal */
  setSide(A) {
    this._side = A, this._leftRightSided = [Wt.right, Wt.left].includes(this._side);
  }
  /**
   * Programmatically set closability.
   * @param value - Whether to enable/disable closability.
   * @returns Whether the action was successful
   * @internal
   */
  setRowColumnClosable(A) {
    this._rowColumnClosable = A, this.updateClosability();
  }
  /**
   * Updates the header's closability. If a stack/header is able
   * to close, but has a non closable component added to it, the stack is no
   * longer closable until all components are closable.
   * @internal
   */
  updateClosability() {
    let A;
    if (!this._configClosable)
      A = !1;
    else if (!this._rowColumnClosable)
      A = !1;
    else {
      A = !0;
      const e = this.tabs.length;
      for (let n = 0; n < e; n++)
        if (!this._tabsContainer.tabs[n].componentItem.isClosable) {
          A = !1;
          break;
        }
    }
    this._closeButton !== null && Vt(this._closeButton.element, A), this._popoutButton !== null && Vt(this._popoutButton.element, A), this._canRemoveComponent = A || this._tabsContainer.tabCount > 1;
  }
  /** @internal */
  applyFocusedValue(A) {
    A ? this._element.classList.add(
      "lm_focused"
      /* Focused */
    ) : this._element.classList.remove(
      "lm_focused"
      /* Focused */
    );
  }
  /** @internal */
  processMaximised() {
    if (this._maximiseButton === void 0)
      throw new tA("HPMAX16997");
    this._maximiseButton.element.setAttribute("title", this._minimiseLabel);
  }
  /** @internal */
  processMinimised() {
    if (this._maximiseButton === void 0)
      throw new tA("HPMIN16997");
    this._maximiseButton.element.setAttribute("title", this._maximiseLabel);
  }
  /**
   * Pushes the tabs to the tab dropdown if the available space is not sufficient
   * @internal
   */
  updateTabSizes() {
    if (this._tabsContainer.tabCount > 0) {
      const A = this._show ? this._layoutManager.layoutConfig.dimensions.headerHeight : 0;
      this._leftRightSided ? (this._element.style.height = "", this._element.style.width = CA(A)) : (this._element.style.width = "", this._element.style.height = CA(A));
      let e;
      this._leftRightSided ? e = this._element.offsetHeight - this._controlsContainerElement.offsetHeight - this._tabControlOffset : e = this._element.offsetWidth - this._controlsContainerElement.offsetWidth - this._tabControlOffset, this._tabsContainer.updateTabSizes(e, this._getActiveComponentItemEvent());
    }
  }
  /** @internal */
  handleTabInitiatedComponentRemoveEvent(A) {
    if (this._canRemoveComponent) {
      if (this._componentRemoveEvent === void 0)
        throw new tA("HHTCE22294");
      this._componentRemoveEvent(A);
    }
  }
  /** @internal */
  handleTabInitiatedComponentFocusEvent(A) {
    if (this._componentFocusEvent === void 0)
      throw new tA("HHTAE22294");
    this._componentFocusEvent(A);
  }
  /** @internal */
  handleTabInitiatedDragStartEvent(A, e, n, s) {
    if (!this._canRemoveComponent)
      n.cancelDrag();
    else {
      if (this._componentDragStartEvent === void 0)
        throw new tA("HHTDSE22294");
      this._componentDragStartEvent(A, e, n, s);
    }
  }
  /** @internal */
  processTabDropdownActiveChanged() {
    this._tabDropdownButton !== void 0 && Vt(this._tabDropdownButton.element, this._tabsContainer.dropdownActive);
  }
  /** @internal */
  handleButtonPopoutEvent() {
    if (this._layoutManager.layoutConfig.settings.popoutWholeStack) {
      if (this._popoutEvent === void 0)
        throw new tA("HHBPOE17834");
      this._popoutEvent();
    } else {
      const A = this._getActiveComponentItemEvent();
      A && A.popout();
    }
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleButtonMaximiseToggleEvent(A) {
    if (this._maximiseToggleEvent === void 0)
      throw new tA("HHBMTE16834");
    this._maximiseToggleEvent();
  }
  /**
   * Invoked when the header's background is clicked (not it's tabs or controls)
   * @internal
   */
  onClick(A) {
    A.target === this._element && this.notifyClick(A);
  }
  /**
   * Invoked when the header's background is touched (not it's tabs or controls)
   * @internal
   */
  onTouchStart(A) {
    A.target === this._element && this.notifyTouchStart(A);
  }
  /** @internal */
  notifyClick(A) {
    if (this._clickEvent === void 0)
      throw new tA("HNHC46834");
    this._clickEvent(A);
  }
  /** @internal */
  notifyTouchStart(A) {
    if (this._touchStartEvent === void 0)
      throw new tA("HNHTS46834");
    this._touchStartEvent(A);
  }
}
class mt extends qf {
  /** @internal */
  constructor(A, e, n) {
    var s, o, l, c, h, d, w, p, m, U, v, E, T, S, x, Y, X, K, D;
    super(A, e, n, mt.createElement(document)), this._headerSideChanged = !1, this._resizeListener = () => this.handleResize(), this._maximisedListener = () => this.handleMaximised(), this._minimisedListener = () => this.handleMinimised(), this._headerConfig = e.header;
    const z = A.layoutConfig.header, j = e.content;
    let G;
    j.length !== 1 ? G = void 0 : G = j[0].header, this._initialWantMaximise = e.maximised, this._initialActiveItemIndex = (s = e.activeItemIndex) !== null && s !== void 0 ? s : 0;
    const mA = (c = (l = (o = this._headerConfig) === null || o === void 0 ? void 0 : o.show) !== null && l !== void 0 ? l : G == null ? void 0 : G.show) !== null && c !== void 0 ? c : z.show, DA = (w = (d = (h = this._headerConfig) === null || h === void 0 ? void 0 : h.popout) !== null && d !== void 0 ? d : G == null ? void 0 : G.popout) !== null && w !== void 0 ? w : z.popout, RA = (U = (m = (p = this._headerConfig) === null || p === void 0 ? void 0 : p.maximise) !== null && m !== void 0 ? m : G == null ? void 0 : G.maximise) !== null && U !== void 0 ? U : z.maximise, lA = (T = (E = (v = this._headerConfig) === null || v === void 0 ? void 0 : v.close) !== null && E !== void 0 ? E : G == null ? void 0 : G.close) !== null && T !== void 0 ? T : z.close, xA = (Y = (x = (S = this._headerConfig) === null || S === void 0 ? void 0 : S.minimise) !== null && x !== void 0 ? x : G == null ? void 0 : G.minimise) !== null && Y !== void 0 ? Y : z.minimise, ie = (D = (K = (X = this._headerConfig) === null || X === void 0 ? void 0 : X.tabDropdown) !== null && K !== void 0 ? K : G == null ? void 0 : G.tabDropdown) !== null && D !== void 0 ? D : z.tabDropdown;
    this._maximisedEnabled = RA !== !1;
    const XA = {
      show: mA !== !1,
      side: mA === !1 ? Wt.top : mA,
      popoutEnabled: DA !== !1,
      popoutLabel: DA === !1 ? "" : DA,
      maximiseEnabled: this._maximisedEnabled,
      maximiseLabel: RA === !1 ? "" : RA,
      closeEnabled: lA !== !1,
      closeLabel: lA === !1 ? "" : lA,
      minimiseEnabled: !0,
      minimiseLabel: xA,
      tabDropdownEnabled: ie !== !1,
      tabDropdownLabel: ie === !1 ? "" : ie
    };
    this._header = new xE(A, this, XA, e.isClosable && lA !== !1, () => this.getActiveComponentItem(), () => this.remove(), () => this.handlePopoutEvent(), () => this.toggleMaximise(), (QA) => this.handleHeaderClickEvent(QA), (QA) => this.handleHeaderTouchStartEvent(QA), (QA) => this.handleHeaderComponentRemoveEvent(QA), (QA) => this.handleHeaderComponentFocusEvent(QA), (QA, $A, P, R) => this.handleHeaderComponentStartDragEvent(QA, $A, P, R)), this.isStack = !0, this._childElementContainer = document.createElement("section"), this._childElementContainer.classList.add(
      "lm_items"
      /* Items */
    ), this.on("resize", this._resizeListener), this._maximisedEnabled && (this.on("maximised", this._maximisedListener), this.on("minimised", this._minimisedListener)), this.element.appendChild(this._header.element), this.element.appendChild(this._childElementContainer), this.setupHeaderPosition(), this._header.updateClosability();
  }
  get childElementContainer() {
    return this._childElementContainer;
  }
  get header() {
    return this._header;
  }
  get headerShow() {
    return this._header.show;
  }
  get headerSide() {
    return this._header.side;
  }
  get headerLeftRightSided() {
    return this._header.leftRightSided;
  }
  /** @internal */
  get contentAreaDimensions() {
    return this._contentAreaDimensions;
  }
  /** @internal */
  get initialWantMaximise() {
    return this._initialWantMaximise;
  }
  get isMaximised() {
    return this === this.layoutManager.maximisedStack;
  }
  get stackParent() {
    if (!this.parent)
      throw new Error("Stack should always have a parent");
    return this.parent;
  }
  /** @internal */
  updateSize(A) {
    this.layoutManager.beginVirtualSizedContainerAdding();
    try {
      this.updateNodeSize(), this.updateContentItemsSize(A);
    } finally {
      this.layoutManager.endVirtualSizedContainerAdding();
    }
  }
  /** @internal */
  init() {
    if (this.isInitialised === !0)
      return;
    this.updateNodeSize();
    for (let n = 0; n < this.contentItems.length; n++)
      this._childElementContainer.appendChild(this.contentItems[n].element);
    super.init();
    const A = this.contentItems, e = A.length;
    if (e > 0) {
      if (this._initialActiveItemIndex < 0 || this._initialActiveItemIndex >= e)
        throw new Error(`ActiveItemIndex out of range: ${this._initialActiveItemIndex} id: ${this.id}`);
      for (let n = 0; n < e; n++) {
        const s = A[n];
        if (s instanceof un)
          this._header.createTab(s, n), s.hide(), s.container.setBaseLogicalZIndex();
        else
          throw new Error(`Stack Content Item is not of type ComponentItem: ${n} id: ${this.id}`);
      }
      this.setActiveComponentItem(A[this._initialActiveItemIndex], !1), this._header.updateTabSizes();
    }
    this._header.updateClosability(), this.initContentItems();
  }
  /** @deprecated Use {@link (Stack:class).setActiveComponentItem} */
  setActiveContentItem(A) {
    if (He.isComponentItem(A))
      this.setActiveComponentItem(A, !1);
    else
      throw new Error("Stack.setActiveContentItem: item is not a ComponentItem");
  }
  setActiveComponentItem(A, e, n = !1) {
    if (this._activeComponentItem !== A) {
      if (this.contentItems.indexOf(A) === -1)
        throw new Error("componentItem is not a child of this stack");
      this.layoutManager.beginSizeInvalidation();
      try {
        this._activeComponentItem !== void 0 && this._activeComponentItem.hide(), this._activeComponentItem = A, this._header.processActiveComponentChanged(A), A.show();
      } finally {
        this.layoutManager.endSizeInvalidation();
      }
      this.emit("activeContentItemChanged", A), this.layoutManager.emit("activeContentItemChanged", A), this.emitStateChangedEvent();
    }
    (this.focused || e) && this.layoutManager.setFocusedComponentItem(A, n);
  }
  /** @deprecated Use {@link (Stack:class).getActiveComponentItem} */
  getActiveContentItem() {
    var A;
    return (A = this.getActiveComponentItem()) !== null && A !== void 0 ? A : null;
  }
  getActiveComponentItem() {
    return this._activeComponentItem;
  }
  /** @internal */
  focusActiveContentItem() {
    var A;
    (A = this._activeComponentItem) === null || A === void 0 || A.focus();
  }
  /** @internal */
  setFocusedValue(A) {
    this._header.applyFocusedValue(A), super.setFocusedValue(A);
  }
  /** @internal */
  setRowColumnClosable(A) {
    this._header.setRowColumnClosable(A);
  }
  newComponent(A, e, n, s) {
    const o = {
      type: "component",
      componentType: A,
      componentState: e,
      title: n
    };
    return this.newItem(o, s);
  }
  addComponent(A, e, n, s) {
    const o = {
      type: "component",
      componentType: A,
      componentState: e,
      title: n
    };
    return this.addItem(o, s);
  }
  newItem(A, e) {
    return e = this.addItem(A, e), this.contentItems[e];
  }
  addItem(A, e) {
    this.layoutManager.checkMinimiseMaximisedStack();
    const n = GA.resolve(A, !1), s = this.layoutManager.createAndInitContentItem(n, this);
    return this.addChild(s, e);
  }
  addChild(A, e, n = !1) {
    if (e !== void 0 && e > this.contentItems.length)
      throw e -= 1, new pA("SAC99728");
    if (A instanceof un)
      return e = super.addChild(A, e), this._childElementContainer.appendChild(A.element), this._header.createTab(A, e), this.setActiveComponentItem(A, n), this._header.updateTabSizes(), this.updateSize(!1), A.container.setBaseLogicalZIndex(), this._header.updateClosability(), this.emitStateChangedEvent(), e;
    throw new pA("SACC88532");
  }
  removeChild(A, e) {
    const n = A, s = this.contentItems.indexOf(n), o = this.contentItems.length === 1;
    if (this._activeComponentItem === n && (n.focused && n.blur(), !o)) {
      const l = s === 0 ? 1 : s - 1;
      this.setActiveComponentItem(this.contentItems[l], !1);
    }
    this._header.removeTab(n), super.removeChild(n, e), o || this._header.updateClosability(), this.emitStateChangedEvent();
  }
  /**
   * Maximises the Item or minimises it if it is already maximised
   */
  toggleMaximise() {
    this.isMaximised ? this.minimise() : this.maximise();
  }
  maximise() {
    if (!this.isMaximised) {
      this.layoutManager.setMaximisedStack(this);
      const A = this.contentItems, e = A.length;
      for (let n = 0; n < e; n++) {
        const s = A[n];
        if (s instanceof un)
          s.enterStackMaximised();
        else
          throw new pA("SMAXI87773");
      }
      this.emitStateChangedEvent();
    }
  }
  minimise() {
    if (this.isMaximised) {
      this.layoutManager.setMaximisedStack(void 0);
      const A = this.contentItems, e = A.length;
      for (let n = 0; n < e; n++) {
        const s = A[n];
        if (s instanceof un)
          s.exitStackMaximised();
        else
          throw new pA("SMINI87773");
      }
      this.emitStateChangedEvent();
    }
  }
  /** @internal */
  destroy() {
    var A;
    !((A = this._activeComponentItem) === null || A === void 0) && A.focused && this._activeComponentItem.blur(), super.destroy(), this.off("resize", this._resizeListener), this._maximisedEnabled && (this.off("maximised", this._maximisedListener), this.off("minimised", this._minimisedListener)), this._header.destroy();
  }
  toConfig() {
    let A;
    if (this._activeComponentItem && (A = this.contentItems.indexOf(this._activeComponentItem), A < 0))
      throw new Error("active component item not found in stack");
    if (this.contentItems.length > 0 && A === void 0)
      throw new Error("expected non-empty stack to have an active component item");
    return {
      type: "stack",
      content: this.calculateConfigContent(),
      size: this.size,
      sizeUnit: this.sizeUnit,
      minSize: this.minSize,
      minSizeUnit: this.minSizeUnit,
      id: this.id,
      isClosable: this.isClosable,
      maximised: this.isMaximised,
      header: this.createHeaderConfig(),
      activeItemIndex: A
    };
  }
  /**
   * Ok, this one is going to be the tricky one: The user has dropped a {@link (ContentItem:class)} onto this stack.
   *
   * It was dropped on either the stacks header or the top, right, bottom or left bit of the content area
   * (which one of those is stored in this._dropSegment). Now, if the user has dropped on the header the case
   * is relatively clear: We add the item to the existing stack... job done (might be good to have
   * tab reordering at some point, but lets not sweat it right now)
   *
   * If the item was dropped on the content part things are a bit more complicated. If it was dropped on either the
   * top or bottom region we need to create a new column and place the items accordingly.
   * Unless, of course if the stack is already within a column... in which case we want
   * to add the newly created item to the existing column...
   * either prepend or append it, depending on wether its top or bottom.
   *
   * Same thing for rows and left / right drop segments... so in total there are 9 things that can potentially happen
   * (left, top, right, bottom) * is child of the right parent (row, column) + header drop
   *
   * @internal
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDrop(A, e) {
    if (this._dropSegment === "header") {
      if (this.resetHeaderDropZone(), this._dropIndex === void 0)
        throw new tA("SODDI68990");
      this.addChild(A, this._dropIndex);
      return;
    }
    if (this._dropSegment === "body") {
      this.addChild(A, 0, !0);
      return;
    }
    const n = this._dropSegment === "top" || this._dropSegment === "bottom", s = this._dropSegment === "left" || this._dropSegment === "right", o = this._dropSegment === "top" || this._dropSegment === "left", l = n && this.stackParent.isColumn || s && this.stackParent.isRow;
    if (A.isComponent) {
      const c = vt.createDefault();
      c.header = this.createHeaderConfig();
      const h = this.layoutManager.createAndInitContentItem(c, this);
      h.addChild(A), A = h;
    }
    if (A.type === M.row || A.type === M.column) {
      const c = vt.createDefault();
      c.header = this.createHeaderConfig();
      const h = this.layoutManager.createContentItem(c, this);
      h.addChild(A), A = h;
    }
    if (l) {
      const c = this.stackParent.contentItems.indexOf(this);
      this.stackParent.addChild(A, o ? c : c + 1, !0), this.size *= 0.5, A.size = this.size, A.sizeUnit = this.sizeUnit, this.stackParent.updateSize(!1);
    } else {
      const c = n ? M.column : M.row, h = aA.createDefault(c), d = this.layoutManager.createContentItem(h, this);
      this.stackParent.replaceChild(this, d), d.addChild(A, o ? 0 : void 0, !0), d.addChild(this, o ? void 0 : 0, !0), this.size = 50, A.size = 50, A.sizeUnit = UA.Percent, d.updateSize(!1);
    }
  }
  /**
   * If the user hovers above the header part of the stack, indicate drop positions for tabs.
   * otherwise indicate which segment of the body the dragged item would be dropped on
   *
   * @param x - Absolute Screen X
   * @param y - Absolute Screen Y
   * @internal
   */
  highlightDropZone(A, e) {
    for (const n in this._contentAreaDimensions) {
      const s = n, o = this._contentAreaDimensions[s].hoverArea;
      if (o.x1 < A && o.x2 > A && o.y1 < e && o.y2 > e) {
        s === "header" ? (this._dropSegment = "header", this.highlightHeaderDropZone(this._header.leftRightSided ? e : A)) : (this.resetHeaderDropZone(), this.highlightBodyDropZone(s));
        return;
      }
    }
  }
  /** @internal */
  getArea() {
    if (this.element.style.display === "none")
      return null;
    const A = super.getElementArea(this._header.element), e = super.getElementArea(this._childElementContainer);
    if (A === null || e === null)
      throw new TA("SGAHC13086");
    const n = e.x2 - e.x1, s = e.y2 - e.y1;
    return this._contentAreaDimensions = {
      header: {
        hoverArea: {
          x1: A.x1,
          y1: A.y1,
          x2: A.x2,
          y2: A.y2
        },
        highlightArea: {
          x1: A.x1,
          y1: A.y1,
          x2: A.x2,
          y2: A.y2
        }
      }
    }, this.contentItems.length === 0 ? (this._contentAreaDimensions.body = {
      hoverArea: {
        x1: e.x1,
        y1: e.y1,
        x2: e.x2,
        y2: e.y2
      },
      highlightArea: {
        x1: e.x1,
        y1: e.y1,
        x2: e.x2,
        y2: e.y2
      }
    }, super.getElementArea(this.element)) : (this._contentAreaDimensions.left = {
      hoverArea: {
        x1: e.x1,
        y1: e.y1,
        x2: e.x1 + n * 0.25,
        y2: e.y2
      },
      highlightArea: {
        x1: e.x1,
        y1: e.y1,
        x2: e.x1 + n * 0.5,
        y2: e.y2
      }
    }, this._contentAreaDimensions.top = {
      hoverArea: {
        x1: e.x1 + n * 0.25,
        y1: e.y1,
        x2: e.x1 + n * 0.75,
        y2: e.y1 + s * 0.5
      },
      highlightArea: {
        x1: e.x1,
        y1: e.y1,
        x2: e.x2,
        y2: e.y1 + s * 0.5
      }
    }, this._contentAreaDimensions.right = {
      hoverArea: {
        x1: e.x1 + n * 0.75,
        y1: e.y1,
        x2: e.x2,
        y2: e.y2
      },
      highlightArea: {
        x1: e.x1 + n * 0.5,
        y1: e.y1,
        x2: e.x2,
        y2: e.y2
      }
    }, this._contentAreaDimensions.bottom = {
      hoverArea: {
        x1: e.x1 + n * 0.25,
        y1: e.y1 + s * 0.5,
        x2: e.x1 + n * 0.75,
        y2: e.y2
      },
      highlightArea: {
        x1: e.x1,
        y1: e.y1 + s * 0.5,
        x2: e.x2,
        y2: e.y2
      }
    }, super.getElementArea(this.element));
  }
  /**
   * Programmatically operate with header position.
   *
   * @param position -
   *
   * @returns previous header position
   * @internal
   */
  positionHeader(A) {
    this._header.side !== A && (this._header.setSide(A), this._headerSideChanged = !0, this.setupHeaderPosition());
  }
  /** @internal */
  updateNodeSize() {
    if (this.element.style.display !== "none") {
      const A = Pt(this.element);
      if (this._header.show) {
        const e = this._header.leftRightSided ? Es.width : Es.height;
        A[e] -= this.layoutManager.layoutConfig.dimensions.headerHeight;
      }
      this._childElementContainer.style.width = CA(A.width), this._childElementContainer.style.height = CA(A.height);
      for (let e = 0; e < this.contentItems.length; e++)
        this.contentItems[e].element.style.width = CA(A.width), this.contentItems[e].element.style.height = CA(A.height);
      this.emit("resize"), this.emitStateChangedEvent();
    }
  }
  /** @internal */
  highlightHeaderDropZone(A) {
    const e = this._header.lastVisibleTabIndex + 1, s = this._header.tabsContainerElement.childNodes, o = new Array(e);
    let l = 0, c = 0;
    for (; c < e; ) {
      const w = s[l++];
      w !== this.layoutManager.tabDropPlaceholder && (o[c++] = w);
    }
    const h = this.layoutManager.dropTargetIndicator;
    if (h === null)
      throw new TA("SHHDZDTI97110");
    let d;
    if (e === 0) {
      const w = this._header.element.getBoundingClientRect(), p = w.top + document.body.scrollTop, m = w.left + document.body.scrollLeft;
      d = {
        x1: m,
        x2: m + 100,
        y1: p + w.height - 20,
        y2: p + w.height
      }, this._dropIndex = 0;
    } else {
      let w = 0, p = !1, m, U, v, E;
      do {
        E = o[w];
        const K = E.getBoundingClientRect(), D = K.top + document.body.scrollTop, z = K.left + document.body.scrollLeft;
        this._header.leftRightSided ? (U = D, m = z, v = K.height) : (U = z, m = D, v = K.width), A >= U && A < U + v ? p = !0 : w++;
      } while (w < e && !p);
      if (p === !1 && A < U)
        return;
      const T = U + v / 2;
      A < T ? (this._dropIndex = w, E.insertAdjacentElement("beforebegin", this.layoutManager.tabDropPlaceholder)) : (this._dropIndex = Math.min(w + 1, e), E.insertAdjacentElement("afterend", this.layoutManager.tabDropPlaceholder));
      const S = this.layoutManager.tabDropPlaceholder.getBoundingClientRect(), x = S.top + document.body.scrollTop, Y = S.left + document.body.scrollLeft, X = S.width;
      if (this._header.leftRightSided) {
        const K = x;
        d = {
          x1: m,
          x2: m + E.clientHeight,
          y1: K,
          y2: K + X
        };
      } else {
        const K = Y;
        d = {
          x1: K,
          x2: K + X,
          y1: m,
          y2: m + E.clientHeight
        };
      }
    }
    h.highlightArea(d, 0);
  }
  /** @internal */
  resetHeaderDropZone() {
    this.layoutManager.tabDropPlaceholder.remove();
  }
  /** @internal */
  setupHeaderPosition() {
    Vt(this._header.element, this._header.show), this.element.classList.remove(
      "lm_left",
      "lm_right",
      "lm_bottom"
      /* Bottom */
    ), this._header.leftRightSided && this.element.classList.add("lm_" + this._header.side), this.updateSize(!1);
  }
  /** @internal */
  highlightBodyDropZone(A) {
    if (this._contentAreaDimensions === void 0)
      throw new tA("SHBDZC82265");
    {
      const e = this._contentAreaDimensions[A].highlightArea, n = this.layoutManager.dropTargetIndicator;
      if (n === null)
        throw new TA("SHBDZD96110");
      n.highlightArea(e, 1), this._dropSegment = A;
    }
  }
  /** @internal */
  handleResize() {
    this._header.updateTabSizes();
  }
  /** @internal */
  handleMaximised() {
    this._header.processMaximised();
  }
  /** @internal */
  handleMinimised() {
    this._header.processMinimised();
  }
  /** @internal */
  handlePopoutEvent() {
    this.popout();
  }
  /** @internal */
  handleHeaderClickEvent(A) {
    const e = zA.headerClickEventName, n = new zA.ClickBubblingEvent(e, this, A);
    this.emit(e, n);
  }
  /** @internal */
  handleHeaderTouchStartEvent(A) {
    const e = zA.headerTouchStartEventName, n = new zA.TouchStartBubblingEvent(e, this, A);
    this.emit(e, n);
  }
  /** @internal */
  handleHeaderComponentRemoveEvent(A) {
    this.removeChild(A, !1);
  }
  /** @internal */
  handleHeaderComponentFocusEvent(A) {
    this.setActiveComponentItem(A, !0);
  }
  /** @internal */
  handleHeaderComponentStartDragEvent(A, e, n, s) {
    this.isMaximised === !0 && this.toggleMaximise(), this.layoutManager.startComponentDrag(A, e, n, s, this);
  }
  /** @internal */
  createHeaderConfig() {
    if (this._headerSideChanged) {
      const A = this._header.show ? this._header.side : !1;
      let e = We.Header.createCopy(this._headerConfig, A);
      return e === void 0 && (e = {
        show: A,
        popout: void 0,
        maximise: void 0,
        close: void 0,
        minimise: void 0,
        tabDropdown: void 0
      }), e;
    } else
      return We.Header.createCopy(this._headerConfig);
  }
  /** @internal */
  emitStateChangedEvent() {
    this.emitBaseBubblingEvent("stateChanged");
  }
}
(function(i) {
  function A(e) {
    const n = e.createElement("div");
    return n.classList.add(
      "lm_item"
      /* Item */
    ), n.classList.add(
      "lm_stack"
      /* Stack */
    ), n;
  }
  i.createElement = A;
})(mt || (mt = {}));
class $f extends zA {
  /**
   * @param x - The initial x position
   * @param y - The initial y position
   * @internal
   */
  constructor(A, e, n, s, o, l) {
    if (super(), this._dragListener = n, this._layoutManager = s, this._componentItem = o, this._originalParent = l, this._area = null, this._lastValidArea = null, this._dragListener.on("drag", (c, h, d) => this.onDrag(c, h, d)), this._dragListener.on("dragStop", () => this.onDrop()), this.createDragProxyElements(A, e), this._componentItem.parent === null)
      throw new TA("DPC10097");
    this._componentItemFocused = this._componentItem.focused, this._componentItemFocused && this._componentItem.blur(), this._componentItem.parent.removeChild(this._componentItem, !0), this.setDimensions(), document.body.appendChild(this._element), this.determineMinMaxXY(), this._layoutManager.calculateItemAreas(), this.setDropPosition(A, e);
  }
  get element() {
    return this._element;
  }
  /** Create Stack-like structure to contain the dragged component */
  createDragProxyElements(A, e) {
    this._element = document.createElement("div"), this._element.classList.add(
      "lm_dragProxy"
      /* DragProxy */
    );
    const n = document.createElement("div");
    n.classList.add(
      "lm_header"
      /* Header */
    );
    const s = document.createElement("div");
    s.classList.add(
      "lm_tabs"
      /* Tabs */
    );
    const o = document.createElement("div");
    o.classList.add(
      "lm_tab"
      /* Tab */
    );
    const l = document.createElement("span");
    l.classList.add(
      "lm_title"
      /* Title */
    ), o.appendChild(l), s.appendChild(o), n.appendChild(s), this._proxyContainerElement = document.createElement("div"), this._proxyContainerElement.classList.add(
      "lm_content"
      /* Content */
    ), this._element.appendChild(n), this._element.appendChild(this._proxyContainerElement), this._originalParent instanceof mt && this._originalParent.headerShow && (this._sided = this._originalParent.headerLeftRightSided, this._element.classList.add("lm_" + this._originalParent.headerSide), [Wt.right, Wt.bottom].indexOf(this._originalParent.headerSide) >= 0 && this._proxyContainerElement.insertAdjacentElement("afterend", n)), this._element.style.left = CA(A), this._element.style.top = CA(e), o.setAttribute("title", this._componentItem.title), l.insertAdjacentText("afterbegin", this._componentItem.title), this._proxyContainerElement.appendChild(this._componentItem.element);
  }
  determineMinMaxXY() {
    const A = this._layoutManager.groundItem;
    if (A === void 0)
      throw new tA("DPDMMXY73109");
    {
      const n = A.element.getBoundingClientRect();
      this._minX = n.left + document.body.scrollLeft, this._minY = n.top + document.body.scrollTop, this._maxX = this._minX + n.width, this._maxY = this._minY + n.height;
    }
  }
  /**
   * Callback on every mouseMove event during a drag. Determines if the drag is
   * still within the valid drag area and calls the layoutManager to highlight the
   * current drop area
   *
   * @param offsetX - The difference from the original x position in px
   * @param offsetY - The difference from the original y position in px
   * @param event -
   * @internal
   */
  onDrag(A, e, n) {
    const s = n.pageX, o = n.pageY;
    this.setDropPosition(s, o), this._componentItem.drag();
  }
  /**
   * Sets the target position, highlighting the appropriate area
   *
   * @param x - The x position in px
   * @param y - The y position in px
   *
   * @internal
   */
  setDropPosition(A, e) {
    this._layoutManager.layoutConfig.settings.constrainDragToContainer && (A <= this._minX ? A = Math.ceil(this._minX) : A >= this._maxX && (A = Math.floor(this._maxX)), e <= this._minY ? e = Math.ceil(this._minY) : e >= this._maxY && (e = Math.floor(this._maxY))), this._element.style.left = CA(A), this._element.style.top = CA(e), this._area = this._layoutManager.getArea(A, e), this._area !== null && (this._lastValidArea = this._area, this._area.contentItem.highlightDropZone(A, e, this._area));
  }
  /**
   * Callback when the drag has finished. Determines the drop area
   * and adds the child to it
   * @internal
   */
  onDrop() {
    const A = this._layoutManager.dropTargetIndicator;
    if (A === null)
      throw new TA("DPOD30011");
    A.hide(), this._componentItem.exitDragMode();
    let e;
    this._area !== null ? (e = this._componentItem, this._area.contentItem.onDrop(e, this._area)) : this._lastValidArea !== null ? (e = this._componentItem, this._lastValidArea.contentItem.onDrop(e, this._lastValidArea)) : this._originalParent ? (e = this._componentItem, this._originalParent.addChild(e)) : this._componentItem.destroy(), this._element.remove(), this._layoutManager.emit("itemDropped", this._componentItem), this._componentItemFocused && e !== void 0 && e.focus();
  }
  /**
   * Updates the Drag Proxy's dimensions
   * @internal
   */
  setDimensions() {
    const A = this._layoutManager.layoutConfig.dimensions;
    if (A === void 0)
      throw new Error("DragProxy.setDimensions: dimensions undefined");
    let e = A.dragProxyWidth, n = A.dragProxyHeight;
    if (e === void 0 || n === void 0)
      throw new Error("DragProxy.setDimensions: width and/or height undefined");
    const s = this._layoutManager.layoutConfig.header.show === !1 ? 0 : A.headerHeight;
    this._element.style.width = CA(e), this._element.style.height = CA(n), e -= this._sided ? s : 0, n -= this._sided ? 0 : s, this._proxyContainerElement.style.width = CA(e), this._proxyContainerElement.style.height = CA(n), this._componentItem.enterDragMode(e, n), this._componentItem.show();
  }
}
class kr {
  /** @internal */
  constructor(A, e, n, s, o, l, c) {
    this._layoutManager = A, this._element = e, this._extraAllowableChildTargets = n, this._componentTypeOrFtn = s, this._componentState = o, this._title = l, this._id = c, this._dragListener = null, this._dummyGroundContainer = document.createElement("div");
    const h = zn.createDefault("row");
    this._dummyGroundContentItem = new Jt(this._layoutManager, h, this._dummyGroundContainer), this.createDragListener();
  }
  /**
   * Disposes of the drag listeners so the drag source is not usable any more.
   * @internal
   */
  destroy() {
    this.removeDragListener();
  }
  /**
   * Called initially and after every drag
   * @internal
   */
  createDragListener() {
    this.removeDragListener(), this._dragListener = new cl(this._element, this._extraAllowableChildTargets), this._dragListener.on("dragStart", (A, e) => this.onDragStart(A, e)), this._dragListener.on("dragStop", () => this.onDragStop());
  }
  /**
   * Callback for the DragListener's dragStart event
   *
   * @param x - The x position of the mouse on dragStart
   * @param y - The x position of the mouse on dragStart
   * @internal
   */
  onDragStart(A, e) {
    var n;
    const s = "component";
    let o;
    if (typeof this._componentTypeOrFtn == "function") {
      const h = this._componentTypeOrFtn();
      kr.isDragSourceComponentItemConfig(h) ? o = {
        type: s,
        componentState: h.state,
        componentType: h.type,
        title: (n = h.title) !== null && n !== void 0 ? n : this._title
      } : o = h;
    } else
      o = {
        type: s,
        componentState: this._componentState,
        componentType: this._componentTypeOrFtn,
        title: this._title,
        id: this._id
      };
    const l = Xt.resolve(o, !1), c = new un(this._layoutManager, l, this._dummyGroundContentItem);
    if (this._dummyGroundContentItem.contentItems.push(c), this._dragListener === null)
      throw new TA("DSODSD66746");
    {
      const h = new $f(A, e, this._dragListener, this._layoutManager, c, this._dummyGroundContentItem), d = this._layoutManager.transitionIndicator;
      if (d === null)
        throw new TA("DSODST66746");
      d.transitionElements(this._element, h.element);
    }
  }
  /** @internal */
  onDragStop() {
    this.createDragListener();
  }
  /**
   * Called after every drag and when the drag source is being disposed of.
   * @internal
   */
  removeDragListener() {
    this._dragListener !== null && (this._dragListener.destroy(), this._dragListener = null);
  }
}
(function(i) {
  function A(e) {
    return !("componentType" in e);
  }
  i.isDragSourceComponentItemConfig = A;
})(kr || (kr = {}));
class LE {
  constructor() {
    this._element = document.createElement("div"), this._element.classList.add(
      "lm_dropTargetIndicator"
      /* DropTargetIndicator */
    );
    const A = document.createElement("div");
    A.classList.add(
      "lm_inner"
      /* Inner */
    ), this._element.appendChild(A), document.body.appendChild(this._element);
  }
  destroy() {
    this._element.remove();
  }
  highlightArea(A, e) {
    this._element.style.left = CA(A.x1 + e), this._element.style.top = CA(A.y1 + e), this._element.style.width = CA(A.x2 - A.x1 - e), this._element.style.height = CA(A.y2 - A.y1 - e), this._element.style.display = "block";
  }
  hide() {
    Vt(this._element, !1);
  }
}
class TE {
  constructor() {
    this._element = document.createElement("div"), this._element.classList.add(
      "lm_transition_indicator"
      /* TransitionIndicator */
    ), document.body.appendChild(this._element), this._toElement = null, this._fromDimensions = null, this._totalAnimationDuration = 200, this._animationStartTime = null;
  }
  destroy() {
    this._element.remove();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transitionElements(A, e) {
  }
  nextAnimationFrame() {
  }
  measure(A) {
    const e = A.getBoundingClientRect();
    return {
      left: e.left,
      top: e.top,
      width: A.offsetWidth,
      height: A.offsetHeight
    };
  }
}
class dn extends zA {
  /**
   * Creates a new EventHub instance
   * @param _layoutManager - the layout manager to synchronize between the windows
   * @internal
   */
  constructor(A) {
    super(), this._layoutManager = A, this._childEventListener = (e) => this.onEventFromChild(e), globalThis.addEventListener(dn.ChildEventName, this._childEventListener, { passive: !0 });
  }
  /**
   * Emit an event and notify listeners
   *
   * @param eventName - The name of the event
   * @param args - Additional arguments that will be passed to the listener
   * @public
   */
  emit(A, ...e) {
    A === "userBroadcast" ? this.emitUserBroadcast(...e) : super.emit(A, ...e);
  }
  /**
   * Broadcasts a message to all other currently opened windows.
   * @public
   */
  emitUserBroadcast(...A) {
    this.handleUserBroadcastEvent("userBroadcast", A);
  }
  /**
   * Destroys the EventHub
   * @internal
   */
  destroy() {
    globalThis.removeEventListener(dn.ChildEventName, this._childEventListener);
  }
  /**
   * Internal processor to process local events.
   * @internal
   */
  handleUserBroadcastEvent(A, e) {
    this._layoutManager.isSubWindow ? this.propagateToParent(A, e) : this.propagateToThisAndSubtree(A, e);
  }
  /**
   * Callback for child events raised on the window
   * @internal
   */
  onEventFromChild(A) {
    const e = A.detail;
    this.handleUserBroadcastEvent(e.eventName, e.args);
  }
  /**
   * Propagates the event to the parent by emitting
   * it on the parent's DOM window
   * @internal
   */
  propagateToParent(A, e) {
    const s = {
      bubbles: !0,
      cancelable: !0,
      detail: {
        layoutManager: this._layoutManager,
        eventName: A,
        args: e
      }
    }, o = new CustomEvent(dn.ChildEventName, s), l = globalThis.opener;
    if (l === null)
      throw new TA("EHPTP15778");
    l.dispatchEvent(o);
  }
  /**
   * Propagate events to the whole subtree under this event hub.
   * @internal
   */
  propagateToThisAndSubtree(A, e) {
    this.emitUnknown(A, ...e);
    for (let n = 0; n < this._layoutManager.openPopouts.length; n++) {
      const s = this._layoutManager.openPopouts[n].getGlInstance();
      s && s.eventHub.propagateToThisAndSubtree(A, e);
    }
  }
}
(function(i) {
  i.ChildEventName = "gl_child_event";
})(dn || (dn = {}));
class Bn extends zA {
  /**
  * @param container - A Dom HTML element. Defaults to body
  * @internal
  */
  constructor(A) {
    super(), this.resizeWithContainerAutomatically = !1, this.resizeDebounceInterval = 100, this.resizeDebounceExtendedWhenPossible = !0, this._isInitialised = !1, this._groundItem = void 0, this._openPopouts = [], this._dropTargetIndicator = null, this._transitionIndicator = null, this._itemAreas = [], this._maximisePlaceholder = Bn.createMaximisePlaceElement(document), this._tabDropPlaceholder = Bn.createTabDropPlaceholderElement(document), this._dragSources = [], this._updatingColumnsResponsive = !1, this._firstLoad = !0, this._eventHub = new dn(this), this._width = null, this._height = null, this._virtualSizedContainers = [], this._virtualSizedContainerAddingBeginCount = 0, this._sizeInvalidationBeginCount = 0, this._resizeObserver = new ResizeObserver(() => this.handleContainerResize()), this._windowBeforeUnloadListener = () => this.onBeforeUnload(), this._windowBeforeUnloadListening = !1, this._maximisedStackBeforeDestroyedListener = (e) => this.cleanupBeforeMaximisedStackDestroyed(e), this.isSubWindow = A.isSubWindow, this._constructorOrSubWindowLayoutConfig = A.constructorOrSubWindowLayoutConfig, Is.checkInitialise(), Pr.checkInitialise(), A.containerElement !== void 0 && (this._containerElement = A.containerElement);
  }
  get container() {
    return this._containerElement;
  }
  get isInitialised() {
    return this._isInitialised;
  }
  /** @internal */
  get groundItem() {
    return this._groundItem;
  }
  /** @internal @deprecated use {@link (LayoutManager:class).groundItem} instead */
  get root() {
    return this._groundItem;
  }
  get openPopouts() {
    return this._openPopouts;
  }
  /** @internal */
  get dropTargetIndicator() {
    return this._dropTargetIndicator;
  }
  /** @internal @deprecated To be removed */
  get transitionIndicator() {
    return this._transitionIndicator;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  /**
   * Retrieves the {@link (EventHub:class)} instance associated with this layout manager.
   * This can be used to propagate events between the windows
   * @public
   */
  get eventHub() {
    return this._eventHub;
  }
  get rootItem() {
    if (this._groundItem === void 0)
      throw new Error("Cannot access rootItem before init");
    return this._groundItem.contentItems.length === 0 ? void 0 : this._groundItem.contentItems[0];
  }
  get focusedComponentItem() {
    return this._focusedComponentItem;
  }
  /** @internal */
  get tabDropPlaceholder() {
    return this._tabDropPlaceholder;
  }
  get maximisedStack() {
    return this._maximisedStack;
  }
  /** @deprecated indicates deprecated constructor use */
  get deprecatedConstructor() {
    return !this.isSubWindow && this._constructorOrSubWindowLayoutConfig !== void 0;
  }
  /**
   * Destroys the LayoutManager instance itself as well as every ContentItem
   * within it. After this is called nothing should be left of the LayoutManager.
   *
   * This function only needs to be called if an application wishes to destroy the Golden Layout object while
   * a page remains loaded. When a page is unloaded, all resources claimed by Golden Layout will automatically
   * be released.
   */
  destroy() {
    if (this._isInitialised) {
      this._windowBeforeUnloadListening && (globalThis.removeEventListener("beforeunload", this._windowBeforeUnloadListener), this._windowBeforeUnloadListening = !1), this.layoutConfig.settings.closePopoutsOnUnload === !0 && this.closeAllOpenPopouts(), this._resizeObserver.disconnect(), this.checkClearResizeTimeout(), this._groundItem !== void 0 && this._groundItem.destroy(), this._tabDropPlaceholder.remove(), this._dropTargetIndicator !== null && this._dropTargetIndicator.destroy(), this._transitionIndicator !== null && this._transitionIndicator.destroy(), this._eventHub.destroy();
      for (const A of this._dragSources)
        A.destroy();
      this._dragSources = [], this._isInitialised = !1;
    }
  }
  /**
   * Takes a GoldenLayout configuration object and
   * replaces its keys and values recursively with
   * one letter codes
   * @deprecated use {@link (ResolvedLayoutConfig:namespace).minifyConfig} instead
   */
  minifyConfig(A) {
    return AA.minifyConfig(A);
  }
  /**
   * Takes a configuration Object that was previously minified
   * using minifyConfig and returns its original version
   * @deprecated use {@link (ResolvedLayoutConfig:namespace).unminifyConfig} instead
   */
  unminifyConfig(A) {
    return AA.unminifyConfig(A);
  }
  /**
   * Called from GoldenLayout class. Finishes of init
   * @internal
   */
  init() {
    this.setContainer(), this._dropTargetIndicator = new LE(
      /*this.container*/
    ), this._transitionIndicator = new TE(), this.updateSizeFromContainer();
    let A;
    if (this.isSubWindow) {
      if (this._constructorOrSubWindowLayoutConfig === void 0)
        throw new tA("LMIU07155");
      {
        const n = this._constructorOrSubWindowLayoutConfig.root;
        if (n === void 0)
          throw new pA("LMIC07156");
        if (GA.isComponent(n))
          A = n;
        else
          throw new pA("LMIC07157");
        const s = ce.resolve(this._constructorOrSubWindowLayoutConfig);
        this.layoutConfig = Object.assign(Object.assign({}, s), { root: void 0 });
      }
    } else
      this._constructorOrSubWindowLayoutConfig === void 0 ? this.layoutConfig = AA.createDefault() : this.layoutConfig = ce.resolve(this._constructorOrSubWindowLayoutConfig);
    const e = this.layoutConfig;
    this._groundItem = new Jt(this, e.root, this._containerElement), this._groundItem.init(), this.checkLoadedLayoutMaximiseItem(), this._resizeObserver.observe(this._containerElement), this._isInitialised = !0, this.adjustColumnsResponsive(), this.emit("initialised"), A !== void 0 && this.loadComponentAsRoot(A);
  }
  /**
   * Loads a new layout
   * @param layoutConfig - New layout to be loaded
   */
  loadLayout(A) {
    if (this.isInitialised) {
      if (this._groundItem === void 0)
        throw new tA("LMLL11119");
      this.createSubWindows(), this.layoutConfig = ce.resolve(A), this._groundItem.loadRoot(this.layoutConfig.root), this.checkLoadedLayoutMaximiseItem(), this.adjustColumnsResponsive();
    } else
      throw new Error("GoldenLayout: Need to call init() if LayoutConfig with defined root passed to constructor");
  }
  /**
   * Creates a layout configuration object based on the the current state
   *
   * @public
   * @returns GoldenLayout configuration
   */
  saveLayout() {
    if (this._isInitialised === !1)
      throw new Error("Can't create config, layout not yet initialised");
    if (this._groundItem === void 0)
      throw new tA("LMTC18244");
    {
      const A = this._groundItem.calculateConfigContent();
      let e;
      A.length !== 1 ? e = void 0 : e = A[0], this.reconcilePopoutWindows();
      const n = [];
      for (let o = 0; o < this._openPopouts.length; o++)
        n.push(this._openPopouts[o].toConfig());
      return {
        root: e,
        openPopouts: n,
        settings: AA.Settings.createCopy(this.layoutConfig.settings),
        dimensions: AA.Dimensions.createCopy(this.layoutConfig.dimensions),
        header: AA.Header.createCopy(this.layoutConfig.header),
        resolved: !0
      };
    }
  }
  /**
   * Removes any existing layout. Effectively, an empty layout will be loaded.
   */
  clear() {
    if (this._groundItem === void 0)
      throw new tA("LMCL11129");
    this._groundItem.clearRoot();
  }
  /**
   * @deprecated Use {@link (LayoutManager:class).saveLayout}
   */
  toConfig() {
    return this.saveLayout();
  }
  /**
   * Adds a new ComponentItem.  Will use default location selectors to ensure a location is found and
   * component is successfully added
   * @param componentTypeName - Name of component type to be created.
   * @param state - Optional initial state to be assigned to component
   * @returns New ComponentItem created.
   */
  newComponent(A, e, n) {
    const s = this.newComponentAtLocation(A, e, n);
    if (s === void 0)
      throw new pA("LMNC65588");
    return s;
  }
  /**
   * Adds a ComponentItem at the first valid selector location.
   * @param componentTypeName - Name of component type to be created.
   * @param state - Optional initial state to be assigned to component
   * @param locationSelectors - Array of location selectors used to find location in layout where component
   * will be added. First location in array which is valid will be used. If locationSelectors is undefined,
   * {@link (LayoutManager:namespace).defaultLocationSelectors} will be used
   * @returns New ComponentItem created or undefined if no valid location selector was in array.
   */
  newComponentAtLocation(A, e, n, s) {
    if (this._groundItem === void 0)
      throw new Error("Cannot add component before init");
    {
      const o = this.addComponentAtLocation(A, e, n, s);
      if (o === void 0)
        return;
      {
        const l = o.parentItem.contentItems[o.index];
        if (He.isComponentItem(l))
          return l;
        throw new pA("LMNC992877533");
      }
    }
  }
  /**
   * Adds a new ComponentItem.  Will use default location selectors to ensure a location is found and
   * component is successfully added
   * @param componentType - Type of component to be created.
   * @param state - Optional initial state to be assigned to component
   * @returns Location of new ComponentItem created.
   */
  addComponent(A, e, n) {
    const s = this.addComponentAtLocation(A, e, n);
    if (s === void 0)
      throw new pA("LMAC99943");
    return s;
  }
  /**
   * Adds a ComponentItem at the first valid selector location.
   * @param componentType - Type of component to be created.
   * @param state - Optional initial state to be assigned to component
   * @param locationSelectors - Array of location selectors used to find determine location in layout where component
   * will be added. First location in array which is valid will be used. If undefined,
   * {@link (LayoutManager:namespace).defaultLocationSelectors} will be used.
   * @returns Location of new ComponentItem created or undefined if no valid location selector was in array.
   */
  addComponentAtLocation(A, e, n, s) {
    const o = {
      type: "component",
      componentType: A,
      componentState: e,
      title: n
    };
    return this.addItemAtLocation(o, s);
  }
  /**
   * Adds a new ContentItem.  Will use default location selectors to ensure a location is found and
   * component is successfully added
   * @param itemConfig - ResolvedItemConfig of child to be added.
   * @returns New ContentItem created.
  */
  newItem(A) {
    const e = this.newItemAtLocation(A);
    if (e === void 0)
      throw new pA("LMNC65588");
    return e;
  }
  /**
   * Adds a new child ContentItem under the root ContentItem.  If a root does not exist, then create root ContentItem instead
   * @param itemConfig - ResolvedItemConfig of child to be added.
   * @param locationSelectors - Array of location selectors used to find determine location in layout where ContentItem
   * will be added. First location in array which is valid will be used. If undefined,
   * {@link (LayoutManager:namespace).defaultLocationSelectors} will be used.
   * @returns New ContentItem created or undefined if no valid location selector was in array. */
  newItemAtLocation(A, e) {
    if (this._groundItem === void 0)
      throw new Error("Cannot add component before init");
    {
      const n = this.addItemAtLocation(A, e);
      return n === void 0 ? void 0 : n.parentItem.contentItems[n.index];
    }
  }
  /**
   * Adds a new ContentItem.  Will use default location selectors to ensure a location is found and
   * component is successfully added.
   * @param itemConfig - ResolvedItemConfig of child to be added.
   * @returns Location of new ContentItem created. */
  addItem(A) {
    const e = this.addItemAtLocation(A);
    if (e === void 0)
      throw new pA("LMAI99943");
    return e;
  }
  /**
   * Adds a ContentItem at the first valid selector location.
   * @param itemConfig - ResolvedItemConfig of child to be added.
   * @param locationSelectors - Array of location selectors used to find determine location in layout where ContentItem
   * will be added. First location in array which is valid will be used. If undefined,
   * {@link (LayoutManager:namespace).defaultLocationSelectors} will be used.
   * @returns Location of new ContentItem created or undefined if no valid location selector was in array. */
  addItemAtLocation(A, e) {
    if (this._groundItem === void 0)
      throw new Error("Cannot add component before init");
    {
      e === void 0 && (e = Bn.defaultLocationSelectors);
      const n = this.findFirstLocation(e);
      if (n === void 0)
        return;
      {
        let s = n.parentItem, o;
        switch (s.type) {
          case M.ground: {
            o = s.addItem(A, n.index), o >= 0 ? s = this._groundItem.contentItems[0] : o = 0;
            break;
          }
          case M.row:
          case M.column: {
            o = s.addItem(A, n.index);
            break;
          }
          case M.stack:
            if (GA.isComponent(A)) {
              o = s.addItem(A, n.index);
              break;
            } else
              throw Error(Qe[
                6
                /* ItemConfigIsNotTypeComponent */
              ]);
          case M.component:
            throw new pA("LMAIALC87444602");
          default:
            throw new xe("LMAIALU98881733", s.type);
        }
        if (GA.isComponent(A)) {
          const l = s.contentItems[o];
          He.isStack(l) && (s = l, o = 0);
        }
        return n.parentItem = s, n.index = o, n;
      }
    }
  }
  /** Loads the specified component ResolvedItemConfig as root.
   * This can be used to display a Component all by itself.  The layout cannot be changed other than having another new layout loaded.
   * Note that, if this layout is saved and reloaded, it will reload with the Component as a child of a Stack.
  */
  loadComponentAsRoot(A) {
    if (this._groundItem === void 0)
      throw new Error("Cannot add item before init");
    this._groundItem.loadComponentAsRoot(A);
  }
  /** @deprecated Use {@link (LayoutManager:class).setSize} */
  updateSize(A, e) {
    this.setSize(A, e);
  }
  /**
   * Updates the layout managers size
   *
   * @param width - Width in pixels
   * @param height - Height in pixels
   */
  setSize(A, e) {
    if (this._width = A, this._height = e, this._isInitialised === !0) {
      if (this._groundItem === void 0)
        throw new tA("LMUS18881");
      if (this._groundItem.setSize(this._width, this._height), this._maximisedStack) {
        const { width: n, height: s } = Pt(this._containerElement);
        be(this._maximisedStack.element, n), Se(this._maximisedStack.element, s), this._maximisedStack.updateSize(!1);
      }
      this.adjustColumnsResponsive();
    }
  }
  /** @internal */
  beginSizeInvalidation() {
    this._sizeInvalidationBeginCount++;
  }
  /** @internal */
  endSizeInvalidation() {
    --this._sizeInvalidationBeginCount === 0 && this.updateSizeFromContainer();
  }
  /** @internal */
  updateSizeFromContainer() {
    const { width: A, height: e } = Pt(this._containerElement);
    this.setSize(A, e);
  }
  /**
   * Update the size of the root ContentItem.  This will update the size of all contentItems in the tree
   * @param force - In some cases the size is not updated if it has not changed. In this case, events
   * (such as ComponentContainer.virtualRectingRequiredEvent) are not fired. Setting force to true, ensures the size is updated regardless, and
   * the respective events are fired. This is sometimes necessary when a component's size has not changed but it has become visible, and the
   * relevant events need to be fired.
   */
  updateRootSize(A = !1) {
    if (this._groundItem === void 0)
      throw new tA("LMURS28881");
    this._groundItem.updateSize(A);
  }
  /** @public */
  createAndInitContentItem(A, e) {
    const n = this.createContentItem(A, e);
    return n.init(), n;
  }
  /**
   * Recursively creates new item tree structures based on a provided
   * ItemConfiguration object
   *
   * @param config - ResolvedItemConfig
   * @param parent - The item the newly created item should be a child of
   * @internal
   */
  createContentItem(A, e) {
    if (typeof A.type != "string")
      throw new fn("Missing parameter 'type'", JSON.stringify(A));
    return (
      // If this is a component
      aA.isComponentItem(A) && // and it's not already within a stack
      !(e instanceof mt) && e && // and it's not the topmost item in a new window
      !(this.isSubWindow === !0 && e instanceof Jt) && (A = {
        type: M.stack,
        content: [A],
        size: A.size,
        sizeUnit: A.sizeUnit,
        minSize: A.minSize,
        minSizeUnit: A.minSizeUnit,
        id: A.id,
        maximised: A.maximised,
        isClosable: A.isClosable,
        activeItemIndex: 0,
        header: void 0
      }), this.createContentItemFromConfig(A, e)
    );
  }
  findFirstComponentItemById(A) {
    if (this._groundItem === void 0)
      throw new tA("LMFFCIBI82446");
    return this.findFirstContentItemTypeByIdRecursive(M.component, A, this._groundItem);
  }
  /**
   * Creates a popout window with the specified content at the specified position
   *
   * @param itemConfigOrContentItem - The content of the popout window's layout manager derived from either
   * a {@link (ContentItem:class)} or {@link (ItemConfig:interface)} or ResolvedItemConfig content (array of {@link (ItemConfig:interface)})
   * @param positionAndSize - The width, height, left and top of Popout window
   * @param parentId -The id of the element this item will be appended to when popIn is called
   * @param indexInParent - The position of this item within its parent element
   */
  createPopout(A, e, n, s) {
    return A instanceof He ? this.createPopoutFromContentItem(A, e, n, s) : this.createPopoutFromItemConfig(A, e, n, s);
  }
  /** @internal */
  createPopoutFromContentItem(A, e, n, s) {
    let o = A.parent, l = A;
    for (; o !== null && o.contentItems.length === 1 && !o.isGround; )
      l = o, o = o.parent;
    if (o === null)
      throw new TA("LMCPFCI00834");
    {
      if (s === void 0 && (s = o.contentItems.indexOf(l)), n !== null && o.addPopInParentId(n), e === void 0) {
        const h = globalThis.screenX || globalThis.screenLeft, d = globalThis.screenY || globalThis.screenTop, w = A.element.offsetLeft, p = A.element.offsetTop, { width: m, height: U } = Pt(A.element);
        e = {
          left: h + w,
          top: d + p,
          width: m,
          height: U
        };
      }
      const c = A.toConfig();
      if (A.remove(), gn.isRootItemConfig(c))
        return this.createPopoutFromItemConfig(c, e, n, s);
      throw new Error(`${Qe[
        0
        /* PopoutCannotBeCreatedWithGroundItemConfig */
      ]}`);
    }
  }
  /** @internal */
  beginVirtualSizedContainerAdding() {
    ++this._virtualSizedContainerAddingBeginCount === 0 && (this._virtualSizedContainers.length = 0);
  }
  /** @internal */
  addVirtualSizedContainer(A) {
    this._virtualSizedContainers.push(A);
  }
  /** @internal */
  endVirtualSizedContainerAdding() {
    if (--this._virtualSizedContainerAddingBeginCount === 0) {
      const A = this._virtualSizedContainers.length;
      if (A > 0) {
        this.fireBeforeVirtualRectingEvent(A);
        for (let e = 0; e < A; e++)
          this._virtualSizedContainers[e].notifyVirtualRectingRequired();
        this.fireAfterVirtualRectingEvent(), this._virtualSizedContainers.length = 0;
      }
    }
  }
  /** @internal */
  fireBeforeVirtualRectingEvent(A) {
    this.beforeVirtualRectingEvent !== void 0 && this.beforeVirtualRectingEvent(A);
  }
  /** @internal */
  fireAfterVirtualRectingEvent() {
    this.afterVirtualRectingEvent !== void 0 && this.afterVirtualRectingEvent();
  }
  /** @internal */
  createPopoutFromItemConfig(A, e, n, s) {
    const o = this.toConfig(), l = {
      root: A,
      openPopouts: [],
      settings: o.settings,
      dimensions: o.dimensions,
      header: o.header,
      window: e,
      parentId: n,
      indexInParent: s,
      resolved: !0
    };
    return this.createPopoutFromPopoutLayoutConfig(l);
  }
  /** @internal */
  createPopoutFromPopoutLayoutConfig(A) {
    var e, n, s, o;
    const l = A.window, c = {
      left: (e = l.left) !== null && e !== void 0 ? e : globalThis.screenX || globalThis.screenLeft + 20,
      top: (n = l.top) !== null && n !== void 0 ? n : globalThis.screenY || globalThis.screenTop + 20,
      width: (s = l.width) !== null && s !== void 0 ? s : 500,
      height: (o = l.height) !== null && o !== void 0 ? o : 309
    }, h = new yE(A, c, this);
    return h.on("initialised", () => this.emit("windowOpened", h)), h.on("closed", () => this.reconcilePopoutWindows()), this._openPopouts.push(h), this.layoutConfig.settings.closePopoutsOnUnload && !this._windowBeforeUnloadListening && (globalThis.addEventListener("beforeunload", this._windowBeforeUnloadListener, { passive: !0 }), this._windowBeforeUnloadListening = !0), h;
  }
  /**
   * Closes all Open Popouts
   * Applications can call this method when a page is unloaded to remove its open popouts
   */
  closeAllOpenPopouts() {
    for (let A = 0; A < this._openPopouts.length; A++)
      this._openPopouts[A].close();
    this._openPopouts.length = 0, this._windowBeforeUnloadListening && (globalThis.removeEventListener("beforeunload", this._windowBeforeUnloadListener), this._windowBeforeUnloadListening = !1);
  }
  newDragSource(A, e, n, s, o) {
    const l = new kr(this, A, [], e, n, s, o);
    return this._dragSources.push(l), l;
  }
  /**
   * Removes a DragListener added by createDragSource() so the corresponding
   * DOM element is not a drag source any more.
   */
  removeDragSource(A) {
    IE(A, this._dragSources), A.destroy();
  }
  /** @internal */
  startComponentDrag(A, e, n, s, o) {
    new $f(A, e, n, this, s, o);
  }
  /**
   * Programmatically focuses an item. This focuses the specified component item
   * and the item emits a focus event
   *
   * @param item - The component item to be focused
   * @param suppressEvent - Whether to emit focus event
   */
  focusComponent(A, e = !1) {
    A.focus(e);
  }
  /**
   * Programmatically blurs (defocuses) the currently focused component.
   * If a component item is focused, then it is blurred and and the item emits a blur event
   *
   * @param item - The component item to be blurred
   * @param suppressEvent - Whether to emit blur event
   */
  clearComponentFocus(A = !1) {
    this.setFocusedComponentItem(void 0, A);
  }
  /**
   * Programmatically focuses a component item or removes focus (blurs) from an existing focused component item.
   *
   * @param item - If defined, specifies the component item to be given focus.  If undefined, clear component focus.
   * @param suppressEvents - Whether to emit focus and blur events
   * @internal
   */
  setFocusedComponentItem(A, e = !1) {
    if (A !== this._focusedComponentItem) {
      let n;
      if (A === void 0 || (n = A.parentItem), this._focusedComponentItem !== void 0) {
        const s = this._focusedComponentItem;
        this._focusedComponentItem = void 0, s.setBlurred(e);
        const o = s.parentItem;
        n === o ? n = void 0 : o.setFocusedValue(!1);
      }
      A !== void 0 && (this._focusedComponentItem = A, A.setFocused(e), n !== void 0 && n.setFocusedValue(!0));
    }
  }
  /** @internal */
  createContentItemFromConfig(A, e) {
    switch (A.type) {
      case M.ground:
        throw new pA("LMCCIFC68871");
      case M.row:
        return new wn(!1, this, A, e);
      case M.column:
        return new wn(!0, this, A, e);
      case M.stack:
        return new mt(this, A, e);
      case M.component:
        return new un(this, A, e);
      default:
        throw new xe("CCC913564", A.type, "Invalid Config Item type specified");
    }
  }
  /**
   * This should only be called from stack component.
   * Stack will look after docking processing associated with maximise/minimise
   * @internal
   **/
  setMaximisedStack(A) {
    A === void 0 ? this._maximisedStack !== void 0 && this.processMinimiseMaximisedStack() : A !== this._maximisedStack && (this._maximisedStack !== void 0 && this.processMinimiseMaximisedStack(), this.processMaximiseStack(A));
  }
  checkMinimiseMaximisedStack() {
    this._maximisedStack !== void 0 && this._maximisedStack.minimise();
  }
  // showAllActiveContentItems() was called from ContentItem.show().  Not sure what its purpose was so have commented out
  // Everything seems to work ok without this.  Have left commented code just in case there was a reason for it becomes
  // apparent
  // /** @internal */
  // showAllActiveContentItems(): void {
  //     const allStacks = this.getAllStacks();
  //     for (let i = 0; i < allStacks.length; i++) {
  //         const stack = allStacks[i];
  //         const activeContentItem = stack.getActiveComponentItem();
  //         if (activeContentItem !== undefined) {
  //             if (!(activeContentItem instanceof ComponentItem)) {
  //                 throw new AssertError('LMSAACIS22298');
  //             } else {
  //                 activeContentItem.container.show();
  //             }
  //         }
  //     }
  // }
  // hideAllActiveContentItems() was called from ContentItem.hide().  Not sure what its purpose was so have commented out
  // Everything seems to work ok without this.  Have left commented code just in case there was a reason for it becomes
  // apparent
  // /** @internal */
  // hideAllActiveContentItems(): void {
  //     const allStacks = this.getAllStacks();
  //     for (let i = 0; i < allStacks.length; i++) {
  //         const stack = allStacks[i];
  //         const activeContentItem = stack.getActiveComponentItem();
  //         if (activeContentItem !== undefined) {
  //             if (!(activeContentItem instanceof ComponentItem)) {
  //                 throw new AssertError('LMSAACIH22298');
  //             } else {
  //                 activeContentItem.container.hide();
  //             }
  //         }
  //     }
  // }
  /** @internal */
  cleanupBeforeMaximisedStackDestroyed(A) {
    this._maximisedStack !== null && this._maximisedStack === A.target && (this._maximisedStack.off("beforeItemDestroyed", this._maximisedStackBeforeDestroyedListener), this._maximisedStack = void 0);
  }
  /**
   * This method is used to get around sandboxed iframe restrictions.
   * If 'allow-top-navigation' is not specified in the iframe's 'sandbox' attribute
   * (as is the case with codepens) the parent window is forbidden from calling certain
   * methods on the child, such as window.close() or setting document.location.href.
   *
   * This prevented GoldenLayout popouts from popping in in codepens. The fix is to call
   * _$closeWindow on the child window's gl instance which (after a timeout to disconnect
   * the invoking method from the close call) closes itself.
   *
   * @internal
   */
  closeWindow() {
    globalThis.setTimeout(() => globalThis.close(), 1);
  }
  /** @internal */
  getArea(A, e) {
    let n = null, s = 1 / 0;
    for (let o = 0; o < this._itemAreas.length; o++) {
      const l = this._itemAreas[o];
      A >= l.x1 && A < l.x2 && // x2 is not included in area
      e >= l.y1 && e < l.y2 && // y2 is not included in area
      s > l.surface && (s = l.surface, n = l);
    }
    return n;
  }
  /** @internal */
  calculateItemAreas() {
    const A = this.getAllContentItems(), e = this._groundItem;
    if (e === void 0)
      throw new tA("LMCIAR44365");
    if (A.length === 1) {
      const n = e.getElementArea();
      if (n === null)
        throw new TA("LMCIARA44365");
      this._itemAreas = [n];
      return;
    } else {
      e.contentItems[0].isStack ? this._itemAreas = [] : this._itemAreas = e.createSideAreas();
      for (let n = 0; n < A.length; n++) {
        const s = A[n];
        if (He.isStack(s)) {
          const o = s.getArea();
          if (o === null)
            continue;
          {
            this._itemAreas.push(o);
            const l = s.contentAreaDimensions;
            if (l === void 0)
              throw new tA("LMCIASC45599");
            {
              const c = l.header.highlightArea, h = (c.x2 - c.x1) * (c.y2 - c.y1), d = {
                x1: c.x1,
                x2: c.x2,
                y1: c.y1,
                y2: c.y2,
                contentItem: s,
                surface: h
              };
              this._itemAreas.push(d);
            }
          }
        }
      }
    }
  }
  /**
   * Called as part of loading a new layout (including initial init()).
   * Checks to see layout has a maximised item. If so, it maximises that item.
   * @internal
   */
  checkLoadedLayoutMaximiseItem() {
    if (this._groundItem === void 0)
      throw new tA("LMCLLMI43432");
    {
      const A = this._groundItem.getConfigMaximisedItems();
      if (A.length > 0) {
        let e = A[0];
        if (He.isComponentItem(e)) {
          const n = e.parent;
          if (n === null)
            throw new TA("LMXLLMI69999");
          e = n;
        }
        if (He.isStack(e))
          e.maximise();
        else
          throw new pA("LMCLLMI19993");
      }
    }
  }
  /** @internal */
  processMaximiseStack(A) {
    if (this._maximisedStack = A, A.on("beforeItemDestroyed", this._maximisedStackBeforeDestroyedListener), A.element.classList.add(
      "lm_maximised"
      /* Maximised */
    ), A.element.insertAdjacentElement("afterend", this._maximisePlaceholder), this._groundItem === void 0)
      throw new tA("LMMXI19993");
    {
      this._groundItem.element.prepend(A.element);
      const { width: e, height: n } = Pt(this._containerElement);
      be(A.element, e), Se(A.element, n), A.updateSize(!0), A.focusActiveContentItem(), this._maximisedStack.emit("maximised"), this.emit("stateChanged");
    }
  }
  /** @internal */
  processMinimiseMaximisedStack() {
    if (this._maximisedStack === void 0)
      throw new pA("LMMMS74422");
    {
      const A = this._maximisedStack;
      if (A.parent === null)
        throw new TA("LMMI13668");
      A.element.classList.remove(
        "lm_maximised"
        /* Maximised */
      ), this._maximisePlaceholder.insertAdjacentElement("afterend", A.element), this._maximisePlaceholder.remove(), this.updateRootSize(!0), this._maximisedStack = void 0, A.off("beforeItemDestroyed", this._maximisedStackBeforeDestroyedListener), A.emit("minimised"), this.emit("stateChanged");
    }
  }
  /**
   * Iterates through the array of open popout windows and removes the ones
   * that are effectively closed. This is necessary due to the lack of reliably
   * listening for window.close / unload events in a cross browser compatible fashion.
   * @internal
   */
  reconcilePopoutWindows() {
    const A = [];
    for (let e = 0; e < this._openPopouts.length; e++)
      this._openPopouts[e].getWindow().closed === !1 ? A.push(this._openPopouts[e]) : this.emit("windowClosed", this._openPopouts[e]);
    this._openPopouts.length !== A.length && (this._openPopouts = A, this.emit("stateChanged"));
  }
  /**
   * Returns a flattened array of all content items,
   * regardles of level or type
   * @internal
   */
  getAllContentItems() {
    if (this._groundItem === void 0)
      throw new tA("LMGACI13130");
    return this._groundItem.getAllContentItems();
  }
  /**
   * Creates Subwindows (if there are any). Throws an error
   * if popouts are blocked.
   * @internal
   */
  createSubWindows() {
    for (let A = 0; A < this.layoutConfig.openPopouts.length; A++) {
      const e = this.layoutConfig.openPopouts[A];
      this.createPopoutFromPopoutLayoutConfig(e);
    }
  }
  /**
   * Debounces resize events
   * @internal
   */
  handleContainerResize() {
    this.resizeWithContainerAutomatically && this.processResizeWithDebounce();
  }
  /**
   * Debounces resize events
   * @internal
   */
  processResizeWithDebounce() {
    this.resizeDebounceExtendedWhenPossible && this.checkClearResizeTimeout(), this._resizeTimeoutId === void 0 && (this._resizeTimeoutId = setTimeout(() => {
      this._resizeTimeoutId = void 0, this.beginSizeInvalidation(), this.endSizeInvalidation();
    }, this.resizeDebounceInterval));
  }
  checkClearResizeTimeout() {
    this._resizeTimeoutId !== void 0 && (clearTimeout(this._resizeTimeoutId), this._resizeTimeoutId = void 0);
  }
  /**
   * Determines what element the layout will be created in
   * @internal
   */
  setContainer() {
    var A;
    const e = document.body, n = (A = this._containerElement) !== null && A !== void 0 ? A : e;
    if (n === e) {
      this.resizeWithContainerAutomatically = !0;
      const s = document.documentElement;
      s.style.height = "100%", s.style.margin = "0", s.style.padding = "0", s.style.overflow = "clip", e.style.height = "100%", e.style.margin = "0", e.style.padding = "0", e.style.overflow = "clip";
    }
    this._containerElement = n;
  }
  /**
   * Called when the window is closed or the user navigates away
   * from the page
   * @internal
   * @deprecated to be removed in version 3
   */
  onBeforeUnload() {
    this.destroy();
  }
  /**
   * Adjusts the number of columns to be lower to fit the screen and still maintain minItemWidth.
   * @internal
   */
  adjustColumnsResponsive() {
    if (this._groundItem === void 0)
      throw new tA("LMACR20883");
    if (this._firstLoad = !1, this.useResponsiveLayout() && !this._updatingColumnsResponsive && this._groundItem.contentItems.length > 0 && this._groundItem.contentItems[0].isRow) {
      if (this._groundItem === void 0 || this._width === null)
        throw new tA("LMACR77412");
      {
        const A = this._groundItem.contentItems[0].contentItems.length;
        if (A <= 1)
          return;
        {
          const e = this.layoutConfig.dimensions.defaultMinItemWidth;
          if (A * e <= this._width)
            return;
          {
            this._updatingColumnsResponsive = !0;
            const s = Math.max(Math.floor(this._width / e), 1), o = A - s, l = this._groundItem.contentItems[0], c = this.getAllStacks();
            if (c.length === 0)
              throw new pA("LMACRS77413");
            {
              const h = c[0];
              for (let d = 0; d < o; d++) {
                const w = l.contentItems[l.contentItems.length - 1];
                this.addChildContentItemsToContainer(h, w);
              }
              this._updatingColumnsResponsive = !1;
            }
          }
        }
      }
    }
  }
  /**
   * Determines if responsive layout should be used.
   *
   * @returns True if responsive layout should be used; otherwise false.
   * @internal
   */
  useResponsiveLayout() {
    const A = this.layoutConfig.settings, e = A.responsiveMode === Or.always, n = A.responsiveMode === Or.onload && this._firstLoad;
    return e || n;
  }
  /**
   * Adds all children of a node to another container recursively.
   * @param container - Container to add child content items to.
   * @param node - Node to search for content items.
   * @internal
   */
  addChildContentItemsToContainer(A, e) {
    const n = e.contentItems;
    if (e instanceof mt)
      for (let s = 0; s < n.length; s++) {
        const o = n[s];
        e.removeChild(o, !0), A.addChild(o);
      }
    else
      for (let s = 0; s < n.length; s++) {
        const o = n[s];
        this.addChildContentItemsToContainer(A, o);
      }
  }
  /**
   * Finds all the stacks.
   * @returns The found stack containers.
   * @internal
   */
  getAllStacks() {
    if (this._groundItem === void 0)
      throw new tA("LMFASC52778");
    {
      const A = [];
      return this.findAllStacksRecursive(A, this._groundItem), A;
    }
  }
  /** @internal */
  findFirstContentItemType(A) {
    if (this._groundItem === void 0)
      throw new tA("LMFFCIT82446");
    return this.findFirstContentItemTypeRecursive(A, this._groundItem);
  }
  /** @internal */
  findFirstContentItemTypeRecursive(A, e) {
    const n = e.contentItems, s = n.length;
    if (s !== 0) {
      for (let o = 0; o < s; o++) {
        const l = n[o];
        if (l.type === A)
          return l;
      }
      for (let o = 0; o < s; o++) {
        const l = n[o], c = this.findFirstContentItemTypeRecursive(A, l);
        if (c !== void 0)
          return c;
      }
      return;
    }
  }
  /** @internal */
  findFirstContentItemTypeByIdRecursive(A, e, n) {
    const s = n.contentItems, o = s.length;
    if (o !== 0) {
      for (let l = 0; l < o; l++) {
        const c = s[l];
        if (c.type === A && c.id === e)
          return c;
      }
      for (let l = 0; l < o; l++) {
        const c = s[l], h = this.findFirstContentItemTypeByIdRecursive(A, e, c);
        if (h !== void 0)
          return h;
      }
      return;
    }
  }
  /**
   * Finds all the stack containers.
   *
   * @param stacks - Set of containers to populate.
   * @param node - Current node to process.
   * @internal
   */
  findAllStacksRecursive(A, e) {
    const n = e.contentItems;
    for (let s = 0; s < n.length; s++) {
      const o = n[s];
      o instanceof mt ? A.push(o) : o.isComponent || this.findAllStacksRecursive(A, o);
    }
  }
  /** @internal */
  findFirstLocation(A) {
    const e = A.length;
    for (let n = 0; n < e; n++) {
      const s = A[n], o = this.findLocation(s);
      if (o !== void 0)
        return o;
    }
  }
  /** @internal */
  findLocation(A) {
    const e = A.index;
    switch (A.typeId) {
      case 0: {
        if (this._focusedComponentItem === void 0)
          return;
        {
          const n = this._focusedComponentItem.parentItem, s = n.contentItems, o = s.length;
          if (e === void 0)
            return { parentItem: n, index: o };
          {
            const c = s.indexOf(this._focusedComponentItem) + e;
            return c < 0 || c > o ? void 0 : { parentItem: n, index: c };
          }
        }
      }
      case 1: {
        if (this._focusedComponentItem === void 0)
          return;
        {
          const n = this._focusedComponentItem.parentItem;
          return this.tryCreateLocationFromParentItem(n, e);
        }
      }
      case 2: {
        const n = this.findFirstContentItemType(M.stack);
        return n === void 0 ? void 0 : this.tryCreateLocationFromParentItem(n, e);
      }
      case 3: {
        let n = this.findFirstContentItemType(M.row);
        return n !== void 0 ? this.tryCreateLocationFromParentItem(n, e) : (n = this.findFirstContentItemType(M.column), n !== void 0 ? this.tryCreateLocationFromParentItem(n, e) : void 0);
      }
      case 4: {
        const n = this.findFirstContentItemType(M.row);
        return n === void 0 ? void 0 : this.tryCreateLocationFromParentItem(n, e);
      }
      case 5: {
        const n = this.findFirstContentItemType(M.column);
        return n === void 0 ? void 0 : this.tryCreateLocationFromParentItem(n, e);
      }
      case 6: {
        if (this._groundItem === void 0)
          throw new tA("LMFLRIF18244");
        return this.rootItem !== void 0 ? void 0 : e === void 0 || e === 0 ? { parentItem: this._groundItem, index: 0 } : void 0;
      }
      case 7: {
        if (this._groundItem === void 0)
          throw new tA("LMFLF18244");
        {
          const n = this._groundItem.contentItems;
          if (n.length === 0)
            return e === void 0 || e === 0 ? { parentItem: this._groundItem, index: 0 } : void 0;
          {
            const s = n[0];
            return this.tryCreateLocationFromParentItem(s, e);
          }
        }
      }
    }
  }
  /** @internal */
  tryCreateLocationFromParentItem(A, e) {
    const s = A.contentItems.length;
    return e === void 0 ? { parentItem: A, index: s } : e < 0 || e > s ? void 0 : { parentItem: A, index: e };
  }
}
(function(i) {
  function A(n) {
    const s = n.createElement("div");
    return s.classList.add(
      "lm_maximise_place"
      /* MaximisePlace */
    ), s;
  }
  i.createMaximisePlaceElement = A;
  function e(n) {
    const s = n.createElement("div");
    return s.classList.add(
      "lm_drop_tab_placeholder"
      /* DropTabPlaceholder */
    ), s;
  }
  i.createTabDropPlaceholderElement = e, i.defaultLocationSelectors = [
    { typeId: 1, index: void 0 },
    { typeId: 2, index: void 0 },
    { typeId: 3, index: void 0 },
    { typeId: 7, index: void 0 }
  ], i.afterFocusedItemIfPossibleLocationSelectors = [
    { typeId: 0, index: 1 },
    { typeId: 2, index: void 0 },
    { typeId: 3, index: void 0 },
    { typeId: 7, index: void 0 }
  ];
})(Bn || (Bn = {}));
class Wr extends Bn {
  /** @internal */
  constructor(A, e, n, s) {
    if (super(Wr.createLayoutManagerConstructorParameters(A, e)), this._bindComponentEventHanlderPassedInConstructor = !1, this._creationTimeoutPassed = !1, e !== void 0 && typeof e == "function" && (this.bindComponentEvent = e, this._bindComponentEventHanlderPassedInConstructor = !0, n !== void 0 && (this.unbindComponentEvent = n)), !this._bindComponentEventHanlderPassedInConstructor && this.isSubWindow) {
      if (this._constructorOrSubWindowLayoutConfig === void 0)
        throw new tA("VLC98823");
      {
        const o = ce.resolve(this._constructorOrSubWindowLayoutConfig);
        this.layoutConfig = Object.assign(Object.assign({}, o), { root: void 0 });
      }
    }
    s !== !0 && (this.deprecatedConstructor || this.init());
  }
  destroy() {
    this.bindComponentEvent = void 0, this.unbindComponentEvent = void 0, super.destroy();
  }
  /**
   * Creates the actual layout. Must be called after all initial components
   * are registered. Recurses through the configuration and sets up
   * the item tree.
   *
   * If called before the document is ready it adds itself as a listener
   * to the document.ready event
   * @deprecated LayoutConfig should not be loaded in {@link (LayoutManager:class)} constructor, but rather in a
   * {@link (LayoutManager:class).loadLayout} call.  If LayoutConfig is not specified in {@link (LayoutManager:class)} constructor,
   * then init() will be automatically called internally and should not be called externally.
   */
  init() {
    if (!this._bindComponentEventHanlderPassedInConstructor && (document.readyState === "loading" || document.body === null)) {
      document.addEventListener("DOMContentLoaded", () => this.init(), { passive: !0 });
      return;
    }
    if (!this._bindComponentEventHanlderPassedInConstructor && this.isSubWindow === !0 && !this._creationTimeoutPassed) {
      setTimeout(() => this.init(), 7), this._creationTimeoutPassed = !0;
      return;
    }
    this.isSubWindow === !0 && (this._bindComponentEventHanlderPassedInConstructor || this.clearHtmlAndAdjustStylesForSubWindow(), window.__glInstance = this), super.init();
  }
  /**
   * Clears existing HTML and adjusts style to make window suitable to be a popout sub window
   * Curently is automatically called when window is a subWindow and bindComponentEvent is not passed in the constructor
   * If bindComponentEvent is not passed in the constructor, the application must either call this function explicitly or
   * (preferably) make the window suitable as a subwindow.
   * In the future, it is planned that this function is NOT automatically called in any circumstances.  Applications will
   * need to determine whether a window is a Golden Layout popout window and either call this function explicitly or
   * hide HTML not relevant to the popout.
   * See apitest for an example of how HTML is hidden when popout windows are displayed
   */
  clearHtmlAndAdjustStylesForSubWindow() {
    const A = document.head, e = new Array(4);
    e[0] = document.querySelectorAll("body link"), e[1] = document.querySelectorAll("body style"), e[2] = document.querySelectorAll("template"), e[3] = document.querySelectorAll(".gl_keep");
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      for (let l = 0; l < o.length; l++) {
        const c = o[l];
        A.appendChild(c);
      }
    }
    const n = document.body;
    n.innerHTML = "", n.style.visibility = "visible", this.checkAddDefaultPopinButton(), document.body.offsetHeight;
  }
  /**
   * Will add button if not popinOnClose specified in settings
   * @returns true if added otherwise false
   */
  checkAddDefaultPopinButton() {
    if (this.layoutConfig.settings.popInOnClose)
      return !1;
    {
      const A = document.createElement("div");
      A.classList.add(
        "lm_popin"
        /* Popin */
      ), A.setAttribute("title", this.layoutConfig.header.dock);
      const e = document.createElement("div");
      e.classList.add(
        "lm_icon"
        /* Icon */
      );
      const n = document.createElement("div");
      return n.classList.add(
        "lm_bg"
        /* Bg */
      ), A.appendChild(e), A.appendChild(n), A.addEventListener("click", () => this.emit("popIn")), document.body.appendChild(A), !0;
    }
  }
  /** @internal */
  bindComponent(A, e) {
    if (this.bindComponentEvent !== void 0)
      return this.bindComponentEvent(A, e);
    if (this.getComponentEvent !== void 0)
      return {
        virtual: !1,
        component: this.getComponentEvent(A, e)
      };
    {
      const s = `${Qe[
        2
        /* ComponentTypeNotRegisteredAndBindComponentEventHandlerNotAssigned */
      ]}: ${JSON.stringify(e)}`;
      throw new Dt(s);
    }
  }
  /** @internal */
  unbindComponent(A, e, n) {
    if (this.unbindComponentEvent !== void 0)
      this.unbindComponentEvent(A);
    else if (!e && this.releaseComponentEvent !== void 0) {
      if (n === void 0)
        throw new tA("VCUCRCU333998");
      this.releaseComponentEvent(A, n);
    }
  }
}
(function(i) {
  let A = !1;
  function e(n, s) {
    const o = A ? null : new URL(document.location.href).searchParams.get("gl-window");
    A = !0;
    const l = o !== null;
    let c, h;
    if (o !== null) {
      const d = localStorage.getItem(o);
      if (d === null)
        throw new Error("Null gl-window Config");
      localStorage.removeItem(o);
      const w = JSON.parse(d), p = AA.unminifyConfig(w);
      h = ce.fromResolved(p), n instanceof HTMLElement && (c = n);
    } else
      n === void 0 ? h = void 0 : n instanceof HTMLElement ? (h = void 0, c = n) : h = n, c === void 0 && s instanceof HTMLElement && (c = s);
    return {
      constructorOrSubWindowLayoutConfig: h,
      isSubWindow: l,
      containerElement: c
    };
  }
  i.createLayoutManagerConstructorParameters = e;
})(Wr || (Wr = {}));
class DE extends Wr {
  /** @internal */
  constructor(A, e, n) {
    super(A, e, n, !0), this._componentTypesMap = /* @__PURE__ */ new Map(), this._registeredComponentMap = /* @__PURE__ */ new Map(), this._virtuableComponentMap = /* @__PURE__ */ new Map(), this._containerVirtualRectingRequiredEventListener = (s, o, l) => this.handleContainerVirtualRectingRequiredEvent(s, o, l), this._containerVirtualVisibilityChangeRequiredEventListener = (s, o) => this.handleContainerVirtualVisibilityChangeRequiredEvent(s, o), this._containerVirtualZIndexChangeRequiredEventListener = (s, o, l) => this.handleContainerVirtualZIndexChangeRequiredEvent(s, o, l), this.deprecatedConstructor || this.init();
  }
  /**
   * Register a new component type with the layout manager.
   *
   * @deprecated See {@link https://stackoverflow.com/questions/40922531/how-to-check-if-a-javascript-function-is-a-constructor}
   * instead use {@link (GoldenLayout:class).registerComponentConstructor}
   * or {@link (GoldenLayout:class).registerComponentFactoryFunction}
   */
  registerComponent(A, e, n = !1) {
    if (typeof e != "function")
      throw new pE("registerComponent() componentConstructorOrFactoryFtn parameter is not a function");
    if (e.hasOwnProperty("prototype")) {
      const s = e;
      this.registerComponentConstructor(A, s, n);
    } else {
      const s = e;
      this.registerComponentFactoryFunction(A, s, n);
    }
  }
  /**
   * Register a new component type with the layout manager.
   */
  registerComponentConstructor(A, e, n = !1) {
    if (typeof e != "function")
      throw new Error(Qe[
        1
        /* PleaseRegisterAConstructorFunction */
      ]);
    if (this._componentTypesMap.get(A) !== void 0)
      throw new Dt(`${Qe[
        3
        /* ComponentIsAlreadyRegistered */
      ]}: ${A}`);
    this._componentTypesMap.set(A, {
      constructor: e,
      factoryFunction: void 0,
      virtual: n
    });
  }
  /**
   * Register a new component with the layout manager.
   */
  registerComponentFactoryFunction(A, e, n = !1) {
    if (typeof e != "function")
      throw new Dt("Please register a constructor function");
    if (this._componentTypesMap.get(A) !== void 0)
      throw new Dt(`${Qe[
        3
        /* ComponentIsAlreadyRegistered */
      ]}: ${A}`);
    this._componentTypesMap.set(A, {
      constructor: void 0,
      factoryFunction: e,
      virtual: n
    });
  }
  /**
   * Register a component function with the layout manager. This function should
   * return a constructor for a component based on a config.
   * This function will be called if a component type with the required name is not already registered.
   * It is recommended that applications use the {@link (VirtualLayout:class).getComponentEvent} and
   * {@link (VirtualLayout:class).releaseComponentEvent} instead of registering a constructor callback
   * @deprecated use {@link (GoldenLayout:class).registerGetComponentConstructorCallback}
   */
  registerComponentFunction(A) {
    this.registerGetComponentConstructorCallback(A);
  }
  /**
   * Register a callback closure with the layout manager which supplies a Component Constructor.
   * This callback should return a constructor for a component based on a config.
   * This function will be called if a component type with the required name is not already registered.
   * It is recommended that applications use the {@link (VirtualLayout:class).getComponentEvent} and
   * {@link (VirtualLayout:class).releaseComponentEvent} instead of registering a constructor callback
   */
  registerGetComponentConstructorCallback(A) {
    if (typeof A != "function")
      throw new Error("Please register a callback function");
    this._getComponentConstructorFtn !== void 0 && console.warn("Multiple component functions are being registered.  Only the final registered function will be used."), this._getComponentConstructorFtn = A;
  }
  getRegisteredComponentTypeNames() {
    const A = this._componentTypesMap.keys();
    return Array.from(A);
  }
  /**
   * Returns a previously registered component instantiator.  Attempts to utilize registered
   * component type by first, then falls back to the component constructor callback function (if registered).
   * If neither gets an instantiator, then returns `undefined`.
   * Note that `undefined` will return if config.componentType is not a string
   *
   * @param config - The item config
   * @public
   */
  getComponentInstantiator(A) {
    let e;
    const n = zt.resolveComponentTypeName(A);
    return n !== void 0 && (e = this._componentTypesMap.get(n)), e === void 0 && this._getComponentConstructorFtn !== void 0 && (e = {
      constructor: this._getComponentConstructorFtn(A),
      factoryFunction: void 0,
      virtual: !1
    }), e;
  }
  /** @internal */
  bindComponent(A, e) {
    let n;
    const s = zt.resolveComponentTypeName(e);
    s !== void 0 && (n = this._componentTypesMap.get(s)), n === void 0 && this._getComponentConstructorFtn !== void 0 && (n = {
      constructor: this._getComponentConstructorFtn(e),
      factoryFunction: void 0,
      virtual: !1
    });
    let o;
    if (n !== void 0) {
      const l = n.virtual;
      let c;
      e.componentState === void 0 ? c = void 0 : c = Wn({}, e.componentState);
      let h;
      const d = n.constructor;
      if (d !== void 0)
        h = new d(A, c, l);
      else {
        const w = n.factoryFunction;
        if (w !== void 0)
          h = w(A, c, l);
        else
          throw new pA("LMBCFFU10008");
      }
      if (l) {
        if (h === void 0)
          throw new tA("GLBCVCU988774");
        {
          const w = h, p = w.rootHtmlElement;
          if (p === void 0)
            throw new Dt(`${Qe[
              5
              /* VirtualComponentDoesNotHaveRootHtmlElement */
            ]}: ${s}`);
          FE(p), this.container.appendChild(p), this._virtuableComponentMap.set(A, w), A.virtualRectingRequiredEvent = this._containerVirtualRectingRequiredEventListener, A.virtualVisibilityChangeRequiredEvent = this._containerVirtualVisibilityChangeRequiredEventListener, A.virtualZIndexChangeRequiredEvent = this._containerVirtualZIndexChangeRequiredEventListener;
        }
      }
      this._registeredComponentMap.set(A, h), o = {
        virtual: n.virtual,
        component: h
      };
    } else
      o = super.bindComponent(A, e);
    return o;
  }
  /** @internal */
  unbindComponent(A, e, n) {
    if (this._registeredComponentMap.get(A) === void 0)
      super.unbindComponent(A, e, n);
    else {
      const o = this._virtuableComponentMap.get(A);
      if (o !== void 0) {
        const l = o.rootHtmlElement;
        if (l === void 0)
          throw new pA("GLUC77743", A.title);
        this.container.removeChild(l), this._virtuableComponentMap.delete(A);
      }
    }
  }
  fireBeforeVirtualRectingEvent(A) {
    this._goldenLayoutBoundingClientRect = this.container.getBoundingClientRect(), super.fireBeforeVirtualRectingEvent(A);
  }
  /** @internal */
  handleContainerVirtualRectingRequiredEvent(A, e, n) {
    const s = this._virtuableComponentMap.get(A);
    if (s === void 0)
      throw new tA("GLHCSCE55933");
    {
      const o = s.rootHtmlElement;
      if (o === void 0)
        throw new Dt(Qe[
          4
          /* ComponentIsNotVirtuable */
        ] + " " + A.title);
      {
        const l = A.element.getBoundingClientRect(), c = l.left - this._goldenLayoutBoundingClientRect.left;
        o.style.left = CA(c);
        const h = l.top - this._goldenLayoutBoundingClientRect.top;
        o.style.top = CA(h), be(o, e), Se(o, n);
      }
    }
  }
  /** @internal */
  handleContainerVirtualVisibilityChangeRequiredEvent(A, e) {
    const n = this._virtuableComponentMap.get(A);
    if (n === void 0)
      throw new tA("GLHCVVCRE55934");
    {
      const s = n.rootHtmlElement;
      if (s === void 0)
        throw new Dt(Qe[
          4
          /* ComponentIsNotVirtuable */
        ] + " " + A.title);
      Vt(s, e);
    }
  }
  /** @internal */
  handleContainerVirtualZIndexChangeRequiredEvent(A, e, n) {
    const s = this._virtuableComponentMap.get(A);
    if (s === void 0)
      throw new tA("GLHCVZICRE55935");
    {
      const o = s.rootHtmlElement;
      if (o === void 0)
        throw new Dt(Qe[
          4
          /* ComponentIsNotVirtuable */
        ] + " " + A.title);
      o.style.zIndex = n;
    }
  }
}
const KE = {
  key: 0,
  style: { display: "flex", "justify-content": "space-between" },
  class: "header"
}, ME = { style: { display: "flex", "align-items": "center", flex: "1" } }, RE = /* @__PURE__ */ MQ({
  __name: "index",
  props: {
    headerItems: {
      type: Array,
      default: []
    },
    dragItems: {
      type: Array,
      default: []
    },
    isTop: {
      type: Boolean,
      default: !1
    },
    isLeft: {
      type: Boolean,
      default: !0
    },
    isTree: {
      type: Boolean,
      default: !0
    },
    haveBar: {
      type: Boolean,
      default: !0
    },
    haveTabIcon: {
      type: Boolean,
      default: !0
    },
    leftWidth: {
      type: Number,
      default: 300
    },
    openDebugger: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["deleteData", "addData"],
  setup(i, { expose: A, emit: e }) {
    const n = e, s = $e(null);
    let o = null;
    const l = i, c = (P) => {
      let R = P.name;
      const W = document.createElement("img");
      W.src = P.img, W.style.position = "absolute", W.style.zIndex = "1000", W.style.userSelect = "none", document.body.appendChild(W);
      const BA = (uA) => {
        W.style.left = uA.pageX + "px", W.style.top = uA.pageY + "px";
      }, oA = (uA) => {
        var _A;
        document.removeEventListener("mousemove", BA), document.removeEventListener("mouseup", oA), document.body.removeChild(W);
        const gA = (_A = s.value) == null ? void 0 : _A.getBoundingClientRect();
        gA && uA.clientX >= gA.left && uA.clientX <= gA.right && uA.clientY >= gA.top && uA.clientY <= gA.bottom && ie(R);
      };
      document.addEventListener("mousemove", BA), document.addEventListener("mouseup", oA);
    }, h = (P = !0, R = !1, W = !1) => {
      if (o) {
        const BA = o.toConfig(), oA = JSON.stringify(P ? ce.fromResolved(BA) : d(ce.fromResolved(BA))), uA = W ? JSON.stringify({
          activeId: K.value,
          layout: oA
        }) : oA;
        if (R) {
          const gA = new Blob([uA], { type: "application/json" }), _A = document.createElement("a"), wA = URL.createObjectURL(gA);
          _A.href = wA, _A.download = "layout.json", document.body.appendChild(_A), _A.click(), document.body.removeChild(_A), URL.revokeObjectURL(wA);
        } else
          return uA;
      }
    }, d = (P) => (Array.isArray(P) ? P.forEach((R) => d(R)) : typeof P == "object" && (P.componentState && (P.componentState = {}), Object.values(P).forEach((R) => d(R))), P), w = async () => {
      if (s.value)
        return (await dE(s.value)).toDataURL();
    };
    let p = {
      header: {
        show: !0
      }
    };
    const m = $e(), U = $e(!1), v = (P = !1) => {
      U.value = P, m.value.click();
    }, E = async (P) => {
      var W;
      const R = (W = P.target.files) == null ? void 0 : W[0];
      if (R) {
        const BA = await R.text();
        let oA = JSON.parse(BA);
        if (U.value) {
          let uA = JSON.parse(oA.layout);
          K.value = oA.activeId, p = uA;
        } else
          oA.header.show = !1, p = oA;
        o == null || o.destroy(), mA();
      }
    }, T = () => {
      let P = ce.fromResolved(o == null ? void 0 : o.saveLayout());
      P.header.show = P.header.show && P.header.show == "top" ? !1 : "top", p = P, o == null || o.destroy(), mA();
    }, S = $e(null), x = $e(!1), Y = $e("reset"), X = (P, R = "reset") => {
      S.value = P, x.value = !0, Y.value = R;
    }, K = $e(), D = $e([]);
    $e([]);
    const z = $e({}), j = (P, R) => {
      z.value[P].paneData = R;
    }, G = (P) => z.value[P].container.getState(), mA = async () => {
      s.value && (o = new DE(p, s.value), l.headerItems.forEach((P) => {
        o.registerComponent(P.name, (R, W) => {
          const BA = GQ(P.component), oA = $e(W);
          BA.provide("paneData", oA);
          let uA = R.getElement(), gA = R.getState(), _A = gA.paneID ? gA.paneID : DA();
          uA.onmouseenter = () => {
            let wA = R.getState();
            if (x.value)
              if (Y.value == "reset") {
                let se = [S.value];
                oA.value = {
                  dragData: JSON.stringify(se),
                  paneID: _A,
                  name: wA.name ? wA.name : "",
                  componetConfig: wA.componetConfig ? wA.componetConfig : {}
                };
              } else {
                let se = wA.dragData ? JSON.parse(wA.dragData) : [];
                se.push(S.value), oA.value = {
                  dragData: JSON.stringify(se),
                  paneID: _A,
                  name: wA.name ? wA.name : "",
                  componetConfig: wA.componetConfig ? wA.componetConfig : {}
                };
              }
            x.value = !1;
          }, uA.onclick = () => {
            K.value != R.state.paneID && (K.value = R.state.paneID, D.value.forEach((wA) => {
              wA.componentItem.container.state.paneID === K.value ? wA.element.classList.add("ev_tab_active") : wA.element.classList.remove("ev_tab_active");
            }), NQ(), rn.emit("ChangeTab", {
              activeID: K.value,
              activeComponentType: R.componentType
            }));
          }, R.on("destroy", () => {
            let wA = R.getState();
            RA(wA, "deleteData"), BA.unmount();
          }), R.on("resize", () => {
            rn.emit("resizeCharts", R.state.paneID);
          }), BA.config.globalProperties.$appTools = {
            isActiveArr(wA) {
              let se = D.value.findIndex((ot) => ot.componentItem.container.state.paneID == wA);
              return se !== -1 ? D.value[se].isActive : !1;
            },
            dragDataIsSuccess(wA, se, ot) {
              wA && (RA(ot, "deleteData"), RA(se, "addData"), R.setState(se));
            }
          }, x.value = !1, S.value = null, BA.mount(uA), z.value[_A] = {
            app: BA,
            container: R,
            paneData: oA
          };
        });
      }), o.on("activeContentItemChanged", (P) => {
        rn.emit("resizeCharts", P.id);
      }), o.on("tabCreated", (P) => {
        let R = P.element;
        if (l.haveTabIcon) {
          const W = document.createElement("img");
          W.style = "margin-right:5px", W.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJ+SURBVDhPVVPPaxNBFP529kfSJLU2WjQtgrYoBKonRRDxKopKEYRSvHlRFLx5sSBIT3rxZC96F8FDFf8AQQr2ImKx6kH8VUtr2gSTZpvs7ozfm01i/TKzmXn73rffe2/GWT3dZwwMZAgcR9aKw4GjlLUbzQeX9pFE1k/gOE5q7gYLjHHAAdNsIqk1kFQbwNYmTIOzVk99+Z7DwipgFDQ3wmaMho4jZA6fQlA+bpW0372CWzoAtXsE4fNZII7pTIXy66UgnAwGXBSu3UN+4jrXKboCTbuFyqVh6M06lOvZEJuCpO04zDtsIX/xhg1uv59HbXoC1dsXEC2+tgR6Y8WyMfU0SP5sCoTR/LpyUXz0FqqvHxtXjyFZXqYHzaUSirMLUEEGlcuHYFgTRxQQnSIyCRI4fgZusYTo+0ckv5ehijs5B6ErK4i/LQFBtuvOmSpICfgVaZlpbyFZ/QF/dBzeyBj0eg3JehVeaT/8sSOW1EQt6ystFHQUsJqUZMIQ4YuHcAeGMHD3GbLnppA7M4UdXLuDexDOzUI3Q9bZ7SlIuyAbYWQXJJXClRnkJ2+JMAvpTfjkPuqPp22xuy9ERe8cWD4x8KSZVoxgtAxv/IS1xYvzaH/5APgsnOenRdhOIAoMN4oHKNo1gurZmwg+v4G/8oluCtHwQWyVT6L48gGCta8wXkC7oZAOAYVzycK0mmgcPY+1yRnovgJb/U+ZG9Yx9PQOCgtzMNkcRWiJ2F4DS0ooxIN7Ee4rQ/cPWaP7p4LszyV4tV8dnxT/1UAKJZJ43ZgKz3rEc0FnuVj0g/bZZpf5W58UvdtonXrUCtrLQBfyiDlNvoAkl7O27cEpgL/v3B6HHTGdQQAAAABJRU5ErkJggg==", R.insertBefore(W, R.firstChild);
        }
        D.value.push(P), P.componentItem.container.state.paneID == K.value ? P.element.classList.add("ev_tab_active") : P.element.classList.remove("ev_tab_active"), R.addEventListener("click", () => {
          K.value = P.componentItem.container.state.paneID, rn.emit("ChangeTab", {
            activeID: K.value,
            activeComponentType: P.componentItem.container.componentType
          }), D.value.forEach((W) => {
            W.componentItem.container.state.paneID === K.value ? W.element.classList.add("ev_tab_active") : W.element.classList.remove("ev_tab_active");
          });
        });
      }), o.init(), l.haveBar && lA());
    }, DA = () => "component-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8), RA = (P, R) => {
      (P && P.dragData ? JSON.parse(P.dragData) : []).forEach((BA) => {
        n(R, BA);
      });
    }, lA = () => {
      let P = document.getElementById("header");
      P && (P.innerHTML = "", l.isTree ? xA(l.dragItems, P) : l.headerItems.forEach((R, W) => {
        let BA = R.img ? document.createElement("img") : document.createElement("div");
        R.img ? BA.src = R.img : BA.innerText = R.name, BA.style = "margin:0 5px;cursor: pointer", P.appendChild(BA), o == null || o.newDragSource(BA, () => ({
          title: R.title ? R.title : R.name,
          type: "component",
          componentType: R.name,
          componentState: {
            dragData: R.data ? JSON.stringify(R.data) : "[]",
            paneID: DA(),
            name: R.name ? R.name : "",
            componetConfig: R.config ? R.config : {}
          }
        }));
      }));
    }, xA = (P, R) => {
      P.forEach((W) => {
        var BA;
        if (((BA = W.children) == null ? void 0 : BA.length) > 0) {
          const oA = document.createElement("ul"), uA = document.createElement("span");
          oA.style = "margin:0;padding:5px", uA.innerHTML = `<div style='width:24px;display:inline-block'>▶</div>${W.name}`, oA.addEventListener("click", () => {
            oA.querySelectorAll("li").forEach((_A, wA) => {
              _A.style.display = _A.style.display === "none" ? "block" : "none", wA == 0 && (uA.innerHTML = _A.style.display === "none" ? `<div style='width:24px;display:inline-block'>▶</div>${W.name}` : `<div style='width:24px;display:inline-block'>▼</div>${W.name}`);
            });
          }), oA.appendChild(uA), xA(W.children, oA), R.appendChild(oA);
        } else {
          const oA = document.createElement("li"), uA = document.createElement("div");
          uA.className = "nodediv", uA.style = "margin:0 5px; cursor: pointer;height:24px;line-height:24px;color:#000;font-size:14px", uA.addEventListener("mouseover", function() {
            this.style.color = "white", this.style.backgroundColor = "#487ed9";
          }), uA.addEventListener("mouseout", function() {
            this.style.color = "#000", this.style.backgroundColor = "transparent";
          });
          const gA = document.createElement("span");
          gA.innerHTML = W.title ? W.title : W.name, gA.title = W.title ? W.title : W.name, gA.style = "display:inline-block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;", uA.appendChild(gA), oA.style.display = "none", oA.appendChild(uA), W.isParent || o == null || o.newDragSource(gA, () => ({
            title: W.title ? W.title : W.name,
            type: "component",
            componentType: W.name,
            componentState: {
              dragData: W.data ? JSON.stringify(W.data) : "[]",
              paneID: DA(),
              name: W.name,
              componetConfig: W.config ? W.config : {}
            }
          })), R.appendChild(oA);
        }
      });
    }, ie = (P) => {
      o && o.addComponent(P);
    }, XA = (P) => {
      let R = JSON.parse(P);
      R.activeId ? (K.value = R.activeId, p = JSON.parse(R.layout)) : p = R, x.value = !1, o == null || o.destroy(), mA();
    }, QA = () => {
      o && (p = ce.fromResolved(o.toConfig()), x.value = !1, o.destroy(), mA());
    }, $A = () => {
      o && o.updateSize();
    };
    return RQ(() => {
      mA();
    }), OQ(() => {
      rn.off("resizeCharts"), rn.off("ChangeTab"), rn.off("currentActiveIdByPane");
    }), A({
      startDrag: c,
      startDragData: X,
      saveLayout: h,
      saveImg: w,
      edit: T,
      showImport: v,
      importLayout: E,
      refreshComponent: QA,
      resize: $A,
      loadLayout: XA,
      changeData: j,
      getStateById: G
    }), (P, R) => (ua(), la("div", {
      class: "gl-box",
      style: ca({
        display: i.isLeft ? "flex" : "block"
      }),
      onDragstart: R[0] || (R[0] = PQ(() => {
      }, ["prevent"]))
    }, [
      i.isTop && i.haveBar ? (ua(), la("div", KE, [
        Oi("div", ME, [
          kc(P.$slots, "headerLeft", {}, void 0, !0),
          R[1] || (R[1] = Oi("div", { id: "header" }, null, -1))
        ]),
        kc(P.$slots, "headerRight", { style: "display: flex; align-items: center; flex: 1" }, void 0, !0)
      ])) : Vc("", !0),
      i.isLeft && i.haveBar ? (ua(), la("div", {
        key: 1,
        id: "header",
        class: "left",
        style: ca({
          width: i.leftWidth + "px"
        })
      }, null, 4)) : Vc("", !0),
      Oi("div", {
        ref_key: "layoutContainer",
        ref: s,
        class: "gl-box-content",
        style: ca({
          height: i.haveBar ? i.isLeft ? "100%" : "calc(100% - 46px)" : "100%",
          width: i.haveBar && i.isLeft ? "calc(100% - " + i.leftWidth + "px)" : "100%"
        })
      }, null, 4),
      Oi("input", {
        type: "file",
        ref_key: "fileDom",
        ref: m,
        onChange: E,
        style: { display: "none" },
        accept: ".json"
      }, null, 544)
    ], 36));
  }
}), OE = (i, A) => {
  const e = i.__vccOpts || i;
  for (const [n, s] of A)
    e[n] = s;
  return e;
}, GE = /* @__PURE__ */ OE(RE, [["__scopeId", "data-v-6ba4c1e0"]]);
export {
  GE as evLayout,
  rn as mittBus
};
