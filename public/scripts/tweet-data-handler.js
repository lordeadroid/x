/* eslint-disable no-unused-vars */

class TweetDataHandler {
  #tweets;

  constructor(tweets) {
    this.#tweets = tweets;
  }

  getTweetData(createTweetModels) {
    fetch('/tweets')
      .then((res) => res.json())
      .then((tweetDetails) => createTweetModels(tweetDetails));
  }

  addTweet(text, renderTweets) {
    fetch('/tweets', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ id, username }) => {
        const tweet = new Tweet(text, id, username);
        this.#tweets.addTweet(tweet);
        renderTweets();
      });
  }

  likeTweet(id, renderTweets) {
    fetch(`/tweets/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ likes }) => {
        this.#tweets.updateLikes(id, likes);
        renderTweets();
      });
  }

  getTweetDetails() {
    return this.#tweets.getTweetDetails();
  }
}
