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
          return "hsl(".concat(hue, ", 30%, 30%)");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiU2VjdGlvbiIsImNoaWxkcmVuIiwidGl0bGUiLCJwYWRkaW5nIiwiZGVmYXVsdFJhdGlvcyIsIm5hbWUiLCJ2YWx1ZSIsIkluZGV4IiwidXNlU3RhdGUiLCJyYXRpb3MiLCJzZXRSYXRpb3MiLCJyYXRpb3MyIiwic2V0UmF0aW9zMiIsIm1hcCIsIngiLCJwcm9wcyIsInN0eWxlIiwiZm9udFdlaWdodCIsInJhdGlvczMiLCJzZXRSYXRpb3MzIiwiaHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxLQUFiLFFBQWFBLEtBQWI7QUFBQSxzQkFBMEI7QUFBQSw0QkFDeEM7QUFBQSxnQkFBVUE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHdDLGVBRXhDO0FBQUssV0FBSyxFQUFFO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBQSxnQkFBc0NGO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGd0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTFCO0FBQUEsQ0FBaEI7O0tBQU1ELE87QUFLTixJQUFNSSxhQUFhLEdBQUcsQ0FDcEI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsT0FBSyxFQUFFO0FBQXJCLENBRG9CLEVBRXBCO0FBQUVELE1BQUksRUFBRSxLQUFSO0FBQWVDLE9BQUssRUFBRTtBQUF0QixDQUZvQixFQUdwQjtBQUFFRCxNQUFJLEVBQUUsS0FBUjtBQUFlQyxPQUFLLEVBQUU7QUFBdEIsQ0FIb0IsRUFJcEI7QUFBRUQsTUFBSSxFQUFFLEtBQVI7QUFBZUMsT0FBSyxFQUFFO0FBQXRCLENBSm9CLEVBS3BCO0FBQUVELE1BQUksRUFBRSxLQUFSO0FBQWVDLE9BQUssRUFBRTtBQUF0QixDQUxvQixDQUF0Qjs7QUFRQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUNKLGFBQUQsQ0FEaEI7QUFBQSxNQUNiSyxNQURhO0FBQUEsTUFDTEMsU0FESzs7QUFBQSxtQkFFVUYsc0RBQVEsQ0FBQ0osYUFBRCxDQUZsQjtBQUFBLE1BRWJPLE9BRmE7QUFBQSxNQUVKQyxVQUZJOztBQUFBLG1CQUdVSixzREFBUSxDQUFDSixhQUFhLENBQUNTLEdBQWQsQ0FBa0IsVUFBQUMsQ0FBQztBQUFBLDJDQUNuREEsQ0FEbUQ7QUFFdERDLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUU7QUFBRUMsb0JBQVUsRUFBRTtBQUFkO0FBQVQ7QUFGK0M7QUFBQSxHQUFuQixDQUFELENBSGxCO0FBQUEsTUFHYkMsT0FIYTtBQUFBLE1BR0pDLFVBSEk7O0FBUWxCLHNCQUFRO0FBQUEsNEJBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETSxlQUVOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRk0sZUFHTixxRUFBQyxPQUFEO0FBQVMsV0FBSyxFQUFDLGdDQUFmO0FBQUEsNkJBQ0UscUVBQUMseURBQUQ7QUFBYSxjQUFNLEVBQUVWO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSE0sZUFNTixxRUFBQyxPQUFEO0FBQVMsV0FBSyxFQUFDLHVCQUFmO0FBQUEsNkJBQ0UscUVBQUMseURBQUQ7QUFBYSxjQUFNLEVBQUVBLE1BQXJCO0FBQTZCLGdCQUFRLEVBQUUsa0JBQUFBLE1BQU07QUFBQSxpQkFBSUMsU0FBUyxDQUFDRCxNQUFELENBQWI7QUFBQTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5NLGVBU04scUVBQUMsT0FBRDtBQUFTLFdBQUssRUFBQyxpREFBZjtBQUFBLDZCQUNFLHFFQUFDLHlEQUFEO0FBQ0UsY0FBTSxFQUFFRSxPQURWO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQUYsTUFBTTtBQUFBLGlCQUFJRyxVQUFVLENBQUNILE1BQUQsQ0FBZDtBQUFBLFNBRmxCO0FBR0UsV0FBRyxFQUFFLEVBSFA7QUFJRSxXQUFHLEVBQUU7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRNLGVBaUJOLHFFQUFDLE9BQUQ7QUFBUyxXQUFLLEVBQUMsNkNBQWY7QUFBQSw2QkFDRSxxRUFBQyx5REFBRDtBQUNFLGNBQU0sRUFBRVMsT0FEVjtBQUVFLGdCQUFRLEVBQUUsa0JBQUFULE1BQU07QUFBQSxpQkFBSVUsVUFBVSxDQUFDVixNQUFELENBQWQ7QUFBQSxTQUZsQjtBQUdFLGNBQU0sRUFBRTtBQUFBLGNBQUdKLElBQUgsU0FBR0EsSUFBSDtBQUFBLGNBQVNDLEtBQVQsU0FBU0EsS0FBVDtBQUFBLDJCQUF3QkQsSUFBeEIsY0FBZ0NDLEtBQWhDO0FBQUEsU0FIVjtBQUlFLGVBQU8sRUFBRTtBQUFBLGNBQUdELElBQUgsU0FBR0EsSUFBSDtBQUFBLGNBQVNDLEtBQVQsU0FBU0EsS0FBVDtBQUFBLDJCQUF3QkQsSUFBeEIsa0JBQW9DQyxLQUFwQztBQUFBLFNBSlg7QUFLRSxpQkFBUyxFQUFFLG1CQUFBYyxHQUFHO0FBQUEsK0JBQVdBLEdBQVg7QUFBQSxTQUxoQjtBQU1FLDJCQUFtQixFQUFFLDZCQUFBQSxHQUFHO0FBQUEsK0JBQVdBLEdBQVg7QUFBQTtBQU4xQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUjtBQTRCRCxDQXBDRDs7R0FBTWIsSzs7TUFBQUEsSztBQXVDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzdkZDU1NzA1MzIxMTQ4MjE0MGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmF0aW9JbnB1dHMgZnJvbSAncmVhY3QtcmF0aW8taW5wdXRzJ1xyXG5cclxuY29uc3QgU2VjdGlvbiA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiAoPGRldGFpbHM+XHJcbiAgPHN1bW1hcnk+e3RpdGxlfTwvc3VtbWFyeT5cclxuICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4IDVweCcgfX0+e2NoaWxkcmVufTwvZGl2PlxyXG48L2RldGFpbHM+KVxyXG5cclxuY29uc3QgZGVmYXVsdFJhdGlvcyA9IFtcclxuICB7IG5hbWU6ICfoh6rlt7EnLCB2YWx1ZTogOTggfSxcclxuICB7IG5hbWU6ICfmtbfnm5cyJywgdmFsdWU6IDAgfSxcclxuICB7IG5hbWU6ICfmtbfnm5czJywgdmFsdWU6IDEgfSxcclxuICB7IG5hbWU6ICfmtbfnm5c0JywgdmFsdWU6IDAgfSxcclxuICB7IG5hbWU6ICfmtbfnm5c1JywgdmFsdWU6IDEgfSxcclxuXVxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgbGV0IFtyYXRpb3MsIHNldFJhdGlvc10gPSB1c2VTdGF0ZShkZWZhdWx0UmF0aW9zKVxyXG4gIGxldCBbcmF0aW9zMiwgc2V0UmF0aW9zMl0gPSB1c2VTdGF0ZShkZWZhdWx0UmF0aW9zKVxyXG4gIGxldCBbcmF0aW9zMywgc2V0UmF0aW9zM10gPSB1c2VTdGF0ZShkZWZhdWx0UmF0aW9zLm1hcCh4ID0+ICh7XHJcbiAgICAuLi54LFxyXG4gICAgcHJvcHM6IHsgc3R5bGU6IHsgZm9udFdlaWdodDogJ2JvbGQnIH0gfVxyXG4gIH0pKSlcclxuXHJcbiAgcmV0dXJuICg8ZGl2PlxyXG4gICAgPGgxPnJlYWN0LXJhdGlvLWlucHV0czwvaDE+XHJcbiAgICA8cD7npLrkvosgfCBkZW1vczwvcD5cclxuICAgIDxTZWN0aW9uIHRpdGxlPVwi5LuF5pi+56S6IHwgc2hvdyBvbmx5XCI+XHJcbiAgICAgIDxSYXRpb0lucHV0cyByYXRpb3M9e3JhdGlvc30gLz5cclxuICAgIDwvU2VjdGlvbj5cclxuICAgIDxTZWN0aW9uIHRpdGxlPVwi5pu05pawIHwgdXBkYXRlXCI+XHJcbiAgICAgIDxSYXRpb0lucHV0cyByYXRpb3M9e3JhdGlvc30gb25DaGFuZ2U9e3JhdGlvcyA9PiBzZXRSYXRpb3MocmF0aW9zKX0gLz5cclxuICAgIDwvU2VjdGlvbj5cclxuICAgIDxTZWN0aW9uIHRpdGxlPVwi5pyA5aSn5pyA5bCP5YC8IHwgbWF4IGFuZC9vciBtaW5cIj5cclxuICAgICAgPFJhdGlvSW5wdXRzXHJcbiAgICAgICAgcmF0aW9zPXtyYXRpb3MyfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtyYXRpb3MgPT4gc2V0UmF0aW9zMihyYXRpb3MpfVxyXG4gICAgICAgIG1pbj17ODB9XHJcbiAgICAgICAgbWF4PXsxMjB9XHJcbiAgICAgIC8+XHJcbiAgICA8L1NlY3Rpb24+XHJcbiAgICA8U2VjdGlvbiB0aXRsZT1cIuaWh+acrOminOiJsiB8IHRleHRzIGFuZCBjb2xvcnNcIj5cclxuICAgICAgPFJhdGlvSW5wdXRzXHJcbiAgICAgICAgcmF0aW9zPXtyYXRpb3MzfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtyYXRpb3MgPT4gc2V0UmF0aW9zMyhyYXRpb3MpfVxyXG4gICAgICAgIHRvVGV4dD17KHsgbmFtZSwgdmFsdWUgfSkgPT4gYCR7bmFtZX06JHt2YWx1ZX0gYH1cclxuICAgICAgICB0b1RpdGxlPXsoeyBuYW1lLCB2YWx1ZSB9KSA9PiBgJHtuYW1lfSBnb3QgJHt2YWx1ZX0gY29pbnNgfVxyXG4gICAgICAgIGh1ZTJjb2xvcj17aHVlID0+IGBoc2woJHtodWV9LCA4MCUsIDkwJSlgfVxyXG4gICAgICAgIGh1ZTJiYWNrZ3JvdW5kQ29sb3I9e2h1ZSA9PiBgaHNsKCR7aHVlfSwgMzAlLCAzMCUpYH1cclxuICAgICAgLz5cclxuICAgIDwvU2VjdGlvbj5cclxuICA8L2Rpdj4pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=