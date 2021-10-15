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

router.get('/ninos', function(req,res,next){
  res.render('ninos');
});

router.get('/infoninos', function(req,res,next){
  res.render('infoninos');
});

module.exports = router;
