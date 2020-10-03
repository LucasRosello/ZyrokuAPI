const mongoose = require('../bin/mongodb');


var noticiaSchema = mongoose.Schema({
    titulo: { 
        type: String,
        trim: true,
        required: [true, "El titulo es obligatorio"],
        minlength: [2,"El titulo ingresado es muy corto"],
        maxlength: [200,"El titulo ingresado es muy largo"]
    },
    descripcion: { 
        type: String,
        trim: true,
        required: [true, "El titulo es obligatorio"],
        minlength: [2,"El titulo ingresado es muy corto"],
        maxlength: [200,"El titulo ingresado es muy largo"]
    },
    link:{
        type: String,
        trim: true,
        required: [true, "El titulo es obligatorio"],
        minlength: [2,"El titulo ingresado es muy corto"],
        maxlength: [200,"El titulo ingresado es muy largo"]
    },
    destacado:{
        type:Boolean,
        default: false
    }
});


module.exports = mongoose.model('noticia',noticiaSchema);