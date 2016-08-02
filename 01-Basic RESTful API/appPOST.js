app.post('/quote', function(req, res) {
  if(!req.body.hasOwnProperty('author') ||
     !req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }

var newQuote = {
    author : req.body.author,
    text : req.body.text
  };

quotes.push(newQuote);
  res.json(true);
});
