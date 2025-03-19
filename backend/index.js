import express from "express";
import dotenv from "dotenv";
import tweetRoute from "./routes/tweetRoute.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/tweets", tweetRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
