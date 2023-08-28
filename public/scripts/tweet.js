/* eslint-disable no-unused-vars */

class Tweet {
  #message;
  #id;
  #likes;

  constructor(message, id) {
    this.#message = message;
    this.#id = id;
    this.#likes = 0;
  }

  id() {
    return this.#id;
  }

  getDetails() {
    const message = this.#message;
    return { message };
  }

  likeTweet() {
    this.#likes += 1;
    return this.#likes;
  }
}
