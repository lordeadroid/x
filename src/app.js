const express = require('express');
const { logRequest } = require('./middlewares/logger');

const createApp = () => {
  const app = express();

  app.use(logRequest);
  app.use(express.json());
  app.use(express.static('public'));

  return app;
};

module.exports = { createApp };
