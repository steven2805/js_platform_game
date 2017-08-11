var express = require('express');
var parser = require('body-parser');
var gameApp = express();
// var path = require('path'); 


gameApp.use(parser.json());
gameApp.use(parser.urlencoded({extended: true}));
gameApp.use(express.static('client/build'));
gameApp.use(express.static('client/public'));


gameApp.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/build/index.html');
});



var server = gameApp.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("gameApp listening at", host, port);
});