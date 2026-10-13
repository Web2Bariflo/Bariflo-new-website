import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaLeaf,
  FaWater,
  FaBars,
  FaTimes,
  FaCog,
  FaLayerGroup,
  FaFish,
} from "react-icons/fa";
import { TbWaveSine, TbAtom } from "react-icons/tb";
import "./Sediment.css";

const keyFeatures = [
  "Uniform oxygenation in water and sediments",
  "Reduces BOD, COD and nutrient load",
  "Controls eutrophication and algal blooms",
  "Supports aquatic biodiversity and water quality",
  "Energy-efficient, low-maintenance operation",
  "Suitable for lakes, ponds, reservoirs and tanks",
];

const technicalSpecifications = [
  { param: "Hexagonal frame size", spec: "1000 × 1000 × 20 mm" },
  { param: "Underwater ring size", spec: "1400 × 1400 × 20 mm" },
  { param: "Holding frame size", spec: "1400 × 1800 × 50 mm" },
  { param: "Type", spec: "Submerged ring aerator with pulley-assisted up/down motion" },
  { param: "Application", spec: "Oxygenation of water bodies and bottom sediments" },
  { param: "Power supply", spec: "230 VAC / 50 Hz" },
  { param: "Compressor motor rating", spec: "1–2 HP" },
  { param: "Motor current", spec: "6.0 A typical" },
  { param: "Air flow rate", spec: "12–18 m³/hr (200–300 L/min)" },
  { param: "Oxygen transfer rate", spec: "Up to 1.6 kg O₂ / hr typical" },
  { param: "Material of construction", spec: "SS304 / SS316" },
  { param: "Mounting type", spec: "Pole mounting with base and top bolting" },
  { param: "Diffuser type", spec: "Fine microbubble diffuser" },
  { param: "Control panel", spec: "IP65 rated panel with MCB" },
  { param: "Operating depth", spec: "1.4 m standard; customizable" },
  { param: "Maintenance", spec: "Low; easy inspection and cleaning" },
  { param: "Warranty", spec: "12 months for electronics" },
];

const benefitBadges = [
  {
    icon: <TbWaveSine className="sed-badge-glyph" />,
    title: "HIGH OXYGENATION",
    desc: "Microbubble oxygen transfer",
  },
  {
    icon: <TbAtom className="sed-badge-glyph" />,
    title: "REDUCES EUTROPHICATION",
    desc: "Controls nutrient accumulation",
  },
  {
    icon: <FaLayerGroup className="sed-badge-glyph" />,
    title: "IMPROVES WATER QUALITY",
    desc: "Mixes the water column",
  },
  {
    icon: <FaFish className="sed-badge-glyph" />,
    title: "SUPPORTS AQUATIC LIFE",
    desc: "Improves habitat conditions",
  },
  {
    icon: <FaCog className="sed-badge-glyph" />,
    title: "LOW MAINTENANCE",
    desc: "Easy inspection and cleaning",
  },
];

const calloutPointers = [
  {
    id: "housing",
    title: "DEVICE HOUSING",
    sub: "(Motor & Blower Enclosure)",
    top: "16%",
    left: "14%",
  },
  {
    id: "aerator",
    title: "SUBMERSED AERATOR",
    sub: "(Diffuser Ring)",
    top: "34%",
    left: "10%",
  },
  {
    id: "float",
    title: "FLOAT (HDPE)",
    sub: "(4 Nos.)",
    top: "52%",
    left: "12%",
  },
  {
    id: "frame",
    title: "STAINLESS STEEL FRAME",
    sub: "(SS 304 / SS 316)",
    top: "68%",
    left: "10%",
  },
  {
    id: "airline",
    title: "AIR SUPPLY LINE",
    sub: "(From Blower)",
    top: "84%",
    left: "12%",
  },
];

const applications = [
  "Lakes and ponds",
  "Reservoirs and retention basins",
  "Industrial and urban water bodies",
  "Eutrophic water bodies",
  "Fishery and aquaculture ponds",
];

const systemSummary = [
  { label: "Power", value: "230 VAC / 50 Hz" },
  { label: "Motor", value: "1–2 HP" },
  { label: "Air supply", value: "Compressed air" },
  { label: "Aeration", value: "Submerged ring" },
  { label: "Installation", value: "Floating system" },
  { label: "Operation", value: "Continuous / controlled" },
];

export default function Sediment() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCallout, setActiveCallout] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <div className="sed-page-root">
      {/* Website Navigation Header */}
      <header className="sed-header">
        <div className="sed-nav-container">
          <button
            className="sed-logo"
            onClick={() => navigate("/")}
            aria-label="Bariflo Cybernetics"
          >
            <img
              src="/images/bariflo_nav_logo.png"
              alt="Bariflo Cybernetics"
            />
          </button>

          <nav className="sed-nav-links">
            <button onClick={() => navigate("/")}>HOME</button>
            <button onClick={() => navigate("/act")} className="active">
              INDUSTRIES
            </button>
            <button onClick={() => navigate("/cognition")}>COGNITION</button>
            <button onClick={() => navigate("/case-studies")}>IMPACT</button>
            <button onClick={() => navigate("/teamMember")}>ABOUT US</button>
          </nav>

          <div className="sed-nav-actions">
            <button
              className="sed-contact-button"
              onClick={() => navigate("/contactUs")}
            >
              <span>Schedule a Consultation</span>
              <FaArrowRight />
            </button>

            <button
              className="sed-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="sed-mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="sed-mobile-nav-inner">
                <button
                  onClick={() => {
                    navigate("/");
                    setMobileMenuOpen(false);
                  }}
                >
                  HOME
                </button>
                <button
                  onClick={() => {
                    navigate("/act");
                    setMobileMenuOpen(false);
                  }}
                  className="active"
                >
                  INDUSTRIES
                </button>
                <button
                  onClick={() => {
                    navigate("/cognition");
                    setMobileMenuOpen(false);
                  }}
                >
                  COGNITION
                </button>
                <button
                  onClick={() => {
                    navigate("/case-studies");
                    setMobileMenuOpen(false);
                  }}
                >
                  IMPACT
                </button>
                <button
                  onClick={() => {
                    navigate("/teamMember");
                    setMobileMenuOpen(false);
                  }}
                >
                  ABOUT US
                </button>

                <button
                  className="sed-mobile-btn-cta"
                  onClick={() => {
                    navigate("/contactUs");
                    setMobileMenuOpen(false);
                  }}
                >
                  Schedule a Consultation <FaArrowRight />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Poster Layout Frame matching Image 1 */}
      <main className="sed-poster-frame">
        {/* Top Header Row with Title & Blue Rounded Banner */}
        <motion.div
          className="sed-top-header-row"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="sed-title-group">
            <h1 className="sed-system-title">SEDIMENT AERATION SYSTEM</h1>
            <p className="sed-system-subtitle">
              For Waterbody Rejuvenation & Eutrophication Control
            </p>
          </div>

          <div className="sed-top-summary-badge">
            <TbWaveSine className="sed-top-badge-icon" />
            <p className="sed-top-badge-text">
              Ring aeration with submerged diffusers oxygenates water and sediments, reduces nutrient
              load, controls algal growth and supports aquatic ecosystem health.
            </p>
          </div>
        </motion.div>

        {/* Master Poster Layout Grid */}
        <motion.div
          className="sed-poster-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT & CENTER MAIN ZONE */}
          <div className="sed-left-center-zone">
            {/* Top Row: Diagram Card & Key Features Card */}
            <div className="sed-diagram-features-row">
              {/* Equipment 3D Diagram Card with Callouts */}
              <motion.section className="sed-diagram-card" variants={itemVariants}>
                <div className="sed-diagram-wrap">
                  <img
                    src="/images/website%20images%20and%20icon-20250524T084126Z-1-001/aeration%20device.png"
                    alt="Sediment Aeration System Diagram"
                    className="sed-diagram-image"
                  />

                  {/* Desktop Callouts overlay */}
                  <div className="sed-callouts-overlay">
                    {calloutPointers.map((c) => (
                      <div
                        key={c.id}
                        className={`sed-callout-item ${c.id} ${activeCallout === c.id ? "active" : ""}`}
                        onMouseEnter={() => setActiveCallout(c.id)}
                        onMouseLeave={() => setActiveCallout(null)}
                      >
                        <div className="sed-callout-text">
                          <span className="sed-callout-title">{c.title}</span>
                          <span className="sed-callout-sub">{c.sub}</span>
                        </div>
                        <span className="sed-callout-line" />
                        <span className="sed-callout-dot" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile callouts list */}
                <div className="sed-callouts-mobile-list">
                  {calloutPointers.map((c) => (
                    <div className="sed-callout-mobile-chip" key={c.id}>
                      <strong>{c.title}</strong>
                      <small>{c.sub}</small>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Key Features Card */}
              <motion.section className="sed-features-card" variants={itemVariants}>
                <div className="sed-card-header-navy">
                  <h2>KEY FEATURES</h2>
                </div>
                <div className="sed-features-body">
                  <ul className="sed-features-list">
                    {keyFeatures.map((feat, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.15 }}
                      >
                        <span className="sed-check-circle">
                          <FaCheck />
                        </span>
                        <span>{feat}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            </div>

            {/* Five Circular Benefit Badges Row */}
            <motion.section className="sed-badges-row" variants={itemVariants}>
              {benefitBadges.map((b, idx) => (
                <motion.div
                  className="sed-badge-card"
                  key={idx}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="sed-badge-circle-icon">{b.icon}</div>
                  <h3 className="sed-badge-title">{b.title}</h3>
                  <p className="sed-badge-desc">{b.desc}</p>
                </motion.div>
              ))}
            </motion.section>

            {/* Bottom 3-Card Row: Working Principle, Applications, System Summary */}
            <div className="sed-bottom-trio-row">
              {/* 1. Working Principle */}
              <motion.section className="sed-trio-card" variants={itemVariants}>
                <div className="sed-card-header-navy">
                  <h2>WORKING PRINCIPLE</h2>
                </div>
                <div className="sed-trio-body">
                  <p>
                    Compressed air is released through the submerged diffuser ring, generating
                    fine microbubbles. Rising bubbles mix the water column and bottom sediments,
                    increase dissolved oxygen, reduce organic accumulation and improve overall
                    water quality.
                  </p>
                </div>
              </motion.section>

              {/* 2. Applications */}
              <motion.section className="sed-trio-card" variants={itemVariants}>
                <div className="sed-card-header-navy">
                  <h2>APPLICATIONS</h2>
                </div>
                <div className="sed-trio-body">
                  <ul className="sed-apps-bullets">
                    {applications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              {/* 3. System Summary */}
              <motion.section className="sed-trio-card" variants={itemVariants}>
                <div className="sed-card-header-navy">
                  <h2>SYSTEM SUMMARY</h2>
                </div>
                <div className="sed-summary-table-wrap">
                  <table className="sed-summary-mini-table">
                    <tbody>
                      {systemSummary.map((s, idx) => (
                        <tr key={idx} className={idx % 2 === 1 ? "alt-row" : ""}>
                          <td className="sed-sum-key">{s.label}</td>
                          <td className="sed-sum-val">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.section>
            </div>
          </div>

          {/* RIGHT COLUMN: TECHNICAL SPECIFICATIONS & DESIGN NOTES */}
          <div className="sed-right-column">
            {/* Technical Specifications Table */}
            <motion.section className="sed-specs-panel" variants={itemVariants}>
              <div className="sed-card-header-navy">
                <h2>TECHNICAL SPECIFICATIONS</h2>
              </div>

              <div className="sed-specs-table-container">
                <table className="sed-specs-table">
                  <thead>
                    <tr>
                      <th className="sed-th-param">PARAMETER</th>
                      <th className="sed-th-spec">SPECIFICATION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technicalSpecifications.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 1 ? "sed-tr-alt" : "sed-tr-plain"}
                      >
                        <td className="sed-td-param">{row.param}</td>
                        <td className="sed-td-spec">{row.spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="sed-warranty-footnote">
                <span>* Actual oxygen-transfer performance depends on water depth, temperature and pollution load.</span>
              </div>
            </motion.section>

            {/* Design Notes Card */}
            <motion.section className="sed-design-notes-card" variants={itemVariants}>
              <h3 className="sed-notes-heading">DESIGN NOTES</h3>
              <p className="sed-notes-text">
                Performance depends on water depth, pollution load and environmental conditions.
                System dimensions, aeration capacity and control options can be customized to
                site requirements.
              </p>
            </motion.section>
          </div>
        </motion.div>

        {/* Bottom Poster Footer Bar */}
        <motion.footer
          className="sed-poster-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="sed-pf-brand">
            <span className="sed-pf-infinity">∞</span>
            <span className="sed-pf-company">Bariflo Cybernetics</span>
          </div>

          <div className="sed-pf-center">
            <span>Smart Solutions for Cleaner Tomorrow</span>
          </div>

          <div className="sed-pf-right">
            <span>RELIABLE PERFORMANCE</span>
            <span className="sed-pf-sep">•</span>
            <span>ECO-FRIENDLY SOLUTION</span>
            <span className="sed-pf-sep">•</span>
            <span>SUSTAINABLE WATER BODIES</span>
          </div>
        </motion.footer>
      </main>

      {/* Website Consultation Action Bar */}
      <section className="sed-web-cta-section">
        <div className="sed-web-cta-inner">
          <div className="sed-web-cta-info">
            <FaLeaf className="sed-web-cta-leaf" />
            <div>
              <h3>Restore & Rejuvenate Your Waterbody</h3>
              <p>Get in touch for site surveys, simulation studies, and customized installation plans.</p>
            </div>
          </div>
          <button
            className="sed-web-cta-btn"
            onClick={() => navigate("/contactUs")}
          >
            <span>Talk to an Aeration Specialist</span>
            <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
