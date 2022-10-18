const mongoose = require("mongoose");

const FavoritesSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    // required: true,
  },
  year: {
    type: String,
    // required: true,
  },
  dateDropped: {
    type: String,
    // required: true,
  },
  yardLocation: {
    type: String,
    // required: true,
  },
  row: {
    type: String,
    // required: true,
  },
  vin: {
    type: String,
    // required: true,
  },
  make: {
    type: String,
  },
  userId: {
    type: String,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Favorites", FavoritesSchema);
