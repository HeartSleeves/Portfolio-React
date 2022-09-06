import React from "react";
import "../../styles/Deployed.css";
import Undeployed from "./Undeployed";

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
      {Undeployed}
    </main>
  );
}

export default Deployed;
