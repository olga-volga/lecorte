/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function form() {
	// Form
	const form = document.querySelector('form');

	const message = {
		success: 'Благодарим вас за интерес к бутику LE CORTE! Мы свяжемся с Вами совсем скоро, чтобы уточнить детали.',
		fail: 'Что-то пошло не так...'
	};

	bindPostData(form);

	const postData = async (url, data) => {
      const res = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'application/json'
        }
      });
      return await res.json();
    };

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData('http://localhost:3000/requests', json)
			.then(data => {
	          console.log(data);
	          alert(message.success);
	        })
	        .catch(() => {
	          alert(message.fail);
	        })
	        .finally(() => {
	          form.reset();
	        })
		});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./js/modules/menu.js":
/*!****************************!*\
  !*** ./js/modules/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menu() {
	// Header Mobile Menu
	const body = document.querySelector('body'),
		  menu = body.querySelector('.header__menu'),
		  burgerBtn = body.querySelector('.header__burger');
	
	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	});

	menu.addEventListener('click', () => {
		burgerBtn.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('lock');
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./js/modules/menu.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");





window.addEventListener('DOMContentLoaded', () => {

	(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.default)();
	(0,_modules_form__WEBPACK_IMPORTED_MODULE_1__.default)();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map