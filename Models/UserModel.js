const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    type_user: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    surname: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    postal_code: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    apply_IVA: {
      type: String,
    },
    IRPF: {
      type: Number,
    },
    address_bill: {
      type: String,
    },
    DNI: {
      type: String,
    },
    verification_token: {
      type: String,
      required: true,
    },
    is_active: {
      type: Number,
      required: true,
    },
    link_video: {
      type: String,
    },
    short_bio: {
      type: String,
    },
    is_verified: {
      type: Boolean,
      required: true,
    },
    path_profile_picture: {
      data: Buffer,
      contentType: String,
    },
    expertise: {
      type: [String],
    },
    punctuation: {
      type: Number,
    },
    languages: {
      type: [],
    },
    phone: {
      type: String,
    },
    professionalStatus: {
      type: String,
    },
   rating_given: {
      type: Number,
    },
    rating_received: {
      type: Number,
    },
    rating_total: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
