const { default: mongoose } = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const reviewsSchema = new mongoose.Schema(
  {
    id_order: {
      type: ObjectId,
      ref: "Orders",
    },
    from_user: {
      type: ObjectId,
      ref: "User",
    },
    to_user: {
      type: ObjectId,
      ref: "User",
    },
    name_user:{
      type: String,
      required: true,
    },
    from_user_img: {
      type: String,
    },
    rating_given: {
      type: Number,
    },
    rating_received: {
      type: Number,
    },
    review_text: {
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
