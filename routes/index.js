const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
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

module.exports = router;