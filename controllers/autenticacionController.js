var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var autenticacionModel = require("../models/autenticationModel")
const jwt = require('jsonwebtoken');



module.exports = {
    registrar: async function(req, res, next){
        try{
            var datos = await autenticacionModel.create({
                nombre: req.body.nombre,
                usuario: req.body.usuario,
                password: req.body.password
            });
            res.status(200).json({status: "success", message: "Usuario registrado con exito", data: datos});
        }
        catch{
            res.status(500).json({status: "error", message: "Error al registrar", data: null});
        }
    },
    loguear: async function(req, res, next){
        res.status(200).json({status: "success", message: "work in progress, loguear", data: null});

    },

}