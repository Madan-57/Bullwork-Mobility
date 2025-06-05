const pool = require('../db');

const submitApplication = async (req, res) => {
  const { name, email, resumeUrl, jobTitle } = req.body;

  if (!name || !email || !resumeUrl || !jobTitle) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    await pool.query(
      'INSERT INTO applications (name, email, resume_url, job_title) VALUES ($1, $2, $3, $4)',
      [name, email, resumeUrl, jobTitle]
    );
    res.status(200).json({ message: 'Application submitted successfully.' });
  } catch (err) {
    console.error('Error inserting application:', err);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = { submitApplication };
