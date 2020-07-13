var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');

/* Routers */
var test = require('./routes/test');
var noticias = require('./routes/noticias');
var autenticacion = require('./routes/autenticacion');
var videos = require('./routes/videos');


//REQUIRES, PONELE
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//app.use(pdf);

require('dotenv').config()
//Importo el .env
app.set('secretKey', process.env.SECRET_KEY)

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
app.use('/autenticacion', autenticacion);
app.use('/videos', validateUser, videos);


function validateUser(req, res, next){
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded){
    if(err){
      res.json({status:"error", message: err.message, data: null});
    }
    else
    {
      req.body.userId = decoded.id;
      next();
    }
  });
}


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
