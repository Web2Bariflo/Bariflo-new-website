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
import "./Actautomated.css";

export default function Actautomated() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [is3DView, setIs3DView] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Default to "automated-feeder"
  const [selectedSolutionId, setSelectedSolutionId] = useState("automated-feeder");

  const currentSolution = solutionsDetails[selectedSolutionId] || null;
  const currentNavSolution = allSolutionsList.find((s) => s.id === selectedSolutionId) || allSolutionsList[0];

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
        return <TbClock className="actauto-badge-icon" />;
      case "radar":
        return <TbRadar2 className="actauto-badge-icon" />;
      case "trend":
        return <TbTrendingUp className="actauto-badge-icon" />;
      case "chart":
        return <TbChartDots className="actauto-badge-icon" />;
      case "broadcast":
        return <TbBroadcast className="actauto-badge-icon" />;
      case "monitor":
        return <FaDesktop className="actauto-badge-icon" />;
      case "cube":
        return <TbCube className="actauto-badge-icon" />;
      case "circles":
      case "puzzle":
        return <TbPuzzle className="actauto-badge-icon" />;
      case "shield":
        return <TbShieldCheck className="actauto-badge-icon" />;
      case "bolt":
        return <TbBolt className="actauto-badge-icon" />;
      default:
        return <TbCirclesRelation className="actauto-badge-icon" />;
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
    <div className="actauto-page-root">
      {/* 1. TOP NAVBAR */}
      <header className="actauto-header">
        <div className="actauto-nav-container">
          <div className="actauto-nav-left">
            <button
              type="button"
              className="actauto-back-btn"
              onClick={() => navigate("/act-aquaculture")}
              title="Back to Aquaculture"
              aria-label="Back to Aquaculture"
            >
              <FiChevronLeft size={22} />
            </button>

            <a
              href="/"
              className="actauto-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/LOGO BARIFLO CYBERNETICS 2025-03-03.png"
                alt="Bariflo Cybernetics"
                className="actauto-logo-img"
              />
            </a>
          </div>

          <nav className="actauto-nav-menu">
            <button
              type="button"
              className="actauto-nav-link"
              onClick={() => navigate("/")}
            >
              HOME
            </button>
            <div className="actauto-nav-link-wrap active">
              <button
                type="button"
                className="actauto-nav-link active"
                onClick={() => navigate("/act-aquaculture")}
              >
                INDUSTRIES
              </button>
              <div className="actauto-nav-active-bar" />
            </div>
            <button
              type="button"
              className="actauto-nav-link"
              onClick={() => navigate("/cognition")}
            >
              COGNITION
            </button>
            <button
              type="button"
              className="actauto-nav-link"
              onClick={() => navigate("/case-studies")}
            >
              IMPACT
            </button>
            <button
              type="button"
              className="actauto-nav-link"
              onClick={() => navigate("/teamMember")}
            >
              ABOUT US
            </button>
          </nav>

          <div className="actauto-nav-actions">
            {/* Search */}
            <div className="actauto-search-wrap">
              {searchOpen ? (
                <div className="actauto-search-input-box">
                  <input
                    type="text"
                    placeholder="Search systems..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button
                    type="button"
                    className="actauto-search-close"
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
                  className="actauto-search-btn"
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
              className="actauto-consultation-btn"
              onClick={() => navigate("/contactUs")}
            >
              <span>Schedule a Consultation</span>
              <FaArrowRight size={12} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="actauto-mobile-toggle"
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
              className="actauto-mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="actauto-mobile-links">
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
                  className="actauto-mobile-cta"
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
        className="actauto-hero-section"
        style={{
          backgroundImage: currentSolution
            ? `url("${currentSolution.hero.bgImage}")`
            : `url("/images/Actaqua back.png")`,
        }}
      >
        <div className="actauto-hero-bg-layer" />
        <div className="actauto-hero-container">
          <div className="actauto-hero-content">
            {/* Breadcrumbs */}
            <nav className="actauto-breadcrumbs" aria-label="Breadcrumb">
              <span
                className="actauto-bc-link"
                onClick={() => navigate("/act-aquaculture")}
              >
                Industries
              </span>
              <span className="actauto-bc-sep">&gt;</span>
              <span
                className="actauto-bc-link"
                onClick={() => navigate("/act-aquaculture")}
              >
                Aquaculture
              </span>
              <span className="actauto-bc-sep">&gt;</span>
              <span className="actauto-bc-current">
                {currentSolution ? currentSolution.hero.breadcrumb : currentNavSolution.title}
              </span>
            </nav>

            {/* Title & Subtitle */}
            <h1 className="actauto-hero-title">
              {currentSolution ? currentSolution.hero.title : currentNavSolution.title}
            </h1>
            <p className="actauto-hero-subtitle">
              {currentSolution
                ? currentSolution.hero.subtitle
                : "Advanced Smart Aquaculture System by Bariflo Cybernetics."}
            </p>

            {/* Description */}
            <p className="actauto-hero-desc">
              {currentSolution
                ? currentSolution.hero.desc
                : "AI-enabled aquaculture hardware and telemetry system engineered to optimize water quality, operational efficiency, and biomass yield."}
            </p>

            {/* Badges */}
            {currentSolution?.hero.badgesRow1 ? (
              <div className="actauto-badges-container">
                <div className="actauto-badges-row">
                  {currentSolution.hero.badgesRow1.map((b, i) => (
                    <div key={i} className="actauto-badge-pill">
                      {renderBadgeIcon(b.icon)}
                      <span>{b.text}</span>
                    </div>
                  ))}
                </div>
                <div className="actauto-badges-row">
                  {currentSolution.hero.badgesRow2.map((b, i) => (
                    <div key={i} className="actauto-badge-pill">
                      {renderBadgeIcon(b.icon)}
                      <span>{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : currentSolution ? (
              <div className="actauto-badges-row">
                {currentSolution.hero.badges.map((b, i) => (
                  <div key={i} className="actauto-badge-pill">
                    {renderBadgeIcon(b.icon)}
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* 3. SUBNAV ACTION BAR */}
      <div className="actauto-subnav-bar">
        <div className="actauto-subnav-container">
          <div className="actauto-subnav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`actauto-subnav-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="actauto-tab-indicator" />}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="actauto-quote-btn"
            onClick={() => navigate("/contactUs")}
          >
            Request a Quote <FaArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* 4. MAIN CONTENT AREA (Sidebar + Content Cards) */}
      <main className="actauto-main-section">
        <div className="actauto-layout-container">
          {/* LEFT SIDEBAR: ALL SOLUTIONS (Exact requested order) */}
          <aside className="actauto-sidebar">
            <div className="actauto-sidebar-header">
              <div className="actauto-sidebar-icon">
                <TbCube size={18} />
              </div>
              <h3>All Solutions</h3>
            </div>

            <div className="actauto-sidebar-list">
              {allSolutionsList.map((sol) => {
                const isActive = selectedSolutionId === sol.id;
                return (
                  <div
                    key={sol.id}
                    className={`actauto-sidebar-item ${isActive ? "active" : ""}`}
                    onClick={() => handleSelectSolution(sol)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="actauto-sidebar-thumb">
                      <img src={sol.image} alt={sol.title} />
                    </div>
                    <div className="actauto-sidebar-name">{sol.shortTitle || sol.title}</div>
                    <div className="actauto-sidebar-arrow">
                      <FaChevronRight size={11} />
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* RIGHT CONTENT COLUMN */}
          <div className="actauto-content-column">
            {currentSolution ? (
              activeTab === "Overview" && (
                <>
                  {/* ROW 1: System Diagram + Key Features */}
                  <div className="actauto-grid-row actauto-row-top">
                    {/* System Diagram Card */}
                    {currentSolution.diagram.isCustomCard && !is3DView ? (
                      <div className="actauto-diagram-custom-card">
                        <img
                          src={currentSolution.diagram.img}
                          alt={`${currentSolution.title} Diagram`}
                          className="actauto-diagram-full-img"
                        />
                        <button
                          type="button"
                          className="actauto-diagram-3d-hotspot"
                          onClick={() => setIs3DView(true)}
                          title="Open 3D Model View"
                        >
                          <TbCube size={15} />
                          <span>3D View</span>
                        </button>
                      </div>
                    ) : (
                      <div className="actauto-card actauto-diagram-card">
                        <div className="actauto-card-header">
                          <h3 className="actauto-card-title">{currentSolution.diagram.title}</h3>
                          <button
                            type="button"
                            className={`actauto-3d-btn ${is3DView ? "active" : ""}`}
                            onClick={() => setIs3DView(!is3DView)}
                          >
                            <TbCube size={15} />
                            <span>{is3DView ? "Diagram View" : "3D View"}</span>
                          </button>
                        </div>

                        <div className="actauto-diagram-container">
                          <div className="actauto-diagram-img-box">
                            <img
                              src={
                                is3DView
                                  ? currentSolution.diagram.render3D
                                  : currentSolution.diagram.img
                              }
                              alt={`${currentSolution.title} Diagram`}
                              className={`actauto-diagram-img ${is3DView ? "is-3d" : ""}`}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Key Features Card */}
                    <div className="actauto-card actauto-features-card">
                      <div className="actauto-card-header">
                        <h3 className="actauto-card-title">Key Features</h3>
                      </div>

                      <ul className="actauto-features-list">
                        {currentSolution.keyFeatures.map((feat, idx) => (
                          <li key={idx} className="actauto-feature-item">
                            <div className="actauto-check-circle">
                              <FaCheck size={10} />
                            </div>
                            <span className="actauto-feature-text">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ROW 2: System at a Glance + Core Operating Data */}
                  <div className="actauto-grid-row actauto-row-mid">
                    {/* System at a Glance Card */}
                    <div className="actauto-card actauto-glance-card">
                      <div className="actauto-card-header">
                        <h3 className="actauto-card-title">System at a Glance</h3>
                      </div>

                      <div className="actauto-table-wrap">
                        <table className="actauto-glance-table">
                          <tbody>
                            {currentSolution.systemGlance.map((row, idx) => (
                              <tr key={idx}>
                                <td className="actauto-glance-label">{row.label}</td>
                                <td className="actauto-glance-val">{row.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Core Operating Data Card */}
                    <div className="actauto-card actauto-data-card">
                      <div className="actauto-card-header">
                        <h3 className="actauto-card-title">Core Operating Data</h3>
                      </div>

                      <div className="actauto-metrics-grid">
                        {currentSolution.coreOperatingData.map((item, idx) => (
                          <div key={idx} className="actauto-metric-tile">
                            <div className="actauto-metric-value">{item.value}</div>
                            <div className="actauto-metric-desc">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ROW 3: Process Outcomes */}
                  <div className="actauto-card actauto-outcomes-card">
                    <div className="actauto-card-header">
                      <h3 className="actauto-card-title">Process Outcomes</h3>
                    </div>

                    <div className="actauto-outcomes-grid">
                      {currentSolution.processOutcomes.map((item, idx) => (
                        <div key={idx} className="actauto-outcome-col">
                          <div className="actauto-outcome-icon">
                            {renderOutcomeIcon(item.icon)}
                          </div>
                          <h4 className="actauto-outcome-heading">{item.title}</h4>
                          <p className="actauto-outcome-sub">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )
            ) : (
              /* For solutions without user-provided UI designs */
              <div className="actauto-card actauto-prep-card">
                <div className="actauto-prep-icon">
                  <FaInfoCircle size={36} />
                </div>
                <h3>{currentNavSolution.title}</h3>
                <p>
                  Engineering design and specifications for <strong>{currentNavSolution.title}</strong> are
                  currently in preparation. You can explore the live designs for{" "}
                  <strong>Automated Feeder</strong> and <strong>Bottom Aeration System</strong>.
                </p>
                <div className="actauto-prep-actions">
                  <button
                    type="button"
                    className="actauto-prep-btn"
                    onClick={() => setSelectedSolutionId("bottom-aeration")}
                  >
                    View Bottom Aeration System
                  </button>
                  <button
                    type="button"
                    className="actauto-prep-btn secondary"
                    onClick={() => setSelectedSolutionId("automated-feeder")}
                  >
                    View Automated Feeder
                  </button>
                </div>
              </div>
            )}

            {/* TAB: Specifications */}
            {currentSolution && activeTab === "Specifications" && (
              <div className="actauto-card actauto-tab-card">
                <div className="actauto-card-header">
                  <h3 className="actauto-card-title">Technical Specifications</h3>
                </div>
                <div className="actauto-table-wrap">
                  <table className="actauto-glance-table">
                    <tbody>
                      {currentSolution.systemGlance.map((row, idx) => (
                        <tr key={idx}>
                          <td className="actauto-glance-label">{row.label}</td>
                          <td className="actauto-glance-val">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB: Features */}
            {currentSolution && activeTab === "Features" && (
              <div className="actauto-card actauto-tab-card">
                <div className="actauto-card-header">
                  <h3 className="actauto-card-title">Key System Features</h3>
                </div>
                <div className="actauto-features-full-grid">
                  {currentSolution.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="actauto-feat-card">
                      <div className="actauto-feat-card-num">0{idx + 1}</div>
                      <div className="actauto-feat-card-title">{feat}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: Applications */}
            {currentSolution && activeTab === "Applications" && (
              <div className="actauto-card actauto-tab-card">
                <div className="actauto-card-header">
                  <h3 className="actauto-card-title">Target Applications</h3>
                </div>
                <div className="actauto-apps-grid">
                  <div className="actauto-app-box">
                    <h4>Intensive Shrimp Aquaculture</h4>
                    <p>
                      Optimized operations for Litopenaeus vannamei and Penaeus monodon grow-out
                      ponds with active biological feedback.
                    </p>
                  </div>
                  <div className="actauto-app-box">
                    <h4>Commercial Fish Farming</h4>
                    <p>
                      Increases growth rates and feed conversion ratios across Tilapia, Pangasius,
                      Sea Bass, and Carp operations.
                    </p>
                  </div>
                  <div className="actauto-app-box">
                    <h4>Hatchery &amp; Nursery Facilities</h4>
                    <p>
                      Gentle and precise automated monitoring designed specifically for sensitive
                      fry and post-larvae culture.
                    </p>
                  </div>
                  <div className="actauto-app-box">
                    <h4>Biofloc &amp; Recirculation Ponds</h4>
                    <p>
                      Continuous closed-loop automation supporting zero-water-exchange intensive
                      microbial aquaculture systems.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Downloads */}
            {currentSolution && activeTab === "Downloads" && (
              <div className="actauto-card actauto-tab-card">
                <div className="actauto-card-header">
                  <h3 className="actauto-card-title">Product Documentation</h3>
                </div>
                <div className="actauto-downloads-list">
                  <div className="actauto-download-item">
                    <div className="actauto-dl-left">
                      <FaFilePdf size={28} className="actauto-dl-pdf-icon" />
                      <div>
                        <strong>{currentSolution.title} - Official Brochure</strong>
                        <span>PDF • Complete system specifications and sizing guide (2.6 MB)</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="actauto-dl-btn"
                      onClick={() => navigate("/contactUs")}
                    >
                      <FaDownload size={13} />
                      <span>Download</span>
                    </button>
                  </div>

                  <div className="actauto-download-item">
                    <div className="actauto-dl-left">
                      <FaFilePdf size={28} className="actauto-dl-pdf-icon" />
                      <div>
                        <strong>Technical Datasheet &amp; Wiring Diagram</strong>
                        <span>PDF • Electrical diagrams, mounting templates &amp; telemetry guide (1.5 MB)</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="actauto-dl-btn"
                      onClick={() => navigate("/contactUs")}
                    >
                      <FaDownload size={13} />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* 5. CALL TO ACTION RIBBON BANNER */}
      <section className="actauto-cta-section">
        <div className="actauto-cta-banner">
          <div className="actauto-cta-left">
            <div className="actauto-cta-leaf-circle">
              <FaLeaf className="actauto-cta-leaf-icon" />
            </div>

            <div className="actauto-cta-text-group">
              <h2 className="actauto-cta-title">Healthier Fish. Smarter Farming.</h2>
              <p className="actauto-cta-subtitle">
                Integrated systems. Intelligent control. A more productive tomorrow.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="actauto-cta-btn"
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
