import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaGitAlt
} from "react-icons/fa";

import {
  SiJavascript,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn
} from "react-icons/si";

import "../styles/Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2 className="skills-title">Technical Skills</h2>
      <p className="skills-subtitle">
        Technologies and tools I use to build applications.
      </p>

      <div className="skills-container">

        {/* FRONTEND */}
        <div className="skill-card">

          <h3>Frontend Development</h3>

          <div className="skill-items">
            <div className="skill">
              <FaHtml5 /> HTML
            </div>

            <div className="skill">
              <FaCss3Alt /> CSS
            </div>

            <div className="skill">
              <SiJavascript /> JavaScript
            </div>

            <div className="skill">
              <FaReact /> React
            </div>
          </div>

        </div>


        {/* BACKEND */}

        <div className="skill-card">

          <h3>Backend Development</h3>

          <div className="skill-items">

            <div className="skill">
              <FaPython /> Python
            </div>

            <div className="skill">
              <FaJava /> Java
            </div>

            <div className="skill">
              <SiNodedotjs /> Node.js
            </div>

            <div className="skill">
              <SiMysql /> MySQL
            </div>

            <div className="skill">
              <SiMongodb /> MongoDB
            </div>

          </div>

        </div>


        {/* DATA SCIENCE */}

        <div className="skill-card">

          <h3>AI & Data Science</h3>

          <div className="skill-items">

            <div className="skill">
              <SiTensorflow /> TensorFlow
            </div>

            <div className="skill">
              <SiPandas /> Pandas
            </div>

            <div className="skill">
              <SiNumpy /> NumPy
            </div>

            <div className="skill">
              <SiScikitlearn /> Scikit-Learn
            </div>

          </div>

        </div>


        {/* TOOLS */}

        <div className="skill-card">

          <h3>Tools & Technologies</h3>

          <div className="skill-items">

            <div className="skill">
              <FaGitAlt /> Git
            </div>

            <div className="skill">
              VS Code
            </div>

            <div className="skill">
              REST APIs
            </div>

            <div className="skill">
              Software Design & Development 
            </div>

            <div className="skill">
               Analytical Problem Solving
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;