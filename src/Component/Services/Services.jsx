import React from "react";

function Services() {
  return (
    <>
      <section className="services section  " id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Services</h2>
            </div>

            <div className="row">
              <div className="services-item padd-15">
                <div className="services-item-inner">
                  <div className="icon">
                    <i className="fa-solid fa-mobile-screen-button"></i>
                  </div>

                  <h3>
                    HTML<span>5</span> /CSS<span>3</span>
                  </h3>
                  <h4>Responsive Development</h4>
                  <p>
                    Get your desired web page coded into full responsive HTML &
                    CSS page ready to deploy
                  </p>
                </div>
              </div>

              <div className="services-item padd-15">
                <div className="services-item-inner">
                  <div className="icon">
                    <i className="fa-solid fa-laptop-code"></i>
                  </div>
                  <h3>React</h3>
                  <h4>Web App Development</h4>
                  <p>
                    Create your complex web app for your business using React by
                    Next.js framework
                  </p>
                </div>
              </div>

              <div className="services-item padd-15">
                <div className="services-item-inner">
                  <div className="icon">
                    <i className="fa-regular fa-images"></i>
                  </div>
                  <h3> Editing & Re-design</h3>
                  <p>
                    Do you have some edits and retouchs or even a complete
                    re-design I am here to do it
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
