var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
  console.log("res");
});

router.get('/login', function(req,res,next){
  res.render('login');
});

router.get('/servicios', function(req,res,next){
  res.render('servicios');
});
router.get('/serviciosagregar', function(req,res,next){
  res.render('serviciosa');
});

router.get('/schedule', function(req,res,next){
  res.render('schedule');
});

module.exports = router;
