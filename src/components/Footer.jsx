import React from "react";
import "../assets/styles/style.css";
import "../assets/styles/style2.css";


function Footer() {
  return (
    <footer className="footer">
      <section className="bottommenu" id="bottommenu">
        <img src="/React-Moccasin-Web-Development-Website/images/MyLogo(Transparent).png" id="endlogo" alt="Moccasin Logo" />
        <div className="bottommenulist">
          <section id="bottomlinks">
            <ul>Contact us directly at (229)364-7648 or email us at info@Moccasin.org.</ul>
            <ul><a href="mailto:toddstrulock@gmail.com">Click here to email us.</a></ul>
          </section>
          <section id="bottomlinks">
            <ul>For more information regarding SEO or web development, email us at info@Moccasin.org or text us at (229)364-7648.</ul>
            <ul>Moccasin House Publishing. All Rights Reserved</ul>
          </section>
          <section id="bottomlinks">
            <ul>Whatever you do in life, do not be afraid to try to do the things you want to do.</ul>
            <ul id="bottomlinksmargin">Get an Estimate</ul>
          </section>
        </div>
      </section>
    </footer>
  );
}

export default Footer;