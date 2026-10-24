import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaLeaf,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaFish,
  FaCogs,
  FaChartLine,
  FaDownload,
  FaFilePdf,
  FaInfoCircle,
  FaDesktop,
} from "react-icons/fa";
import {
  TbCube,
  TbBolt,
  TbShieldCheck,
  TbChartDots,
  TbCirclesRelation,
  TbRadar2,
  TbTrendingUp,
  TbBroadcast,
  TbClock,
  TbDroplet,
  TbPuzzle,
} from "react-icons/tb";
import { FiChevronLeft } from "react-icons/fi";
import { allSolutionsList, solutionsDetails } from "../../data/aquacultureSolutionsData";
import "./Power.css";

export default function Power() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [is3DView, setIs3DView] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Selected solution: defaults to "energy-monitoring"
  const [selectedSolutionId, setSelectedSolutionId] = useState("energy-monitoring");

  const currentSolution = solutionsDetails[selectedSolutionId] || solutionsDetails["energy-monitoring"];
  const currentNavSolution = allSolutionsList.find((s) => s.id === selectedSolutionId) || allSolutionsList.find((s) => s.id === "energy-monitoring") || allSolutionsList[0];

  const tabs = ["Overview", "Specifications", "Features", "Applications", "Downloads"];

  const handleSelectSolution = (sol) => {
    setSelectedSolutionId(sol.id);
    setIs3DView(false);
    setActiveTab("Overview");
    if (sol.path) {
      window.history.pushState(null, "", sol.path);
    }
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    const match = allSolutionsList.find((s) => s.path === currentPath);
    if (match) {
      setSelectedSolutionId(match.id);
    }

    const handlePopState = () => {
      const popMatch = allSolutionsList.find((s) => s.path === window.location.pathname);
      if (popMatch) {
        setSelectedSolutionId(popMatch.id);
        setIs3DView(false);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const renderBadgeIcon = (icon) => {
    switch (icon) {
      case "clock":
        return <TbClock className="power-badge-icon" />;
      case "radar":
        return <TbRadar2 className="power-badge-icon" />;
      case "trend":
        return <TbTrendingUp className="power-badge-icon" />;
      case "chart":
        return <TbChartDots className="power-badge-icon" />;
      case "broadcast":
        return <TbBroadcast className="power-badge-icon" />;
      case "monitor":
        return <FaDesktop className="power-badge-icon" />;
      case "cube":
        return <TbCube className="power-badge-icon" />;
      case "circles":
      case "puzzle":
        return <TbPuzzle className="power-badge-icon" />;
      case "shield":
        return <TbShieldCheck className="power-badge-icon" />;
      case "bolt":
        return <TbBolt className="power-badge-icon" />;
      default:
        return <TbCirclesRelation className="power-badge-icon" />;
    }
  };

  const renderOutcomeIcon = (icon) => {
    switch (icon) {
      case "water":
      case "droplet":
        return <TbDroplet size={28} />;
      case "fish":
        return <FaFish size={24} />;
      case "cogs":
        return <FaCogs size={24} />;
      case "leaf":
        return <FaLeaf size={24} />;
      case "shield":
        return <TbShieldCheck size={26} />;
      case "radar":
        return <TbRadar2 size={26} />;
      case "monitor":
      case "desktop":
        return <FaDesktop size={24} />;
      case "chart":
      default:
        return <FaChartLine size={24} />;
    }
  };

  return (
    <div className="power-page-root">
      {/* 1. TOP NAVBAR */}
      <header className="power-header">
        <div className="power-nav-container">
          <div className="power-nav-left">
            <button
              type="button"
              className="power-back-btn"
              onClick={() => navigate("/act-aquaculture")}
              title="Back to Aquaculture"
              aria-label="Back to Aquaculture"
            >
              <FiChevronLeft size={22} />
            </button>

            <a
              href="/"
              className="power-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/LOGO BARIFLO CYBERNETICS 2025-03-03.png"
                alt="Bariflo Cybernetics"
                className="power-logo-img"
              />
            </a>
          </div>

          <nav className="power-nav-menu">
            <button
              type="button"
              className="power-nav-link"
              onClick={() => navigate("/")}
            >
              HOME
            </button>
            <div className="power-nav-link-wrap active">
              <button
                type="button"
                className="power-nav-link active"
                onClick={() => navigate("/act-aquaculture")}
              >
                INDUSTRIES
              </button>
              <span className="power-nav-active-bar" />
            </div>
            <button
              type="button"
              className="power-nav-link"
              onClick={() => navigate("/cognition")}
            >
              COGNITION
            </button>
            <button
              type="button"
              className="power-nav-link"
              onClick={() => navigate("/case-studies")}
            >
              IMPACT
            </button>
            <button
              type="button"
              className="power-nav-link"
              onClick={() => navigate("/teamMember")}
            >
              ABOUT US
            </button>
          </nav>

          <div className="power-nav-actions">
            {/* Search */}
            <div className="power-search-wrap">
              {searchOpen ? (
                <div className="power-search-input-box">
                  <input
                    type="text"
                    placeholder="Search systems..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button
                    type="button"
                    className="power-search-close"
                    onClick={() => setSearchOpen(false)}
                    aria-label="Close search"
                  >
                    <FaTimes size={13} />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="power-search-btn"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Open search"
                >
                  <FaSearch size={16} />
                </button>
              )}
            </div>

            {/* Schedule Consultation CTA Button */}
            <button
              type="button"
              className="power-consultation-btn"
              onClick={() => navigate("/contactUs")}
            >
              <span>Schedule a Consultation</span>
              <FaArrowRight size={13} />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="power-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="power-mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="power-mobile-links">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/");
                    setMobileMenuOpen(false);
                  }}
                >
                  HOME
                </button>
                <button
                  type="button"
                  className="active"
                  onClick={() => {
                    navigate("/act-aquaculture");
                    setMobileMenuOpen(false);
                  }}
                >
                  INDUSTRIES
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/cognition");
                    setMobileMenuOpen(false);
                  }}
                >
                  COGNITION
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/case-studies");
                    setMobileMenuOpen(false);
                  }}
                >
                  IMPACT
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/teamMember");
                    setMobileMenuOpen(false);
                  }}
                >
                  ABOUT US
                </button>
                <button
                  type="button"
                  className="power-mobile-cta"
                  onClick={() => {
                    navigate("/contactUs");
                    setMobileMenuOpen(false);
                  }}
                >
                  Schedule a Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION */}
      <section
        className="power-hero-section"
        style={{
          backgroundImage: currentSolution?.hero?.bgImage
            ? `url("${currentSolution.hero.bgImage}")`
            : 'url("/images/Powersystem.png")',
        }}
      >
        <div className="power-hero-bg-layer" />

        <div className="power-hero-container">
          <div className="power-hero-content">
            {/* Breadcrumb */}
            <div className="power-breadcrumbs">
              <span onClick={() => navigate("/")}>Industries</span>
              <FaChevronRight size={10} />
              <span onClick={() => navigate("/act-aquaculture")}>Aquaculture</span>
              <FaChevronRight size={10} />
              <span className="power-breadcrumb-current">
                {currentSolution?.hero?.title || "Power Monitoring System"}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h1 className="power-hero-title">
              {currentSolution?.hero?.title || "Power Monitoring System"}
            </h1>
            <p className="power-hero-subtitle">
              {currentSolution?.hero?.subtitle ||
                "Real-time Energy Monitoring. Reliable Operation. Lower Operating Cost."}
            </p>

            {/* Description */}
            <p className="power-hero-desc">
              {currentSolution?.hero?.desc ||
                "Intelligent power monitoring system for aquaculture operations with automated energy measurement, equipment health monitoring and remote alerts. Ensures reliable operation with power-failure diesel backup and provides actionable insights for cost optimization."}
            </p>

            {/* Badges */}
            <div className="power-badges-wrapper">
              <div className="power-badges-row">
                {(
                  currentSolution?.hero?.badgesRow1 ||
                  currentSolution?.hero?.badges?.slice(0, 3) ||
                  []
                ).map((b, idx) => (
                  <span key={idx} className="power-badge-pill">
                    {renderBadgeIcon(b.icon)}
                    {b.text}
                  </span>
                ))}
              </div>
              <div className="power-badges-row">
                {(
                  currentSolution?.hero?.badgesRow2 ||
                  currentSolution?.hero?.badges?.slice(3) ||
                  []
                ).map((b, idx) => (
                  <span key={idx} className="power-badge-pill">
                    {renderBadgeIcon(b.icon)}
                    {b.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUBNAV BAR */}
      <nav className="power-subnav-bar">
        <div className="power-subnav-container">
          <div className="power-subnav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`power-subnav-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="power-btn-quote"
            onClick={() => navigate("/contactUs")}
          >
            <span>Request a Quote</span>
            <FaArrowRight size={12} />
          </button>
        </div>
      </nav>

      {/* 4. MAIN LAYOUT (Left Sidebar + Right Content) */}
      <main className="power-main-content">
        <div className="power-layout-container">
          {/* LEFT SIDEBAR: ALL SOLUTIONS */}
          <aside className="power-sidebar">
            <div className="power-sidebar-card">
              <div className="power-sidebar-header">
                <span className="power-sidebar-icon-circle">
                  <TbCube size={18} />
                </span>
                <span className="power-sidebar-title">All Solutions</span>
              </div>

              <div className="power-solutions-list">
                {allSolutionsList.map((sol) => {
                  const isActive =
                    selectedSolutionId === sol.id ||
                    (selectedSolutionId === "energy-monitoring" &&
                      (sol.id === "energy-monitoring" || sol.id === "power-monitoring"));

                  return (
                    <button
                      key={sol.id}
                      type="button"
                      className={`power-solution-item ${isActive ? "active" : ""}`}
                      onClick={() => handleSelectSolution(sol)}
                    >
                      <div className="power-solution-thumb-box">
                        <img
                          src={sol.image}
                          alt={sol.title}
                          className="power-solution-thumb"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/product img/Group 45.png";
                          }}
                        />
                      </div>
                      <span className="power-solution-name">{sol.title}</span>
                      <FaChevronRight className="power-solution-arrow" size={11} />
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN CONTENT */}
          {currentSolution ? (
            <div className="power-content-column">
              {/* TOP ROW: System Diagram + Key Features */}
              <div className="power-row-top">
                {/* SYSTEM DIAGRAM CARD */}
                <div className="power-card power-diagram-card">
                  <div className="power-card-header">
                    <h2 className="power-card-title">
                      {currentSolution.diagram?.title || "System Diagram"}
                    </h2>

                    <button
                      type="button"
                      className={`power-toggle-3d-btn ${is3DView ? "active" : ""}`}
                      onClick={() => setIs3DView(!is3DView)}
                      title="Toggle 3D View"
                    >
                      <TbCube size={16} />
                      <span>3D View</span>
                    </button>
                  </div>

                  <div className="power-diagram-container">
                    <div className="power-diagram-img-box">
                      <motion.img
                        key={is3DView ? "3d" : "2d"}
                        src={is3DView ? currentSolution.diagram.render3D : currentSolution.diagram.img}
                        alt={currentSolution.title}
                        className="power-diagram-img"
                        initial={{ opacity: 0.6, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/power.png";
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* KEY FEATURES CARD */}
                <div className="power-card power-features-card">
                  <h2 className="power-card-title">Key Features</h2>
                  <ul className="power-features-list">
                    {currentSolution.keyFeatures?.map((feat, idx) => (
                      <li key={idx} className="power-feature-row">
                        <span className="power-feature-check">
                          <FaCheck size={11} />
                        </span>
                        <span className="power-feature-text">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* MID ROW: System at a Glance + Core Operating Data */}
              <div className="power-row-mid">
                {/* SYSTEM AT A GLANCE TABLE */}
                <div className="power-card power-glance-card">
                  <h2 className="power-card-title">System at a Glance</h2>
                  <div className="power-glance-table">
                    {currentSolution.systemGlance?.map((row, idx) => (
                      <div key={idx} className="power-glance-row">
                        <span className="power-glance-label">{row.label}</span>
                        <span className="power-glance-val">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CORE OPERATING DATA 2x3 METRICS */}
                <div className="power-card power-metrics-card">
                  <h2 className="power-card-title">Core Operating Data</h2>
                  <div className="power-metrics-grid">
                    {currentSolution.coreOperatingData?.map((metric, idx) => (
                      <div key={idx} className="power-metric-tile">
                        <span className="power-metric-value">{metric.value}</span>
                        <span className="power-metric-desc">{metric.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* BOTTOM ROW: Process Outcomes */}
              <div className="power-row-bottom">
                <div className="power-card power-outcomes-card">
                  <h2 className="power-card-title">Process Outcomes</h2>
                  <div className="power-outcomes-grid">
                    {currentSolution.processOutcomes?.map((outcome, idx) => (
                      <div key={idx} className="power-outcome-box">
                        <div className="power-outcome-icon-wrap">
                          {renderOutcomeIcon(outcome.icon)}
                        </div>
                        <h3 className="power-outcome-heading">{outcome.title}</h3>
                        <p className="power-outcome-sub">{outcome.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="power-content-column">
              <div className="power-card power-prep-card">
                <FaInfoCircle size={48} className="power-prep-icon" />
                <h3>{currentNavSolution.title}</h3>
                <p>
                  System specifications, engineering schematics, and interactive performance models for this solution are currently being integrated.
                </p>
                <div className="power-prep-actions">
                  <button
                    type="button"
                    className="power-prep-btn"
                    onClick={() => navigate("/contactUs")}
                  >
                    Request Technical Spec Sheet
                  </button>
                  <button
                    type="button"
                    className="power-prep-btn secondary"
                    onClick={() => handleSelectSolution(allSolutionsList[3])}
                  >
                    Back to Power Monitoring
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="power-cta-section">
        <div className="power-cta-banner">
          <div className="power-cta-left">
            <div className="power-cta-leaf-circle">
              <FaLeaf className="power-cta-leaf-icon" />
            </div>

            <div className="power-cta-text-group">
              <h2 className="power-cta-title">
                Healthier Fish. Smarter Farming.
              </h2>
              <p className="power-cta-subtitle">
                Integrated systems. Intelligent control. A more productive tomorrow.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="power-cta-btn"
            onClick={() => navigate("/contactUs")}
          >
            <span>Talk to Our Experts</span>
            <FaArrowRight size={13} />
          </button>
        </div>
      </section>

      {/* 6. TRUSTED BY INDUSTRY LEADERS FOOTER */}
      <footer className="ietp-trust-footer">
        <div className="ietp-trust-footer-inner">
          <div className="ietp-trust-left-group">
            <div className="ietp-trust-label">
              TRUSTED BY
              <br />
              INDUSTRY LEADERS
            </div>

            <div className="ietp-trust-divider" />

            <div className="ietp-logo-item" title="Bariflo Cybernetics">
              <img
                src="/LOGO BARIFLO CYBERNETICS 2025-03-03.png"
                alt="Bariflo Cybernetics"
                className="ietp-logo-bariflo-footer"
              />
            </div>
          </div>

          <div className="ietp-trust-motto">
            <span className="ietp-trust-motto-text">
              HEALTHY ECOSYSTEMS.
              <br />
              PROSPEROUS COMMUNITIES.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
