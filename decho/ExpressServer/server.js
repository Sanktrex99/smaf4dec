require('dotenv').config();
const express = require('express');
const expressServer = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const PORT = 3002;

const initializePassport = require('../ExpressServer/passport.config.js');
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

const users = [];

expressServer.set('view-engine', 'ejs');
expressServer.use(express.urlencoded({ extended: false }));
expressServer.use(flash());
expressServer.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
expressServer.use(passport.initialize());
expressServer.use(passport.session());
expressServer.use(methodOverride('_method'));

expressServer.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs', { name: req.user.name });
});

expressServer.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs');
});

expressServer.post(
  '/login',
  checkNotAuthenticated,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  })
);
expressServer.get('/twitter/auth', passport.authenticate('twitter'));
expressServer.get(
  '/twitter/auth',
  passport.authenticate('twitter', {
    failureRedirect: '/',
  }),
  function (req, res) {
    res.redirect('/');
  }
);

expressServer.post(
  '/login',
  checkNotAuthenticated,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  })
);

expressServer.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs');
});

expressServer.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(users);
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }
});

expressServer.delete('/logout', (req, res) => {
  req.logOut();
  res.redirect('/login');
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  next();
}

expressServer.listen(PORT, () =>
  console.log(`Example expressServer listening to ${process.env.SECRET}on port ${PORT}!`)
);
