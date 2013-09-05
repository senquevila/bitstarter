var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var myBuffer = new Buffer(fs.readFileSync('index.html', 'utf8'));
  var myBufferStr = myBuffer.toString();
  var backers = 1;
  var amount = 1.22;
  var day_left = 60;

  myBufferStr = myBufferStr.replace("{__backers}", backers, "g");
  myBufferStr = myBufferStr.replace("{__amount}", amount, "g");
  myBufferStr = myBufferStr.replace("{__day_left}", day_left, "g");
  
  response.send(myBufferStr);
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on " + port);
});
