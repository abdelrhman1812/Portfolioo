import React from "react";
import Typewriter from "typewriter-effect";
import heroImage from "../../../Assets/images/Abdelrhman.JPG";
import MainHeaderLinks from "./MainHeaderLinks";

const typingOptions = {
  autoStart: true,
  loop: true,
  delay: 100,
  strings: ["Front End Developer"],
};

const links = [
  {
    path: "https://www.linkedin.com/in/abdelrahman-ali-b3a343284/",
    icon: <i className="fa-brands fa-linkedin"></i>,
  },
  {
    path: "https://github.com/abdelrhman1812/abdelrhman1812",
    icon: <i className="fa-brands fa-github"></i>,
  },
  {
    path: "https://wa.me/+2001008034761?text=welcome",
    icon: <i className="fa-brands fa-whatsapp"></i>,
  },
];

const MainHeader = () => {
  return (
    <header>
      <section className="home section active" id="home">
        <div className="container">
          <div className="row">
            {/* Information Section */}
            <div className="home-info padd-15">
              <h3 className="my-profession">
                I`m a
                <span className="typing">
                  <Typewriter options={typingOptions} />
                </span>
              </h3>
              <h3 className="hello">
                <span>Hello, My Name Is</span>
                <span className="name"> Abdelrhman</span>
              </h3>
              <p>
                Highly skilled Front-End Developer with experience in designing,
                developing, and maintaining web applications using modern
                front-end frameworks.
              </p>

              <div className="contact-me padd-15">
                {links.map((link, index) => (
                  <MainHeaderLinks
                    key={index}
                    path={link.path}
                    icon={link.icon}
                  />
                ))}
              </div>

              <a
                href="https://drive.google.com/file/d/136H7UsgEu4g2Cy14iJNgiqPVUqhIypV5/view?usp=sharing"
                className="btn cv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <i className="fa-solid fa-download"></i>
              </a>
            </div>

            {/* Image Section */}
            <figure>
              <img src={heroImage} alt="Abdelrhman" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>
    </header>
  );
};

export default MainHeader;
