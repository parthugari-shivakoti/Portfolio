import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">
        A selection of projects demonstrating my skills in AI, backend systems, and full-stack development.
      </p>

      <div className="projects-container">

        {/* PROJECT 1 */}

        <div className="project-card">      

          <h3>Quantum-Enhanced Neural Architecture for Brain MRI Segmentation | 2025</h3>

  <ul className="project-points">
    <li>
      Developed a hybrid deep learning architecture integrating U-Net with
      Variational Quantum Circuits for improved brain tumor segmentation.
    </li>

    <li>
      Processed 3D MRI NIfTI datasets for accurate medical image analysis.
    </li>

    <li>
      Implemented Dice-based loss functions and optimization strategies to
      improve segmentation accuracy.
    </li>

    <li>
      Built Python pipelines for preprocessing, training, and evaluation of
      medical imaging models.
    </li>
  </ul>

  <div className="tech-stack">
    <span>Python</span>
            <span>Deep Learning</span>
            <span>U-Net</span>
            <span>Quantum ML</span>
          </div>        

          <div className="project-links">
            <a href="https://github.com/parthugari-shivakoti/Quantum_classical_project" target="_blank" rel="noreferrer">
              <FaGithub /> Code
            </a>        

            <a href="https://parthugari-shivakoti.github.io/Quantum_classical_project/" target="_blank" rel="noreferrer">
              <FaExternalLinkAlt /> Demo
            </a>
          </div>        

        </div>      


        {/* PROJECT 2 */}      
        <div className="project-card">      

          <h3>AI/ML Powered College Enquiry Chatbot | 2023 – 2024</h3>      

          <ul className="project-points">
            <li>
              Developed an intelligent chatbot system using Django and Python
              to automate responses to college enquiries.
            </li>       

            <li>
              Integrated Google Gemini API and NLP techniques for query
              classification and response generation.
            </li>       

            <li>
              Designed a scalable MongoDB database architecture to store
              and manage user interactions.
            </li>       

            <li>
              Implemented REST APIs and built a responsive frontend using
              HTML, CSS, and JavaScript.
            </li>
          </ul>     

          <div className="tech-stack">
            <span>Django</span>
            <span>Python</span>
            <span>NLP</span>
            <span>MongoDB</span>
            <span>REST API</span>
          </div>        

          <div className="project-links">
            <a href="https://github.com/parthugari-shivakoti/chatbot-proj" target="_blank" rel="noreferrer">
              <FaGithub /> Code
            </a>        

            <a href="https://parthugari-shivakoti.github.io/chatbot-proj/" target="_blank" rel="noreferrer">
              <FaExternalLinkAlt /> Demo
            </a>
          </div>        

        </div>      


    {/* PROJECT 3 */}       
    <div className="project-card">

  <h3>Amazon E-Commerce Clone</h3>

  <ul className="project-points">
    <li>
      Developed a responsive Amazon-style e-commerce website
      using HTML, CSS, and JavaScript.
    </li>

    <li>
      Implemented product listing, navigation bar, search bar,
      and category sections similar to Amazon UI.
    </li>

    <li>
      Designed a dynamic shopping cart system using JavaScript
      for adding and removing products.
    </li>

    <li>
      Built a responsive layout to ensure compatibility across
      desktop and mobile devices.
    </li>
  </ul>

  <div className="tech-stack">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>Responsive Design</span>
  </div>

  <div className="project-links">
    <a href="https://github.com/parthugari-shivakoti/javascript-amazon-project-main" target="_blank" rel="noreferrer">
      <FaGithub /> Code
    </a>

    <a href="https://parthugari-shivakoti.github.io/javascript-amazon-project-main/" target="_blank" rel="noreferrer">
      <FaExternalLinkAlt /> Live
    </a>
  </div>

</div>


      </div>

    </section>
  );
}

export default Projects;