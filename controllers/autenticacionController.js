var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
//var autenticacionModel = require("ruta")
const jwt = require('jsonwebtoken');


module.exports = {
    registrar: async function(req, res, next){
        res.status(200).json({status: "success", message: "work in progress, registrar", data: null});

    },
    loguear: async function(req, res, next){
        res.status(200).json({status: "success", message: "work in progress, loguear", data: null});

    },

}