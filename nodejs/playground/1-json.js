const fs = require('fs')


const dataBuffer = fs.readFileSync('./1-json.json')
const data = dataBuffer.toString()
console.log(data)
const dataJSON = JSON.parse(data)
console.log(dataJSON)
dataJSON.title = 'qqqqq'
console.log(dataJSON.title)
const motifyData = JSON.stringify(dataJSON)
console.log(motifyData)
fs.writeFileSync('./1-json.json', motifyData)
