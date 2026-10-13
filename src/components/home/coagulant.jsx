import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaLeaf,
  FaSlidersH,
  FaNetworkWired,
  FaWater,
  FaBars,
  FaTimes,
  FaShieldAlt,
  FaCog,
  FaChevronRight,
  FaMicrochip,
  FaIndustry,
} from "react-icons/fa";
import "./coagulant.css";

const Coagulant = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProcess, setActiveProcess] = useState(null);

  const systemDetails = [
    { label: "Coagulants", value: "Alum and PAC" },
    { label: "Powder storage", value: "Moisture-proof sealed tank with desiccant breather" },
    { label: "Dispensing", value: "Screw feeder / loss-in-weight dispenser" },
    { label: "Mixer / agitator", value: "Variable-speed, top or side mounted" },
    { label: "Dosing pump", value: "Diaphragm, peristaltic or metering pump" },
    { label: "Control mode", value: "Automatic, AI-based, manual or remote" },
  ];

  const operatingProfile = [
    { value: "±1%", label: "Dosing accuracy\nof set point" },
    { value: "0.5 – 100", label: "LPH dosing\ncapacity" },
    { value: "UP TO 7 bar", label: "Operating\npressure" },
    { value: "230 / 415 V", label: "Power-supply\noptions" },
    { value: "5 – 50 ° C", label: "Operating\ntemperature" },
    { value: "IP65", label: "Control-panel\nenclosure" },
  ];

  const keyFeatures = [
    {
      col: 1,
      items: [
        {
          title: "Moisture-proof storage",
          desc: "Maintains coagulant powder quality",
        },
        {
          title: "Controlled mixing",
          desc: "Promotes uniform solution and floc formation",
        },
        {
          title: "Variable-speed dosing",
          desc: "Maintains ±1% dosing accuracy",
        },
        {
          title: "AI-ready control",
          desc: "Supports optimization and remote mode",
        },
      ],
    },
    {
      col: 2,
      items: [
        {
          title: "Precision powder feeding",
          desc: "Timed or gravimetric dispensing",
        },
        {
          title: "Adaptive preparation",
          desc: "Responds to real-time water quality",
        },
        {
          title: "Lower chemical use",
          desc: "Improves stability and operating cost",
        },
        {
          title: "Alarms and interlocks",
          desc: "Protects feeder, mixer and dosing pumps",
        },
      ],
    },
  ];

  const processLabels = [
    { id: "storage", name: "POWDER STORAGE", hint: "Sealed storage hopper with dry air desiccant" },
    { id: "feeder", name: "SCREW FEEDER", hint: "Precision gravimetric / volumetric powder feed" },
    { id: "tank", name: "PREPARATION TANK", hint: "Corrosion-resistant automated dissolution basin" },
    { id: "agitator", name: "AGITATOR", hint: "High-efficiency variable-speed flash mixing" },
    { id: "dosing", name: "SMART DOSING & HMI", hint: "Adaptive telemetry & multi-loop chemical delivery" },
  ];

  const specsColumns = [
    {
      title: "INSTRUMENTATION",
      desc: "Level, flow, pH, turbidity and dosing-flow feedback",
      icon: <FaSlidersH className="coag-inst-icon" />,
    },
    {
      title: "CONNECTIVITY",
      desc: "Modbus TCP/RTU, 4 – 20 mA and digital I/O",
      icon: <FaNetworkWired className="coag-inst-icon" />,
    },
    {
      title: "APPLICATIONS",
      desc: "Coagulation preparation for STP, ETP and industrial water systems",
      icon: <FaWater className="coag-inst-icon" />,
    },
  ];

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <div className="coag-page-root">
      {/* Navigation Header */}
      <header className="coag-header">
        <div className="coag-nav-container">
          <button
            className="coag-logo"
            onClick={() => navigate("/")}
            aria-label="Bariflo Cybernetics"
          >
            <img
              src="/images/bariflo_nav_logo.png"
              alt="Bariflo Cybernetics"
            />
          </button>

          <nav className="coag-nav-links">
            <button onClick={() => navigate("/")}>HOME</button>
            <button onClick={() => navigate("/act")} className="active">
              INDUSTRIES
            </button>
            <button onClick={() => navigate("/cognition")}>COGNITION</button>
            <button onClick={() => navigate("/case-studies")}>IMPACT</button>
            <button onClick={() => navigate("/teamMember")}>ABOUT US</button>
          </nav>

          <div className="coag-nav-actions">
            <button
              className="coag-contact-button"
              onClick={() => navigate("/contactUs")}
            >
              <span>Schedule a Consultation</span>
              <FaArrowRight />
            </button>

            <button
              className="coag-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="coag-mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="coag-mobile-nav-inner">
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
                  className="coag-mobile-btn-cta"
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

      {/* Main Poster Layout Container matching exact design */}
      <main className="coag-poster-container">
        {/* Top Poster Title Bar */}
        <motion.div
          className="coag-title-bar"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="coag-main-title">3. INTELLIGENT COAGULATION PREPARATION</h1>
        </motion.div>

        {/* Subtitle / Tagline */}
        <motion.div
          className="coag-subtitle-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span>SMART POWDER HANDLING</span>
          <span className="coag-bullet">•</span>
          <span>PRECISE MIXING</span>
          <span className="coag-bullet">•</span>
          <span>ADAPTIVE DOSING</span>
        </motion.div>

        <motion.div
          className="coag-content-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Machine Showcase Card */}
          <motion.section className="coag-machine-card" variants={itemVariants}>
            <div className="coag-image-frame">
              <img
                src="/images/COAGULATION.png"
                alt="Intelligent Coagulation Preparation System Skid"
                className="coag-machine-img"
              />
            </div>

            {/* 5 Process Labels Row */}
            <div className="coag-process-row">
              {processLabels.map((proc, idx) => (
                <button
                  key={proc.id}
                  className={`coag-process-pill ${activeProcess === proc.id ? "active" : ""}`}
                  onClick={() => setActiveProcess(activeProcess === proc.id ? null : proc.id)}
                  title={proc.hint}
                  aria-label={proc.name}
                >
                  <span className="coag-pill-num">{idx + 1}</span>
                  <span className="coag-pill-text">{proc.name}</span>
                </button>
              ))}
            </div>
            {activeProcess && (
              <motion.div
                className="coag-process-tooltip"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span>{processLabels.find((p) => p.id === activeProcess)?.hint}</span>
              </motion.div>
            )}
          </motion.section>

          {/* 2-Column Grid: System at a Glance & Dosing Profile */}
          <div className="coag-two-col-grid">
            {/* Left: SYSTEM AT A GLANCE */}
            <motion.section className="coag-panel-card" variants={itemVariants}>
              <div className="coag-panel-header">
                <h2>SYSTEM AT A GLANCE</h2>
              </div>
              <div className="coag-glance-table">
                {systemDetails.map((item, idx) => (
                  <div className="coag-glance-row" key={idx}>
                    <div className="coag-glance-key">{item.label}</div>
                    <div className="coag-glance-val">{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Right: DOSING & OPERATING PROFILE */}
            <motion.section className="coag-panel-card" variants={itemVariants}>
              <div className="coag-panel-header">
                <h2>DOSING & OPERATING PROFILE</h2>
              </div>
              <div className="coag-metrics-grid">
                {operatingProfile.map((metric, idx) => (
                  <motion.div
                    className="coag-metric-cell"
                    key={idx}
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ type: "spring", stiffness: 350 }}
                  >
                    <div className="coag-metric-val">{metric.value}</div>
                    <div className="coag-metric-lbl">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Middle: KEY FEATURES */}
          <motion.section className="coag-panel-card" variants={itemVariants}>
            <div className="coag-panel-header">
              <h2>KEY FEATURES</h2>
            </div>
            <div className="coag-features-container">
              {keyFeatures.map((colGroup, colIdx) => (
                <div className="coag-feature-column" key={colIdx}>
                  {colGroup.items.map((feat, itemIdx) => (
                    <div className="coag-feature-row" key={itemIdx}>
                      <span className="coag-check-glyph">✓</span>
                      <div className="coag-feature-info">
                        <strong className="coag-feature-headline">{feat.title}</strong>
                        <p className="coag-feature-subline">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Bottom: INSTRUMENTATION, CONNECTIVITY & APPLICATIONS */}
          <motion.section className="coag-panel-card" variants={itemVariants}>
            <div className="coag-panel-header">
              <h2>INSTRUMENTATION, CONNECTIVITY & APPLICATIONS</h2>
            </div>
            <div className="coag-bottom-three-col">
              {specsColumns.map((col, idx) => (
                <motion.div
                  className="coag-bottom-col-card"
                  key={idx}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="coag-col-title-wrap">
                    {col.icon}
                    <h3>{col.title}</h3>
                  </div>
                  <p>{col.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Disclaimer Note */}
          <motion.p className="coag-disclaimer-note" variants={itemVariants}>
            Note : Capacities and operating values are indicative and may vary with coagulant type, process duty and customization.
          </motion.p>
        </motion.div>
      </main>

      {/* Website CTA Section */}
      <section className="coag-cta-banner">
        <div className="coag-cta-inner">
          <div className="coag-cta-left">
            <FaLeaf className="coag-cta-icon" />
            <div>
              <h3>Transform Your Chemical Dosing Efficiency</h3>
              <p>Schedule a customized application assessment with Bariflo engineers.</p>
            </div>
          </div>
          <button
            className="coag-cta-action-btn"
            onClick={() => navigate("/contactUs")}
          >
            <span>Request Technical Proposal</span>
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="coag-site-footer">
        <div className="coag-footer-row">
          <div className="coag-footer-brand">
            <strong>Bariflo Cybernetics</strong>
            <p>Smart Solutions for Cleaner Tomorrow</p>
          </div>
          <div className="coag-footer-taglines">
            <span>RELIABLE PERFORMANCE</span>
            <span className="coag-footer-sep">•</span>
            <span>ECO-FRIENDLY SOLUTION</span>
            <span className="coag-footer-sep">•</span>
            <span>SUSTAINABLE WATER BODIES</span>
          </div>
        </div>
        <div className="coag-footer-legal">
          &copy; {new Date().getFullYear()} Bariflo Cybernetics Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Coagulant;
