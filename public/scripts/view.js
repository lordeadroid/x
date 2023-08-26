/* eslint-disable no-unused-vars */

class View {
  #tweetBox;
  #tweetButton;
  #tweetsContainer;

  constructor(tweetBox, tweetButton, tweetsContainer) {
    this.#tweetBox = tweetBox;
    this.#tweetButton = tweetButton;
    this.#tweetsContainer = tweetsContainer;
  }

  #renderTweet({ message }) {
    const tweetContainer = document.createElement('p');
    tweetContainer.innerText = message;
    this.#tweetsContainer.appendChild(tweetContainer);
  }

  render(tweetDetails) {
    this.#tweetsContainer.replaceChildren();
    tweetDetails.reverse().forEach((tweetDetail) => {
      this.#renderTweet(tweetDetail);
    });
  }

  setupAddTweet(addTweet) {
    this.#tweetButton.onclick = () => {
      const message = this.#tweetBox.value;

      if (message) {
        this.#tweetBox.value = '';
        addTweet(message);
      }
    };
  }
}
