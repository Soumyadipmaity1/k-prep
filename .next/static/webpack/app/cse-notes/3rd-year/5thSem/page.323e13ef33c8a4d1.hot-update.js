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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Card = (param)=>{\n    let { subject, name, code, credit } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleClick = ()=>{\n        const route = \"/cse-notes/2nd-year/3rdSem/\".concat(subject.toLowerCase().replace(\" \", \"-\"));\n        router.push(route);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: handleClick,\n        className: \"flex subject-card px-5 rounded-xl p-4 shadow-lg sm:m-5 my-3 cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-28 mr-6 rounded-xl items-center bg-white justify-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"  rounded-full flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-3xl font-bold text-purple-500\",\n                        children: \"\\uD83D\\uDC64\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-start px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"sm:text-2xl text-xl font-bold text-white\",\n                        children: subject\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white sm:text-base text-[15px]\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sm:mt-4 mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white\",\n                                children: [\n                                    \"Code: \",\n                                    code\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white\",\n                                children: [\n                                    \"Credit: \",\n                                    credit\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Card, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Card;\nconst fetchNotes = async (year, sem)=>{\n    const response = await fetch(\"http://localhost:5000/api/v1/notes/get_note/\".concat(year));\n    if (!response.ok) {\n        throw new Error(\"Failed to fetch notes\");\n    }\n    const data = await response.json();\n    return data.notes;\n};\nconst ThirdSemSubject = (param)=>{\n    let { year, sem } = param;\n    _s1();\n    const cardData = [\n        {\n            subject: \"subject1\",\n            name: \"Full Name 1\",\n            code: \"CS0001\",\n            credit: 3\n        },\n        {\n            subject: \"subject2\",\n            name: \"Full Name 2\",\n            code: \"CS0002\",\n            credit: 4\n        },\n        {\n            subject: \"subject3\",\n            name: \"Full Name 3\",\n            code: \"CS0003\",\n            credit: 2\n        },\n        {\n            subject: \"subject1\",\n            name: \"Full Name 1\",\n            code: \"CS0001\",\n            credit: 3\n        },\n        {\n            subject: \"subject2\",\n            name: \"Full Name 2\",\n            code: \"CS0002\",\n            credit: 4\n        },\n        {\n            subject: \"subject3\",\n            name: \"Full Name 3\",\n            code: \"CS0003\",\n            credit: 2\n        }\n    ];\n    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchAndSetNotes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        setLoading(true);\n        setError(null);\n        try {\n            const fetchedNotes = await fetchNotes(year, num); // Change the year if needed\n            setNotes(fetchedNotes);\n        } catch (err) {\n            setError(err instanceof Error ? err.message : \"An unknown error occurred\");\n        } finally{\n            setLoading(false);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchAndSetNotes();\n    }, [\n        fetchAndSetNotes\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap justify-center items-center\",\n        children: cardData.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                subject: data.subject,\n                name: data.name,\n                code: data.code,\n                credit: data.credit\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(ThirdSemSubject, \"PvmkGn093+ITzTwmZBZ+HRkBL6g=\");\n_c1 = ThirdSemSubject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThirdSemSubject);\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"ThirdSemSubject\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1N1YmplY3RzLzJuZC15ZWFyLzNyZFNlblN1YmplY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFOEQ7QUFDbEI7QUFTNUMsTUFBTUssT0FBNEI7UUFBQyxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7O0lBQ2hFLE1BQU1DLFNBQVNOLDBEQUFTQTtJQUV4QixNQUFNTyxjQUFjO1FBQ2xCLE1BQU1DLFFBQVEsOEJBRU8sT0FGdUJOLFFBQ3pDTyxXQUFXLEdBQ1hDLE9BQU8sQ0FBQyxLQUFLO1FBQ2hCSixPQUFPSyxJQUFJLENBQUNIO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0k7UUFDQ0MsU0FBU047UUFDVE8sV0FBVTs7MEJBRVYsOERBQUNGO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDRjtvQkFBSUUsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUtELFdBQVU7a0NBQXFDOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6RCw4REFBQ0Y7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBNENaOzs7Ozs7a0NBQzFELDhEQUFDZTt3QkFBRUgsV0FBVTtrQ0FBdUNYOzs7Ozs7a0NBQ3BELDhEQUFDUzt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFFSCxXQUFVOztvQ0FBYTtvQ0FBT1Y7Ozs7Ozs7MENBQ2pDLDhEQUFDYTtnQ0FBRUgsV0FBVTs7b0NBQWE7b0NBQVNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdDO0dBOUJNSjs7UUFDV0Qsc0RBQVNBOzs7S0FEcEJDO0FBK0JOLE1BQU1pQixhQUFhLE9BQU9DLE1BQWFDO0lBQ3JDLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsK0NBQW9ELE9BQUxIO0lBRWpELElBQUksQ0FBQ0UsU0FBU0UsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtJQUNoQyxPQUFPRCxLQUFLRSxLQUFLO0FBQ25CO0FBQ0EsTUFBTUMsa0JBQWtCO1FBQUMsRUFBQ1QsSUFBSSxFQUFDQyxHQUFHLEVBQTBCOztJQUMxRCxNQUFNUyxXQUFXO1FBQ2Y7WUFBRTNCLFNBQVM7WUFBWUMsTUFBTTtZQUFlQyxNQUFNO1lBQVVDLFFBQVE7UUFBRTtRQUN0RTtZQUFFSCxTQUFTO1lBQVlDLE1BQU07WUFBZUMsTUFBTTtZQUFVQyxRQUFRO1FBQUU7UUFDdEU7WUFBRUgsU0FBUztZQUFZQyxNQUFNO1lBQWVDLE1BQU07WUFBVUMsUUFBUTtRQUFFO1FBRXRFO1lBQUVILFNBQVM7WUFBWUMsTUFBTTtZQUFlQyxNQUFNO1lBQVVDLFFBQVE7UUFBRTtRQUN0RTtZQUFFSCxTQUFTO1lBQVlDLE1BQU07WUFBZUMsTUFBTTtZQUFVQyxRQUFRO1FBQUU7UUFDdEU7WUFBRUgsU0FBUztZQUFZQyxNQUFNO1lBQWVDLE1BQU07WUFBVUMsUUFBUTtRQUFFO0tBQ3ZFO0lBQ0QsTUFBTSxDQUFDc0IsT0FBT0csU0FBUyxHQUFHL0IsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNnQyxTQUFTQyxXQUFXLEdBQUdqQywrQ0FBUUEsQ0FBVTtJQUNoRCxNQUFNLENBQUNrQyxPQUFPQyxTQUFTLEdBQUduQywrQ0FBUUEsQ0FBZ0I7SUFDbEQsTUFBTW9DLG1CQUFtQnRDLGtEQUFXQSxDQUFDO1FBQ25DbUMsV0FBVztRQUNYRSxTQUFTO1FBQ1QsSUFBSTtZQUNGLE1BQU1FLGVBQWUsTUFBTWxCLFdBQVdDLE1BQUtrQixNQUFNLDRCQUE0QjtZQUM3RVAsU0FBU007UUFDWCxFQUFFLE9BQU9FLEtBQUs7WUFDWkosU0FDRUksZUFBZWQsUUFBUWMsSUFBSUMsT0FBTyxHQUFHO1FBRXpDLFNBQVU7WUFDUlAsV0FBVztRQUNiO0lBQ0YsR0FBRyxFQUFFO0lBRUxsQyxnREFBU0EsQ0FBQztRQUNScUM7SUFDRixHQUFHO1FBQUNBO0tBQWlCO0lBRXJCLHFCQUNFLDhEQUFDdkI7UUFBSUUsV0FBVTtrQkFDWmUsU0FBU1csR0FBRyxDQUFDLENBQUNmLE1BQU1nQixzQkFDbkIsOERBQUN4QztnQkFFQ0MsU0FBU3VCLEtBQUt2QixPQUFPO2dCQUNyQkMsTUFBTXNCLEtBQUt0QixJQUFJO2dCQUNmQyxNQUFNcUIsS0FBS3JCLElBQUk7Z0JBQ2ZDLFFBQVFvQixLQUFLcEIsTUFBTTtlQUpkb0M7Ozs7Ozs7Ozs7QUFTZjtJQTdDTWI7TUFBQUE7QUErQ04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3ViamVjdHMvMm5kLXllYXIvM3JkU2VuU3ViamVjdC50c3g/YjRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayx1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxudHlwZSBDYXJkUHJvcHMgPSB7XHJcbiAgc3ViamVjdDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgY3JlZGl0OiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBDYXJkOiBSZWFjdC5GQzxDYXJkUHJvcHM+ID0gKHsgc3ViamVjdCwgbmFtZSwgY29kZSwgY3JlZGl0IH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGAvY3NlLW5vdGVzLzJuZC15ZWFyLzNyZFNlbS8ke3N1YmplY3RcclxuICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgLnJlcGxhY2UoXCIgXCIsIFwiLVwiKX1gO1xyXG4gICAgcm91dGVyLnB1c2gocm91dGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IHN1YmplY3QtY2FyZCBweC01IHJvdW5kZWQteGwgcC00IHNoYWRvdy1sZyBzbTptLTUgbXktMyBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTI4IG1yLTYgcm91bmRlZC14bCBpdGVtcy1jZW50ZXIgYmctd2hpdGUganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtcHVycGxlLTUwMFwiPvCfkaQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc3RhcnQgcHgtNFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbTp0ZXh0LTJ4bCB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+e3N1YmplY3R9PC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHNtOnRleHQtYmFzZSB0ZXh0LVsxNXB4XVwiPntuYW1lfTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm10LTQgbXQtMlwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkNvZGU6IHtjb2RlfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5DcmVkaXQ6IHtjcmVkaXR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IGZldGNoTm90ZXMgPSBhc3luYyAoeWVhcjogbnVtYmVyLHNlbTpudW1iZXIpOiBQcm9taXNlPFtdPiA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL25vdGVzL2dldF9ub3RlLyR7eWVhcn1gXHJcbiAgKTtcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggbm90ZXNcIik7XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGEubm90ZXM7XHJcbn07XHJcbmNvbnN0IFRoaXJkU2VtU3ViamVjdCA9ICh7eWVhcixzZW19Ont5ZWFyOm51bWJlcixzZW06bnVtYmVyfSkgPT4ge1xyXG4gIGNvbnN0IGNhcmREYXRhID0gW1xyXG4gICAgeyBzdWJqZWN0OiBcInN1YmplY3QxXCIsIG5hbWU6IFwiRnVsbCBOYW1lIDFcIiwgY29kZTogXCJDUzAwMDFcIiwgY3JlZGl0OiAzIH0sXHJcbiAgICB7IHN1YmplY3Q6IFwic3ViamVjdDJcIiwgbmFtZTogXCJGdWxsIE5hbWUgMlwiLCBjb2RlOiBcIkNTMDAwMlwiLCBjcmVkaXQ6IDQgfSxcclxuICAgIHsgc3ViamVjdDogXCJzdWJqZWN0M1wiLCBuYW1lOiBcIkZ1bGwgTmFtZSAzXCIsIGNvZGU6IFwiQ1MwMDAzXCIsIGNyZWRpdDogMiB9LFxyXG5cclxuICAgIHsgc3ViamVjdDogXCJzdWJqZWN0MVwiLCBuYW1lOiBcIkZ1bGwgTmFtZSAxXCIsIGNvZGU6IFwiQ1MwMDAxXCIsIGNyZWRpdDogMyB9LFxyXG4gICAgeyBzdWJqZWN0OiBcInN1YmplY3QyXCIsIG5hbWU6IFwiRnVsbCBOYW1lIDJcIiwgY29kZTogXCJDUzAwMDJcIiwgY3JlZGl0OiA0IH0sXHJcbiAgICB7IHN1YmplY3Q6IFwic3ViamVjdDNcIiwgbmFtZTogXCJGdWxsIE5hbWUgM1wiLCBjb2RlOiBcIkNTMDAwM1wiLCBjcmVkaXQ6IDIgfSxcclxuICBdO1xyXG4gIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgZmV0Y2hBbmRTZXROb3RlcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZldGNoZWROb3RlcyA9IGF3YWl0IGZldGNoTm90ZXMoeWVhcixudW0pOyAvLyBDaGFuZ2UgdGhlIHllYXIgaWYgbmVlZGVkXHJcbiAgICAgIHNldE5vdGVzKGZldGNoZWROb3Rlcyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0RXJyb3IoXHJcbiAgICAgICAgZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZFwiXHJcbiAgICAgICk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaEFuZFNldE5vdGVzKCk7XHJcbiAgfSwgW2ZldGNoQW5kU2V0Tm90ZXNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIHtjYXJkRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBzdWJqZWN0PXtkYXRhLnN1YmplY3R9XHJcbiAgICAgICAgICBuYW1lPXtkYXRhLm5hbWV9XHJcbiAgICAgICAgICBjb2RlPXtkYXRhLmNvZGV9XHJcbiAgICAgICAgICBjcmVkaXQ9e2RhdGEuY3JlZGl0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoaXJkU2VtU3ViamVjdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkNhcmQiLCJzdWJqZWN0IiwibmFtZSIsImNvZGUiLCJjcmVkaXQiLCJyb3V0ZXIiLCJoYW5kbGVDbGljayIsInJvdXRlIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwicHVzaCIsImRpdiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJzcGFuIiwiaDIiLCJwIiwiZmV0Y2hOb3RlcyIsInllYXIiLCJzZW0iLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJUaGlyZFNlbVN1YmplY3QiLCJjYXJkRGF0YSIsInNldE5vdGVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hBbmRTZXROb3RlcyIsImZldGNoZWROb3RlcyIsIm51bSIsImVyciIsIm1lc3NhZ2UiLCJtYXAiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Subjects/2nd-year/3rdSenSubject.tsx\n"));

/***/ })

});