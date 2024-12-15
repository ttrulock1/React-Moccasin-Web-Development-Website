import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Links from "./pages/Links";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Websites from "./pages/Websites";
import SocialMedia from "./pages/SociaMedia";
import Testimonials from "./pages/Testimonials";

import "./assets/styles/style.css";
import "./assets/styles/style2.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/links" element={<Links />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

