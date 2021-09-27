var http = require('http');
var os = require("os");

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>My first nodejs app.</h1>");
  res.write("<h2>endianness: " + os.endianness() + "</h2>");
  res.write("<h2>type: " + os.type() + "</h2>");
  res.write("<h2>platform: " + os.platform() + "</h2>");
  res.write("<h2>totalmem: " + os.totalmem() + "</h2>");
  res.write("<h2>freemem: " + os.freemem() + "</h2>");
  res.end();
}).listen(9090);

// Console will print the message
console.log('Server running at http://localhost:9090/');