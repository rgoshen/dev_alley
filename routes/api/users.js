const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const normalize = require("normalize-url");

const User = require("../../models/User");

/**
 * @route   POST api/v1/users
 * @desc    Register user
 * @access  Public
 */
router.post(
  "/",
  [
    check("name", "Name is required").notEmpty(),
    check("email", "Please enter in a valid email").isEmail(),
    check(
      "password",
      "Please enter in a password with at least 6 characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      // Get users gravatar
      const avatar = normalize(
        gravatar.url(email, {
          s: "200",
          r: "pg",
          d: "mp",
        }),
        { forceHttps: true }
      );

      user = new User({
        name,
        email,
        avatar,
        password,
      });

      // Encrypt password with bcrypt
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
