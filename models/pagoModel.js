const mongoose = require('../bin/mongodb');
const Schema = mongoose.Schema;


var pagoSchema = mongoose.Schema({
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario' 
        },
    fecha:{
        type: Date,
        default: Date.now,
        },
    precio:{
        type: Number,
    },
    idReferencia:{
        type: String,
    },
});



module.exports = mongoose.model('pago',pagoSchema);