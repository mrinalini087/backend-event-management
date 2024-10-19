const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

// Correct usage of middleware or route handler
router.post("/register", register);
router.post("/login", login);

module.exports = router;
