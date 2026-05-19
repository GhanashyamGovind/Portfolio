export default function About() {
  const stats = [
    { value: "1.5+", label: "Years Experience" },
    { value: "1", label: "Live Project" },
    { value: "10+", label: "Technologies" },
    { value: "∞", label: "Learning Drive" },
  ];

  return (
    <section id="about">
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }} className="about-grid">
          {/* Left: Text */}
          <div>
            <p className="section-label">// about me</p>
            <h2 className="section-title">
              Passionate about<br /><span>building things</span>
            </h2>
            <div className="accent-line" />
            <p style={{ color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1.25rem", fontSize: "0.97rem" }}>
              I am a MERN stack developer passionate about building modern and responsive web applications.
              I work with JavaScript, React, Node.js, Express, and MongoDB to create full-stack solutions
              from scratch — including real-world projects deployed on AWS.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "2rem", fontSize: "0.97rem" }}>
              Currently a <span style={{ color: "var(--text)", fontWeight: 600 }}>MERN Stack Trainee at Brototype</span>, I'm
              a self-learner who enjoys exploring both frontend and backend development, sharpening
              problem-solving skills, and continuously building.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="https://github.com/GhanashyamGovind" target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                fontFamily: "var(--font-mono)", fontSize: "0.78rem",
                color: "var(--accent)", padding: "0.5rem 1rem",
                border: "1px solid var(--accent)", borderRadius: "2px",
                transition: "background 0.2s",
              }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--accent-dim)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                GitHub Profile →
              </a>
              <a href="https://www.linkedin.com/in/ghanashyam-govind-t/" target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                fontFamily: "var(--font-mono)", fontSize: "0.78rem",
                color: "var(--text-muted)", padding: "0.5rem 1rem",
                border: "1px solid var(--border)", borderRadius: "2px",
                transition: "border-color 0.2s",
              }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--text-muted)"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border)"}
              >
                LinkedIn →
              </a>
            </div>
          </div>

          {/* Right: Stats card */}
          <div>
            <div style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              padding: "2.5rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              overflow: "hidden",
              position: "relative",
            }}>
              {/* Corner accent */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "80px", height: "80px",
                background: "linear-gradient(225deg, var(--accent-dim) 0%, transparent 70%)",
              }} />

              {stats.map((s, i) => (
                <div key={i} style={{
                  padding: "1.75rem",
                  background: "var(--bg-2)",
                  margin: "0.5px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                }}>
                  <span style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}>{s.value}</span>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Location badge */}
            <div style={{
              marginTop: "1rem",
              display: "flex", alignItems: "center", gap: "0.6rem",
              fontFamily: "var(--font-mono)", fontSize: "0.75rem",
              color: "var(--text-dim)",
            }}>
              <span style={{ color: "var(--accent)" }}>📍</span>
              Kerala, India · Open to Remote / Relocation
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
