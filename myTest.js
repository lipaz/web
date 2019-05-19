var http = require('http');
var dt = require('./myDateModule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Current date and time are: " + dt.mySampleTime());
  res.end();
}).listen(8080);