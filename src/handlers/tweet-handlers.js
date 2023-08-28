const { Tweet } = require('../models/tweet');

const sendTweets = (req, res) => {
  const { tweets } = req.app;
  const tweetDetails = tweets.getTweetDetails();
  res.json(tweetDetails);
};

const addTweet = (req, res) => {
  const { tweets } = req.app;
  const { text } = req.body;
  const id = tweets.getNoOfTweets();
  const tweet = new Tweet(text, id);
  tweets.addTweet(tweet);

  res.status(201).json({ id });
};

const likeTweet = (req, res) => {
  const { tweets } = req.app;
  const id = +req.params.id;
  const likes = tweets.likeTweet(id);
  res.status(201).json({ likes });
};

const loggedInUser = (req, res) => {
  const path = `${process.env.PWD}/public/pages/login.html`;
  res.sendFile(path);
};

module.exports = { sendTweets, addTweet, likeTweet, loggedInUser };
