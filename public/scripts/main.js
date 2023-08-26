const main = () => {
  const tweetBox = document.querySelector('#tweet-box');
  const tweetButton = document.querySelector('#tweet-button');
  const tweetsContainer = document.querySelector('#tweets-container');

  const view = new View(tweetBox, tweetButton, tweetsContainer);

  const tweetManager = new TweetManager();
  const controller = new Controller(view, tweetManager);
  controller.start();
};

window.onload = main;
