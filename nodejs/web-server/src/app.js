const hbs = require('hbs')
const express = require('express')
const path    = require('path')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const { response } = require('express')


const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))
 
app.get('', (request, response) => {
    response.render('index', {
        title: 'weather App',
        name: 'dddd'
    })
})

app.get('/help', (request, response) => {
    response.render('help', {
        title: 'Help Page',
    })
}) 

app.get('/about', (request, response) => {
    response.render('about', {
        title: 'About us!',
    })
})

app.get('/weather', (request, response) => {
    if (!request.query.location) {
        return response.send({
            error: 'You must provide location'
        })
    }
    
    geocode(request.query.location, (error, {latitude, longitude, location} = {}) => {
        if (error) return response.send({error:error})

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) return response.send({error:error})
            
            response.render( 'weather', {
                title: 'weather',
                location: location,
                forecast: forecastData
            })
        })
    })

    
})

app.get('/products', (request, response) => {
    console.log(request.query)
    response.send({
        'product': []
    })
})



app.get('/help/*', (request, response) => {
    response.send('help not found')
}) 

app.get('*', (request, response) => {
    response.render('404', {
        title: '404 not found'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})