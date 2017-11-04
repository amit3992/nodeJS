//https://api.darksky.net/forecast/c88fd0eceafb2dac5333f58237358409/47.60885,-122.328553

const request = require('request');

var getWeather = (lat, lng, callback) => {

/* URL */
request({
	url: `https://api.darksky.net/forecast/c88fd0eceafb2dac5333f58237358409/${lat},${lng}`,
	json:true
}, (error, response, body) => {
	
	if(error) {
		callback("Unable to connect to dark sky API");
	}
	else if(response.statusCode === 400) {
		callback("Unable to fetch data");
	}
	
	if(!error && response.statusCode === 200) {

		var timeString = convertDate(body.currently.time)
		
		callback(undefined, {
			time: timeString,
			temperature: body.currently.temperature,
			windSpeed: body.currently.windSpeed,
			summary: body.currently.summary,

		});
	}
	else {
		callback("Unable to fetch weather");
	}
});

}


var convertDate = (UNIX_TIME_STAMP) => {
	var date = new Date(UNIX_TIME_STAMP*1000);

	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();

	return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

module.exports.getWeather = getWeather;
