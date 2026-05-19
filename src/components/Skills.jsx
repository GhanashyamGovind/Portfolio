const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 85 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "TypeScript", level: 65 },
      { name: "HTML / CSS", level: 90 },
      { name: "EJS", level: 80 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 83 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 60 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "AWS EC2", level: 65 },
      { name: "Git & GitHub", level: 88 },
      { name: "Linux", level: 72 },
      { name: "Shell Script", level: 60 },
    ],
  },
];

const techBadges = [
  "React", "Node.js", "Express", "MongoDB", "JavaScript",
  "TypeScript", "PostgreSQL", "AWS", "Git", "Linux", "Shell Script", "EJS",
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <p className="section-label">// skills & tools</p>
        <h2 className="section-title">
          My <span>Tech Stack</span>
        </h2>
        <div className="accent-line" />

        {/* Skill bars */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          marginTop: "3rem",
        }}>
          {skillGroups.map((group) => (
            <div key={group.category} style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              padding: "1.75rem",
            }}>
              <h3 style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1.25rem",
              }}>
                {group.category}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {group.skills.map((s) => (
                  <div key={s.name}>
                    <div style={{
                      display: "flex", justifyContent: "space-between",
                      marginBottom: "0.4rem",
                    }}>
                      <span style={{ fontSize: "0.88rem", color: "var(--text)" }}>{s.name}</span>
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: "0.72rem",
                        color: "var(--text-muted)",
                      }}>{s.level}%</span>
                    </div>
                    <div style={{
                      height: "3px", background: "var(--border)", borderRadius: "2px",
                      overflow: "hidden",
                    }}>
                      <div style={{
                        height: "100%",
                        width: `${s.level}%`,
                        background: "linear-gradient(90deg, var(--accent), rgba(0,255,135,0.5))",
                        borderRadius: "2px",
                        transition: "width 1s ease",
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <div style={{ marginTop: "3.5rem" }}>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "0.7rem",
            color: "var(--text-dim)", letterSpacing: "0.1em",
            textTransform: "uppercase", marginBottom: "1.25rem",
          }}>
            Technologies I work with
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {techBadges.map((t) => (
              <span key={t} style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                padding: "0.4rem 0.9rem",
                background: "var(--bg-3)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                color: "var(--text-muted)",
                cursor: "default",
                transition: "border-color 0.2s, color 0.2s",
              }}
                onMouseEnter={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.color = "var(--accent)"; }}
                onMouseLeave={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.color = "var(--text-muted)"; }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
