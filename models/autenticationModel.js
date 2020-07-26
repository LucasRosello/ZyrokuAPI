const mongoose = require('../bin/mongodb');
const bcrypt = require('bcrypt');


var UsuarioSchema = mongoose.Schema({
    nombre: String,
    usuario: {
        type: String,
        required: true
    },
    password:{
        type: String,
        trim: true,
        required: true
    }
})

UsuarioSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

module.exports = mongoose.model('usuarios', UsuarioSchema)