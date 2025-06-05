const pool = require("../db");

const subscribeEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    await pool.query(
      "INSERT INTO newsletter_subscribers (email) VALUES ($1) ON CONFLICT DO NOTHING",
      [email]
    );
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (err) {
    console.error("Error subscribing:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { subscribeEmail };
