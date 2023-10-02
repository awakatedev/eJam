/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": function() { return /* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; },\n/* harmony export */   \"Header\": function() { return /* reexport default from dynamic */ _Header__WEBPACK_IMPORTED_MODULE_0___default.a; },\n/* harmony export */   \"ProductContainer\": function() { return /* reexport safe */ _ProductContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; },\n/* harmony export */   \"StepByStep\": function() { return /* reexport safe */ _StepByStep__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _StepByStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StepByStep */ \"./src/components/StepByStep.tsx\");\n/* harmony import */ var _ProductContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductContainer */ \"./src/components/ProductContainer/index.tsx\");\n// commons\n\n\n// global\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxVQUFVO0FBQ21DO0FBQ0E7QUFFN0MsU0FBUztBQUM0QztBQUNZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzPzBmMzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tbW9uc1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvb3RlciB9IGZyb20gJy4vRm9vdGVyJztcblxuLy8gZ2xvYmFsXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0ZXBCeVN0ZXAgfSBmcm9tICcuL1N0ZXBCeVN0ZXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9kdWN0Q29udGFpbmVyIH0gZnJvbSBcIi4vUHJvZHVjdENvbnRhaW5lclwiO1xuIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJIZWFkZXIiLCJGb290ZXIiLCJTdGVwQnlTdGVwIiwiUHJvZHVjdENvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/index.ts\n"));

/***/ })

});