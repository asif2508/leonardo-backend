const { default: mongoose } = require("mongoose");

const videosSchema = new mongoose.Schema(
  {
    id_video: {
      type: String,
      required: true,
    },
    id_user: {
      type: String,
      required: true,
    },
    title_video: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link_video: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Videos = mongoose.model("Videos", videosSchema);

exports.default = Videos;
