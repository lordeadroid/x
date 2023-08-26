/* eslint-disable no-unused-vars */

class Controller {
  #view;
  #tweetManager;

  constructor(view, tweetManager) {
    this.#view = view;
    this.#tweetManager = tweetManager;
  }

  #display() {
    const tweetDetails = this.#tweetManager.getTweetDetails();
    this.#view.render(tweetDetails);
  }

  #addTweet(message) {
    const tweet = new Tweet(message);
    this.#tweetManager.addTweet(tweet);
  }

  start() {
    this.#view.setupAddTweet((message) => {
      this.#addTweet(message);
      this.#display();
    });
  }
}
