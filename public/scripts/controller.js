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
    this.#view.setupAddTweet((message) => {
      this.#tweetDataHandler.addTweet(message, () => this.#display());
    });

    this.#view.setupOnLike(() => {
      this.#tweetDataHandler.likeTweet(() => this.#display());
    });

    this.#display();
  }
}
