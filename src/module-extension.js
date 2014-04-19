//extension module
var extension = {
	name: 'module extension',
	init: function(){
		console.log('extension.init()');
	}
};

//Make public
exports.extension = extension;