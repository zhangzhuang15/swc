//// [symbolDeclarationEmit11.ts]
let _iterator = Symbol.iterator, _isConcatSpreadable = Symbol.isConcatSpreadable, _toPrimitive = Symbol.toPrimitive, _toPrimitive1 = Symbol.toPrimitive;
class C {
    static [_isConcatSpreadable]() {}
    static get [_toPrimitive]() {
        return "";
    }
    static set [_toPrimitive1](x) {}
}
C[_iterator] = 0;