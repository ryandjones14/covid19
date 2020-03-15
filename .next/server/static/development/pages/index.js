module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CountrySelector.js":
/*!***************************************!*\
  !*** ./components/CountrySelector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountrySelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Stats */ "./components/Stats.js");
/* harmony import */ var _utils_useCountries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useCountries */ "./utils/useCountries.js");
var _jsxFileName = "/Users/ryanjones/code/react/covid19app/components/CountrySelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function CountrySelector() {
  const {
    0: codeSelected,
    1: setCodeSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('USA');
  const countriesData = Object(_utils_useCountries__WEBPACK_IMPORTED_MODULE_2__["default"])('https://covid19.mathdro.id/api/countries');
  if (!countriesData) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "loading countries");
  const countryOptions = Object.entries(countriesData.countries).map(([country, code]) => {
    // console.log(code);
    return __jsx("option", {
      selected: codeSelected === countriesData.iso3[code],
      value: countriesData.iso3[code],
      key: code,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, country);
  });
  let url = `https://covid19.mathdro.id/api/countries/${codeSelected}`;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("select", {
    onChange: e => setCodeSelected(e.target.value),
    value: countriesData.iso3[codeSelected],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, countryOptions), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "currently showing data for ", codeSelected), __jsx(_components_Stats__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");
var _jsxFileName = "/Users/ryanjones/code/react/covid19app/components/Stats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StatGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const StatBlock = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  background: #689a7a;
  font-size: 2rem;
  text-align: center;
  border: 1px solid #487a5a;
  border-radius: 2%;
`;
function Stats({
  url
}) {
  console.log('new url in stats comp', url);
  const {
    stats,
    loading,
    error
  } = Object(_utils_useStats__WEBPACK_IMPORTED_MODULE_2__["default"])(url);
  if (!stats) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "loading data");
  console.log(stats);
  if (error) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, error));
  return __jsx(StatGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(StatBlock, {
    className: "statBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "confirmed cases:"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, stats.confirmed.value)), __jsx(StatBlock, {
    className: "statBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "deaths:"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, stats.deaths.value)), __jsx(StatBlock, {
    className: "statBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "recoveries:"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, stats.recovered.value)));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Stats */ "./components/Stats.js");
/* harmony import */ var _components_CountrySelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CountrySelector */ "./components/CountrySelector.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ryanjones/code/react/covid19app/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"]`
  html {
    font-family: 'Helvitca Nueu', sans-serif;
    background: #daafaf;
  }
`;
function IndexPage() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_components_Stats__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: " https://covid19.mathdro.id/api",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
}

/***/ }),

/***/ "./utils/useCountries.js":
/*!*******************************!*\
  !*** ./utils/useCountries.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCountries; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useCountries(url) {
  const {
    0: countries,
    1: setCountries
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData() {
      console.log('fetching countries');
      const data = await fetch(url).then(response => response.json());
      setCountries(data);
    }

    ;
    fetchData();
  }, []);
  return countries;
}

/***/ }),

/***/ "./utils/useStats.js":
/*!***************************!*\
  !*** ./utils/useStats.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useStats(url) {
  const {
    0: stats,
    1: setStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  console.log('new url in use stats util', url);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setLoading(true);
    setError();

    async function fetchData() {
      const data = await fetch(url).then(response => {
        return response.json();
      }).catch(err => {
        setError(err);
        return;
      });
      setLoading(false);

      if (data && data.error) {
        setError(data.error.message);
      } else {
        setStats(data);
      }
    }

    ;
    fetchData();
  }, [url]);
  return {
    stats,
    loading,
    error
  };
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ryanjones/code/react/covid19app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map