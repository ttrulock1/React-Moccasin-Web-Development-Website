import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "../assets/styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SocialMedia() {
  return (
    <div className="social-media">
      <main>
        <section className="social-section">
          <h1>Connect With Us</h1>
          <p>Stay updated and connect with us on social media:</p>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/moccasinwebdev" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/moccasinwebdev" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/moccasinwebdev" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/moccasinwebdev" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i> LinkedIn
              </a>
            </li>
          </ul>
        </section>

        <section className="social-info">
          <h2>Why Follow Us?</h2>
          <p>
            We regularly share updates, tips, and insights into web development, design trends,
            and ways to enhance your online presence.
          </p>
        </section>
      </main>
    </div>
  );
}

export default SocialMedia;
