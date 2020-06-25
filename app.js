var express = require('express');
var app = express();

/* Routers */
var test = require('./routes/test');
var noticias = require('./routes/noticias');


//REQUIRES, PONELE
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//app.use(pdf);

/* ANTI CORS */
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PUT');
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/prueba', test);
app.use('/noticias', noticias);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
