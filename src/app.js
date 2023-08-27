const express = require('express');
const { logRequest } = require('./middlewares/logger');
const { sendTweets, addTweet } = require('./handlers/tweet-handlers');

const createApp = (tweetManager) => {
  const app = express();

  app.tweetManager = tweetManager;

  app.use(logRequest);
  app.use(express.json());

  app.get('/tweets', sendTweets);
  app.post('/tweets', addTweet);

  app.use(express.static('public'));

  return app;
};

module.exports = { createApp };
