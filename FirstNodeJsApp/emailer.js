var http = require('http');
var nodemailer = require('nodemailer');

http.createServer(function (req, res) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rasel.placovu@gmail.com',
          pass: 'rasel!@#123'
        }
      });

      var mailOptions = {
        from: 'rasel.placovu@gmail.com',
        to: 'rasel.droid@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.write("<h2>" + error + "</h2>");
        } else {
          res.write("<h2>Email sent: " + info.response + "</h2>");
        }
      });

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>My first nodejs app.</h1>");
  res.write("<h2>USe nodeemailer.</h2>");
  res.end();
}).listen(9090);

// Console will print the message
console.log('Server running at http://localhost:9090/');