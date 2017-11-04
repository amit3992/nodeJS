const http = require('http');

var request = http.get("http://api.brewerydb.com/v2/search?q=Hefeweizen&type=beer&key=913cae14e38d81e2ce1db7a72206c6ba", (response) => {
	console.log(response.statusCode);
	var body = "";
	response.on("data", (chunk) => {	
		body += chunk;
	});

	response.on("end", () => {
		console.log(body);
	});

});