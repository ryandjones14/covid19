webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/useCountryStats.js":
/*!**********************************!*\
  !*** ./utils/useCountryStats.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCountryStats; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useCountryStats(url) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      stats = _useState[0],
      setStats = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      error = _useState3[0],
      setError = _useState3[1];

  console.log('trying to get new country data');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log('mounting or updating');

    function fetchData() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url).then(function (response) {
                return response.json();
              })["catch"](function (err) {
                return setError(err);
              }));

            case 3:
              data = _context.sent;
              console.log('country data', data);
              setStats(data);
              setLoading(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }

    ;
    fetchData();
  }, []);
  return {
    stats: stats,
    loading: loading,
    error: error
  };
}

/***/ })

})
//# sourceMappingURL=index.js.b6b1b5114c638f7c4339.hot-update.js.map