var http = require('http'), fs = require('fs');

//Simple server push implementation
var deferred = require('deferred');

var delay = function (fn, timeout) {
	return function () {
		var def = deferred(), self = this, args = arguments;

		setInterval(function () {
			var value;
			try {
				value = fn.apply(self, args);
			} catch (e) {
				def.reject(e);
				return;
			}
			def.resolve(value);
		}, timeout);

		return def.promise;
	};
};


/**
 * Simple http client server
 */
socketFile = fs.readFileSync(__dirname + '/socketio.html');
server = http.createServer();
server.on('request', function (req, res) {
	res.writeHead('200', {
		'content-type': 'text/html'
	});
	return res.end(socketFile);
});
server.listen(9090);


/**
 * Simple socket.io server
 * @type {*|http.Server}
 */
io = require('socket.io').listen(server);
clients = [];

io.sockets.on('connection', function (socket) {
	console.log('Client connected');
	clients.push(socket);

	//send to all
	io.sockets.emit('msg', {message: 'Client '+ socket.id + ' just connected.', from: 'server'});

	//handle disconnect
	socket.on('disconnect', function () {
		io.sockets.emit('user disconnected');
	});


	//Send to client
	socket.emit('msg', {
		datetime: new Date(),
		message: "Welcome " + socket.id + " your the #" + clients.length + " socket."
	});


	//Send custom event to client
	socket.on('msgEvent', function (data, fn) {
		console.log('Client message', data);
		fn({
			datetime: new Date(),
			message: 'You sent ' + data
		});
	});


	//Setup auto push after interval
	var delayedSocketPush = delay(function (msg) {
		socket.emit( 'msg', {
			datetime: new Date(),
			message: msg,
			from: 'server'
		});
	}, 5000);


	var resultPromise = delayedSocketPush('Here is some streaming data for all....');


});

