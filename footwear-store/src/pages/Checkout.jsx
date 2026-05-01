import React, { useState } from "react";

function Checkout({ cart, clearCart }) {
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const randomOrderId = "SOLE" + Math.floor(100000 + Math.random() * 900000);

    setOrderId(randomOrderId);
    setSuccess(true);
    clearCart();
  };

  if (success) {
    return (
      <section className="success-page">
        <div className="success-card">
          <h1>Order Placed Successfully!</h1>
          <p>Thank you for shopping with SoleStyle.</p>
          <h3>Order ID: {orderId}</h3>
          <p>Your order confirmation has been generated.</p>
        </div>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="empty-cart">
        <h2>No items for checkout</h2>
        <p>Please add products to cart first.</p>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <h2>Checkout</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <input required placeholder="Full Name" />
        <input required placeholder="Email Address" type="email" />
        <input required placeholder="Phone Number" pattern="[0-9]{10}" />
        <textarea required placeholder="Full Delivery Address"></textarea>

        <select required>
          <option value="">Select Payment Method</option>
          <option>Cash on Delivery</option>
          <option>UPI</option>
          <option>Credit/Debit Card</option>
        </select>

        <div className="checkout-summary">
          <h3>Order Items</h3>

          {cart.map((item) => (
            <p key={`${item.id}-${item.size}`}>
              {item.name} x {item.quantity}
              <span>₹{item.price * item.quantity}</span>
            </p>
          ))}
        </div>

        <h3>Total Amount: ₹{total}</h3>

        <button className="primary-btn full-btn">Place Order</button>
      </form>
    </section>
  );
}

export default Checkout;