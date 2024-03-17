/* eslint-disable no-console */

const { readFile } = require("./src/readFile");
const { Tweets } = require("./src/models/tweets");
const { createApp } = require("./src/app");
const { Tweet } = require("./src/models/tweet");

const createTweets = (tweetDetails, tweets) => {
  tweetDetails.forEach(({ text, id, likes, username }) => {
    const tweet = new Tweet(text, id, username, likes);
    tweets.addTweet(tweet);
  });
};

const setupServer = (tweets, usersCredentials) => {
  const app = createApp(tweets, usersCredentials);

  const PORT = 8000;
  app.listen(PORT, () => {
    const TIME = new Date().toTimeString();
    console.log("Listening on PORT:", PORT, TIME);
    console.log(`http://localhost:${PORT}`);
  });
};

const parseFileData = (tweetsContent, credentialsContent) => {
  const tweets = new Tweets();
  const tweetsData = JSON.parse(tweetsContent);
  const usersCredentials = JSON.parse(credentialsContent);
  createTweets(tweetsData, tweets);
  setupServer(tweets, usersCredentials);
};

const main = () => {
  const tweetsFilePath = "./tweets.json";
  const credentialsFilePath = "./users-credentials.json";

  Promise.all([readFile(tweetsFilePath), readFile(credentialsFilePath)]).then(
    (data) => {
      const [tweetsContent, credentialsContent] = data;
      parseFileData(tweetsContent, credentialsContent);
    }
  );
};

main();
