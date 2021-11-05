const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

<<<<<<< HEAD
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

=======
>>>>>>> 0bd256802f62d09c9f6153063112dd7a95f501f9
module.exports = router;