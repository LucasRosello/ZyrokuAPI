const mongoose = require('../bin/mongodb');


var VideoSchema = mongoose.Schema({
    title: { 
        type: String,
        trim: true,
        required: [true, "El nombre es obligatorio"],
        minlength: [2,"El telefono ingresado no es valido"],
        maxlength: [20,"El telefono ingresado no es valido"]
        }
});


module.exports = mongoose.model('video',VideoSchema);