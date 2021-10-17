const express = require('express');
const router = express.Router();

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

module.exports = router;