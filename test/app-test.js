const { describe, it } = require('node:test');
const request = require('supertest');
const { createApp } = require('../src/app');
const { Tweet } = require('../src/models/tweet');
const { Tweets } = require('../src/models/tweets');

describe('APP', () => {
  describe('GET /tweets', () => {
    it('should give no tweets initially', (_, done) => {
      const tweets = new Tweets();
      const app = createApp(tweets);

      request(app)
        .get('/tweets')
        .expect(200)
        .expect('content-type', /json/)
        .expect([])
        .end(done);
    });

    it('should give all the tweets data', (_, done) => {
      const tweets = new Tweets();
      const text = 'hello world';
      const tweet = new Tweet(text);
      tweets.addTweet(tweet);
      const app = createApp(tweets);

      request(app)
        .get('/tweets')
        .expect(200)
        .expect('content-type', /json/)
        .expect([{ text, likes: 0 }])
        .end(done);
    });
  });

  describe('POST /tweets', () => {
    it('should create a new tweet', (_, done) => {
      const tweets = new Tweets();
      const app = createApp(tweets);
      const text = 'hello, world';

      request(app).post('/tweets').send({ text }).expect(201).end(done);
    });
  });

  describe('POST /tweets/:id', () => {
    it('should increase the like count', (_, done) => {
      const tweets = new Tweets();
      const tweet = new Tweet('hello, world', 0, 0);
      tweets.addTweet(tweet);
      const app = createApp(tweets);

      request(app)
        .patch('/tweets/0')
        .expect(201)
        .expect('content-type', /json/)
        .expect({ likes: 1 })
        .end(done);
    });
  });
});
