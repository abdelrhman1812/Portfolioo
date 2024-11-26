import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import projects from "../../../Assets/Data/data";
import "./Portfolio.css";
import ProjectItem from "./ProjectItem";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("latest");
  const sectionRef = useRef(null); // Ref for the section
  const titleRef = useRef(null); // Ref for the title
  const filterRef = useRef(null); // Ref for the filter buttons
  const projectContainerRef = useRef(null); // Ref for the project container

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredProjects =
    selectedFilter === "latest"
      ? projects.filter((project) => project.isLatest)
      : projects.filter((project) => project.type.includes(selectedFilter));

  useEffect(() => {
    // Animate title and filters on scroll
    gsap.fromTo(
      [titleRef.current, filterRef.current],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate each project item on scroll
    const projectItems = gsap.utils.toArray(".portfolio-item");
    projectItems.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 }, // Start state
        {
          opacity: 1,
          y: 0, // End state
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%", // When the item enters the viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [filteredProjects]);

  return (
    <section className="portfolio section" id="portfolio" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2 ref={titleRef}>Projects</h2>
          </div>
        </div>

        <div className="filter-buttons" ref={filterRef}>
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

        {/* Render filtered projects */}
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
