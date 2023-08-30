/* eslint-disable no-console */

const { createApp } = require('./src/app');
const { Tweets } = require('./src/models/tweets');
const { readFile } = require('fs');

const setupServer = (tweets, usersCredentials) => {
  const app = createApp(tweets, usersCredentials);

  const PORT = 8000;
  app.listen(PORT, () => {
    const TIME = new Date().toTimeString();
    console.log('Listening on PORT:', PORT, TIME);
    console.log(`http://localhost:${PORT}`);
  });
};

const main = () => {
  const tweets = new Tweets();
  readFile('./users-credentials.json', 'utf-8', (_, content) => {
    const usersCredentials = JSON.parse(content);
    setupServer(tweets, usersCredentials);
  });
};

main();
