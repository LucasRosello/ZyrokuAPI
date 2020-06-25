var express = require('express');

// var router = express.Router();

//var testModel = require('../models/testModel');



module.exports = {

    traerUna: async function(req, res, next) {
        res.status(200).json({"hola":"adios"});
    }
    
}