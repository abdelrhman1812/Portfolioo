import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ image, title, liveUrl, githubUrl, technologies }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(image, {
        x: rotateY * 0.5,
        y: rotateX * 0.5,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to([card, image], {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="portfolio-item padd-15" ref={cardRef}>
      <div className="portfolio-item-inner shadow-dark">
        <div className="portfolio-img" ref={imageRef}>
          <img src={image} alt={title} />
        </div>
        <h3 className="padd-15">
          {title}
          <div className="icons">
            {liveUrl && (
              <Link to={liveUrl} target="_blank" rel="noopener noreferrer">
                <i className="fa-regular fa-eye"></i>
              </Link>
            )}
            {githubUrl && (
              <Link to={githubUrl} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </Link>
            )}
          </div>
        </h3>
        <div className="tech">
          {technologies.map((techImg, index) => (
            <img key={index} src={techImg} alt={`Technology ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
