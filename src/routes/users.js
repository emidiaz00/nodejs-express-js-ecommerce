var express = require('express');
var router = express.Router();
let controller = require('../controllers/userController')

/* GET home page. */
router.get('/', controller.index)
router.get('/register', controller.register)
router.get('/shop', controller.finishBuy)


module.exports = router;
