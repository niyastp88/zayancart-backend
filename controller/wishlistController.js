const Wishlist = require("../models/Wishlist");
const Product = require("../models/Product");

// Add or remove product from wishlist
// Add or remove product from wishlist
exports.toggleWishlist = async (req, res) => {
  const { productId } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let wishlist = await Wishlist.findOne({ user: req.user._id });

    if (!wishlist) {
      wishlist = await Wishlist.create({
        user: req.user._id,
        products: [{ product: productId }],
      });
      
      const populatedNew = await Wishlist.findById(wishlist._id).populate("products.product");
      return res.status(201).json(populatedNew); 
    }

    const index = wishlist.products.findIndex((p) => {
      if (!p.product) return false;
      const id = p.product._id ? p.product._id : p.product;
      return id.toString() === productId.toString();
    });

    if (index > -1) {
      wishlist.products.splice(index, 1);
    } else {
      wishlist.products.push({ product: productId });
    }

    await wishlist.save();

    const updatedWishlist = await Wishlist.findById(wishlist._id).populate("products.product");
    
    return res.status(200).json(updatedWishlist);
  } catch (error) {
    console.error("Wishlist Full Error Detail:", error);
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get logged-in user's wishlist
exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user._id }).populate(
      "products.product",
    );

    if (!wishlist) {
      return res.status(200).json({ products: [] });
    }

    res.status(200).json(wishlist);
  } catch (error) {
    console.error("Get Wishlist Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Remove product from wishlist
exports.removeFromWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user._id });
    if (!wishlist)
      return res.status(404).json({ message: "Wishlist not found" });

    wishlist.products = wishlist.products.filter((p) => {
      if (!p.product) return false;
      const id = p.product._id ? p.product._id : p.product;
      return id.toString() !== req.params.productId.toString();
    });

    await wishlist.save();
    
    const updatedWishlist = await Wishlist.findById(wishlist._id).populate("products.product");
    res.status(200).json(updatedWishlist);
  } catch (error) {
    console.error("Remove Wishlist Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
