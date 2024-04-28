const mongoose = require("mongoose");

let reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    comments: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

let Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
