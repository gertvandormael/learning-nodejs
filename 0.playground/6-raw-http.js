const https = require("https");

const url = `https://api.darksky.net/forecast/f74891dfdebcea1d3244e62c1ac07e91/40,-57?units=si`;

const request = https.request(url, (response) => {
  let data = ""

  response.on("data", (chunk) => {
    data = data + chunk.toString()
  })

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  })

})

request.on("error", () => {
  console.log(error);
})

request.end()