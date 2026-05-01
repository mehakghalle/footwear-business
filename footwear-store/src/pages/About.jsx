import React from "react";

function About() {
  return (
    <section className="about-page">
      <div>
        <p className="tagline">About SoleStyle</p>
        <h1>We Create Footwear That Matches Your Lifestyle</h1>
        <p>
          SoleStyle is a modern footwear brand focused on comfort, fashion, and
          quality. Our mission is to provide stylish shoes for every occasion,
          from daily walking to office wear, sports, parties, and casual outings.
        </p>

        <div className="stats">
          <div>
            <h2>10K+</h2>
            <p>Happy Customers</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Products Sold</p>
          </div>

          <div>
            <h2>4.8</h2>
            <p>Average Rating</p>
          </div>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
        alt="About"
      />
    </section>
  );
}

export default About;