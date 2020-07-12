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
        var usuario = await autenticacionModel.findOne({usuario: req.body.usuario});
            if(usuario){
                if(bcrypt.compareSync(req.body.password, usuario.password)){
                    const token = jwt.sign({id: usuario._id}, req.app.get('secretKey'), {expiresIn: '1h'});
                    console.log(token, usuario)
                    res.status(200).json({status: "success", message: "Usuario encontrado", data: {user: usuario, token: token}});
                }
                else{
                    res.status(500).json({status: "wrong_password", message: "Contraseña incorrecta", data: null});
                }
            }
            else{
                res.status(404).json({status: "not_found", message: "Usuario no encontrado", data: null});
            }

    },

}