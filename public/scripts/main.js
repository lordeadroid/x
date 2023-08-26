const main = () => {
  const tweetbox = document.querySelector('#tweet-box');
  const tweetButton = document.querySelector('#tweet-button');
  const tweetsContainer = document.querySelector('#tweets-container');

  const view = new XView(tweetsContainer);

  tweetButton.onclick = () => {
    const message = tweetbox.value;
    tweetbox.value = '';
    view.render([{ message }]);
  };
};

window.onload = main;
