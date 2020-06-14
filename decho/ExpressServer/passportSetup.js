const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

passport.use(
  new TwitterStrategy(
    {
      consumerKey: 'S9QzCPkMeFOJLehVG6b2FnGC3',
      consumerSecret: 'AOQLQ9TCYIYdCUWd65MlasuXNtc9TM3tB8n0s3vFgNq9ZCJf7e',
      callbackURL: 'http://localhost:5000/auth/twitter/callback',
      includeEmail: true,
    },
    (token, tokenSecret, profile, callback) => {
      console.log(profile);
      return callback(null, profile);
    }
  )
);
