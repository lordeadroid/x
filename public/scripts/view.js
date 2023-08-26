/* eslint-disable no-unused-vars */

class XView {
  #tweetsContainer;

  constructor(tweetsContainer) {
    this.#tweetsContainer = tweetsContainer;
  }

  #renderTweet({ message }) {
    const tweetContainer = document.createElement('p');
    tweetContainer.innerText = message;
    this.#tweetsContainer.appendChild(tweetContainer);
  }

  render(tweetDetails) {
    tweetDetails.forEach((tweetDetail) => {
      this.#renderTweet(tweetDetail);
    });
  }
}
