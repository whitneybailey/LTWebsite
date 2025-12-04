import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';

// Shared layout pieces
const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Layout = ({ children }) => (
  <div className="lt-app">
    <div className="utility-bar">
      <p>(404) 907-4234</p>
      <span>•</span>
      <p>contact@lafayettetechsol.com</p>
      <span>•</span>
      <p>4726 Jonesboro Rd • Forest Park, GA</p>
    </div>

    <header className="site-header">
      <div className="brand">
        <span className="brand-mark">LT</span>
        <div>
          <p className="brand-name">Lafayette Tech Solutions</p>
          <p className="brand-tagline">Enterprise & Education Deployments</p>
        </div>
      </div>
      <nav>
        {navLinks.map(link => (
          <Link key={link.path} to={link.path}>
            {link.label}
          </Link>
        ))}
      </nav>
      <button className="ghost-btn">Customer Portal</button>
    </header>

    <main>{children}</main>

    <footer className="site-footer">
      <div>
        <p className="brand-name">Lafayette Tech Solutions</p>
        <p>Deploying, configuring, and protecting devices for education, aviation, enterprise, and government.</p>
      </div>
      <div className="footer-meta">
        <p>(404) 907-4234 • contact@lafayettetechsol.com</p>
        <p>4726 Jonesboro Rd, Suite A, Forest Park, GA 30297</p>
        <p>© {new Date().getFullYear()} Lafayette Tech Solutions. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

// HOME
const Home = () => (
  <>
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Enterprise-grade deployment + ADP coverage</p>
        <h1>Districts and enterprises need ready-to-deploy fleets. We deliver them.</h1>
        <p className="lead">
          Lafayette Tech Solutions procures, configures, and protects devices for K‑12, aviation, and public sector
          teams. Every shipment arrives pre-enrolled, fully tested, and backed by insurance-grade ADP.
        </p>
        <div className="hero-ctas">
          <Link to="/solutions" className="primary-btn as-link">
            Get a deployment plan
          </Link>
          <Link to="/services" className="secondary-btn as-link">
            Explore ADP coverage
          </Link>
        </div>
        <div className="hero-highlights">
          <div>
            <p>24 hr</p>
            <span>Hot swap dispatch</span>
          </div>
          <div>
            <p>98%</p>
            <span>On-time rollouts</span>
          </div>
          <div>
            <p>50+</p>
            <span>Public contracts</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-card">
          <p>Ready-to-use Chromebook kit</p>
          <ul>
            <li>Auto-enrolled in Google Admin</li>
            <li>District apps preloaded</li>
            <li>ADP + hot swap coverage</li>
          </ul>
        </div>
      </div>
    </section>
  </>
);

// SOLUTIONS PAGE (procure / configure / protect, K‑12 spotlight)
const SolutionsPage = () => (
  <>
    <section className="page-hero">
      <h1>Device Procurement & Deployment</h1>
      <p>
        From sourcing to imaging to delivery, Lafayette Tech Solutions designs deployment programs that match the rigor
        of aviation, enterprise, and K‑12 environments.
      </p>
    </section>

    <section className="pillars">
      <div className="section-heading">
        <p className="eyebrow">How we support your teams</p>
        <h2>Procure. Configure. Protect.</h2>
        <p>
          One partner for sourcing, imaging, insurance-backed protection, and logistics across education, aviation, and
          enterprise operations.
        </p>
      </div>
      <div className="pillar-grid">
        <article className="pillar-card">
          <h3>Procure</h3>
          <p>
            Authorized access to Acer, Apple, Dell, HP, Lenovo, Microsoft and more—vetted for district, enterprise, and
            federal compliance requirements.
          </p>
        </article>
        <article className="pillar-card">
          <h3>Configure</h3>
          <p>
            Zero-touch imaging, enrollment, and QA so fleets arrive classroom ready. We preload security policies,
            curriculum apps, and airline-certified profiles.
          </p>
        </article>
        <article className="pillar-card">
          <h3>Protect</h3>
          <p>
            Insurance-backed ADP, hot swaps, and OEM-grade repairs keep staff and students connected with virtually no
            downtime or surprise replacement costs.
          </p>
        </article>
      </div>
    </section>

    <section className="education-section">
      <div className="education-media">
        <div className="media-card">
          <p>Classroom-ready devices</p>
          <span>Chromebooks • iPads • Windows</span>
        </div>
      </div>
      <div className="education-copy">
        <p className="eyebrow">K‑12 spotlight</p>
        <h2>Keeping students connected from day one</h2>
        <p>
          We curate device mixes, enroll them into your MDM, push curriculum content, and ship in classroom-ready kits.
          When inevitable drops happen, ADP and hot swaps ensure instruction never slows down.
        </p>
        <ul>
          <li>District-specific bundles for Chromebooks, tablets, and peripherals</li>
          <li>QA checklist covering firmware, security policies, and login testing</li>
          <li>Optional onsite launch teams for large-scale rollouts</li>
        </ul>
      </div>
    </section>
  </>
);

// SERVICES PAGE (ADP, hot swap, repairs, portal, etc.)
const ServicesPage = () => (
  <>
    <section className="page-hero">
      <h1>Services & Support Programs</h1>
      <p>
        Bundle deployment, accidental damage protection, logistics, and analytics into a single Lafayette Tech
        Solutions service stack.
      </p>
    </section>

    <section className="services-section">
      <div className="services-grid">
        <article className="service-card">
          <h3>Accidental Damage Protection</h3>
          <p>
            Insurance-backed coverage bundled with every device to eliminate repair surprises and budget variance for
            districts and enterprises.
          </p>
        </article>
        <article className="service-card">
          <h3>Hot Swap Logistics</h3>
          <p>
            Pre-configured replacements ship same day, ensuring flight crews, classrooms, and field teams stay
            productive when devices break.
          </p>
        </article>
        <article className="service-card">
          <h3>Advanced Repairs</h3>
          <p>
            OEM-authorized diagnostics, micro-solder, and component-level repair for Chromebooks, Windows, and iOS
            fleets.
          </p>
        </article>
        <article className="service-card">
          <h3>Analytics & Cloud Portal</h3>
          <p>
            Fleet health, ADP claims, and deployment milestones in a single dashboard built for IT leaders and
            superintendents.
          </p>
        </article>
        <article className="service-card">
          <h3>Contracts & Compliance</h3>
          <p>
            State, public sector, and aviation-ready agreements with documented SLAs, data safeguards, and audit
            support.
          </p>
        </article>
      </div>
    </section>
  </>
);

// INDUSTRIES PAGE
const IndustriesPage = () => (
  <>
    <section className="page-hero">
      <h1>Industries We Serve</h1>
      <p>
        Tailored rollout and protection programs for K‑12 districts, airlines, enterprises, and public sector
        organizations.
      </p>
    </section>

    <section className="services-section">
      <div className="services-grid">
        <article className="service-card">
          <h3>K‑12 Education</h3>
          <p>
            1:1 device environments with classroom-ready Chromebooks, tablets, and ADP-backed hot swap programs that
            keep students learning.
          </p>
        </article>
        <article className="service-card">
          <h3>Aviation</h3>
          <p>
            Fleet management for EFBs and ground devices with strict turnaround SLAs and secure, airline‑ready imaging
            profiles.
          </p>
        </article>
        <article className="service-card">
          <h3>Enterprise</h3>
          <p>
            Turnkey deployment and protection for distributed workforces, with analytics to keep IT and finance aligned
            on device health.
          </p>
        </article>
        <article className="service-card">
          <h3>Public Sector & Healthcare</h3>
          <p>
            Compliant procurement and lifecycle management programs designed for agencies and healthcare environments.
          </p>
        </article>
      </div>
    </section>
  </>
);

// ABOUT / EXECUTIVES PAGE
const AboutPage = () => (
  <>
    <section className="page-hero">
      <h1>About Lafayette Tech Solutions</h1>
      <p>
        Founded in Georgia, Lafayette Tech Solutions exists to remove friction from large‑scale device deployments so
        educators, operations leaders, and executives can stay focused on their missions.
      </p>
    </section>

    <section className="about-grid">
      <div className="about-copy">
        <p className="eyebrow">Who we are</p>
        <h2>Enterprise discipline. Education heart.</h2>
        <p>
          Our team blends years of experience in K‑12, aviation, and enterprise IT. We understand what it takes to ship
          secure, ready‑to‑use fleets at scale, and we own the details—from procurement and imaging to ADP and
          analytics.
        </p>
        <p>
          Every engagement starts with listening. We tailor deployment and protection programs to your environment,
          whether that&apos;s a district rolling out Chromebooks or an airline refreshing cockpit devices.
        </p>
      </div>

      <div className="executive-panel">
        <p className="eyebrow">Leadership team</p>
        <div className="executive-card">
          <h3>CEO, Pierre Bowles</h3>
          <p>
            Sets Lafayette&apos;s vision and strategy across education, aviation, enterprise, and public sector, keeping
            every program aligned to reliability, service, and measurable outcomes.
          </p>
        </div>
        <div className="executive-card">
          <h3>CTO, Isaiah</h3>
          <p>
            Leads our technical roadmap, imaging standards, and integrations with customer MDM and security stacks to
            ensure every fleet ships secure and ready to work.
          </p>
        </div>
        <div className="executive-card">
          <h3>COO, Ashton Soles</h3>
          <p>
            Oversees day‑to‑day operations, deployment logistics, and hot swap programs so districts and enterprises
            experience consistent, on‑time delivery and support.
          </p>
        </div>
      </div>
    </section>
  </>
);

// CONTACT PAGE
const ContactPage = () => (
  <>
    <section className="page-hero">
      <h1>Contact Lafayette Tech Solutions</h1>
      <p>Share a few details and we&apos;ll design a deployment, ADP, and support program around your organization.</p>
    </section>

    <section className="contact-grid">
      <div className="contact-card">
        <h3>Talk with our team</h3>
        <p>(404) 907-4234</p>
        <p>contact@lafayettetechsol.com</p>
        <p>4726 Jonesboro Rd, Suite A, Forest Park, GA 30297</p>
      </div>
      <div className="contact-card">
        <h3>Quick intake (sample)</h3>
        <p>Tell us your device counts, timelines, and whether you need deployment, ADP, or both.</p>
        <ul>
          <li>K‑12 1:1 programs</li>
          <li>Aviation fleets</li>
          <li>Enterprise refreshes</li>
          <li>Public sector contracts</li>
        </ul>
      </div>
    </section>
  </>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

