const { default: mongoose } = require("mongoose");

const serviceCategorySchema = new mongoose.Schema(
  {
    id_service: {
      type: String,
      required: true,
    },
    id_category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const serviceCategory = mongoose.model(
  "serviceCategory",
  serviceCategorySchema
);

module.exports = serviceCategory;
