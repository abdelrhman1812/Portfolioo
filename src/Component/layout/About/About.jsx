import React from "react";
import "./About.css";
import AboutMe from "./AboutMe";
import PersonalInfo from "./PersonalInfo";
import Timeline from "./Timeline";

function About() {
  return (
    <>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>

            <div className="row">
              <div className="about-content padd-15">
                <AboutMe />

                {/* personal info  */}
                <PersonalInfo />
                {/* Skills */}
                {/* Education */}
                <Timeline />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
