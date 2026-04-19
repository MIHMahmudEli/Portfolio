const languages = [
  { name: "JavaScript", percentage: "21.7", color: "#f1e05a", count: 5 },
  { name: "Kotlin", percentage: "13.0", color: "#A97BFF", count: 3 },
  { name: "Python", percentage: "13.0", color: "#3572A5", count: 3 },
  { name: "PHP", percentage: "13.0", color: "#4F5D95", count: 3 },
  { name: "CSS", percentage: "8.7", color: "#563d7c", count: 2 },
  { name: "HTML", percentage: "8.7", color: "#e34c26", count: 2 },
  { name: "TypeScript", percentage: "4.3", color: "#3178c6", count: 1 },
  { name: "R", percentage: "4.3", color: "#198CE7", count: 1 },
  { name: "C++", percentage: "4.3", color: "#f34b7d", count: 1 },
  { name: "C#", percentage: "4.3", color: "#178600", count: 1 },
  { name: "Java", percentage: "4.3", color: "#b07219", count: 1 },
];

const skills = [
  { name: "Web Development", icon: "🌐", desc: "HTML, CSS, JS, PHP, TypeScript" },
  { name: "Android Development", icon: "📱", desc: "Kotlin, Android Studio" },
  { name: "Backend & Databases", icon: "🗄️", desc: "PHP, MySQL, REST APIs" },
  { name: "Data Science", icon: "📊", desc: "Python, R, data analysis" },
  { name: "Game & Graphics", icon: "🎮", desc: "OpenGL / C++, game logic" },
  { name: "DevTools", icon: "🔧", desc: "Git, GitHub, VS Code" },
];

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-header animate-in">
          <p className="section-eyebrow">Expertise</p>
          <h2 id="skills-title" className="section-title">
            Skills &amp; <span>Languages</span>
          </h2>
          <p className="section-sub">
            11 programming languages across 26 repositories — a polyglot developer.
          </p>
        </div>

        {/* Skills grid */}
        <div className="skills-grid animate-in delay-1">
          {skills.map((s, i) => (
            <div className={`skill-card delay-${Math.min(i % 5 + 1, 5)}`} key={s.name}>
              <div className="skill-icon-layer">
                 <span aria-hidden="true">{s.icon}</span>
              </div>
              <div className="skill-content-layer">
                <span className="skill-icon" aria-hidden="true">{s.icon}</span>
                <div className="skill-text">
                  <h4 className="skill-name">{s.name}</h4>
                  <p className="skill-desc">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Language bar chart */}
        <div className="lang-chart animate-in delay-2" aria-label="Programming language distribution">
          <p className="lang-chart-title">
            Language Distribution Core <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginLeft: "8px", textTransform: "none", letterSpacing: "normal" }}>(Based on GitHub Repositories)</span>
          </p>
          <div className="lang-grid">
            {languages.map((lang, idx) => (
              <div className="lang-item" key={lang.name} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="lang-header">
                  <span className="lang-name">{lang.name}</span>
                  <span className="lang-pct">{lang.percentage}%</span>
                </div>
                <div className="lang-bar-track" role="progressbar" aria-valuenow={parseFloat(lang.percentage)} aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className="lang-bar-fill"
                    style={{ width: `${lang.percentage}%`, background: lang.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
