import React, { useState, useEffect } from "react";
import "../assets/styles/Slideshow.css"; // Example: In a 'styles' folder

function Slideshow2() {
  const slides = [
    { text: "Welcome to Moccasin Web Development!", color: "#FF8200" },
    { text: "We specialize in React and SEO Optimization.", color: "#21ad84" },
    { text:"Moccasin House allowed my restaurant to create an online menu and ordering system. We wouldn't have survived the beginning of the pandemic. ~ Mike Choi", color: "#4cbfa6" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [slides.length]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{
            backgroundColor: slide.color,
            display: index === currentSlide ? "block" : "none",
          }}
        >
          <p>{slide.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Slideshow2;