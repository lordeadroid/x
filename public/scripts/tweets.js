/* eslint-disable no-unused-vars */

class Tweets {
  #tweets;

  constructor() {
    this.#tweets = [];
  }

  addTweet(tweet) {
    this.#tweets.push(tweet);
  }

  getTweetDetails() {
    return this.#tweets.map((tweet) => tweet.getDetails());
  }

  likeTweet(id) {
    const tweet = this.#tweets.find((tweet) => tweet.id() === id);
    return tweet.likeTweet();
  }
}
