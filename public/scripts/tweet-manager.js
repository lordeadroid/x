/* eslint-disable no-unused-vars */

class TweetManager {
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
}
