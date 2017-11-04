'use strict';

const http = require('http');

function router(req, res) {
	res.writeHead(200, {'Content-type': 'text/html'});
	res.end('<h1> Helloooo, Amit </h1>');
}

http.createServer(router).listen(3000, () => {
	console.log("Server up and running on port 3000");
});