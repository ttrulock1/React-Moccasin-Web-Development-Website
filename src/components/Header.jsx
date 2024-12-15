import React from "react";
import "../assets/styles/style.css";
import "../assets/styles/style2.css";

function Header() {
  return (
    <header>
      <img src="/images/MyLogo(Transparent).png" alt="Moccasin House Logo" id="logo" />
      <nav>
        <ul id="toplinks">
          <li><a href="/">Home</a></li>
          <li><a href="/websites">Our Work</a></li>
          <li><a href="/links">Contact</a></li>
          {/* <li><a href="/socialmedia">Social Media</a></li> */}
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
