/* eslint-disable no-console */

const createTweets = (tweetDetails, tweets) => {
  tweetDetails.forEach(({ text, id, likes, username }) => {
    const tweet = new Tweet(text, id, username, likes);
    tweets.addTweet(tweet);
  });
};

const main = () => {
  const tweetBox = document.querySelector('#tweet-box');
  const tweetButton = document.querySelector('#tweet-button');
  const tweetsContainer = document.querySelector('#tweets-container');
  const logoutButton = document.querySelector('#logout-button');

  const view = new View(tweetBox, tweetButton, tweetsContainer, logoutButton);
  const tweets = new Tweets();
  const tweetDataHandler = new TweetDataHandler(tweets);
  const controller = new Controller(view, tweetDataHandler);

  const handleTweets = (tweetDetails) => {
    createTweets(tweetDetails, tweets);
    controller.start();
  };

  tweetDataHandler.getTweetData(handleTweets);
};

window.onload = main;
