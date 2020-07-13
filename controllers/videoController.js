var express = require('express');
var transporter = require('../bin/email')
// var router = express.Router();

var testModel = require('../models/testModel');


module.exports = {

    traerVideo: async function(req, res, next) {
        res.status(200).json({status: "exito", message: "WIP", data: null});
    }
}
