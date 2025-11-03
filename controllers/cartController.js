// In a real application, this would interact with a database
let cart = [];

// Get cart items
const getCartItems = (req, res) => {
  res.json(cart);
};

// Add item to cart
const addToCart = (req, res) => {
  const { productId, quantity } = req.body;
  
  // In a real app, you would validate the product exists
  const existingItem = cart.find(item => item.productId === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity || 1;
  } else {
    cart.push({
      productId,
      quantity: quantity || 1
    });
  }
  
  res.json({ message: 'Item added to cart', cart });
};

// Remove item from cart
const removeFromCart = (req, res) => {
  const productId = parseInt(req.params.id);
  cart = cart.filter(item => item.productId !== productId);
  res.json({ message: 'Item removed from cart', cart });
};

module.exports = {
  getCartItems,
  addToCart,
  removeFromCart
};