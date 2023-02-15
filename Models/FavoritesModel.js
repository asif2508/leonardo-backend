const { default: mongoose } = require("mongoose");

const favoritesSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    id_professional: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const favorites = mongoose.model("favorites", favoritesSchema);
module.exports = favorites;
