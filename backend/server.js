



// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const orderRoutes = require('./routes/orderrouts'); // your existing order routes
// const demoRoutes = require('./routes/demoRoutes');
// const subscribeRoutes = require("./routes/subscribeRoutes");   // ✅ new demo form route

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api', orderRoutes);
// app.use('/api', demoRoutes); // ✅ now handles /api/demo POST
// app.use("/api/subscribe", subscribeRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const orderRoutes = require('./routes/orderrouts');
const demoRoutes = require('./routes/demoRoutes');
const subscribeRoutes = require('./routes/subscribeRoutes');
const applyRoutes = require('./routes/applyRoutes'); 
const blogRoutes = require('./routes/blogRoutes');
const productRoutes = require('./routes/productRoutes');// ✅ NEW

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', orderRoutes);
app.use('/api', demoRoutes);
app.use('/api/subscribe', subscribeRoutes);
app.use('/api/gallery', applyRoutes);
app.use('/api/blogs', blogRoutes); 
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



 


