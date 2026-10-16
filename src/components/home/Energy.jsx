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
  FaCog,
  FaBolt,
  FaChartLine,
  FaShieldAlt,
  FaThermometerHalf,
  FaDesktop,
  FaClock,
  FaWrench,
  FaWater,
  FaIndustry,
} from "react-icons/fa";
import {
  TbCube,
  TbGauge,
  TbActivity,
  TbCpu,
  TbChartBar,
  TbAtom,
  TbPropeller,
} from "react-icons/tb";
import { FiChevronLeft } from "react-icons/fi";
import "./Energy.css";

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
    active: true,
  },
  {
    id: "8",
    title: "Mobile FSTP (EC–EF System)",
    path: "/mobile-fstp",
    image: "/images/ICON8.png",
  },
];

const keyFeaturesList = [
  "Adaptive motor control based on process demand",
  "Verified energy savings and efficiency improvement",
  "Real-time monitoring and performance analytics",
  "Automatic operation with manual override",
  "Power quality monitoring and protection",
  "Remote access and data logging",
  "Reliable and low-maintenance design",
  "Suitable for pumps, blowers, aerators and other industrial loads",
];

const systemGlanceData = [
  {
    label: "Application",
    value: "Pumps, blowers, mixers and aerators",
  },
  {
    label: "Motor type",
    value: "3-phase AC induction / optional PMSM",
  },
  {
    label: "Motor rating",
    value: "0.75 – 75 kW (standard, customizable)",
  },
  {
    label: "Control method",
    value: "VFD, sensorless vector or closed-loop vector",
  },
  {
    label: "Control modes",
    value: "Automatic, manual, local, remote or scheduled",
  },
  {
    label: "Optimization",
    value: "Demand-based speed, duty rotation and peak shaving",
  },
];

const electricalControlMetrics = [
  {
    icon: <FaBolt size={20} />,
    value: "380 – 480 V",
    label: "3-phase rated voltage",
  },
  {
    icon: <FaCog size={20} />,
    value: "0 – 100%",
    label: "Configurable speed range",
  },
  {
    icon: <TbChartBar size={22} />,
    value: "≥0.95",
    label: "Power factor target",
  },
  {
    icon: <FaShieldAlt size={20} />,
    value: "IP54 / 65",
    label: "Enclosure options",
  },
  {
    icon: <FaThermometerHalf size={20} />,
    value: "0 – 50° C",
    label: "Ambient temperature",
  },
  {
    icon: <FaDesktop size={20} />,
    value: "7-inch HMI",
    label: "Local control interface",
  },
];

const performanceMetrics = [
  {
    icon: <FaLeaf size={20} />,
    value: "20 – 50%",
    label: "Energy savings (typical)",
  },
  {
    icon: <FaClock size={20} />,
    value: "Stable",
    label: "Process operation and performance",
  },
  {
    icon: <FaWrench size={20} />,
    value: "Reduced",
    label: "Mechanical stress & wear",
  },
  {
    icon: <FaChartLine size={20} />,
    value: "Improved",
    label: "Power quality and reliability",
  },
];

const applicationsList = [
  {
    icon: <FaWater size={22} />,
    title: "Aeration Systems",
    desc: "Aeration blowers and diffusers",
    image: "/images/aeration.jpg",
  },
  {
    icon: <TbActivity size={22} />,
    title: "Pumping Stations",
    desc: "Influent, return sludge, transfer pumps",
    image: "/images/water-pump.png",
  },
  {
    icon: <TbPropeller size={22} />,
    title: "Mixers & Agitators",
    desc: "Process tanks and equalization basins",
    image: "/images/CaptureJJJJ (1) 1.png",
  },
  {
    icon: <FaIndustry size={22} />,
    title: "Other Industrial Loads",
    desc: "Blowers, conveyors and utilities",
    image: "/images/rectangular_ponds.jpg",
  },
];

export default function Energy() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Specifications", "Features", "Applications", "Downloads"];

  return (
    <div className="energy-page-root">
      {/* 1. TOP NAVBAR */}
      <header className="energy-header">
        <div className="energy-nav-container">
          <div className="energy-nav-left">
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
              className="energy-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/images/bariflo_nav_logo.png"
                alt="Bariflo Cybernetics"
                className="energy-logo-img"
              />
            </a>
          </div>

          <nav className="energy-nav-menu">
            <button type="button" className="energy-nav-link" onClick={() => navigate("/")}>
              HOME
            </button>
            <div className="energy-nav-link-wrap active">
              <button
                type="button"
                className="energy-nav-link active"
                onClick={() => navigate("/act")}
              >
                INDUSTRIES
              </button>
              <div className="energy-nav-active-bar" />
            </div>
            <button
              type="button"
              className="energy-nav-link"
              onClick={() => navigate("/cognition")}
            >
              COGNITION
            </button>
            <button
              type="button"
              className="energy-nav-link"
              onClick={() => navigate("/case-studies")}
            >
              IMPACT
            </button>
            <button
              type="button"
              className="energy-nav-link"
              onClick={() => navigate("/teamMember")}
            >
              ABOUT US
            </button>
          </nav>

          <div className="energy-nav-actions">
            <button
              type="button"
              className="energy-search-icon-btn"
              aria-label="Search"
              onClick={() => navigate("/act")}
            >
              <FaSearch size={15} />
            </button>

            <button
              type="button"
              className="energy-consultation-btn"
              onClick={() => navigate("/contactUs")}
            >
              Schedule a Consultation <FaArrowRight size={12} />
            </button>

            <button
              type="button"
              className="energy-mobile-toggle"
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
              className="energy-mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="energy-mobile-links">
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
                  className="energy-mobile-cta"
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
      <section className="energy-hero-section">
        <div className="energy-hero-bg-overlay" />
        <div className="energy-hero-container">
          <div className="energy-hero-content">
            <div className="energy-breadcrumbs">
              <span>Industries</span>
              <span className="energy-bc-sep">&gt;</span>
              <span>Industrial Wastewater</span>
              <span className="energy-bc-sep">&gt;</span>
              <span className="energy-bc-current">Energy Intelligence System</span>
            </div>

            <h1 className="energy-hero-title">Energy Intelligence System</h1>
            <h2 className="energy-hero-subtitle">
              Adaptive Motor Control &amp; Verified Energy Savings
            </h2>
            <p className="energy-hero-desc">
              Intelligent control and monitoring system for pumps, blowers and aerators with
              real-time analytics, automated optimization and reliable operation.
            </p>

            <div className="energy-badges-row">
              <div className="energy-badge-pill">
                <div className="energy-badge-icon">
                  <FaCog />
                </div>
                <span>Adaptive Motor Control</span>
              </div>

              <div className="energy-badge-pill">
                <div className="energy-badge-icon">
                  <FaLeaf />
                </div>
                <span>Verified Energy Savings</span>
              </div>

              <div className="energy-badge-pill">
                <div className="energy-badge-icon">
                  <TbActivity />
                </div>
                <span>Real-time Monitoring</span>
              </div>

              <div className="energy-badge-pill">
                <div className="energy-badge-icon">
                  <FaShieldAlt />
                </div>
                <span>Reliable Operation</span>
              </div>

              <div className="energy-badge-pill">
                <div className="energy-badge-icon">
                  <TbAtom />
                </div>
                <span>Sustainable Infrastructure</span>
              </div>
            </div>
          </div>

          {/* Right Hero: Glass Card */}
          <div className="energy-hero-right-card">
            <div className="energy-optimizing-glass">
              <div className="energy-glass-icon-box">
                <FaBolt className="energy-glass-bolt" />
              </div>
              <div className="energy-glass-text">
                <span className="energy-glass-heading">Optimizing Energy</span>
                <span className="energy-glass-sub">for a Sustainable Tomorrow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUBNAV ACTION BAR */}
      <div className="energy-subnav-bar">
        <div className="energy-subnav-container">
          <div className="energy-subnav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`energy-subnav-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="energy-tab-indicator" />}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="energy-quote-btn"
            onClick={() => navigate("/contactUs")}
          >
            Request a Quote <FaArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* 4. MAIN LAYOUT (Sidebar + Content) */}
      <main className="energy-main-section">
        <div className="energy-layout-container">
          {/* LEFT SIDEBAR: ALL SOLUTIONS */}
          <aside className="energy-sidebar">
            <div className="energy-sidebar-header">
              <div className="energy-sidebar-chevron-back">
                <FaChevronLeft size={12} />
              </div>
              <h3>All Solutions</h3>
            </div>

            <div className="energy-sidebar-list">
              {allSolutions.map((sol) => (
                <motion.div
                  key={sol.id}
                  className={`energy-sidebar-item ${sol.active ? "active" : ""}`}
                  whileHover={{ x: sol.active ? 0 : 5, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => {
                    if (sol.path && sol.path !== "#" && sol.path !== "/energy") {
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
                  <div className="energy-sidebar-item-thumb">
                    <img src={sol.image} alt={sol.title} />
                  </div>
                  <div className="energy-sidebar-item-info">
                    <span className="energy-sidebar-item-num">{sol.id}</span>
                    <span className="energy-sidebar-item-name">{sol.title}</span>
                  </div>
                  {sol.active && (
                    <div className="energy-sidebar-item-arrow">
                      <FaChevronRight size={12} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT COLUMN (ANIMATED) */}
          <motion.div
            className="energy-content-column"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* ROW 1: System Diagram + Key Features */}
            <div className="energy-grid-row energy-row-diagram-features">
              {/* System Diagram Card */}
              <div className="energy-card energy-diagram-card">
                <div className="energy-card-header">
                  <h3 className="energy-card-title">System Diagram</h3>
                  <div className="energy-3d-badge">
                    <TbCube size={15} />
                    <span>3D View</span>
                  </div>
                </div>

                <div className="energy-diagram-wrapper">
                  <img
                    src="/images/ENERGY  SYSTEM.png"
                    alt="Energy Intelligence System 3D Diagram"
                    className="energy-diagram-img"
                  />
                </div>
              </div>

              {/* Key Features Card */}
              <div className="energy-card energy-features-card">
                <div className="energy-card-header">
                  <h3 className="energy-card-title">Key Features</h3>
                </div>

                <ul className="energy-features-list">
                  {keyFeaturesList.map((feat, idx) => (
                    <li key={idx} className="energy-feature-item">
                      <div className="energy-check-bubble">
                        <FaCheck size={11} />
                      </div>
                      <span className="energy-feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ROW 2: System at a Glance (Table) */}
            <div className="energy-card energy-glance-card">
              <div className="energy-card-header">
                <h3 className="energy-card-title">System at a Glance</h3>
              </div>

              <div className="energy-table-responsive">
                <table className="energy-specs-table">
                  <tbody>
                    {systemGlanceData.map((row, idx) => (
                      <tr key={idx}>
                        <td className="energy-table-label">{row.label}</td>
                        <td className="energy-table-val">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ROW 3: Electrical & Control Profile + Typical Performance */}
            <div className="energy-grid-row energy-row-profile-performance">
              {/* Card 1: Electrical & Control Profile */}
              <div className="energy-card energy-profile-card">
                <div className="energy-card-header">
                  <h3 className="energy-card-title">Electrical &amp; Control Profile</h3>
                </div>

                <div className="energy-profile-grid">
                  {electricalControlMetrics.map((m, idx) => (
                    <div key={idx} className="energy-metric-tile">
                      <div className="energy-metric-icon">{m.icon}</div>
                      <div className="energy-metric-val">{m.value}</div>
                      <div className="energy-metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Typical Performance */}
              <div className="energy-card energy-performance-card">
                <div className="energy-card-header">
                  <h3 className="energy-card-title">Typical Performance</h3>
                </div>

                <div className="energy-performance-grid">
                  {performanceMetrics.map((m, idx) => (
                    <div key={idx} className="energy-perf-tile">
                      <div className="energy-perf-icon">{m.icon}</div>
                      <div className="energy-perf-val">{m.value}</div>
                      <div className="energy-perf-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 4: Applications */}
            <div className="energy-card energy-applications-card">
              <div className="energy-card-header">
                <h3 className="energy-card-title">Applications</h3>
              </div>

              <div className="energy-applications-grid">
                {applicationsList.map((app, idx) => (
                  <div key={idx} className="energy-app-card">
                    <div className="energy-app-thumb">
                      <img src={app.image} alt={app.title} />
                      <div className="energy-app-thumb-overlay" />
                    </div>
                    <div className="energy-app-info">
                      <div className="energy-app-icon-badge">{app.icon}</div>
                      <div className="energy-app-text">
                        <h4 className="energy-app-title">{app.title}</h4>
                        <p className="energy-app-desc">{app.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* 5. CALL TO ACTION FOOTER RIBBON */}
      <section className="energy-cta-section">
        <div className="energy-cta-banner">
          <div className="energy-cta-left">
            <div className="energy-cta-leaf-circle">
              <FaLeaf className="energy-cta-leaf-icon" />
            </div>

            <div className="energy-cta-text-group">
              <h2 className="energy-cta-title">Cleaner Water. Smarter Industry.</h2>
              <p className="energy-cta-subtitle">
                Intelligent solutions for a sustainable tomorrow.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="energy-cta-btn"
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
