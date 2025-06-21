import React from "react";
import "../styles/Body.css";

const Card = ({ title, description, imageSrc, bgImage, onClick }) => {
  return (
    <div
      className="card-container"
      onClick={onClick}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="text-content">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
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
