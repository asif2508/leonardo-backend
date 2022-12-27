const { default: mongoose } = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    id_category: {
        type: String,
        required: true,
    },
    name_category:{
        type: String,
        required: true,
    }
})

const Categories = mongoose.model("Categories", categoriesSchema);

module.exports = Categories;