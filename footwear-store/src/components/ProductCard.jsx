import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";

const FALLBACK_IMAGE =
  "https://via.placeholder.com/500x400/f3e7dc/222222?text=Footwear";

function ProductCard({ product, addToCart, toggleWishlist, wishlist }) {
  const wished = wishlist.some((item) => item.id === product.id);

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <div className="product-card">
      <div className="product-img-box">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
        />

        <span className="discount-badge">{discount}% OFF</span>

        <button
          className={wished ? "wish-btn active" : "wish-btn"}
          onClick={() => toggleWishlist(product)}
        >
          <Heart size={18} />
        </button>
      </div>

      <div className="product-info">
        <p className="category">{product.category}</p>

        <Link to={`/product/${product.id}`} className="product-title">
          {product.name}
        </Link>

        <div className="rating">
          <Star size={15} fill="orange" color="orange" />
          {product.rating}
        </div>

        <div className="price-row">
          <h3>₹{product.price}</h3>
          <span>₹{product.oldPrice}</span>
        </div>

        <button className="add-btn" onClick={() => addToCart(product)}>
          <ShoppingCart size={17} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;