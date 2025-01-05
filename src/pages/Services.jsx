import React from "react";
import "../assets/styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Services() {
  return (
    <div className="services">
      <Header />

      <section className="services3" id="services">
        <h2 className="servicestitle">Our Services</h2>
        <div className="services4">
          <section id="jobs">
            <h3>Website Development</h3>
            <p>
              With decades of experience, Moccasin House Publishing has designed
              websites for small businesses, non-profits, restaurants, bands, colleges,
              and universities.
            </p>
          </section>
          <section id="jobs">
            <h3>Database Building</h3>
            <p>
              From building the Archive Archive Database for Georgia State University
              to designing databases for non-profits and small businesses like restaurants,
              Moccasin House works with partners to tailor each database to specific needs.
            </p>
          </section>
          <section id="jobs">
            <h3>SEO Optimization</h3>
            <p>
              Specific algorithms dictate search engine behavior. We use tools and
              strategies, like Yoast SEO, to ensure your store climbs the Google
              search list. <a href="/SEOOptimization">Click here to learn more.</a>
            </p>
          </section>
        </div>
      </section>

      <section className="webdevelopment">
        <div className="wordpress">
          <img src="/React-Moccasin-Web-Development-Website/images/WordpressPic.png" alt="WordPress" />
          <section className="webdevelopmenttext">
            <h3>WordPress or Squarespace Sites</h3>
            <p>
              These sites are best for users who want hands-on control and frequent
              updates. Easy to set up, edit, and use. Moccasin House will set up
              the website, and you can maintain, update, or customize it. Need help?
              We’ll get you back on track.
            </p>
          </section>
        </div>
        <div className="codebasebaseddev">
          <img src="/React-Moccasin-Web-Development-Website/images/flyingbiscuit.png" alt="Custom Development" />
          <section className="webdevelopmenttext">
            <h3>Professional Custom Sites</h3>
            <p>
              Moccasin Development designs websites to your exact needs, whether it’s
              for a restaurant, store, personal site, or charity. We use cutting-edge
              technologies like React, Angular, or whatever your project requires.
            </p>
          </section>
        </div>
      </section>

      <section className="mainnews">
        <div className="mainsnewscolumn">
          <img src="/React-Moccasin-Web-Development-Website/images/webdevelopment.png" alt="Web Development" id="mainnnewsphoto" />
        </div>
        <div className="mainsnewscolumn" id="LFCJobs">
          <h2 className="aboutmetitle">Web Development</h2>
          <h3>Arizona and New Mexico</h3>
          <p>
            As one of the larger web developers in Arizona, we keep a mom-and-pop
            mentality, working as a local business for local businesses. Yes, the owner
            still codes, and no, they don’t get in the way.
          </p>
          <p>
            We design custom websites for businesses using platforms like WordPress or
            Squarespace, or build them from scratch using React, CSS, HTML, and
            JavaScript. <a href="/websites">Click here to find your website.</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;