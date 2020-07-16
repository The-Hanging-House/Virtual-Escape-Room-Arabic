const express = require("express");
const router = express.Router();

const Question = require("../../models/Question");

// @route   GET api/questions
// @desc    Test route
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { description } = req.body;
    const { alternatives } = req.body;

    const question = await Question.create({
      description,
      alternatives,
    });

    return res.status(200).json(question);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
