const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample product data
const products = [
    { name: 'Product 1', price: 29.99 },
    { name: 'Product 2', price: 19.99 },
    { name: 'Product 3', price: 39.99 },
    { name: 'Product 4', price: 24.99 },
];

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Route for products
app.get('/products', (req, res) => {
    const searchQuery = req.query.search?.toLowerCase() || '';
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery)
    );
    res.render('products', { products: filteredProducts });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
