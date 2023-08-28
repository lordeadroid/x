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

  #findTweet(id) {
    return this.#tweets.find((tweet) => tweet.id() === id);
  }

  likeTweet(id) {
    const tweet = this.#findTweet(id);
    return tweet.likeTweet();
  }

  updateLikes(id, likes) {
    const tweet = this.#findTweet(id);
    tweet.updateLikes(likes);
  }

  getNoOfTweets() {
    return this.#tweets.length;
  }
}

module.exports = { Tweets };
