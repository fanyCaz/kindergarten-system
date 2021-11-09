var express = require('express');
var router = express.Router();
const childController = require('../controllers/childController');
const servController = require('../controllers/servController');
const appointmentController = require('../controllers/appointmentController');
var axios = require('axios')

router.get('/', function(req,res,next){
  res.redirect("/admin/login");
});

router.get('/login', function(req,res,next){
    res.render('login');
});

router.get('/servicios', function(req,res,next){
  if(req.isAuthenticated()) return next();
  res.redirect("/admin/login");
}, function(req,res,next){
  res.render('servicios');
});

router.get('/serviciosagregar', function(req,res,next){
  if(req.isAuthenticated()) return next();
  res.redirect("/admin/login");
},function(req,res,next){
  res.render('serviciosa');
});

//CITAS

router.get('/schedule', function(req,res,next){
  //if(req.isAuthenticated()) return next();
  //res.redirect("/admin/login");
//}, function(req,res,next){
  res.render('schedule');
});

router.get('/schedule/unique', function(req,res,next){
  if(req.isAuthenticated()) return next();
  res.redirect("/admin/login");
}, function(req,res,next){
  res.render('info_appointment');
});

router.post('/add-appointment', appointmentController.addAppointment);

//NIÑOS

router.get('/ninos', childController.findChildren);

router.get('/modificar-nino/:id', childController.findChildToEdit);

router.get('/info-nino/:id', childController.findChild);

router.get('/enroll-child', function(req,res,next){
  if(req.isAuthenticated()) return next();
  res.redirect("/admin/login");
}, function(req,res,next){
  let servicesOptions = [1,2,3,4,5];
  let todaysDate = new Date;
  res.render('form_enroll_child', {
    servicesOptions: servicesOptions,
    todaysDate: todaysDate
  });
});

router.get('/final-pricing/:id', function(req,res,next){
  if(req.isAuthenticated()) return next();
  res.redirect("/admin/login");
}, function(req,res,next){
  res.render('form_pricing_child');
});

router.post('/add-child',
  childController.addChild
);


router.post('/add-service',
  servController.addService
);

router.post('/modify-child',
    childController.modifyChild
);

router.post('/add-child-cotization/',
  childController.addCotization
);

module.exports = router;
