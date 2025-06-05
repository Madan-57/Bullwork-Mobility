const express = require('express');
const router = express.Router();
const { submitApplication } = require('../controllers/applyController');

router.post('/apply', submitApplication); // Handles POST /api/gallery/apply

module.exports = router;
