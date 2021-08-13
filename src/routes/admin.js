var express = require('express');
var router = express.Router();
let {cargaProducts, editProducts, editForm }= require('../controllers/adminController')

/* GET home page. */
router.get('/cargaProducts',cargaProducts)

router.get('/editProducts', editProducts)
router.get('/edit', editForm)


module.exports = router;

