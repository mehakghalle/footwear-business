import React from "react";

function Contact() {
  return (
    <section className="contact-page">
      <div className="section-heading">
        <p>Contact Us</p>
        <h2>Get In Touch</h2>
      </div>

      <div className="contact-layout">
        <form className="contact-form">
          <input placeholder="Your Name" required />
          <input placeholder="Your Email" type="email" required />
          <input placeholder="Subject" required />
          <textarea placeholder="Message" required></textarea>
          <button className="primary-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Store Details</h3>
          <p><b>Address:</b> Ludhiana, Punjab, India</p>
          <p><b>Email:</b> support@solestyle.com</p>
          <p><b>Phone:</b> +91 98765 43210</p>
          <p><b>Timing:</b> Mon - Sat, 10 AM - 8 PM</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;