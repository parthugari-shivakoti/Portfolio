import React from "react";
import { FaCertificate } from "react-icons/fa";
import "../styles/Certifications.css";

function Certifications() {
  return (
    <section className="certifications" id="certifications">

      <h2 className="cert-title">Certifications</h2>
      <p className="cert-subtitle">
        Professional certifications and achievements that strengthen my technical expertise.
      </p>

      <div className="cert-container">

        <div className="cert-card">
          <FaCertificate className="cert-icon"/>
          <h3>Wipro Full Stack Developer Certification</h3>
        </div>

        <div className="cert-card">
          <FaCertificate className="cert-icon"/>
          <h3>Cisco Networking Basics</h3>
        </div>

        <div className="cert-card">
          <FaCertificate className="cert-icon"/>
          <h3>Cisco Python Essentials 1 & 2</h3>
        </div>

        <div className="cert-card">
          <FaCertificate className="cert-icon"/>
          <h3>Cisco CCNA: Introduction to Networks</h3>
        </div>

        <div className="cert-card">
          <FaCertificate className="cert-icon"/>
          <h3>Pearson MePro Level 9 – Proficient Badge</h3>
        </div>

      </div>

    </section>
  );
}

export default Certifications;