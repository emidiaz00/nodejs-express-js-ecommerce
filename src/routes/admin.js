var express = require('express');
var router = express.Router();
let {cargaProducts, editProducts }= require('../controllers/adminController')

/* GET home page. */
router.get('/cargaProducts',cargaProducts)
router.get('/editProducts', editProducts)


module.exports = router;

