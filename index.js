var http = require('http');
var app = require('./app');
var port = '7001';
 
var server = http.createServer(app);

server.listen(port, function() {
  console.log('API Server listening on port ' + port);
});
