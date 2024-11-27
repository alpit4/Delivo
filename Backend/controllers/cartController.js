import userModel from "../models/userModel.js";

// Add Item to Cart
const addToCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);

    // Check if user exists
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Initialize cartData if it is not present
    let cartData = userData.cartData || {};

    // Update cartData
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    // Save updated cartData
    await userModel.findByIdAndUpdate(
      req.body.userId,
      { cartData },
      { new: true }
    );
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ success: false, message: "Error adding to cart" });
  }
};

// Remove Item from Cart
const removeFromCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);

    // Check if user exists
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Initialize cartData if it is not present
    let cartData = userData.cartData || {};

    // Update cartData
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;

      // Remove item if quantity is zero
      if (cartData[req.body.itemId] === 0) {
        delete cartData[req.body.itemId];
      }
    }

    // Save updated cartData
    await userModel.findByIdAndUpdate(
      req.body.userId,
      { cartData },
      { new: true }
    );
    res.json({ success: true, message: "Removed from Cart" });
  } catch (error) {
    console.error("Error removing from cart:", error);
    res
      .status(500)
      .json({ success: false, message: "Error removing from cart" });
  }
};

// Get Cart Data
const getCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);

    // Check if user exists
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Retrieve cartData
    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.error("Error getting cart data:", error);
    res
      .status(500)
      .json({ success: false, message: "Error getting cart data" });
  }
};

export { addToCart, removeFromCart, getCart };
