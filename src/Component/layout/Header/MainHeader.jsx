import { gsap } from "gsap";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import heroImage from "../../../Assets/Abdelrhman.JPG";
import "./Header.css";
import MainHeaderLinks from "./MainHeaderLinks";

const typingOptions = {
  autoStart: true,
  loop: true,
  delay: 100,
  strings: ["Front End Developer"],
};

const links = [
  {
    path: "https://www.linkedin.com/in/abdelrhman-ali-b3a343284/",
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
  useEffect(() => {
    // GSAP Animation for text and image fade-in
    gsap.from(".home-info", {
      opacity: 0,
      duration: 1,
      x: -100,
      ease: "power3.out",
    });

    gsap.from(".hello", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      y: 50,
      ease: "power3.out",
    });

    gsap.from(".name", {
      opacity: 0,
      duration: 1,
      delay: 1,
      y: 50,
      ease: "power3.out",
    });

    gsap.from(".home-info p", {
      opacity: 0,
      duration: 1,
      delay: 1.5,
      y: 50,
      ease: "power3.out",
    });

    gsap.from(".contact-me", {
      opacity: 0,
      duration: 1,
      delay: 2,
      x: -100,
      ease: "power3.out",
    });

    gsap.from(".hero-image", {
      opacity: 0,
      duration: 1.5,
      delay: 2.5,
      scale: 0.8,
      ease: "power3.out",
    });

    gsap.from(".cv", {
      opacity: 0,
      duration: 1,
      delay: 3,
      y: 50,
      ease: "power3.out",
    });

    // GSAP Animation for continuous movement of the hero image only
    gsap.to(".hero-image", {
      x: 30, // تحرك الصورة في الاتجاه الأفقي
      y: 20, // تحرك الصورة في الاتجاه العمودي
      scale: 1.1, // تأثير التكبير للصورة
      repeat: -1, // التكرار المستمر
      yoyo: true, // حركة تكاملية للصورة
      duration: 6, // مدة الحركة لكل دورة
      ease: "power1.inOut", // حركة سلسة
    });
  }, []);

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
                className=" cv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <i className="fa-solid fa-download"></i>
              </a>
            </div>

            {/* Image Section */}
            <figure className="hero-image">
              <img src={heroImage} alt="Abdelrhman" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>
    </header>
  );
};

export default MainHeader;
