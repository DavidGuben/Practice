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

app.delete('/quote/:id', function(req, res) {
  if(quotes.length <= req.params.id) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }

quotes.splice(req.params.id, 1);
  res.json(true);
});
