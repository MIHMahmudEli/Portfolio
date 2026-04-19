const LANG_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  Kotlin: "#A97BFF",
  Python: "#3572A5",
  PHP: "#4F5D95",
  CSS: "#563d7c",
  HTML: "#e34c26",
  TypeScript: "#3178c6",
  R: "#198CE7",
  "C++": "#f34b7d",
  "C#": "#178600",
  Java: "#b07219",
};

const REPO_ICONS: Record<string, string> = {
  StudyHub: "📚",
  RoutinePro: "📅",
  GlutProject: "🏙️",
  TrueNetMeter: "⚡",
  AgroBridge: "🌾",
  "Counting-Game": "🎮",
  "tic-tac-toe-game": "✖️",
  PasswordVault: "🔐",
  "NexGen.OS": "💻",
  GitAnalytics: "📊",
  "Research-to-JSON": "🔬",
  "Data-Science-Project": "📈",
  "Quick-Dodge": "🕹️",
  JavaProject: "☕",
  EliteJersey: "👕",
  MAD: "📱",
  "StudyHub-Mobile-apk": "📱",
  "Number-Grid-Game": "🔢",
  "Computer-Networks-Lab": "🌐",
  "Land-Linker": "🗺️",
  AgroBridge_old: "🌾",
};

const repositories = [
  {
    name: "StudyHub",
    description:
      "Web-based platform where students share and manage academic notes & slides. Features roles for Students, Moderators, and Admins with gamification.",
    html_url: "https://github.com/MIHMahmudEli/StudyHub",
    language: "PHP",
    stargazers_count: 1,
    forks_count: 0,
    fork: false,
  },
  {
    name: "RoutinePro",
    description:
      "High-performance web app for generating conflict-free university class routines with smart modes, gap optimization, and dynamic XLSX/JSON data sync—featuring a Glassmorphism UI.",
    html_url: "https://github.com/MIHMahmudEli/RoutinePro",
    language: "HTML",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
  },
  {
    name: "GlutProject",
    description:
      "A 2D animated smart city built with OpenGL and C++. Features dynamic weather, moving vehicles, day-night cycle, rain, lightning, and interactive controls.",
    html_url: "https://github.com/MIHMahmudEli/GlutProject",
    language: "C++",
    stargazers_count: 1,
    forks_count: 0,
    fork: false,
  },
  {
    name: "TrueNetMeter",
    description:
      "Premium, high-accuracy PHP speed test app with a vibrant circular speedometer. Uses professional multi-stream algorithms to deliver genuine internet performance metrics.",
    html_url: "https://github.com/MIHMahmudEli/TrueNetMeter",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
  },
  {
    name: "AgroBridge",
    description:
      "AGROBRIDGE – A Digital Platform for Agricultural Empowerment, connecting farmers with resources and markets.",
    html_url: "https://github.com/MIHMahmudEli/AgroBridge",
    language: "C#",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
  },
  {
    name: "PasswordVault",
    description:
      "Secure password manager application built with Python. Safely stores and retrieves credentials.",
    html_url: "https://github.com/MIHMahmudEli/PasswordVault",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
  },
  {
    name: "GitAnalytics",
    description:
      "GitHub profile analytics dashboard that visualizes repository stats, language distribution, and developer insights.",
    html_url: "https://github.com/MIHMahmudEli/GitAnalytics",
    language: "CSS",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
  },
  {
    name: "tic-tac-toe-game",
    description:
      "Tic Tac Toe web game with friend & computer modes, multiple themes, animations, and responsive design. Built with HTML, CSS & JavaScript.",
    html_url: "https://github.com/MIHMahmudEli/tic-tac-toe-game",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
  },
  {
    name: "Counting-Game",
    description:
      "A number game where you and the computer take turns counting from 0 to 21. Each player can add 1–3 per turn; whoever says 21 loses. Computer plays smart!",
    html_url: "https://github.com/MIHMahmudEli/Counting-Game",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 1,
    fork: false,
  },
  {
    name: "NexGen.OS",
    description:
      "A browser-based OS simulation with a modern UI concept, exploring desktop-like experiences on the web.",
    html_url: "https://github.com/MIHMahmudEli/NexGen.OS",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
  },
  {
    name: "Research-to-JSON",
    description:
      "Python tool to extract and convert research paper data into structured JSON format for further analysis.",
    html_url: "https://github.com/MIHMahmudEli/Research-to-JSON",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
  },
  {
    name: "Data-Science-Project",
    description:
      "Data science explorations and analysis using R, featuring statistical modelling and visualizations.",
    html_url: "https://github.com/MIHMahmudEli/Data-Science-Project",
    language: "R",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header animate-in">
          <p className="section-eyebrow">Open Source</p>
          <h2 id="projects-title" className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="section-sub">
            Selected repositories from 26 public projects spanning full-stack web, mobile, graphics, and data science.
          </p>
        </div>

        <div className="projects-grid">
          {repositories.map((repo, i) => {
            const icon = REPO_ICONS[repo.name] ?? "📁";
            const langColor = LANG_COLORS[repo.language ?? ""] ?? "#888";
            return (
              <article
                key={repo.name}
                className={`project-card animate-in delay-${Math.min(i % 5 + 1, 5)}`}
                aria-label={`Project: ${repo.name}`}
              >
                <div className="project-card-top">
                  <span className="project-icon" aria-hidden="true">{icon}</span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-icon"
                    aria-label={`Open ${repo.name} on GitHub`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-name"
                >
                  {repo.name}
                </a>

                <p className="project-desc">{repo.description}</p>

                <div className="project-footer">
                  {repo.language && (
                    <div className="project-lang">
                      <span
                        className="lang-dot"
                        style={{ background: langColor }}
                        aria-hidden="true"
                      />
                      {repo.language}
                    </div>
                  )}
                  <div style={{ display: "flex", gap: "12px" }}>
                    {repo.stargazers_count > 0 && (
                      <div className="project-stars" aria-label={`${repo.stargazers_count} stars`}>
                        ★ {repo.stargazers_count}
                      </div>
                    )}
                    {repo.forks_count > 0 && (
                      <div className="project-stars" style={{ color: "var(--accent-emerald)" }} aria-label={`${repo.forks_count} forks`}>
                        ⑂ {repo.forks_count}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }} className="animate-in">
          <a
            id="view-all-repos-btn"
            href="https://github.com/MIHMahmudEli?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View All 26 Repositories
          </a>
        </div>
      </div>
    </section>
  );
}
