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
router.get('/serviciosagregar', function(req,res,next){
  res.render('serviciosa');
});

router.get('/schedule', function(req,res,next){
  res.render('schedule');
});

router.get('/schedule/unique', function(req,res,next){
  res.render('info_appointment');
});

router.get('/ninos', function(req,res,next){
  res.render('ninos');
});

router.get('/infoninos', function(req,res,next){
  res.render('infoninos');
});

router.get('/enroll-child', function(req,res,next){
  res.render('form_enroll_child');
});

router.get('/final-pricing', function(req,res,next){
  res.render('form_pricing_child');
});

module.exports = router;
