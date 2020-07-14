const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { response } = require("express");

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  "/",
  [
    check("username", "Username is required!").not().isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
    check("email", "Please include a valid Email").isEmail(),
    check("age", "Please input a valid age number!").not().isEmpty().isInt(),
  ],
  (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("User route");
  }
);

module.exports = router;
