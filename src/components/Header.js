import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <h1>Ivy Lovegood: Junior Developer</h1>
      <h2>Your new favorite person</h2>
      <nav>
        <h3 class="navbutton">About Me</h3>
        <h3 class="navbutton">Portfolio</h3>
        <h3 class="navbutton">Contact</h3>
        <h3 class="navbutton">Resume</h3>
      </nav>
    </header>
  );
}

export default Header;
