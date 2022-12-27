const express = require("express");
const { getStripePayment } = require("../../Controllers/Payment.controllers");
const router = express.Router();

router.route('/stripe-pay').post(getStripePayment)
// router.route('/paypal-payment').post(getPaypalPayment)

module.exports = router;