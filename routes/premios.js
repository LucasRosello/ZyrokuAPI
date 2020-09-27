var express = require('express');
var router = express.Router();
var premioController = require('../controllers/premioController');


/* Funciones */
router.get('/', premioController.traerPrecio);
router.post('/', premioController.crearPremio);


module.exports = router;  