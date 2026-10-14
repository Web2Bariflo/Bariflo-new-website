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
  FaChevronLeft,
  FaTruck,
  FaPlug,
  FaCog,
  FaBolt,
  FaNetworkWired,
  FaWater,
  FaChartBar,
  FaClock,
} from "react-icons/fa";
import {
  TbCloudComputing,
  TbShieldCheck,
  TbSettingsAutomation,
  TbFilter,
} from "react-icons/tb";
import "./Mobile FSTP.css";

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
    active: true,
  },
];

const keyFeaturesList = [
  "Compact, skid-mounted and transportable",
  "High-efficiency BOD, COD, TSS and pathogen reduction",
  "Space-saving for urban and remote locations",
  "Fully automated PLC + HMI operation",
  "Low energy process with minimal chemicals",
  "Integrated sludge dewatering and volume reduction",
  "Single-person operation with alarms and interlocks",
  "Plug & play installation and quick deployment",
  "Remote monitoring (optional)",
];

const systemGlanceData = [
  {
    label: "Technology",
    value: "Electrocoagulation + electroflotation + dewatering",
  },
  {
    label: "Feed type",
    value: "Sewage, faecal sludge and wastewater",
  },
  {
    label: "Power supply",
    value: "415 VAC, 50 Hz, 3-phase",
  },
  {
    label: "Installed power",
    value: "15 – 25 kW (typical)",
  },
  {
    label: "Average consumption",
    value: "8 – 15 kWh/kL (typical)",
  },
  {
    label: "Mobility",
    value: "Wheeled skid, hook-lift or trailer",
  },
  {
    label: "Control system",
    value: "PLC + HMI with automatic operation",
  },
  {
    label: "Treatment capacity",
    value: "Up to 10 KLD per visit (customizable)",
  },
];

const performanceMetrics = [
  {
    icon: <FaWater size={22} />,
    value: "10 KLD",
    label: "Treatment capacity per visit",
  },
  {
    icon: <FaChartBar size={22} />,
    value: "20 – 30%",
    label: "Energy-saving potential",
  },
  {
    icon: <TbCloudComputing size={24} />,
    value: "Up to 70%",
    label: "Sludge-volume reduction",
  },
  {
    icon: <FaClock size={22} />,
    value: "30 – 45 min",
    label: "Hydraulic retention time",
  },
  {
    icon: <TbSettingsAutomation size={24} />,
    value: "AUTO",
    label: "PLC + HMI operation",
  },
];

const processFlowSteps = [
  {
    id: 1,
    title: "RAW WASTEWATER / SEWAGE",
    type: "step-raw",
  },
  {
    id: 2,
    title: "PRE-TREATMENT SCREEN + FILTER",
    type: "step-screen",
  },
  {
    id: 3,
    title: "EQUALIZATION TANK",
    type: "step-eq",
  },
  {
    id: 4,
    title: "EC REACTOR — ELECTROCOAGULATION",
    type: "step-ec",
  },
  {
    id: 5,
    title: "EF UNIT — ELECTROFLOTATION",
    type: "step-ef",
  },
  {
    id: 6,
    title: "DEWATERING — SCREW / BELT PRESS",
    type: "step-dewater",
  },
  {
    id: 7,
    title: "TREATED WATER — DISPOSAL / REUSE",
    type: "step-treated",
  },
  {
    id: 8,
    title: "SLUDGE — DEWATERING / DRY CAKE — DISPOSAL",
    type: "step-sludge",
  },
];

const heroRightFeatures = [
  "On-Site Treatment",
  "Low O&M Cost",
  "Quick Deployment",
  "Reduced Sludge Volume",
];

export default function MobileFSTP() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Specifications",
    "Features",
    "Process Flow",
    "Applications",
    "Downloads",
  ];

  return (
    <div className="fstp-page-root">
      {/* 1. TOP NAVBAR */}
      <header className="fstp-header">
        <div className="fstp-nav-container">
          <div className="fstp-nav-left">
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
              className="fstp-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/images/bariflo_nav_logo.png"
                alt="Bariflo Cybernetics"
                className="fstp-logo-img"
              />
            </a>
          </div>

          <nav className="fstp-nav-menu">
            <button type="button" className="fstp-nav-link" onClick={() => navigate("/")}>
              HOME
            </button>
            <div className="fstp-nav-link-wrap active">
              <button
                type="button"
                className="fstp-nav-link active"
                onClick={() => navigate("/act")}
              >
                INDUSTRIES
              </button>
              <div className="fstp-nav-active-bar" />
            </div>
            <button
              type="button"
              className="fstp-nav-link"
              onClick={() => navigate("/cognition")}
            >
              COGNITION
            </button>
            <button
              type="button"
              className="fstp-nav-link"
              onClick={() => navigate("/case-studies")}
            >
              IMPACT
            </button>
            <button
              type="button"
              className="fstp-nav-link"
              onClick={() => navigate("/teamMember")}
            >
              ABOUT US
            </button>
          </nav>

          <div className="fstp-nav-actions">
            <button
              type="button"
              className="fstp-search-icon-btn"
              aria-label="Search"
              onClick={() => navigate("/act")}
            >
              <FaSearch size={15} />
            </button>

            <button
              type="button"
              className="fstp-consultation-btn"
              onClick={() => navigate("/contactUs")}
            >
              Schedule a Consultation <FaArrowRight size={12} />
            </button>

            <button
              type="button"
              className="fstp-mobile-toggle"
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
              className="fstp-mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="fstp-mobile-links">
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
                  className="fstp-mobile-cta"
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
      <section className="fstp-hero-section">
        <div className="fstp-hero-bg-overlay" />
        <div className="fstp-hero-container">
          <div className="fstp-hero-content">
            <div className="fstp-breadcrumbs">
              <span>Industries</span>
              <span className="fstp-bc-sep">&gt;</span>
              <span>Industrial Wastewater</span>
              <span className="fstp-bc-sep">&gt;</span>
              <span className="fstp-bc-current">Mobile FSTP (EC – EF System)</span>
            </div>

            <h1 className="fstp-hero-title">Mobile FSTP (EC – EF System)</h1>
            <h2 className="fstp-hero-subtitle">
              Up to 10 KLD per Visit • Plug &amp; Play • Mobile • Fully Automated
            </h2>
            <p className="fstp-hero-desc">
              A compact, mobile and fully automated Faecal Sludge Treatment Plant using
              Electrocoagulation (EC) and Electroflotation (EF) technology for decentralized
              wastewater treatment.
            </p>

            <div className="fstp-badges-row">
              <div className="fstp-badge-pill">
                <div className="fstp-badge-icon">
                  <FaTruck />
                </div>
                <span>Compact &amp; Mobile</span>
              </div>

              <div className="fstp-badge-pill">
                <div className="fstp-badge-icon">
                  <FaPlug />
                </div>
                <span>Plug &amp; Play Deployment</span>
              </div>

              <div className="fstp-badge-pill">
                <div className="fstp-badge-icon">
                  <FaCog />
                </div>
                <span>Fully Automated</span>
              </div>

              <div className="fstp-badge-pill">
                <div className="fstp-badge-icon">
                  <FaBolt />
                </div>
                <span>Energy Efficient</span>
              </div>

              <div className="fstp-badge-pill">
                <div className="fstp-badge-icon">
                  <FaNetworkWired />
                </div>
                <span>Decentralized Treatment</span>
              </div>
            </div>
          </div>

          {/* Right Hero: Right Pillar Badges */}
          <div className="fstp-hero-right-card">
            <div className="fstp-hero-pills-stack">
              {heroRightFeatures.map((feat, idx) => (
                <div key={idx} className="fstp-hero-pill-item">
                  <div className="fstp-hero-pill-icon">
                    <TbShieldCheck size={16} />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUBNAV ACTION BAR */}
      <div className="fstp-subnav-bar">
        <div className="fstp-subnav-container">
          <div className="fstp-subnav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`fstp-subnav-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="fstp-tab-indicator" />}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="fstp-quote-btn"
            onClick={() => navigate("/contactUs")}
          >
            Request a Quote <FaArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* 4. MAIN LAYOUT (Sidebar + Content) */}
      <main className="fstp-main-section">
        <div className="fstp-layout-container">
          {/* LEFT SIDEBAR: ALL SOLUTIONS */}
          <aside className="fstp-sidebar">
            <div className="fstp-sidebar-header">
              <div className="fstp-sidebar-chevron-back">
                <FaChevronLeft size={12} />
              </div>
              <h3>All Solutions</h3>
            </div>

            <div className="fstp-sidebar-list">
              {allSolutions.map((sol) => (
                <motion.div
                  key={sol.id}
                  className={`fstp-sidebar-item ${sol.active ? "active" : ""}`}
                  whileHover={{ x: sol.active ? 0 : 5, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => {
                    if (sol.path && sol.path !== "#" && sol.path !== "/mobile-fstp") {
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
                  <div className="fstp-sidebar-item-thumb">
                    <img src={sol.image} alt={sol.title} />
                  </div>
                  <div className="fstp-sidebar-item-info">
                    <span className="fstp-sidebar-item-num">{sol.id}</span>
                    <span className="fstp-sidebar-item-name">{sol.title}</span>
                  </div>
                  {sol.active && (
                    <div className="fstp-sidebar-item-arrow">
                      <FaChevronRight size={12} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT COLUMN (ANIMATED) */}
          <motion.div
            className="fstp-content-column"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* ROW 1: System Overview + Process Flow */}
            <div className="fstp-grid-row fstp-row-overview-flow">
              {/* System Overview Card */}
              <div className="fstp-card fstp-diagram-card">
                <div className="fstp-card-header">
                  <h3 className="fstp-card-title">System Overview</h3>
                </div>

                <div className="fstp-diagram-wrapper">
                  <img
                    src="/images/MOBILE  FSTP.png"
                    alt="Mobile FSTP (EC – EF System) Diagram"
                    className="fstp-diagram-img"
                  />
                </div>
              </div>

              {/* Process Flow Card */}
              <div className="fstp-card fstp-flow-card">
                <div className="fstp-card-header">
                  <h3 className="fstp-card-title">Process Flow</h3>
                </div>

                <div className="fstp-flow-steps-container">
                  {processFlowSteps.map((s, idx) => (
                    <React.Fragment key={s.id}>
                      <div className={`fstp-flow-step ${s.type}`}>
                        <span>{s.title}</span>
                      </div>
                      {idx < processFlowSteps.length - 1 && (
                        <div className="fstp-flow-arrow">↓</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 2: Performance Highlights (Full Width Card) */}
            <div className="fstp-card fstp-performance-card">
              <div className="fstp-card-header">
                <h3 className="fstp-card-title">Performance Highlights</h3>
              </div>

              <div className="fstp-performance-grid">
                {performanceMetrics.map((m, idx) => (
                  <div key={idx} className="fstp-perf-tile">
                    <div className="fstp-perf-icon">{m.icon}</div>
                    <div className="fstp-perf-val">{m.value}</div>
                    <div className="fstp-perf-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 3: System at a Glance + Key Features */}
            <div className="fstp-grid-row fstp-row-glance-features">
              {/* System at a Glance */}
              <div className="fstp-card fstp-glance-card">
                <div className="fstp-card-header">
                  <h3 className="fstp-card-title">System at a Glance</h3>
                </div>

                <div className="fstp-table-responsive">
                  <table className="fstp-specs-table">
                    <tbody>
                      {systemGlanceData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="fstp-table-label">{row.label}</td>
                          <td className="fstp-table-val">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Features */}
              <div className="fstp-card fstp-features-card">
                <div className="fstp-card-header">
                  <h3 className="fstp-card-title">Key Features</h3>
                </div>

                <ul className="fstp-features-list">
                  {keyFeaturesList.map((feat, idx) => (
                    <li key={idx} className="fstp-feature-item">
                      <div className="fstp-green-check">
                        <FaCheck size={12} />
                      </div>
                      <span className="fstp-feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* 5. CALL TO ACTION FOOTER RIBBON */}
      <section className="fstp-cta-section">
        <div className="fstp-cta-banner">
          <div className="fstp-cta-left">
            <div className="fstp-cta-leaf-circle">
              <FaLeaf className="fstp-cta-leaf-icon" />
            </div>

            <div className="fstp-cta-text-group">
              <h2 className="fstp-cta-title">Cleaner Water. Healthier Communities.</h2>
              <p className="fstp-cta-subtitle">
                Decentralized and intelligent sewage treatment solutions for a sustainable
                tomorrow.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="fstp-cta-btn"
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
