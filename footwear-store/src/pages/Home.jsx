import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { Truck, ShieldCheck, RefreshCcw, Headphones } from "lucide-react";

function Home({ addToCart, toggleWishlist, wishlist }) {
  const featured = products.slice(0, 8);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">New Footwear Collection</p>
          <h1>Step Into Style With Premium Footwear</h1>
          <p>
            Explore footwear for men, women, and kids. Shop sneakers, heels,
            sandals, formal shoes, sports shoes, flats, wedges, and more.
          </p>

          <div className="hero-buttons">
            <Link to="/shop" className="primary-btn">Shop Now</Link>
            <Link to="/about" className="secondary-btn">Explore Brand</Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700&h=500&auto=format&fit=crop&q=75"
            alt="Footwear"
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      <section className="features">
        <div>
          <Truck />
          <h4>Free Delivery</h4>
          <p>On orders above ₹999</p>
        </div>

        <div>
          <RefreshCcw />
          <h4>Easy Returns</h4>
          <p>7-day return policy</p>
        </div>

        <div>
          <ShieldCheck />
          <h4>Secure Payment</h4>
          <p>100% safe checkout</p>
        </div>

        <div>
          <Headphones />
          <h4>24/7 Support</h4>
          <p>We are here to help</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p>Shop By Section</p>
          <h2>Footwear For Everyone</h2>
        </div>

        <div className="category-showcase">
          <Link to="/shop" className="category-box men-box">
            <h3>Men</h3>
            <p>Sneakers, Formal, Loafers, Sports</p>
          </Link>

          <Link to="/shop" className="category-box women-box">
            <h3>Women</h3>
            <p>Heels, Sneakers, Flats, Wedges</p>
          </Link>

          <Link to="/shop" className="category-box kids-box">
            <h3>Kids</h3>
            <p>School Shoes, Sandals, Sports</p>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p>Our Collection</p>
          <h2>Featured Products</h2>
        </div>

        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          ))}
        </div>
      </section>

      <section className="banner">
        <div>
          <p>Limited Offer</p>
          <h2>Flat 30% Off On Sneakers & Heels</h2>
          <Link to="/shop" className="primary-btn">Grab Deal</Link>
        </div>
      </section>

      <section className="testimonials">
        <div className="section-heading">
          <p>Happy Customers</p>
          <h2>What People Say</h2>
        </div>

        <div className="testimonial-grid">
          <div>
            <p>“Amazing footwear collection. I loved the women heels and sneakers.”</p>
            <h4>— Simran Kaur</h4>
          </div>

          <div>
            <p>“The men formal shoes are very comfortable and premium.”</p>
            <h4>— Arjun Sharma</h4>
          </div>

          <div>
            <p>“I ordered kids school shoes. Quality and delivery were great.”</p>
            <h4>— Neha Verma</h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;