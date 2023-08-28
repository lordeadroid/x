/* eslint-disable no-unused-vars */

class View {
  #tweetBox;
  #tweetButton;
  #tweetsContainer;
  #likeTweet;

  constructor(tweetBox, tweetButton, tweetsContainer) {
    this.#tweetBox = tweetBox;
    this.#tweetButton = tweetButton;
    this.#tweetsContainer = tweetsContainer;
  }

  #createTweetElement(text) {
    const tweetElement = document.createElement('article');
    tweetElement.innerText = text;

    return tweetElement;
  }

  #createLikeButton(id) {
    const likeButton = document.createElement('div');
    likeButton.classList.add('like-button');
    likeButton.onclick = () => {
      this.#likeTweet(id);
    };

    return likeButton;
  }

  #createTweetContainer(text, id) {
    const tweetElement = this.#createTweetElement(text);
    const likeButton = this.#createLikeButton(id);
    const tweetContainer = document.createElement('div');
    tweetContainer.classList.add('tweet');
    tweetContainer.appendChild(tweetElement);
    tweetContainer.appendChild(likeButton);

    return tweetContainer;
  }

  #renderTweet({ text, id }) {
    const tweetElement = this.#createTweetContainer(text, id);
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
      const text = this.#tweetBox.value;

      if (text) {
        this.#tweetBox.value = '';
        addTweet(text);
      }
    };
  }

  setupOnLike(likeTweet) {
    this.#likeTweet = likeTweet;
  }
}
