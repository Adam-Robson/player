const express = require("express");
const router = express.Router();

/**
 * Simple GET route to confirm server is running
 */
router.get("/", (req, res) => {
  res.status(200).json({ message: "✅ Server is live", time: new Date() });
});

/**
 * POST route to test JSON body parsing
 */
router.post("/", (req, res) => {
  const { test } = req.body;
  if (!test) {
    return res.status(400).json({ error: "Missing 'test' field in request body" });
  }
  res.status(200).json({ received: test, timestamp: new Date() });
});

module.exports = router;
