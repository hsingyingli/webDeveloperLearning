const http = require('http');

// connection settings
// a port is an end point of communication
const port = 3000;

// hostname: IP which is associated with any device connected to a computer network
const hostname = '127.0.0.1';

//callback function to be executed when a user makes a request to our server
const respond = (request, response) => {
    console.log(request.url);
    // response.setHeader(header name, value)

    response.setHeader('content-Type', 'text/plain');

    //writeHead(status code, headers)

    response.writeHead(200, {'content-Type': 'text/html'});

    response.write(`<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>JS Bin</title>
    </head>
    <body>`);
    response.write(`<p> Node is fun</p>`);
    response.end(` </body>
    </html>`);

   
}

// create a server
const server = http.createServer(respond);

server.listen(port, hostname, () => {console.log(`listening on port: ${port}, hostname: ${hostname}`)});



//url.parse(request.url, true); => const myURL = new URL(request.url, "http://127.0.0.1:3000");