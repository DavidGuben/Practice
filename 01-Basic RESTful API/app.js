var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.type('text/plain');
})




// Rest APIs are made up of four different methods: GET, PUT, POST AND DELETE.

// API Scope: Create a RESTful api that allows you to get and post quotes.

var quotes = [
  {author:"Dick Cheny", text: "You got to spin around."},
  {author:"Mount Rushmore", text: "Nothing"},
  {author:"Peter Man", text: "I'm a man now Wendy!"},
  {author:"Rick", text: "You need to believe Morty."}
];

app.listen(process.env.PORT || 3000);

app.get('/', function(req, res){
  // Helper function that will return the res(ponse) in json format
  res.json(quotes);
});

// Route for a random quote
app.get('/quote/random', function(req, res){
  // First im creating a variable of the length of quotes randomized to display a random quote
  var id = Math.floor(Math.random() * quotes.length);
  // then i made a variable containing the quotes object with the randomizer above inside it to display a random quote
  var q = quotes[id];
  //finally used a helper function to send q in json format to the server.
  res.json(q);
});

// Route used to grab a single quote
app.get('/quote/:id', function(req, res) {
  if(quotes.length <= req.params.id || req.params.id < 0){
    res.statusCode = 404;
    return res.send('Error 404: No quotes found');
  }
  // inside the quotes array is access to the parameters of the route which is shown in the route name as ':id'
  // by using req.params.id it will pull whatever route that is after quote/ 'ie' quote/1 will pull the quote in the 2nd spot of the array
  var q = quotes[req.params.id];
  res.json(q);
});
