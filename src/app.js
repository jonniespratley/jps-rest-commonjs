//Require modules
var core = require('./module-core').core;

//Create instance
var app = new core({name: 'My App'});


//Listen for init event
app.on('init', function(instance){
	console.log('app.init.callback');
});


app.init();
