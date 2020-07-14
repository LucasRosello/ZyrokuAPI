var mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/zyroh', { useNewUrlParser: true, useUnifiedTopology: true }, function(error){
   if(error){
      console.log("\x1b[31mHubo un error conectandose a la base de datos. Asegurese de que la instancia se encuentra levantada.\x1b[0m")
   }else{
      console.log('Conectado a MongoDB');
   }
});


module.exports = mongoose;