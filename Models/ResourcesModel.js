const { default: mongoose } = require("mongoose");

const resourcesSchema = new mongoose.Schema(
  {
    id_resource: {
      type: Number,
      required: true,
    },
    id_order: {
      type: Number,
      required: true,
    },
    type_resource: {
      type: String,
      required: true,
    },
    title_resource: {
      type: String,
      required: true,
    },
    path_resource: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Resources = mongoose.model("Resources", resourcesSchema);

module.exports = Resources;
