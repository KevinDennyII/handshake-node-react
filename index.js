const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// importing model which holds schema for mongodb
require("./models/Chirp");

// creating new express application
const app = express();

// longer needed after version 5 of Mongoose
// mongoose.Promise = global.Promise;

// connecting to mongodDb
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost:27017/handshake-node-react`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.error(err);
    else console.log("Connected to the mongodb");
  }
);

// middleware used for parsing json
app.use(bodyParser.json());

//importing routes into the application
require("./routes/chirpRoutes")(app);

// set up for production, if necessary
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// setting port for database/api
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
