const sendTweets = (req, res) => {
  const { tweetManager } = req.app;
  const tweetDetails = tweetManager.getTweetDetails();
  res.json(tweetDetails);
};

module.exports = { sendTweets };
