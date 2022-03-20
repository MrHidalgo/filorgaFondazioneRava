/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common/common.js":
/*!*********************************!*\
  !*** ./src/js/common/common.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Common = function () {
  var pressESC = function pressESC() {
    document.addEventListener('keyup', function (ev) {
      if (ev.keyCode === 27) {}
    });
  };

  var clickBody = function clickBody() {
    document.body.addEventListener('click', function (ev) {
      var className = "body";

      if (!ev.target.closest(className).length) {}
    });
  };

  var preventBehavior = function preventBehavior() {
    var link = document.querySelectorAll("a");
    link.forEach(function (val, idx) {
      val.addEventListener("click", function (ev) {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };

  var initLoad = function initLoad() {
    pressESC();
    clickBody();
    preventBehavior();
  };

  return {
    initLoad: initLoad
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Common);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/common */ "./src/js/common/common.js");
 // EVENT LISTENER - LOAD
// ========================================

window.addEventListener('load', function (ev) {
  // COMMON
  _common_common__WEBPACK_IMPORTED_MODULE_0__["default"].initLoad(); // MACROS

  /* FORM 1 INPUT
  * ============================== */

  document.querySelector('[contentForm1-input-js]').addEventListener('input', function (ev) {
    var el = ev.currentTarget;

    if (el.value.length >= 8) {
      el.nextElementSibling.style.opacity = '1';
      document.querySelector('[contentForm1-btn-js]').classList.add('is-active');
    } else {
      el.nextElementSibling.style.opacity = '0';
      document.querySelector('[contentForm1-btn-js]').classList.remove('is-active');
    }
  }, false);
  document.querySelector('[contentForm1-btn-js]').addEventListener('click', function (ev) {
    document.querySelector('.content__wrapper-1').style.display = 'none';
    document.querySelectorAll('.content__wrapper-2').forEach(function (val, idx) {
      val.style.display = 'block';
    });
  }, false);
  /* FORM 2 INPUT
  * ============================== */

  document.querySelector('[contentForm2-input1-js]').addEventListener('input', function (ev) {
    var el = ev.currentTarget;

    if (el.value.length > 2) {
      el.closest('label').classList.add('is-open');
    } else {
      el.closest('label').classList.remove('is-open');
    }
  }, false);
  /* DROPDOWN LINK TOGGLE
  * ============================== */

  document.querySelectorAll('.content__form-dropdown a').forEach(function (val, idx) {
    val.addEventListener('click', function (ev) {
      var el = ev.currentTarget;
      el.closest('label').classList.remove('is-open');
      document.querySelector('[contentForm2-input1-js]').value = el.innerText;
      document.querySelector('[contentForm2-input2-js]').style.display = 'flex';
    }, false);
  });
  /* FORM 3 INPUT
  * ============================== */

  document.querySelector('[contentForm2-input2-js] input').addEventListener('input', function (ev) {
    var el = ev.currentTarget;

    if (el.value.length > 2) {
      document.querySelector('.content__box-container').classList.add('is-show');
    } else {
      document.querySelector('.content__box-container').classList.remove('is-show');
    }
  }, false);
  /* BOX TOGGLE
  * ============================== */

  document.querySelectorAll('.content__box').forEach(function (val, idx) {
    val.addEventListener('click', function (ev) {
      var el = ev.currentTarget;
      el.classList.toggle('is-active');
      document.querySelector('.content__box-header span').innerText = document.querySelectorAll('.content__box.is-active').length;
    }, false);
  });
}, false); // EVENT LISTENER - SCROLL
// ========================================

window.addEventListener('scroll', function (ev) {}, false);
}();
/******/ })()
;