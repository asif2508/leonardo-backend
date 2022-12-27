const { default: mongoose } = require("mongoose");

const servicesSchema = new mongoose.Schema({
  id_user: {
    type: String,
    required: true,
  },
  name_service: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
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
  // require_time_reserve: {
  //   type: Number,
  //   required: true,
  // },
  // time_reserve: {
  //   type: Number,
  //   required: true,
  // },
  // type_time_reserve: {
  //   type: String,
  //   required: true,
  // },
  require_videocall: {
    type: Boolean,
    required: true,
  },
  status:{
    type: String,
    required: true,
  }
});

const Services = mongoose.model('services', servicesSchema)

module.exports = Services