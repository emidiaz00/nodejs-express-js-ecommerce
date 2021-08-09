var express = require('express');
var router = express.Router();
let controller = require('../controllers/userController')

/* GET home page. */
router.get('/', controller.index)
router.get('/register', controller.register)
router.get('/shop', controller.finishBuy)
router.get('/about', controller.about)
router.get('/cargaProducts', controller.cargaProducts)


module.exports = router;
