const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(express.json());
app.use(cors());
const bodyParser = require("body-parser");

// Parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Cashfree Route
const cashfreeRoute = require("./routes/cashfree/cashfreeRoute");
app.use("/api", cashfreeRoute);

//YouTube Route
const youtubeRoute = require("./routes/youtube/youtubeRoute");
app.use("/api", youtubeRoute);

// Starting Server
app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});
