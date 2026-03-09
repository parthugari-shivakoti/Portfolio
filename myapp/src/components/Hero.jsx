import React from "react";
import profile from "../assets/shiva_profile.png";
import "../styles/Hero.css";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section className="hero">

      {/* Availability Badge */}
      <div className="availability">
        Available for Internships & Full-time
      </div>

      {/* Hero Content */}
      <div className="hero-container">

        {/* Info Right */}
        <div className="hero-text">
          <h1 className="intro">Hi, I'm</h1>

          <h2 className="name-gradient">
            Shivakoti Parthugari
          </h2>

          <p className="hero-desc">
            Aspiring Software Developer | Data Science Enthusiast | AI & Web Development.
            I build scalable applications, high-performance systems, and AI-driven solutions.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-gradient">Hire Me</a>
            <a href="#projects" className="btn-outline">View Projects</a>
          </div>
          <div className="hero-links">
            <a className="link-logo" href="https://www.linkedin.com/in/shiva-koti/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a className="link-logo" href="https://github.com/parthugari-shivakoti" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a className="link-logo" href="https://leetcode.com/u/shivakoti214/" target="_blank" rel="noreferrer">
              <SiLeetcode />
            </a>
          </div>

        </div>

         {/* Image Left */}
        <div className="hero-image">
          <img src={profile} alt="Shiva" />
        </div>

      </div>
    </section>
  );
}

export default Hero;