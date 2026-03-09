import React from "react";
import resume from "../assets/resume.pdf";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import "../styles/Resume.css";

function Resume() {
  return (
    <section className="resume-section" id="resume">

      <h2 className="resume-title">My Resume</h2>
      <p className="resume-subtitle">
        Download my resume to learn more about my skills and experience.
      </p>

      <div className="resume-card">

        <FaFilePdf className="resume-icon"/>

        <h3>Shivakoti Parthugari Resume</h3>

        <a
          href={resume}
          download="Shivakoti_Parthugari_Resume.pdf"
          className="resume-btn"
        >
          <FaDownload /> Download Resume
        </a>

      </div>

    </section>
  );
}

export default Resume;