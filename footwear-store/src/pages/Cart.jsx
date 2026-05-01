import React from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

function Cart({ cart, removeFromCart, increaseQty, decreaseQty }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <section className="empty-cart">
        <h2>Your Cart is Empty</h2>
        <p>Add some stylish footwear to your cart.</p>
        <Link to="/shop" className="primary-btn">Shop Now</Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h2>Shopping Cart</h2>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={`${item.id}-${item.size}`}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Size: {item.size}</p>
                <p>₹{item.price}</p>

                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id, item.size)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id, item.size)}>+</button>
                </div>
              </div>

              <button
                className="delete-btn"
                onClick={() => removeFromCart(item.id, item.size)}
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>

          <p>
            Subtotal <span>₹{total}</span>
          </p>

          <p>
            Delivery <span>Free</span>
          </p>

          <p>
            Discount <span>₹0</span>
          </p>

          <hr />

          <h2>
            Total <span>₹{total}</span>
          </h2>

          <Link to="/checkout" className="primary-btn full-btn">
            Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;