var express = require('express');
var router = express.Router();
var feedbackController = require('../controllers/feedbackController');


/* Funciones */
router.post('/', feedbackController.crearFeedback);


module.exports = router;  