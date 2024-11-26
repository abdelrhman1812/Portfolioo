import React from "react";
import StyleSwitch from "../../StyleSwitch/StyleSwitch";
import About from "../About/About";
import Contact from "../Contact/Contact";
import MainHeader from "../Header/MainHeader";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

function MainContent() {
  return (
    <>
      <div className="main-content">
        <MainHeader />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <StyleSwitch />
      </div>
    </>
  );
}

export default MainContent;
