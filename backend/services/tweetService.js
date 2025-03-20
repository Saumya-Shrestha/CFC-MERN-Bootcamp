let tweets = [
  {
    id: 1,
    text: "First tweet",
  },
];

let idCounter = 1;

export function getTweets(req, res) {
  res.json(tweets);
}

export function createTweet(req, res) {
  const { text } = req.body;
  if (!text) {
    return res
      .status(400)
      .json({ message: "Invalid Request! Text is required." });
  }
  const newTweet = {
    id: ++idCounter,
    text,
  };
  tweets.push(newTweet);
  res.status(201).json(newTweet);
}

export function editTweet(req, res) {
  const { text } = req.body;
  const tweet = tweets.find((tweet) => tweet.id === Number(req.params.id));
  if (!tweet) {
    return res.status(404).json({ message: "Tweet not found!" });
  }
  if (!text) {
    return res
      .status(400)
      .json({ message: "Invalid Request! Text is required." });
  }
  tweet.text = text;
  res.status(200).json(tweet);
}

export function deleteTweet(req, res) {
  const tweet = tweets.findIndex((tweet) => tweet.id === Number(req.params.id));
  if (tweet === -1) {
    return res.status(404).json({ message: "Tweet not found!" });
  }
  tweets.splice(tweet, 1);
  res.status(204).end();
}
