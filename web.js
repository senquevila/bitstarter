var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var myBuffer = new Buffer(fs.readFileSync('index.html', 'utf8'));
  
  response.send(myBuffer.toString());
});

var port = process.env.PORT || 8080;

app.use("/img", express.static(__dirname + "img"));

app.listen(port, function() {
  console.log("Listening on " + port);
});
