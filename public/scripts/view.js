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

  #createTweetElement(message) {
    const tweetElement = document.createElement('article');
    tweetElement.innerText = message;

    return tweetElement;
  }

  #createLikeButton() {
    const likeButton = document.createElement('div');
    likeButton.classList.add('like-button');

    return likeButton;
  }

  #createTweetContainer(message) {
    const tweetElement = this.#createTweetElement(message);
    const likeButton = this.#createLikeButton();
    const tweetContainer = document.createElement('div');
    tweetContainer.classList.add('tweet');
    tweetContainer.appendChild(tweetElement);
    tweetContainer.appendChild(likeButton);

    return tweetContainer;
  }

  #renderTweet({ message }) {
    const tweetElement = this.#createTweetContainer(message);
    this.#tweetsContainer.appendChild(tweetElement);
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
