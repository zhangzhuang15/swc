//// [correctlyMarkAliasAsReferences4.tsx]
//// [declaration.d.ts]
//// [0.tsx]
///<reference path="declaration.d.ts" />
import _extends from "@swc/helpers/src/_extends.mjs";
import * as cx from 'classnames';
import * as React from "react";
let buttonProps;
let k = /*#__PURE__*/ React.createElement("button", _extends({}, buttonProps, {
    className: cx('class1', {
        class2: true
    })
}));