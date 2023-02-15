const { default: mongoose } = require("mongoose");

const reviewsSchema = new mongoose.Schema(
  {
    id_review: {
      type: Number,
      required: true,
    },
    id_order: {
      type: String,
      required: true,
    },
    from_user: {
      type: String,
      required: true,
    },
    to_user: {
      type: String,
      required: true,
    },
    review_text: {
      type: String,
      required: true,
    },
    date_review: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;
