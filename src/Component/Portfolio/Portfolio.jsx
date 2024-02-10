import React from "react";
import projects from "../../Assets/Data/data";
import { Link } from "react-router-dom";
function Portfolio() {
  return (
    <>
      <section className="portfolio section  " id="portfolio">
        <div className="container">
          {/* Title */}
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>

          {/* Heading */}
          <div className="portfolio-heading padd-15">
            <h2>My Last Projects</h2>
          </div>
          <div className="row ">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src={project.imgCover} alt={project.title} />
                  </div>
                  <h3 className="padd-15 ">
                    {project.title}
                    <Link to={project.gitHub} target="_blank">
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </h3>

                  <div className="tech">
                    {project.tech.map((tech, index) => (
                      <img key={index} src={tech} alt="" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
