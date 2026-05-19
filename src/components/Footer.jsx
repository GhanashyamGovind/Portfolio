export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "2.5rem 0",
      background: "var(--bg)",
    }}>
      <div className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-dim)" }}>
          © {year} <span style={{ color: "var(--text-muted)" }}>Ghanashyam Govind T</span> · Built with React + Vite
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "GitHub", href: "https://github.com/GhanashyamGovind" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/ghanashyam-govind-t/" },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{
              fontFamily: "var(--font-mono)", fontSize: "0.72rem",
              color: "var(--text-dim)",
              transition: "color 0.2s",
            }}
              onMouseEnter={(e) => e.target.style.color = "var(--accent)"}
              onMouseLeave={(e) => e.target.style.color = "var(--text-dim)"}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a href="#hero" style={{
          fontFamily: "var(--font-mono)", fontSize: "0.72rem",
          color: "var(--text-dim)", transition: "color 0.2s",
        }}
          onMouseEnter={(e) => e.target.style.color = "var(--accent)"}
          onMouseLeave={(e) => e.target.style.color = "var(--text-dim)"}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
