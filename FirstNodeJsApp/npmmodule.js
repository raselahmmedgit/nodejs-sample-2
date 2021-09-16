var http = require('http');
var uc = require('upper-case');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>My first nodejs app.</h1>");
  res.write("<h2>Use npm module.</h2>");
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(9090);