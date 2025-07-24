import React from 'react';
import '../styles/Contact.css'; // make sure this path matches your project structure
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contacts" section className="contact-section">
      <div className="contact-content">
        <h2>Let’s connect</h2>
        <p>Get in touch for opportunities or just to say hi! 👋</p>
        <div className="contact-icons">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
