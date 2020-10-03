const mongoose = require('../bin/mongodb');
const Schema = mongoose.Schema;


var premioSchema = mongoose.Schema({
    valor:{
        type: Number,
        trim: true,
        required: [true, "El valor es obligatorio"],
        minlength: [1,"Debe contener minimo 1 caracter"],
        maxlength: [2,"Debe contener maximo 2 caracteres"]
        },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario' 
        },
    clase:{ 
        type: Schema.Types.ObjectId,
        ref: 'Clase'
        },
    fecha:{
        type: Date,
        default: Date.now
        }

});


module.exports = mongoose.model('premio',premioSchema);