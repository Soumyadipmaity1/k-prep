"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cse-notes/3rd-year/5thSem/page",{

/***/ "(app-pages-browser)/./src/components/Subjects/2nd-year/3rdSenSubject.tsx":
/*!************************************************************!*\
  !*** ./src/components/Subjects/2nd-year/3rdSenSubject.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Card = (param)=>{\n    let { subject, name, code, credit } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleClick = ()=>{\n        const route = \"/cse-notes/2nd-year/3rdSem/\".concat(subject.toLowerCase().replace(\" \", \"-\"));\n        router.push(route);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: handleClick,\n        className: \"flex subject-card px-5 rounded-xl p-4 shadow-lg sm:m-5 my-3 cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-28 mr-6 rounded-xl items-center bg-white justify-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"  rounded-full flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-3xl font-bold text-purple-500\",\n                        children: \"\\uD83D\\uDC64\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-start px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"sm:text-2xl text-xl font-bold text-white\",\n                        children: subject\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white sm:text-base text-[15px]\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sm:mt-4 mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white\",\n                                children: [\n                                    \"Code: \",\n                                    code\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white\",\n                                children: [\n                                    \"Credit: \",\n                                    credit\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Card, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Card;\nconst ThirdSemSubject = ()=>{\n    _s1();\n    const cardData = [\n        {\n            subject: \"subject1\",\n            name: \"Full Name 1\",\n            code: \"CS0001\",\n            credit: 3\n        },\n        {\n            subject: \"subject2\",\n            name: \"Full Name 2\",\n            code: \"CS0002\",\n            credit: 4\n        },\n        {\n            subject: \"subject3\",\n            name: \"Full Name 3\",\n            code: \"CS0003\",\n            credit: 2\n        },\n        {\n            subject: \"subject1\",\n            name: \"Full Name 1\",\n            code: \"CS0001\",\n            credit: 3\n        },\n        {\n            subject: \"subject2\",\n            name: \"Full Name 2\",\n            code: \"CS0002\",\n            credit: 4\n        },\n        {\n            subject: \"subject3\",\n            name: \"Full Name 3\",\n            code: \"CS0003\",\n            credit: 2\n        }\n    ];\n    const fetchAndSetNotes = useCallback(async ()=>{\n        setLoading(true);\n        setError(null);\n        try {\n            const fetchedNotes = await fetchNotes(year); // Change the year if needed\n            setNotes(fetchedNotes);\n        } catch (err) {\n            setError(err instanceof Error ? err.message : \"An unknown error occurred\");\n        } finally{\n            setLoading(false);\n        }\n    }, []);\n    useEffect(()=>{\n        fetchAndSetNotes();\n    }, [\n        fetchAndSetNotes\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap justify-center items-center\",\n        children: cardData.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                subject: data.subject,\n                name: data.name,\n                code: data.code,\n                credit: data.credit\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(ThirdSemSubject, \"HePJsps0bO/JQNhL5rTgmaGNoTQ=\");\n_c1 = ThirdSemSubject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThirdSemSubject);\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"ThirdSemSubject\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1N1YmplY3RzLzJuZC15ZWFyLzNyZFNlblN1YmplY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFMEI7QUFDa0I7QUFTNUMsTUFBTUUsT0FBNEI7UUFBQyxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7O0lBQ2hFLE1BQU1DLFNBQVNOLDBEQUFTQTtJQUV4QixNQUFNTyxjQUFjO1FBQ2xCLE1BQU1DLFFBQVEsOEJBQXNFLE9BQXhDTixRQUFRTyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxLQUFLO1FBQy9FSixPQUFPSyxJQUFJLENBQUNIO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0k7UUFDREMsU0FBU047UUFDVE8sV0FBVTs7MEJBRVYsOERBQUNGO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDRjtvQkFBSUUsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUtELFdBQVU7a0NBQXFDOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6RCw4REFBQ0Y7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBNENaOzs7Ozs7a0NBQzFELDhEQUFDZTt3QkFBRUgsV0FBVTtrQ0FBdUNYOzs7Ozs7a0NBQ3BELDhEQUFDUzt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFFSCxXQUFVOztvQ0FBYTtvQ0FBT1Y7Ozs7Ozs7MENBQ2pDLDhEQUFDYTtnQ0FBRUgsV0FBVTs7b0NBQWE7b0NBQVNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNDO0dBNUJNSjs7UUFDV0Qsc0RBQVNBOzs7S0FEcEJDO0FBOEJOLE1BQU1pQixrQkFBNEI7O0lBQ2hDLE1BQU1DLFdBQVc7UUFDZjtZQUFFakIsU0FBUztZQUFZQyxNQUFNO1lBQWVDLE1BQU07WUFBVUMsUUFBUTtRQUFFO1FBQ3RFO1lBQUVILFNBQVM7WUFBWUMsTUFBTTtZQUFlQyxNQUFNO1lBQVVDLFFBQVE7UUFBRTtRQUN0RTtZQUFFSCxTQUFTO1lBQVlDLE1BQU07WUFBZUMsTUFBTTtZQUFVQyxRQUFRO1FBQUU7UUFFdEU7WUFBRUgsU0FBUztZQUFZQyxNQUFNO1lBQWVDLE1BQU07WUFBVUMsUUFBUTtRQUFFO1FBQ3RFO1lBQUVILFNBQVM7WUFBWUMsTUFBTTtZQUFlQyxNQUFNO1lBQVVDLFFBQVE7UUFBRTtRQUN0RTtZQUFFSCxTQUFTO1lBQVlDLE1BQU07WUFBZUMsTUFBTTtZQUFVQyxRQUFRO1FBQUU7S0FFdkU7SUFHRCxNQUFNZSxtQkFBbUJDLFlBQVk7UUFDbkNDLFdBQVc7UUFDWEMsU0FBUztRQUNULElBQUk7WUFDRixNQUFNQyxlQUFlLE1BQU1DLFdBQVdDLE9BQU8sNEJBQTRCO1lBQ3pFQyxTQUFTSDtRQUNYLEVBQUUsT0FBT0ksS0FBSztZQUNaTCxTQUFTSyxlQUFlQyxRQUFRRCxJQUFJRSxPQUFPLEdBQUc7UUFDaEQsU0FBVTtZQUNSUixXQUFXO1FBQ2I7SUFDRixHQUFHLEVBQUU7SUFFTFMsVUFBVTtRQUNSWDtJQUNGLEdBQUc7UUFBQ0E7S0FBaUI7SUFFckIscUJBQ0UsOERBQUNSO1FBQUlFLFdBQVU7a0JBQ1pLLFNBQVNhLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbkIsOERBQUNqQztnQkFFQ0MsU0FBUytCLEtBQUsvQixPQUFPO2dCQUNyQkMsTUFBTThCLEtBQUs5QixJQUFJO2dCQUNmQyxNQUFNNkIsS0FBSzdCLElBQUk7Z0JBQ2ZDLFFBQVE0QixLQUFLNUIsTUFBTTtlQUpkNkI7Ozs7Ozs7Ozs7QUFTZjtJQTNDTWhCO01BQUFBO0FBNkNOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1N1YmplY3RzLzJuZC15ZWFyLzNyZFNlblN1YmplY3QudHN4P2I0YmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxudHlwZSBDYXJkUHJvcHMgPSB7XHJcbiAgc3ViamVjdDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgY3JlZGl0OiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBDYXJkOiBSZWFjdC5GQzxDYXJkUHJvcHM+ID0gKHsgc3ViamVjdCwgbmFtZSwgY29kZSwgY3JlZGl0IH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGAvY3NlLW5vdGVzLzJuZC15ZWFyLzNyZFNlbS8ke3N1YmplY3QudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCcgJywgJy0nKX1gO1xyXG4gICAgcm91dGVyLnB1c2gocm91dGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgIGNsYXNzTmFtZT1cImZsZXggc3ViamVjdC1jYXJkIHB4LTUgcm91bmRlZC14bCBwLTQgc2hhZG93LWxnIHNtOm0tNSBteS0zIGN1cnNvci1wb2ludGVyXCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy0yOCBtci02IHJvdW5kZWQteGwgaXRlbXMtY2VudGVyIGJnLXdoaXRlIGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtcHVycGxlLTUwMFwiPvCfkaQ8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc3RhcnQgcHgtNFwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwic206dGV4dC0yeGwgdGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntzdWJqZWN0fTwvaDI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgc206dGV4dC1iYXNlIHRleHQtWzE1cHhdXCI+e25hbWV9PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm10LTQgbXQtMlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5Db2RlOiB7Y29kZX08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkNyZWRpdDoge2NyZWRpdH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRoaXJkU2VtU3ViamVjdDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FyZERhdGEgPSBbXHJcbiAgICB7IHN1YmplY3Q6ICdzdWJqZWN0MScsIG5hbWU6ICdGdWxsIE5hbWUgMScsIGNvZGU6ICdDUzAwMDEnLCBjcmVkaXQ6IDMgfSxcclxuICAgIHsgc3ViamVjdDogJ3N1YmplY3QyJywgbmFtZTogJ0Z1bGwgTmFtZSAyJywgY29kZTogJ0NTMDAwMicsIGNyZWRpdDogNCB9LFxyXG4gICAgeyBzdWJqZWN0OiAnc3ViamVjdDMnLCBuYW1lOiAnRnVsbCBOYW1lIDMnLCBjb2RlOiAnQ1MwMDAzJywgY3JlZGl0OiAyIH0sXHJcblxyXG4gICAgeyBzdWJqZWN0OiAnc3ViamVjdDEnLCBuYW1lOiAnRnVsbCBOYW1lIDEnLCBjb2RlOiAnQ1MwMDAxJywgY3JlZGl0OiAzIH0sXHJcbiAgICB7IHN1YmplY3Q6ICdzdWJqZWN0MicsIG5hbWU6ICdGdWxsIE5hbWUgMicsIGNvZGU6ICdDUzAwMDInLCBjcmVkaXQ6IDQgfSxcclxuICAgIHsgc3ViamVjdDogJ3N1YmplY3QzJywgbmFtZTogJ0Z1bGwgTmFtZSAzJywgY29kZTogJ0NTMDAwMycsIGNyZWRpdDogMiB9LFxyXG5cclxuICBdO1xyXG5cclxuXHJcbiAgY29uc3QgZmV0Y2hBbmRTZXROb3RlcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZldGNoZWROb3RlcyA9IGF3YWl0IGZldGNoTm90ZXMoeWVhcik7IC8vIENoYW5nZSB0aGUgeWVhciBpZiBuZWVkZWRcclxuICAgICAgc2V0Tm90ZXMoZmV0Y2hlZE5vdGVzKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcihlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJBbiB1bmtub3duIGVycm9yIG9jY3VycmVkXCIpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hBbmRTZXROb3RlcygpO1xyXG4gIH0sIFtmZXRjaEFuZFNldE5vdGVzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICB7Y2FyZERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgc3ViamVjdD17ZGF0YS5zdWJqZWN0fVxyXG4gICAgICAgICAgbmFtZT17ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgY29kZT17ZGF0YS5jb2RlfVxyXG4gICAgICAgICAgY3JlZGl0PXtkYXRhLmNyZWRpdH1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGlyZFNlbVN1YmplY3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIkNhcmQiLCJzdWJqZWN0IiwibmFtZSIsImNvZGUiLCJjcmVkaXQiLCJyb3V0ZXIiLCJoYW5kbGVDbGljayIsInJvdXRlIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwicHVzaCIsImRpdiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJzcGFuIiwiaDIiLCJwIiwiVGhpcmRTZW1TdWJqZWN0IiwiY2FyZERhdGEiLCJmZXRjaEFuZFNldE5vdGVzIiwidXNlQ2FsbGJhY2siLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJmZXRjaGVkTm90ZXMiLCJmZXRjaE5vdGVzIiwieWVhciIsInNldE5vdGVzIiwiZXJyIiwiRXJyb3IiLCJtZXNzYWdlIiwidXNlRWZmZWN0IiwibWFwIiwiZGF0YSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Subjects/2nd-year/3rdSenSubject.tsx\n"));

/***/ })

});