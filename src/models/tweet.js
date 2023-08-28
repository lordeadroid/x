class Tweet {
  #text;
  #id;
  #likes;

  constructor(text, id) {
    this.#text = text;
    this.#id = id;
    this.#likes = 0;
  }

  id() {
    return this.#id;
  }

  getDetails() {
    const text = this.#text;
    const id = this.#id;
    return { text, id };
  }

  likeTweet() {
    this.#likes += 1;
    return this.#likes;
  }

  updateLikes(likes) {
    this.#likes = likes;
  }
}

module.exports = { Tweet };
