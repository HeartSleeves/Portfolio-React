import React from "react";
import "../../styles/Deployed.css";

const styles = {
  heading: {
    color: "#583a6d",
  },
};

function Deployed(props) {
  return (
    <main>
      {props.deployments.map((deployments) => (
        <section class="application">
          <iframe
            src={deployments.deployment}
            title={deployments.title}
          ></iframe>
          <figcaption class="page-description">{deployments.desc}</figcaption>
          <div>
            <a class="pagelink" href={deployments.deployment}>
              Deployed page
            </a>
            <a class="repolink" href={deployments.repo}>
              Github repo
            </a>
          </div>
        </section>
      ))}
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
    </main>
  );
}

export default Deployed;
