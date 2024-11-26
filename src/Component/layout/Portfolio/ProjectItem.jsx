import { Link } from "react-router-dom";

const ProjectItem = ({ imgCover, title, gitHub, repo, tech }) => (
  <div className="portfolio-item padd-15">
    <div className="portfolio-item-inner shadow-dark">
      <div className="portfolio-img">
        <img src={imgCover} alt={title} />
      </div>
      <h3 className="padd-15">
        {title}
        <div className="icons">
          <Link to={gitHub} target="_blank">
            <i className="fa-regular fa-eye"></i>
          </Link>
          <Link to={repo} target="_blank">
            <i className="fa-brands fa-github"></i>
          </Link>
        </div>
      </h3>
      <div className="tech">
        {tech.map((techImg, index) => (
          <img key={index} src={techImg} alt={`Technology ${index + 1}`} />
        ))}
      </div>
    </div>
  </div>
);

export default ProjectItem;
