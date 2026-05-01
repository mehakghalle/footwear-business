import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { Heart, ShoppingCart, Star } from "lucide-react";

const FALLBACK_IMAGE =
  "https://via.placeholder.com/700x520/f3e7dc/222222?text=Footwear";

function ProductDetails({ addToCart, toggleWishlist, wishlist }) {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 className="section">Product not found</h2>;
  }

  const wished = wishlist.some((item) => item.id === product.id);

  const sizes =
    product.section === "Kids"
      ? ["1", "2", "3", "4", "5"]
      : product.section === "Women"
      ? ["5", "6", "7", "8", "9"]
      : ["6", "7", "8", "9", "10", "11"];

  return (
    <section className="product-details">
      <div className="details-img">
        <img
          src={product.image}
          alt={product.name}
          loading="eager"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
        />
      </div>

      <div className="details-content">
        <p className="category">
          {product.section} / {product.category}
        </p>

        <h1>{product.name}</h1>

        <div className="rating">
          <Star size={17} fill="orange" color="orange" />
          {product.rating} Customer Rating
        </div>

        <div className="price-row details-price">
          <h3>₹{product.price}</h3>
          <span>₹{product.oldPrice}</span>
        </div>

        <p>{product.description}</p>

        <h3 className="size-title">Select Size</h3>

        <div className="size-box">
          {sizes.map((size) => (
            <button
              key={size}
              className={selectedSize === size ? "size-btn active" : "size-btn"}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <ul className="details-list">
          <li>Premium quality material</li>
          <li>Comfortable sole design</li>
          <li>Available in multiple sizes</li>
          <li>Easy 7-day return policy</li>
        </ul>

        <div className="details-buttons">
          <button
            className="add-btn"
            onClick={() => addToCart(product, selectedSize || "Default")}
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>

          <button
            className={wished ? "outline-btn active" : "outline-btn"}
            onClick={() => toggleWishlist(product)}
          >
            <Heart size={18} />
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;