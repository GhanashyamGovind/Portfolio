import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:ghanashyamgovind@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const socials = [
    { label: "GitHub", url: "https://github.com/GhanashyamGovind", handle: "@GhanashyamGovind" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ghanashyam-govind-t/", handle: "ghanashyam-govind-t" },
  ];

  const inputStyle = {
    width: "100%",
    background: "var(--bg-3)",
    border: "1px solid var(--border)",
    borderRadius: "2px",
    padding: "0.85rem 1rem",
    color: "var(--text)",
    fontSize: "0.9rem",
    fontFamily: "var(--font-display)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">// contact</p>
        <h2 className="section-title">
          Let's <span>Work Together</span>
        </h2>
        <div className="accent-line" />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "4rem",
          marginTop: "3rem",
          alignItems: "flex-start",
        }} className="contact-grid">
          {/* Left */}
          <div>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "2.5rem" }}>
              I'm currently open to new opportunities — whether it's a full-time role,
              freelance project, or just a chat. Drop me a message!
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "1rem 1.25rem",
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: "4px", transition: "border-color 0.2s",
                }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent)"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border)"}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{s.label}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>
                      {s.handle}
                    </div>
                  </div>
                  <span style={{ marginLeft: "auto", color: "var(--accent)" }}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem", letterSpacing: "0.08em" }}>NAME</label>
                <input
                  type="text" name="name" required
                  value={form.name} onChange={handleChange}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                />
              </div>
              <div>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem", letterSpacing: "0.08em" }}>EMAIL</label>
                <input
                  type="email" name="email" required
                  value={form.email} onChange={handleChange}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                />
              </div>
            </div>

            <div>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem", letterSpacing: "0.08em" }}>MESSAGE</label>
              <textarea
                name="message" required rows={6}
                value={form.message} onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
                onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border)"}
              />
            </div>

            <button type="submit" style={{
              padding: "0.9rem 2rem",
              background: sent ? "transparent" : "var(--accent)",
              color: sent ? "var(--accent)" : "#000",
              border: `1px solid var(--accent)`,
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              borderRadius: "2px",
              fontFamily: "var(--font-display)",
              transition: "all 0.3s",
              alignSelf: "flex-start",
            }}>
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
