import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, size = "Default") => {
    const exists = cart.find(
      (item) => item.id === product.id && item.size === size
    );

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, size, quantity: 1 }]);
    }

    toast.success("Added to cart!");
  };

  const removeFromCart = (id, size) => {
    setCart(cart.filter((item) => !(item.id === id && item.size === size)));
    toast.error("Removed from cart");
  };

  const increaseQty = (id, size) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id, size) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.size === size && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);

    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
      toast.error("Removed from wishlist");
    } else {
      setWishlist([...wishlist, product]);
      toast.success("Added to wishlist");
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <>
      <Toaster position="top-right" />

      <Navbar cartCount={cart.length} wishlistCount={wishlist.length} />
      <ScrollTop />
      <WhatsAppButton />
      <BackToTop />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          }
        />

        <Route
          path="/shop"
          element={
            <Shop
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          }
        />

        <Route
          path="/checkout"
          element={<Checkout cart={cart} clearCart={clearCart} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;