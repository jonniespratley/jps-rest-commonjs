//extension module
var extension = {
	name: 'module extension',
	init: function(){
		console.log('extension.init()');
	},
	save: function(args){
		console.log('extension.save');
	}
};

//Make public
exports.extension = extension;