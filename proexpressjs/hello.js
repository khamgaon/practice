var express = require('express');
var app = express();
var port = 3000;

app.get('/name/:name', function(req, res) {
  res.status(200);
  res.set('content-type', 'text/html');
  res.send('<html><body><h1> Hello ' + req.params.name + '</h1></body></html>')
});

app.get('*', function(req, res) {
  res.send("Hello World")
});

app.listen(port, function () {
  console.log('The server is running at localhost:%s', port);
})
