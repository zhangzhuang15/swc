//// [subtypesOfUnion.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
function f() {}
!function(E) {
    E[E.e1 = 0] = "e1", E[E.e2 = 1] = "e2";
}(E || (E = {})), (f || (f = {})).bar = 1;
var E, c = function c() {
    "use strict";
    _class_call_check(this, c);
};
(c || (c = {})).bar = 1;