import React from "react";
import Skills from "../Skills/Skills";
import { Link } from "react-router-dom";

function About() {
  function showContact() {
    let spans = document.querySelectorAll(`.ul-nav li span `);
    let contact = document.getElementById("about-contact");
    let sectionContact = document.getElementById("contact");

    for (let i = 0; i < spans.length; i++) {
      spans[i].classList.remove("active");
    }

    contact.classList.add("active");
    sectionContact.classList.add("active");
  }

  return (
    <>
      <section className="about section  " id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>

            <div className="row">
              <div className="about-content padd-15">
                {/* Text */}
                <div className="row">
                  <div className="about-text padd-15">
                    <h3>
                      I`m Abdelrhman Ali <span> Front End Developer</span>
                    </h3>
                    <p>
                      I`am a Frontend Developer with expertise in key
                      technologies, utilizing technical proficiency and
                      creativity to create engaging user experiences and advance
                      in a professional career. I am a quick learner, always
                      eager to take on new challenges. I am a quick learner,
                      always eager to take on new challenges. I am a front-end
                      developer, Creating web pages and web applications is my
                      passion. I am looking forward to being the kind of
                      assistant you need to make your business flourish.
                    </p>
                  </div>
                </div>

                {/* personal info  */}
                <div className="row">
                  <div className="personal-info padd-15">
                    <div className="row">
                      <div className="info-itme padd-15">
                        <p>
                          <i className="fa fa-arrow-circle-right"></i> Birthday:
                          <span>18 Dec 1999</span>
                        </p>
                      </div>

                      <div className="info-itme padd-15">
                        <p>
                          <i className="fa fa-arrow-circle-right"></i> Phone:
                          <span>01008034761</span>
                        </p>
                      </div>

                      <div className="info-itme padd-15">
                        <p>
                          <i className="fa fa-arrow-circle-right"></i> City:
                          <span> Cairo</span>
                        </p>
                      </div>

                      <div className="info-itme padd-15">
                        <p>
                          <i className="fa fa-arrow-circle-right"></i> GitHub:
                          <Link
                            to="https://github.com/abdelrhman1812"
                            className="text-black"
                            target="_blank"
                          >
                            https://github.com/abdelrhman1812
                          </Link>
                        </p>
                      </div>

                      <div className="info-itme padd-15">
                        <p>
                          <i className="fa fa-arrow-circle-right"></i> Email:
                          <Link
                            to="mailto:abdelrhmanali1812@gmail.com"
                            className="text-black"
                            target="_blank"
                          >
                            abdelrhmanali1812@gmail.com
                          </Link>
                        </p>
                      </div>

                      <div className="info-itme padd-15">
                        <p>
                          <i className="fa fa-arrow-circle-right"></i>{" "}
                          Freelnace:
                          <span>Available</span>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="buttons padd-15">
                        <span onClick={showContact} className="btn hire-me">
                          Contact Me
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* skils */}
                  {/* <div className="skills padd-15">
                    <div className="row">
                      <div className="skill-item padd-15">
                        <h5>Css</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{ width: "90%" }}
                          ></div>
                          <div className="skill-percent">90%</div>
                        </div>
                      </div>

                      <div className="skill-item padd-15">
                        <h5>React</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{ width: "80%" }}
                          ></div>
                          <div className="skill-percent">80%</div>
                        </div>
                      </div>

                      <div className="skill-item padd-15">
                        <h5>Html</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{ width: "70%" }}
                          ></div>
                          <div className="skill-percent">70%</div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>

                <Skills />
                {/* Education */}
                <div className="row">
                  <div className="education padd-15">
                    <h3 className="title padd-15"> Education </h3>
                    <div className="row">
                      <div className="timeine-box padd-15">
                        <div className="timeline shadow-dark">
                          <div className="timeline-item ">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> 2018 - 2022
                            </h3>
                            <h4 className="timeline-title">
                              Bachelor of Technology Information Systems.(TIS)
                            </h4>
                            <p className="timeline-text">
                              Faculty Of Management Technology and Information
                              Systems ( Port said University)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="experience  padd-15">
                    <h3 className="title padd-15"> Experience </h3>

                    <div className="row">
                      <div className="timeine-box padd-15">
                        <div className="timeline shadow-dark">
                          <div className="timeline-item ">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> Jul 2023 - Nov
                              2023
                            </h3>
                            <h4 className="timeline-title">
                              Frontend Developer, Route Academy
                            </h4>
                            <p className="timeline-text">
                              The course cover frontend tools such JavaScript,
                              Ajax, Json, and React.js
                            </p>
                            <p className="timeline-text">
                              Development of a new, highly responsive, web-based
                              user interface
                            </p>
                          </div>

                          <div className="timeline-item ">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> Mar 2023 - Apr
                              2023
                            </h3>
                            <h4 className="timeline-title">
                              Web Design,National Telecommunication Institute
                              'NTI'
                            </h4>
                            <p className="timeline-text">
                              The course cover frontend tools such HTML5, CSS 3,
                              Bootstrap, and JavaScript
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
