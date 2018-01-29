const http = require('http');
var name = encodeURIComponent('Petyr Baelish');
const url = "http://www.anapioficeandfire.com/api/characters/?name=" + name;
var address = encodeURIComponent('801 Spring St Seattle WA');
var urlPrefix = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + address;
console.log(url);

http.get(url, (response) => {
	
	var body = "";
	var chars = 0;
	
	response.setEncoding("utf8");
	
	response.on("error", console.error)
	
	response.on("data", (chunk) => {	
		body += chunk;
		console.log(body);
	});

	response.on("end", () => {
		console.log(body);
	});
});