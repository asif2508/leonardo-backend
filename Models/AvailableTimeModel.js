const { default: mongoose } = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const availableTimeSchema = new mongoose.Schema(
  {
    id_user: {
      type: ObjectId,
      ref: "user",
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    days: {
      type: [String],
      required: true,
    },
    slots: {
      type: [String],
      required: true,
    },
    selectedSessions: {
      type: {},
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AvailableTimes = mongoose.model("AvailableTimes", availableTimeSchema);

module.exports = AvailableTimes;
