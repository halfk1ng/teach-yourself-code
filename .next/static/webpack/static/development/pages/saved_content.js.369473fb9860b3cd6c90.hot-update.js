webpackHotUpdate("static/development/pages/saved_content.js",{

/***/ "./components/SignInScreen.jsx":
/*!*************************************!*\
  !*** ./components/SignInScreen.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ "./node_modules/react-firebaseui/StyledFirebaseAuth.js");
/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/jamestucker/Personal Projects/teach_yourself_code/components/SignInScreen.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


 // Configure Firebase.

var config = {
  apiKey: "AIzaSyAKfflzr482_jI6-kogqdGl_g7E368lfXQ",
  authDomain: "teach-yourself-code.firebaseapp.com",
  databaseURL: "https://teach-yourself-code.firebaseio.com",
  projectId: "teach-yourself-code",
  storageBucket: "teach-yourself-code.appspot.com",
  messagingSenderId: "681808673288",
  appId: "1:681808673288:web:a7ee723223e69862642fbd",
  measurementId: "G-JZV45JRTL1"
};
firebase__WEBPACK_IMPORTED_MODULE_9___default.a.initializeApp(config);

var SignInScreen =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SignInScreen, _React$Component);

  function SignInScreen() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignInScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SignInScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isSignedIn: false // Local signed-in state.

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "uiConfig", {
      // Popup signin flow rather than redirect flow.
      signInFlow: "popup",
      // We will display Google and Facebook as auth providers.
      signInOptions: [firebase__WEBPACK_IMPORTED_MODULE_9___default.a.auth.GoogleAuthProvider.PROVIDER_ID, firebase__WEBPACK_IMPORTED_MODULE_9___default.a.auth.EmailAuthProvider.PROVIDER_ID],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: function signInSuccessWithAuthResult() {
          return false;
        }
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignInScreen, [{
    key: "componentDidMount",
    // Listen to the Firebase Auth state and set the local state.
    value: function componentDidMount() {
      var _this2 = this;

      this.unregisterAuthObserver = firebase__WEBPACK_IMPORTED_MODULE_9___default.a.auth().onAuthStateChanged(function (user) {
        return _this2.setState({
          isSignedIn: !!user
        });
      });
    } // Make sure we un-register Firebase observers when the component unmounts.

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unregisterAuthObserver();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.isSignedIn) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "My App"), __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "Please sign-in:"), __jsx(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_8___default.a, {
          uiConfig: this.uiConfig,
          firebaseAuth: firebase__WEBPACK_IMPORTED_MODULE_9___default.a.auth(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }));
      }

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "My App"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Welcome ", firebase__WEBPACK_IMPORTED_MODULE_9___default.a.auth().currentUser.displayName, "! You are now signed-in!"), __jsx("a", {
        onClick: function onClick() {
          return firebase__WEBPACK_IMPORTED_MODULE_9___default.a.auth().signOut();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Sign-out"));
    }
  }]);

  return SignInScreen;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SignInScreen);

/***/ })

})
//# sourceMappingURL=saved_content.js.369473fb9860b3cd6c90.hot-update.js.map