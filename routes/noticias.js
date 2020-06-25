var express = require('express');
var router = express.Router();
var noticiaController = require('../controllers/noticiaController');


router.get('/', noticiaController.traerUna);
router.post('/guardar', noticiaController.guardar);
// router.post('/login', autentication.login);
// router.get('/confirm/:userId', autentication.confirm);
//router.put('/update/:userId', autentication.update);

module.exports = router;  