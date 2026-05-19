import { useEffect, useState } from "react";

const roles = [
  "MERN Stack Developer",
  "React Developer",
  "Node.js Engineer",
  "Full Stack Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        opacity: 0.3,
      }} />

      {/* Radial glow */}
      <div style={{
        position: "absolute",
        top: "30%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(0,255,135,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "6rem" }}>
        {/* Available badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "var(--bg-3)", border: "1px solid var(--border)",
          padding: "0.35rem 0.9rem", borderRadius: "100px",
          fontFamily: "var(--font-mono)", fontSize: "0.72rem",
          color: "var(--text-muted)", marginBottom: "2rem",
          animation: "fadeUp 0.6s ease forwards",
        }}>
          <span style={{
            width: "7px", height: "7px", borderRadius: "50%",
            background: "var(--accent)",
            animation: "pulse-glow 2s infinite",
            display: "inline-block",
          }} />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: "clamp(2.8rem, 8vw, 6rem)",
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
          marginBottom: "1rem",
          animation: "fadeUp 0.6s 0.1s ease both",
        }}>
          Ghanashyam<br />
          <span style={{ color: "var(--accent)" }}>Govind T</span>
        </h1>

        {/* Typewriter */}
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(1rem, 3vw, 1.4rem)",
          color: "var(--text-muted)",
          marginBottom: "1.5rem",
          minHeight: "2rem",
          animation: "fadeUp 0.6s 0.2s ease both",
        }}>
          {displayed}
          <span style={{
            display: "inline-block", width: "2px", height: "1.2em",
            background: "var(--accent)", marginLeft: "2px", verticalAlign: "middle",
            animation: "blink 1s infinite",
          }} />
        </div>

        {/* Tagline */}
        <p style={{
          fontSize: "1.05rem",
          color: "var(--text-muted)",
          maxWidth: "500px",
          lineHeight: 1.7,
          marginBottom: "2.5rem",
          animation: "fadeUp 0.6s 0.3s ease both",
        }}>
          Building modern web applications with the MERN stack — from concept to cloud deployment.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex", gap: "1rem", flexWrap: "wrap",
          animation: "fadeUp 0.6s 0.4s ease both",
        }}>
          <a href="#projects" style={{
            padding: "0.85rem 2rem",
            background: "var(--accent)",
            color: "#000",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.05em",
            borderRadius: "2px",
            transition: "opacity 0.2s, transform 0.2s",
          }}
            onMouseEnter={(e) => { e.target.style.opacity = "0.85"; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.target.style.opacity = "1"; e.target.style.transform = "none"; }}
          >
            View Projects
          </a>
          <a href="https://github.com/GhanashyamGovind" target="_blank" rel="noreferrer" style={{
            padding: "0.85rem 2rem",
            border: "1px solid var(--border)",
            color: "var(--text)",
            fontSize: "0.85rem",
            letterSpacing: "0.05em",
            borderRadius: "2px",
            transition: "border-color 0.2s, transform 0.2s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "none"; }}
          >
            GitHub →
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "-5rem", left: "2rem",
          fontFamily: "var(--font-mono)", fontSize: "0.65rem",
          color: "var(--text-dim)", letterSpacing: "0.15em",
          writingMode: "vertical-rl", textOrientation: "mixed",
          display: "flex", alignItems: "center", gap: "0.5rem",
        }}>
          SCROLL
          <span style={{ width: "1px", height: "40px", background: "var(--text-dim)" }} />
        </div>
      </div>
    </section>
  );
}
