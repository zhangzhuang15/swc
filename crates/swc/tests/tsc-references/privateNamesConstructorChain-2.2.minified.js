//// [privateNamesConstructorChain-2.ts]
import _class_private_field_get from "@swc/helpers/src/_class_private_field_get.mjs";
import _class_private_field_init from "@swc/helpers/src/_class_private_field_init.mjs";
import _class_static_private_field_spec_get from "@swc/helpers/src/_class_static_private_field_spec_get.mjs";
var _foo = new WeakMap();
class Parent {
    accessChildProps() {
        _class_private_field_get(new Child(), _foo), _class_static_private_field_spec_get(Child, Parent, _bar);
    }
    constructor(){
        _class_private_field_init(this, _foo, {
            writable: !0,
            value: 3
        });
    }
}
var _bar = {
    writable: !0,
    value: 5
}, _foo1 = new WeakMap(), _bar1 = new WeakMap();
class Child extends Parent {
    constructor(...args){
        super(...args), _class_private_field_init(this, _foo1, {
            writable: !0,
            value: "foo"
        }), _class_private_field_init(this, _bar1, {
            writable: !0,
            value: "bar"
        });
    }
}
new Parent().accessChildProps();