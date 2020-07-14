var express = require('express');
var router = express.Router();
var test = require('../controllers/test');

router.get('/', test.test);
router.post('/save', test.save);
router.get('/mail', test.mail);


module.exports = router;  