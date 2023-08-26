/* eslint-disable no-console */

const { createApp } = require('./src/app');

const main = () => {
  const app = createApp();

  const PORT = 8000;
  app.listen(PORT, () => {
    const TIME = new Date().toTimeString();
    console.log('Listening on PORT:', PORT, TIME);
  });
};

main();
