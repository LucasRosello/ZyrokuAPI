var mongoose = require('mongoose');
//importa mongoose

mongoose.connect('mongodb://127.0.0.1:27017/zyroh', { useNewUrlParser: true, useUnifiedTopology: true }, function(error){
   if(error){
      throw error; 
   }else{
      console.log('Conectado a MongoDB');
   }
});


module.exports = mongoose; 