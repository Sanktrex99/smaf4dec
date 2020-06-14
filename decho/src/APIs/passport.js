const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_APIKEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: 'http://localhost:4000/twitter/auth',
      includeEmail: true,
    },
    (token, tokenSecret, profile, done) => {
      console.log(profile);
    }
  )
);
server.use(passport.initialize());
// Redirect the user to Twitter for authentication.  When complete, Twitter
// will redirect the user back to the application at
//   /auth/twitter/callback
