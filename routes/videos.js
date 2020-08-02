var express = require('express');
var router = express.Router();
var videoController = require('../controllers/videoController');


/* Funciones */
router.get('/:id', videoController.traerVideo);


module.exports = router;  