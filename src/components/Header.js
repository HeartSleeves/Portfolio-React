import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header>
      <h1>Ivy Lovegood: Junior Developer</h1>
      <h2>Early projects and applications</h2>
      <p id="networklinks">
        Find me at <a href="https://github.com/Love-Ivy">Github</a> and
        <a href="https://www.linkedin.com/in/ivylovegood/">LinkedIn</a>, or see
        my
        <a href="https://drive.google.com/file/d/1Nz5D1PPNpUJDk3xxPtADTiLhRyxNB12O/view?usp=sharing">
          Resume
        </a>
      </p>
    </header>
  );
}

export default Header;
