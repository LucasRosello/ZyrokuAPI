var express = require('express');
var router = express.Router();
var claseController = require('../controllers/claseController');


/* Funciones */
router.get('/:id', claseController.traerClase);
router.post('/',claseController.crearClase);



module.exports = router;  