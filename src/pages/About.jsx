import React from "react";
import "../assets/styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about">

      <section className="aboutmoccasin">
        <section className="introduction" id="aboutme">
          <div className="aboutmoccasintext">
            <h2 className="aboutmoccasintitle">Who We Are</h2>
            <div className="aboutmoccasintext2">
              <p>
                Moccasin provides web development and SEO Optimization to small
                businesses and organizations throughout Arizona, New Mexico, and
                the Southwestern United States.
              </p>
              <p>
                We build websites tailored to your needs and work with you to
                maximize your vision.
              </p>
              <p id="moccasintextp">
                In all our designs, we consider the best options for SEO
                Optimization. Furthermore, Moccasin Development believes in
                working with the client. Click here to learn more about how we
                can help you and your business.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="blurbparent">
        <section className="blurb">
          <h1>Let us design your website</h1>
          <p>
            Moccasin House Publishing guarantees that you will get our
            undivided attention throughout the website designing experience.
            We will make the website how you want it and make it responsive in
            a way that meets your business’s, idea’s, or organization’s needs.
          </p>
          <p>
            We specialize in two things: Web Development and SEO Optimization.
            Because of this, Moccasin House believes it is one of the best web
            developer businesses in Arizona and New Mexico.
          </p>
          <p>
            <a href="/testimonials">Click here to read more testimonials.</a>
          </p>
        </section>
      </section>

      <section className="mainnews">
        <div className="mainsnewscolumn" id="LFCJobs">
          <h2 className="aboutmetitle">SEO Optimization</h2>
          <h3>Moccasin House Publishing specializes in SEO Optimization.</h3>
          <p>
            Inquiries into our SEO services? Please contact us at
            SEO@MoccasinDevelopment and (229) 364-7648.
          </p>
          <button
            className="button button2"
            onClick={() => (window.location.href = "/SEOOptimization")}
          >
            Click here to see what we can do for your website's footprint.
          </button>
        </div>
        <div className="mainsnewscolumn">
          <img src="/React-Moccasin-Web-Development-Website/images/Local-SEO.png" alt="Local SEO" id="mainnnewsphoto" />
        </div>
      </section>
    </div>
  );
}

export default About;
