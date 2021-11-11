const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/calendar', appointmentController.getPublicAppointments);

module.exports = router;