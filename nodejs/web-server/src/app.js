const hbs = require('hbs')
const express = require('express')
const path    = require('path')


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
    response.send({
        location: 'Taipei, Taiwan',
        forecast: 'It is rain'
    })
})

app.get('*', (request, response) => {
    response.send('404')
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})