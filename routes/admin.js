var express = require('express');
var router = express.Router();
const childController = require('../controllers/childController');
var axios = require('axios')

router.get('/', function(req,res,next){
  res.render('index');
});

router.get('/login', function(req,res,next){
    res.render('login');
});

router.post('/login', function(req,res,next){
  
});

router.get('/servicios', function(req,res,next){
  res.render('servicios');
});

router.get('/serviciosagregar', function(req,res,next){
  //declarar variables en la vista
  // res.render('serviciosa');
});

router.get('/schedule', function(req,res,next){
  res.render('schedule');
});

router.get('/schedule/unique', function(req,res,next){
  res.render('info_appointment');
});

//NIÑOS

router.get('/ninos', function(req,res,next){
  res.render('ninos');
});

router.get('/infoninos', function(req,res,next){
  res.render('infoninos');
});

router.get('/enroll-child', function(req,res,next){
  let servicesOptions = [1,2,3,4,5];
  let todaysDate = new Date;
  res.render('form_enroll_child', {
    servicesOptions: servicesOptions,
    todaysDate: todaysDate
  });
});

router.get('/final-pricing/:id', function(req,res,next){
  res.render('form_pricing_child');
});

router.post('/add-child',
  childController.addChild
);

router.post('/add-child-cotization/',
  childController.addCotization
);

module.exports = router;
