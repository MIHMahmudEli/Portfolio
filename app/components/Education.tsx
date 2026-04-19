const educationData = [
  {
    level: "Secondary School",
    name: "Noakhali Zilla School",
    icon: "🏫",
    link: null,
    description: "Completed secondary education with a strong academic foundation.",
  },
  {
    level: "Higher Secondary",
    name: "Dhaka City College",
    icon: "🏛️",
    link: "https://www.dhakacitycollege.edu.bd/",
    description: "Higher Secondary Certificate with focus on Science.",
  },
  {
    level: "Bachelor of Science",
    name: "American International University – Bangladesh",
    icon: "🎓",
    link: "https://www.aiub.edu/",
    description: "B.Sc. in Computer Science — Student ID: 23-50194-1.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <div className="section-header animate-in">
          <p className="section-eyebrow">Academic Journey</p>
          <h2 id="education-title" className="section-title">
            Education &amp; <span>Background</span>
          </h2>
          <p className="section-sub">
            A progressive academic path building the foundations for software engineering.
          </p>
        </div>

        <div className="edu-grid">
          {educationData.map((edu, i) => (
            <div
              className={`edu-card animate-in delay-${i + 1}`}
              key={edu.name}
            >
              <div className="edu-icon" aria-hidden="true">{edu.icon}</div>
              <p className="edu-level">{edu.level}</p>
              <p className="edu-name">{edu.name}</p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "6px", lineHeight: "1.6" }}>
                {edu.description}
              </p>
              {edu.link && (
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-link"
                  style={{ marginTop: "12px" }}
                  aria-label={`Visit ${edu.name} website`}
                >
                  Visit website
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
