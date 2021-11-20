const request = require('request')

const geocode = (city, callback) => {
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiYXJyb25oeWwiLCJhIjoiY2t2b3JycDdxM25xOTJwbWxyZnh1bnZ3YyJ9.mMn9n4CotSUlZMxTu7vyZA&limit=1`

    request({url: geocodeURL, json:true}, (error, {body} = {}) => {

        if (error) {
            callback('Unable to connect to location server!', undefined)
        }
        else if (body.features.length === 0) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1], 
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode