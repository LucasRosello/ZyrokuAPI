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
        console.log("peticion de login recibida")
        try{
            var usuario = await autenticacionModel.findOne({usuario: req.body.usuario});
            if(usuario){
                if(bcrypt.compareSync(req.body.password, usuario.password)){
                    const token = jwt.sign({id: usuario._id}, req.app.get('secretKey'), {expiresIn: '1h'});
                    res.status(200).json({status: "success", message: "Usuario encontrado", data: {token: token}});
                }
                else{
                    res.json({status: "wrong_password", message: "Contraseña incorrecta", data: null});
                    //res.status(401).json({status: "wrong_password", message: "Contraseña incorrecta", data: null});
                    
                }
            }
            else{
                res.json({status: "not_found", message: "Usuario no encontrado", data: null});
                //res.status(404).json({status: "not_found", message: "Usuario no encontrado", data: null});
            }
        }
        catch{
            res.status(500).json({status: "error", message: "Error Fatal", data: null});
        }
    },

    generarRecuperacionPassword: async function(req, res, next){
        //mandar mail con token?

    },

    cambiarPass: async function(req, res, next){
        var usuario = await autenticacionModel.updateOne(
            {usuario: req.body.usuario},
            { $set: {"password": bcrypt.hashSync(req.body.nuevaPass, 10)}}
        );
        res.status(200).json({status: "success", message: "Contraseña cambiada con exito", data: usuario});
    }
}