var express = require('express');
var app = express();

app.use(express.static('theme'));

// This responds with index.htm on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/index', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.sendFile( __dirname + "/" + "index.htm" );
})

// app.get('/index.htm', function (req, res) {
//    console.log("Got a GET request for the index.htm");
//    res.sendFile( __dirname + "/" + "index.htm" );
// })

// This responds a GET request for the /student page.
app.get('/student', function (req, res) {
   console.log("Got a GET request for /student");
   res.send('Page Listing');
})

// This responds a GET request for the /student add page.
app.get('/student/add', function (req, res) {
   console.log("Got a GET request for /student/add");
   res.sendFile( __dirname + "/student" + "/student/addedit.htm" );
})

// This responds a GET request for the /student edit page.
app.get('/student/edit', function (req, res) {
   console.log("Got a GET request for /student/edit");
   res.sendFile( __dirname + "/student" + "/student/addedit.htm" );
})

// This responds a GET request for the /student detail page.
app.get('/student/detail', function (req, res) {
   console.log("Got a GET request for /student/detail");
   res.sendFile( __dirname + "/student" + "/student/detail.htm" );
})

// This responds a POST request for the /student save page.
app.post('/student/save', function (req, res) {
   console.log("Got a POST request for /student/save");
   // Prepare output in JSON format
   response = {
      StudentName:req.query.StudentName,
      EmailAddress:req.query.EmailAddress,
      DateOfBirth:req.query.DateOfBirth
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

// This responds a DELETE request for the /student/delete page.
app.delete('/student/delete', function (req, res) {
   console.log("Got a DELETE request for /student/delete");
   res.send('Hello DELETE');
})

var server = app.listen(9091, function () {
   var host = server.address().address;
   var port = server.address().port;

   // Console will print the message
   console.log("Example app listening at http://%s:%s", host, port);

})

// Console will print the message
console.log('Server running at http://127.0.0.1:9091/');