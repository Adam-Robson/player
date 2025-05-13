const express = require("express");
const router = express.Router();
const { handleContactSubmission } = require("../controllers/contactController");

router.post("/", handleContactSubmission);

module.exports = router;
