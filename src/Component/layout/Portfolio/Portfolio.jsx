import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import projects from "../../../Assets/Data/data";
import ProjectItem from "./ProjectItem";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("latest");
  const projectContainerRef = useRef(null); // Ref for the project container

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredProjects =
    selectedFilter === "latest"
      ? projects.filter((project) => project.isLatest)
      : projects.filter((project) => project.type.includes(selectedFilter));

  // Animate projects when filtered
  useEffect(() => {
    const projectItems = projectContainerRef.current.children;
    gsap.fromTo(
      projectItems,
      { opacity: 0, y: 30 }, // Initial state
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: "power2.out" } // Final state
    );
  }, [filteredProjects]);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Projects</h2>
          </div>
        </div>

        <div className="filter-buttons">
          <button
            className={selectedFilter === "latest" ? "active" : ""}
            onClick={() => handleFilterChange("latest")}
          >
            Latest
          </button>
          <button
            className={selectedFilter === "Fullstack" ? "active" : ""}
            onClick={() => handleFilterChange("Fullstack")}
          >
            Fullstack
          </button>
          <button
            className={selectedFilter === "React" ? "active" : ""}
            onClick={() => handleFilterChange("React")}
          >
            React
          </button>
          <button
            className={selectedFilter === "Node.js" ? "active" : ""}
            onClick={() => handleFilterChange("Node.js")}
          >
            Node.js
          </button>
          <button
            className={
              selectedFilter === "HTML, CSS, Bootstrap, JS" ? "active" : ""
            }
            onClick={() => handleFilterChange("HTML, CSS, Bootstrap, JS")}
          >
            HTML, CSS, Bootstrap, JS
          </button>
        </div>

        {/* Render filtered projects with animation */}
        <div className="row" ref={projectContainerRef}>
          {filteredProjects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
