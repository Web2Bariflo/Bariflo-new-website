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
  FaTint,
  FaFlask,
  FaLightbulb,
  FaIndustry,
  FaChartBar,
} from "react-icons/fa";
import {
  TbCube,
  TbWaveSine,
  TbAtom,
  TbNetwork,
  TbHexagon,
  TbShieldCheck,
  TbBinaryTree,
  TbCircleDot,
  TbRadar,
  TbUserCheck,
} from "react-icons/tb";
import "./Aquasense.css";

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
    active: true,
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
    id: "control",
    title: "Control & Data System",
    sub: "AI analytics and remote transmission",
    posClass: "aqua-callout-control",
  },
  {
    id: "scraper",
    title: "Surface Scraper",
    sub: "Removes surface floating matter",
    posClass: "aqua-callout-scraper",
  },
  {
    id: "sensors",
    title: "Multi-Parameter Sensors",
    sub: "pH, DO, COD, Turbidity, etc.",
    posClass: "aqua-callout-sensors",
  },
  {
    id: "sampling",
    title: "Automatic Sampling",
    sub: "Programmable sampling unit",
    posClass: "aqua-callout-sampling",
  },
  {
    id: "pump",
    title: "Outlet / Pump",
    sub: "Sample collection & discharge",
    posClass: "aqua-callout-pump",
  },
];

const keyFeaturesList = [
  "Real-time monitoring of multiple water quality parameters",
  "Automatic sampling with programmable intervals",
  "AI-powered analytics and anomaly detection",
  "Surface scraper supports homogeneous sampling",
  "Non-contact, reagent-free spectroscopy",
  "Scalable, cloud-connected remote access",
  "Reliable and low-maintenance operation",
];

const monitoredParams = [
  { icon: <FaTint size={22} />, label: "pH" },
  { icon: <TbBinaryTree size={22} />, label: "DO" },
  { icon: <TbAtom size={22} />, label: "COD" },
  { icon: <FaFlask size={20} />, label: "MLSS" },
  { icon: <TbWaveSine size={22} />, label: "TDS" },
  { icon: <TbNetwork size={22} />, label: "PFAS" },
  { icon: <TbHexagon size={22} />, label: "PFOS" },
  { icon: <TbCircleDot size={22} />, label: "VOCs" },
];

const systemGlanceData = [
  {
    label: "Sensing approach",
    value: "UV-Vis / NIR spectroscopy and optical probes",
  },
  {
    label: "Sampling",
    value: "Automatic isokinetic sampling",
  },
  {
    label: "Analysis",
    value: "AI-powered anomaly detection and data interpretation",
  },
  {
    label: "Connectivity",
    value: "Modbus TCP/RTU, 4 – 20 mA and Ethernet",
  },
  {
    label: "Data logging",
    value: "Continuous local storage + cloud upload",
  },
  {
    label: "Installation",
    value: "Submersible probe with auto-cleaning",
  },
];

const performanceMetrics = [
  {
    value: "1 – 5 min",
    label: "Configurable measurement",
  },
  {
    value: "<60 s",
    label: "Typical response",
  },
  {
    value: "±5%",
    label: "Typical accuracy",
  },
  {
    value: "±2%",
    label: "Repeatability",
  },
  {
    value: "30 – 90 d",
    label: "Calibration interval",
  },
  {
    value: ">95%",
    label: "Operating efficiency",
  },
];

const detailedFeatures = [
  {
    title: "Real-time monitoring of 8+ parameters",
    desc: "Continuous and accurate data",
  },
  {
    title: "Surface scraper supports homogeneous sampling",
    desc: "Improved monitoring accuracy",
  },
  {
    title: "Non-contact, reagent-free spectroscopy",
    desc: "Low maintenance and cost-effective",
  },
  {
    title: "Scalable, cloud-connected remote access",
    desc: "Monitor anytime, anywhere",
  },
  {
    title: "Automatic sampling for validation and calibration",
    desc: "Configurable, programmable sampling",
  },
  {
    title: "Robust and reliable design",
    desc: "Suitable for industrial environments",
  },
  {
    title: "AI-powered analytics and anomaly detection",
    desc: "Early alerts for process deviations",
  },
  {
    title: "Easy integration with existing systems",
    desc: "Flexible communication options",
  },
];

const valuePillars = [
  {
    icon: <FaLightbulb size={24} />,
    title: "Accurate Decisions",
    desc: "Reliable multi-parameter data",
  },
  {
    icon: <TbShieldCheck size={26} />,
    title: "Compliance Assurance",
    desc: "Traceable continuous monitoring",
  },
  {
    icon: <FaIndustry size={24} />,
    title: "Early Detection",
    desc: "Faster anomaly response",
  },
  {
    icon: <FaLeaf size={24} />,
    title: "Sustainable Operations",
    desc: "Lower reagent and maintenance load",
  },
];

export default function Aquasense() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Specifications", "Features", "Applications", "Downloads"];

  return (
    <div className="aqua-page-root">
      {/* 1. TOP NAVBAR */}
      <header className="aqua-header">
        <div className="aqua-nav-container">
          <div className="aqua-nav-left">
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
              className="aqua-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/images/bariflo_nav_logo.png"
                alt="Bariflo Cybernetics"
                className="aqua-logo-img"
              />
            </a>
          </div>

          <nav className="aqua-nav-menu">
            <button type="button" className="aqua-nav-link" onClick={() => navigate("/")}>
              HOME
            </button>
            <div className="aqua-nav-link-wrap active">
              <button
                type="button"
                className="aqua-nav-link active"
                onClick={() => navigate("/act")}
              >
                INDUSTRIES
              </button>
              <div className="aqua-nav-active-bar" />
            </div>
            <button
              type="button"
              className="aqua-nav-link"
              onClick={() => navigate("/cognition")}
            >
              COGNITION
            </button>
            <button
              type="button"
              className="aqua-nav-link"
              onClick={() => navigate("/case-studies")}
            >
              IMPACT
            </button>
            <button
              type="button"
              className="aqua-nav-link"
              onClick={() => navigate("/teamMember")}
            >
              ABOUT US
            </button>
          </nav>

          <div className="aqua-nav-actions">
            <button
              type="button"
              className="aqua-search-icon-btn"
              aria-label="Search"
              onClick={() => navigate("/act")}
            >
              <FaSearch size={15} />
            </button>

            <button
              type="button"
              className="aqua-consultation-btn"
              onClick={() => navigate("/contactUs")}
            >
              Schedule a Consultation <FaArrowRight size={12} />
            </button>

            <button
              type="button"
              className="aqua-mobile-toggle"
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
              className="aqua-mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="aqua-mobile-links">
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
                  className="aqua-mobile-cta"
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
      <section className="aqua-hero-section">
        <div className="aqua-hero-bg-overlay" />
        <div className="aqua-hero-container">
          <div className="aqua-hero-content">
            <div className="aqua-breadcrumbs">
              <span>Industries</span>
              <span className="aqua-bc-sep">&gt;</span>
              <span>Industrial Wastewater</span>
              <span className="aqua-bc-sep">&gt;</span>
              <span className="aqua-bc-current">Bariflo Aquasense System</span>
            </div>

            <h1 className="aqua-hero-title">Bariflo Aquasense System</h1>
            <h2 className="aqua-hero-subtitle">
              AI-Enabled Real-Time Water Quality Monitoring &amp; Automatic Sampling
            </h2>
            <p className="aqua-hero-desc">
              Continuous monitoring of key water quality parameters with AI-powered analytics and
              automatic sampling for smarter, more accurate wastewater management.
            </p>

            <div className="aqua-badges-row">
              <div className="aqua-badge-pill">
                <div className="aqua-badge-icon">
                  <FaTint />
                </div>
                <span>Real-time Monitoring</span>
              </div>

              <div className="aqua-badge-pill">
                <div className="aqua-badge-icon">
                  <TbNetwork />
                </div>
                <span>Automatic Sampling</span>
              </div>

              <div className="aqua-badge-pill">
                <div className="aqua-badge-icon">
                  <TbUserCheck />
                </div>
                <span>AI-powered Analytics</span>
              </div>

              <div className="aqua-badge-pill">
                <div className="aqua-badge-icon">
                  <FaChartBar />
                </div>
                <span>Accurate Data Insights</span>
              </div>

              <div className="aqua-badge-pill">
                <div className="aqua-badge-icon">
                  <TbRadar />
                </div>
                <span>Remote Access</span>
              </div>
            </div>
          </div>

          {/* Right Hero: Glass Card */}
          <div className="aqua-hero-right-card">
            <div className="aqua-monitoring-glass">
              <div className="aqua-glass-icon-box">
                <TbWaveSine className="aqua-glass-wave" />
              </div>
              <div className="aqua-glass-text">
                <span className="aqua-glass-heading">Smarter Water Monitoring</span>
                <span className="aqua-glass-sub">for a Cleaner Tomorrow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUBNAV ACTION BAR */}
      <div className="aqua-subnav-bar">
        <div className="aqua-subnav-container">
          <div className="aqua-subnav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`aqua-subnav-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="aqua-tab-indicator" />}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="aqua-quote-btn"
            onClick={() => navigate("/contactUs")}
          >
            Request a Quote <FaArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* 4. MAIN LAYOUT (Sidebar + Content) */}
      <main className="aqua-main-section">
        <div className="aqua-layout-container">
          {/* LEFT SIDEBAR: ALL SOLUTIONS */}
          <aside className="aqua-sidebar">
            <div className="aqua-sidebar-header">
              <div className="aqua-sidebar-chevron-back">
                <FaChevronRight size={12} />
              </div>
              <h3>All Solutions</h3>
            </div>

            <div className="aqua-sidebar-list">
              {allSolutions.map((sol) => (
                <motion.div
                  key={sol.id}
                  className={`aqua-sidebar-item ${sol.active ? "active" : ""}`}
                  whileHover={{ x: sol.active ? 0 : 5, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => {
                    if (sol.path && sol.path !== "#" && sol.path !== "/aquasense") {
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
                  <div className="aqua-sidebar-item-thumb">
                    <img src={sol.image} alt={sol.title} />
                  </div>
                  <div className="aqua-sidebar-item-info">
                    <span className="aqua-sidebar-item-num">{sol.id}</span>
                    <span className="aqua-sidebar-item-name">{sol.title}</span>
                  </div>
                  {sol.active && (
                    <div className="aqua-sidebar-item-arrow">
                      <FaChevronRight size={12} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT COLUMN (ANIMATED) */}
          <motion.div
            className="aqua-content-column"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* ROW 1: System Diagram + Key Features */}
            <div className="aqua-grid-row aqua-row-diagram-features">
              {/* System Diagram Card */}
              <div className="aqua-card aqua-diagram-card">
                <div className="aqua-card-header">
                  <h3 className="aqua-card-title">System Diagram</h3>
                  <div className="aqua-3d-badge">
                    <TbCube size={15} />
                    <span>3D View</span>
                  </div>
                </div>

                <div className="aqua-diagram-wrapper">
                  <img
                    src="/images/AQUASENSE.png"
                    alt="Bariflo Aquasense System 3D Diagram"
                    className="aqua-diagram-img"
                  />
                </div>
              </div>

              {/* Key Features Card */}
              <div className="aqua-card aqua-features-card">
                <div className="aqua-card-header">
                  <h3 className="aqua-card-title">Key Features</h3>
                </div>

                <ul className="aqua-features-list">
                  {keyFeaturesList.map((feat, idx) => (
                    <li key={idx} className="aqua-feature-item">
                      <div className="aqua-check-bubble">
                        <FaCheck size={11} />
                      </div>
                      <span className="aqua-feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ROW 2: Monitored Water-Quality Parameters (Full Width) */}
            <div className="aqua-card aqua-monitored-card">
              <div className="aqua-card-header">
                <h3 className="aqua-card-title">Monitored Water-Quality Parameters</h3>
              </div>

              <div className="aqua-params-grid">
                {monitoredParams.map((p, idx) => (
                  <div key={idx} className="aqua-param-item">
                    <div className="aqua-param-icon-box">{p.icon}</div>
                    <span className="aqua-param-label">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 3: System at a Glance + Typical Performance */}
            <div className="aqua-grid-row aqua-row-glance-performance">
              {/* System at a Glance */}
              <div className="aqua-card aqua-glance-card">
                <div className="aqua-card-header">
                  <h3 className="aqua-card-title">System at a Glance</h3>
                </div>

                <div className="aqua-table-responsive">
                  <table className="aqua-specs-table">
                    <tbody>
                      {systemGlanceData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="aqua-table-label">{row.label}</td>
                          <td className="aqua-table-val">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Typical Performance */}
              <div className="aqua-card aqua-performance-card">
                <div className="aqua-card-header">
                  <h3 className="aqua-card-title">Typical Performance</h3>
                </div>

                <div className="aqua-performance-grid">
                  {performanceMetrics.map((m, idx) => (
                    <div key={idx} className="aqua-perf-metric-tile">
                      <div className="aqua-perf-metric-val">{m.value}</div>
                      <div className="aqua-perf-metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 4: Detailed Key Features (Full Width 2-Column Grid) */}
            <div className="aqua-card aqua-detailed-features-card">
              <div className="aqua-card-header">
                <h3 className="aqua-card-title">Key Features</h3>
              </div>

              <div className="aqua-detailed-features-grid">
                {detailedFeatures.map((item, idx) => (
                  <div key={idx} className="aqua-detailed-feature-item">
                    <div className="aqua-green-check">
                      <FaCheck size={12} />
                    </div>
                    <div className="aqua-detailed-feature-text">
                      <strong className="aqua-detailed-feature-title">{item.title}</strong>
                      <span className="aqua-detailed-feature-desc">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 5: 4 Value Pillars */}
            <div className="aqua-pillars-grid">
              {valuePillars.map((p, idx) => (
                <div key={idx} className="aqua-pillar-box">
                  <div className="aqua-pillar-icon">{p.icon}</div>
                  <div className="aqua-pillar-text">
                    <h4 className="aqua-pillar-title">{p.title}</h4>
                    <p className="aqua-pillar-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* 6. CALL TO ACTION FOOTER RIBBON */}
      <section className="aqua-cta-section">
        <div className="aqua-cta-banner">
          <div className="aqua-cta-left">
            <div className="aqua-cta-leaf-circle">
              <FaLeaf className="aqua-cta-leaf-icon" />
            </div>

            <div className="aqua-cta-text-group">
              <h2 className="aqua-cta-title">Cleaner Water. Smarter Industry.</h2>
              <p className="aqua-cta-subtitle">
                Intelligent solutions for a sustainable tomorrow.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="aqua-cta-btn"
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
