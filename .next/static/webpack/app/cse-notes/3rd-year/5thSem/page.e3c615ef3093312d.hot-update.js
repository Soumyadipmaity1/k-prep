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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Card = (param)=>{\n    let { subjectFullName, description, code, credit, pdfUrl } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleClick = ()=>{\n        const route = \"/cse-notes/2nd-year/3rdSem/\".concat(subjectFullName.toLowerCase().replace(/ /g, \"-\"));\n        router.push(route);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: handleClick,\n        className: \"flex subject-card px-5 rounded-xl p-4 shadow-lg sm:m-5 my-3 cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-28 mr-6 rounded-xl items-center bg-white justify-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-full flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-3xl font-bold text-purple-500\",\n                        children: \"\\uD83D\\uDC64\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-start px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"sm:text-2xl text-xl font-bold text-white\",\n                        children: subjectFullName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white sm:text-base text-[15px]\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sm:mt-4 mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white\",\n                                children: [\n                                    \"Code: \",\n                                    code\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white\",\n                                children: [\n                                    \"Credit: \",\n                                    credit\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: pdfUrl,\n                                className: \"text-blue-300 underline\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"View Notes\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Card, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Card;\nconst fetchNotes = async (year, sem)=>{\n    const response = await fetch(\"http://localhost:5000/api/v1/notes/get_note/\".concat(year, \"/\").concat(sem));\n    // console.log(response)\n    if (!response.ok) {\n        throw new Error(\"Failed to fetch notes\");\n    }\n    const data = await response.json();\n    // console.log(data)\n    return data.notes;\n};\nconst ThirdSemSubject = (param)=>{\n    let { year, sem } = param;\n    _s1();\n    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchAndSetNotes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        setLoading(true);\n        setError(null);\n        try {\n            const fetchedNotes = await fetchNotes(year, sem); // Fetch notes by year and semester\n            setNotes(fetchedNotes);\n        } catch (err) {\n            setError(err instanceof Error ? err.message : \"An unknown error occurred\");\n        } finally{\n            setLoading(false);\n        }\n    }, [\n        year,\n        sem\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchAndSetNotes();\n    }, [\n        year,\n        sem\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n            lineNumber: 87,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n            lineNumber: 91,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap justify-center items-center\",\n        children: notes && notes.length > 0 ? notes.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                subjectFullName: data.subjectFullName,\n                description: data.description,\n                code: data.code,\n                credit: data.credit,\n                pdfUrl: data.pdfUrl\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n                lineNumber: 98,\n                columnNumber: 11\n            }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No notes found for this semester.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n            lineNumber: 108,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\KIIT0001\\\\Documents\\\\GitHub\\\\k-prep\\\\src\\\\components\\\\Subjects\\\\2nd-year\\\\3rdSenSubject.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(ThirdSemSubject, \"PvmkGn093+ITzTwmZBZ+HRkBL6g=\");\n_c1 = ThirdSemSubject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThirdSemSubject);\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"ThirdSemSubject\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1N1YmplY3RzLzJuZC15ZWFyLzNyZFNlblN1YmplY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFZ0U7QUFDcEI7QUFVNUMsTUFBTUssT0FBNEI7UUFBQyxFQUFFQyxlQUFlLEVBQUVDLFdBQVcsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRTs7SUFDdkYsTUFBTUMsU0FBU1AsMERBQVNBO0lBRXhCLE1BQU1RLGNBQWM7UUFDbEIsTUFBTUMsUUFBUSw4QkFFUSxPQUZzQlAsZ0JBQ3pDUSxXQUFXLEdBQ1hDLE9BQU8sQ0FBQyxNQUFNO1FBQ2pCSixPQUFPSyxJQUFJLENBQUNIO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0k7UUFDQ0MsU0FBU047UUFDVE8sV0FBVTs7MEJBRVYsOERBQUNGO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDRjtvQkFBSUUsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUtELFdBQVU7a0NBQXFDOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6RCw4REFBQ0Y7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBNENiOzs7Ozs7a0NBQzFELDhEQUFDZ0I7d0JBQUVILFdBQVU7a0NBQXVDWjs7Ozs7O2tDQUNwRCw4REFBQ1U7d0JBQUlFLFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FBRUgsV0FBVTs7b0NBQWE7b0NBQU9YOzs7Ozs7OzBDQUNqQyw4REFBQ2M7Z0NBQUVILFdBQVU7O29DQUFhO29DQUFTVjs7Ozs7OzswQ0FDbkMsOERBQUNjO2dDQUFFQyxNQUFNZDtnQ0FBUVMsV0FBVTtnQ0FBMEJNLFFBQU87Z0NBQVNDLEtBQUk7MENBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekc7R0FqQ01yQjs7UUFDV0Qsc0RBQVNBOzs7S0FEcEJDO0FBbUNOLE1BQU1zQixhQUFhLE9BQU9DLE1BQWNDO0lBQ3RDLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsK0NBQXVERixPQUFSRCxNQUFLLEtBQU8sT0FBSkM7SUFFekQsd0JBQXdCO0lBQ3hCLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtJQUNoQyxvQkFBb0I7SUFDcEIsT0FBT0QsS0FBS0UsS0FBSztBQUNuQjtBQUVBLE1BQU1DLGtCQUFrQjtRQUFDLEVBQUVULElBQUksRUFBRUMsR0FBRyxFQUFpQzs7SUFDbkUsTUFBTSxDQUFDTyxPQUFPRSxTQUFTLEdBQUduQywrQ0FBUUEsQ0FBYyxFQUFFO0lBQ2xELE1BQU0sQ0FBQ29DLFNBQVNDLFdBQVcsR0FBR3JDLCtDQUFRQSxDQUFVO0lBQ2hELE1BQU0sQ0FBQ3NDLE9BQU9DLFNBQVMsR0FBR3ZDLCtDQUFRQSxDQUFnQjtJQUVsRCxNQUFNd0MsbUJBQW1CMUMsa0RBQVdBLENBQUM7UUFDbkN1QyxXQUFXO1FBQ1hFLFNBQVM7UUFDVCxJQUFJO1lBQ0YsTUFBTUUsZUFBZSxNQUFNakIsV0FBV0MsTUFBTUMsTUFBTSxtQ0FBbUM7WUFDckZTLFNBQVNNO1FBQ1gsRUFBRSxPQUFPQyxLQUFLO1lBQ1pILFNBQ0VHLGVBQWVaLFFBQVFZLElBQUlDLE9BQU8sR0FBRztRQUV6QyxTQUFVO1lBQ1JOLFdBQVc7UUFDYjtJQUNGLEdBQUc7UUFBQ1o7UUFBTUM7S0FBSTtJQUVkM0IsZ0RBQVNBLENBQUM7UUFDUnlDO0lBQ0YsR0FBRztRQUFDZjtRQUFNQztLQUFJO0lBRWQsSUFBSVUsU0FBUztRQUNYLHFCQUFPLDhEQUFDakI7c0JBQUU7Ozs7OztJQUNaO0lBRUEsSUFBSW1CLE9BQU87UUFDVCxxQkFBTyw4REFBQ25CO3NCQUFHbUI7Ozs7OztJQUNiO0lBRUEscUJBQ0UsOERBQUN4QjtRQUFJRSxXQUFVO2tCQUNaaUIsU0FBU0EsTUFBTVcsTUFBTSxHQUFHLElBQ3ZCWCxNQUFNWSxHQUFHLENBQUMsQ0FBQ2QsTUFBTWUsc0JBQ2YsOERBQUM1QztnQkFFQ0MsaUJBQWlCNEIsS0FBSzVCLGVBQWU7Z0JBQ3JDQyxhQUFhMkIsS0FBSzNCLFdBQVc7Z0JBQzdCQyxNQUFNMEIsS0FBSzFCLElBQUk7Z0JBQ2ZDLFFBQVF5QixLQUFLekIsTUFBTTtnQkFDbkJDLFFBQVF3QixLQUFLeEIsTUFBTTtlQUxkdUM7Ozs7MkNBU1QsOERBQUMzQjtzQkFBRTs7Ozs7Ozs7Ozs7QUFJWDtJQWxETWU7TUFBQUE7QUFvRE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3ViamVjdHMvMm5kLXllYXIvM3JkU2VuU3ViamVjdC50c3g/YjRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG50eXBlIENhcmRQcm9wcyA9IHtcclxuICBzdWJqZWN0RnVsbE5hbWU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGNvZGU6IHN0cmluZztcclxuICBjcmVkaXQ6IG51bWJlcjtcclxuICBwZGZVcmw6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IENhcmQ6IFJlYWN0LkZDPENhcmRQcm9wcz4gPSAoeyBzdWJqZWN0RnVsbE5hbWUsIGRlc2NyaXB0aW9uLCBjb2RlLCBjcmVkaXQsIHBkZlVybCB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGUgPSBgL2NzZS1ub3Rlcy8ybmQteWVhci8zcmRTZW0vJHtzdWJqZWN0RnVsbE5hbWVcclxuICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgLnJlcGxhY2UoLyAvZywgXCItXCIpfWA7XHJcbiAgICByb3V0ZXIucHVzaChyb3V0ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggc3ViamVjdC1jYXJkIHB4LTUgcm91bmRlZC14bCBwLTQgc2hhZG93LWxnIHNtOm0tNSBteS0zIGN1cnNvci1wb2ludGVyXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctMjggbXItNiByb3VuZGVkLXhsIGl0ZW1zLWNlbnRlciBiZy13aGl0ZSBqdXN0aWZ5LWNlbnRlciBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtcHVycGxlLTUwMFwiPvCfkaQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc3RhcnQgcHgtNFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbTp0ZXh0LTJ4bCB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+e3N1YmplY3RGdWxsTmFtZX08L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgc206dGV4dC1iYXNlIHRleHQtWzE1cHhdXCI+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm10LTQgbXQtMlwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkNvZGU6IHtjb2RlfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5DcmVkaXQ6IHtjcmVkaXR9PC9wPlxyXG4gICAgICAgICAgPGEgaHJlZj17cGRmVXJsfSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtMzAwIHVuZGVybGluZVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgVmlldyBOb3Rlc1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaE5vdGVzID0gYXN5bmMgKHllYXI6IG51bWJlciwgc2VtOiBudW1iZXIpOiBQcm9taXNlPENhcmRQcm9wc1tdPiA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL25vdGVzL2dldF9ub3RlLyR7eWVhcn0vJHtzZW19YFxyXG4gICk7XHJcbiAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIG5vdGVzXCIpO1xyXG4gIH1cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgcmV0dXJuIGRhdGEubm90ZXM7XHJcbn07XHJcblxyXG5jb25zdCBUaGlyZFNlbVN1YmplY3QgPSAoeyB5ZWFyLCBzZW0gfTogeyB5ZWFyOiBudW1iZXI7IHNlbTogbnVtYmVyIH0pID0+IHtcclxuICBjb25zdCBbbm90ZXMsIHNldE5vdGVzXSA9IHVzZVN0YXRlPENhcmRQcm9wc1tdPihbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hBbmRTZXROb3RlcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZldGNoZWROb3RlcyA9IGF3YWl0IGZldGNoTm90ZXMoeWVhciwgc2VtKTsgLy8gRmV0Y2ggbm90ZXMgYnkgeWVhciBhbmQgc2VtZXN0ZXJcclxuICAgICAgc2V0Tm90ZXMoZmV0Y2hlZE5vdGVzKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcihcclxuICAgICAgICBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJBbiB1bmtub3duIGVycm9yIG9jY3VycmVkXCJcclxuICAgICAgKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFt5ZWFyLCBzZW1dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoQW5kU2V0Tm90ZXMoKTtcclxuICB9LCBbeWVhciwgc2VtXSk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8cD57ZXJyb3J9PC9wPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICB7bm90ZXMgJiYgbm90ZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICBub3Rlcy5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBzdWJqZWN0RnVsbE5hbWU9e2RhdGEuc3ViamVjdEZ1bGxOYW1lfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgY29kZT17ZGF0YS5jb2RlfVxyXG4gICAgICAgICAgICBjcmVkaXQ9e2RhdGEuY3JlZGl0fVxyXG4gICAgICAgICAgICBwZGZVcmw9e2RhdGEucGRmVXJsfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPk5vIG5vdGVzIGZvdW5kIGZvciB0aGlzIHNlbWVzdGVyLjwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGlyZFNlbVN1YmplY3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJDYXJkIiwic3ViamVjdEZ1bGxOYW1lIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwiY3JlZGl0IiwicGRmVXJsIiwicm91dGVyIiwiaGFuZGxlQ2xpY2siLCJyb3V0ZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInB1c2giLCJkaXYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwic3BhbiIsImgyIiwicCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiZmV0Y2hOb3RlcyIsInllYXIiLCJzZW0iLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwibm90ZXMiLCJUaGlyZFNlbVN1YmplY3QiLCJzZXROb3RlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoQW5kU2V0Tm90ZXMiLCJmZXRjaGVkTm90ZXMiLCJlcnIiLCJtZXNzYWdlIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Subjects/2nd-year/3rdSenSubject.tsx\n"));

/***/ })

});