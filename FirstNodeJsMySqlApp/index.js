var http = require('http');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    post: "3306",
    user: "rasel",
    password: "123456"
    ,database: "nodejs_db"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // //Create Database
    // con.query("CREATE DATABASE nodejs_db", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database Created!");
    //   });

    // //Create Table
    // var sql = "CREATE TABLE students (StudentId int NOT NULL AUTO_INCREMENT, StudentName varchar(256), EmailAddress varchar(256), DateOfBirth datetime, PRIMARY KEY (StudentId))";
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Table Created!");
    // });

    // //Insert into Table
    // var sql = "INSERT INTO students (StudentName, EmailAddress, DateOfBirth) VALUES ('john', 'john@mail.com', '2021-09-16 16:17:17')";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Inserted!");
    // });

    // //Select from Table
    // var sql = "SELECT * FROM students";
    // con.query(sql, function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    //   });

    // //Select from Table where
    // var sql = "SELECT * FROM students WHERE StudentId = 1";
    // con.query(sql, function (err, result, fields) {
    //      if (err) throw err;
    //      console.log(result);
    //    });

  });

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>My first nodejs mysql app.</h1>");
  res.end();
}).listen(9091);