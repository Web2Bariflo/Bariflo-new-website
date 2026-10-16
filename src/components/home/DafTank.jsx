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
  FaCogs,
  FaWrench,
  FaWater,
  FaChevronRight,
  FaFlask,
} from "react-icons/fa";
import {
  TbCube,
  TbLayersLinked,
  TbWaveSine,
  TbFilter,
} from "react-icons/tb";
import { FiChevronLeft } from "react-icons/fi";
import "./DafTank.css";

const allSolutions = [
  {
    id: "1",
    title: "DAF / Intelligent Aeration Tank",
    path: "/daf-tank",
    image: "/images/ICON 1.png",
    active: true,
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
  },
];

const diagramCallouts = [
  {
    id: "inlet",
    title: "INLET PIPE",
    sub: "Raw wastewater inlet",
    posClass: "daf-callout-inlet",
  },
  {
    id: "aeration",
    title: "INTELLIGENT AERATION",
    sub: "Microbubble generation",
    posClass: "daf-callout-aeration",
  },
  {
    id: "skimmer",
    title: "SKIMMER & SCUM TROUGH",
    sub: "Floating sludge removal",
    posClass: "daf-callout-skimmer",
  },
  {
    id: "tank",
    title: "AERATION TANK",
    sub: "Dissolved air & mixing",
    posClass: "daf-callout-tank",
  },
  {
    id: "pump",
    title: "RECIRCULATION PUMP",
    sub: "Pressurized water recirculation",
    posClass: "daf-callout-pump",
  },
  {
    id: "panel",
    title: "CONTROL PANEL",
    sub: "Automatic operation & monitoring",
    posClass: "daf-callout-panel",
  },
  {
    id: "outlet",
    title: "OUTLET PIPE",
    sub: "Treated water discharge",
    posClass: "daf-callout-outlet",
  },
];

const keyFeaturesList = [
  "High separation efficiency for suspended solids, oils and grease",
  "Intelligent aeration with microbubbles for enhanced flotation",
  "Automated operation with real-time monitoring",
  "Adjustable skimmer and scum removal system",
  "Low maintenance and energy-efficient design",
  "Suitable for industrial wastewater and process water",
  "Durable and corrosion-resistant construction",
  "Optional IoT integration for remote monitoring",
];

const systemGlanceData = [
  {
    label: "Application",
    value: "Removal of suspended solids, oils, grease and other contaminants",
  },
  {
    label: "Treatment mode",
    value: "Dissolved air flotation with intelligent aeration",
  },
  {
    label: "Capacity",
    value: "10 – 500 m³/hr (customizable)",
  },
  {
    label: "Tank materials",
    value: "SS304 / SS316 / FRP / Coated MS",
  },
  {
    label: "Control mode",
    value: "Automatic, manual, local or remote",
  },
  {
    label: "Skimming",
    value: "Adjustable skimmer with automatic operation",
  },
];

const coreOperatingMetrics = [
  {
    value: "4 – 10",
    unit: "m³/m²·hr",
    label: "Air-to-water ratio",
  },
  {
    value: "15 – 50%",
    unit: "Removal efficiency",
    label: "(TSS, oil & grease)",
  },
  {
    value: "3 – 6 bar",
    unit: "Saturation pressure",
    label: "(operating)",
  },
  {
    value: "20 – 80 µm",
    unit: "Typical bubble",
    label: "size",
  },
  {
    value: "415 VAC",
    unit: "3-phase",
    label: "power",
  },
  {
    value: "IP54 / 65",
    unit: "Enclosure",
    label: "options",
  },
];

const detailedFeatures = [
  {
    title: "Intelligent aeration control",
    desc: "Maintains optimal microbubble generation",
  },
  {
    title: "High-efficiency separation",
    desc: "Ensures stable effluent quality",
  },
  {
    title: "Effective removal",
    desc: "Removes suspended solids, oils and grease",
  },
  {
    title: "Adjustable skimmer system",
    desc: "Automatic scum removal with flexible control",
  },
  {
    title: "Real-time monitoring",
    desc: "Tracks flow, pressure, level, turbidity and DO",
  },
  {
    title: "Alarms and interlocks",
    desc: "Protects pumps, aeration system and skimmer",
  },
  {
    title: "Low energy operation",
    desc: "Efficient pumps and aeration system",
  },
  {
    title: "IoT and remote access (optional)",
    desc: "Enables remote monitoring and data analytics",
  },
];

const processOutcomes = [
  {
    icon: <FaFlask size={22} />,
    title: "HIGH SEPARATION",
    desc: "Efficient solids, oil and grease removal",
  },
  {
    icon: <TbWaveSine size={24} />,
    title: "STABLE EFFLUENT",
    desc: "Consistent and reliable water quality",
  },
  {
    icon: <FaCogs size={22} />,
    title: "AUTOMATED OPERATION",
    desc: "Intelligent control and monitoring",
  },
  {
    icon: <TbLayersLinked size={24} />,
    title: "EASY INTEGRATION",
    desc: "Integrates with existing ETP systems",
  },
];

export default function DafTank() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Specifications", "Features", "Applications", "Downloads"];

  return (
    <div className="daf-page-root">
      {/* 1. TOP NAVBAR */}
      <header className="daf-header">
        <div className="daf-nav-container">
          <div className="daf-nav-left">
            <button
              type="button"
              className="bariflo-back-home-btn"
              onClick={() => navigate("/act")}
              title="Back to Act"
              aria-label="Back to Act"
            >
              <FiChevronLeft size={24} />
            </button>

            <a
              href="/"
              className="daf-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/images/bariflo_nav_logo.png"
                alt="Bariflo Cybernetics"
                className="daf-logo-img"
              />
            </a>
          </div>

          <nav className="daf-nav-menu">
            <button type="button" className="daf-nav-link" onClick={() => navigate("/")}>
              HOME
            </button>
            <div className="daf-nav-link-wrap active">
              <button
                type="button"
                className="daf-nav-link active"
                onClick={() => navigate("/act")}
              >
                INDUSTRIES
              </button>
              <div className="daf-nav-active-bar" />
            </div>
            <button
              type="button"
              className="daf-nav-link"
              onClick={() => navigate("/cognition")}
            >
              COGNITION
            </button>
            <button
              type="button"
              className="daf-nav-link"
              onClick={() => navigate("/case-studies")}
            >
              IMPACT
            </button>
            <button
              type="button"
              className="daf-nav-link"
              onClick={() => navigate("/teamMember")}
            >
              ABOUT US
            </button>
          </nav>

          <div className="daf-nav-actions">
            <button
              type="button"
              className="daf-search-icon-btn"
              aria-label="Search"
              onClick={() => navigate("/act")}
            >
              <FaSearch size={15} />
            </button>

            <button
              type="button"
              className="daf-consultation-btn"
              onClick={() => navigate("/contactUs")}
            >
              Schedule a Consultation <FaArrowRight size={12} />
            </button>

            <button
              type="button"
              className="daf-mobile-toggle"
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
              className="daf-mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="daf-mobile-links">
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
                  className="daf-mobile-cta"
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
      <section className="daf-hero-section">
        <div className="daf-hero-bg-overlay" />
        <div className="daf-hero-container">
          <div className="daf-hero-content">
            <div className="daf-breadcrumbs">
              <span>Industries</span>
              <span className="daf-bc-sep">&gt;</span>
              <span>Industrial Wastewater</span>
              <span className="daf-bc-sep">&gt;</span>
              <span className="daf-bc-current">DAF / Intelligent Aeration Tank</span>
            </div>

            <h1 className="daf-hero-title">DAF / Intelligent Aeration Tank</h1>
            <h2 className="daf-hero-subtitle">
              Efficient Separation &amp; Stable Effluent Quality
            </h2>
            <p className="daf-hero-desc">
              Advanced Dissolved Air Flotation (DAF) with intelligent aeration for effective
              removal of suspended solids, oils, grease and other contaminants from industrial
              wastewater.
            </p>

            <div className="daf-badges-row">
              <div className="daf-badge-pill">
                <div className="daf-badge-icon">
                  <TbFilter />
                </div>
                <span>High Separation Efficiency</span>
              </div>

              <div className="daf-badge-pill">
                <div className="daf-badge-icon">
                  <FaCogs />
                </div>
                <span>Automated Operation</span>
              </div>

              <div className="daf-badge-pill">
                <div className="daf-badge-icon">
                  <FaWrench />
                </div>
                <span>Low Maintenance</span>
              </div>

              <div className="daf-badge-pill">
                <div className="daf-badge-icon">
                  <FaLeaf />
                </div>
                <span>Sustainable Water Management</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SUBNAV ACTION BAR */}
      <div className="daf-subnav-bar">
        <div className="daf-subnav-container">
          <div className="daf-subnav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`daf-subnav-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="daf-tab-indicator" />}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="daf-quote-btn"
            onClick={() => navigate("/contactUs")}
          >
            Request a Quote <FaArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* 4. MAIN LAYOUT (Sidebar + Content) */}
      <main className="daf-main-section">
        <div className="daf-layout-container">
          {/* LEFT SIDEBAR: ALL SOLUTIONS */}
          <aside className="daf-sidebar">
            <div className="daf-sidebar-header">
              <div className="daf-sidebar-compass-icon">
                <TbCube />
              </div>
              <h3>All Solutions</h3>
            </div>

            <div className="daf-sidebar-list">
              {allSolutions.map((sol) => (
                <motion.div
                  key={sol.id}
                  className={`daf-sidebar-item ${sol.active ? "active" : ""}`}
                  whileHover={{ x: sol.active ? 0 : 5, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => {
                    if (sol.path && sol.path !== "#" && sol.path !== "/daf-tank") {
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
                  <div className="daf-sidebar-item-thumb">
                    <img src={sol.image} alt={sol.title} />
                  </div>
                  <div className="daf-sidebar-item-info">
                    <span className="daf-sidebar-item-num">{sol.id}</span>
                    <span className="daf-sidebar-item-name">{sol.title}</span>
                  </div>
                  {sol.active && (
                    <div className="daf-sidebar-item-arrow">
                      <FaChevronRight size={12} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT COLUMN (ANIMATED) */}
          <motion.div
            className="daf-content-column"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* ROW 1: System Diagram + Key Features */}
            <div className="daf-grid-row daf-row-diagram-features">
              {/* System Diagram Card */}
              <div className="daf-card daf-diagram-card">
                <div className="daf-card-header">
                  <h3 className="daf-card-title">System Diagram</h3>
                  <div className="daf-3d-badge">
                    <TbCube size={15} />
                    <span>3D View</span>
                  </div>
                </div>

                <div className="daf-diagram-wrapper">
                  <img
                    src="/images/DAF TANK.png"
                    alt="DAF Intelligent Aeration Tank 3D Diagram"
                    className="daf-diagram-img"
                  />

                  {/* Clean callouts layer around the diagram */}
                  <div className="daf-callouts-layer">
                    {diagramCallouts.map((c) => (
                      <div key={c.id} className={`daf-callout-box ${c.posClass}`}>
                        <div className="daf-callout-inner">
                          <strong className="daf-callout-heading">{c.title}</strong>
                          <span className="daf-callout-sub">{c.sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features Card */}
              <div className="daf-card daf-features-card">
                <div className="daf-card-header">
                  <h3 className="daf-card-title">Key Features</h3>
                </div>

                <ul className="daf-features-list">
                  {keyFeaturesList.map((feat, idx) => (
                    <li key={idx} className="daf-feature-item">
                      <div className="daf-check-bubble">
                        <FaCheck size={11} />
                      </div>
                      <span className="daf-feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ROW 2: System at a Glance + Core Operating Data */}
            <div className="daf-grid-row daf-row-glance-data">
              {/* System at a Glance */}
              <div className="daf-card daf-glance-card">
                <div className="daf-card-header">
                  <h3 className="daf-card-title">System at a Glance</h3>
                </div>

                <div className="daf-table-responsive">
                  <table className="daf-specs-table">
                    <tbody>
                      {systemGlanceData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="daf-table-label">{row.label}</td>
                          <td className="daf-table-val">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Core Operating Data */}
              <div className="daf-card daf-data-card">
                <div className="daf-card-header">
                  <h3 className="daf-card-title">Core Operating Data</h3>
                </div>

                <div className="daf-operating-metrics-grid">
                  {coreOperatingMetrics.map((m, idx) => (
                    <div key={idx} className="daf-metric-tile">
                      <div className="daf-metric-val">{m.value}</div>
                      <div className="daf-metric-unit">{m.unit}</div>
                      <div className="daf-metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 3: Detailed Key Features (Full Width Grid) */}
            <div className="daf-card daf-detailed-features-card">
              <div className="daf-card-header">
                <h3 className="daf-card-title">Key Features</h3>
              </div>

              <div className="daf-detailed-features-grid">
                {detailedFeatures.map((item, idx) => (
                  <div key={idx} className="daf-detailed-feature-item">
                    <div className="daf-green-check">
                      <FaCheck size={12} />
                    </div>
                    <div className="daf-detailed-feature-text">
                      <strong className="daf-detailed-feature-title">{item.title}</strong>
                      <span className="daf-detailed-feature-desc">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 4: Process Outcome (Full Width) */}
            <div className="daf-card daf-outcomes-card">
              <div className="daf-card-header">
                <h3 className="daf-card-title">Process Outcome</h3>
              </div>

              <div className="daf-outcomes-grid">
                {processOutcomes.map((item, idx) => (
                  <div key={idx} className="daf-outcome-box">
                    <div className="daf-outcome-icon">{item.icon}</div>
                    <h4 className="daf-outcome-title">{item.title}</h4>
                    <p className="daf-outcome-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer Footnote */}
            <div className="daf-disclaimer">
              <p>
                Note: Performance and operating data are indicative and may vary based on wastewater
                characteristics, site conditions and customization.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* 5. CALL TO ACTION FOOTER RIBBON */}
      <section className="daf-cta-section">
        <div className="daf-cta-banner">
          <div className="daf-cta-left">
            <div className="daf-cta-leaf-circle">
              <FaLeaf className="daf-cta-leaf-icon" />
            </div>

            <div className="daf-cta-text-group">
              <h2 className="daf-cta-title">Cleaner Water. Smarter Industry.</h2>
              <p className="daf-cta-subtitle">
                Intelligent solutions for a sustainable tomorrow.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="daf-cta-btn"
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
