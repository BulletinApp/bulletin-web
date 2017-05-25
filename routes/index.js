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
router.get('/event/:eventId', function(req,res){
    var eventId = req.params.eventId;
    models.BulletinEvent.findById(eventId).then(result => {
        if(result){
            res.render('event', {result});
        } else {
            res.render('error');
        }
    });
});

router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Nigguh'});
});

router.post('/register/submit', function(req, res, next) {
    var org_name = req.body.org_name,
        date_established = req.body.date_established,
        photo = req.body.photo,
        password = req.body.password,
        contact_person = req.body.contact_person,
        contact_number = req.body.contact_number,
        email = req.body.email,
        description = req.body.description;
    res.redirect('/login');
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Nigguh'});
});

router.get('/create-event', function(req, res, next) {
    res.render('create-event', { title: 'Nigguh'});
});

module.exports = router;
