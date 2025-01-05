import React from "react";
import "../assets/styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Websites() {
  return (
    <div className="websites">
      <section className="webdevelopment">
        <div className="wordpress">
          <img src="/React-Moccasin-Web-Development-Website/images/WordpressPic.png" alt="WordPress or Squarespace Site" />
          <section className="webdevelopmenttext">
            <h3>WordPress or Squarespace Site</h3>
            <p>
              These sites are best for users who want to edit things consistently and
              would like hands-on customizing. Easy to set up, easy to sell, and easy to
              maintain.
            </p>
            <p>
              Moccasin House will set up the website, and you can maintain, update, or
              customize it. If you mess up, no problem! Just message us, and we’ll get you
              back on track.
            </p>
          </section>
        </div>
        <div className="codebasebaseddev">
          <img src="/React-Moccasin-Web-Development-Website/images/flyingbiscuit.png" alt="Professional Site" />
          <section className="webdevelopmenttext">
            <h3>Professional Site</h3>
            <p>
              Moccasin Development will design a website to your exact needs, whether you’re
              creating a site for your restaurant, store, passion project, or charity.
              Using cutting-edge code such as React, Angular, and JavaScript, we’ll build
              whatever your project requires.
            </p>
          </section>
        </div>
      </section>

      <section className="mywork1">
        <h2 className="portfoliotitle">Websites Designed by Us</h2>
        <div className="portfolio">
          <a href="http://culture-cross.org/" className="portfolio_item">
            <img src="/React-Moccasin-Web-Development-Website/images/CultureCross.png" alt="Culture Cross Jewelry" />
            <p>Culture Cross Jewelry</p>
          </a>
          <a href="https://flyingbiscuit.com/" className="portfolio_item">
            <img src="/React-Moccasin-Web-Development-Website/images/flyingbiscuit.png" alt="Flying Biscuit" />
            <p>Flying Biscuit</p>
          </a>
          <a href="https://elgatomontes.com/" className="portfolio_item">
            <img src="/React-Moccasin-Web-Development-Website/images/ElGatoMontes.png" alt="El Gato Montes" />
            <p>El Gato Montes</p>
          </a>
          <a href="https://flyapp.world/" className="portfolio_item">
            <img src="/React-Moccasin-Web-Development-Website/images/FlyAppWorld.png" alt="Fly App" />
            <p>Fly App</p>
          </a>
          <a href="https://lafronteranm.org/" className="portfolio_item">
            <img src="/React-Moccasin-Web-Development-Website/images/WhateverMag.png" alt="Whatever Magazine" />
            <p>Whatever Magazine</p>
          </a>
          <a href="https://gardendelitogo.com/" className="portfolio_item">
            <img src="/React-Moccasin-Web-Development-Website/images/GardenDeli.png" alt="Garden Deli" />
            <p>Garden Deli</p>
          </a>
          <a href="https://www.southmag.com/" className="portfolio_item">
            <img src="/React-Moccasin-Web-Development-Website/images/SouthMagazine.png" alt="South Magazine" />
            <p>South Magazine</p>
          </a>
          <a href="https://chuzefitness.com/membership" className="portfolio_item">
            <img src="/React-Moccasin-Web-Development-Website/images/ChuzeFitness.png" alt="Chuze Fitness" />
            <p>Chuze Fitness</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Websites;