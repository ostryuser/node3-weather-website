const request = require('request')

const forecast = (lat, long, callback) => {
  const url =
    'http://api.openweathermap.org/data/2.5/weather?lat=' +
    lat +
    '&lon=' +
    long +
    '&appid=ca6c7ed539c50ea511abc6ac2e389d25'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined)
    } else if (body.message) {
      callback(body.message, undefined)
    } else {
      callback(undefined, {
        weather: body.weather[0].description,
      })
    }
  })
}

module.exports = forecast
