import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const links = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: "0.78rem",
    letterSpacing: "0.08em",
    textDecoration: "none",
    transition: "color 0.2s",
    cursor: "pointer",
    color: "var(--text-muted)",
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: "1rem 2rem", display: "flex", alignItems: "center",
      justifyContent: "space-between", transition: "all 0.3s",
      background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
    }}>
      {/* Logo - Kept as standard 'a' tag */}
      <a href="#hero" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--accent)", letterSpacing: "0.1em", textDecoration: "none" }}>
        GGT<span style={{ color: "var(--text-muted)" }}>.dev</span>
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
        {links.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={navLinkStyle}
            activeClass="active-link"
          >
            {l.label}
          </Link>
        ))}
        
        <Link 
          to="contact" 
          spy={true} smooth={true} offset={-70} duration={500}
          activeClass="active-btn"
          style={{
            ...navLinkStyle,
            padding: "0.45rem 1.1rem",
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            borderRadius: "2px",
          }}
        >
          Hire Me
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{ display: "none", background: "none", border: "none", flexDirection: "column", gap: "5px" }}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ display: "block", width: "22px", height: "2px", background: "var(--text)", transition: "0.3s" }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(10,10,10,0.98)", padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {links.map((l) => (
            <Link key={l.label} to={l.to} spy={true} smooth={true} onClick={() => setMenuOpen(false)} style={navLinkStyle} activeClass="active-link">
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        /* The Magic: This CSS handles the gold color when active */
        .active-link {
          color: gold !important;
        }
        .active-btn {
          color: gold !important;
          border-color: gold !important;
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}