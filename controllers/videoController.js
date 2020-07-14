var express = require('express');
var transporter = require('../bin/email')
var videoModel = require('../models/videoModel');


module.exports = {

    traerVideo: async function(req, res, next) {
        res.status(200).json({status: "exito", message: "WIP", data: null});
    }
}
