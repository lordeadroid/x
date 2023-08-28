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

  #createLikeButton(id) {
    const likeButton = document.createElement('div');
    likeButton.classList.add('like-button');
    likeButton.onclick = () => {
      this.#likeTweet(id);
    };

    return likeButton;
  }

  #createHTMLElement(type, content) {
    const element = document.createElement(type);
    element.innerText = content;

    return element;
  }

  #createTweetContainer({ text, id, likes, username }) {
    const tweetElement = this.#createHTMLElement('arcticle', text);
    const totalLikesElement = this.#createHTMLElement('span', likes);
    const likeButton = this.#createLikeButton(id);
    const header = `@${username} on ${new Date().toDateString()}`;
    const headerElement = this.#createHTMLElement('span', header);

    const footer = document.createElement('div');
    footer.classList.add('like-box');
    footer.appendChild(likeButton);
    footer.appendChild(totalLikesElement);

    const tweetContainer = document.createElement('div');
    tweetContainer.classList.add('tweet');
    tweetContainer.appendChild(headerElement);
    tweetContainer.appendChild(tweetElement);
    tweetContainer.appendChild(footer);

    return tweetContainer;
  }

  #renderTweet(tweetDetail) {
    const tweetElement = this.#createTweetContainer(tweetDetail);
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
