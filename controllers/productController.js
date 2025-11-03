const fs = require('fs');
const path = require('path');

// Path to products data
const productsPath = path.join(__dirname, '../data/products.json');

// Get all products
const getAllProducts = (req, res) => {
  try {
    const productsData = fs.readFileSync(productsPath, 'utf8');
    const products = JSON.parse(productsData);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error: error.message });
  }
};

// Get product by ID
const getProductById = (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const productsData = fs.readFileSync(productsPath, 'utf8');
    const products = JSON.parse(productsData);
    const product = products.find(p => p.id === productId);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving product', error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById
};