const express = require('express');
const router = express.Router();
const pool = require('../db'); // adjust path as needed

router.post('/demo', async (req, res) => {
  const { name, phone, email, address, product, message } = req.body;

  try {
    await pool.query(
      'INSERT INTO demo_requests (name, phone, email, address, product, message) VALUES ($1, $2, $3, $4, $5, $6)',
      [name, phone, email, address, product, message]
    );
    res.status(200).json({ message: 'Demo request submitted successfully' });
  } catch (error) {
    console.error('Error inserting demo request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
