import React from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    // Use e.currentTarget instead of e.target
    emailjs
      .sendForm(
        "service_b9k5nol",
        "template_us89pmf",
        e.currentTarget, // Change this line
        "RYOyrKWRFVWTDR50M"
      )
      .then((res) => {
        console.log(res);
        toast.success(
          <div className="text-center toster">
            Thank you, my friend. I will reply back to you
          </div>,
          {
            duration: 3000,
            icon: (
              <div className="fa-2x text-danger">
                <i className="fa-regular fa-circle-check text-success"> </i>
              </div>
            ),
            position: "top-center",
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <section className="contact section " id="contact">
        <div className="container">
          {/* Title */}
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact</h2>
            </div>
          </div>

          <h3 className="contact-title padd-15">Have You Any Question ?</h3>
          <h4 className="contact-sub-title padd-15"> I`m at your service </h4>

          {/* Itme */}
          <div className="row">
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone"></i>
                <h4>Call Me</h4>
                <p> 01008034761</p>
              </div>
            </div>

            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker-alt"></i>
                <h4>Location</h4>
                <p> Mansoura</p>
              </div>
            </div>

            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope"></i>
                <h4>Email</h4>
                <p>
                  <Link
                    to="mailto:abdelrhmanali1812@gmail.com"
                    className="text-black"
                    target="_blank"
                  >
                    abdelrhmanali1812@gmail.com
                  </Link>
                </p>
              </div>
            </div>

            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-globe-europe"></i>
                <h4>Website</h4>
                <p>
                  {" "}
                  <Link
                    to="https://github.com/abdelrhman1812"
                    className="text-black"
                    target="_blank"
                  >
                    https://github.com/abdelrhman1812
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <h3 className="contact-title padd-15">Send Me An Email</h3>
          <h4 className="contact-sub-title padd-15">
            I`m Very Responsive To Messages
          </h4>

          {/* Form */}
          <form onSubmit={sendEmail}>
            <div className="row">
              <div className="contact-form padd-15">
                <div className="row">
                  <div className="form-item col-6 padd-15">
                    <div className="form-group">
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="form-item col-6 padd-15">
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="form-item col-12 padd-15">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="form-item col-12 padd-15">
                    <div className="form-group">
                      <button type="submit" className="btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
