const { Tweet } = require('../models/tweet');

const sendTweets = (req, res) => {
  const { tweets } = req.app;
  const tweetDetails = tweets.getTweetDetails();
  res.json(tweetDetails);
};

const addTweet = (req, res) => {
  const { tweets } = req.app;
  const { text } = req.body;
  const { username } = req.cookies;
  const id = tweets.getNoOfTweets();
  const tweet = new Tweet(text, id, username);
  tweets.addTweet(tweet);

  res.status(201).json({ id, username });
};

const likeTweet = (req, res) => {
  const { tweets } = req.app;
  const id = +req.params.id;
  const likes = tweets.likeTweet(id);
  res.status(201).json({ likes });
};

const loggedInUser = (req, res) => {
  const path = 'login.html';
  const root = 'public/pages';

  res.sendFile(path, { root });
};

module.exports = { sendTweets, addTweet, likeTweet, loggedInUser };
