var express = require('express');
var router = express.Router();
var test = require('../controllers/test');

router.get('/', test.test);
router.post('/save', test.save);
// router.post('/login', autentication.login);
// router.get('/confirm/:userId', autentication.confirm);
//router.put('/update/:userId', autentication.update);

module.exports = router;  