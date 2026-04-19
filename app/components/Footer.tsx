"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* Gradient accent line */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(79,142,247,0.4), rgba(167,139,250,0.4), transparent)",
            marginBottom: "32px",
          }}
          aria-hidden="true"
        />

        {/* Logo + links + socials row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {/* Logo */}
          <span
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              background: "linear-gradient(135deg, #4f8ef7, #a78bfa, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            MIH
          </span>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              {footerLinks.map((l) => (
                <a key={l.href} href={l.href} className="footer-nav-link">
                  {l.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <a
              id="footer-github-link"
              href="https://github.com/MIHMahmudEli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="footer-icon-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              id="footer-email-link"
              href="mailto:mihmahmud1002@gmail.com"
              aria-label="Send email"
              className="footer-icon-link"
            >
              <svg
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="footer-text">
          © {year}{" "}
          <strong style={{ color: "var(--text-secondary)" }}>Mohsin Ibna Hossain</strong>.
          Built with{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
            Next.js
          </a>{" "}
          · Designed with ❤️ in Bangladesh 🇧🇩
        </p>
      </div>
    </footer>
  );
}
