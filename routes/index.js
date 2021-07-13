var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */


/* router.get('/footer', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/footer.html'))
}) */

/* router.get('/login', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/login.html'))
}) */

router.get('/register', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/register.html'))
})

router.get('/productDetail', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/productDetail.html'))
})

router.get('/productCart', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/productCart.html'))
})
router.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/index.html'))
})
router.get('/product', function(req, res, next){
  res.sendFile(path.join(__dirname,'.././views/generalProduct.html'))
})



module.exports = router;
