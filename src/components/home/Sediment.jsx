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
  FaWater,
  FaFish,
  FaCog,
  FaIndustry,
  FaTree,
} from "react-icons/fa";
import {
  TbCube,
  TbWaveSine,
  TbNetwork,
  TbBuildingBridge,
} from "react-icons/tb";
import { FiChevronLeft } from "react-icons/fi";
import "./Sediment.css";

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
    active: true,
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
    id: "housing",
    title: "DEVICE HOUSING",
    sub: "Motor & Blower Enclosure",
    posClass: "sed-callout-housing",
  },
  {
    id: "float",
    title: "FLOAT (HDPE)",
    sub: "(4 Nos.)",
    posClass: "sed-callout-float",
  },
  {
    id: "frame",
    title: "STAINLESS STEEL FRAME",
    sub: "SS 304 / SS 316",
    posClass: "sed-callout-frame",
  },
  {
    id: "air-supply",
    title: "AIR SUPPLY LINE",
    sub: "From Blower",
    posClass: "sed-callout-air",
  },
  {
    id: "submersed",
    title: "SUBMERSED AERATOR",
    sub: "Diffuser Ring",
    posClass: "sed-callout-submersed",
  },
];

const keyFeaturesList = [
  "Uniform oxygenation in water and sediments",
  "Reduces BOD, COD and nutrient load",
  "Controls eutrophication and algal blooms",
  "Supports aquatic biodiversity and water quality",
  "Energy-efficient, low-maintenance operation",
  "Suitable for lakes, ponds, reservoirs and tanks",
];

const performanceHighlights = [
  {
    icon: <span className="sed-o2-text">O₂</span>,
    title: "High Oxygenation",
  },
  {
    icon: <TbNetwork size={24} />,
    title: "Reduced Eutrophication",
  },
  {
    icon: <TbWaveSine size={24} />,
    title: "Improved Water Quality",
  },
  {
    icon: <FaFish size={22} />,
    title: "Supports Aquatic Life",
  },
  {
    icon: <FaCog size={22} />,
    title: "Low Maintenance",
    fullWidth: true,
  },
];

const systemGlanceData = [
  {
    label: "Application",
    value: "Waterbody rejuvenation and eutrophication control",
  },
  {
    label: "Treatment mode",
    value: "Ring aeration with submerged diffusers",
  },
  {
    label: "Capacity",
    value: "Customized as per water body size",
  },
  {
    label: "Tank materials",
    value: "SS304 / SS316 (Frame & structure)",
  },
  {
    label: "Control mode",
    value: "Automatic, manual or remote",
  },
  {
    label: "Aeration",
    value: "Submerged diffuser ring with compressed air",
  },
];

const coreOperatingData = [
  {
    label: "Power supply",
    value: "230 VAC / 50 Hz",
  },
  {
    label: "Compressor motor rating",
    value: "1 – 2 HP",
  },
  {
    label: "Motor current",
    value: "6.0 A typical",
  },
  {
    label: "Air flow rate",
    value: "12 – 18 m³/hr (200 – 300 L/min)",
  },
  {
    label: "Oxygen transfer rate",
    value: "Up to 1.6 kg O₂/hr (typical)",
  },
  {
    label: "Mounting type",
    value: "Floating system (pole mounting)",
  },
  {
    label: "Operating depth",
    value: "1.4 m (standard, customizable)",
  },
  {
    label: "Control panel",
    value: "IP65 rated panel with MCB",
  },
];

const applicationsList = [
  {
    icon: <TbWaveSine size={26} />,
    title: "Lakes & Ponds",
  },
  {
    icon: <TbBuildingBridge size={26} />,
    title: "Reservoirs",
  },
  {
    icon: <FaIndustry size={24} />,
    title: "Industrial Water Bodies",
  },
  {
    icon: <FaTree size={24} />,
    title: "Recreational Water Bodies",
  },
];

const techSpecsLeft = [
  { param: "Hexagonal frame size", spec: "3000 × 3000 × 20 mm" },
  { param: "Underwater ring size", spec: "1400 × 1400 × 20 mm" },
  { param: "Holding frame size", spec: "1400 × 1800 × 50 mm" },
  { param: "Type", spec: "Submerged ring aerator with pulley-assisted up/down motion" },
  { param: "Application", spec: "Oxygenation of water bodies and bottom sediments" },
  { param: "Power supply", spec: "230 VAC / 50 Hz" },
  { param: "Compressor motor rating", spec: "1 – 2 HP" },
];

const techSpecsRight = [
  { param: "Motor current", spec: "6.0 A typical" },
  { param: "Air flow rate", spec: "12 – 18 m³/hr (200 – 300 L/min)" },
  { param: "Oxygen transfer rate", spec: "Up to 1.6 kg O₂/hr (typical)" },
  { param: "Material of construction", spec: "SS304 / SS316" },
  { param: "Mounting type", spec: "Pole mounting with base and top bolting" },
  { param: "Diffuser type", spec: "Fine microbubble diffuser" },
  { param: "Control panel", spec: "IP65 rated panel with MCB" },
  { param: "Operating depth", spec: "1.4 m standard, customizable" },
  { param: "Maintenance", spec: "Low; easy inspection and cleaning" },
  { param: "Warranty", spec: "12 months for electronics" },
];

export default function Sediment() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Specifications", "Features", "Applications", "Downloads"];

  return (
    <div className="sed-page-root">
      {/* 1. TOP NAVBAR */}
      <header className="sed-header">
        <div className="sed-nav-container">
          <div className="sed-nav-left">
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
              className="sed-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/images/bariflo_nav_logo.png"
                alt="Bariflo Cybernetics"
                className="sed-logo-img"
              />
            </a>
          </div>

          <nav className="sed-nav-menu">
            <button type="button" className="sed-nav-link" onClick={() => navigate("/")}>
              HOME
            </button>
            <div className="sed-nav-link-wrap active">
              <button
                type="button"
                className="sed-nav-link active"
                onClick={() => navigate("/act")}
              >
                INDUSTRIES
              </button>
              <div className="sed-nav-active-bar" />
            </div>
            <button
              type="button"
              className="sed-nav-link"
              onClick={() => navigate("/cognition")}
            >
              COGNITION
            </button>
            <button
              type="button"
              className="sed-nav-link"
              onClick={() => navigate("/case-studies")}
            >
              IMPACT
            </button>
            <button
              type="button"
              className="sed-nav-link"
              onClick={() => navigate("/teamMember")}
            >
              ABOUT US
            </button>
          </nav>

          <div className="sed-nav-actions">
            <button
              type="button"
              className="sed-search-icon-btn"
              aria-label="Search"
              onClick={() => navigate("/act")}
            >
              <FaSearch size={15} />
            </button>

            <button
              type="button"
              className="sed-consultation-btn"
              onClick={() => navigate("/contactUs")}
            >
              Schedule a Consultation <FaArrowRight size={12} />
            </button>

            <button
              type="button"
              className="sed-mobile-toggle"
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
              className="sed-mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="sed-mobile-links">
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
                  className="sed-mobile-cta"
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
      <section className="sed-hero-section">
        <div className="sed-hero-bg-overlay" />
        <div className="sed-hero-container">
          <div className="sed-hero-content">
            <div className="sed-breadcrumbs">
              <span>Industries</span>
              <span className="sed-bc-sep">&gt;</span>
              <span>Industrial Wastewater</span>
              <span className="sed-bc-sep">&gt;</span>
              <span className="sed-bc-current">Sediment Aeration System</span>
            </div>

            <h1 className="sed-hero-title">Sediment Aeration System</h1>
            <h2 className="sed-hero-subtitle">
              For Waterbody Rejuvenation &amp; Eutrophication Control
            </h2>
            <p className="sed-hero-desc">
              Ring aeration with submerged diffusers oxygenates water and sediments,
              reduces nutrient load, controls algal growth and supports aquatic ecosystem health.
            </p>

            <div className="sed-badges-row">
              <div className="sed-badge-pill">
                <div className="sed-badge-icon">
                  <span className="sed-badge-o2">O₂</span>
                </div>
                <span>High Oxygenation</span>
              </div>

              <div className="sed-badge-pill">
                <div className="sed-badge-icon">
                  <TbNetwork />
                </div>
                <span>Reduced Eutrophication</span>
              </div>

              <div className="sed-badge-pill">
                <div className="sed-badge-icon">
                  <TbWaveSine />
                </div>
                <span>Improved Water Quality</span>
              </div>

              <div className="sed-badge-pill">
                <div className="sed-badge-icon">
                  <FaFish />
                </div>
                <span>Supports Aquatic Life</span>
              </div>

              <div className="sed-badge-pill">
                <div className="sed-badge-icon">
                  <FaCog />
                </div>
                <span>Low Maintenance</span>
              </div>
            </div>
          </div>

          {/* Right Hero: Glass Card */}
          <div className="sed-hero-right-card">
            <div className="sed-clean-water-glass">
              <div className="sed-glass-icon-box">
                <TbWaveSine className="sed-glass-wave" />
              </div>
              <div className="sed-glass-text">
                <span className="sed-glass-heading">Cleaner Water</span>
                <span className="sed-glass-sub">for a Healthier Tomorrow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUBNAV ACTION BAR */}
      <div className="sed-subnav-bar">
        <div className="sed-subnav-container">
          <div className="sed-subnav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`sed-subnav-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="sed-tab-indicator" />}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="sed-quote-btn"
            onClick={() => navigate("/contactUs")}
          >
            Request a Quote <FaArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* 4. MAIN LAYOUT (Sidebar + Content) */}
      <main className="sed-main-section">
        <div className="sed-layout-container">
          {/* LEFT SIDEBAR: ALL SOLUTIONS */}
          <aside className="sed-sidebar">
            <div className="sed-sidebar-header">
              <div className="sed-sidebar-chevron-back">
                <FaChevronLeft size={12} />
              </div>
              <h3>All Solutions</h3>
            </div>

            <div className="sed-sidebar-list">
              {allSolutions.map((sol) => (
                <motion.div
                  key={sol.id}
                  className={`sed-sidebar-item ${sol.active ? "active" : ""}`}
                  whileHover={{ x: sol.active ? 0 : 5, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => {
                    if (sol.path && sol.path !== "#" && sol.path !== "/sediment") {
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
                  <div className="sed-sidebar-item-thumb">
                    <img src={sol.image} alt={sol.title} />
                  </div>
                  <div className="sed-sidebar-item-info">
                    <span className="sed-sidebar-item-num">{sol.id}</span>
                    <span className="sed-sidebar-item-name">{sol.title}</span>
                  </div>
                  {sol.active && (
                    <div className="sed-sidebar-item-arrow">
                      <FaChevronRight size={12} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT COLUMN (ANIMATED) */}
          <motion.div
            className="sed-content-column"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* ROW 1: System Diagram + Key Features + Performance Highlights */}
            <div className="sed-grid-row sed-row-1">
              {/* Card 1: System Diagram */}
              <div className="sed-card sed-diagram-card">
                <div className="sed-card-header">
                  <h3 className="sed-card-title">System Diagram</h3>
                  <div className="sed-3d-badge">
                    <TbCube size={15} />
                    <span>3D View</span>
                  </div>
                </div>

                <div className="sed-diagram-wrapper">
                  <img
                    src="/images/SEDIMENT SYSTEM.png"
                    alt="Sediment Aeration System 3D Diagram"
                    className="sed-diagram-img"
                  />

                  {/* Callout Pointers */}
                  <div className="sed-callouts-layer">
                    {diagramCallouts.map((c) => (
                      <div key={c.id} className={`sed-callout-box ${c.posClass}`}>
                        <div className="sed-callout-inner">
                          <strong className="sed-callout-heading">{c.title}</strong>
                          <span className="sed-callout-sub">{c.sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2: Key Features */}
              <div className="sed-card sed-features-card">
                <div className="sed-card-header">
                  <h3 className="sed-card-title">Key Features</h3>
                </div>

                <ul className="sed-features-list">
                  {keyFeaturesList.map((feat, idx) => (
                    <li key={idx} className="sed-feature-item">
                      <div className="sed-check-bubble">
                        <FaCheck size={11} />
                      </div>
                      <span className="sed-feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3: Performance Highlights */}
              <div className="sed-card sed-highlights-card">
                <div className="sed-card-header">
                  <h3 className="sed-card-title">Performance Highlights</h3>
                </div>

                <div className="sed-highlights-grid">
                  {performanceHighlights.map((h, idx) => (
                    <div
                      key={idx}
                      className={`sed-highlight-box ${h.fullWidth ? "full-width" : ""}`}
                    >
                      <div className="sed-highlight-icon-circle">{h.icon}</div>
                      <span className="sed-highlight-title">{h.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 2: System at a Glance + Core Operating Data + Applications */}
            <div className="sed-grid-row sed-row-2">
              {/* Card 1: System at a Glance */}
              <div className="sed-card sed-glance-card">
                <div className="sed-card-header">
                  <h3 className="sed-card-title">System at a Glance</h3>
                </div>

                <div className="sed-table-responsive">
                  <table className="sed-specs-table">
                    <tbody>
                      {systemGlanceData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="sed-table-label">{row.label}</td>
                          <td className="sed-table-val">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Card 2: Core Operating Data */}
              <div className="sed-card sed-operating-card">
                <div className="sed-card-header">
                  <h3 className="sed-card-title">Core Operating Data</h3>
                </div>

                <div className="sed-table-responsive">
                  <table className="sed-specs-table">
                    <tbody>
                      {coreOperatingData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="sed-table-label">{row.label}</td>
                          <td className="sed-table-val">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Card 3: Applications */}
              <div className="sed-card sed-applications-card">
                <div className="sed-card-header">
                  <h3 className="sed-card-title">Applications</h3>
                </div>

                <div className="sed-applications-grid">
                  {applicationsList.map((app, idx) => (
                    <div key={idx} className="sed-application-box">
                      <div className="sed-application-icon">{app.icon}</div>
                      <span className="sed-application-title">{app.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 3: Technical Specifications (Full Width 2-Column Table) */}
            <div className="sed-card sed-techspecs-card">
              <div className="sed-card-header">
                <h3 className="sed-card-title">Technical Specifications</h3>
              </div>

              <div className="sed-techspecs-split-grid">
                {/* Left Table */}
                <table className="sed-tech-table">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {techSpecsLeft.map((r, idx) => (
                      <tr key={idx}>
                        <td className="sed-tech-param">{r.param}</td>
                        <td className="sed-tech-val">{r.spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Right Table */}
                <table className="sed-tech-table">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Specifications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {techSpecsRight.map((r, idx) => (
                      <tr key={idx}>
                        <td className="sed-tech-param">{r.param}</td>
                        <td className="sed-tech-val">{r.spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* 5. CALL TO ACTION FOOTER RIBBON */}
      <section className="sed-cta-section">
        <div className="sed-cta-banner">
          <div className="sed-cta-left">
            <div className="sed-cta-leaf-circle">
              <FaLeaf className="sed-cta-leaf-icon" />
            </div>

            <div className="sed-cta-text-group">
              <h2 className="sed-cta-title">Cleaner Water. Smarter Industry.</h2>
              <p className="sed-cta-subtitle">
                Intelligent solutions for a sustainable tomorrow.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="sed-cta-btn"
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
