var express = require('express');
var router = express.Router();
let {index , about }= require('../controllers/indexController')

/* GET home page. */
router.get('/', index)
router.get('/about',about)

module.exports = router;
