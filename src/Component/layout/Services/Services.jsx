import React from "react";
import servicesData from "../../../Assets/Data/servicesData";
import ServiceItem from "./ServiceItem";
import "./Services.css";

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>

          <div className="row">
            {servicesData.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
