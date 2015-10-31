var http = require('http');
var myServer = http.createServer(function(request, response){
  response.writeHead('200', {'content-type': 'text/html'});
  response.write('<b>Hello</b> Shriram');
  response.end();
});

myServer.listen(3000);


console.log('App now running at http://localhost:3000');
