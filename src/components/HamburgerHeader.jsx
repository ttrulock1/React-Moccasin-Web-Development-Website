// <!-- hamburger link -->

import React from "react";
import "../assets/styles/style.css";
import "../assets/styles/style2.css";

function HamburgerHeader() {
  return (
<section class="p-menu1">
  <nav id="navbar" class="navigation" role="navigation">
    <input id="toggle1" type="checkbox" />
    <label class="hamburger1" for="toggle1">
      <div class="top"></div>
      <div class="meat"></div>
      <div class="bottom"></div>
    </label>
  
    <nav class="menu1">
      <a class="link1" href="/index">Home</a>
      <a class="link1" href="/services">Services</a>
      <a class="link1" href="/WhoWeAre">Who We Are</a>
      <a class="link1" href="/websites">Websites</a>
      <a class="link1" href="/ContactUs">Contact Us</a>
    </nav>
</nav>
</section>
  );
}

export default HamburgerHeader;

