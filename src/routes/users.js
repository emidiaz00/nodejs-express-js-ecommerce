var express = require('express');
var router = express.Router();
let {index , register, finishBuy }= require('../controllers/userController')

/* GET home page. */
router.get('/', index)
router.get('/register', register)
router.get('/shop', finishBuy)




module.exports = router;
