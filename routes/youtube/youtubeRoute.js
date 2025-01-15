const { getChannelId } = require("../../controller/youtube/youtubeController");
const express = require("express");
const router = express.Router();

router.get("/channel-id", getChannelId);

module.exports = router;
