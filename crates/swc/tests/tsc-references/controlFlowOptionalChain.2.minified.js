//// [controlFlowOptionalChain.ts]
import "@swc/helpers/_/_instanceof";
import "@swc/helpers/_/_type_of";
function someFunction(someOptionalObject) {
    (null == someOptionalObject ? void 0 : someOptionalObject.someProperty) !== lastSomeProperty && (console.log(someOptionalObject), console.log(someOptionalObject.someProperty), lastSomeProperty = null == someOptionalObject ? void 0 : someOptionalObject.someProperty);
}
null === (_o = o) || void 0 === _o || _o[a = 1], a.toString(), null === (_o1 = o) || void 0 === _o1 || _o1.x[b = 1], b.toString(), null === (_o2 = o) || void 0 === _o2 || _o2(c = 1), c.toString(), null === (_o3 = o) || void 0 === _o3 || _o3.x(d = 1), d.toString(), null === (_f = f) || void 0 === _f || _f(x), x, f, f(x), x, f, f(x), (null === (_o21 = o2) || void 0 === _o21 ? void 0 : _o21.f(x)) ? (x, o2.f, null === (_o23 = o2) || void 0 === _o23 || _o23.f, null === (_o24 = o2) || void 0 === _o24 || _o24.f(x)) : (x, o2, null === (_o25 = o2) || void 0 === _o25 || _o25.f, o2.f), x, o2, null === (_o22 = o2) || void 0 === _o22 || _o22.f, o2.f, (null === (_o31 = o3) || void 0 === _o31 ? void 0 : _o31.x) === 1 ? (o3, o3.x, null === (_o33 = o3) || void 0 === _o33 || _o33.x) : (o3, null === (_o34 = o3) || void 0 === _o34 || _o34.x, o3.x), o3, null === (_o32 = o3) || void 0 === _o32 || _o32.x, o3.x, (null === (_o4_x = o4.x) || void 0 === _o4_x ? void 0 : _o4_x.y) ? (o4.x, o4.x.y, null === (_o4_x2 = o4.x) || void 0 === _o4_x2 || _o4_x2.y) : (o4.x, null === (_o4_x3 = o4.x) || void 0 === _o4_x3 || _o4_x3.y, o4.x.y), o4.x, null === (_o4_x1 = o4.x) || void 0 === _o4_x1 || _o4_x1.y, o4.x.y, (null === (_o5_x = o5.x) || void 0 === _o5_x ? void 0 : null === (_o5_x_y_z = _o5_x.y.z) || void 0 === _o5_x_y_z ? void 0 : _o5_x_y_z.w) ? (o5.x, o5.x.y, o5.x.y.z, o5.x.y.z.w, null === (_o5_x_y_z2 = o5.x.y.z) || void 0 === _o5_x_y_z2 || _o5_x_y_z2.w, null === (_o5_x4 = o5.x) || void 0 === _o5_x4 || _o5_x4.y.z.w, null === (_o5_x5 = o5.x) || void 0 === _o5_x5 || null === (_o5_x_y_z3 = _o5_x5.y.z) || void 0 === _o5_x_y_z3 || _o5_x_y_z3.w) : (o5.x, null === (_o5_x6 = o5.x) || void 0 === _o5_x6 || _o5_x6.y, null === (_o5_x7 = o5.x) || void 0 === _o5_x7 || _o5_x7.y.z, null === (_o5_x8 = o5.x) || void 0 === _o5_x8 || null === (_o5_x_y_z4 = _o5_x8.y.z) || void 0 === _o5_x_y_z4 || _o5_x_y_z4.w, o5.x.y, o5.x.y.z.w), o5.x, null === (_o5_x1 = o5.x) || void 0 === _o5_x1 || _o5_x1.y, null === (_o5_x2 = o5.x) || void 0 === _o5_x2 || _o5_x2.y.z, null === (_o5_x3 = o5.x) || void 0 === _o5_x3 || null === (_o5_x_y_z1 = _o5_x3.y.z) || void 0 === _o5_x_y_z1 || _o5_x_y_z1.w, o5.x.y, o5.x.y.z.w, (null === (_o6 = o6) || void 0 === _o6 ? void 0 : _o6.f()) ? (o6, o6.f) : (o6, null === (_o62 = o6) || void 0 === _o62 || _o62.f, o6.f), o6, null === (_o61 = o6) || void 0 === _o61 || _o61.f, o6.f, someFunction({
    someProperty: 42
}), someFunction(void 0);
for(var _o, _o1, _o2, _o3, _f, _o21, _o22, _o31, _o32, _o4_x, _o4_x1, _o5_x_y_z, _o5_x, _o5_x1, _o5_x2, _o5_x_y_z1, _o5_x3, _o6, _o61, _arr_i, a, b, c, d, _o23, _o24, _o25, _o33, _o34, _o4_x2, _o4_x3, _o5_x_y_z2, _o5_x4, _o5_x_y_z3, _o5_x5, _o5_x6, _o5_x7, _o5_x_y_z4, _o5_x8, _o62, lastSomeProperty, _arr_i1, i = 0; (null === (_arr_i = arr[i]) || void 0 === _arr_i ? void 0 : _arr_i.tag) === "left";)i += 1, (null === (_arr_i1 = arr[i]) || void 0 === _arr_i1 ? void 0 : _arr_i1.tag) === "right" && console.log("I should ALSO be reachable");
