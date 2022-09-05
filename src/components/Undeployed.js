import React from "react";
import "../styles/Undeployed.css";

const styles = {
  heading: {
    color: "#937ca4",
  },
};

function Undeployed(props) {
  return (
    <aside>
      <h2 style={styles.heading}>Undeployed projects and applications</h2>
      <hr style={styles.heading} />
      {props.undeployed.map((undeployed) => (
        <section class="undeployed">
          <h4>
            <a class="repolink" href={undeployed.repo}>
              {undeployed.title}
            </a>
          </h4>
          <figcaption class="page-description">{undeployed.desc}</figcaption>
        </section>
      ))}
    </aside>
  );
}

export default Undeployed;
