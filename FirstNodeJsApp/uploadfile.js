var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldFilePath = files.filetoupload.path;
      var newFilePath = './upload/' + files.filetoupload.name;
      fs.rename(oldFilePath, newFilePath, function (err) {
        if (err) throw err;
        res.write('File uploaded!');
        res.end();
      });

    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h2>File uploaded by file system:</h2>");
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(9090);

// Console will print the message
console.log('Server running at http://localhost:9090/');