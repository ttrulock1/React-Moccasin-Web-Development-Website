import React from "react";
import "../assets/styles/style.css";
import "../assets/styles/style2.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CalendlyWidget from "../components/Calendly";


function Contact() {
  return (
    <div className="contact-us">
      <section className="mainnews">
        <div className="mainsnewscolumn">
          <img src="/React-Moccasin-Web-Development-Website/images/webdevelopment.png" alt="Web Development" id="mainnnewsphoto" />
        </div>
        <div className="mainsnewscolumn" id="LFCJobs">
          <h2 className="aboutmetitle">Web Development</h2>
          <h3>SouthEastern Arizona.</h3>
          <p>
            As one of the larger web developers in Arizona, we ensure a mom-and-pop mentality as a local
            business working for other local businesses.
          </p>
          <button className="button button2">Click here to send the owner a personal or business message to find your website.</button>
        </div>
      </section>

      <section className="training">
        <div className="trainingtext">
          <h1>WordPress Training</h1>
          <p>Sign up for one-on-one training on optimizing your social media accounts.</p>
        </div>
        <button className="blockbutton">Register</button>
      </section>

      <section className="training">
        <div className="trainingtext">
          <h1>SEO Training</h1>
          <p>Sign up for one-on-one training on optimizing your SEO on your WordPress or Squarespace site.</p>
        </div>
        <button className="blockbutton">Register</button>
      </section>

      <section className="blurbparent">
        <section className="blurb">
          <h1>Let us design your website.</h1>
          <p>
            Moccasin House Publishing guarantees that you will get our undivided attention throughout the website
            designing experience. We will make the website how you want it and ensure it is responsive in a way that meets your
            business's, idea's, or organization's needs.
          </p>
          <p>
            We specialize in two things: Web Development and SEO Optimization, making Moccasin House one of the
            best web developer businesses in Arizona and New Mexico.
          </p>
          <p><a href="/testimonials">Click here to read more testimonials.</a></p>
        </section>
      </section>

      <section className="mainnews">
        <div className="mainsnewscolumn" id="LFCJobs">
          <h2 className="aboutmetitle">Contact Us</h2>
          <h3>Moccasin House Publishing specializes in Web Development, SEO Optimization, and Online Social Media Marketing Training.</h3>
          <p>Would you like to work with us, but have questions? Email us at Info@MoccasinDevelopment.com or text us at (229) 364-7648.</p>
          <button className="button button2">Click here to send us a quick question about us or our company.</button>
        </div>
        <div className="mainsnewscolumn">
          <img src="/React-Moccasin-Web-Development-Website/images/ToddWriting.jpg" alt="Todd Writing" id="mainnnewsphoto" />
        </div>
      </section>
      <CalendlyWidget />
    </div>
    
  );
}

export default Contact;
