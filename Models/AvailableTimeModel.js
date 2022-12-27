const { default: mongoose } = require("mongoose");

const availableTimeSchema = new mongoose.Schema({
    id_available_time: {
        type: Number,
        required: true,
    },
    id_user: {
        type: String,
        required: true,
    },
    month: {
        type: String,
        required: true,
    },
    year:{
        type: String,
        required: true,
    },
    days: {
        type: [String],
        required: true,
    },
    times: {
        type: [String],
        required: true,
    },
    is_specific_date:{
        type: Number,
        required: true,
    },
    specific_date:{
        type: String,
        required: true,
    }
})

const AvailableTimes = mongoose.model("AvailableTimes", availableTimeSchema);

module.exports = AvailableTimes;