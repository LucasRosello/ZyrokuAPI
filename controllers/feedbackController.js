var express = require('express');
var feedbackModel = require('../models/feedbackModel');


module.exports = {

  crearFeedback: async function(req, res, next)
  {
    try {
        var data = await feedbackModel.create({
            mensaje: req.body.mensaje,
            usuario: req.body.usuario,
            clase: req.body.clase,
        });
  
        res.status(200).json({status: "success", message: "Feedback creado con exito", data: data});
    } catch(err) {
        res.status(500).json({status: "error", message: "Error al crear el feedback", data: err});
    }
  },
}
