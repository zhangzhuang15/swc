//// [file.tsx]
import _extends from "@swc/helpers/src/_extends.mjs";
var p;
var openClosed1 = /*#__PURE__*/ React.createElement("div", null, blah);
// Should emit React.__spread({}, p, {x: 0})
var spread1 = /*#__PURE__*/ React.createElement("div", _extends({}, p, {
    x: 0
}));