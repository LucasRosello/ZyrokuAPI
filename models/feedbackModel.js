const mongoose = require('../bin/mongodb');
const Schema = mongoose.Schema;


var feedbackSchema = mongoose.Schema({
    mensaje:{
        type: String,
        required: [true, "El valor es obligatorio"],
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
        },
});


module.exports = mongoose.model('feedbackModel',feedbackSchema);