import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaLeaf,
  FaSearch,
  FaBars,
  FaTimes,
  FaWrench,
  FaTint,
  FaChevronRight,
  FaSlidersH,
  FaFlask,
  FaLink,
} from "react-icons/fa";
import {
  TbCube,
  TbHexagon,
  TbCirclesRelation,
  TbGauge,
  TbShieldCheck,
  TbWifi,
} from "react-icons/tb";
import "./coagulant.css";

const allSolutions = [
  {
    id: "1",
    title: "DAF / Intelligent Aeration Tank",
    path: "/daf-tank",
    image: "/images/ICON 1.png",
  },
  {
    id: "2",
    title: "Intelligent Coagulant Doser",
    path: "/coagulant",
    image: "/images/COAGULATION.png",
    active: true,
  },
  {
    id: "3",
    title: "Intelligent Flocculation Preparation System",
    path: "/flocculant",
    image: "/images/ICON3.png",
  },
  {
    id: "4",
    title: "Sediment Aeration System",
    path: "/sediment",
    image: "/images/ICON4.png",
  },
  {
    id: "5",
    title: "Seabin System",
    path: "/seabin",
    image: "/images/ICON5.png",
  },
  {
    id: "6",
    title: "Bariflo Aquasense System",
    path: "/aquasense",
    image: "/images/ICON6.png",
  },
  {
    id: "7",
    title: "Energy Intelligence System",
    path: "/energy",
    image: "/images/ICON7.png",
  },
  {
    id: "8",
    title: "Mobile FSTP (EC–EF System)",
    path: "/mobile-fstp",
    image: "/images/ICON8.png",
  },
];

const diagramCallouts = [
  {
    id: "storage",
    title: "POWDER STORAGE",
    sub: "Moisture-proof sealed tank",
    posClass: "coag-callout-storage",
  },
  {
    id: "agitator",
    title: "AGITATOR",
    sub: "Variable-speed mixing",
    posClass: "coag-callout-agitator",
  },
  {
    id: "panel",
    title: "CONTROL PANEL",
    sub: "Automatic control & monitoring",
    posClass: "coag-callout-panel",
  },
  {
    id: "feeder",
    title: "SCREW FEEDER",
    sub: "Accurate powder feeding",
    posClass: "coag-callout-feeder",
  },
  {
    id: "tank",
    title: "PREPARATION TANK",
    sub: "Uniform mixing & dissolution",
    posClass: "coag-callout-tank",
  },
  {
    id: "pump",
    title: "DOSING PUMP",
    sub: "Precise and stable dosing",
    posClass: "coag-callout-pump",
  },
];

const keyFeaturesList = [
  "Automated powder handling and preparation",
  "Precise and adjustable dosing with real-time control",
  "Uniform and consistent mixing for optimal dissolution",
  "Suitable for various coagulants (Alum, PAC, etc.)",
  "Low maintenance and energy-efficient design",
  "Durable and corrosion-resistant construction",
  "Optional IoT integration for remote monitoring",
];

const systemGlanceData = [
  {
    label: "Application",
    value: "Coagulant preparation and dosing for water treatment",
  },
  {
    label: "Chemical type",
    value: "Alum, PAC, or other coagulants",
  },
  {
    label: "Powder storage",
    value: "Moisture-proof sealed tank with desiccant breather",
  },
  {
    label: "Dispensing",
    value: "Screw feeder / loss-in-weight dispenser",
  },
  {
    label: "Mixing",
    value: "Variable-speed agitator for uniform mixing",
  },
  {
    label: "Dosing pump",
    value: "Diaphragm / peristaltic or metering pump",
  },
  {
    label: "Control mode",
    value: "Automatic, manual or remote",
  },
];

const operatingMetrics = [
  {
    value: "±1%",
    unit: "Dosing accuracy",
    label: "of set point",
  },
  {
    value: "0.5 – 100",
    unit: "LPH/ton",
    label: "capacity",
  },
  {
    value: "UP TO 7 bar",
    unit: "Operating",
    label: "pressure",
  },
  {
    value: "230 / 415 V",
    unit: "Power supply",
    label: "options",
  },
  {
    value: "5 – 50 °C",
    unit: "Operating",
    label: "temperature",
  },
  {
    value: "IP65",
    unit: "Control panel",
    label: "enclosure",
  },
];

const detailedFeatures = [
  {
    title: "Moisture-proof storage",
    desc: "Maintains coagulant powder quality",
  },
  {
    title: "Precision powder feeding",
    desc: "Timer or gravimetric dispensing",
  },
  {
    title: "Controlled mixing",
    desc: "Promotes uniform solution and floc formation",
  },
  {
    title: "Adaptive preparation",
    desc: "Adjusts to real-time water quality",
  },
  {
    title: "Variable-speed dosing",
    desc: "Maintains the dosing accuracy",
  },
  {
    title: "Lower chemical use",
    desc: "Improves stability and operating cost",
  },
  {
    title: "AI-ready control",
    desc: "Supports optimization and remote mode",
  },
  {
    title: "Alarms and interlocks",
    desc: "Protects feeder, mixer and dosing pumps",
  },
];

const instrumentationCards = [
  {
    icon: <FaSlidersH size={20} />,
    title: "INSTRUMENTATION",
    desc: "Level, flow, pH, turbidity and dosing flow feedback",
  },
  {
    icon: <TbWifi size={22} />,
    title: "CONNECTIVITY",
    desc: "Modbus TCP/RTU, 4 – 20 mA and digital I/O",
  },
  {
    icon: <TbCube size={22} />,
    title: "APPLICATIONS",
    desc: "Coagulation preparation for STP, ETP and industrial water systems",
  },
  {
    icon: <FaLink size={20} />,
    title: "INTEGRATION",
    desc: "Compatible with existing ETP systems",
  },
];

export default function Coagulant() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Specifications", "Features", "Applications", "Downloads"];

  return (
    <div className="coag-page-root">
      {/* 1. TOP NAVBAR */}
      <header className="coag-header">
        <div className="coag-nav-container">
          <div className="coag-nav-left">
            <button
              type="button"
              className="bariflo-back-home-btn"
              onClick={() => navigate("/act")}
              title="Back to Act"
              aria-label="Back to Act"
            >
              <FaArrowLeft size={20} />
            </button>

            <a
              href="/"
              className="coag-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/images/bariflo_nav_logo.png"
                alt="Bariflo Cybernetics"
                className="coag-logo-img"
              />
            </a>
          </div>

          <nav className="coag-nav-menu">
            <button type="button" className="coag-nav-link" onClick={() => navigate("/")}>
              HOME
            </button>
            <div className="coag-nav-link-wrap active">
              <button
                type="button"
                className="coag-nav-link active"
                onClick={() => navigate("/act")}
              >
                INDUSTRIES
              </button>
              <div className="coag-nav-active-bar" />
            </div>
            <button
              type="button"
              className="coag-nav-link"
              onClick={() => navigate("/cognition")}
            >
              COGNITION
            </button>
            <button
              type="button"
              className="coag-nav-link"
              onClick={() => navigate("/case-studies")}
            >
              IMPACT
            </button>
            <button
              type="button"
              className="coag-nav-link"
              onClick={() => navigate("/teamMember")}
            >
              ABOUT US
            </button>
          </nav>

          <div className="coag-nav-actions">
            <button
              type="button"
              className="coag-search-icon-btn"
              aria-label="Search"
              onClick={() => navigate("/act")}
            >
              <FaSearch size={15} />
            </button>

            <button
              type="button"
              className="coag-consultation-btn"
              onClick={() => navigate("/contactUs")}
            >
              Schedule a Consultation <FaArrowRight size={12} />
            </button>

            <button
              type="button"
              className="coag-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="coag-mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="coag-mobile-links">
                <button type="button" onClick={() => navigate("/")}>
                  HOME
                </button>
                <button type="button" className="active" onClick={() => navigate("/act")}>
                  INDUSTRIES
                </button>
                <button type="button" onClick={() => navigate("/cognition")}>
                  COGNITION
                </button>
                <button type="button" onClick={() => navigate("/case-studies")}>
                  IMPACT
                </button>
                <button type="button" onClick={() => navigate("/teamMember")}>
                  ABOUT US
                </button>
                <button
                  type="button"
                  className="coag-mobile-cta"
                  onClick={() => navigate("/contactUs")}
                >
                  Schedule a Consultation <FaArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION */}
      <section className="coag-hero-section">
        <div className="coag-hero-bg-overlay" />
        <div className="coag-hero-container">
          <div className="coag-hero-content">
            <div className="coag-breadcrumbs">
              <span>Industries</span>
              <span className="coag-bc-sep">&gt;</span>
              <span>Industrial Wastewater</span>
              <span className="coag-bc-sep">&gt;</span>
              <span className="coag-bc-current">Intelligent Coagulant Doser</span>
            </div>

            <h1 className="coag-hero-title">Intelligent Coagulant Doser</h1>
            <h2 className="coag-hero-subtitle">
              Smart Powder Handling &amp; Precise Mixing System
            </h2>
            <p className="coag-hero-desc">
              Automated preparation and dosing of coagulants with precise control for consistent
              water treatment performance.
            </p>

            <div className="coag-badges-row">
              <div className="coag-badge-pill">
                <div className="coag-badge-icon">
                  <FaFlask />
                </div>
                <span>Accurate Dosing</span>
              </div>

              <div className="coag-badge-pill">
                <div className="coag-badge-icon">
                  <TbCirclesRelation />
                </div>
                <span>Consistent Mixing</span>
              </div>

              <div className="coag-badge-pill">
                <div className="coag-badge-icon">
                  <FaWrench />
                </div>
                <span>Low Maintenance</span>
              </div>

              <div className="coag-badge-pill">
                <div className="coag-badge-icon">
                  <TbGauge />
                </div>
                <span>Reliable Operation</span>
              </div>

              <div className="coag-badge-pill">
                <div className="coag-badge-icon">
                  <TbShieldCheck />
                </div>
                <span>Better Water Quality</span>
              </div>
            </div>
          </div>

          {/* Right Hero Glass Card */}
          <div className="coag-hero-right-card">
            <div className="coag-dosing-glass">
              <div className="coag-glass-icon-box">
                <TbHexagon className="coag-glass-hex" />
                <FaTint className="coag-glass-tint" />
              </div>
              <div className="coag-glass-text">
                <span className="coag-glass-heading">Precise Dosing</span>
                <span className="coag-glass-sub">for Cleaner Water Tomorrow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUBNAV ACTION BAR */}
      <div className="coag-subnav-bar">
        <div className="coag-subnav-container">
          <div className="coag-subnav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`coag-subnav-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="coag-tab-indicator" />}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="coag-quote-btn"
            onClick={() => navigate("/contactUs")}
          >
            Request a Quote <FaArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* 4. MAIN LAYOUT (Sidebar + Content) */}
      <main className="coag-main-section">
        <div className="coag-layout-container">
          {/* LEFT SIDEBAR: ALL SOLUTIONS */}
          <aside className="coag-sidebar">
            <div className="coag-sidebar-header">
              <div className="coag-sidebar-compass-icon">
                <TbCube />
              </div>
              <h3>All Solutions</h3>
            </div>

            <div className="coag-sidebar-list">
              {allSolutions.map((sol) => (
                <motion.div
                  key={sol.id}
                  className={`coag-sidebar-item ${sol.active ? "active" : ""}`}
                  whileHover={{ x: sol.active ? 0 : 5, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => {
                    if (sol.path && sol.path !== "#" && sol.path !== "/coagulant") {
                      navigate(sol.path, {
                        state: {
                          fromSolutionSidebar: true,
                          scrollY: window.scrollY,
                        },
                      });
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="coag-sidebar-item-thumb">
                    <img src={sol.image} alt={sol.title} />
                  </div>
                  <div className="coag-sidebar-item-info">
                    <span className="coag-sidebar-item-num">{sol.id}</span>
                    <span className="coag-sidebar-item-name">{sol.title}</span>
                  </div>
                  {sol.active && (
                    <div className="coag-sidebar-item-arrow">
                      <FaChevronRight size={12} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT COLUMN (ANIMATED) */}
          <motion.div
            className="coag-content-column"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* ROW 1: System Diagram + Key Features */}
            <div className="coag-grid-row coag-row-diagram-features">
              {/* System Diagram Card */}
              <div className="coag-card coag-diagram-card">
                <div className="coag-card-header">
                  <h3 className="coag-card-title">System Diagram</h3>
                  <div className="coag-3d-badge">
                    <TbCube size={15} />
                    <span>3D View</span>
                  </div>
                </div>

                <div className="coag-diagram-wrapper">
                  <img
                    src="/images/COAGULATION.png"
                    alt="Intelligent Coagulant Doser 3D Diagram"
                    className="coag-diagram-img"
                  />

                  {/* Callout Pointers */}
                  <div className="coag-callouts-layer">
                    {diagramCallouts.map((c) => (
                      <div key={c.id} className={`coag-callout-box ${c.posClass}`}>
                        <div className="coag-callout-inner">
                          <strong className="coag-callout-heading">{c.title}</strong>
                          <span className="coag-callout-sub">{c.sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features Card */}
              <div className="coag-card coag-features-card">
                <div className="coag-card-header">
                  <h3 className="coag-card-title">Key Features</h3>
                </div>

                <ul className="coag-features-list">
                  {keyFeaturesList.map((feat, idx) => (
                    <li key={idx} className="coag-feature-item">
                      <div className="coag-check-bubble">
                        <FaCheck size={11} />
                      </div>
                      <span className="coag-feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ROW 2: System at a Glance + Dosing & Operating Profile */}
            <div className="coag-grid-row coag-row-glance-metrics">
              {/* System at a Glance */}
              <div className="coag-card coag-glance-card">
                <div className="coag-card-header">
                  <h3 className="coag-card-title">System at a Glance</h3>
                </div>

                <div className="coag-table-responsive">
                  <table className="coag-specs-table">
                    <tbody>
                      {systemGlanceData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="coag-table-label">{row.label}</td>
                          <td className="coag-table-val">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Dosing & Operating Profile */}
              <div className="coag-card coag-metrics-card">
                <div className="coag-card-header">
                  <h3 className="coag-card-title">Dosing &amp; Operating Profile</h3>
                </div>

                <div className="coag-operating-metrics-grid">
                  {operatingMetrics.map((m, idx) => (
                    <div key={idx} className="coag-metric-tile">
                      <div className="coag-metric-val">{m.value}</div>
                      <div className="coag-metric-unit">{m.unit}</div>
                      <div className="coag-metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 3: Detailed Key Features (Full Width Grid) */}
            <div className="coag-card coag-detailed-features-card">
              <div className="coag-card-header">
                <h3 className="coag-card-title">Key Features</h3>
              </div>

              <div className="coag-detailed-features-grid">
                {detailedFeatures.map((item, idx) => (
                  <div key={idx} className="coag-detailed-feature-item">
                    <div className="coag-green-check">
                      <FaCheck size={12} />
                    </div>
                    <div className="coag-detailed-feature-text">
                      <strong className="coag-detailed-feature-title">{item.title}</strong>
                      <span className="coag-detailed-feature-desc">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 4: Instrumentation, Connectivity & Applications */}
            <div className="coag-card coag-instrumentation-card">
              <div className="coag-card-header">
                <h3 className="coag-card-title">
                  Instrumentation, Connectivity &amp; Applications
                </h3>
              </div>

              <div className="coag-instrumentation-grid">
                {instrumentationCards.map((item, idx) => (
                  <div key={idx} className="coag-instrument-box">
                    <div className="coag-instrument-icon">{item.icon}</div>
                    <h4 className="coag-instrument-title">{item.title}</h4>
                    <p className="coag-instrument-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer Footnote */}
            <div className="coag-disclaimer">
              <p>
                Note: Capacities and operating values are indicative and may vary with coagulant
                type, process duty and customization.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* 5. CALL TO ACTION FOOTER RIBBON */}
      <section className="coag-cta-section">
        <div className="coag-cta-banner">
          <div className="coag-cta-left">
            <div className="coag-cta-leaf-circle">
              <FaLeaf className="coag-cta-leaf-icon" />
            </div>

            <div className="coag-cta-text-group">
              <h2 className="coag-cta-title">Cleaner Water. Smarter Industry.</h2>
              <p className="coag-cta-subtitle">
                Intelligent solutions for a sustainable tomorrow.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="coag-cta-btn"
            onClick={() => navigate("/contactUs")}
          >
            Talk to Our Experts <FaArrowRight size={13} />
          </button>
        </div>
      </section>

      {/* 6. TRUSTED BY INDUSTRY LEADERS & FOOTER (COGNITION STYLE) */}
      <footer className="ietp-trust-footer">
        <div className="ietp-trust-footer-inner">
          <div className="ietp-trust-left-group">
            <div className="ietp-trust-label">
              TRUSTED BY
              <br />
              INDUSTRY LEADERS
            </div>

            <div className="ietp-trust-divider"></div>

            <div className="ietp-logo-item" title="Bariflo Cybernetics">
              <img
                src="/images/bariflo_nav_logo.png"
                alt="Bariflo Cybernetics"
                className="ietp-logo-bariflo-footer"
              />
            </div>
          </div>

          <div className="ietp-trust-motto">
            <div className="ietp-trust-divider"></div>
            <div className="ietp-trust-motto-text">
              HEALTHY ECOSYSTEMS.
              <br />
              PROSPEROUS COMMUNITIES.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
