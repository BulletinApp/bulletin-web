var express = require('express');
var models = require('../models');
var passport = require('passport');
var passportLocal = require('passport-local');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
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
  models.BulletinEvent.findAll({where:{id:req.user.id}}).then(data => {
    result = {
      name:req.user.name,
      data:data
    }
    console.log(result);
    res.render('events', {result});
  });
});

router.get('/register/:status', function(req, res, next) {
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

    models.Organization.findOrCreate({
        where: {
            email: email
        },
        defaults: {
            name: org_name,
            logo: logo,
            coverphoto: coverphoto,
            established: date_established,
            contactDetails: contact_number,
            contactPerson: contact_person,
            description: description,
            password: password
        }
    }).spread(function (organization, created) {
        console.log(organization.dataValues);
        if(created) {
            res.redirect('/login');
        } else {
            res.redirect('/register/email-error');
        }
    });
});

router.get('/login', function(req, res, next) {
    res.render('login', { message: req.flash('message')});
});

router.get('/create-event', function(req, res, next) {
    res.render('create-event', { title: 'Nigguh'});
});

//passport things
passport.use(new LocalStrategy({passReqToCallback:true},
  function(req,username, password, done) {
    console.log(username);
    var isValidPassword = function(userpass, password) {
      console.log(bcrypt.hashSync(userpass));
      return bcrypt.compareSync(password,userpass);
    }
    models.Organization.findOne({where:{ email: username }}).then(
      function (user) {
        console.log("from database user:"+user);
        if (!user) {
          console.log("incorrect username")
          return done(null, false, req.flash('message',"User does not exist."));
        }
        if (!isValidPassword(user.password,password)) {
          console.log("incorrect password")
          return done(null, false, req.flash('message',"Incorrect password."));
        }
        var userinfo = user.get();
        console.log("success"+user);
        return done(null, userinfo);
    }).catch(
      function(err) {
          console.log("Error:", err);
          return done(null, false, {message: 'Something went wrong with your Signin'});
      });
  }
));
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    models.Organization.findById(id).then(function(user) {
        if (user) {
            done(null, user.get());
        } else {
            done(user.errors, null);
        }
    });
});
router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/events',
    failureRedirect: '/login',
    failureFlash: true
   })
);
router.get('/logout', function(req, res, next) {
  req.logout();
  res.render('logout');
});

module.exports = router;
