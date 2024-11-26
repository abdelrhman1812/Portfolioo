import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const element = aboutSectionRef.current;

    // GSAP ScrollTrigger animation
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Trigger animation when element is 80% visible
          end: "bottom 20%", // Trigger ends when bottom is 20% visible
          toggleActions: "play reverse play reverse", // Replay animation on scroll in/out
          scrub: true, // Smooth animation while scrolling
        },
      }
    );
  }, []);

  return (
    <div className="row">
      <div className="about-text padd-15" ref={aboutSectionRef}>
        <h3>
          I`m Abdelrhman Ali <span> Front End Developer</span>
        </h3>
        <p>
          I am a junior front-end developer with a bachelor's degree in
          technology and information systems and a strong foundation in web
          development. My expertise includes JavaScript, React.js, HTML, CSS,
          and Node.js, along with problem-solving and full-stack development
          experience. I have a proven ability to deliver scalable web solutions
          and a passion for designing e-commerce websites with a focus on UI/UX.
          I continuously seek to enhance my skills and stay updated with the
          latest technologies, aiming to contribute to company growth and
          achieve impactful results.
          {/* I graduated in 2022 from the College of Management Technology and Information Systems at Port Said University, After graduation, I specialized in web development with the MERN stack. I started with front-end development, taking courses at the National Telecommunications Institute, and gained good experience by working on various projects. I am proficient in HTML, CSS, JavaScript, React, and have experience with Redux for state management. I have also become quite proficient in front-end development and have a strong interest in SEO. Currently, I am focusing on back-end development with Node.js, Express, and MongoDB, and working on some full-stack projects. Additionally, I am familiar with version control using Git and have experience with deploying application */}
          {/* I`am a Frontend Developer with expertise in key
                      technologies, utilizing technical proficiency and
                      creativity to create engaging user experiences and advance
                      in a professional career. I am a quick learner, always
                      eager to take on new challenges. I am a quick learner,
                      always eager to take on new challenges. I am a front-end
                      developer, Creating web pages and web applications is my
                      passion. I am looking forward to being the kind of
                      assistant you need to make your business flourish. */}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
