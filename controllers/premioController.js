var express = require('express');
var premioModel = require('../models/premioModel');


module.exports = {

    traerPrecio: async function(req, res, next) {
        res.status(200).json({status: "exito", message: "Se trajeron correctamente las noticias", data: 200});
    },

    crearPremio: async function(req, res, next) {
        try {
            // if(!req.body.token){ error }
            // Recibo el token y del token saco el usuario
            const usuario = "5f61013a934e5c549243f04e" 
            /* HARDCODED */ 
            
            if(!req.body.clase){
                return res.status(400).json({status: "error", message: "la clase es obligatoria", data: null});
            }
            
            const valor = Math.floor(Math.random() * (50 - 10) + 10);

            var data = await premioModel.create({ 
                valor: valor,
                usuario: usuario,
                clase: req.body.clase,
            });

            res.status(200).json({status: "exito", message: "Se creo correctamente el premio", data: data});
        } catch {
            res.status(500).json({status: "error", message: "Error al crear el premio", data: null});
        }
    },

}