import React from "react";
//TODO Create individual CSS file
import "../../styles/Undeployed.css";

const styles = {
  heading: {
    color: "#583a6d",
  },
};

function Bio(props) {
  return (
    <aside>
      <h2 style={styles.heading}>About Me</h2>
      <hr style={styles.heading} />
        <section class="undeployed">
          <h2>
            Ivy Lovegood
          </h2>
          <figcaption class="page-description">Thanks for checking out my Portfolio! I am a creative and dedicated web developer, though my interests in software engineering go far beyond. I have a decade of experience with technology and electronics in many forms. Blah blah blah, blah blah lorem ipsum blah blah this isn't really important to what I'm doing</figcaption>
        </section>
      
      </aside>
  );
}

export default Bio;
