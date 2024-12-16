import React from "react";
import Slideshow2 from "../components/SlideShow2";
import "../assets/styles/Slideshow.css";

function Testimonials() {
  return (
    <div className="testimonials-container">
      {/* Full-width marquee */}
      <section className="slideshow-container">
        <Slideshow2 />
      </section>

      {/* Contact Section */}
      <section className="contact-container">
        <h2>Contact Us</h2>
        <p>Reach out for a consultation or any questions:</p>
        <p>Email: <a href="mailto:info@moccasin.org">info@moccasin.org</a></p>
        <p>Phone: (229) 364-7648</p>
      </section>
    </div>
  );
}

export default Testimonials;
