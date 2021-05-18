module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);



flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('justoverclock/flarum-ext-contextmenu', function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'view', function (vdom) {
    if (vdom.children && vdom.children.splice) {
      var link1 = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('Link1');
      var link2 = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('Link2');
      var insert = m('ul', {
        className: 'menu',
        id: 'ctxmenu'
      }, [m('li', {
        className: 'menu-item'
      }, m('button', {
        className: 'menu-btn',
        type: 'button'
      }, m('a', {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('Link1url')
      }, [m('i', {
        className: 'fa fa-file'
      }), m('span', {
        className: 'menu-text'
      }, link1)]))), m('li', {
        className: 'menu-separator'
      }), m('li', {
        className: 'menu-item'
      }, m('a', {
        href: 'https://www.facebook.com/flarumitaliaofficial'
      }, m('button', {
        className: 'menu-btn',
        type: 'button'
      }, [m('i', {
        className: 'fab fa-facebook-f'
      }), m('span', {
        className: 'menu-text'
      }, 'Facebook')]))), m('li', {
        className: 'menu-item'
      }, m('a', {
        href: 'https://twitter.com/flarumitalia'
      }, m('button', {
        className: 'menu-btn',
        type: 'button'
      }, [m('i', {
        className: 'fab fa-twitter'
      }), m('span', {
        className: 'menu-text'
      }, 'Twitter')]))), m('li', {
        className: 'menu-item'
      }, m('a', {
        href: 'https://github.com/justoverclockl'
      }, m('button', {
        className: 'menu-btn',
        type: 'button'
      }, [m('i', {
        className: 'fab fa-github-alt'
      }), m('span', {
        className: 'menu-text'
      }, 'Github')]))), m('li', {
        className: 'menu-separator'
      }), m('li', {
        className: 'menu-item'
      }, m('button', {
        className: 'menu-btn',
        type: 'button'
      }, m('a', {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('Link2url')
      }, [m('i', {
        className: 'fa fa-envelope'
      }), m('span', {
        className: 'menu-text'
      }, link2)])))]);
      vdom.children.splice(1, 0, insert);
    }
  });
});
Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oncreate', function () {
  var menu = document.querySelector('.menu');

  function showMenu(x, y) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.current.matches(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a)) menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    menu.classList.add('menu-show');
  }

  function hideMenu() {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.current.matches(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a)) menu.classList.remove('menu-show');
  }

  function onContextMenu(e) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.current.matches(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a)) e.preventDefault();
    showMenu(e.pageX, e.pageY);
    document.addEventListener('mouseup', onMouseUp, false);
  }

  function onMouseUp(e) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.current.matches(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a)) hideMenu();
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('contextmenu', onContextMenu, false);
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map