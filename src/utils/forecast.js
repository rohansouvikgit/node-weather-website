const request = require(`request`)

const forecast = (long, lat, callback) => {
    const url = `https://api.darksky.net/forecast/c355074bc9cd8f131c9e47c264717044/${lat},${long}?units=si`
    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback(`Unable to connect with weather service !`, undefined)
        } else if(body.error) {
            callback(`Unable to find location !`, undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degress out. There is a ${body.currently.precipProbability} % chance of rain.`)
        }
    })
}


module.exports = forecast