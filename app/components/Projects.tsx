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
    category: "web",
    description:
      "Web-based platform where students share and manage academic notes & slides. Features gamification and roles for Students, Moderators, and Admins.",
    html_url: "https://github.com/MIHMahmudEli/StudyHub",
    homepage: "https://studyhubb.great-site.net",
    language: "PHP",
    stargazers_count: 1,
    forks_count: 0,
    localIcon: "/icons/studyhub.svg",
    localPreview: "/previews/StudyHub.png",
  },
  {
    name: "StudyhubBDBot",
    category: "web",
    description:
      "A sophisticated Telegram bot integrated with the StudyHub ecosystem. Automates resource verification, notification delivery, and interactive student engagement.",
    html_url: "https://github.com/MIHMahmudEli/StudyhubBDBot",
    homepage: "https://t.me/StudyhubBDBot",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    localIcon: "/icons/StudyhubBDBot.svg",
  },
  {
    name: "RoutinePro",
    category: "web",
    description:
      "High-performance web app for generating conflict-free university class routines with smart modes, gap optimization, and dynamic XLSX/JSON data sync.",
    html_url: "https://github.com/MIHMahmudEli/RoutinePro",
    homepage: "https://routine-pro-fawn.vercel.app",
    language: "HTML",
    stargazers_count: 0,
    forks_count: 0,
    localIcon: "/icons/RoutinePro.svg",
  },
  {
    name: "TrueNetMeter",
    category: "web",
    description:
      "Premium, high-accuracy PHP speed test app with a vibrant circular speedometer. Uses professional multi-stream algorithms to deliver genuine metrics.",
    html_url: "https://github.com/MIHMahmudEli/TrueNetMeter",
    homepage: "https://truenetmeter.infinityfreeapp.com",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    localIcon: "/icons/TrueNetMeter.svg",
    localPreview: "/previews/TrueNetMeter.png",
  },
  {
    name: "GitAnalytics",
    category: "web",
    description:
      "GitHub profile analytics dashboard that visualizes repository stats, language distribution, and developer insights.",
    html_url: "https://github.com/MIHMahmudEli/GitAnalytics",
    homepage: "https://git-analytics-sigma.vercel.app/",
    language: "CSS",
    stargazers_count: 0,
    forks_count: 0,
    localIcon: "/icons/GitAnalytics.svg",
  },
  {
    name: "tic-tac-toe-game",
    category: "games",
    description:
      "Tic Tac Toe web game with friend & computer modes, multiple themes, animations, and responsive design. Built with HTML, CSS & JavaScript.",
    html_url: "https://github.com/MIHMahmudEli/tic-tac-toe-game",
    homepage: "https://mihmahmudeli.github.io/tic-tac-toe-game/",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    localIcon: "/icons/tic-tac-toe-game.svg",
  },
  {
    name: "Counting-Game",
    category: "games",
    description:
      "A number game where you and the computer take turns counting from 0 to 21. Each player can add 1–3 per turn; whoever says 21 loses. Computer plays smart!",
    html_url: "https://github.com/MIHMahmudEli/Counting-Game",
    homepage: "https://mihmahmudeli.github.io/Counting-Game/",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 1,
    localIcon: "/icons/Counting-Game.svg",
  },
  {
    name: "Quick-Dodge",
    category: "games",
    description:
      "A fast-paced reflex evasion game built for the web.",
    html_url: "https://github.com/MIHMahmudEli/Quick-Dodge",
    homepage: "https://mihmahmudeli.github.io/Quick-Dodge/",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    localIcon: "/icons/Quick-Dodge.svg",
  },
  {
    name: "Number-Grid-Game",
    category: "games",
    description:
      "A logic-based number grid puzzle game.",
    html_url: "https://github.com/MIHMahmudEli/Number-Grid-Game",
    homepage: "https://mihmahmudeli.github.io/Number-Grid-Game/",
    language: "CSS",
    stargazers_count: 0,
    forks_count: 0,
    localIcon: "/icons/Number-Grid-Game.svg",
  }
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

        <div className="projects-category-group">
          {[{ title: "Web Applications & Tools", filter: "web", icon: "💻" }, { title: "Interactive Games", filter: "games", icon: "🕹️" }].map((categoryGroup, idx) => (
            <div key={categoryGroup.filter} style={{ marginBottom: idx === 0 ? "64px" : "0" }}>
              <h3 className="category-title animate-in">
                <span aria-hidden="true" style={{ fontSize: "1.2em", background: "var(--grad-hero)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{categoryGroup.icon}</span> 
                {categoryGroup.title}
              </h3>
              
              <div className="projects-grid">
                {repositories.filter(r => r.category === categoryGroup.filter).map((repo, i) => {
                  const fallbackIcon = REPO_ICONS[repo.name] ?? "📁";
                  const langColor = LANG_COLORS[repo.language ?? ""] ?? "#888";

                  return (
                    <article
                      key={repo.name}
                      className={`project-card animate-in delay-${Math.min(i % 5 + 1, 5)}`}
                      aria-label={`Project: ${repo.name}`}
                    >
                      {repo.localPreview ? (
                        <div className="project-preview-window">
                          <img 
                            src={repo.localPreview} 
                            alt={`${repo.name} preview`}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                          <div className="preview-overlay" />
                        </div>
                      ) : repo.homepage ? (
                        <div className="project-preview-window">
                          <div className="iframe-scaler">
                            <iframe 
                              src={repo.homepage} 
                              title={`${repo.name} live preview`}
                              loading="lazy"
                              scrolling="no"
                              sandbox="allow-scripts allow-same-origin"
                              tabIndex={-1}
                              aria-hidden="true"
                            />
                          </div>
                          <div className="preview-overlay" />
                        </div>
                      ) : null}
                      
                      <div className="project-card-top">
                        <div className="project-icon-wrapper">
                          {repo.localIcon ? (
                            <img 
                              src={repo.localIcon} 
                              alt={`${repo.name} icon`} 
                              style={{ width: "32px", height: "32px", borderRadius: "6px", objectFit: "contain" }}
                            />
                          ) : (
                            <span aria-hidden="true">{fallbackIcon}</span>
                          )}
                        </div>
                        <div className="project-links">
                          {repo.html_url && (
                            <a
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link-btn"
                              title="GitHub Repository"
                              aria-label={`Open ${repo.name} on GitHub`}
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                              </svg>
                            </a>
                          )}
                          {repo.homepage && (
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link-btn"
                              title="Live Demo"
                              aria-label={`Open ${repo.name} live project`}
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>

                      <a
                        href={repo.homepage || repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-name"
                        title="View Live Project"
                      >
                        {repo.name}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>

                      <p className="project-desc">{repo.description}</p>

                      <div className="project-footer">
                        {repo.language && (
                          <div className="project-lang-pill">
                            <span
                              className="lang-dot"
                              style={{ color: langColor, background: langColor }}
                              aria-hidden="true"
                            />
                            {repo.language}
                          </div>
                        )}
                        <div className="project-stars-group">
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
            </div>
          ))}
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
