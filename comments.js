//Create a web server that's going to send a response of big image to any client that sends a request to your server. 
//Use the best way for performance
// (Consider what the response of the server is going to be, the size of the image and the number of requests)
// Path: bigImage.js
//Create a web server that's going to send a response of big image to any client that sends a request to your server. 
//Use the best way for performance
// (Consider what the response of the server is going to be, the size of the image and the number of requests)

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const src = fs.createReadStream(path.join(__dirname, 'bigImage.js'));
    res.writeHead(200, {'Content-Type': 'text/plain'})
    src.pipe(res);
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
})

