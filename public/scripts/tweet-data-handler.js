/* eslint-disable no-unused-vars */

class TweetDataHandler {
  #Tweets;

  constructor(Tweets) {
    this.#Tweets = Tweets;
  }

  getTweetData(createTweetModels) {
    fetch('/tweets')
      .then((res) => res.json())
      .then((tweetDetails) => createTweetModels(tweetDetails));
  }

  addTweet(message, renderTweets) {
    fetch('/tweets', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: {
        'content-type': 'application/json',
      },
    }).then(() => {
      const tweet = new Tweet(message);
      this.#Tweets.addTweet(tweet);
      renderTweets();
    });
  }

  likeTweet(renderTweets, id = 0) {
    fetch(`/tweets/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ id }),
      headers: {
        'content-type': 'application/json',
      },
    }).then(() => {
      renderTweets();
    });
  }

  getTweetDetails() {
    return this.#Tweets.getTweetDetails();
  }
}