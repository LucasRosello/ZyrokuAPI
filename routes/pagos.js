var express = require('express');
var router = express.Router();
var pagoController = require('../controllers//pagoController');


/* Funciones */
router.post('/', pagoController.crearPago);


module.exports = router;  