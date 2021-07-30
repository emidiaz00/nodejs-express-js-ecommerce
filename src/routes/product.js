var express = require('express');
var router = express.Router();
let controller = require('../controllers/productController')

/* GET home page. */
router.get('/products', controller.index)
router.get('/products/:id', controller.product)

module.exports = router;
