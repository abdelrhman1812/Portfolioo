import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import Services from '../Services/Services'
import StyleSwitch from '../StyleSwitch/StyleSwitch'

function MainContent() {
    return <>
        <div className="main-content">
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <StyleSwitch />
        </div>

    </>
}

export default MainContent
