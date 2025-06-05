// const pool = require('../db');

// // GET all products
// const getAllProducts = async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM products');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // GET product by ID
// const getProductById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);

//     if (result.rows.length === 0)
//       return res.status(404).json({ error: 'Product not found' });

//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // POST a new product
// const createProduct = async (req, res) => {
//   try {
//     const {
//       name,
//       tagline,
//       description,
//       price,
//       main_image_url,
//       image_urls,
//       video_url,
//       category,
//       features_text,
//       tco_savings_text,
//       tco_savings_image_url,
//       specifications,
//       related_products_ids,
//     } = req.body;

//     const result = await pool.query(
//       `INSERT INTO products (
//         name, tagline, description, price, main_image_url, image_urls, video_url,
//         category, features_text, tco_savings_text, tco_savings_image_url,
//         specifications, related_products_ids
//       )
//       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
//       RETURNING *`,
//       [
//         name,
//         tagline,
//         description,
//         price,
//         main_image_url,
//         image_urls,
//         video_url,
//         category,
//         features_text,
//         tco_savings_text,
//         tco_savings_image_url,
//         specifications,
//         related_products_ids,
//       ]
//     );

//     res.status(201).json({ message: 'Product created', product: result.rows[0] });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// module.exports = {
//   getAllProducts,
//   getProductById,
//   createProduct,
// };







const pool = require('../db');

// GET all products
const getAllProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');

    // Parse JSON fields for each product
    const products = result.rows.map((product) => {
      try {
        product.image_urls = typeof product.image_urls === 'string' ? JSON.parse(product.image_urls) : product.image_urls;
        product.related_products_ids = typeof product.related_products_ids === 'string' ? JSON.parse(product.related_products_ids) : product.related_products_ids;
        product.specifications = typeof product.specifications === 'string' ? JSON.parse(product.specifications) : product.specifications;
      } catch (err) {
        console.error('Error parsing product JSON fields:', err.message);
      }
      return product;
    });

    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// GET product by ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);

    if (result.rows.length === 0)
      return res.status(404).json({ error: 'Product not found' });

    const product = result.rows[0];

    try {
      product.image_urls = typeof product.image_urls === 'string' ? JSON.parse(product.image_urls) : product.image_urls;
      product.related_products_ids = typeof product.related_products_ids === 'string' ? JSON.parse(product.related_products_ids) : product.related_products_ids;
      product.specifications = typeof product.specifications === 'string' ? JSON.parse(product.specifications) : product.specifications;
    } catch (err) {
      console.error('Error parsing JSON fields:', err.message);
    }

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// POST a new product
const createProduct = async (req, res) => {
  try {
    const {
      name,
      tagline,
      description,
      price,
      main_image_url,
      image_urls,
      video_url,
      category,
      features_text,
      tco_savings_text,
      tco_savings_image_url,
      specifications,
      related_products_ids,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO products (
        name, tagline, description, price, main_image_url, image_urls, video_url,
        category, features_text, tco_savings_text, tco_savings_image_url,
        specifications, related_products_ids
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
      RETURNING *`,
      [
        name,
        tagline,
        description,
        price,
        main_image_url,
        JSON.stringify(image_urls),
        video_url,
        category,
        features_text,
        tco_savings_text,
        tco_savings_image_url,
        JSON.stringify(specifications),
        JSON.stringify(related_products_ids),
      ]
    );

    res.status(201).json({ message: 'Product created', product: result.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
