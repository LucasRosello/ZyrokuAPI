var express = require('express');
var router = express.Router();
var autenticacion = require('../controllers/autenticacionController');


/* Funciones */
router.post('/registrar', autenticacion.registrar)
router.post('/loguear', autenticacion.loguear)
router.post('/cambiarPass', autenticacion.cambiarPass)

module.exports = router;
