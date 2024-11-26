import emailjs from "emailjs-com";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isFormValid = formData.name && formData.email && formData.message;

  function sendEmail(e) {
    e.preventDefault();

    if (isFormValid) {
      emailjs
        .sendForm(
          "service_b9k5nol",
          "template_us89pmf",
          e.currentTarget,
          "RYOyrKWRFVWTDR50M"
        )
        .then((res) => {
          // console.log(res);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          toast.success(
            <div className="text-center toster">
              Thank you, my friend. I will reply back to you
            </div>,
            {
              duration: 3000,
              icon: (
                <div className="fa-2x ">
                  <i
                    className="fa-regular fa-circle-check"
                    style={{ color: "#BEDC74" }}
                  >
                    {" "}
                  </i>
                </div>
              ),
              position: "top-center",
            }
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Show error toast if form is invalid
      toast.error(
        <div className="text-center toster">
          Please fill in all the fields to send the message.
        </div>,
        {
          duration: 3000,
          icon: (
            <div className="fa-2x text-danger">
              <i className="fa-regular fa-circle-xmark text-danger"> </i>
            </div>
          ),
          position: "top-center",
        }
      );
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          {/* Title */}
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact</h2>
            </div>
          </div>

          <h3 className="contact-title padd-15">Have You Any Question?</h3>
          <h4 className="contact-sub-title padd-15">I'm at your service</h4>

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
                        value={formData.name}
                        onChange={handleInputChange}
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
                        value={formData.email}
                        onChange={handleInputChange}
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
                        value={formData.message}
                        onChange={handleInputChange}
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
