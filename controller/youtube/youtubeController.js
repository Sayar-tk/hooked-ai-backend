const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

const getChannelId = async (req, res) => {
  const { handle } = req.query;

  if (!handle) {
    return res
      .status(400)
      .json({ error: "The 'handle' query parameter is required." });
  }

  try {
    // Construct the YouTube API URL
    const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=id&key=${YOUTUBE_API_KEY}&forHandle=${encodeURIComponent(
      handle
    )}`;

    // Call the YouTube API
    const response = await axios.get(apiUrl);

    if (!response.data.items || response.data.items.length === 0) {
      return res.status(404).json({ error: "Channel not found." });
    }

    // Extract the channel ID
    const channelId = response.data.items[0].id;

    res.json({ channelId });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch channel ID." });
  }
};
