const experiences = [
  {
    role: "MERN Stack Trainee",
    company: "Brototype",
    duration: "2023 — Present · 1.5 Years",
    type: "Training Program",
    description:
      "Intensive hands-on MERN stack training program focused on building real-world projects. Developed end-to-end applications covering both frontend and backend with modern JavaScript ecosystem tools.",
    highlights: [
      "Built full-stack e-commerce platform (Soleus) with admin and user panels",
      "Deployed applications on AWS EC2",
      "Worked with React, Node.js, Express, MongoDB stack",
      "Practiced Git workflow, Linux CLI, and shell scripting",
      "Self-directed learning with project-based curriculum",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">// experience</p>
        <h2 className="section-title">
          Where I've <span>Worked</span>
        </h2>
        <div className="accent-line" />

        <div style={{ marginTop: "3rem", position: "relative" }}>
          {/* Vertical timeline line */}
          <div style={{
            position: "absolute",
            left: "0",
            top: 0, bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            marginLeft: "0px",
          }} />

          {experiences.map((exp, i) => (
            <div key={i} style={{
              paddingLeft: "2.5rem",
              position: "relative",
              marginBottom: "3rem",
            }}>
              {/* Timeline dot */}
              <div style={{
                position: "absolute",
                left: "-6px",
                top: "6px",
                width: "13px",
                height: "13px",
                borderRadius: "50%",
                background: "var(--accent)",
                border: "2px solid var(--bg)",
                boxShadow: "0 0 0 4px var(--accent-dim)",
              }} />

              {/* Card */}
              <div style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Top accent */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, var(--accent), transparent)",
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text)" }}>{exp.role}</h3>
                    <p style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 600 }}>{exp.company}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.72rem",
                      color: "var(--text-muted)", display: "block",
                    }}>{exp.duration}</span>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.65rem",
                      padding: "0.2rem 0.6rem",
                      background: "var(--accent-dim)",
                      color: "var(--accent)",
                      borderRadius: "2px", marginTop: "0.3rem", display: "inline-block",
                    }}>{exp.type}</span>
                  </div>
                </div>

                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.8, margin: "1rem 0" }}>
                  {exp.description}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} style={{
                      display: "flex", alignItems: "flex-start", gap: "0.6rem",
                      fontSize: "0.87rem", color: "var(--text-muted)",
                    }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }}>▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
