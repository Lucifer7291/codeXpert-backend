import Cart from "../models/cartModel.js";

// Add Course to Cart
export const addToCart = async (req, res) => {
  try {
    const course = await Cart.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Cart Items
export const getCartItems = async (req, res) => {
  try {
    const items = await Cart.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove Course from Cart
export const removeCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buy All (Mock Purchase)
export const buyAllCourses = async (req, res) => {
  try {
    const items = await Cart.find();
    if (items.length === 0) return res.status(400).json({ message: "Cart is empty" });

    const total = items.reduce((sum, item) => sum + item.price, 0);

    await Cart.deleteMany(); // Clear cart after purchase
    res.json({ message: `Purchased all courses for ₹${total}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
