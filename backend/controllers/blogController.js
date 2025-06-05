const pool = require('../db');

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blogs ORDER BY publication_date DESC');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching blogs' });
  }
};

// Get blog by slug
const getBlogBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const result = await pool.query('SELECT * FROM blogs WHERE slug = $1', [slug]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching blog' });
  }
};

// Create a blog
const createBlog = async (req, res) => {
  const { title, slug, content, author, image_url, video_url, tags } = req.body;

  if (!title || !slug || !content) {
    return res.status(400).json({ message: 'Title, slug, and content are required' });
  }

  try {
    await pool.query(
      `INSERT INTO blogs (title, slug, content, author, image_url, video_url, tags)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [title, slug, content, author, image_url, video_url, tags]
    );
    res.status(201).json({ message: 'Blog created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating blog' });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  const { slug } = req.params;
  const { title, content, author, image_url, video_url, tags } = req.body;

  try {
    const result = await pool.query(
      `UPDATE blogs
       SET title = $1, content = $2, author = $3, image_url = $4, video_url = $5, tags = $6
       WHERE slug = $7`,
      [title, content, author, image_url, video_url, tags, slug]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({ message: 'Blog updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating blog' });
  }
};

// Delete a blog
const deleteBlog = async (req, res) => {
  const { slug } = req.params;

  try {
    const result = await pool.query('DELETE FROM blogs WHERE slug = $1', [slug]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting blog' });
  }
};

module.exports = {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
};
