import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaGraduationCap } from "react-icons/fa";
import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">

      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">A glimpse into my journey and education.</p>

      <div className="about-card">

        <div className="about-container">

          {/* LEFT SIDE */}
          <div className="about-left" data-aos="fade-right">

            <p className="about-text">
              Final-year B.Tech Computer Science (Data Science) student with strong
              programming, software development, and analytical problem-solving skills.
              Experienced in developing AI-driven applications, backend systems, and
              full-stack solutions. Skilled in Python, Java, and modern web technologies
              with knowledge of Software Development Life Cycle (SDLC), REST APIs, and
              scalable database systems.
            </p>

            <div className="about-info">

              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Hyderabad, Telangana, India</p>
                </div>
              </div>

              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>shivaparthugari@gmail.com</p>
                </div>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="about-right" data-aos="fade-left">

            <h3 className="education-title">
              <FaGraduationCap /> Education
            </h3>

            <div className="education-item">
              <span className="edu-year">2022 – 2026</span>
              <h4>B.Tech – Computer Science and Engineering (Data Science)</h4>
              <p>Ace Engineering College, Hyderabad</p>
              <span className="edu-score">CGPA: 8.9 / 10</span>
            </div>

            <div className="education-item">
              <span className="edu-year">2020 – 2022</span>
              <h4>Intermediate Education</h4>
              <p>MJPTBCWJRC, Gajwel</p>
              <span className="edu-score">Score: 92.6%</span>
            </div>

            <div className="education-item">
              <span className="edu-year">2020</span>
              <h4>Secondary Education</h4>
              <p>ZPHS, Digwal</p>
              <span className="edu-score">GPA: 10 / 10</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;