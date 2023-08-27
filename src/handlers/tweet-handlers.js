const { Tweet } = require('../models/tweet');

const sendTweets = (req, res) => {
  const { tweetManager } = req.app;
  const tweetDetails = tweetManager.getTweetDetails();
  res.json(tweetDetails);
};

const addTweet = (req, res) => {
  const { tweetManager } = req.app;
  const { message } = req.body;
  const tweet = new Tweet(message);
  tweetManager.addTweet(tweet);
  res.end();
};

module.exports = { sendTweets, addTweet };
