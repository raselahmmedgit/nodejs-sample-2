var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /delete-student page.
app.delete('/delete-student', function (req, res) {
   console.log("Got a DELETE request for /delete-student");
   res.send('Hello DELETE');
})

// This responds a GET request for the /student page.
app.get('/student', function (req, res) {
   console.log("Got a GET request for /student");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(9091, function () {
   var host = server.address().address;
   var port = server.address().port;

   // Console will print the message
   console.log("Example app listening at http://%s:%s", host, port);

})

// Console will print the message
console.log('Server running at http://127.0.0.1:9091/');