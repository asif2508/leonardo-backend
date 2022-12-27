const { default: mongoose } = require("mongoose");

const ordersSchema = new mongoose.Schema({
    id_service: {
        type: String,
        required: true,
    },
    id_professional: {
        type: String,
        required: true,
    },
    id_user: {
        type: String,
        required: true,
    },
    customer_id: {
        type: String,
        required: true,
    },
    TxId: {
        type: String,
        required: true,
    },
    id_coupon: {
        type: String,
        
    },
    final_price: {
        type: Number,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    GMT: {
        type: String,
        required: true,
    },
    annotations: {
        type: String,
    },
    method_payment: {
        type: String,
        required: true,
    },
    link_zoom: {
        type: String,
        required: true,
    },
    status: {
        type:String,
        required: true
    }
})

const Orders = mongoose.model("Orders", ordersSchema)
module.exports = Orders;