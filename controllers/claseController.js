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
            var clase = await claseModel.findOne({_id:req.params.id});
            if (!clase)
            {
                return res.json({status: "not_found", message: "Clase no encontrada", data: null});
            }
            res.status(200).json({status: "success", message: "Clase encontrada", data: clase});   
        }
        catch(err)
        {
            res.status(500).json({status: "error", message: "Error al crear la clase", data: null});
        }
          
    },

    crearClase: async function(req, res, next) {
        try{
            var clase = await claseModel.create({
                titulo: req.body.titulo,
                url: req.body.url,
                modulo: req.body.modulo,
                claseAnterior: req.body.claseAnterior,
                claseSiguiente: req.body.claseSiguiente,
            });
            res.status(200).json({status: "success", message: "Clase creada con exito", data: clase});
        }
        catch{
            res.status(500).json({status: "error", message: "Error al crear la clase", data: null});
        }
    },

    adjuntarClaseSiguiente: async function (req, res, next) {
        try{
            var claseActual = await claseModel.updateOne(
                { "_id": req.body.claseActual},
                { 
                    $set: 
                    {
                    "claseSiguiente":req.body.claseSiguiente
                    }
                }
            );

            var claseSiguiente = await claseModel.updateOne(
                { "_id": req.body.claseSiguiente},
                { 
                    $set: 
                    {
                    "claseAnterior":req.body.claseActual
                    }
                }
            );

            res.status(200).json({status: "success", message: "Clase siguiente adjuntada con exito", data: claseActual, claseSiguiente});
        }
        catch{
            res.status(500).json({status: "error", message: "Error al adjuntar la clase siguiente", data: null});
        }
    }
}
