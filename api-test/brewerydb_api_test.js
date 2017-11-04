const request = require('request');

var myBeer = process.argv[2];

var urlPre = 'http://api.brewerydb.com/v2/search?q=';
var api_key = '&type=beer&key=913cae14e38d81e2ce1db7a72206c6ba';

request({
	url: urlPre + myBeer + api_key,
	json: true
}, (error, response, body) => {
	if(response.statusCode == '200') {
		var data = body;
		if(processData(data)) {
			console.log('Name: ' + name + '.  Alcohol content: ' + abv);
		}
	}
	else {
		console.log(error);
	}
});

var abv = null;
var name = null;

var processData = (data) => {
	
	if(data) {
		let firstData = data.data[0];
		if(firstData) {
			abv = firstData.style.abvMax;
			name = firstData.style.name;
		}
		else {
			return false;
		}
		
		return true;
	}
	else {
		return false;
	}
	
};