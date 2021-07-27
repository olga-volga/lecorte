"use strict";

window.addEventListener('DOMContentLoaded', () => {
	const menu = require('./modules/menu'),
		  form = require('./modules/form');

	menu();
	form();
});