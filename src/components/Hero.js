import React, { useState } from "react";
import "../styles/Hero.css";
import avatar from "../assets/profile.png";
import logo from "../assets/logo.png";
import { ReactTyped } from "react-typed";

export default function Hero() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTagClick = (tagName) => {
    setSelectedTag(selectedTag === tagName ? null : tagName);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <section className="hero">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#projects">PROJECTS</a>
          <a href="#contacts">CONTACTS</a>
          <button className="work-btn">Hire me!</button>
        </div>

        {/* Mobile Hamburger */}
        <div
          className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <a href="#" onClick={closeMobileMenu}>
          PROJECTS
        </a>
        <a href="#" onClick={closeMobileMenu}>
          CONTACTS
        </a>
        <button className="work-btn" onClick={closeMobileMenu}>
          Let's Work!
        </button>
      </div>

      <div className="hero-content">
        <div className="avatar-section">
          <div
            className={`tag tag-top ${
              selectedTag === "frontend" ? "selected" : ""
            }`}
            onClick={() => handleTagClick("frontend")}
          >
            front-end
            <div className="selection-outline"></div>
            <div className="handle top-left"></div>
            <div className="handle top-right"></div>
            <div className="handle bottom-left"></div>
            <div className="handle bottom-right"></div>
          </div>

          <div className="avatar-wrapper">
            <img src={avatar} alt="Avatar" className="avatar" />
          </div>

          <div
            className={`tag tag-bottom ${
              selectedTag === "uxui" ? "selected" : ""
            }`}
            onClick={() => handleTagClick("uxui")}
          >
            ux/ui design
            <div className="selection-outline"></div>
            <div className="handle top-left"></div>
            <div className="handle top-right"></div>
            <div className="handle bottom-left"></div>
            <div className="handle bottom-right"></div>
          </div>
        </div>

        <div className="intro">
          <h1>
            Hello <span className="name">I'm Reign</span>
            <span className="asterisk">*</span>
          </h1>
          <h2 className="subtitle">
            <ReactTyped
              strings={[
                "✧ Open for opportunities",
                "✮ Front-End Developer",
                "❀ UX/UI Designer",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h2>
          <p>
            a curious creative who fell in love with building beautiful,
            human-centered digital spaces. I mix code and color to turn ideas
            into experiences.
          </p>
          <button
            className="resume-btn"
            onClick={() => {
              const link = document.createElement("a");
              link.href =
                "https://drive.google.com/uc?export=download&id=18z7XB9qHh8NjD-6KO5Cece1AC3o3f-7G";
              link.download = "Pantonia-Reign-Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            View Resume
          </button>
        </div>
      </div>
    </section>
  );
}
