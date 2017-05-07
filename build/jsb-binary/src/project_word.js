require = (function e(t, n, r) { function s(o, u) { if (!n[o]) { if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = "MODULE_NOT_FOUND", f } var l = n[o] = { exports: {} }; t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e) }, l, l.exports, e, t, n, r) } return n[o].exports } var i = typeof require == "function" && require; for (var o = 0; o < r.length; o++) s(r[o]); return s })
    (
    {
        "WORD":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2f9d38tFndLjK5NOKxx70kg', 'WORD');
// Script\WORD.js


console.log("Rodger window " + window);

console.log("*************");
for (var i in window) console.log("i " + i);
console.log("*************");

window.G = window.G || {};
console.log("Rodger " + window.G);

window.G.WORD = {

    LabelString: "rodger"

};

cc._RFpop();
},{}]},{},["WORD"]);
