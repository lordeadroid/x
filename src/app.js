const express = require('express');
const { logRequest } = require('./middlewares/logger');
const { sendTweets, addTweet } = require('./handlers/tweet-handlers');

const createApp = (tweets) => {
  const app = express();

  app.tweets = tweets;

  app.use(logRequest);
  app.use(express.json());

  app.get('/tweets', sendTweets);
  app.post('/tweets', addTweet);

  app.use(express.static('public'));

  return app;
};

module.exports = { createApp };
