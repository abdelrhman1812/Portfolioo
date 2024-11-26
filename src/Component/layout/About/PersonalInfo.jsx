import React from "react";
import { Link } from "react-router-dom";

const PersonalInfo = () => {
  const infoData = [
    { label: "Birthday", value: "18 Dec 1999", type: "text" },
    { label: "Phone", value: "01008034761", type: "text" },
    { label: "City", value: "Cairo", type: "text" },
    {
      label: "GitHub",
      value: "https://github.com/abdelrhman1812",
      displayValue: "GitHub Profile",
      type: "link",
    },
    {
      label: "Email",
      value: "mailto:abdelrhmanali1812@gmail.com",
      displayValue: "abdelrhmanali1812@gmail.com",
      type: "link",
    },
    { label: "Freelance", value: "Available", type: "text" },
  ];

  const showContact = () => {
    let spans = document.querySelectorAll(`.ul-nav li span`);
    let contact = document.getElementById("about-contact");
    let sectionContact = document.getElementById("contact");

    spans.forEach((span) => span.classList.remove("active"));
    contact.classList.add("active");
    sectionContact.classList.add("active");

    console.log("Contact button clicked");
  };

  return (
    <div className="row">
      <div className="personal-info padd-15">
        <div className="row">
          {infoData.map((item, index) => (
            <div className="info-item padd-15">
              <p>
                <i className="fa fa-arrow-circle-right"></i> {item.label}:
                {item.type === "link" ? (
                  <Link
                    to={item.value}
                    className="text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.displayValue}
                  </Link>
                ) : (
                  <span>{item.value}</span>
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="buttons padd-15">
            <span onClick={showContact} className="btn hire-me">
              Contact Me
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
