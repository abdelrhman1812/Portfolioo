import React from "react";

const timelineData = {
  education: [
    {
      date: "2018 - 2022",
      title: "Bachelor of Technology Information Systems.(TIS)",
      description:
        "Faculty Of Management Technology and Information Systems (Port Said University)",
    },
  ],
  experience: [
    {
      date: "2024",
      title: "React Web Development and Node.js (Mern Stack) 6-Month Program",
      descriptions: [
        "Intensive Code Camp (ICC) - Digital Egypt Pioneers Initiative (DEPI) Ministry of Communication and Information Technology (MCIT).",
        "Developed responsive web applications using React.js and Node.js, integrating RESTful APIs for seamless data exchange.",
      ],
    },
    {
      date: "Mar 2023 - Apr 2023",
      title: "Web Design, National Telecommunication Institute 'NTI'",
      description:
        "The course covers frontend tools such as HTML5, CSS3, Bootstrap, and JavaScript.",
    },
  ],
  courses: [
    {
      date: "2024",
      title: "Node.js, Route Academy",
      descriptions: [
        "Comprehensive training in Node.js core, SQL, Sequelize, MongoDB, and Mongoose.",
        "Practical experience in building RESTful APIs, using Express.js, and deploying applications.",
      ],
    },
    {
      date: "Jul 2023 - Nov 2023",
      title: "Frontend Developer, Route Academy",
      descriptions: [
        "The course covers frontend tools such as JavaScript, Ajax, JSON, and React.js.",
        "Development of a new, highly responsive, web-based user interface.",
      ],
    },
  ],
};

const TimelineItem = ({ date, title, description, descriptions }) => (
  <div className="timeline-item">
    <div className="circle-dot"></div>
    <h3 className="timeline-date">
      <i className="fa fa-calendar"></i> {date}
    </h3>
    <h4 className="timeline-title">{title}</h4>
    {description && <p className="timeline-text">{description}</p>}
    {descriptions &&
      descriptions.map((desc, index) => (
        <p className="timeline-text" key={index}>
          {desc}
        </p>
      ))}
  </div>
);

const Section = ({ title, data }) => (
  <div className=" education padd-15">
    <h3 className="title padd-15">{title}</h3>
    <div className="row">
      <div className="time-line-box padd-15">
        <div className="timeline shadow-dark">
          {data.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Timeline = () => (
  <div className="row">
    <Section title="Education" data={timelineData.education} />
    <Section title="Experience" data={timelineData.experience} />
    <Section title="Courses" data={timelineData.courses} />
  </div>
);

export default Timeline;
