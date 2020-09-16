var express = require('express');
var transporter = require('../bin/email')
var claseModel = require('../models/claseModel');


module.exports = {

    traerClase: async function(req, res, next) {
        res.status(200).json({status: "exito", message: "WIP", data: {"clase":"5f6260ee325f5b4743fa7d38"}});
    },

    traerClasePorId: async function(req, res, next) {
        try
        {
            var clase = await claseModel.findOne({_id:"5f6260ee325f5b4743fa7d38"});
            if (!clase)
            {
                res.json({status: "not_found", message: "Clase no encontrada", data: null});
            }
            res.status(200).json({status: "success", message: "Clase encontrada", data: {clase}});   
        }
        catch(err)
        {
           next(err);
        }
          
    },

    crearClase: async function(req, res, next) {
        try{
            var datos = await claseModel.create({
                titulo: req.body.titulo,
                url: req.body.url,
                modulo: req.body.modulo,
                claseAnterior: req.body.claseAnterior,
                claseSiguiente: req.body.claseSiguiente,
            });
            res.status(200).json({status: "success", message: "Clase creada con exito", data: datos});
        }
        catch{
            res.status(500).json({status: "error", message: "Error al crear la clase", data: null});
        }
    },
}
