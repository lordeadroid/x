class Tweet {
  #text;
  #id;
  #likes;
  #username;

  constructor(text, id, username, likes = 0) {
    this.#text = text;
    this.#id = id;
    this.#likes = likes;
    this.#username = username;
  }

  id() {
    return this.#id;
  }

  getDetails() {
    const text = this.#text;
    const id = this.#id;
    const likes = this.#likes;
    const username = this.#username;
    return { text, id, likes, username };
  }

  likeTweet() {
    this.#likes += 1;
    return this.#likes;
  }

  updateLikes() {
    this.#likes += 1;
  }
}

module.exports = { Tweet };
