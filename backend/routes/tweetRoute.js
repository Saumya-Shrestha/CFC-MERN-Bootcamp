import express from "express";
import {
  createTweet,
  deleteTweet,
  editTweet,
  getTweets,
} from "../services/tweetService.js";

const route = express.Router();

route.get("/", getTweets);
route.post("/", createTweet);
route.put("/:id", editTweet);
route.delete("/:id", deleteTweet);

export default route;
