
const express = require("express");
const router = express.Router();

const {
  adminLogin,
  getMessages,
  replyToMessage,
} = require("../controllers/adminController");

const protectAdmin = require("../middleware/authMiddleware");

// Admin login
router.post("/login", adminLogin);

// Get all customer messages
router.get("/messages", protectAdmin, getMessages);

// Reply to a customer
router.post("/messages/:id/reply", protectAdmin, replyToMessage);

module.exports = router;
