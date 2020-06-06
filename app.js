var express = require('express');
var app = express();

/* Routers */

var test = require('./routes/test');


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/prueba', test);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
