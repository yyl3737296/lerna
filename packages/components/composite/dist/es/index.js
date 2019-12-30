(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('src/NbInputButton')) :
    typeof define === 'function' && define.amd ? define(['exports', 'src/NbInputButton'], factory) :
    (global = global || self, factory(global.umd = {}, global.NbInputButton));
}(this, (function (exports, NbInputButton) { 'use strict';

    NbInputButton = NbInputButton && NbInputButton.hasOwnProperty('default') ? NbInputButton['default'] : NbInputButton;



    exports.NbInputButton = NbInputButton;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
