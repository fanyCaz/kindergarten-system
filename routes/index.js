const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/servicios', function(req, res, next) {
  res.render('servicios', {title: 'Servicios'});
});

module.exports = router;