/*
 * $Id: base64.js,v 2.11 2013/04/08 12:27:14 dankogai Exp dankogai $
 *
 *  Licensed under the MIT license.
 *    http://opensource.org/licenses/mit-license
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */

(function(global) {
  "use strict";
  if (global.Base64) return;
  var version = "2.1.1";
  // if node.js, we use Buffer
  var buffer;
  if (typeof module !== "undefined" && module.exports) {
    buffer = require("buffer").Buffer;
  }
  // constants
  var b64chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var b64tab = (function(bin) {
    var t = {};
    for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
    return t;
  })(b64chars);
  var fromCharCode = String.fromCharCode;
  // encoder stuff
  var cb_utob = function(c) {
    if (c.length < 2) {
      var cc = c.charCodeAt(0);
      return cc < 0x80
        ? c
        : cc < 0x800
        ? fromCharCode(0xc0 | (cc >>> 6)) + fromCharCode(0x80 | (cc & 0x3f))
        : fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) +
          fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
          fromCharCode(0x80 | (cc & 0x3f));
    } else {
      var cc1 =
        0x10000 +
        (c.charCodeAt(0) - 0xd800) * 0x400 +
        (c.charCodeAt(1) - 0xdc00);
      return (
        fromCharCode(0xf0 | ((cc1 >>> 18) & 0x07)) +
        fromCharCode(0x80 | ((cc1 >>> 12) & 0x3f)) +
        fromCharCode(0x80 | ((cc1 >>> 6) & 0x3f)) +
        fromCharCode(0x80 | (cc1 & 0x3f))
      );
    }
  };
  var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
  var utob = function(u) {
    return u.replace(re_utob, cb_utob);
  };
  var cb_encode = function(ccc) {
    var padlen = [0, 2, 1][ccc.length % 3],
      ord =
        (ccc.charCodeAt(0) << 16) |
        ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8) |
        (ccc.length > 2 ? ccc.charCodeAt(2) : 0),
      chars = [
        b64chars.charAt(ord >>> 18),
        b64chars.charAt((ord >>> 12) & 63),
        padlen >= 2 ? "=" : b64chars.charAt((ord >>> 6) & 63),
        padlen >= 1 ? "=" : b64chars.charAt(ord & 63),
      ];
    return chars.join("");
  };
  var btoa =
    global.btoa ||
    function(b) {
      return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
  var _encode = buffer
    ? function(u) {
        return new buffer(u).toString("base64");
      }
    : function(u) {
        return btoa(utob(u));
      };
  var encode = function(u, urisafe) {
    //return !urisafe
    //    ? _encode(u)
    //    : _encode(u).replace(/[+\/]/g, function(m0) {
    //        return m0 == '+' ? '-' : '_';
    //    }).replace(/=/g, '');
    var output = "";
    var chr1,
      chr2,
      chr3 = "";
    var enc1,
      enc2,
      enc3,
      enc4 = "";
    var i = 0;
    do {
      chr1 = u.charCodeAt(i++);
      chr2 = u.charCodeAt(i++);
      chr3 = u.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output =
        output +
        b64chars.charAt(enc1) +
        b64chars.charAt(enc2) +
        b64chars.charAt(enc3) +
        b64chars.charAt(enc4);
      chr1 = chr2 = chr3 = "";
      enc1 = enc2 = enc3 = enc4 = "";
    } while (i < u.length);
    return output;
  };
  var encodeURI = function(u) {
    return encode(u, true);
  };
  // decoder stuff
  var re_btou = new RegExp(
    [
      "[\xC0-\xDF][\x80-\xBF]",
      "[\xE0-\xEF][\x80-\xBF]{2}",
      "[\xF0-\xF7][\x80-\xBF]{3}",
    ].join("|"),
    "g"
  );
  var cb_btou = function(cccc) {
    switch (cccc.length) {
      case 4:
        var cp =
            ((0x07 & cccc.charCodeAt(0)) << 18) |
            ((0x3f & cccc.charCodeAt(1)) << 12) |
            ((0x3f & cccc.charCodeAt(2)) << 6) |
            (0x3f & cccc.charCodeAt(3)),
          offset = cp - 0x10000;
        return (
          fromCharCode((offset >>> 10) + 0xd800) +
          fromCharCode((offset & 0x3ff) + 0xdc00)
        );
      case 3:
        return fromCharCode(
          ((0x0f & cccc.charCodeAt(0)) << 12) |
            ((0x3f & cccc.charCodeAt(1)) << 6) |
            (0x3f & cccc.charCodeAt(2))
        );
      default:
        return fromCharCode(
          ((0x1f & cccc.charCodeAt(0)) << 6) | (0x3f & cccc.charCodeAt(1))
        );
    }
  };
  var btou = function(b) {
    return b.replace(re_btou, cb_btou);
  };
  var cb_decode = function(cccc) {
    var len = cccc.length,
      padlen = len % 4,
      n =
        (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) |
        (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) |
        (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) |
        (len > 3 ? b64tab[cccc.charAt(3)] : 0),
      chars = [
        fromCharCode(n >>> 16),
        fromCharCode((n >>> 8) & 0xff),
        fromCharCode(n & 0xff),
      ];
    chars.length -= [0, 0, 2, 1][padlen];
    return chars.join("");
  };
  var atob =
    global.atob ||
    function(a) {
      return a.replace(/[\s\S]{1,4}/g, cb_decode);
    };
  var _decode = buffer
    ? function(a) {
        return new buffer(a, "base64").toString();
      }
    : function(a) {
        return btou(atob(a));
      };
  var decode = function(a) {
    //return _decode(
    //a.replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
    //    .replace(/[^A-Za-z0-9\+\/]/g, '')
    // );
    // if (b == true) {
    // 将base64转为Unicode规则编码
    // let bstr = atob(a),
    //   n = bstr.length,
    //   u8arr = new Uint8Array(n);
    // while (n--) {
    //   u8arr[n] = bstr.charCodeAt(n); // 转换编码后才可以使用charCodeAt 找到Unicode编码
    // }
    // let blob = new Blob([u8arr]);
    // return blob.arrayBuffer().then(buffer => {
    //   let view = new DataView(buffer);
    //   if (buffer.byteLength == 4) {
    //     return view.getFloat32(0, false);
    //   } else {
    //     return view.getFloat64(0, false);
    //   }
    // });
    // }
    var output = "";
    var chr1,
      chr2,
      chr3 = "";
    var enc1,
      enc2,
      enc3,
      enc4 = "";
    var i = 0;
    if (a.length % 4 !== 0) {
      return "";
    }
    var base64test = /[^A-Za-z0-9\+\/\=]/g;
    if (base64test.exec(a)) {
      return "";
    }
    do {
      enc1 = b64chars.indexOf(a.charAt(i++));
      enc2 = b64chars.indexOf(a.charAt(i++));
      enc3 = b64chars.indexOf(a.charAt(i++));
      enc4 = b64chars.indexOf(a.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 !== 64) {
        output += String.fromCharCode(chr2);
      }
      if (enc4 !== 64) {
        output += String.fromCharCode(chr3);
      }
      chr1 = chr2 = chr3 = "";
      enc1 = enc2 = enc3 = enc4 = "";
    } while (i < a.length);
    return output;
  };
  var frombase64tofloat = function(a) {
    // 将base64转为Unicode规则编码
    let bstr = atob(a),
      n = bstr.length,
      m = 4;
    let resultlist = [];
    for (var i = 0; i < n; i += m) {
      var u8arr = new Uint8Array(m);
      // 转换编码后才可以使用charCodeAt 找到Unicode编码
      for (var j = 0; j < m; j++) {
        u8arr[j] = bstr.charCodeAt(i + j);
      }
      var dataview = new DataView(u8arr.buffer, 0, 4); //用来读取数字
      resultlist.push(dataview.getFloat32(0, true));
    }
    return resultlist;
  };
  // export Base64
  global.Base64 = {
    VERSION: version,
    atob: atob,
    btoa: btoa,
    fromBase64: decode,
    toBase64: encode,
    utob: utob,
    encode: encode,
    encodeURI: encodeURI,
    btou: btou,
    decode: decode,
    frombase64tofloat: frombase64tofloat,
  };
  // if ES5 is available, make Base64.extendString() available
  if (typeof Object.defineProperty === "function") {
    var noEnum = function(v) {
      return {
        value: v,
        enumerable: false,
        writable: true,
        configurable: true,
      };
    };
    global.Base64.extendString = function() {
      Object.defineProperty(
        String.prototype,
        "fromBase64",
        noEnum(function() {
          return decode(this);
        })
      );
      Object.defineProperty(
        String.prototype,
        "toBase64",
        noEnum(function(urisafe) {
          return encode(this, urisafe);
        })
      );
      Object.defineProperty(
        String.prototype,
        "toBase64URI",
        noEnum(function() {
          return encode(this, true);
        })
      );
      Object.defineProperty(
        String.prototype,
        "frombase64tofloat",
        noEnum(function() {
          return frombase64tofloat(this);
        })
      );
    };
  }
  // that's it!
})(this);
