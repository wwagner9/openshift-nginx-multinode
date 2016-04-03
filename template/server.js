var express = require('express');
var app = express();

var ip = process.env.OPENSHIFT_DIY_IP;
var port = process.env.OPENSHIFT_DIY_PORT;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, ip, function () {
  console.log('Example app listening on port 8080!');
});
