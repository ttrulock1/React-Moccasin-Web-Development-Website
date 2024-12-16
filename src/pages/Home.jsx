import React from "react";
import "../assets/styles/style.css";
import "../assets/styles/style2.css";


function Home() {
  return (
    <div className="home">

      <section className="services3" id="services">
        <div className="services4">
          <section className="jobs">
            <h3>Website Development</h3>
            <p>
              With decades of experience, Moccasin House Publishing has designed websites for small businesses, non-profits, magazines, bands, and universities.
            </p>
          </section>
          <section id="database" className="jobs">
            <h3>Database Building</h3>
            <p>
              From building the Archive Archive Database for Georgia State University to designing databases for non-profits and small businesses like restaurants and jewelry shops, Moccasin House tailors each database to specific needs.
            </p>
          </section>
          <section className="jobs">
            <h3>SEO Optimization</h3>
            <p>
              Specific algorithms dictate search engine behavior. We use cutting-edge tools and strategies, like Yoast SEO, to help your site climb search rankings.
              <a href="/seo">Click here to see how we can help.</a>
            </p>
          </section>
        </div>
      </section>

      <section className="mainnews">
        <div className="mainsnewscolumn">
          <img src="/images/webdevelopment.png" alt="Web Development" id="mainnnewsphoto" />
        </div>
        <div className="mainsnewscolumn" id="LFCJobs">
          <h2 className="aboutmetitle">Web Development</h2>
          <h3>SouthEastern Arizona</h3>
          <p>
            As one of the larger web developers in Arizona and the Southwest U.S., we ensure a mom-and-pop mentality as a local business working for other local businesses.
          </p>
          <p>Yes, the owner still codes. No, he doesn't get in the way.</p>
          <p>
            Yet what remains important is that we design you and your business a website using WordPress, Squarespace, or build your website from scratch using React, CSS, HTML, and JavaScript while ensuring it is SEO optimized.
          </p>
          <a href="/websites">
            <button className="button button2">Click here to find your website</button>
          </a>
        </div>
      </section>

      <main className="mywork1">
        <section className="mywork" id="mywork">
          <h2 className="portfoliotitle">Our Sites</h2>
          <a href="/websites" className="portfolio_item">
            <div className="position-relative">
              <img className="camp" src="/images/topgolf.png" alt="TopGolf" />
              <p>See all our websites.</p>
            </div>
          </a>
          <div className="Portfolio">
            <a href="http://culture-cross.org/" className="portfolio_item">
              <img src="/images/CultureCross.png" alt="Culture Cross" />
              <p>Culture Cross Jewelry</p>
            </a>
            <a href="https://flyingbiscuit.com/" className="portfolio_item">
              <img src="/images/flyingbiscuit.png" alt="Flying Biscuit" />
              <p>Flying Biscuit</p>
            </a>
            <a href="https://elgatomontes.com/" className="portfolio_item">
              <img src="/images/ElGatoMontes.png" alt="El Gato Montes" />
              <p>El Gato Montes</p>
            </a>
            <a href="https://flyapp.world/" className="portfolio_item">
              <img src="/images/FlyAppWorld.png" alt="Fly App" />
              <p>Fly App</p>
            </a>
            <a href="https://lafronteranm.org/" className="portfolio_item">
              <img src="/images/WhateverMag.png" alt="Whatever Magazine" />
              <p>Whatever Magazine</p>
            </a>
            <a href="https://gardendelitogo.com/" className="portfolio_item">
              <img src="/images/GardenDeli.png" alt="Garden Deli" />
              <p>Garden Deli</p>
            </a>
            <a href="https://www.southmag.com/" className="portfolio_item">
              <img src="/images/SouthMagazine.png" alt="South Magazine" />
              <p>South Magazine</p>
            </a>
            <a href="https://chuzefitness.com/" className="portfolio_item">
              <img src="/images/ChuzeFitness.png" alt="Chuze Fitness" />
              <p>Chuze Fitness</p>
            </a>
          </div>
        </section>
      </main>

      <section className="blurbparent">
        <div className="blurb">
          <h1>Let us design your website.</h1>
          <p>
            Moccasin House Publishing guarantees that you will get our undivided attention throughout the website designing experience. We will make the website how you want it and ensure it meets your business, idea, or organization’s needs.
          </p>
          <p>
            We specialize in two things: Web Development and SEO Optimization, making us one of the best web developer houses in Arizona and New Mexico.
          </p>
          <p>
            <a href="/testimonials">Click here to read testimonials.</a>
          </p>
        </div>
      </section>

      <section className="aboutmoccasin">
        <div className="aboutmoccasintext">
          <h2 className="aboutmoccasintitle">Who We Are</h2>
            <section className="aboutmoccasinparagraph">
              <p>
                Moccasin provides web development and SEO Optimization to small businesses and organizations throughout Arizona, New Mexico, and the Southwestern United States.
              </p>
              <p>
                We design websites tailored to your needs and work collaboratively with you to maximize your vision.
              </p>
              <p id="moccasintextp">
                In all our work, we consider the best options for SEO Optimization, scalability, and design. Moccasin Development believes in working with the client. <a href="/seo">Click here to learn more about how we can help you and your business.</a>
              </p>
            </section>
        </div>
      </section>
    </div>
  );
}

export default Home;
