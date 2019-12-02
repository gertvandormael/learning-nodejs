const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url = `https://api.darksky.net/forecast/f74891dfdebcea1d3244e62c1ac07e91/${latitude},${longtitude}?units=si`;

request({ url: url, json: true}, (error, response) => {
  if (error) {
    callback("Unable to connect to weather service!", undefined);
  } else if(response.body.error) {
    callback("Unable to find location", undefined);
  } else {
    callback(undefined, `${response.body.daily.data[0].summary} It's currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
  }
})
}

module.exports = forecast;