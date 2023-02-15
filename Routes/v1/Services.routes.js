const express = require("express");
const { get } = require("mongoose");
const { getService, updatedServices, getServicesByUserIdAndStatus, getServiceById, addServices, getAllServices, deleteService, getServicesByUserId } = require("../../Controllers/Services.controllers");
const router = express.Router();
router.route('/').get(getAllServices).post(addServices)

// for professional
router.route('/professional/:id').get(getServicesByUserId)
router.route('/professional/status/:id').get(getServicesByUserIdAndStatus)

// for showcase to client
router.route('/single/:id').get(getService)

//for particular
router.route('/:id').get(getServiceById).patch(updatedServices).delete(deleteService)

module.exports = router;