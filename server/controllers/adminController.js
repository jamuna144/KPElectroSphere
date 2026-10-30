
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Message = require("../models/Message");

// Admin Login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const emailMatches =
      email.toLowerCase() === process.env.ADMIN_EMAIL?.toLowerCase();

    const passwordMatches = await bcrypt.compare(
      password,
      process.env.ADMIN_PASSWORD_HASH || ""
    );

    if (!emailMatches || !passwordMatches) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign(
      {
        email: process.env.ADMIN_EMAIL,
        role: "admin",
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      message: "Admin login successful.",
      token,
    });
  } catch (error) {
    console.error("Admin login error:", error);

    res.status(500).json({
      success: false,
      message: "Server error during login.",
    });
  }
};

// Get All Customer Messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (error) {
    console.error("Get messages error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to retrieve messages.",
    });
  }
};

// Reply to a Customer
const replyToMessage = async (req, res) => {
  try {
    const { reply } = req.body;

    if (!reply || !reply.trim()) {
      return res.status(400).json({
        success: false,
        message: "Reply cannot be empty.",
      });
    }

    const customerMessage = await Message.findById(req.params.id);

    if (!customerMessage) {
      return res.status(404).json({
        success: false,
        message: "Customer message not found.",
      });
    }

    customerMessage.replies.push({
      message: reply.trim(),
    });

    customerMessage.status = "Replied";

    await customerMessage.save();

    res.status(200).json({
      success: true,
      message: "Reply saved successfully.",
      data: customerMessage,
    });
  } catch (error) {
    console.error("Reply error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to save reply.",
    });
  }
};

// Export all controller functions
module.exports = {
  adminLogin,
  getMessages,
  replyToMessage,
};
