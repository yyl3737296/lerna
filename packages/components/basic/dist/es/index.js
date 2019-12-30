(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('src/NbInput'), require('src/NbButton')) :
    typeof define === 'function' && define.amd ? define(['exports', 'src/NbInput', 'src/NbButton'], factory) :
    (global = global || self, factory(global.umd = {}, global.NbInput, global.NbButton));
}(this, (function (exports, NbInput, NbButton) { 'use strict';

    NbInput = NbInput && NbInput.hasOwnProperty('default') ? NbInput['default'] : NbInput;
    NbButton = NbButton && NbButton.hasOwnProperty('default') ? NbButton['default'] : NbButton;



    exports.NbInput = NbInput;
    exports.NbButton = NbButton;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
