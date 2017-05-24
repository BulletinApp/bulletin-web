var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/profile', function(req, res, next) {
    res.render('profile', { title: 'Nigguh'});
});

router.get('/events', function(req, res, next) {
  models.BulletinEvent.findAll().then(result => {
    console.log(result);
    res.render('events', {result});
  });
});

module.exports = router;
