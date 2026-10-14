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
  FaChevronRight,
  FaSlidersH,
  FaWater,
  FaShieldAlt,
  FaCrosshairs,
} from "react-icons/fa";
import {
  TbCube,
  TbHexagon,
  TbAtom,
  TbGauge,
  TbShieldCheck,
  TbWifi,
  TbAdjustmentsHorizontal,
} from "react-icons/tb";
import "./Flocculant.css";

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
  },
  {
    id: "3",
    title: "Intelligent Flocculation Preparation System",
    path: "/flocculant",
    image: "/images/ICON3.png",
    active: true,
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
    title: "POLYMER STORAGE",
    sub: "Moisture-proof sealed tank",
    posClass: "floc-callout-storage",
  },
  {
    id: "tank",
    title: "PREPARATION TANK",
    sub: "Uniform mixing & dissolution",
    posClass: "floc-callout-tank",
  },
  {
    id: "heating",
    title: "HEATING & AGITATION",
    sub: "Temperature control & mixer with agitator",
    posClass: "floc-callout-heating",
  },
  {
    id: "feeder",
    title: "SCREW FEEDER",
    sub: "Accurate powder feeding",
    posClass: "floc-callout-feeder",
  },
  {
    id: "smart-dosing",
    title: "SMART DOSING & HMI",
    sub: "Precise dosing with real-time control",
    posClass: "floc-callout-smart-dosing",
  },
];

const keyFeaturesList = [
  "Automated polymer preparation and dosing",
  "Consistent polymer solution concentration",
  "Precise and adjustable dosing with real-time control",
  "Temperature control with heating and agitation",
  "Variable-speed operation for optimal performance",
  "Low maintenance and energy-efficient design",
  "Reliable and durable construction",
  "Optional IoT integration for remote monitoring",
];

const systemGlanceData = [
  {
    label: "Application",
    value: "Polymer preparation and dosing for water treatment",
  },
  {
    label: "Chemical type",
    value: "Cationic, anionic and non-ionic polymers",
  },
  {
    label: "Powder storage",
    value: "Moisture-proof sealed tank with desiccant breather",
  },
  {
    label: "Powder feeding",
    value: "Screw feeder / loss-in-weight dispenser",
  },
  {
    label: "Heating system",
    value: "SS316 coil hot water, thermal oil or electric",
  },
  {
    label: "Mixer / agitator",
    value: "Variable-speed, top mounted",
  },
  {
    label: "Dosing pump",
    value: "Timed or peristaltic / metering pump",
  },
  {
    label: "Control mode",
    value: "Automatic, AI-based, manual or remote",
  },
];

const operatingMetrics = [
  {
    value: "25 – 60 °C",
    unit: "Adjustable",
    label: "temperature",
  },
  {
    value: "±1 °C",
    unit: "Temperature",
    label: "accuracy",
  },
  {
    value: "±1%",
    unit: "Dosing accuracy",
    label: "of set point",
  },
  {
    value: "0.5 – 100",
    unit: "LPH dosing",
    label: "capacity",
  },
  {
    value: "UP TO 7 bar",
    unit: "Operating",
    label: "pressure",
  },
  {
    value: "IP65",
    unit: "Control-panel",
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
    title: "Temperature stability",
    desc: "Maintains consistent viscosity and activation",
  },
  {
    title: "Adaptive preparation",
    desc: "Adjusts concentration to process demand",
  },
  {
    title: "Variable-speed dosing",
    desc: "Provides accurate and stable chemical delivery",
  },
  {
    title: "Reduced polymer use",
    desc: "Improves floc formation and process stability",
  },
  {
    title: "Alarms and interlocks",
    desc: "Protects feeder, mixer, heater and pumps",
  },
];

const instrumentationCards = [
  {
    icon: <TbGauge size={22} />,
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
    desc: "Polymer preparation for STP, ETP, DAF and sludge dewatering systems",
  },
];

export default function Flocculant() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Specifications", "Features", "Applications", "Downloads"];

  return (
    <div className="floc-page-root">
      {/* 1. TOP NAVBAR */}
      <header className="floc-header">
        <div className="floc-nav-container">
          <div className="floc-nav-left">
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
              className="floc-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/images/bariflo_nav_logo.png"
                alt="Bariflo Cybernetics"
                className="floc-logo-img"
              />
            </a>
          </div>

          <nav className="floc-nav-menu">
            <button type="button" className="floc-nav-link" onClick={() => navigate("/")}>
              HOME
            </button>
            <div className="floc-nav-link-wrap active">
              <button
                type="button"
                className="floc-nav-link active"
                onClick={() => navigate("/act")}
              >
                INDUSTRIES
              </button>
              <div className="floc-nav-active-bar" />
            </div>
            <button
              type="button"
              className="floc-nav-link"
              onClick={() => navigate("/cognition")}
            >
              COGNITION
            </button>
            <button
              type="button"
              className="floc-nav-link"
              onClick={() => navigate("/case-studies")}
            >
              IMPACT
            </button>
            <button
              type="button"
              className="floc-nav-link"
              onClick={() => navigate("/teamMember")}
            >
              ABOUT US
            </button>
          </nav>

          <div className="floc-nav-actions">
            <button
              type="button"
              className="floc-search-icon-btn"
              aria-label="Search"
              onClick={() => navigate("/act")}
            >
              <FaSearch size={15} />
            </button>

            <button
              type="button"
              className="floc-consultation-btn"
              onClick={() => navigate("/contactUs")}
            >
              Schedule a Consultation <FaArrowRight size={12} />
            </button>

            <button
              type="button"
              className="floc-mobile-toggle"
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
              className="floc-mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="floc-mobile-links">
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
                  className="floc-mobile-cta"
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
      <section className="floc-hero-section">
        <div className="floc-hero-bg-overlay" />
        <div className="floc-hero-container">
          <div className="floc-hero-content">
            <div className="floc-breadcrumbs">
              <span>Industries</span>
              <span className="floc-bc-sep">&gt;</span>
              <span>Industrial Wastewater</span>
              <span className="floc-bc-sep">&gt;</span>
              <span className="floc-bc-current">Intelligent Flocculation Preparation System</span>
            </div>

            <h1 className="floc-hero-title">Intelligent Flocculation Preparation System</h1>
            <h2 className="floc-hero-subtitle">
              Consistent Polymer Solution &amp; Precise Dosing
            </h2>
            <p className="floc-hero-desc">
              Automated preparation and dosing of polymer solutions with precise control for optimal
              flocculation and enhanced treatment performance.
            </p>

            <div className="floc-badges-row">
              <div className="floc-badge-pill">
                <div className="floc-badge-icon">
                  <FaWater />
                </div>
                <span>Consistent Polymer Solution</span>
              </div>

              <div className="floc-badge-pill">
                <div className="floc-badge-icon">
                  <TbAdjustmentsHorizontal />
                </div>
                <span>Adaptive Preparation</span>
              </div>

              <div className="floc-badge-pill">
                <div className="floc-badge-icon">
                  <FaCrosshairs />
                </div>
                <span>Precise Dosing</span>
              </div>

              <div className="floc-badge-pill">
                <div className="floc-badge-icon">
                  <TbShieldCheck />
                </div>
                <span>Reliable Operation</span>
              </div>
            </div>
          </div>

          {/* Right Hero Glass Card */}
          <div className="floc-hero-right-card">
            <div className="floc-dosing-glass">
              <div className="floc-glass-icon-box">
                <TbAtom className="floc-glass-atom" />
              </div>
              <div className="floc-glass-text">
                <span className="floc-glass-heading">Smarter Polymer Preparation</span>
                <span className="floc-glass-sub">for Cleaner Water Tomorrow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUBNAV ACTION BAR */}
      <div className="floc-subnav-bar">
        <div className="floc-subnav-container">
          <div className="floc-subnav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`floc-subnav-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="floc-tab-indicator" />}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="floc-quote-btn"
            onClick={() => navigate("/contactUs")}
          >
            Request a Quote <FaArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* 4. MAIN LAYOUT (Sidebar + Content) */}
      <main className="floc-main-section">
        <div className="floc-layout-container">
          {/* LEFT SIDEBAR: ALL SOLUTIONS */}
          <aside className="floc-sidebar">
            <div className="floc-sidebar-header">
              <div className="floc-sidebar-compass-icon">
                <TbCube />
              </div>
              <h3>All Solutions</h3>
            </div>

            <div className="floc-sidebar-list">
              {allSolutions.map((sol) => (
                <motion.div
                  key={sol.id}
                  className={`floc-sidebar-item ${sol.active ? "active" : ""}`}
                  whileHover={{ x: sol.active ? 0 : 5, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => {
                    if (sol.path && sol.path !== "#" && sol.path !== "/flocculant") {
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
                  <div className="floc-sidebar-item-thumb">
                    <img src={sol.image} alt={sol.title} />
                  </div>
                  <div className="floc-sidebar-item-info">
                    <span className="floc-sidebar-item-num">{sol.id}</span>
                    <span className="floc-sidebar-item-name">{sol.title}</span>
                  </div>
                  {sol.active && (
                    <div className="floc-sidebar-item-arrow">
                      <FaChevronRight size={12} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT COLUMN (ANIMATED) */}
          <motion.div
            className="floc-content-column"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* ROW 1: System Diagram + Key Features */}
            <div className="floc-grid-row floc-row-diagram-features">
              {/* System Diagram Card */}
              <div className="floc-card floc-diagram-card">
                <div className="floc-card-header">
                  <h3 className="floc-card-title">System Diagram</h3>
                  <div className="floc-3d-badge">
                    <TbCube size={15} />
                    <span>3D View</span>
                  </div>
                </div>

                <div className="floc-diagram-wrapper">
                  <img
                    src="/images/COAGULATION.png"
                    alt="Intelligent Flocculation Preparation System 3D Diagram"
                    className="floc-diagram-img"
                  />

                  {/* Callout Pointers */}
                  <div className="floc-callouts-layer">
                    {diagramCallouts.map((c) => (
                      <div key={c.id} className={`floc-callout-box ${c.posClass}`}>
                        <div className="floc-callout-inner">
                          <strong className="floc-callout-heading">{c.title}</strong>
                          <span className="floc-callout-sub">{c.sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features Card */}
              <div className="floc-card floc-features-card">
                <div className="floc-card-header">
                  <h3 className="floc-card-title">Key Features</h3>
                </div>

                <ul className="floc-features-list">
                  {keyFeaturesList.map((feat, idx) => (
                    <li key={idx} className="floc-feature-item">
                      <div className="floc-check-bubble">
                        <FaCheck size={11} />
                      </div>
                      <span className="floc-feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ROW 2: System at a Glance + Preparation & Dosing Profile */}
            <div className="floc-grid-row floc-row-glance-metrics">
              {/* System at a Glance */}
              <div className="floc-card floc-glance-card">
                <div className="floc-card-header">
                  <h3 className="floc-card-title">System at a Glance</h3>
                </div>

                <div className="floc-table-responsive">
                  <table className="floc-specs-table">
                    <tbody>
                      {systemGlanceData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="floc-table-label">{row.label}</td>
                          <td className="floc-table-val">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Preparation & Dosing Profile */}
              <div className="floc-card floc-metrics-card">
                <div className="floc-card-header">
                  <h3 className="floc-card-title">Preparation &amp; Dosing Profile</h3>
                </div>

                <div className="floc-operating-metrics-grid">
                  {operatingMetrics.map((m, idx) => (
                    <div key={idx} className="floc-metric-tile">
                      <div className="floc-metric-val">{m.value}</div>
                      <div className="floc-metric-unit">{m.unit}</div>
                      <div className="floc-metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 3: Detailed Key Features (Full Width Grid) */}
            <div className="floc-card floc-detailed-features-card">
              <div className="floc-card-header">
                <h3 className="floc-card-title">Key Features</h3>
              </div>

              <div className="floc-detailed-features-grid">
                {detailedFeatures.map((item, idx) => (
                  <div key={idx} className="floc-detailed-feature-item">
                    <div className="floc-green-check">
                      <FaCheck size={12} />
                    </div>
                    <div className="floc-detailed-feature-text">
                      <strong className="floc-detailed-feature-title">{item.title}</strong>
                      <span className="floc-detailed-feature-desc">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 4: Instrumentation, Connectivity & Applications */}
            <div className="floc-card floc-instrumentation-card">
              <div className="floc-card-header">
                <h3 className="floc-card-title">
                  Instrumentation, Connectivity &amp; Applications
                </h3>
              </div>

              <div className="floc-instrumentation-grid">
                {instrumentationCards.map((item, idx) => (
                  <div key={idx} className="floc-instrument-box">
                    <div className="floc-instrument-icon">{item.icon}</div>
                    <h4 className="floc-instrument-title">{item.title}</h4>
                    <p className="floc-instrument-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer Footnote */}
            <div className="floc-disclaimer">
              <p>
                Note: Capacities and operating values are indicative and may vary with polymer
                type, process duty and customization.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* 5. CALL TO ACTION FOOTER RIBBON */}
      <section className="floc-cta-section">
        <div className="floc-cta-banner">
          <div className="floc-cta-left">
            <div className="floc-cta-leaf-circle">
              <FaLeaf className="floc-cta-leaf-icon" />
            </div>

            <div className="floc-cta-text-group">
              <h2 className="floc-cta-title">Cleaner Water. Smarter Industry.</h2>
              <p className="floc-cta-subtitle">
                Intelligent solutions for a sustainable tomorrow.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="floc-cta-btn"
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
