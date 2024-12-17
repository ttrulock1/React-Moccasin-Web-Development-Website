import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Links from "./pages/Links.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Websites from "./pages/Websites.jsx";
import SocialMedia from "./pages/SociaMedia.jsx";
import Testimonials from "./pages/Testimonials.jsx";

import "./assets/styles/style.css";
import "./assets/styles/style2.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/links" element={<Links />} />
        <Route path="/contactUs" element={<Contact />} />
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

