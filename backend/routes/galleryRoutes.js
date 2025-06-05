// const express = require('express');
// const router = express.Router();

// const imageData = [
//   {
//     id: 1,
//     src: 'https://www.bullworkmobility.com/careers/gallery2.webp',
//     alt: 'Team enjoying an outdoor activity',
//   },
//   {
//     id: 2,
//     src: 'https://www.bullworkmobility.com/careers/gallery3.webp',
//     alt: 'Productive team meeting in the office',
//   },
//   {
//     id: 3,
//     src: 'https://www.bullworkmobility.com/careers/gallery4.webp',
//     alt: 'A happy group photo of the team',
//   },
//   {
//     id: 4,
//     src: 'https://www.bullworkmobility.com/careers/gallery1.webp',
//     alt: 'Team building exercise',
//   },
//   {
//     id: 5,
//     src: 'https://www.bullworkmobility.com/careers/gallery5.webp',
//     alt: 'Team celebrating a milestone',
//   },
//   {
//     id: 6,
//     src: 'https://www.bullworkmobility.com/careers/gallery4.webp',
//     alt: 'Large company event photo',
//   },
  
// ];

// // GET /api/gallery/images
// router.get('/gallery/images', (req, res) => {
//   res.json(imageData);
// });

// // POST /api/gallery/apply
// router.post('/gallery/apply', (req, res) => {
//   console.log('Apply Now clicked');
//   // Optionally, you can extend this to save applicant info etc.
//   res.json({ message: 'Thank you for applying!' });
// });

// module.exports = router;




// const express = require('express');
// const router = express.Router();
// const { Pool } = require('pg');

// // Configure your database connection here:
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'bullwork',
//   password: 'madan123',
//   port: 5432,
// });

// const imageData = [
//   // ... your existing imageData
// ];

// // GET /api/gallery/images
// router.get('/gallery/images', (req, res) => {
//   res.json(imageData);
// });

// // POST /api/gallery/apply
// router.post('/gallery/apply', async (req, res) => {
//   const { name, email, resumeUrl, jobTitle } = req.body;

//   if (!name || !email || !resumeUrl || !jobTitle) {
//     return res.status(400).json({ message: 'All fields are required.' });
//   }

//   try {
//     const insertQuery = `
//       INSERT INTO job_applications (name, email, resume_url, job_title)
//       VALUES ($1, $2, $3, $4) RETURNING *;
//     `;
//     const values = [name, email, resumeUrl, jobTitle];

//     const result = await pool.query(insertQuery, values);

//     res.status(201).json({
//       message: 'Application submitted successfully!',
//       application: result.rows[0],
//     });
//   } catch (error) {
//     console.error('Database insert error:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// module.exports = router;
