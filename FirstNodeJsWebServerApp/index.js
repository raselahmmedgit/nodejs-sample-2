var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>My first nodejs app.</h1>");
  res.end();
}).listen(9090);

// Console will print the message
console.log('Server running at http://localhost:9090/');