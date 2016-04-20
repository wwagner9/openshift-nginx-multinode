var express = require('express');
var app = express();

var ip = process.env.OPENSHIFT_NGINJS_IP;
var port = 10000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, ip, function () {
  console.log('Example app listening on port 10000!');
});
