const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

passport.use(
  new TwitterStrategy((token, tokenSecret, profile, callback) => {
    console.log(profile);
    return callback(null, profile);
  })
);
