"use strict";
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useWindowSize */ \"./src/hooks/useWindowSize.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_img_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/logo.png */ \"./public/img/logo.png\");\n/* harmony import */ var _public_img_McAfee_Secure_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/McAfee_Secure.png */ \"./public/img/McAfee_Secure.png\");\n/* harmony import */ var _public_img_norton_antivirus_logo_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/img/norton-antivirus-logo 1.png */ \"./public/img/norton-antivirus-logo 1.png\");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar billboards = [\n    {\n        title: \"30-DAY SATISFACTION GUARANTEE\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.CheckBadgeIcon, {\n            className: \"h-6 w-6 text-Base\"\n        }, void 0, false, {\n            fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n            lineNumber: 12,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        title: \"Free delivery on orders over $40.00\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.HeartIcon, {\n            className: \"h-6 w-6 text-Base\"\n        }, void 0, false, {\n            fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n            lineNumber: 16,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        title: \"50.000+ HAPPY CUSTOMERS\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.TruckIcon, {\n            className: \"h-6 w-6 text-Base\"\n        }, void 0, false, {\n            fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n            lineNumber: 20,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        title: \"100% Money Back Guarantee\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.ArrowPathIcon, {\n            className: \"h-6 w-6 text-Base\"\n        }, void 0, false, {\n            fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n            lineNumber: 24,\n            columnNumber: 11\n        }, undefined)\n    }, \n];\nvar Header = function() {\n    _s();\n    var winSize = (0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0), currentIndex = ref[0], setCurrentIndex = ref[1];\n    var prevSlide = function() {\n        setCurrentIndex(function(prevIndex) {\n            return prevIndex === 0 ? billboards.length - 1 : prevIndex - 1;\n        });\n    };\n    var nextSlide = function() {\n        setCurrentIndex(function(prevIndex) {\n            return prevIndex === billboards.length - 1 ? 0 : prevIndex + 1;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"md:h-36 h-34 w-screen flex items-center justify-center flex-col md:mb-0 md:mt-7 mb-5 font-baseFont font-regular text-Base\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-14 w-full bg-DarkGrey md:py-10 md:px-28 px-5 py-10 flex flex-row justify-between items-center\",\n                    children: winSize.width >= 768 ? billboards.map(function(item) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex gap-3\",\n                            children: [\n                                item.icon,\n                                item.title\n                            ]\n                        }, item.title, true, {\n                            fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, _this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: prevSlide,\n                                className: \"absolute left-0 p-4 outline-none\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChevronLeIcon, {\n                                    className: \"h-5 w-5 text-Base font-bold md:mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"w-full text-center\",\n                                children: billboards[currentIndex].title\n                            }, void 0, false, {\n                                fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: nextSlide,\n                                className: \"absolute right-0 p-4 outline-none\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.ChevronRightIcon, {\n                                    className: \"h-5 w-5 text-Base font-bold md:mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"w-full flex items-center justify-between md:py-10 md:px-28 px-5 py-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _public_img_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            alt: \"company icon\"\n                        }, void 0, false, {\n                            fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center md:gap-10 gap-5 md:h-14 md:w-48 h-5 w-32\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _public_img_McAfee_Secure_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    alt: \"secure\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _public_img_norton_antivirus_logo_1_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                    alt: \"secure\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jhonathan/personal/eJam/src/components/Header.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Header, \"jjdrWI4OQDWJc+711iq83y5HvF8=\", false, function() {\n    return [\n        _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ2IsbURBQUs7NEJBQUNnQyxHQUFHLEVBQUUvQiw0REFBSTs0QkFBRWdDLEdBQUcsRUFBQyxjQUFjOzs7OztpQ0FBRztzQ0FDdkMsOERBQUNWLEtBQUc7NEJBQUNWLFNBQVMsRUFBQyxxRUFBcUU7OzhDQUNsRiw4REFBQ2IsbURBQUs7b0NBQUNnQyxHQUFHLEVBQUU5QixxRUFBTTtvQ0FBRStCLEdBQUcsRUFBQyxRQUFROzs7Ozt5Q0FBRzs4Q0FDbkMsOERBQUNqQyxtREFBSztvQ0FBQ2dDLEdBQUcsRUFBRTdCLCtFQUFNO29DQUFFOEIsR0FBRyxFQUFDLFFBQVE7Ozs7O3lDQUFHOzs7Ozs7aUNBQy9COzs7Ozs7eUJBQ0Y7Ozs7OztpQkFDQztxQkFDUixDQUNIO0FBQ0osQ0FBQztHQXpES25CLE1BQU07O1FBQ3NCZiw0REFBYTs7O0FBRHpDZSxLQUFBQSxNQUFNO0FBMkRaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeD9hNjk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gXCIuLi9ob29rcy91c2VXaW5kb3dTaXplXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1nL2xvZ28ucG5nXCI7XG5pbXBvcnQgTWFjZmVlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1nL01jQWZlZV9TZWN1cmUucG5nXCI7XG5pbXBvcnQgTm9ydG9uIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1nL25vcnRvbi1hbnRpdmlydXMtbG9nbyAxLnBuZ1wiO1xuaW1wb3J0IHsgQ2hlY2tCYWRnZUljb24sIEhlYXJ0SWNvbiwgVHJ1Y2tJY29uLCBBcnJvd1BhdGhJY29uLCBDaGV2cm9uTGVmdEljb24sIENoZXZyb25SaWdodEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBiaWxsYm9hcmRzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiMzAtREFZIFNBVElTRkFDVElPTiBHVUFSQU5URUVcIixcbiAgICBpY29uOiA8Q2hlY2tCYWRnZUljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LUJhc2VcIiAvPixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkZyZWUgZGVsaXZlcnkgb24gb3JkZXJzIG92ZXIgJDQwLjAwXCIsXG4gICAgaWNvbjogPEhlYXJ0SWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtQmFzZVwiIC8+LFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiNTAuMDAwKyBIQVBQWSBDVVNUT01FUlNcIixcbiAgICBpY29uOiA8VHJ1Y2tJY29uIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1CYXNlXCIgLz4sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCIxMDAlIE1vbmV5IEJhY2sgR3VhcmFudGVlXCIsXG4gICAgaWNvbjogPEFycm93UGF0aEljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LUJhc2VcIiAvPixcbiAgfSxcbl07XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiBjb25zdCB3aW5TaXplOiBhbnkgfCB1bmRlZmluZWQgPSB1c2VXaW5kb3dTaXplKCk7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KChwcmV2SW5kZXgpID0+XG4gICAgICBwcmV2SW5kZXggPT09IDAgPyBiaWxsYm9hcmRzLmxlbmd0aCAtIDEgOiBwcmV2SW5kZXggLSAxXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KChwcmV2SW5kZXgpID0+XG4gICAgICBwcmV2SW5kZXggPT09IGJpbGxib2FyZHMubGVuZ3RoIC0gMSA/IDAgOiBwcmV2SW5kZXggKyAxXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1kOmgtMzYgaC0zNCB3LXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBtZDptYi0wIG1kOm10LTcgbWItNSBmb250LWJhc2VGb250IGZvbnQtcmVndWxhciB0ZXh0LUJhc2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTE0IHctZnVsbCBiZy1EYXJrR3JleSBtZDpweS0xMCBtZDpweC0yOCBweC01IHB5LTEwIGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHt3aW5TaXplLndpZHRoID49IDc2OCA/IChcbiAgICAgICAgICAgIGJpbGxib2FyZHMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuIGtleT17aXRlbS50aXRsZX0gY2xhc3NOYW1lPVwiZmxleCAgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICB7aXRlbS5pY29ufVxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3ByZXZTbGlkZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgcC00IG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2hldnJvbkxlSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtQmFzZSBmb250LWJvbGQgbWQ6bXItMlwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7YmlsbGJvYXJkc1tjdXJyZW50SW5kZXhdLnRpdGxlfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0U2xpZGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBwLTQgb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1CYXNlIGZvbnQtYm9sZCBtZDptci0yXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1kOnB5LTEwIG1kOnB4LTI4IHB4LTUgcHktMTBcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtMb2dvfSBhbHQ9XCJjb21wYW55IGljb25cIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbWQ6Z2FwLTEwIGdhcC01IG1kOmgtMTQgbWQ6dy00OCBoLTUgdy0zMlwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17TWFjZmVlfSBhbHQ9XCJzZWN1cmVcIiAvPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17Tm9ydG9ufSBhbHQ9XCJzZWN1cmVcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbInVzZVdpbmRvd1NpemUiLCJJbWFnZSIsIkxvZ28iLCJNYWNmZWUiLCJOb3J0b24iLCJDaGVja0JhZGdlSWNvbiIsIkhlYXJ0SWNvbiIsIlRydWNrSWNvbiIsIkFycm93UGF0aEljb24iLCJDaGV2cm9uUmlnaHRJY29uIiwidXNlU3RhdGUiLCJiaWxsYm9hcmRzIiwidGl0bGUiLCJpY29uIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwid2luU2l6ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsInByZXZTbGlkZSIsInByZXZJbmRleCIsImxlbmd0aCIsIm5leHRTbGlkZSIsImhlYWRlciIsImRpdiIsIndpZHRoIiwibWFwIiwiaXRlbSIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiQ2hldnJvbkxlSWNvbiIsIm5hdiIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n"));

/***/ })

});