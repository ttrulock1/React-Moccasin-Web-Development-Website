import React, { useState } from "react";
import "../assets/styles/Slideshow.css";

function Slideshow2() {
  const slides = [
    { text: "When we went to Moccasin House, we took our jewelry company from a traveling business to a hybrid business. The business we do online is every bit as equal as to what we are doing on the road. We are able to make money and pick and choose the road shows we want to do ~ Benjamin Zinn"
      , color: "#FF8200" },
    { text: "When we needed a website, we go to Moccasin House Web Development. They have designed every single one of our websites. When we opened Savannah Kayak and Canoe, Moccasin House allowed us to get our products online, get us on the top page of Google, and expand our footprint throughout Coastal Georgia. ~ Nigel Butler", color: "#FF8200" },
    {
      text: "Moccasin House allowed my restaurant to create an online menu and ordering system. We wouldn't have survived the beginning of the pandemic. ~ Mike Choi",
      color: "#FF8200",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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

      {/* Navigation buttons */}
      <button className="prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="next" onClick={nextSlide}>
        ❯
      </button>

      {/* Dots for direct navigation */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slideshow2;