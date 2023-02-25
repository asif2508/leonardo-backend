const express = require("express");
const { addRating, getRatingByUserId } = require("../../Controllers/Reviews.controllers");

const router = express.Router();
router.route('/').post(addRating)
router.route('/:id').get(getRatingByUserId)

module.exports = router;