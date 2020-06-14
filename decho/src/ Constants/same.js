// export constantTwitter = -"nnne sjsokgsdk"
const Twit = require('twit');

const twitterAccess = new Twit({
  consumer_key: process.env.REACT_APP_APIKEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

exports.twitterAccess = twitterAccess;
