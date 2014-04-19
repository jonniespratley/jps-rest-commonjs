/* global require export */
'use strict';

//Require modules
var utils = require('util');
var events = require('events');

//core module
function core(options) {
	this.id = 'Core module';
	this.uri = 'Resource'

	//Invoke the EventEmitter
	events.EventEmitter.call(this);

	this.options = options;
	this.name = 'core module';
	this.extension = this.options.extension ? this.options.extension : {};

	//Initialize the module
	this.init = function () {
		this.emit('init', this);
		utils.log('core.init()', this.options);
	};

	//Call method which will call method on extension if there
	this.call = function(){
		//Log
		utils.log(this.extension.hasOwnProperty([arguments[0]]), arguments[0], arguments);

		//emit
		this.emit(arguments[0], arguments);

		//check
		if(this.extension.hasOwnProperty([arguments[0]])){

			//invoke
			this.extension[arguments[0]].call(this.extension[arguments[1]])
		} else {

			//error
			throw Error('You need to provide an extension!');
		}
	};


	this.save = function (args) {

		this.call('save', args);

	};

	this.read = function (args) {
		utils.log('read', args);
		this.emit('read', args);
	};

	this.update = function (args) {
		utils.log('update', args);
		this.emit('update', args);
	};

	this.destroy = function (args) {
		utils.log('destroy', args);
		this.emit('destroy', args);
	};

};

//Make core inherit all of EventEmitter properties/methods
utils.inherits(core, events.EventEmitter);


console.log(module.id);

//Make public
exports.core = core;