var express = require('express');
var router = express.Router();
const User = require('../modules/user');
const Contact = require('../modules/contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contacts' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.post('/register1', function(req, res, next) {
  //console.log(req.body);
  const { FirstName, LastName, Username, EmailAddress, Password } = req.body;
  const newUser = new User({displayName: FirstName + " " + LastName, username: Username, password: Password, emailAddress: EmailAddress});
  try {
    const user = newUser.save();
    res.status(200).json(user)
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
});

router.post('/login1', function(req, res, next) {
  //console.log(req.body);
  const { FirstName, LastName, Username, EmailAddress, Password } = req.body;
  User.find(function(err, user){
    if(err){
      console.error("Username or password incorrect.");
    }
    console.log(user);
  });
  
  
});

module.exports = router;
