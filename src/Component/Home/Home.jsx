import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Home() {
  // function showContact() {
  //   let spans = document.querySelectorAll(`.ul-nav li span `);
  //   let contact = document.getElementById("about-contact");
  //   let sectionContact = document.getElementById("contact");

  //   for (let i = 0; i < spans.length; i++) {
  //     spans[i].classList.remove("active");
  //   }

  //   contact.classList.add("active");
  //   sectionContact.classList.add("active");
  // }
  return (
    <>
      <section className="home section active  " id="home">
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="my-profession">
                I` m a
                <span className="typing">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      strings: [
                        " Front End Developer ",
                        " Web Designer ",
                        " Web Developer ",
                      ],
                    }}
                  />
                </span>
              </h3>
              <h3 className="hello">
                <span> Hello ,My Name Is</span>{" "}
                <span className="name"> Abdelrhman</span>
              </h3>
              <p>
                I`am a Frontend Developer with expertise in key technologies,
                utilizing technical proficiency and creativity to create
                engaging user experiences and advance in a professional career.
                I am a quick learner, always eager to take on new challenges. I
                am a front-end developer, Creating web pages and web
                applications is my passion. I am looking forward to being the
                kind of assistant you need to make your business flourish.
              </p>

              <div className="contact-me padd-15">
                <Link
                  to="https://www.linkedin.com/in/abdelrahman-ali-b3a343284/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin "></i>
                </Link>
                <Link to="https://github.com/abdelrhman1812" target="_blank">
                  <i className="fa-brands fa-github "></i>
                </Link>

                <Link
                  to="https://wa.me/+2001008034761?text=welcome"
                  target="_blank"
                >
                  <i className="fa-brands fa-whatsapp "></i>
                </Link>
              </div>
              {/* <span onClick={showContact} className="btn hire-me">
                Contact Me <i className="fa-solid fa-arrow-right"></i>
              </span> */}
              <Link
                to="https://drive.google.com/file/d/1mqJISZYk20CEFbH5VEnu38ZvAuyV9cXl/view?usp=sharing"
                className="btn cv"
                target="_blank"
              >
                Download CV <i className="fa-solid fa-download"></i>
              </Link>
            </div>

            <div className="home-img padd-15">
              <img src={require("../../Assets/images/header/ody.jpg")} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
