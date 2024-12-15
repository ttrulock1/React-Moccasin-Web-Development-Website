import React from "react";
import "../assets/styles/style.css";
import "../assets/styles/style2.css";


function Home() {
  return (
    <div className="home">

      <section className="mainnews">
        <div className="mainsnewscolumn">
          <img
            src="/images/webdevelopment.png"
            alt="Web Development"
            id="mainnnewsphoto"
          />
        </div>
        <div className="mainsnewscolumn" id="LFCJobs">
          <h2 className="aboutmetitle">Web Development</h2>
          <h3>SouthEastern Arizona</h3>
          <p>
            As one of the larger web developers in Arizona and the Southwest U.S., we
            ensure a mom-and-pop mentality as a local business working for other local
            businesses.
          </p>
          <p>Yes, the owner still codes. No, he doesn't get in the way.</p>
          <p>
            We design websites tailored to your business needs using WordPress,
            Squarespace, or custom solutions with React, CSS, HTML, and JavaScript.
          </p>
          <a href="/websites">
            <button className="button button2">Find your website</button>
          </a>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services2">
          <section id="jobs">
            <a href="/contact">
              <i className="fa fa-phone" style={{ color: "#ff8200" }}></i>
              <h3>Contact Us</h3>
            </a>
          </section>
          <section id="jobs">
            <a href="/websites">
              <i className="fa fa-laptop" style={{ color: "#ff8200" }}></i>
              <h3>Web Development</h3>
            </a>
          </section>
          <section id="jobs">
            <a href="/seo">
              <i className="fa fa-search" style={{ color: "#ff8200" }}></i>
              <h3>SEO Optimization</h3>
            </a>
          </section>
          <section id="jobs">
            <a href="/content">
              <i className="fa fa-pencil-alt" style={{ color: "#ff8200" }}></i>
              <h3>Content Building</h3>
            </a>
          </section>
        </div>
      </section>

      <section className="aboutmoccasin">
        <div className="aboutmoccasintext">
          <h2 className="aboutmoccasintitle">Who We Are</h2>
          <p>
            Moccasin provides web development and SEO optimization to small businesses
            and organizations across Arizona, New Mexico, and the Southwest.
          </p>
          <p>
            We build websites tailored to your needs, working collaboratively to bring
            your vision to life.
          </p>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Moccasin House. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;