import "../styles/Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">

      <h2 className="exp-title">Experience</h2>
      <p className="exp-subtitle">
        My professional journey in the tech industry.
      </p>

      <div className="exp-card">

        <div className="exp-header">

          <div className="exp-info">
            <h3 className="exp-role">Web Developer Intern</h3>
            <h4 className="exp-company">CODTECH IT Solutions</h4>
          </div>
          
          <div className="exp-date">
            June 2024 – Aug 2024
          </div>

        </div>

        <ul className="exp-points">

          <li>
            Developed scalable web applications using modern frontend
            and backend technologies.
          </li>

          <li>
            Designed database schemas and optimized queries for
            efficient data storage.
          </li>

          <li>
            Implemented REST API endpoints and improved
            application performance.
          </li>

          <li>
            Collaborated with development teams following
            structured development workflows.
          </li>

        </ul>

      </div>

    </section>
  );
}

export default Experience;