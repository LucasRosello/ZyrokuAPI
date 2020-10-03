var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var autenticacionModel = require("../models/autenticationModel")
const jwt = require('jsonwebtoken');



module.exports = {

    registrar: async function(req, res, next){
        try{
            if(!req.body.email){
                return res.json({status: "error", message: "El email es obligario", data: null});
            }

            if(!req.body.password){
                return res.json({status: "error", message: "La contraseña es obligatoria", data: null});
            }

            var datos = await autenticacionModel.create({
                nombre: req.body.nombre,
                email: req.body.email,
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
            var usuario = await autenticacionModel.findOne({email: req.body.email});

            if(!usuario){
                return res.json({status: "not_found", message: "Usuario no encontrado", data: null});
            }
            
            if(bcrypt.compareSync(req.body.password, usuario.password)){
                const token = jwt.sign({id: usuario._id}, req.app.get('secretKey'), {expiresIn: '1h'});
                res.status(200).json({status: "success", message: "Usuario encontrado", data: {token: token, usuario:usuario}});
            }
            else{
                res.json({status: "wrong_password", message: "Contraseña incorrecta", data: null});
            }   
        }
        catch{
            res.status(500).json({status: "error", message: "Error Fatal", data: null});
        }
    },

    generarCambioPassword: async function(req, res, next){
        //mandar mail con token
        var usuario = await autenticacionModel.findOne({email: req.body.email});

        if(!usuario){
            return res.json({status: "not_found", message: "Usuario no encontrado", data: null});
        }

        const token = jwt.sign({id: usuario._id}, req.app.get('secretKey'), {expiresIn: '1h'});

        res.status(200).json({status: "success", message: "Cambio de contraseña generado con exito", data: "http://localhost:4200/unaRuta/"+token});
    },

    cambiarPass: async function(req, res, next){

        jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), async function (err, decoded){

            if(err){
              res.json({status:"error", message: err.message, data: null});
            }
            else
            {
                var usuario = await autenticacionModel.updateOne(
                    {_id: decoded.id},
                    { $set: {"password": bcrypt.hashSync(req.body.nuevaPass, 10)}}
                );
                    
                res.status(200).json({status: "success", message: "Contraseña cambiada con exito", data: usuario});
            }

        });
   
    }
}