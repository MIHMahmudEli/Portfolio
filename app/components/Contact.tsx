const contactItems = [
  {
    id: "contact-email",
    label: "Email",
    value: "mihmahmud1002@gmail.com",
    href: "mailto:mihmahmud1002@gmail.com",
    icon: "✉️",
    bg: "linear-gradient(135deg, rgba(79,142,247,0.2), rgba(79,142,247,0.05))",
  },
  {
    id: "contact-github",
    label: "GitHub",
    value: "MIHMahmudEli",
    href: "https://github.com/MIHMahmudEli",
    icon: "🐙",
    bg: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(167,139,250,0.05))",
  },
  {
    id: "contact-university",
    label: "University",
    value: "AIUB — 23-50194-1",
    href: "https://www.aiub.edu/",
    icon: "🎓",
    bg: "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(34,211,238,0.05))",
  },
  {
    id: "contact-college",
    label: "College",
    value: "Dhaka City College",
    href: "https://www.dhakacitycollege.edu.bd/",
    icon: "🏛️",
    bg: "linear-gradient(135deg, rgba(52,211,153,0.2), rgba(52,211,153,0.05))",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-header animate-in">
          <p className="section-eyebrow">Let&apos;s Connect</p>
          <h2 id="contact-title" className="section-title">
            Get in <span>Touch</span>
          </h2>
          <p className="section-sub">
            Open for collaboration, internships, and exciting projects. Feel free to reach out!
          </p>
        </div>

        {/* Spotlight CTA */}
        <div
          className="glass-card animate-in delay-1"
          style={{
            padding: "40px",
            marginBottom: "28px",
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(79,142,247,0.08) 0%, rgba(167,139,250,0.08) 100%)",
            borderColor: "rgba(79,142,247,0.2)",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "12px" }} aria-hidden="true">
            🚀
          </div>
          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "8px",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to build something amazing?
          </h3>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              maxWidth: "420px",
              margin: "0 auto 24px",
              lineHeight: "1.7",
            }}
          >
            Whether it&apos;s a web platform, Android app, or data-driven solution — let&apos;s
            collaborate and bring your idea to life.
          </p>
          <a
            id="contact-email-cta"
            href="mailto:mihmahmud1002@gmail.com"
            className="btn-primary"
            style={{ display: "inline-flex" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Send me an email
          </a>
        </div>

        {/* Contact cards grid */}
        <div className="contact-grid animate-in delay-2">
          {contactItems.map((item) => (
            <a
              key={item.id}
              id={item.id}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-card"
              aria-label={`${item.label}: ${item.value}`}
            >
              <div className="contact-icon" style={{ background: item.bg }}>
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <div>
                <p className="contact-label">{item.label}</p>
                <p className="contact-value">{item.value}</p>
              </div>
              <svg
                style={{ marginLeft: "auto", color: "var(--text-muted)", flexShrink: 0 }}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
