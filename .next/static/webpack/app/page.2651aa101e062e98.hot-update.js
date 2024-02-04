"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ReportFraud.tsx":
/*!****************************************!*\
  !*** ./src/components/ReportFraud.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Form,Input!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/form/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Form,Input!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/input/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Form,Input!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/button/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ReportFraud = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        nature: \"\",\n        transactionDetails: \"\",\n        supportingDocs: []\n    });\n    const handleChange = (field, value)=>{\n        setFormData({\n            ...formData,\n            [field]: value\n        });\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const response = await fetch(\"/api/report-fraud\", {\n            method: \"POST\",\n            body: JSON.stringify(formData),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const result = await response.json();\n        if (result.success) {\n            alert(\"Fraud case reported successfully!\");\n            setFormData({\n                nature: \"\",\n                transactionDetails: \"\",\n                supportingDocs: []\n            });\n        } else {\n            alert(\"Error reporting fraud case.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        layout: \"vertical\",\n        onFinish: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                label: \"Nature of Fraud\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    value: formData.nature,\n                    onChange: (e)=>handleChange(\"nature\", e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/idris/Desktop/Hack/Hackify/Phishing Detector/src/components/ReportFraud.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/idris/Desktop/Hack/Hackify/Phishing Detector/src/components/ReportFraud.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                label: \"Transaction Details\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].TextArea, {\n                    value: formData.transactionDetails,\n                    onChange: (e)=>handleChange(\"transactionDetails\", e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/idris/Desktop/Hack/Hackify/Phishing Detector/src/components/ReportFraud.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/idris/Desktop/Hack/Hackify/Phishing Detector/src/components/ReportFraud.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                label: \"Supporting Documents\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    type: \"file\",\n                    multiple: true,\n                    onChange: (e)=>handleChange(\"supportingDocs\", e.target.files)\n                }, void 0, false, {\n                    fileName: \"/Users/idris/Desktop/Hack/Hackify/Phishing Detector/src/components/ReportFraud.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/idris/Desktop/Hack/Hackify/Phishing Detector/src/components/ReportFraud.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Form_Input_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                type: \"primary\",\n                htmlType: \"submit\",\n                children: \"Report Fraud\"\n            }, void 0, false, {\n                fileName: \"/Users/idris/Desktop/Hack/Hackify/Phishing Detector/src/components/ReportFraud.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/idris/Desktop/Hack/Hackify/Phishing Detector/src/components/ReportFraud.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ReportFraud, \"P0Tz7WXR+d58Z0m0hhgXpEgNz28=\");\n_c = ReportFraud;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReportFraud);\nvar _c;\n$RefreshReg$(_c, \"ReportFraud\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JlcG9ydEZyYXVkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHd0M7QUFDRztBQVEzQyxNQUFNSyxjQUF3Qjs7SUFDNUIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFnQjtRQUN0RE8sUUFBUTtRQUNSQyxvQkFBb0I7UUFDcEJDLGdCQUFnQixFQUFFO0lBQ3BCO0lBRUEsTUFBTUMsZUFBZSxDQUFDQyxPQUE0QkM7UUFDaEROLFlBQVk7WUFBRSxHQUFHRCxRQUFRO1lBQUUsQ0FBQ00sTUFBTSxFQUFFQztRQUFNO0lBQzVDO0lBRUEsTUFBTUMsZUFBZSxPQUFPQztRQUMxQkEsTUFBTUMsY0FBYztRQUVwQixNQUFNQyxXQUFXLE1BQU1DLE1BQU0scUJBQXFCO1lBQ2hEQyxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2hCO1lBQ3JCaUIsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtRQUVBLE1BQU1DLFNBQVMsTUFBTVAsU0FBU1EsSUFBSTtRQUVsQyxJQUFJRCxPQUFPRSxPQUFPLEVBQUU7WUFDbEJDLE1BQU07WUFDTnBCLFlBQVk7Z0JBQUVDLFFBQVE7Z0JBQUlDLG9CQUFvQjtnQkFBSUMsZ0JBQWdCLEVBQUU7WUFBQztRQUN2RSxPQUFPO1lBQ0xpQixNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDekIscUZBQUlBO1FBQUMwQixRQUFPO1FBQVdDLFVBQVVmOzswQkFDaEMsOERBQUNaLHFGQUFJQSxDQUFDNEIsSUFBSTtnQkFBQ0MsT0FBTTswQkFDZiw0RUFBQzVCLHFGQUFLQTtvQkFBQ1UsT0FBT1AsU0FBU0UsTUFBTTtvQkFBRXdCLFVBQVUsQ0FBQ0MsSUFBTXRCLGFBQWEsVUFBVXNCLEVBQUVDLE1BQU0sQ0FBQ3JCLEtBQUs7Ozs7Ozs7Ozs7OzBCQUV2Riw4REFBQ1gscUZBQUlBLENBQUM0QixJQUFJO2dCQUFDQyxPQUFNOzBCQUNmLDRFQUFDNUIscUZBQUtBLENBQUNnQyxRQUFRO29CQUFDdEIsT0FBT1AsU0FBU0csa0JBQWtCO29CQUFFdUIsVUFBVSxDQUFDQyxJQUFNdEIsYUFBYSxzQkFBc0JzQixFQUFFQyxNQUFNLENBQUNyQixLQUFLOzs7Ozs7Ozs7OzswQkFFeEgsOERBQUNYLHFGQUFJQSxDQUFDNEIsSUFBSTtnQkFBQ0MsT0FBTTswQkFDZiw0RUFBQzVCLHFGQUFLQTtvQkFBQ2lDLE1BQUs7b0JBQU9DLFFBQVE7b0JBQUNMLFVBQVUsQ0FBQ0MsSUFBTXRCLGFBQWEsa0JBQWtCc0IsRUFBRUMsTUFBTSxDQUFDSSxLQUFLOzs7Ozs7Ozs7OzswQkFFNUYsOERBQUNsQyxxRkFBTUE7Z0JBQUNnQyxNQUFLO2dCQUFVRyxVQUFTOzBCQUFVOzs7Ozs7Ozs7Ozs7QUFHaEQ7R0E5Q01sQztLQUFBQTtBQWdETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZXBvcnRGcmF1ZC50c3g/MmY5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcblxuaW50ZXJmYWNlIEZyYXVkQ2FzZURhdGEge1xuICBuYXR1cmU6IHN0cmluZztcbiAgdHJhbnNhY3Rpb25EZXRhaWxzOiBzdHJpbmc7XG4gIHN1cHBvcnRpbmdEb2NzOiBGaWxlW107IFxufVxuXG5jb25zdCBSZXBvcnRGcmF1ZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8RnJhdWRDYXNlRGF0YT4oe1xuICAgIG5hdHVyZTogJycsXG4gICAgdHJhbnNhY3Rpb25EZXRhaWxzOiAnJyxcbiAgICBzdXBwb3J0aW5nRG9jczogW10sXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChmaWVsZDoga2V5b2YgRnJhdWRDYXNlRGF0YSwgdmFsdWU6IGFueSkgPT4ge1xuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtmaWVsZF06IHZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9yZXBvcnQtZnJhdWQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIGFsZXJ0KCdGcmF1ZCBjYXNlIHJlcG9ydGVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgIHNldEZvcm1EYXRhKHsgbmF0dXJlOiAnJywgdHJhbnNhY3Rpb25EZXRhaWxzOiAnJywgc3VwcG9ydGluZ0RvY3M6IFtdIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnRXJyb3IgcmVwb3J0aW5nIGZyYXVkIGNhc2UuJyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gbGF5b3V0PVwidmVydGljYWxcIiBvbkZpbmlzaD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJOYXR1cmUgb2YgRnJhdWRcIj5cbiAgICAgICAgPElucHV0IHZhbHVlPXtmb3JtRGF0YS5uYXR1cmV9IG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKCduYXR1cmUnLCBlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJUcmFuc2FjdGlvbiBEZXRhaWxzXCI+XG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17Zm9ybURhdGEudHJhbnNhY3Rpb25EZXRhaWxzfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZSgndHJhbnNhY3Rpb25EZXRhaWxzJywgZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU3VwcG9ydGluZyBEb2N1bWVudHNcIj5cbiAgICAgICAgPElucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoJ3N1cHBvcnRpbmdEb2NzJywgZS50YXJnZXQuZmlsZXMpfSAvPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiA+UmVwb3J0IEZyYXVkPC9CdXR0b24+XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0RnJhdWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIlJlcG9ydEZyYXVkIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hdHVyZSIsInRyYW5zYWN0aW9uRGV0YWlscyIsInN1cHBvcnRpbmdEb2NzIiwiaGFuZGxlQ2hhbmdlIiwiZmllbGQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzdWx0IiwianNvbiIsInN1Y2Nlc3MiLCJhbGVydCIsImxheW91dCIsIm9uRmluaXNoIiwiSXRlbSIsImxhYmVsIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiVGV4dEFyZWEiLCJ0eXBlIiwibXVsdGlwbGUiLCJmaWxlcyIsImh0bWxUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ReportFraud.tsx\n"));

/***/ })

});