const { default: mongoose } = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const servicesSchema = new mongoose.Schema(
  {
    id_user: {
      type: ObjectId,
      ref: "user",
    },
    category: {
      type: String,
      required: true,
    },
    user_name:{
      type: String,
      required: true,
    },
    name_service: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    require_time_reserve: {
      type: Number,
      required: true,
    },
    time_reserve: {
      type: Number,
      required: true,
    },
    type_time_reserve: {
      type: String,
      required: true,
    },
    require_videocall: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    path_profile_picture:{
      type: String,
      default: null,
    },
    
  },
  {
    timestamps: true,
  }
);

const Services = mongoose.model("services", servicesSchema);

module.exports = Services;
