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

//CITAS

router.get('/schedule', appointmentController.showCalendar);

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

router.post('/modify-child',
    childController.modifyChild
);

router.post('/cancel-child',
    childController.cancelarChild
);

router.post('/add-child-cotization/',
  childController.addCotization
);

//SERVICIOS

router.post('/add-service',
  servController.addService
);

router.post('/modify-service',
    servController.modifyService
);

router.post('/delete-service',
    servController.deleteService
);

router.get('/servicios', servController.findServices);

router.get('/serviciosagregar', function(req,res,next){
  if(req.isAuthenticated()) return next();
  res.redirect("/admin/login");
},function(req,res,next){
  res.render('serviciosa');
});

router.get('/modificar-serv/:id', servController.findServToEdit);

router.get('/borrar-serv/:id', servController.findServToDelete);

module.exports = router;
