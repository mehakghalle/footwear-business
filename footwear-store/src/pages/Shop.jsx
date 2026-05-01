import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop({ addToCart, toggleWishlist, wishlist }) {
  const [search, setSearch] = useState("");
  const [section, setSection] = useState("All");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const sections = ["All", "Men", "Women", "Kids"];

  const categoriesBySection = {
    All: [
      "All",
      "Sneakers",
      "Formal Shoes",
      "Sports Shoes",
      "Loafers",
      "Sandals",
      "Heels",
      "Flats",
      "Wedges",
      "School Shoes",
    ],
    Men: ["All", "Sneakers", "Formal Shoes", "Sports Shoes", "Loafers", "Sandals"],
    Women: ["All", "Sneakers", "Heels", "Flats", "Sandals", "Wedges", "Sports Shoes"],
    Kids: ["All", "Sneakers", "School Shoes", "Sports Shoes", "Sandals"],
  };

  let filtered = products.filter((product) => {
    const matchSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());

    const matchSection = section === "All" || product.section === section;
    const matchCategory = category === "All" || product.category === category;

    return matchSearch && matchSection && matchCategory;
  });

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section className="section shop-page">
      <div className="section-heading">
        <p>Shop Footwear</p>
        <h2>Men, Women & Kids Collection</h2>
      </div>

      <div className="section-tabs">
        {sections.map((item) => (
          <button
            key={item}
            className={section === item ? "tab-btn active" : "tab-btn"}
            onClick={() => {
              setSection(item);
              setCategory("All");
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="shop-controls">
        <input
          type="text"
          placeholder="Search shoes, heels, sneakers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categoriesBySection[section].map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="low">Price Low to High</option>
          <option value="high">Price High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <p className="result-count">{filtered.length} products found</p>

      <div className="product-grid">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          ))
        ) : (
          <h3>No products found</h3>
        )}
      </div>
    </section>
  );
}

export default Shop;