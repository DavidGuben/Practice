var express = require('express');
var app = express();

app.use(express.bodyParser());

app.get('/', function(req, res){
  res.type('text/plain');
})

// Rest APIs are made up of four different methods: GET, PUT, POST AND DELETE.
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
  var id = Math.floor(Math.random() * quotes.length);
  var q = quotes[id];
  res.json(q);
});

// Route used to grab a single quote
app.get('/quote/:id', function(req, res) {
  if(quotes.length <= req.params.id || req.params.id < 0){
    res.statusCode = 404;
    return res.send('Error 404: No quotes found');
  }
  res.json(q);
});
