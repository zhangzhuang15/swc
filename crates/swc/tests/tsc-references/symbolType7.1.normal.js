//// [symbolType7.ts]
var s = Symbol.for("shift");
s << s;
s << 0;
s >> s;
s >> 0;
s >>> s;
s >>> 0;
