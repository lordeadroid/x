const createTweet = ({ message }) => new Tweet(message);

const createTweetManager = (tweetDetails, tweetManager) => {
  tweetDetails.forEach((tweetDetail) => {
    const tweet = createTweet(tweetDetail);
    tweetManager.addTweet(tweet);
  });
};

const main = () => {
  const tweetBox = document.querySelector('#tweet-box');
  const tweetButton = document.querySelector('#tweet-button');
  const tweetsContainer = document.querySelector('#tweets-container');

  const view = new View(tweetBox, tweetButton, tweetsContainer);
  const tweetManager = new TweetManager();
  const tweetDataHandler = new TweetDataHandler(tweetManager);
  const controller = new Controller(view, tweetDataHandler);

  const createTweetModel = (tweetDetails) => {
    createTweetManager(tweetDetails, tweetManager);
    controller.start();
  };

  tweetDataHandler.getTweetData(createTweetModel);
};

window.onload = main;
