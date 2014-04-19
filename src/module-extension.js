/* globals exports require */
(function (exports) {

	'use strict';

	//Require modules
	var utils = require('util');
	var events = require('events');

	//extension module
	this.extension = {
		name: 'module extension',
		init: function () {
			console.log('extension.init()');
		},
		save: function (args) {
			console.log('extension.save');
		}
	};


}(typeof exports === 'object' && exports || this));
