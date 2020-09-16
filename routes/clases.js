var express = require('express');
var router = express.Router();
var claseController = require('../controllers/claseController');


/* Funciones */
router.get('/', claseController.traerClase);
router.get('/:id', claseController.traerClasePorId);
router.post('/',claseController.crearClase);



module.exports = router;  