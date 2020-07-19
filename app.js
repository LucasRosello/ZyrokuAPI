var express = require('express');
var app = express();
var cors = require('cors')
var jwt = require('jsonwebtoken');

/* Routers */
var test = require('./routes/test');
var noticias = require('./routes/noticias');
var autenticacion = require('./routes/autenticacion');
var videos = require('./routes/videos');


/* Requires */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(logger('dev'));


/* Importo .env */
require('dotenv').config()
app.set('secretKey', process.env.SECRET_KEY)


/* Anti CORS */
app.use(cors())


/* Rutas */
app.use('/prueba', test);
app.use('/noticias', noticias);
app.use('/autenticacion', autenticacion);
app.use('/videos', validateUser, videos);


/* Validador De Usuarios */
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


/* Server */
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
