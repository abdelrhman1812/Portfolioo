import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Bootstrap from "../../../Assets/images/skills/bootstrap.png";
import CSS from "../../../Assets/images/skills/css.1b9dcc2e.svg";
import Express from "../../../Assets/images/skills/express-original.svg";
import Git from "../../../Assets/images/skills/git.svg";
import HTML from "../../../Assets/images/skills/html5.a7362949.svg";
import JS from "../../../Assets/images/skills/javascript.455da02c.svg";
import JQ from "../../../Assets/images/skills/jquery.svg";
import Mongo from "../../../Assets/images/skills/Mongo.svg";
import Next from "../../../Assets/images/skills/next.svg";
import Node from "../../../Assets/images/skills/nodejs.svg";
import ReactLogo from "../../../Assets/images/skills/react.svg";
import Sequelize from "../../../Assets/images/skills/sequelize.svg";
import SQL from "../../../Assets/images/skills/sql-database-sql-azure-icon-1955x2048-4pmty46t.png";
import Tailwind from "../../../Assets/images/skills/tailwind-css.svg";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { name: "HTML", image: HTML },
  { name: "CSS", image: CSS },
  { name: "Bootstrap", image: Bootstrap },
  { name: "Tailwind", image: Tailwind },
  { name: "JavaScript", image: JS },
  { name: "jQuery", image: JQ },
  { name: "React", image: ReactLogo },
  { name: "Next", image: Next },
  { name: "Node.js", image: Node },
  { name: "Express.js", image: Express },
  { name: "Sequelize", image: Sequelize },
  { name: "MongoDB", image: Mongo },
  { name: "Git", image: Git },
  { name: "SQL", image: SQL },
];

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillItems = skillsRef.current.querySelectorAll(".skills-item");

    gsap.fromTo(
      skillItems,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="skills section padd-15" id="skills" ref={skillsRef}>
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="section-title padd-15">
            <h2>Skills</h2>
          </div>
        </div>

        {/* Skills List */}
        <div className="row">
          {skillsData.map((skill, index) => (
            <div className="skills-item shadow-dark padd-15" key={index}>
              <div className="row">
                <img src={skill.image} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
