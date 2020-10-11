const mongoose = require("mongoose");
const { Schema } = mongoose;

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
