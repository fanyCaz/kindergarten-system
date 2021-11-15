const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const clientController = require('../controllers/clientController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/formulariocita/:id', function(req, res, next) {
  res.render('formulariocita', {title: ' ',id:req.params.id});
});

router.post('/exito', clientController.sendForm);

router.get('/exito', function(req, res, next) {
  res.render('formulariocita_exito', {title: ' '});
});

router.get('/servicios', function(req, res, next) {
  res.render('servicios', {title: 'Servicios'});
});

router.get('/ninos', function(req, res, next) {
  res.render('ninos', {title: 'Niños'});
});

router.get('/infoninos', function(req, res, next) {
  res.render('infoninos', {title: 'Niños'});
});

router.get('/formulariocita', function(req, res, next) {
  res.render('formulariocita', {title: ' '});
});

router.get('/calendar', appointmentController.getPublicAppointments);

router.get('/contact', function(req, res, next) {
  res.render('contact');
})

module.exports = router;