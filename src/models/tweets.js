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

    const likes = tweet.likeTweet();
    return likes;
  }
}

module.exports = { Tweets };
