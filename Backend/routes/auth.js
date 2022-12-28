const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// createUser
router.post(
  "/createUser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let success;
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return res .status(401).json({ success, error: "User with this Email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: hash,
      });
      const data = {
        user: {
          id: user.id,
          isAdmin: user.isAdmin,
        },
      };
      const token = jwt.sign(data, process.env.JWT_SEC);
      success = true;
      return res.status(200).json({ success, token });
    } catch (error) {
      res.status(500).json("Internal Server Error");
    }
  }
);

// loginUser
router.post(
  "/loginUser",[
    body("email").isEmail(),
    body("password").exists()
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let { email, password } = req.body;
      let success;
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res.status(400).json({ success, error: "Please Enter Valid Email" });
      }

      let passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({ success, error: "Please Enter Valid Password" });
      }

      const data = {
        user: {
          id: user.id,
          isAdmin: user.isAdmin,
        },
      };
      const token = jwt.sign(data, process.env.JwT_SEC);
      success = true;
      res.status(200).json({ success, token });
    } catch (error) {
      res.status(500).json("Internal Server Error");
    }
  }
);
module.exports = router;
