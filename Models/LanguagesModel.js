const { default: mongoose } = require("mongoose");

const languageSchema = new mongoose.Schema({
    id_language: {
        type: Number,
        required: true,
    },
    name_language: {
        type: String,
        required: true,
    }
})

const Languages = mongoose.model("Languages", languageSchema);

module.exports = Languages;