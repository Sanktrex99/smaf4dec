var passport = require('passport'),
  TwitterStrategy = require('passport-twitter').Strategy;

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_APIKEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: 'http:localhost:4000/auth/twitter/callback',
      includeEmail: true,
    },
    (token, tokenSecret, profile, done) => {
      // User.findOrCreate({ twitterId: profile.id }, function (err, user) {
      //   if (err) {
      //     return done(err);
      //   }
      //   done(null, user);
      // });
    }
  )
);
// Redirect the user to Twitter for authentication.  When complete, Twitter
// will redirect the user back to the application at
//   /auth/twitter/callback
app.get('/auth/twitter', passport.authenticate('twitter'));

// Twitter will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', { successRedirect: '/', failureRedirect: '/login' })
);
