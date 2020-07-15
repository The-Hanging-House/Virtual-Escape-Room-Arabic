const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  school: {
    type: String,
  },
  score: {
    type: Number,
  },
  time: {
    type: Number,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
