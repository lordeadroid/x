/* eslint-disable no-unused-vars */

class Controller {
  #view;
  #tweetDataHandler;

  constructor(view, tweetDataHandler) {
    this.#view = view;
    this.#tweetDataHandler = tweetDataHandler;
  }

  #display() {
    const tweetDetails = this.#tweetDataHandler.getTweetDetails();
    this.#view.render(tweetDetails);
  }

  start() {
    this.#view.setupAddTweet((text) => {
      this.#tweetDataHandler.addTweet(text, () => this.#display());
    });

    this.#view.setupOnLike((id) => {
      this.#tweetDataHandler.likeTweet(id, () => this.#display());
    });

    this.#display();
  }
}
