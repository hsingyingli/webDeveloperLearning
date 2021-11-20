const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com//current?access_key=978d6d289f6686003bb0dbeaec66f8f1&query=${latitude}, ${longitude}`

    request({url: url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to server!', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            let temperature = body.current.temperature
            let feelslike   = body.current.feelslike
            callback(undefined, `It is currently ${temperature} degree out. It feels like ${feelslike} degree out.`)
        }

    })
}


module.exports = forecast