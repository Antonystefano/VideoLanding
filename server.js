(function() {
  var express = require('express');
  var http = require('http');
  var app = express();

  app.set('port', 8080);
  app.use(express.static(__dirname + '/app'));  

  var env = process.env.NODE_ENV || 'development';

  // connection and express server
  console.log('Connection established');
  http.createServer(app).listen(process.env.PORT || app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
  });

}).call(this);
