var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h2>Event by file system:</h2>");
  var rs = fs.createReadStream('./data/sample.txt');
        rs.on('open', function () {
        console.log('The file is open');
    });
  res.end();
}).listen(9090);

// Console will print the message
console.log('Server running at http://localhost:9090/');