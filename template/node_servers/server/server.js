var express = require('express');
var app = express();

var ip = process.env.OPENSHIFT_NGINJS_IP;
var port = 16000;//process.env.OPENSHIFT_NGINJS_PORT;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, ip, function () {
  console.log('Example app listening on ' + ip + ':' + port);
});
