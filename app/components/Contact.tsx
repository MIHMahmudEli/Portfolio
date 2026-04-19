const contactItems = [
  {
    id: "contact-email",
    label: "Email",
    value: "mihmahmud1002@gmail.com",
    href: "mailto:mihmahmud1002@gmail.com",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    bg: "linear-gradient(135deg, rgba(79,142,247,0.2), rgba(79,142,247,0.05))",
  },
  {
    id: "contact-github",
    label: "GitHub",
    value: "MIHMahmudEli",
    href: "https://github.com/MIHMahmudEli",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    bg: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(167,139,250,0.05))",
  },
  {
    id: "contact-linkedin",
    label: "LinkedIn",
    value: "M I H Mahmud",
    href: "https://www.linkedin.com/in/m-i-h-mahmud-7b3b07249/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    bg: "linear-gradient(135deg, rgba(10,102,194,0.2), rgba(10,102,194,0.05))",
  },
  {
    id: "contact-university",
    label: "University",
    value: "AIUB — 23-50194-1",
    href: "https://www.aiub.edu/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    bg: "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(34,211,238,0.05))",
  },
  {
    id: "contact-college",
    label: "College",
    value: "Dhaka City College",
    href: "https://www.dhakacitycollege.edu.bd/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
        <path d="M9 22v-4h6v4"/>
        <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01M8 14h.01M12 14h.01M16 14h.01"/>
      </svg>
    ),
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
          <div className="floating-paper-plane" aria-hidden="true" style={{ marginBottom: "20px" }}>
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-plane)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="gradient-plane" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4f8ef7" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
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
                className="contact-card-arrow"
                style={{ marginLeft: "auto", color: "var(--text-muted)", flexShrink: 0 }}
                width="20"
                height="20"
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
