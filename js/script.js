"use strict";

require('es6-promise').polyfill();

import menu from './modules/menu';
import form from './modules/form';

window.addEventListener('DOMContentLoaded', function() {

	menu();
	form();
});