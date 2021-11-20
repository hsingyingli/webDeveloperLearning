fetch('http://localhost:3000/weather?location=boston').then((response) => {
    response.json().then( (data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
        console.log(data)
    })
    // console.log(response.json())
})