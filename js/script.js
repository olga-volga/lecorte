require('es6-promise').polyfill();
require ('es7-object-polyfill');
import 'core-js';

import menu from './modules/menu';
import form from './modules/form';

window.addEventListener('DOMContentLoaded', function() {
	"use strict";
	menu();
	form();
});