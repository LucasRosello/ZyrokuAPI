const mongoose = require('../bin/mongodb');
const Schema = mongoose.Schema;


var ClaseSchema = mongoose.Schema({
    titulo: { 
        type: String,
        trim: true,
        required: [true, "El nombre es obligatorio"],
        minlength: [2,"El telefono ingresado no es valido"],
        maxlength: [20,"El telefono ingresado no es valido"]
        },
    url:{
        type: String,
        trim: true,
        required: [true, "La URL es obligatoria"],
        },
    modulo:{
        type: String,
        trim: true,
        required: [true, "El modulo es obligatorio"],
    },
    claseAnterior:{
        type: Schema.Types.ObjectId,
        ref: 'Clase' 
        },
    claseSiguiente:{ 
        type: Schema.Types.ObjectId,
        ref: 'Clase'
        }
});


module.exports = mongoose.model('clase',ClaseSchema);