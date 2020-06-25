var express = require('express');

// var router = express.Router();

var noticiaModel = require('../models/noticiaModel');



module.exports = {

    traerUna: async function(req, res, next) {
        try{
            var noticias = await noticiaModel.find({});
            res.status(200).json({status: "exito", message: "Se trajeron correctamente las noticias", data: noticias});
        }
        catch(err)
        {
            next(err);
        }  
    },
    guardar: async function(req, res, next) {
        try
        {
          var data = await noticiaModel.create({ 
              titulo: req.body.titulo,
              descripcion: req.body.descripcion,
              link: req.body.link,
              destacado: req.body.destacado
          });
          res.status(200).json({status: "success", message: "Noticia añadida con exito", data: data});
        }
        catch(err)
        {
          next(err)
        }
    }

    
}