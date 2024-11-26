import React, { useEffect, useRef } from "react";
import "./Switch.css";
function StyleSwitch() {
  const styleSwitch = useRef(null);
  const styleSwitchToggler = useRef(null);
  const convert = useRef(null);
  const mode = useRef(null);

  function convertToScrolling() {
    // Select the elements
    const navLinks = document.querySelector(".ul-nav");
    const scrollSection = document.querySelector(".scroll-section");
    const sections = document.querySelectorAll(".section");
    const mainContent = document.querySelector(".main-content");
    let spans = document.querySelectorAll(`.ul-nav li span `);
    let scrollSectionLinks = document.querySelectorAll(".scroll-section a");

    spans.forEach(function (span) {
      span.classList.remove("active");
    });
    scrollSectionLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    // Loop through each section and toggle classes
    sections.forEach((section) => {
      section.classList.toggle("position-fixed");
      section.classList.toggle("close");
    });

    // Toggle classes for other elements
    navLinks.classList.toggle("hidden");
    scrollSection.classList.toggle("d-flex");
    mainContent.classList.toggle("p-275");
  }

  /* Open Box Color */
  function open() {
    styleSwitch.current.classList.toggle("open");
  }

  /* Change Main Color Box Color */
  const StyleSwitch = (color) => {
    document.documentElement.style.setProperty("--skin-color", `${color}`);
  };

  /* Change Mode */
  const changeMode = () => {
    mode.current.classList.toggle("fa-sun");
    mode.current.classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (styleSwitch.current.classList.contains("open")) {
        styleSwitch.current.classList.remove("open");
      }
    });

    if (document.body.classList.contains("dark")) {
      mode.current.classList.add("fa-sun");
    } else {
      mode.current.classList.add("fa-moon");
    }
  }, []);

  return (
    <>
      <div ref={styleSwitch} className="style-switcher">
        <div
          ref={styleSwitchToggler}
          onClick={open}
          className="style-switcher-toggler s-icon"
        >
          <i className="fas fa-cog fa-spin"></i>
        </div>

        <div className="day-night s-icon">
          {/* <i className="fas fa-sun"></i> */}
          <i onClick={changeMode} ref={mode} className="fas "></i>
        </div>
        <div className=" convert-to-scroll">
          <i
            onClick={convertToScrolling}
            ref={convert}
            className="fa-solid fa-arrows-rotate "
          ></i>
        </div>
        <h4>Theme Colors</h4>
        <div className="colors">
          <span
            className="color-1"
            onClick={() => StyleSwitch("#ec1839")}
          ></span>
          <span
            className="color-2"
            onClick={() => StyleSwitch("#fa5b0f")}
          ></span>
          <span
            className="color-3"
            onClick={() => StyleSwitch("#37b182")}
          ></span>
          <span
            className="color-4"
            onClick={() => StyleSwitch("#1854b4")}
          ></span>
          <span
            className="color-5"
            onClick={() => StyleSwitch("#f021b2")}
          ></span>
        </div>
      </div>
    </>
  );
}

export default StyleSwitch;
