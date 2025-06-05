const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/order', async (req, res) => {
  const {
    name, phone, email, address, country, state, city, pincode,
    aadhar, pan, product, message
  } = req.body;

  try {
    await pool.query(
      `INSERT INTO orders 
      (name, phone, email, address, country, state, city, pincode, aadhar, pan, product, message)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
      [name, phone, email, address, country, state, city, pincode, aadhar, pan, product, message]
    );
    res.status(201).json({ message: 'Order submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
