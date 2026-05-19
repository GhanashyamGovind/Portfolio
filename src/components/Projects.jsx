import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <p className="section-label">// projects</p>
        <h2 className="section-title">
          Things I've <span>Built</span>
        </h2>
        <div className="accent-line" />

        <div style={{ marginTop: "3rem" }}>
          {projects.map((p) => (
            <div key={p.id} style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              overflow: "hidden",
              marginBottom: "2rem",
              transition: "border-color 0.3s, transform 0.2s",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
            }}
              className="project-card"
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              {/* Left: Visual */}
              <div style={{
                background: "var(--bg-3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "3rem 2rem",
                borderRight: "1px solid var(--border)",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `
                    linear-gradient(var(--border) 1px, transparent 1px),
                    linear-gradient(90deg, var(--border) 1px, transparent 1px)
                  `,
                  backgroundSize: "30px 30px",
                  opacity: 0.4,
                }} />
                <div style={{
                  position: "relative", zIndex: 1,
                  textAlign: "center",
                }}>
                  <div style={{
                    fontSize: "3rem",
                    marginBottom: "0.5rem",
                    animation: "float 4s ease-in-out infinite",
                    display: "inline-block",
                  }}>🛒</div>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.7rem",
                    color: "var(--accent)", letterSpacing: "0.1em",
                  }}>FEATURED PROJECT</div>
                </div>
              </div>

              {/* Right: Info */}
              <div style={{ padding: "2.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <div>
                    <h3 style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.02em" }}>{p.title}</h3>
                    <p style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>{p.subtitle}</p>
                  </div>
                  
                  {/* Action Buttons Container */}
                  <div style={{ display: "flex", gap: "0.6rem" }}>
                    {/* GitHub Button */}
                    <a href={p.github} target="_blank" rel="noreferrer" style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.72rem",
                      padding: "0.4rem 0.9rem", border: "1px solid var(--border)",
                      color: "var(--text-muted)", borderRadius: "2px",
                      textDecoration: "none", transition: "all 0.2s",
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent)"}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border)"}
                    >
                      GitHub
                    </a>

                    {/* Live Link Button (Only appears if p.live exists) */}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" style={{
                        fontFamily: "var(--font-mono)", fontSize: "0.72rem",
                        padding: "0.4rem 0.9rem", border: "1px solid var(--accent)",
                        color: "var(--accent)", borderRadius: "2px",
                        textDecoration: "none", transition: "all 0.2s",
                      }}
                        onMouseEnter={(e) => e.currentTarget.style.background = "var(--accent-dim)"}
                        onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                      >
                        Link ↗
                      </a>
                    )}
                  </div>
                </div>

                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  {p.description}
                </p>

                {/* Highlights */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.5rem" }}>
                  {p.highlights.map((h, i) => (
                    <li key={i} style={{
                      display: "flex", alignItems: "flex-start", gap: "0.5rem",
                      fontSize: "0.84rem", color: "var(--text-muted)",
                    }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.7rem",
                      padding: "0.25rem 0.65rem",
                      background: "var(--accent-dim)",
                      color: "var(--accent)",
                      borderRadius: "2px",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More on GitHub CTA */}
        <div style={{
          textAlign: "center", marginTop: "3rem",
          padding: "3rem",
          border: "1px dashed var(--border)",
          borderRadius: "4px",
        }}>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.25rem", fontSize: "0.95rem" }}>
            More projects and experiments live on my GitHub
          </p>
          <a href="https://github.com/GhanashyamGovind" target="_blank" rel="noreferrer" style={{
            fontFamily: "var(--font-mono)", fontSize: "0.82rem",
            padding: "0.75rem 1.75rem",
            border: "1px solid var(--accent)",
            color: "var(--accent)", borderRadius: "2px",
            transition: "background 0.2s",
            display: "inline-block",
            textDecoration: "none",
          }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--accent-dim)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            View All on GitHub →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-card { grid-template-columns: 1fr !important; }
          .project-card > div:first-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}