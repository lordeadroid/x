const { Tweet } = require('../models/tweet');

const sendTweets = (req, res) => {
  const { tweets } = req.app;
  const tweetDetails = tweets.getTweetDetails();
  res.json(tweetDetails);
};

const addTweet = (req, res) => {
  const { tweets } = req.app;
  const { message } = req.body;
  const tweet = new Tweet(message);
  tweets.addTweet(tweet);
  res.end();
};

module.exports = { sendTweets, addTweet };
