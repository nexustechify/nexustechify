const { useState } = React;

function Navbar() {
  return (
    <nav className="navbar">
      <img src="./assets/logo.png" alt="Nexus Techify Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h1>Nexus Techify Solutions Pvt. Ltd.</h1>
      <p>Innovating IT solutions to power your business growth</p>
      <a href="#contact" className="btn">Let’s Talk</a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About Us</h2>
      <p>
        At Nexus Techify Solutions, we are committed to delivering next-generation 
        IT services, digital transformation, and consulting solutions to global enterprises.
      </p>
    </section>
  );
}

function Services() {
  const services = [
    "Custom Software Development",
    "Cloud & DevOps Solutions",
    "AI & Data Analytics",
    "Enterprise Security",
    "Mobile & Web Applications",
  ];
  return (
    <section id="services" className="section">
      <h2>Our Services</h2>
      <div className="cards">
        {services.map((s, i) => (
          <div className="card" key={i}>{s}</div>
        ))}
      </div>
    </section>
  );
}

function Careers() {
  return (
    <section id="careers" className="section">
      <h2>Careers</h2>
      <p>
        We are always looking for passionate talent to join our growing team. 
        Reach out at <strong>careers@nexustechify.com</strong>
      </p>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>
      {submitted ? (
        <p>✅ Thanks! We’ll respond soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send</button>
        </form>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Nexus Techify Solutions Pvt. Ltd.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Careers />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
