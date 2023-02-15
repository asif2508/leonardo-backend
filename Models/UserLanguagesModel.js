const { default: mongoose } = require("mongoose");

const userLanguageSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    id_language: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserLanguages = mongoose.model("Languages", userLanguageSchema);

module.exports = UserLanguages;
