import impervious from "../Assets/impervious_400x400.jpeg";
import { Link } from "react-router-dom";

function Project() {
  const imperviousProject = (
    <section className="main-content">
      <h3 id="work">Work</h3>
      <div className="project-container">
        <figure className="image-card">
          <img
            src={impervious}
            alt="Impervious Logo"
            className="project-image"
          />
          <figcaption className="project-title">
            <a href="https://www.impervious.ai/">Impervious Browser Project</a>
          </figcaption>
        </figure>
      </div>
    </section>
  );

  return (
    <div>
      {/* Section 2 */}
      {imperviousProject}
    </div>
  );
}

export default Project;
