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
