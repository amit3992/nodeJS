const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

/* Read data from command line */
const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

var addr = argv.address;


geocode.geocodeAddress(addr, (errorMessage, results) => {
	if(errorMessage) {
		console.log(errorMessage);
	}
	else {
		
		console.log('Weather at: ' + results.address);
		
		weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResult) => {

			if(errorMessage) {
				console.log(errorMessage);
			}
			else {
				console.log('===================================================');
				console.log('Time: ' + weatherResult.time);
				console.log('Current conditions: ' + weatherResult.summary);
				console.log('Current temperature: ' + weatherResult.temperature);
				console.log('Current wind-speed: ', + weatherResult.windSpeed);
			}

		});
	}
});



