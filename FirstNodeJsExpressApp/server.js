var express = require('express');
var app = express();
var fs = require("fs");
const port = 9091;
const studentJsonFile = "/data/student.json";

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

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
   res.sendFile( __dirname + "/student" + "/index.htm" );
})

// This responds a GET request for the /getstudents json data.
app.get('/getstudents', function (req, res) {
   fs.readFile( __dirname + studentJsonFile, 'utf8', function (err, data) {
      console.log("Read Json File for the /getstudents json data");
      console.log(data);
      res.end(data);
   });
})

app.get('/getstudent/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + studentJsonFile, 'utf8', function (err, data) {
      var students = JSON.parse(data);
      console.log(req.params.id);
      console.log(students);
      var student = students.find(t=>t.StudentId == req.params.id); 
      console.log(student);
      res.end( JSON.stringify(student));
   });
})

// This responds a GET request for the /student add page.
app.get('/student/add', function (req, res) {
   console.log("Got a GET request for /student/add");
   res.sendFile( __dirname + "/student" + "/addedit.htm" );
})

// This responds a GET request for the /student edit page.
app.get('/student/edit/:id', function (req, res) {
   console.log("Got a GET request for /student/edit");
   res.sendFile( __dirname + "/student" + "/addedit.htm" );
})

// This responds a GET request for the /student detail page.
app.get('/student/detail/:id', function (req, res) {
   console.log("Got a GET request for /student/detail");
   res.sendFile( __dirname + "/student" + "/detail.htm" );
})

// This responds a GET request for the /student save page.
app.get('/student/get', function (req, res) {
   console.log("Got a GET request for /student/get");
   console.log(req.query);
   // Prepare output in JSON format
   response = {
      StudentId:req.query.StudentId,
      StudentName:req.query.StudentName,
      EmailAddress:req.query.EmailAddress,
      DateOfBirth:req.query.DateOfBirth
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

// This responds a POST request for the /student save page.
app.post('/student/post', function (req, res) {
   console.log("Got a POST request for /student/post");
   console.log("Got a POST request query");
   console.log(req.query);
   console.log("Got a POST request body");
   console.log(req.body);
   // Prepare output in JSON format
   response = {
      StudentId:req.body.StudentId,
      StudentName:req.body.StudentName,
      EmailAddress:req.body.EmailAddress,
      DateOfBirth:req.body.DateOfBirth
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

// This responds a DELETE request for the /student/delete page.
app.get('/student/delete/:id', function (req, res) {
   console.log("Got a DELETE request for /student/delete");
   res.send('Hello DELETE');
})

var server = app.listen(port, function () {
   var host = server.address().address;
   var port = server.address().port;

   // Console will print the message
   console.log("Example app listening at http://%s:%s", host, port);

})

// Console will print the message
console.log('Server running at http://127.0.0.1:9091/');