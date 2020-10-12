const mongoose = require("mongoose");
const { Schema } = mongoose;

// Creating mongodb schema for chirp with 140 text character limit and unique id
const chirpSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  text: {
    type: String,
    maxlength: 140,
  },
});

mongoose.model("chirps", chirpSchema);
