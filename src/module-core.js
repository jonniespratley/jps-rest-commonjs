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

	//this.options = utils.inherits(options, this);
	this.options = options;
	this.name = 'core module';

	//Initialize the module
	this.init = function () {
		this.emit('init', this);
		utils.log('core.init()', this.options);
	}

	//Other public methods
	this.create = function(args, callback){

	};
	this.read = function(args, callback){

	};
	this.update = function(args, callback){

	};
	this.destroy = function(args, callback){

	};


	//Extension methods



};


//Make core inherit all of EventEmitter properties/methods
utils.inherits(core, events.EventEmitter);

console.log(module.id);

//Make public
exports.core = core;