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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Card = (param)=>{\n    let { subject, name, code, credit } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleClick = ()=>{\n        const route = \"/cse-notes/2nd-year/3rdSem/\".concat(subject.toLowerCase().replace(\" \", \"-\"));\n        router.push(route);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: handleClick,\n        className: \"flex subject-card px-5 rounded-xl p-4 shadow-lg sm:m-5 my-3 cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-28 mr-6 rounded-xl items-center bg-white justify-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"  rounded-full flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-3xl font-bold text-purple-500\",\n                        children: \"\\uD83D\\uDC64\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-start px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"sm:text-2xl text-xl font-bold text-white\",\n                        children: subject\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white sm:text-base text-[15px]\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sm:mt-4 mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white\",\n                                children: [\n                                    \"Code: \",\n                                    code\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white\",\n                                children: [\n                                    \"Credit: \",\n                                    credit\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Card, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Card;\nconst fetchNotes = async (year1)=>{\n    const response = await fetch(\"http://localhost:5000/api/v1/notes/get_note/\".concat(year1));\n    if (!response.ok) {\n        throw new Error(\"Failed to fetch notes\");\n    }\n    const data = await response.json();\n    return data.notes;\n};\nconst ThirdSemSubject = ()=>{\n    _s1();\n    const cardData = [\n        {\n            subject: \"subject1\",\n            name: \"Full Name 1\",\n            code: \"CS0001\",\n            credit: 3\n        },\n        {\n            subject: \"subject2\",\n            name: \"Full Name 2\",\n            code: \"CS0002\",\n            credit: 4\n        },\n        {\n            subject: \"subject3\",\n            name: \"Full Name 3\",\n            code: \"CS0003\",\n            credit: 2\n        },\n        {\n            subject: \"subject1\",\n            name: \"Full Name 1\",\n            code: \"CS0001\",\n            credit: 3\n        },\n        {\n            subject: \"subject2\",\n            name: \"Full Name 2\",\n            code: \"CS0002\",\n            credit: 4\n        },\n        {\n            subject: \"subject3\",\n            name: \"Full Name 3\",\n            code: \"CS0003\",\n            credit: 2\n        }\n    ];\n    const [notes, setNotes] = useState([]);\n    const [loading, setLoading] = useState(true);\n    const [error, setError] = useState(null);\n    const fetchAndSetNotes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        setLoading(true);\n        setError(null);\n        try {\n            const fetchedNotes = await fetchNotes(year); // Change the year if needed\n            setNotes(fetchedNotes);\n        } catch (err) {\n            setError(err instanceof Error ? err.message : \"An unknown error occurred\");\n        } finally{\n            setLoading(false);\n        }\n    }, []);\n    useEffect(()=>{\n        fetchAndSetNotes();\n    }, [\n        fetchAndSetNotes\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap justify-center items-center\",\n        children: cardData.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                subject: data.subject,\n                name: data.name,\n                code: data.code,\n                credit: data.credit\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(ThirdSemSubject, \"PvmkGn093+ITzTwmZBZ+HRkBL6g=\");\n_c1 = ThirdSemSubject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThirdSemSubject);\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"ThirdSemSubject\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1N1YmplY3RzLzJuZC15ZWFyLzNyZFNlblN1YmplY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFMkM7QUFDQztBQVM1QyxNQUFNRyxPQUE0QjtRQUFDLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTs7SUFDaEUsTUFBTUMsU0FBU04sMERBQVNBO0lBRXhCLE1BQU1PLGNBQWM7UUFDbEIsTUFBTUMsUUFBUSw4QkFFTyxPQUZ1Qk4sUUFDekNPLFdBQVcsR0FDWEMsT0FBTyxDQUFDLEtBQUs7UUFDaEJKLE9BQU9LLElBQUksQ0FBQ0g7SUFDZDtJQUVBLHFCQUNFLDhEQUFDSTtRQUNDQyxTQUFTTjtRQUNUTyxXQUFVOzswQkFFViw4REFBQ0Y7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNGO29CQUFJRSxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBS0QsV0FBVTtrQ0FBcUM7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3pELDhEQUFDRjtnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFHRixXQUFVO2tDQUE0Q1o7Ozs7OztrQ0FDMUQsOERBQUNlO3dCQUFFSCxXQUFVO2tDQUF1Q1g7Ozs7OztrQ0FDcEQsOERBQUNTO3dCQUFJRSxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQUVILFdBQVU7O29DQUFhO29DQUFPVjs7Ozs7OzswQ0FDakMsOERBQUNhO2dDQUFFSCxXQUFVOztvQ0FBYTtvQ0FBU1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0M7R0E5Qk1KOztRQUNXRCxzREFBU0E7OztLQURwQkM7QUErQk4sTUFBTWlCLGFBQWEsT0FBT0M7SUFDeEIsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiwrQ0FBb0QsT0FBTEY7SUFFakQsSUFBSSxDQUFDQyxTQUFTRSxFQUFFLEVBQUU7UUFDaEIsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsTUFBTUMsT0FBTyxNQUFNSixTQUFTSyxJQUFJO0lBQ2hDLE9BQU9ELEtBQUtFLEtBQUs7QUFDbkI7QUFDQSxNQUFNQyxrQkFBNEI7O0lBQ2hDLE1BQU1DLFdBQVc7UUFDZjtZQUFFMUIsU0FBUztZQUFZQyxNQUFNO1lBQWVDLE1BQU07WUFBVUMsUUFBUTtRQUFFO1FBQ3RFO1lBQUVILFNBQVM7WUFBWUMsTUFBTTtZQUFlQyxNQUFNO1lBQVVDLFFBQVE7UUFBRTtRQUN0RTtZQUFFSCxTQUFTO1lBQVlDLE1BQU07WUFBZUMsTUFBTTtZQUFVQyxRQUFRO1FBQUU7UUFFdEU7WUFBRUgsU0FBUztZQUFZQyxNQUFNO1lBQWVDLE1BQU07WUFBVUMsUUFBUTtRQUFFO1FBQ3RFO1lBQUVILFNBQVM7WUFBWUMsTUFBTTtZQUFlQyxNQUFNO1lBQVVDLFFBQVE7UUFBRTtRQUN0RTtZQUFFSCxTQUFTO1lBQVlDLE1BQU07WUFBZUMsTUFBTTtZQUFVQyxRQUFRO1FBQUU7S0FDdkU7SUFDRCxNQUFNLENBQUNxQixPQUFPRyxTQUFTLEdBQUdDLFNBQWlCLEVBQUU7SUFDN0MsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdGLFNBQWtCO0lBQ2hELE1BQU0sQ0FBQ0csT0FBT0MsU0FBUyxHQUFHSixTQUF3QjtJQUNsRCxNQUFNSyxtQkFBbUJwQyxrREFBV0EsQ0FBQztRQUNuQ2lDLFdBQVc7UUFDWEUsU0FBUztRQUNULElBQUk7WUFDRixNQUFNRSxlQUFlLE1BQU1sQixXQUFXQyxPQUFPLDRCQUE0QjtZQUN6RVUsU0FBU087UUFDWCxFQUFFLE9BQU9DLEtBQUs7WUFDWkgsU0FDRUcsZUFBZWQsUUFBUWMsSUFBSUMsT0FBTyxHQUFHO1FBRXpDLFNBQVU7WUFDUk4sV0FBVztRQUNiO0lBQ0YsR0FBRyxFQUFFO0lBRUxPLFVBQVU7UUFDUko7SUFDRixHQUFHO1FBQUNBO0tBQWlCO0lBRXJCLHFCQUNFLDhEQUFDdkI7UUFBSUUsV0FBVTtrQkFDWmMsU0FBU1ksR0FBRyxDQUFDLENBQUNoQixNQUFNaUIsc0JBQ25CLDhEQUFDeEM7Z0JBRUNDLFNBQVNzQixLQUFLdEIsT0FBTztnQkFDckJDLE1BQU1xQixLQUFLckIsSUFBSTtnQkFDZkMsTUFBTW9CLEtBQUtwQixJQUFJO2dCQUNmQyxRQUFRbUIsS0FBS25CLE1BQU07ZUFKZG9DOzs7Ozs7Ozs7O0FBU2Y7SUE3Q01kO01BQUFBO0FBK0NOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1N1YmplY3RzLzJuZC15ZWFyLzNyZFNlblN1YmplY3QudHN4P2I0YmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxudHlwZSBDYXJkUHJvcHMgPSB7XHJcbiAgc3ViamVjdDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgY3JlZGl0OiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBDYXJkOiBSZWFjdC5GQzxDYXJkUHJvcHM+ID0gKHsgc3ViamVjdCwgbmFtZSwgY29kZSwgY3JlZGl0IH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGAvY3NlLW5vdGVzLzJuZC15ZWFyLzNyZFNlbS8ke3N1YmplY3RcclxuICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgLnJlcGxhY2UoXCIgXCIsIFwiLVwiKX1gO1xyXG4gICAgcm91dGVyLnB1c2gocm91dGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IHN1YmplY3QtY2FyZCBweC01IHJvdW5kZWQteGwgcC00IHNoYWRvdy1sZyBzbTptLTUgbXktMyBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTI4IG1yLTYgcm91bmRlZC14bCBpdGVtcy1jZW50ZXIgYmctd2hpdGUganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtcHVycGxlLTUwMFwiPvCfkaQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc3RhcnQgcHgtNFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbTp0ZXh0LTJ4bCB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+e3N1YmplY3R9PC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHNtOnRleHQtYmFzZSB0ZXh0LVsxNXB4XVwiPntuYW1lfTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm10LTQgbXQtMlwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkNvZGU6IHtjb2RlfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5DcmVkaXQ6IHtjcmVkaXR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IGZldGNoTm90ZXMgPSBhc3luYyAoeWVhcjogbnVtYmVyKTogUHJvbWlzZTxOb3RlW10+ID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbm90ZXMvZ2V0X25vdGUvJHt5ZWFyfWBcclxuICApO1xyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBub3Rlc1wiKTtcclxuICB9XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YS5ub3RlcztcclxufTtcclxuY29uc3QgVGhpcmRTZW1TdWJqZWN0OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBjYXJkRGF0YSA9IFtcclxuICAgIHsgc3ViamVjdDogXCJzdWJqZWN0MVwiLCBuYW1lOiBcIkZ1bGwgTmFtZSAxXCIsIGNvZGU6IFwiQ1MwMDAxXCIsIGNyZWRpdDogMyB9LFxyXG4gICAgeyBzdWJqZWN0OiBcInN1YmplY3QyXCIsIG5hbWU6IFwiRnVsbCBOYW1lIDJcIiwgY29kZTogXCJDUzAwMDJcIiwgY3JlZGl0OiA0IH0sXHJcbiAgICB7IHN1YmplY3Q6IFwic3ViamVjdDNcIiwgbmFtZTogXCJGdWxsIE5hbWUgM1wiLCBjb2RlOiBcIkNTMDAwM1wiLCBjcmVkaXQ6IDIgfSxcclxuXHJcbiAgICB7IHN1YmplY3Q6IFwic3ViamVjdDFcIiwgbmFtZTogXCJGdWxsIE5hbWUgMVwiLCBjb2RlOiBcIkNTMDAwMVwiLCBjcmVkaXQ6IDMgfSxcclxuICAgIHsgc3ViamVjdDogXCJzdWJqZWN0MlwiLCBuYW1lOiBcIkZ1bGwgTmFtZSAyXCIsIGNvZGU6IFwiQ1MwMDAyXCIsIGNyZWRpdDogNCB9LFxyXG4gICAgeyBzdWJqZWN0OiBcInN1YmplY3QzXCIsIG5hbWU6IFwiRnVsbCBOYW1lIDNcIiwgY29kZTogXCJDUzAwMDNcIiwgY3JlZGl0OiAyIH0sXHJcbiAgXTtcclxuICBjb25zdCBbbm90ZXMsIHNldE5vdGVzXSA9IHVzZVN0YXRlPE5vdGVbXT4oW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgZmV0Y2hBbmRTZXROb3RlcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZldGNoZWROb3RlcyA9IGF3YWl0IGZldGNoTm90ZXMoeWVhcik7IC8vIENoYW5nZSB0aGUgeWVhciBpZiBuZWVkZWRcclxuICAgICAgc2V0Tm90ZXMoZmV0Y2hlZE5vdGVzKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcihcclxuICAgICAgICBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJBbiB1bmtub3duIGVycm9yIG9jY3VycmVkXCJcclxuICAgICAgKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoQW5kU2V0Tm90ZXMoKTtcclxuICB9LCBbZmV0Y2hBbmRTZXROb3Rlc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAge2NhcmREYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIHN1YmplY3Q9e2RhdGEuc3ViamVjdH1cclxuICAgICAgICAgIG5hbWU9e2RhdGEubmFtZX1cclxuICAgICAgICAgIGNvZGU9e2RhdGEuY29kZX1cclxuICAgICAgICAgIGNyZWRpdD17ZGF0YS5jcmVkaXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhpcmRTZW1TdWJqZWN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVJvdXRlciIsIkNhcmQiLCJzdWJqZWN0IiwibmFtZSIsImNvZGUiLCJjcmVkaXQiLCJyb3V0ZXIiLCJoYW5kbGVDbGljayIsInJvdXRlIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwicHVzaCIsImRpdiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJzcGFuIiwiaDIiLCJwIiwiZmV0Y2hOb3RlcyIsInllYXIiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJUaGlyZFNlbVN1YmplY3QiLCJjYXJkRGF0YSIsInNldE5vdGVzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaEFuZFNldE5vdGVzIiwiZmV0Y2hlZE5vdGVzIiwiZXJyIiwibWVzc2FnZSIsInVzZUVmZmVjdCIsIm1hcCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Subjects/2nd-year/3rdSenSubject.tsx\n"));

/***/ })

});