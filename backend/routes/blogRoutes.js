const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');

// Routes
router.get('/', getAllBlogs);          // GET /api/blogs
router.get('/:slug', getBlogBySlug);   // GET /api/blogs/:slug
router.post('/', createBlog);          // POST /api/blogs
router.put('/:slug', updateBlog);      // PUT /api/blogs/:slug
router.delete('/:slug', deleteBlog);   // DELETE /api/blogs/:slug

module.exports = router;
