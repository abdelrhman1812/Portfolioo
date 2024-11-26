import React from "react";

const ServiceItem = ({ icon, title, subtitle, description }) => (
  <div className="services-item padd-15">
    <div className="services-item-inner">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <p>{description}</p>
    </div>
  </div>
);

export default ServiceItem;
