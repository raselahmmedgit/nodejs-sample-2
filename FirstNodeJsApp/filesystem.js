var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  
  fs.readFile('./data/app-data.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write("<h2>Get json data by file system:</h2>");
    res.write(data);
    res.end();
  });
  
}).listen(9090);

// Console will print the message
console.log('Server running at http://localhost:9090/');