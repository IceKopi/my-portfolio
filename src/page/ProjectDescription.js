import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProjectDescrption.css";

const projects = {
  stresscheck: {
    title: "StressCheck",
    description:
      "StressCheck is a mental wellness tracker that helps users identify and visualize stress levels based on daily habits and feedback.",
    techStack: ["html5", "css", "Monggodb", "python"],
    media: require("../assets/stress-check-mockup.png"),
    date: "June 2025",
    status: "Completed",
    github: "https://github.com/yourusername/stresscheck",
    live: "https://stresscheck.netlify.app",
    figma: "https://www.figma.com/file/your-filename-here",
  },
  edibly: {
    title: "Monsour",
    description:
      "Edibly is a recipe and grocery planner for budget-conscious eaters. It uses smart suggestions to reduce waste and increase healthy choices.",
    techStack: ["Vue", "Bootstrap", "local storage"],
    media: require("../assets/stress-check-mockup.png"),
    date: "May 2025",
    status: "In Progress",
    github: "https://github.com/yourusername/edibly",
    live: "https://edibly-demo.netlify.app",
  },
  coachfit: {
    title: "Gym Coach Landing Page",
    description: `
The design of the Rocky Coaching landing page is bold, intense, and visually striking—perfectly aligning with its fitness-focused branding. It uses a high-contrast color palette of black, yellow, and red to convey power, discipline, and motivation. Large, gritty gym images and strong typography create a sense of urgency and energy, while key sections like the hero banner, services, and call-to-action are well-structured and easy to follow. The repeated DISCIPLINE. DELIVER. DOMINATE. tape adds a cohesive, motivational touch that reinforces the brand message.

Overall, the layout is clean and impactful, with a strong hierarchy that guides the viewer through the page. With slight improvements in spacing, text contrast, and mobile responsiveness, this design delivers a compelling and professional experience that effectively motivates users to take action and connect with the coach.
`,

    techStack: ["Figma"],
    media: require("../assets/coachfit.png"),
    date: "May 2025",
    status: "In Progress",
    figma: "https://www.figma.com/design/BXgPplP2AM6uL9wdC2YaUz/CoachFit?node-id=0-1&t=ewuYf8XJomVzNEPd-1",
    live: "https://www.figma.com/proto/BXgPplP2AM6uL9wdC2YaUz/CoachFit?node-id=0-1&t=ewuYf8XJomVzNEPd-1",
  },
};

const ProjectDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  if (!project) return <p>Project not found</p>;

  return (
    <div className="project-details">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>{project.title}</h1>

      <div className="project-media">
        <img src={project.media} alt={`${project.title} Preview`} />
      </div>

      <p className="project-desc">{project.description}</p>

      <div className="project-meta">
        <p>
          <strong>Date:</strong> {project.date}
        </p>
        <p>
          <strong>Status:</strong> {project.status}
        </p>
      </div>

      <div className="tech-stack">
        <h3>Tech Stack:</h3>
        <div className="tech-badges">
          {project.techStack.map((tech, index) => (
            <span className="tech-badge" key={index}>
              <img src={getTechIcon(tech)} alt={tech} className="tech-icon" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-links">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="icon"
            />
            GitHub
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link live"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
              alt="Live View"
              className="icon"
            />
            Live View
          </a>
        )}

        {project.figma && (
          <a
            href={project.figma}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link figma"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt="Figma"
              className="icon"
            />
            Figma Design
          </a>
        )}
      </div>
    </div>
  );
};

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

export default ProjectDescription;
