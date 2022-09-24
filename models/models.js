let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  likedMovies: Array,
});

module.exports = mongoose.model("users", userSchema);
