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
  TbClock,
  TbDroplet,
  TbDeviceMobile,
  TbBroadcast,
  TbPuzzle,
} from "react-icons/tb";
import { FiChevronLeft } from "react-icons/fi";
import { allSolutionsList, solutionsDetails } from "../../data/aquacultureSolutionsData";
import "./Monitoring.css";

export default function Monitoring() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [is3DView, setIs3DView] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Default to "monitoring-system"
  const [selectedSolutionId, setSelectedSolutionId] = useState("monitoring-system");

  const currentSolution = solutionsDetails[selectedSolutionId] || solutionsDetails["monitoring-system"];
  const currentNavSolution = allSolutionsList.find((s) => s.id === selectedSolutionId) || allSolutionsList.find((s) => s.id === "monitoring-system") || allSolutionsList[0];

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
        return <TbClock className="monitoring-badge-icon" />;
      case "radar":
        return <TbRadar2 className="monitoring-badge-icon" />;
      case "trend":
        return <TbTrendingUp className="monitoring-badge-icon" />;
      case "chart":
        return <TbChartDots className="monitoring-badge-icon" />;
      case "broadcast":
        return <TbBroadcast className="monitoring-badge-icon" />;
      case "monitor":
        return <FaDesktop className="monitoring-badge-icon" />;
      case "cube":
        return <TbCube className="monitoring-badge-icon" />;
      case "circles":
      case "puzzle":
        return <TbPuzzle className="monitoring-badge-icon" />;
      case "shield":
        return <TbShieldCheck className="monitoring-badge-icon" />;
      case "bolt":
        return <TbBolt className="monitoring-badge-icon" />;
      default:
        return <TbCirclesRelation className="monitoring-badge-icon" />;
    }
  };

  const renderOutcomeIcon = (icon) => {
    switch (icon) {
      case "water":
      case "droplet":
        return <TbDroplet size={28} />;
      case "fish":
        return <FaFish size={26} />;
      case "chart":
        return <FaChartLine size={26} />;
      case "cogs":
        return <FaCogs size={26} />;
      case "leaf":
        return <FaLeaf size={26} />;
      case "shield":
        return <TbShieldCheck size={28} />;
      case "radar":
        return <TbRadar2 size={28} />;
      case "monitor":
      case "desktop":
      default:
        return <FaDesktop size={26} />;
    }
  };

  return (
    <div className="monitoring-page-root">
      {/* 1. TOP NAVBAR */}
      <header className="monitoring-header">
        <div className="monitoring-nav-container">
          <div className="monitoring-nav-left">
            <button
              type="button"
              className="monitoring-back-btn"
              onClick={() => navigate("/act-aquaculture")}
              title="Back to Aquaculture"
              aria-label="Back to Aquaculture"
            >
              <FiChevronLeft size={22} />
            </button>

            <a
              href="/"
              className="monitoring-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/LOGO BARIFLO CYBERNETICS 2025-03-03.png"
                alt="Bariflo Cybernetics"
                className="monitoring-logo-img"
              />
            </a>
          </div>

          <nav className="monitoring-nav-menu">
            <button
              type="button"
              className="monitoring-nav-link"
              onClick={() => navigate("/")}
            >
              HOME
            </button>
            <div className="monitoring-nav-link-wrap active">
              <button
                type="button"
                className="monitoring-nav-link active"
                onClick={() => navigate("/act-aquaculture")}
              >
                INDUSTRIES
              </button>
              <div className="monitoring-nav-active-bar" />
            </div>
            <button
              type="button"
              className="monitoring-nav-link"
              onClick={() => navigate("/cognition")}
            >
              COGNITION
            </button>
            <button
              type="button"
              className="monitoring-nav-link"
              onClick={() => navigate("/case-studies")}
            >
              IMPACT
            </button>
            <button
              type="button"
              className="monitoring-nav-link"
              onClick={() => navigate("/teamMember")}
            >
              ABOUT US
            </button>
          </nav>

          <div className="monitoring-nav-actions">
            {/* Search */}
            <div className="monitoring-search-wrap">
              {searchOpen ? (
                <div className="monitoring-search-input-box">
                  <input
                    type="text"
                    placeholder="Search systems..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button
                    type="button"
                    className="monitoring-search-close"
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    <FaTimes size={13} />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="monitoring-search-btn"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                >
                  <FaSearch size={15} />
                </button>
              )}
            </div>

            {/* Schedule Consultation Button */}
            <button
              type="button"
              className="monitoring-consultation-btn"
              onClick={() => navigate("/contactUs")}
            >
              <span>Schedule a Consultation</span>
              <FaArrowRight size={12} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="monitoring-mobile-toggle"
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
              className="monitoring-mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="monitoring-mobile-links">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/");
                  }}
                >
                  HOME
                </button>
                <button
                  type="button"
                  className="active"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/act-aquaculture");
                  }}
                >
                  INDUSTRIES
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/cognition");
                  }}
                >
                  COGNITION
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/case-studies");
                  }}
                >
                  IMPACT
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/teamMember");
                  }}
                >
                  ABOUT US
                </button>
                <button
                  type="button"
                  className="monitoring-mobile-cta"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/contactUs");
                  }}
                >
                  Schedule a Consultation <FaArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION */}
      <section
        className="monitoring-hero-section"
        style={{
          backgroundImage: `url("${currentSolution?.hero?.bgImage || "/images/Monitoringback.png"}")`,
        }}
      >
        <div className="monitoring-hero-bg-layer" />
        <div className="monitoring-hero-container">
          <div className="monitoring-hero-content">
            {/* Breadcrumbs */}
            <nav className="monitoring-breadcrumbs" aria-label="Breadcrumb">
              <span
                className="monitoring-bc-link"
                onClick={() => navigate("/act-aquaculture")}
              >
                Industries
              </span>
              <span className="monitoring-bc-sep">&gt;</span>
              <span
                className="monitoring-bc-link"
                onClick={() => navigate("/act-aquaculture")}
              >
                Aquaculture
              </span>
              <span className="monitoring-bc-sep">&gt;</span>
              <span className="monitoring-bc-current">
                {currentSolution?.hero?.breadcrumb?.includes(">")
                  ? currentSolution.hero.breadcrumb.split(">").pop().trim()
                  : currentSolution?.title || "Monitoring System"}
              </span>
            </nav>

            {/* Title & Subtitle */}
            <h1 className="monitoring-hero-title">
              {currentSolution?.hero?.title || "Aquaculture Monitoring System"}
            </h1>
            <p className="monitoring-hero-subtitle">
              {currentSolution?.hero?.subtitle ||
                "Real-time Sensing and Automated Sampling for Healthier Aquaculture"}
            </p>

            {/* Description */}
            <p className="monitoring-hero-desc">
              {currentSolution?.hero?.desc ||
                "Integrated sensing and automated water sampling system for real-time monitoring of key water quality parameters with AI-driven analytics. Provides actionable insights, early risk alerts and supports optimal feeding, aeration and overall farm management."}
            </p>

            {/* Badges in Two Rows matching Screenshot */}
            <div className="monitoring-badges-container">
              {currentSolution?.hero?.badgesRow1 && (
                <div className="monitoring-badges-row">
                  {currentSolution.hero.badgesRow1.map((b, i) => (
                    <div key={i} className="monitoring-badge-pill">
                      {renderBadgeIcon(b.icon)}
                      <span>{b.text}</span>
                    </div>
                  ))}
                </div>
              )}
              {currentSolution?.hero?.badgesRow2 && (
                <div className="monitoring-badges-row">
                  {currentSolution.hero.badgesRow2.map((b, i) => (
                    <div key={i} className="monitoring-badge-pill">
                      {renderBadgeIcon(b.icon)}
                      <span>{b.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUBNAV ACTION BAR */}
      <div className="monitoring-subnav-bar">
        <div className="monitoring-subnav-container">
          <div className="monitoring-subnav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`monitoring-subnav-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="monitoring-tab-indicator" />}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="monitoring-quote-btn"
            onClick={() => navigate("/contactUs")}
          >
            Request a Quote <FaArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* 4. MAIN CONTENT AREA (Sidebar + Content Cards) */}
      <main className="monitoring-main-section">
        <div className="monitoring-layout-container">
          {/* LEFT SIDEBAR: ALL SOLUTIONS */}
          <aside className="monitoring-sidebar">
            <div className="monitoring-sidebar-header">
              <div className="monitoring-sidebar-icon">
                <TbCube size={18} />
              </div>
              <h3>All Solutions</h3>
            </div>

            <div className="monitoring-sidebar-list">
              {allSolutionsList.map((sol) => {
                const isActive = selectedSolutionId === sol.id;
                return (
                  <div
                    key={sol.id}
                    className={`monitoring-sidebar-item ${isActive ? "active" : ""}`}
                    onClick={() => handleSelectSolution(sol)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleSelectSolution(sol);
                      }
                    }}
                  >
                    <div className="monitoring-sidebar-thumb">
                      <img
                        src={sol.image}
                        alt={sol.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/Monitoringsystem.png";
                        }}
                      />
                    </div>
                    <div className="monitoring-sidebar-name">
                      {sol.shortTitle || sol.title}
                    </div>
                    <div className="monitoring-sidebar-arrow">
                      <FaChevronRight size={11} />
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* RIGHT CONTENT COLUMN */}
          <div className="monitoring-content-column">
            {currentSolution && activeTab === "Overview" && (
              <>
                {/* ROW 1: System Diagram + Key Features */}
                <div className="monitoring-grid-row monitoring-row-top">
                  {/* System Diagram Card with interactive 3D View hotspot */}
                  {currentSolution.diagram?.isCustomCard && !is3DView ? (
                    <div className="monitoring-diagram-card-wrapper">
                      <img
                        src={currentSolution.diagram.img}
                        alt={`${currentSolution.title} Diagram`}
                        className="monitoring-diagram-full-img"
                      />
                      {/* Clickable 3D View button hotspot over the image's 3D View button */}
                      <button
                        type="button"
                        className="monitoring-diagram-3d-hotspot"
                        onClick={() => setIs3DView(true)}
                        title="Open 3D Model View"
                        aria-label="Open 3D Model View"
                      >
                        <TbCube size={15} />
                        <span>3D View</span>
                      </button>
                    </div>
                  ) : (
                    <div className="monitoring-card monitoring-diagram-card">
                      <div className="monitoring-card-header">
                        <h3 className="monitoring-card-title">
                          {currentSolution.diagram?.title || "System Diagram"}
                        </h3>
                        <button
                          type="button"
                          className={`monitoring-3d-btn ${is3DView ? "active" : ""}`}
                          onClick={() => setIs3DView(!is3DView)}
                        >
                          <TbCube size={15} />
                          <span>{is3DView ? "Diagram View" : "3D View"}</span>
                        </button>
                      </div>

                      <div className="monitoring-diagram-container">
                        <div className="monitoring-diagram-img-box">
                          <img
                            src={
                              is3DView
                                ? currentSolution.diagram.render3D
                                : currentSolution.diagram.img
                            }
                            alt={`${currentSolution.title} Diagram`}
                            className={`monitoring-diagram-img ${is3DView ? "is-3d" : ""}`}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Key Features Card */}
                  <div className="monitoring-card monitoring-features-card">
                    <div className="monitoring-card-header">
                      <h3 className="monitoring-card-title">Key Features</h3>
                    </div>

                    <ul className="monitoring-features-list">
                      {currentSolution.keyFeatures?.map((feat, idx) => (
                        <li key={idx} className="monitoring-feature-item">
                          <div className="monitoring-check-circle">
                            <FaCheck size={10} />
                          </div>
                          <span className="monitoring-feature-text">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ROW 2: System at a Glance + Core Operating Data */}
                <div className="monitoring-grid-row monitoring-row-mid">
                  {/* System at a Glance Card */}
                  <div className="monitoring-card monitoring-glance-card">
                    <div className="monitoring-card-header">
                      <h3 className="monitoring-card-title">System at a Glance</h3>
                    </div>

                    <div className="monitoring-table-wrap">
                      <table className="monitoring-glance-table">
                        <tbody>
                          {currentSolution.systemGlance?.map((row, idx) => (
                            <tr key={idx}>
                              <td className="monitoring-glance-label">{row.label}</td>
                              <td className="monitoring-glance-val">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Core Operating Data Card */}
                  <div className="monitoring-card monitoring-data-card">
                    <div className="monitoring-card-header">
                      <h3 className="monitoring-card-title">Core Operating Data</h3>
                    </div>

                    <div className="monitoring-metrics-grid">
                      {currentSolution.coreOperatingData?.map((item, idx) => (
                        <div key={idx} className="monitoring-metric-tile">
                          <div className="monitoring-metric-value">{item.value}</div>
                          <div className="monitoring-metric-desc">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ROW 3: Process Outcomes */}
                <div className="monitoring-card monitoring-outcomes-card">
                  <div className="monitoring-card-header">
                    <h3 className="monitoring-card-title">Process Outcomes</h3>
                  </div>

                  <div className="monitoring-outcomes-grid">
                    {currentSolution.processOutcomes?.map((item, idx) => (
                      <div key={idx} className="monitoring-outcome-col">
                        <div className="monitoring-outcome-icon">
                          {renderOutcomeIcon(item.icon)}
                        </div>
                        <h4 className="monitoring-outcome-heading">{item.title}</h4>
                        <p className="monitoring-outcome-sub">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* TAB: Specifications */}
            {activeTab === "Specifications" && (
              <div className="monitoring-card monitoring-tab-pane">
                <div className="monitoring-card-header">
                  <h3 className="monitoring-card-title">Technical Specifications</h3>
                </div>
                <div className="monitoring-table-wrap">
                  <table className="monitoring-glance-table">
                    <tbody>
                      {currentSolution.systemGlance?.map((row, idx) => (
                        <tr key={idx}>
                          <td className="monitoring-glance-label">{row.label}</td>
                          <td className="monitoring-glance-val">{row.value}</td>
                        </tr>
                      ))}
                      {currentSolution.coreOperatingData?.map((row, idx) => (
                        <tr key={`core-${idx}`}>
                          <td className="monitoring-glance-label">{row.desc}</td>
                          <td className="monitoring-glance-val">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB: Features */}
            {activeTab === "Features" && (
              <div className="monitoring-card monitoring-tab-pane">
                <div className="monitoring-card-header">
                  <h3 className="monitoring-card-title">Comprehensive Features</h3>
                </div>
                <ul className="monitoring-features-list">
                  {currentSolution.keyFeatures?.map((feat, idx) => (
                    <li key={idx} className="monitoring-feature-item">
                      <div className="monitoring-check-circle">
                        <FaCheck size={10} />
                      </div>
                      <span className="monitoring-feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* TAB: Applications */}
            {activeTab === "Applications" && (
              <div className="monitoring-card monitoring-tab-pane">
                <div className="monitoring-card-header">
                  <h3 className="monitoring-card-title">Target Applications</h3>
                </div>
                <div className="monitoring-applications-grid">
                  <div className="monitoring-app-card">
                    <h4>Pond Aquaculture (Fish & Shrimp)</h4>
                    <p>Continuous multiparameter monitoring of DO, pH, ORP, Temperature, and Vibrio dynamics in earthen and lined ponds.</p>
                  </div>
                  <div className="monitoring-app-card">
                    <h4>Automated Feed & Aeration Interlock</h4>
                    <p>Direct integration with automated aerators and feeders to prevent hypoxia mortality and overfeeding waste.</p>
                  </div>
                  <div className="monitoring-app-card">
                    <h4>Hatchery & Nursery Recirculation</h4>
                    <p>High-precision laboratory-grade sampling with self-cleaning sensors to prevent biofouling and drift.</p>
                  </div>
                  <div className="monitoring-app-card">
                    <h4>Multi-Cluster Estate Management</h4>
                    <p>Centralized cloud analytics and instant emergency alarm notifications via SMS and WhatsApp.</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Downloads */}
            {activeTab === "Downloads" && (
              <div className="monitoring-card monitoring-tab-pane">
                <div className="monitoring-card-header">
                  <h3 className="monitoring-card-title">Product Documentation & Resources</h3>
                </div>
                <div className="monitoring-downloads-list">
                  <div className="monitoring-download-item">
                    <div className="monitoring-dl-icon">
                      <FaFilePdf size={28} color="#e11d48" />
                    </div>
                    <div className="monitoring-dl-info">
                      <h4>{currentSolution?.title || "Product"} - Technical Brochure (PDF)</h4>
                      <p>Complete product specifications, sensor parameters, wiring schematics, and installation guide.</p>
                    </div>
                    <a
                      href="/BROCHURE.pdf"
                      download={`${(currentSolution?.title || "Product").replace(/\s+/g, "_")}_Brochure.pdf`}
                      className="monitoring-dl-btn"
                    >
                      <FaDownload size={14} /> Download
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* 5. CALL TO ACTION RIBBON BANNER */}
      <section className="monitoring-cta-section">
        <div className="monitoring-cta-banner">
          <div className="monitoring-cta-left">
            <div className="monitoring-cta-leaf-circle">
              <FaLeaf className="monitoring-cta-leaf-icon" />
            </div>

            <div className="monitoring-cta-text-group">
              <h2 className="monitoring-cta-title">
                Healthier Fish. Smarter Farming.
              </h2>
              <p className="monitoring-cta-subtitle">
                Integrated systems. Intelligent control. A more productive tomorrow.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="monitoring-cta-btn"
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
