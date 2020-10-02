const mongoose = require('../bin/mongodb');
const bcrypt = require('bcrypt');


var UsuarioSchema = mongoose.Schema({
    nombre: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'El email es obligatorio',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Porfavor ingrese un email valido']
    },
    password:{
        type: String,
        trim: true,
        required: true
    },
})

UsuarioSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

module.exports = mongoose.model('usuarios', UsuarioSchema)