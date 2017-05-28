var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    models.BulletinEvent.findAll().then(events =>{

        res.render('index', { events });
    });
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

router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Nigguh'});
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Nigguh'});
});

router.get('/create-event', function(req, res, next) {
    res.render('create-event', { title: 'Nigguh'});
});

module.exports = router;
