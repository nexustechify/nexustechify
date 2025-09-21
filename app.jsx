import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [members, setMembers] = useState([]);
  const [blog, setBlog] = useState([]);
  const [data, setData] = useState({
    contact: { email: "", phone: "", address: "" },
  });
  const [site, setSite] = useState({
    companyName: "Nexus Solutions Pvt. Ltd",
    domain: "nexussolutions.com",
    heroCta: "Send",
  });

  useEffect(() => {
    // TODO: fetch content.json here
    setMembers([
      { name: "John Doe", role: "Developer", photo: "" },
      { name: "Jane Smith", role: "Designer", photo: "" },
    ]);
    setBlog([
      { id: 1, title: "Welcome Post", date: "2025-09-20", summary: "First blog entry" },
    ]);
    setData({
      contact: {
        email: "info@nexussolutions.com",
        phone: "+91-1234567890",
        address: "Hyderabad, India",
      },
    });
  }, []);

  return (
    <div>
      <main>
        {/* Team / Members */}
        <section id="team" style={{ marginTop: 34 }}>
          <h2>Our Team</h2>
          <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {members.map((m, idx) => (
              <div key={idx} className="card" style={{ textAlign: "center" }}>
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    style={{
                      width: 96,
                      height: 96,
                      objectFit: "cover",
                      borderRadius: 999,
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: 96,
                      height: 96,
                      borderRadius: 999,
                      background: "#e2e8f0",
                      display: "inline-block",
                    }}
                  />
                )}
                <h4 style={{ margin: "12px 0 6px" }}>{m.name}</h4>
                <div style={{ color: "#475569" }}>{m.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section id="blog" style={{ marginTop: 34 }}>
          <h2>Latest posts</h2>
          <div style={{ marginTop: 12 }}>
            {blog.map((p) => (
              <div key={p.id} className="card" style={{ marginBottom: 10 }}>
                <h3 style={{ margin: "0 0 8px" }}>{p.title}</h3>
                <div style={{ fontSize: 13, color: "#64748b" }}>
                  {p.date} — {p.summary}
                </div>
              </div>
            ))}
            {blog.length === 0 && <div>No posts yet — add to content.json</div>}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ marginTop: 34 }}>
          <h2>Contact</h2>
          <div className="card" style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0 }}>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${data.contact?.email}`}>{data.contact?.email}</a>
              </p>
              <p style={{ margin: 0 }}>
                <strong>Phone:</strong> {data.contact?.phone}
              </p>
              <p style={{ margin: 0 }}>
                <strong>Address:</strong> {data.contact?.address}
              </p>
              <p style={{ marginTop: 8, fontSize: 13, color: "#64748b" }}>
                Domain: {site.domain || "—"}
              </p>
            </div>
            <div style={{ width: 220 }}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Demo form. Replace with Formspree/Netlify or your API endpoint.");
                }}
              >
                <div style={{ display: "grid", gap: 8 }}>
                  <input
                    placeholder="Your name"
                    required
                    style={{
                      padding: 10,
                      borderRadius: 8,
                      border: "1px solid #e2e8f0",
                    }}
                  />
                  <input
                    placeholder="Your email"
                    type="email"
                    required
                    style={{
                      padding: 10,
                      borderRadius: 8,
                      border: "1px solid #e2e8f0",
                    }}
                  />
                  <textarea
                    placeholder="Message"
                    required
                    style={{
                      padding: 10,
                      borderRadius: 8,
                      border: "1px solid #e2e8f0",
                      minHeight: 80,
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: "none",
                      background: "#0ea5a4",
                      color: "#022",
                    }}
                  >
                    {site.heroCta || "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ padding: "20px 0", borderTop: "1px solid #eef2f7", marginTop: 40 }}>
        <div className="container" style={{ textAlign: "center", color: "#64748b" }}>
          © {new Date().getFullYear()} {site.companyName} · Built with ❤️ · Edit{" "}
          <code>content.json</code> to update site content.
        </div>
      </footer>
    </div>
  );
}
