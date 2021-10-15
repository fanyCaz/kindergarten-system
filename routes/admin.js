var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
  res.render('index');
});

router.get('/login', function(req,res,next){
  res.render('login');
});

router.get('/servicios', function(req,res,next){
  res.render('servicios');
});

router.get('/schedule', function(req,res,next){
  res.render('schedule');
});

module.exports = router;
