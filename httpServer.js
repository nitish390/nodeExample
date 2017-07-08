//Create HTTP Server
// var http = require('http');



// //create a server object:

// http.createServer(function (req, res) {

//   res.write('Hello Nitish!'); //write a response to the client

//   res.end(); //end the response

// }).listen(8080); //the server object listens on port 8080







//Add an HTTP Header





// var http = require('http');

// http.createServer(function (req, res) {

//   res.writeHead(500, {'Content-Type': 'text/html'});

//   res.write('Hello World!');

//   res.end();

// }).listen(8080);







// //Read the Query String





var http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write(req.url);

    res.end();

}).listen(8080);



