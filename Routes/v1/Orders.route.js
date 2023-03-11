const express = require("express");
const { addOrders, getOrder, getAllOrders, getOrderByUserId, deleteOrder, updateOrder, getCompletedOrders, getOrderByProfessionalId, upcomingOrder } = require("../../Controllers/Orders.controllers");
const router = express.Router();
router.route('/').post(addOrders).get(getAllOrders)
router.route('/getOrderByUserId/:id').get(getOrderByUserId)
router.route('/upcomingOrder/:id').get(upcomingOrder)

router.route('/getOrderByProfessionalId/:id').get(getOrderByProfessionalId)


router.route('/getCompletedOrder/:id').get(getCompletedOrders)
router.route('/:id').get(getOrder).delete(deleteOrder).patch(updateOrder)
module.exports = router;