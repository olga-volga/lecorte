/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((module) => {

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

module.exports = form;

/***/ }),

/***/ "./js/modules/menu.js":
/*!****************************!*\
  !*** ./js/modules/menu.js ***!
  \****************************/
/***/ ((module) => {

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

module.exports = menu;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/


window.addEventListener('DOMContentLoaded', () => {
	const menu = __webpack_require__(/*! ./modules/menu */ "./js/modules/menu.js"),
		  form = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");

	menu();
	form();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map