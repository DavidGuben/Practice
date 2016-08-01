
// BASIC EXPRESS SERVER ANATOMY

// NPM PACKAGES AND ASSIGN EXPRESS TO A VARIABLE IN THIS CASE: app
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.type('text/plain');
  res.send("Hello world!");
})

app.listen(process.env.PORT || 3000);
