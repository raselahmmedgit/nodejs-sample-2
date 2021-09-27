var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>My first nodejs app.</h1>");
  res.write("<h2>" + req.url + "</h2>");
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write("<h2>" + txt + "</h2>");
  res.end();
}).listen(9090);

// Console will print the message
console.log('Server running at http://localhost:9090/');