import React from 'react';
import "../styles/TechStack.css";

// React Icons imports
import { DiMongodb, DiMysql } from 'react-icons/di';
import { SiFigma, SiTailwindcss, SiBootstrap } from 'react-icons/si';

const techStack = [
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'MongoDB', icon: <DiMongodb /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'MySQL', icon: <DiMysql /> },
];

const TechStack = () => {
  return (
    <section className="techstack-section">
      <div className="techstack-scroll-wrapper">
        <div className="techstack-scroll">
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div className="techstack-item" key={index}>
              <div className="techstack-icon">{tech.icon}</div>
              <p className="techstack-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;