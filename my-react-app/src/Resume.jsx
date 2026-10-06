export function Header() {
  return (
    <header className="resume-header">
      <p className="eyebrow">Resume</p>
      <h1>Leviticus Land</h1>
      <address>
        Fort Wayne, IN 46803 <span aria-hidden="true">|</span> (260) 456-7890{" "}
        <span aria-hidden="true">|</span>{" "}
        <a href="mailto:Lland@gmail.com">Lland@gmail.com</a>
      </address>
    </header>
  );
}

export function Summary() {
  return (
    <section className="resume-section" aria-labelledby="summary-heading">
      <h2 id="summary-heading">Professional Summary</h2>
      <p>
        Cybersecurity Analyst and current Cybersecurity student with a
        background in IT from the Army National Guard. Basic technical training
        and certifications.
      </p>
    </section>
  );
}

export function Skills() {
  return (
    <section className="resume-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Technical Skills &amp; Certifications</h2>
      <ul className="detail-list">
        <li>
          <strong>Certifications:</strong> Google Cybersecurity Professional
          Certificate (Expected June 2026), CompTIA Security+ (In Progress).
        </li>
        <li>
          <strong>Technical Proficiencies:</strong> Python, Linux, and IT
          Specialization.
        </li>
        <li>
          <strong>Core Skills:</strong> Critical Analysis, Technical Writing,
          Communication, and Teaching.
        </li>
      </ul>
    </section>
  );
}

export function Experience() {
  return (
    <section className="resume-section" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Professional Experience</h2>
      <div className="experience-list">
        <article className="experience-item">
          <div className="experience-heading">
            <h3>Walmart</h3>
            <p className="experience-meta">Overnight Stocker · November 2024 – Present</p>
          </div>
          <ul>
            <li>
              Perform late-night store stocking operations to maintain product
              availability.
            </li>
            <li>Maintain high standards of organization and workflow.</li>
          </ul>
        </article>
        <article className="experience-item">
          <div className="experience-heading">
            <h3>Army National Guard</h3>
            <p className="experience-meta">
              25 Bravo (IT Specialist) · December 2023 – October 2024
            </p>
          </div>
          <ul>
            <li>
              Completed intensive combat, physical, and technical training with
              a focus on IT specialization.
            </li>
            <li>Developed skills in secure communications and network cabling.</li>
          </ul>
        </article>
        <article className="experience-item">
          <div className="experience-heading">
            <h3>Menards</h3>
            <p className="experience-meta">
              Front End Member · October 2020 – May 2024
            </p>
          </div>
          <ul>
            <li>
              Processed customer transactions and returns, assisted with basic
              maintenance, and supported cart pushing and stocking.
            </li>
            <li>
              Provided consistent customer service and front-end support.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="resume-section" aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      <article className="experience-item education-item">
        <div className="experience-heading">
          <h3>Indiana Tech</h3>
          <p className="experience-meta">
            Bachelor of Science in Cybersecurity · September 2024 – May 2029
          </p>
        </div>
        <ul>
          <li>
            Computer science-adjacent training with an advanced focus on
            cybersecurity.
          </li>
        </ul>
      </article>
    </section>
  );
}
