import React from "react";
import Slideshow2 from "../components/SlideShow2";
import Slideshow from "../components/SlideShow";

import "../assets/styles/style.css"
import "../assets/styles/style2.css"
import "../assets/styles/slidingmarque.css"


function Testimonials() {
  return (
    <div className="testimonials">
      <main>
        <section className="intro">
          <h1>Let us design your website</h1>
          <p>
            Moccasin House allowed my restaurant to create an online menu and ordering system. We wouldn't have survived the beginning of the pandemic. ~ Mike Choi
          </p>
        </section>

        <section className="slideshow-container">
          <div className="mySlides fade">
            <div className="text">
              When we went to Moccasin House, we took our jewelry company from a traveling business to a hybrid business. The business we do online is every bit as equal to what we are doing on the road. We are able to make money and pick and choose the road shows we want to do. ~ Benjamin Zinn
            </div>
          </div>

          <div className="mySlides fade">
            <div className="text">
              When we needed a website, we went to Moccasin House Web Development. They have designed every single one of our websites. When we opened Savannah Kayak and Canoe, Moccasin House allowed us to get our products online, get us on the top page of Google, and expand our footprint throughout Coastal Georgia. ~ Nigel Butler
            </div>
          </div>

          <div className="mySlides fade">
            <div className="text">
              In 2019, I had the Moccasin House team make us a website and online ordering system. Moccasin House allowed my restaurant to create an online menu and ordering system. We wouldn't have survived the beginning of the pandemic. ~ Mike Choi
            </div>
          </div>
        </section>


        <div className="slideshow-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        

        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>Reach out for a consultation or any questions:</p>
          <p>Email: <a href="mailto:info@moccasin.org">info@moccasin.org</a></p>
          <p>Phone: (229) 364-7648</p>
        </section>
      </main>        
      <Slideshow2 />
      <Slideshow />

    </div>
  );
}

export default Testimonials;
