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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Card = (param)=>{\n    let { subject, name, code, credit } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleClick = ()=>{\n        const route = \"/cse-notes/2nd-year/3rdSem/\".concat(subject.toLowerCase().replace(\" \", \"-\"));\n        router.push(route);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: handleClick,\n        className: \"flex subject-card px-5 rounded-xl p-4 shadow-lg sm:m-5 my-3 cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-28 mr-6 rounded-xl items-center bg-white justify-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"  rounded-full flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-3xl font-bold text-purple-500\",\n                        children: \"\\uD83D\\uDC64\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-start px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"sm:text-2xl text-xl font-bold text-white\",\n                        children: subject\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white sm:text-base text-[15px]\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sm:mt-4 mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white\",\n                                children: [\n                                    \"Code: \",\n                                    code\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white\",\n                                children: [\n                                    \"Credit: \",\n                                    credit\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Card, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Card;\nconst fetchNotes = async (year, sem)=>{\n    const response = await fetch(\"http://localhost:5000/api/v1/notes/get_note/\".concat(year));\n    if (!response.ok) {\n        throw new Error(\"Failed to fetch notes\");\n    }\n    const data = await response.json();\n    return data.notes;\n};\nconst ThirdSemSubject = (param)=>{\n    let { year, sem } = param;\n    _s1();\n    // const cardData = [\n    //   { subject: \"subject1\", name: \"Full Name 1\", code: \"CS0001\", credit: 3 },\n    //   { subject: \"subject2\", name: \"Full Name 2\", code: \"CS0002\", credit: 4 },\n    //   { subject: \"subject3\", name: \"Full Name 3\", code: \"CS0003\", credit: 2 },\n    //   { subject: \"subject1\", name: \"Full Name 1\", code: \"CS0001\", credit: 3 },\n    //   { subject: \"subject2\", name: \"Full Name 2\", code: \"CS0002\", credit: 4 },\n    //   { subject: \"subject3\", name: \"Full Name 3\", code: \"CS0003\", credit: 2 },\n    // ];\n    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchAndSetNotes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        setLoading(true);\n        setError(null);\n        try {\n            const fetchedNotes = await fetchNotes(year, sem); // Change the year if needed\n            setNotes(fetchedNotes);\n        } catch (err) {\n            setError(err instanceof Error ? err.message : \"An unknown error occurred\");\n        } finally{\n            setLoading(false);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchAndSetNotes();\n    }, [\n        fetchAndSetNotes\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap justify-center items-center\",\n        children: cardData.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                subject: data.subject,\n                name: data.name,\n                code: data.code,\n                credit: data.credit\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(ThirdSemSubject, \"PvmkGn093+ITzTwmZBZ+HRkBL6g=\");\n_c1 = ThirdSemSubject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThirdSemSubject);\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"ThirdSemSubject\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1N1YmplY3RzLzJuZC15ZWFyLzNyZFNlblN1YmplY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFZ0U7QUFDcEI7QUFTNUMsTUFBTUssT0FBNEI7UUFBQyxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7O0lBQ2hFLE1BQU1DLFNBQVNOLDBEQUFTQTtJQUV4QixNQUFNTyxjQUFjO1FBQ2xCLE1BQU1DLFFBQVEsOEJBRU8sT0FGdUJOLFFBQ3pDTyxXQUFXLEdBQ1hDLE9BQU8sQ0FBQyxLQUFLO1FBQ2hCSixPQUFPSyxJQUFJLENBQUNIO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0k7UUFDQ0MsU0FBU047UUFDVE8sV0FBVTs7MEJBRVYsOERBQUNGO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDRjtvQkFBSUUsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUtELFdBQVU7a0NBQXFDOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6RCw4REFBQ0Y7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBNENaOzs7Ozs7a0NBQzFELDhEQUFDZTt3QkFBRUgsV0FBVTtrQ0FBdUNYOzs7Ozs7a0NBQ3BELDhEQUFDUzt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFFSCxXQUFVOztvQ0FBYTtvQ0FBT1Y7Ozs7Ozs7MENBQ2pDLDhEQUFDYTtnQ0FBRUgsV0FBVTs7b0NBQWE7b0NBQVNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdDO0dBOUJNSjs7UUFDV0Qsc0RBQVNBOzs7S0FEcEJDO0FBK0JOLE1BQU1pQixhQUFhLE9BQU9DLE1BQWNDO0lBQ3RDLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsK0NBQW9ELE9BQUxIO0lBRWpELElBQUksQ0FBQ0UsU0FBU0UsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtJQUNoQyxPQUFPRCxLQUFLRSxLQUFLO0FBQ25CO0FBQ0EsTUFBTUMsa0JBQWtCO1FBQUMsRUFBRVQsSUFBSSxFQUFFQyxHQUFHLEVBQWlDOztJQUNuRSxxQkFBcUI7SUFDckIsNkVBQTZFO0lBQzdFLDZFQUE2RTtJQUM3RSw2RUFBNkU7SUFFN0UsNkVBQTZFO0lBQzdFLDZFQUE2RTtJQUM3RSw2RUFBNkU7SUFDN0UsS0FBSztJQUNMLE1BQU0sQ0FBQ08sT0FBT0UsU0FBUyxHQUFHOUIsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUMrQixTQUFTQyxXQUFXLEdBQUdoQywrQ0FBUUEsQ0FBVTtJQUNoRCxNQUFNLENBQUNpQyxPQUFPQyxTQUFTLEdBQUdsQywrQ0FBUUEsQ0FBZ0I7SUFDbEQsTUFBTW1DLG1CQUFtQnJDLGtEQUFXQSxDQUFDO1FBQ25Da0MsV0FBVztRQUNYRSxTQUFTO1FBQ1QsSUFBSTtZQUNGLE1BQU1FLGVBQWUsTUFBTWpCLFdBQVdDLE1BQU1DLE1BQU0sNEJBQTRCO1lBQzlFUyxTQUFTTTtRQUNYLEVBQUUsT0FBT0MsS0FBSztZQUNaSCxTQUNFRyxlQUFlWixRQUFRWSxJQUFJQyxPQUFPLEdBQUc7UUFFekMsU0FBVTtZQUNSTixXQUFXO1FBQ2I7SUFDRixHQUFHLEVBQUU7SUFFTGpDLGdEQUFTQSxDQUFDO1FBQ1JvQztJQUNGLEdBQUc7UUFBQ0E7S0FBaUI7SUFFckIscUJBQ0UsOERBQUN0QjtRQUFJRSxXQUFVO2tCQUNad0IsU0FBU0MsR0FBRyxDQUFDLENBQUNkLE1BQU1lLHNCQUNuQiw4REFBQ3ZDO2dCQUVDQyxTQUFTdUIsS0FBS3ZCLE9BQU87Z0JBQ3JCQyxNQUFNc0IsS0FBS3RCLElBQUk7Z0JBQ2ZDLE1BQU1xQixLQUFLckIsSUFBSTtnQkFDZkMsUUFBUW9CLEtBQUtwQixNQUFNO2VBSmRtQzs7Ozs7Ozs7OztBQVNmO0lBN0NNWjtNQUFBQTtBQStDTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TdWJqZWN0cy8ybmQteWVhci8zcmRTZW5TdWJqZWN0LnRzeD9iNGJlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbnR5cGUgQ2FyZFByb3BzID0ge1xyXG4gIHN1YmplY3Q6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY29kZTogc3RyaW5nO1xyXG4gIGNyZWRpdDogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgQ2FyZDogUmVhY3QuRkM8Q2FyZFByb3BzPiA9ICh7IHN1YmplY3QsIG5hbWUsIGNvZGUsIGNyZWRpdCB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGUgPSBgL2NzZS1ub3Rlcy8ybmQteWVhci8zcmRTZW0vJHtzdWJqZWN0XHJcbiAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIC5yZXBsYWNlKFwiIFwiLCBcIi1cIil9YDtcclxuICAgIHJvdXRlci5wdXNoKHJvdXRlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBzdWJqZWN0LWNhcmQgcHgtNSByb3VuZGVkLXhsIHAtNCBzaGFkb3ctbGcgc206bS01IG15LTMgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy0yOCBtci02IHJvdW5kZWQteGwgaXRlbXMtY2VudGVyIGJnLXdoaXRlIGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXB1cnBsZS01MDBcIj7wn5GkPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0IHB4LTRcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic206dGV4dC0yeGwgdGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntzdWJqZWN0fTwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBzbTp0ZXh0LWJhc2UgdGV4dC1bMTVweF1cIj57bmFtZX08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTptdC00IG10LTJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5Db2RlOiB7Y29kZX08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Q3JlZGl0OiB7Y3JlZGl0fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5jb25zdCBmZXRjaE5vdGVzID0gYXN5bmMgKHllYXI6IG51bWJlciwgc2VtOiBudW1iZXIpOiBQcm9taXNlPFtdPiA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL25vdGVzL2dldF9ub3RlLyR7eWVhcn1gXHJcbiAgKTtcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggbm90ZXNcIik7XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGEubm90ZXM7XHJcbn07XHJcbmNvbnN0IFRoaXJkU2VtU3ViamVjdCA9ICh7IHllYXIsIHNlbSB9OiB7IHllYXI6IG51bWJlcjsgc2VtOiBudW1iZXIgfSkgPT4ge1xyXG4gIC8vIGNvbnN0IGNhcmREYXRhID0gW1xyXG4gIC8vICAgeyBzdWJqZWN0OiBcInN1YmplY3QxXCIsIG5hbWU6IFwiRnVsbCBOYW1lIDFcIiwgY29kZTogXCJDUzAwMDFcIiwgY3JlZGl0OiAzIH0sXHJcbiAgLy8gICB7IHN1YmplY3Q6IFwic3ViamVjdDJcIiwgbmFtZTogXCJGdWxsIE5hbWUgMlwiLCBjb2RlOiBcIkNTMDAwMlwiLCBjcmVkaXQ6IDQgfSxcclxuICAvLyAgIHsgc3ViamVjdDogXCJzdWJqZWN0M1wiLCBuYW1lOiBcIkZ1bGwgTmFtZSAzXCIsIGNvZGU6IFwiQ1MwMDAzXCIsIGNyZWRpdDogMiB9LFxyXG5cclxuICAvLyAgIHsgc3ViamVjdDogXCJzdWJqZWN0MVwiLCBuYW1lOiBcIkZ1bGwgTmFtZSAxXCIsIGNvZGU6IFwiQ1MwMDAxXCIsIGNyZWRpdDogMyB9LFxyXG4gIC8vICAgeyBzdWJqZWN0OiBcInN1YmplY3QyXCIsIG5hbWU6IFwiRnVsbCBOYW1lIDJcIiwgY29kZTogXCJDUzAwMDJcIiwgY3JlZGl0OiA0IH0sXHJcbiAgLy8gICB7IHN1YmplY3Q6IFwic3ViamVjdDNcIiwgbmFtZTogXCJGdWxsIE5hbWUgM1wiLCBjb2RlOiBcIkNTMDAwM1wiLCBjcmVkaXQ6IDIgfSxcclxuICAvLyBdO1xyXG4gIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgZmV0Y2hBbmRTZXROb3RlcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZldGNoZWROb3RlcyA9IGF3YWl0IGZldGNoTm90ZXMoeWVhciwgc2VtKTsgLy8gQ2hhbmdlIHRoZSB5ZWFyIGlmIG5lZWRlZFxyXG4gICAgICBzZXROb3RlcyhmZXRjaGVkTm90ZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldEVycm9yKFxyXG4gICAgICAgIGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcIkFuIHVua25vd24gZXJyb3Igb2NjdXJyZWRcIlxyXG4gICAgICApO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hBbmRTZXROb3RlcygpO1xyXG4gIH0sIFtmZXRjaEFuZFNldE5vdGVzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICB7Y2FyZERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgc3ViamVjdD17ZGF0YS5zdWJqZWN0fVxyXG4gICAgICAgICAgbmFtZT17ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgY29kZT17ZGF0YS5jb2RlfVxyXG4gICAgICAgICAgY3JlZGl0PXtkYXRhLmNyZWRpdH1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGlyZFNlbVN1YmplY3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJDYXJkIiwic3ViamVjdCIsIm5hbWUiLCJjb2RlIiwiY3JlZGl0Iiwicm91dGVyIiwiaGFuZGxlQ2xpY2siLCJyb3V0ZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInB1c2giLCJkaXYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwic3BhbiIsImgyIiwicCIsImZldGNoTm90ZXMiLCJ5ZWFyIiwic2VtIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsIm5vdGVzIiwiVGhpcmRTZW1TdWJqZWN0Iiwic2V0Tm90ZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaEFuZFNldE5vdGVzIiwiZmV0Y2hlZE5vdGVzIiwiZXJyIiwibWVzc2FnZSIsImNhcmREYXRhIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Subjects/2nd-year/3rdSenSubject.tsx\n"));

/***/ })

});