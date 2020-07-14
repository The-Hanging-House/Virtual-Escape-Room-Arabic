const express = require("express");
const router = express.Router();

// @route   GET api/clues
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Clues route"));

module.exports = router;
