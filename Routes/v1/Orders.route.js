const express = require("express");
const { addOrders, getOrder, getAllOrders } = require("../../Controllers/Orders.controllers");
const router = express.Router();
router.route('/add-order').post(addOrders).get(getAllOrders)
router.route('/add-order/:id').get(getOrder)
module.exports = router