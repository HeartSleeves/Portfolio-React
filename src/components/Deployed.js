import React from "react";
import "../styles/Deployed.css";

// By importing the Deployed.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  deployedStyles: {
    background: "orange",
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Deployed(props) {
  return (
    <div>
      {props.projects.map((proj) => (
        <section class="application">
          <iframe src={proj.deployment} title={proj.title}></iframe>
          <figcaption class="page-description">{proj.desc}</figcaption>
          <div>
            <a class="pagelink" href={proj.deployment}>
              Deployed page
            </a>
            <a class="repolink" href={proj.repo}>
              Github repo
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Deployed;
