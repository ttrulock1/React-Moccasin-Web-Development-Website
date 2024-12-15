import React, { useState, useEffect } from "react";
import "../assets/styles/style.css";
import "../assets/styles/style2.css"

const Slideshow = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="slideshow-container">
      {testimonials.map((text, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === currentSlide ? "active" : ""}`}
          style={{ display: index === currentSlide ? "block" : "none" }}
        >
          <div className="text">{text}</div>
        </div>
      ))}

      <div className="slideshow-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Slideshow;