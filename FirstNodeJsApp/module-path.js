var http = require('http');
var path = require("path");

// Normalization
console.log('normalization : ' + path.normalize('/data'));

// Join
console.log('joint path : ' + path.join('/data', 'test', 'a', 'b', '..'));

// Resolve
console.log('resolve : ' + path.resolve('index.js'));

// extName
console.log('ext name : ' + path.extname('index.js'));

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>My first nodejs app.</h1>");
  res.write("<h2>normalization: " + path.normalize('/data') + "</h2>");
  res.write("<h2>joint path: " + path.join('/data', 'test', 'a', 'b', '..') + "</h2>");
  res.write("<h2>resolve: " + path.resolve('index.js') + "</h2>");
  res.write("<h2>ext name: " + path.extname('index.js') + "</h2>");
  res.end();
}).listen(9090);

// Console will print the message
console.log('Server running at http://localhost:9090/');