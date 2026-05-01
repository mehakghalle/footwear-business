import React, { useState } from "react";
import { toast } from "react-hot-toast";

function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = () => {
    if (!email) {
      toast.error("Please enter email");
      return;
    }

    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div>
        <h2>SoleStyle</h2>
        <p>Premium footwear for comfort, fashion, and everyday confidence.</p>
      </div>

      <div>
        <h4>Quick Links</h4>
        <p>Home</p>
        <p>Shop</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      <div>
        <h4>Support</h4>
        <p>Shipping Policy</p>
        <p>Return Policy</p>
        <p>FAQs</p>
        <p>Track Order</p>
      </div>

      <div>
        <h4>Newsletter</h4>
        <p>Get new arrivals and offers.</p>

        <div className="newsletter">
          <input
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleNewsletter}>Join</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;