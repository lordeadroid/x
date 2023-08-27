const { describe, it } = require('node:test');
const request = require('supertest');
const { createApp } = require('../src/app');
const { TweetManager } = require('../src/models/tweet-manager');
const { Tweet } = require('../src/models/tweet');

describe('APP', () => {
  describe('GET /tweets', () => {
    it('should give no tweets initially', (_, done) => {
      const tweetManager = new TweetManager();
      const app = createApp(tweetManager);

      request(app)
        .get('/tweets')
        .expect(200)
        .expect('content-type', /json/)
        .expect([])
        .end(done);
    });

    it('should give all the tweets data', (_, done) => {
      const tweetManager = new TweetManager();
      const message = 'hello world';
      const tweet = new Tweet(message);
      tweetManager.addTweet(tweet);
      const app = createApp(tweetManager);

      request(app)
        .get('/tweets')
        .expect(200)
        .expect('content-type', /json/)
        .expect([{ message }])
        .end(done);
    });
  });

  describe('POST /tweets', () => {
    it('should create a new tweet', (_, done) => {
      const tweetManager = new TweetManager();
      const app = createApp(tweetManager);
      const message = 'hello, world';

      request(app).post('/tweets').send({ message }).expect(200).end(done);
    });
  });
});
