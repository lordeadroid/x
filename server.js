/* eslint-disable no-console */

const { createApp } = require('./src/app');
const { Tweets } = require('./src/models/tweets');

const main = () => {
  const tweets = new Tweets();
  const app = createApp(tweets);

  const PORT = 8000;
  app.listen(PORT, () => {
    const TIME = new Date().toTimeString();
    console.log('Listening on PORT:', PORT, TIME);
    console.log(`http://localhost:${PORT}`);
  });
};

main();
