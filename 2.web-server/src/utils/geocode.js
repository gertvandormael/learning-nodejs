const request = require("request");

const geocode = (adress, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		adress
	)}.json?access_token=pk.eyJ1IjoieW9naXYiLCJhIjoiY2szZm9vcTF2MDZlaDNzdDZyMzhnaDVkMCJ9.AuYJZxyw3jzT6jSLApUPHg&limit=1`;

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback("Unable to connect to location services!", undefined);
		} else if (response.body.features.length === 0) {
			callback("Unable to find location. Try another search!", undefined);
		} else {
			callback(undefined, {
				latitude: response.body.features[0].center[1],
				longtitude: response.body.features[0].center[0],
				location: response.body.features[0].place_name
			});
		}
	});
};

module.exports = geocode;
