import React from "react";
import"../styles/Hero.css";

export default function Hero() {
    return (
        //buong hero section
        <section className="hero"> 
        <nav className="nav">
            <div className="logo">LOGO</div>
            <div className="nav-links">
                <a href="#">PROJECTS</a>
                <a href="#">CONTACTS</a>
                <button className="work-btn">Let's Work!</button>
            </div>
        </nav>

        <div className="hero-content">
            <div className="avatar-section">
                <div className="avatar-wrapper">
                    <img src="/.avatar.png" alt="Avatar" className="avatar"/>
                    <div className="tag tag-top">front-end</div>
                    <div className="tag tag-bottom">ux/ui design</div>
                    </div>
                    <p className="credit">art by @sonderivation</p>
                </div>

            <div className="intro">
                <h1>
                    Hello <span className="name">I'm Reign</span>
                    <span className="asterisk">*</span>
                 </h1>
                <h2 className="subtitle">
                        Open for opportunities
                 </h2>
                 <p>
                     a curious creative who fell in love with building beautiful,
                    human-centered digital spaces. I mix code and color to turn ideas
                    into experiences.
                  </p>
                 <button className="resume-btn">View Resume</button>

               </div>           
             </div>
        </section>
    );
}