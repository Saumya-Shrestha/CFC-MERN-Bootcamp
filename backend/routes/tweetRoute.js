import express from "express";
import { createTweet, getTweets } from "../services/tweetService.js";

const route = express.Router();

route.get("/", getTweets);
route.post("/", createTweet);

export default route;
