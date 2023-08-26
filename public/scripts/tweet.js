/* eslint-disable no-unused-vars */

class Tweet {
  #message;

  constructor(message) {
    this.#message = message;
  }

  getDetails() {
    const message = this.#message;
    return { message };
  }
}
