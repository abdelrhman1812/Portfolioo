import React from "react";
import BS from "../../Assets/images/skills/bootstrap.png";
import CSS from "../../Assets/images/skills/css.1b9dcc2e.svg";
import Git from "../../Assets/images/skills/git.svg";
import HTML from "../../Assets/images/skills/html5.a7362949.svg";
import JS from "../../Assets/images/skills/javascript.455da02c.svg";
import JQ from "../../Assets/images/skills/jquery.svg";
import Postgres from "../../Assets/images/skills/postgresql-icon.png";
import react from "../../Assets/images/skills/react.svg";
import SASS from "../../Assets/images/skills/sass.svg";
import TypeScript from "../../Assets/images/skills/typescript.svg";
import SQL from "../../Assets/images/skills/sql-database-sql-azure-icon-1955x2048-4pmty46t.png";
function Skills() {
  return (
    <>
      <section className="skills padd-15  " id="skills">
        <div className="container">
          {/* Title */}
          <div className="row">
            <div className="section-title padd-15">
              <h2>Skills</h2>
            </div>
          </div>

          <div className="row">
            <div className="skills-item shadow-dark padd-15">
              <div className="row">
                <img src={HTML} alt="" />
                <span>HTML</span>
              </div>
            </div>

            <div className="skills-item shadow-dark padd-15">
              <div className="row">
                <img src={CSS} alt="" />
                <span>CSS</span>
              </div>
            </div>

            <div className="skills-item shadow-dark padd-15">
              <div className="row">
                <img src={SASS} alt="" />
                <span>Sass</span>
              </div>
            </div>

            <div className="skills-item shadow-dark padd-15">
              <div className="row">
                <img src={JS} alt="" />
                <span>JS</span>
              </div>
            </div>

            <div className="skills-item shadow-dark padd-15">
              <div className="row">
                <img src={JQ} alt="" />
                <span>JQ</span>
              </div>
            </div>

            <div className="skills-item shadow-dark padd-15">
              <div className="row">
                <img src={react} alt="" />
                <span>React</span>
              </div>
            </div>

            <div className="skills-item shadow-dark padd-15">
              <div className="row">
                <img src={TypeScript} alt="" />
                <span>TypeScript</span>
              </div>
            </div>

            <div className="skills-item shadow-dark padd-15">
              <div className="row">
                <img src={Git} alt="" />
                <span>GitHub</span>
              </div>
            </div>

            <div className="skills-item shadow-dark padd-15">
              <div className="row">
                <img src={SQL} alt="" />
                <span>SQL</span>
              </div>
            </div>

            <div className="skills-item shadow-dark padd-15">
              <div className="row">
                <img src={Postgres} alt="" />
                <span>Postgres</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
