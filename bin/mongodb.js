var mongoose = require('mongoose');
//importa mongoose

mongoose.connect('mongodb://localhost', { useNewUrlParser: true, useUnifiedTopology: true }, function(error){
   if(error){
      throw error; 
   }else{
      console.log('Conectado a MongoDB');
   }
});


module.exports = mongoose; 