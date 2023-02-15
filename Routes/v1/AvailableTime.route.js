const express = require("express");
const { addAvailableTime, getAvailableTimesByUserId, deleteAvailableTime, updateAvailableTime, getAvailableTimeByDate } = require("../../Controllers/AvailableTime.controllers");
const router  = express.Router();
router.route('/').put(addAvailableTime)
router.route('/update/:id').patch(updateAvailableTime)
router.route('/date/:id').get(getAvailableTimeByDate)
router.route('/:id').get(getAvailableTimesByUserId).patch(deleteAvailableTime)



module.exports = router;