const request = require('request');

var urlPrefix = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

var geocodeAddress = (address, callback) => {
	
	var encodedAddress = encodeURIComponent(address);

	/* Get data from API */
	request({
		url: urlPrefix + encodedAddress,
		json: true
	}, (error, response, body) => {
	
		/* Error checks*/
		if(error) {
			callback("Unable to connect to Google servers.");
		}
		if(body.response === 'ZERO_RESULTS') {
			callback('Unable to find that address.');
		}
		else if(body.status === 'OK') {
			
			/*
			let resp = response;
			let data = body;

			if(resp.statusCode == '200') {
				printLatLon(data);
			} */

			callback(undefined, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			})
		}
	
	});

}

/* Print required data */
var printLatLon = (data) => {
	
	let loc = data.results[0].geometry.location;
	let addr = data.results[0].formatted_address;

	console.log("Address: " + addr);
	console.log("Latitude: " + loc.lat);
	console.log("Longitude: " + loc.lng);
	
}

module.exports.geocodeAddress = geocodeAddress;
