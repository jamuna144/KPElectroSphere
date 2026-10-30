
const Message = require("../models/Message");

// Save a customer message
const createMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
      data: newMessage,
    });
  } catch (error) {
    console.error("Contact message error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to send your message. Please try again.",
    });
  }
};

module.exports = { createMessage };
