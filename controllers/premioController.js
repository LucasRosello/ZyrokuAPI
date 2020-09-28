var express = require('express');
var premioModel = require('../models/premioModel');
var claseModel = require('../models/claseModel');


module.exports = {

    traerPrecio: async function(req, res, next) {
        /*
        Traigo todos los premios correspondientes a los ultimos (hoy - ultimoDiaDePaga) dias y hago:

        var precioConDescuento = req.app.get("precio") - sumaDePremios;
        return precioConDescuento;
        */
        res.status(200).json({status: "exito", message: "Se trajeron correctamente las noticias", data: 200});
    },

    crearPremio: async function(req, res, next) {
        try {
            if(!req.body.clase){
                return res.status(400).json({status: "error", message: "La clase es obligatoria", data: null});
            }

            var clase = await claseModel.findOne({_id:req.body.clase});
            if (!clase)
            {
                return res.json({status: "not_found", message: "Esa clase no existe", data: null});
            }

            var premio = await premioModel.findOne({clase:req.body.clase});
            if(premio){
                return res.json({status: "error", message: "Ya existe un premio para esa clase", data: null});
            }
            
            const valor = Math.floor(Math.random() * (50 - 10) + 10);

            var data = await premioModel.create({ 
                valor: valor,
                usuario: req.body.userId,
                clase: req.body.clase,
            });

            res.status(200).json({status: "exito", message: "Se creo correctamente el premio", data: data});
        } catch {
            res.status(500).json({status: "error", message: "Error al crear el premio", data: error});
        }
    },

}