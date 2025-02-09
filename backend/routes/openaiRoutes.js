const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// OpenAI Chat API Route
router.post("/chat", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4", 
        messages: [{ role: "user", content: req.body.prompt }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    res.json({ response: response.data.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    res.status(500).json({ error: "Failed to get response from OpenAI" });
  }
});

module.exports = router;
