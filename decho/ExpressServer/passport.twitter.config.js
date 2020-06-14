require('dotenv').config();
const PORT = 3002;
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_APIKEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: 'http://localhost:4000/twitter/auth/callback',
      includeEmail: true,
    },
    (token, tokenSecret, profile, callback) => {
      console.log(profile);
      return callback(null, profile);
    }
  )
);
// server.use(passport.initialize());

passport.serializeUser(function (user, callback) {
  callback(null, user);
});

passport.deserializeUser(function (obj, callback) {
  callback(null, obj);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: process.env.SECRET, resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

//

app.get('/', function (req, res) {
  res.render('index.jade');
});
// , { user: req.user

app.get('/twitter/auth/callback', passport.authenticate('twitter'));

app.get(
  '/twitter/auth/callback',
  passport.authenticate('twitter', {
    failureRedirect: '/',
  }),
  function (req, res) {
    res.redirect('/');
  }
);
app.listen(PORT, () => console.log(`Example expressServer listening to ${process.env.SECRET}on port ${PORT}!`));

module.exports = app;

//configure passport
//confirgure express
