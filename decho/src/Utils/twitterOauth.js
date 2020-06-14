setup_twitter_oauth(
  process.env.TWITTER_APIKEY,
  process.env.TWITTER_CONSUMER_SECRET,
  process.env.TWITTER_ACCESS_TOKEN,
  process.env.TWITTER_ACCESS_TOKEN_SECRET
);
searchTwitter('#aoc', (n = 100), (lang = 'en'));
