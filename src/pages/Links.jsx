import React from "react";
import "../assets/styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Links() {
  return (
    <div className="links">
      <main className="mywork1">
        <section className="mywork" id="mywork">
          <a href="/websites" className="portfolio_item">
            <div className="position-relative">
              <img className="camp" src="/images/topgolf.png" alt="Top Golf" />
              <p>See our other websites.</p>
            </div>
          </a>

          <div className="Portfolio">
            <a href="http://culture-cross.org/" className="portfolio_item">
              <img src="/images/DeathWaitsForYou.png" alt="Digital Art" />
              <p>Todd Trulock Digital Art</p>
            </a>

            <a href="https://flyingbiscuit.com/" className="portfolio_item">
              <img src="/images/GitHub1.png" alt="GitHub" />
              <p>Todd Trulock GitHub</p>
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

            <a href="https://chuzefitness.com/membership" className="portfolio_item">
              <img src="/images/ChuzeFitness.png" alt="Chuze Fitness" />
              <p>Chuze Fitness</p>
            </a>
          </div>
        </section>
      </main>

    </div>
  );
}

export default Links;
