import React from "react";
import "../styles/Body.css";
import Card from "./Card"; 
import greenBg from "../assets/bg/green-bg.png";
import blueBg from "../assets/bg/blue-bg.png";
import orangeBg from "../assets/bg/orange1-bg.png";
import stresscheck from "../assets/stress-check-mockup.png";


const Body = () => {
  const handleClick = () => {
    alert("Card clicked!");
  };

  return (
    <section className="body-section">
      <div className="project-title">
        <p className="title">Project Showcase</p>
      </div>

      <Card
        title="StressCheck"
        description="A curious creative who fell in love with building beautiful, human-centered digital spaces. I mix code and color to turn ideas into experiences."
        imageSrc={stresscheck}
        bgImage={greenBg}
        onClick={handleClick}
      />

      <Card
        title="Edibly"
        description="A curious creative with a passion for code and color, crafting digital experiences."
        imageSrc={stresscheck}
        bgImage={orangeBg}
        onClick={handleClick}
      />
    </section>
  );
};

export default Body;
