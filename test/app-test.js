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
      const message = 'hello world';
      const tweet = new Tweet(message);
      tweets.addTweet(tweet);
      const app = createApp(tweets);

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
      const tweets = new Tweets();
      const app = createApp(tweets);
      const message = 'hello, world';

      request(app).post('/tweets').send({ message }).expect(200).end(done);
    });
  });
});
