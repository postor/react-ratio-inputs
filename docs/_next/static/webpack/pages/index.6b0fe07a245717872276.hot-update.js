webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_study_react_ratio_inputs_examples_basic_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_ratio_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ratio-inputs */ "./node_modules/react-ratio-inputs/dist/index.js");
/* harmony import */ var react_ratio_inputs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_ratio_inputs__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "E:\\study\\react-ratio-inputs\\examples\\basic\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_study_react_ratio_inputs_examples_basic_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Section = function Section(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("details", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("summary", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: {
        padding: '10px 5px'
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 43
  }, _this);
};

_c = Section;
var defaultRatios = [{
  name: '自己',
  value: 98
}, {
  name: '海盗2',
  value: 0
}, {
  name: '海盗3',
  value: 1
}, {
  name: '海盗4',
  value: 0
}, {
  name: '海盗5',
  value: 1
}];

var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultRatios),
      ratios = _useState[0],
      setRatios = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultRatios),
      ratios2 = _useState2[0],
      setRatios2 = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultRatios.map(function (x) {
    return _objectSpread(_objectSpread({}, x), {}, {
      props: {
        style: {
          fontWeight: 'bold'
        }
      }
    });
  })),
      ratios3 = _useState3[0],
      setRatios3 = _useState3[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "react-ratio-inputs"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: "\u793A\u4F8B | demos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Section, {
      title: "\u4EC5\u663E\u793A | show only",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_ratio_inputs__WEBPACK_IMPORTED_MODULE_3___default.a, {
        ratios: ratios
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Section, {
      title: "\u66F4\u65B0 | update",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_ratio_inputs__WEBPACK_IMPORTED_MODULE_3___default.a, {
        ratios: ratios,
        onChange: function onChange(ratios) {
          return setRatios(ratios);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Section, {
      title: "\u6700\u5927\u6700\u5C0F\u503C | max and/or min",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_ratio_inputs__WEBPACK_IMPORTED_MODULE_3___default.a, {
        ratios: ratios2,
        onChange: function onChange(ratios) {
          return setRatios2(ratios);
        },
        min: 80,
        max: 120
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Section, {
      title: "\u6587\u672C\u989C\u8272 | texts and colors",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_ratio_inputs__WEBPACK_IMPORTED_MODULE_3___default.a, {
        ratios: ratios3,
        onChange: function onChange(ratios) {
          return setRatios3(ratios);
        },
        toText: function toText(_ref2) {
          var name = _ref2.name,
              value = _ref2.value;
          return "".concat(name, ":").concat(value, " ");
        },
        toTitle: function toTitle(_ref3) {
          var name = _ref3.name,
              value = _ref3.value;
          return "".concat(name, " got ").concat(value, " coins");
        },
        hue2color: function hue2color(hue) {
          return "hsl(".concat(hue, ", 80%, 90%)");
        },
        hue2backgroundColor: function hue2backgroundColor(hue) {
          return "hsl(".concat((hue + 180) % 360, ", 30%, 50%)");
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 11
  }, _this);
};

_s(Index, "lRU/ydG3abaZ9uZBjbIuPnz6/OU=");

_c2 = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c, _c2;

$RefreshReg$(_c, "Section");
$RefreshReg$(_c2, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiU2VjdGlvbiIsImNoaWxkcmVuIiwidGl0bGUiLCJwYWRkaW5nIiwiZGVmYXVsdFJhdGlvcyIsIm5hbWUiLCJ2YWx1ZSIsIkluZGV4IiwidXNlU3RhdGUiLCJyYXRpb3MiLCJzZXRSYXRpb3MiLCJyYXRpb3MyIiwic2V0UmF0aW9zMiIsIm1hcCIsIngiLCJwcm9wcyIsInN0eWxlIiwiZm9udFdlaWdodCIsInJhdGlvczMiLCJzZXRSYXRpb3MzIiwiaHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxLQUFiLFFBQWFBLEtBQWI7QUFBQSxzQkFBMEI7QUFBQSw0QkFDeEM7QUFBQSxnQkFBVUE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHdDLGVBRXhDO0FBQUssV0FBSyxFQUFFO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBQSxnQkFBc0NGO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGd0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTFCO0FBQUEsQ0FBaEI7O0tBQU1ELE87QUFLTixJQUFNSSxhQUFhLEdBQUcsQ0FDcEI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsT0FBSyxFQUFFO0FBQXJCLENBRG9CLEVBRXBCO0FBQUVELE1BQUksRUFBRSxLQUFSO0FBQWVDLE9BQUssRUFBRTtBQUF0QixDQUZvQixFQUdwQjtBQUFFRCxNQUFJLEVBQUUsS0FBUjtBQUFlQyxPQUFLLEVBQUU7QUFBdEIsQ0FIb0IsRUFJcEI7QUFBRUQsTUFBSSxFQUFFLEtBQVI7QUFBZUMsT0FBSyxFQUFFO0FBQXRCLENBSm9CLEVBS3BCO0FBQUVELE1BQUksRUFBRSxLQUFSO0FBQWVDLE9BQUssRUFBRTtBQUF0QixDQUxvQixDQUF0Qjs7QUFRQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUNKLGFBQUQsQ0FEaEI7QUFBQSxNQUNiSyxNQURhO0FBQUEsTUFDTEMsU0FESzs7QUFBQSxtQkFFVUYsc0RBQVEsQ0FBQ0osYUFBRCxDQUZsQjtBQUFBLE1BRWJPLE9BRmE7QUFBQSxNQUVKQyxVQUZJOztBQUFBLG1CQUdVSixzREFBUSxDQUFDSixhQUFhLENBQUNTLEdBQWQsQ0FBa0IsVUFBQUMsQ0FBQztBQUFBLDJDQUNuREEsQ0FEbUQ7QUFFdERDLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUU7QUFBRUMsb0JBQVUsRUFBRTtBQUFkO0FBQVQ7QUFGK0M7QUFBQSxHQUFuQixDQUFELENBSGxCO0FBQUEsTUFHYkMsT0FIYTtBQUFBLE1BR0pDLFVBSEk7O0FBUWxCLHNCQUFRO0FBQUEsNEJBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETSxlQUVOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRk0sZUFHTixxRUFBQyxPQUFEO0FBQVMsV0FBSyxFQUFDLGdDQUFmO0FBQUEsNkJBQ0UscUVBQUMseURBQUQ7QUFBYSxjQUFNLEVBQUVWO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSE0sZUFNTixxRUFBQyxPQUFEO0FBQVMsV0FBSyxFQUFDLHVCQUFmO0FBQUEsNkJBQ0UscUVBQUMseURBQUQ7QUFBYSxjQUFNLEVBQUVBLE1BQXJCO0FBQTZCLGdCQUFRLEVBQUUsa0JBQUFBLE1BQU07QUFBQSxpQkFBSUMsU0FBUyxDQUFDRCxNQUFELENBQWI7QUFBQTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5NLGVBU04scUVBQUMsT0FBRDtBQUFTLFdBQUssRUFBQyxpREFBZjtBQUFBLDZCQUNFLHFFQUFDLHlEQUFEO0FBQ0UsY0FBTSxFQUFFRSxPQURWO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQUYsTUFBTTtBQUFBLGlCQUFJRyxVQUFVLENBQUNILE1BQUQsQ0FBZDtBQUFBLFNBRmxCO0FBR0UsV0FBRyxFQUFFLEVBSFA7QUFJRSxXQUFHLEVBQUU7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRNLGVBaUJOLHFFQUFDLE9BQUQ7QUFBUyxXQUFLLEVBQUMsNkNBQWY7QUFBQSw2QkFDRSxxRUFBQyx5REFBRDtBQUNFLGNBQU0sRUFBRVMsT0FEVjtBQUVFLGdCQUFRLEVBQUUsa0JBQUFULE1BQU07QUFBQSxpQkFBSVUsVUFBVSxDQUFDVixNQUFELENBQWQ7QUFBQSxTQUZsQjtBQUdFLGNBQU0sRUFBRTtBQUFBLGNBQUdKLElBQUgsU0FBR0EsSUFBSDtBQUFBLGNBQVNDLEtBQVQsU0FBU0EsS0FBVDtBQUFBLDJCQUF3QkQsSUFBeEIsY0FBZ0NDLEtBQWhDO0FBQUEsU0FIVjtBQUlFLGVBQU8sRUFBRTtBQUFBLGNBQUdELElBQUgsU0FBR0EsSUFBSDtBQUFBLGNBQVNDLEtBQVQsU0FBU0EsS0FBVDtBQUFBLDJCQUF3QkQsSUFBeEIsa0JBQW9DQyxLQUFwQztBQUFBLFNBSlg7QUFLRSxpQkFBUyxFQUFFLG1CQUFBYyxHQUFHO0FBQUEsK0JBQVdBLEdBQVg7QUFBQSxTQUxoQjtBQU1FLDJCQUFtQixFQUFFLDZCQUFBQSxHQUFHO0FBQUEsK0JBQVcsQ0FBQ0EsR0FBRyxHQUFDLEdBQUwsSUFBVSxHQUFyQjtBQUFBO0FBTjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFSO0FBNEJELENBcENEOztHQUFNYixLOztNQUFBQSxLO0FBdUNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YjBmZTA3YTI0NTcxNzg3MjI3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSYXRpb0lucHV0cyBmcm9tICdyZWFjdC1yYXRpby1pbnB1dHMnXHJcblxyXG5jb25zdCBTZWN0aW9uID0gKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+ICg8ZGV0YWlscz5cclxuICA8c3VtbWFyeT57dGl0bGV9PC9zdW1tYXJ5PlxyXG4gIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzEwcHggNXB4JyB9fT57Y2hpbGRyZW59PC9kaXY+XHJcbjwvZGV0YWlscz4pXHJcblxyXG5jb25zdCBkZWZhdWx0UmF0aW9zID0gW1xyXG4gIHsgbmFtZTogJ+iHquW3sScsIHZhbHVlOiA5OCB9LFxyXG4gIHsgbmFtZTogJ+a1t+eblzInLCB2YWx1ZTogMCB9LFxyXG4gIHsgbmFtZTogJ+a1t+eblzMnLCB2YWx1ZTogMSB9LFxyXG4gIHsgbmFtZTogJ+a1t+eblzQnLCB2YWx1ZTogMCB9LFxyXG4gIHsgbmFtZTogJ+a1t+eblzUnLCB2YWx1ZTogMSB9LFxyXG5dXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBsZXQgW3JhdGlvcywgc2V0UmF0aW9zXSA9IHVzZVN0YXRlKGRlZmF1bHRSYXRpb3MpXHJcbiAgbGV0IFtyYXRpb3MyLCBzZXRSYXRpb3MyXSA9IHVzZVN0YXRlKGRlZmF1bHRSYXRpb3MpXHJcbiAgbGV0IFtyYXRpb3MzLCBzZXRSYXRpb3MzXSA9IHVzZVN0YXRlKGRlZmF1bHRSYXRpb3MubWFwKHggPT4gKHtcclxuICAgIC4uLngsXHJcbiAgICBwcm9wczogeyBzdHlsZTogeyBmb250V2VpZ2h0OiAnYm9sZCcgfSB9XHJcbiAgfSkpKVxyXG5cclxuICByZXR1cm4gKDxkaXY+XHJcbiAgICA8aDE+cmVhY3QtcmF0aW8taW5wdXRzPC9oMT5cclxuICAgIDxwPuekuuS+iyB8IGRlbW9zPC9wPlxyXG4gICAgPFNlY3Rpb24gdGl0bGU9XCLku4XmmL7npLogfCBzaG93IG9ubHlcIj5cclxuICAgICAgPFJhdGlvSW5wdXRzIHJhdGlvcz17cmF0aW9zfSAvPlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gICAgPFNlY3Rpb24gdGl0bGU9XCLmm7TmlrAgfCB1cGRhdGVcIj5cclxuICAgICAgPFJhdGlvSW5wdXRzIHJhdGlvcz17cmF0aW9zfSBvbkNoYW5nZT17cmF0aW9zID0+IHNldFJhdGlvcyhyYXRpb3MpfSAvPlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gICAgPFNlY3Rpb24gdGl0bGU9XCLmnIDlpKfmnIDlsI/lgLwgfCBtYXggYW5kL29yIG1pblwiPlxyXG4gICAgICA8UmF0aW9JbnB1dHNcclxuICAgICAgICByYXRpb3M9e3JhdGlvczJ9XHJcbiAgICAgICAgb25DaGFuZ2U9e3JhdGlvcyA9PiBzZXRSYXRpb3MyKHJhdGlvcyl9XHJcbiAgICAgICAgbWluPXs4MH1cclxuICAgICAgICBtYXg9ezEyMH1cclxuICAgICAgLz5cclxuICAgIDwvU2VjdGlvbj5cclxuICAgIDxTZWN0aW9uIHRpdGxlPVwi5paH5pys6aKc6ImyIHwgdGV4dHMgYW5kIGNvbG9yc1wiPlxyXG4gICAgICA8UmF0aW9JbnB1dHNcclxuICAgICAgICByYXRpb3M9e3JhdGlvczN9XHJcbiAgICAgICAgb25DaGFuZ2U9e3JhdGlvcyA9PiBzZXRSYXRpb3MzKHJhdGlvcyl9XHJcbiAgICAgICAgdG9UZXh0PXsoeyBuYW1lLCB2YWx1ZSB9KSA9PiBgJHtuYW1lfToke3ZhbHVlfSBgfVxyXG4gICAgICAgIHRvVGl0bGU9eyh7IG5hbWUsIHZhbHVlIH0pID0+IGAke25hbWV9IGdvdCAke3ZhbHVlfSBjb2luc2B9XHJcbiAgICAgICAgaHVlMmNvbG9yPXtodWUgPT4gYGhzbCgke2h1ZX0sIDgwJSwgOTAlKWB9XHJcbiAgICAgICAgaHVlMmJhY2tncm91bmRDb2xvcj17aHVlID0+IGBoc2woJHsoaHVlKzE4MCklMzYwfSwgMzAlLCA1MCUpYH1cclxuICAgICAgLz5cclxuICAgIDwvU2VjdGlvbj5cclxuICA8L2Rpdj4pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=