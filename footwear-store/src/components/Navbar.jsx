import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Heart, Menu, X } from "lucide-react";

function Navbar({ cartCount, wishlistCount }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Sole<span>Style</span>
      </Link>

      <div className={open ? "nav-links active" : "nav-links"}>
        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/shop" onClick={() => setOpen(false)}>Shop</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
      </div>

      <div className="nav-icons">
        <div className="icon-box">
          <Heart size={21} />
          <span>{wishlistCount}</span>
        </div>

        <Link to="/cart" className="icon-box">
          <ShoppingBag size={21} />
          <span>{cartCount}</span>
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;