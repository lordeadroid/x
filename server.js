/* eslint-disable no-console */

const { createApp } = require('./src/app');
const { TweetManager } = require('./src/models/tweet-manager');

const main = () => {
  const tweetManager = new TweetManager();
  const app = createApp(tweetManager);

  const PORT = 8000;
  app.listen(PORT, () => {
    const TIME = new Date().toTimeString();
    console.log('Listening on PORT:', PORT, TIME);
  });
};

main();
