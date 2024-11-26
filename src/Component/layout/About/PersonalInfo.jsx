import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PersonalInfo = () => {
  const infoRef = useRef(null);

  const infoData = [
    { label: "Birthday", value: "18 Dec 1999", type: "text" },
    { label: "Phone", value: "01008034761", type: "text" },
    { label: "City", value: "Cairo", type: "text" },
    // {
    //   label: "GitHub",
    //   value: "https://github.com/abdelrhman1812",
    //   displayValue: "GitHub Profile",
    //   type: "link",
    // },
    {
      label: "Email",
      value: "mailto:abdelrhmanali1812@gmail.com",
      displayValue: "abdelrhmanali1812@gmail.com",
      type: "link",
    },
    // { label: "Freelance", value: "Available", type: "text" },
  ];

  useEffect(() => {
    const elements = infoRef.current.querySelectorAll(".info-item");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2, // Stagger animation for sequential effect
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%", // Animation starts when 80% of the element is visible
          end: "bottom 20%", // Ends when 20% is visible
          toggleActions: "play none none reverse", // Play on scroll in, reverse on scroll out
        },
      }
    );
  }, []);

  return (
    <div className="row">
      <div className="personal-info padd-15" ref={infoRef}>
        <div className="row">
          {infoData.map((item, index) => (
            <div key={index} className="info-item padd-15">
              <p>
                <i className="fa fa-arrow-circle-right"></i> {item.label}:
                {item.type === "link" ? (
                  <a
                    href={item.value}
                    className="text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.displayValue}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
