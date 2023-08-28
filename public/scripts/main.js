/* eslint-disable no-console */

const createTweet = ({ text, id, likes, username }) => {
  const tweet = new Tweet(text, id, username);
  tweet.updateLikes(likes);

  return tweet;
};

const createTweets = (tweetDetails, tweets) => {
  tweetDetails.forEach((tweetDetail) => {
    const tweet = createTweet(tweetDetail);
    tweets.addTweet(tweet);
  });
};

const main = () => {
  const tweetBox = document.querySelector('#tweet-box');
  const tweetButton = document.querySelector('#tweet-button');
  const tweetsContainer = document.querySelector('#tweets-container');

  const view = new View(tweetBox, tweetButton, tweetsContainer);
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
