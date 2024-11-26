import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../../Assets/images/Sidebar/st_small_507x507-pad_600x600_f8f8f8.u8-removebg-preview.png";
function Aside() {
  let togglerBtn = useRef(null);
  let aside = useRef(null);

  function showMenu() {
    toggleMenu();
  }

  function toggleMenu() {
    let totalSection = document.querySelectorAll(".section");

    aside.current.classList.toggle("open");
    togglerBtn.current.classList.toggle("open");
    for (let i = 0; i < totalSection.length; i++) {
      totalSection[i].classList.toggle("open");
    }
  }

  // =================================================================
  useEffect(() => {
    let spans = document.querySelectorAll(`.ul-nav li span `);
    let totalSection = document.querySelectorAll(".section");

    spans.forEach((span) => {
      span.addEventListener("click", function () {
        // Remove back-section
        for (let i = 0; i < totalSection.length; i++) {
          totalSection[i].classList.remove("back-section");
        }

        //this Loop To remove Active From Span and Check section Have active or no
        for (let i = 0; i < spans.length; i++) {
          if (spans[i].classList.contains("active")) {
            let totalSection = document.querySelectorAll(".section");
            totalSection[i].classList.add("back-section");
          }

          spans[i].classList.remove("active");
        }

        this.classList.add("active");
        showSection(this);

        if (window.innerWidth < 1200) {
          toggleMenu();
        }
      });
    });
  }, []);

  function showSection(element) {
    let target = element.getAttribute("section");
    let section = document.getElementById(target);

    let totalSection = document.querySelectorAll(".section");
    for (let i = 0; i < totalSection.length; i++) {
      totalSection[i].classList.remove("active");
    }

    section.classList.add("active");
  }

  return (
    <aside ref={aside} id="aside">
      <div className="logo">
        <Link>
          <img src={logo} alt="Mearn Stack" />
        </Link>
      </div>
      <div ref={togglerBtn} onClick={showMenu} className="nav-toggle">
        <span> </span>
      </div>
      <ul className="ul-nav">
        <li>
          <span section="home" className="active">
            <i className="fa fa-home"></i> Home
          </span>
        </li>
        <li>
          <span section="about">
            <i className="fa fa-user"></i>About
          </span>
        </li>
        {/* <li>
          <span section="skills">
            <i className="fa-solid fa-code"></i> Skills
          </span>
        </li> */}
        <li>
          <span section="services">
            <i className="fa fa-list"></i>Services
          </span>
        </li>
        <li>
          <span section="portfolio">
            <i className="fa fa-briefcase"></i>Project
          </span>
        </li>
        <li>
          <span section="contact" id="about-contact">
            <i className="fa fa-comments"></i>Contact
          </span>
        </li>
      </ul>

      <div className="scroll-section">
        <ScrollLink
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <i className="fa fa-home"></i> Home
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <i className="fa fa-user"></i>About
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <i className="fa-solid fa-code"></i> Skills
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <i className="fa fa-list"></i>Services
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <i className="fa fa-briefcase"></i>Project
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <i className="fa fa-comments"></i>Contact
        </ScrollLink>
      </div>
    </aside>
  );
}

export default Aside;
