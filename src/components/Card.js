import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Body.css";

const Card = ({
  title,
  description,
  imageSrc,
  bgImage,
  techStack,
  projectId,
}) => {
  const navigate = useNavigate();

  const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case "react":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
      case "vue":
      case "vue.js":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg";
      case "firebase":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg";
      case "tailwind css":
      case "tailwind":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg";
      case "chart.js":
        return "https://www.chartjs.org/favicon.ico";
      case "bootstrap":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg";
      case "next.js":
      case "next":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";
      case "mongodb":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg";
      case "express.js":
      case "express":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg";
      case "axios":
        return "https://avatars.githubusercontent.com/u/32372333?s=200&v=4";
      case "styled components":
        return "https://styled-components.com/logo.png";
      case "figma":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg";
      case "python":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
      case "html":
      case "html5":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
      case "css":
      case "css3":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
      case "javascript":
      case "js":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
      case "local storage":
      case "localstorage":
        return "https://cdn-icons-png.flaticon.com/512/639/639365.png";
      default:
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg";
    }
  };

  return (
    <div
      className="card-container"
      onClick={() => navigate(`/project/${projectId}`)}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        cursor: "pointer",
      }}
    >
      <div className="text-content">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>

        {/* Tech Stack Badges */}
        {techStack && techStack.length > 0 && (
          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <span className="tech-badge" key={index}>
                <img src={getTechIcon(tech)} alt={tech} className="tech-icon" />
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="image-content">
        <img
          src={imageSrc}
          alt={`${title} Screenshot`}
          className="laptop-image"
        />
      </div>
    </div>
  );
};

export default Card;
