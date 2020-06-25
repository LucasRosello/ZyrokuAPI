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


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/prueba', test);
app.use('/noticias', noticias);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
