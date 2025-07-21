import React, { useState } from "react";
import "../styles/Body.css";
import Card from "./Card";
import greenBg from "../assets/bg/green-bg.png";
import blueBg from "../assets/bg/blue-bg.png";
import orangeBg from "../assets/bg/orange1-bg.png";
import stresscheck from "../assets/stress-check-mockup.png";

const Body = () => {
  const [activeTab, setActiveTab] = useState("design");

  const designProjects = [
    {
      title: "CoachFit",
      description: "A bold, high-contrast fitness coach UI landing page designed to inspire action",
      imageSrc: stresscheck,
      bgImage: blueBg,
      techStack: ["Figma"],
      projectId: "coachfit",
    },
  ];

  const developmentProjects = [
    {
      title: "StressCheck",
      description: "A stress assessment app with charts, data, and authentication.",
      imageSrc: stresscheck,
      bgImage: greenBg,
      techStack: ["html5", "css", "Monggodb", "python"],
      projectId: "stresscheck",
    },
    {
      title: "Monsour",
      description: "Food management app for tracking inventory and expiry dates.",
      imageSrc: stresscheck,
      bgImage: orangeBg,
      techStack: ["Vue", "Bootstrap", "local storage"],
      projectId: "edibly",
    },
  ];

  const handleClick = () => {
    alert("Card clicked!");
  };

  return (
    <section className="body-section">
      <div className="project-title">
        <h2 className="subtitle">My Projects</h2>
        <div className="tabs-container">
          <button
            className={`tab-btn ${activeTab === "design" ? "active" : ""}`}
            onClick={() => setActiveTab("design")}
          >
            Designs
          </button>
          <button
            className={`tab-btn ${activeTab === "development" ? "active" : ""}`}
            onClick={() => setActiveTab("development")}
          >
            Development
          </button>
        </div>
      </div>

      <div className="cards-container">
        {(activeTab === "design" ? designProjects : developmentProjects).map((project) => (
          <Card
            key={project.projectId}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            bgImage={project.bgImage}
            onClick={handleClick}
            techStack={project.techStack}
            projectId={project.projectId}
          />
        ))}
      </div>
    </section>
  );
};

export default Body;
