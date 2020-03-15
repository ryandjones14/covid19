webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CountrySelector.js":
/*!***************************************!*\
  !*** ./components/CountrySelector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountrySelector; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CountryData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CountryData */ "./components/CountryData.js");
/* harmony import */ var _utils_useCountries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useCountries */ "./utils/useCountries.js");

var _jsxFileName = "/Users/ryanjones/code/react/covid19app/components/CountrySelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function CountrySelector() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('USA'),
      codeSelected = _useState[0],
      setCodeSelected = _useState[1];

  var countriesData = Object(_utils_useCountries__WEBPACK_IMPORTED_MODULE_3__["default"])('https://covid19.mathdro.id/api/countries');
  if (!countriesData) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "loading countries");
  var countryOptions = Object.entries(countriesData.countries).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        country = _ref2[0],
        code = _ref2[1];

    // console.log(code);
    return __jsx("option", {
      value: code,
      key: code,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, country);
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("select", {
    onChange: function onChange(e) {
      return setCodeSelected(e.target.value);
    },
    value: countriesData.iso3[codeSelected],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, countryOptions), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "currently showing data for ", codeSelected), __jsx(_components_CountryData__WEBPACK_IMPORTED_MODULE_2__["default"], {
    codeSelected: codeSelected,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.e6f5056722ce17cd7bab.hot-update.js.map