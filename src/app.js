const express = require('express');
const { logRequest } = require('./middlewares/logger');

const {
  sendTweets,
  addTweet,
  likeTweet,
} = require('./handlers/tweet-handlers');

const {
  loginUser,
  checkLoginStatus,
  parseCookie,
  authenticateUser,
  serveHomePage,
  logoutUser,
} = require('./handlers/authentication-handlers');

const addMiddleware = (app) => {
  app.use(logRequest);
  app.use(parseCookie);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

const addAuthenticators = (app) => {
  app.get('/login-status', checkLoginStatus);
  app.get('/login', loginUser);
  app.post('/login', authenticateUser);
  app.post('/logout', logoutUser);
};

const createApp = (tweets, usersCredentials) => {
  const app = express();
  app.tweets = tweets;
  app.usersCredentials = usersCredentials;

  addMiddleware(app);
  addAuthenticators(app);

  app.get('/', serveHomePage);
  app.get('/tweets', sendTweets);
  app.post('/tweets', addTweet);
  app.patch('/tweets/:id', likeTweet);

  app.use(express.static('public'));

  return app;
};

module.exports = { createApp };
