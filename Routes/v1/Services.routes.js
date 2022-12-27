const express = require("express");
const { get } = require("mongoose");
const { getService, updatedServices, getServiceById } = require("../../Controllers/Services.controllers");
const router = express.Router();
router.route('/:id').get(getService).put(updatedServices)
router.route('/single/:id').get(getServiceById)

module.exports = router;