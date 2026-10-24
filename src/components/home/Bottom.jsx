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
import "./Bottom.css";

export default function Bottom() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [is3DView, setIs3DView] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Selected solution: defaults to "bottom-aeration"
  const [selectedSolutionId, setSelectedSolutionId] = useState("bottom-aeration");

  const currentSolution = solutionsDetails[selectedSolutionId] || null;
  const currentNavSolution = allSolutionsList.find((s) => s.id === selectedSolutionId) || allSolutionsList.find((s) => s.id === "bottom-aeration") || allSolutionsList[0];

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
        return <TbClock className="bottom-badge-icon" />;
      case "radar":
        return <TbRadar2 className="bottom-badge-icon" />;
      case "trend":
        return <TbTrendingUp className="bottom-badge-icon" />;
      case "chart":
        return <TbChartDots className="bottom-badge-icon" />;
      case "broadcast":
        return <TbBroadcast className="bottom-badge-icon" />;
      case "monitor":
        return <FaDesktop className="bottom-badge-icon" />;
      case "cube":
        return <TbCube className="bottom-badge-icon" />;
      case "circles":
      case "puzzle":
        return <TbPuzzle className="bottom-badge-icon" />;
      case "shield":
        return <TbShieldCheck className="bottom-badge-icon" />;
      case "bolt":
        return <TbBolt className="bottom-badge-icon" />;
      default:
        return <TbCirclesRelation className="bottom-badge-icon" />;
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
    <div className="bottom-page-root">
      {/* 1. TOP NAVBAR */}
      <header className="bottom-header">
        <div className="bottom-nav-container">
          <div className="bottom-nav-left">
            <button
              type="button"
              className="bottom-back-btn"
              onClick={() => navigate("/act-aquaculture")}
              title="Back to Aquaculture"
              aria-label="Back to Aquaculture"
            >
              <FiChevronLeft size={22} />
            </button>

            <a
              href="/"
              className="bottom-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/LOGO BARIFLO CYBERNETICS 2025-03-03.png"
                alt="Bariflo Cybernetics"
                className="bottom-logo-img"
              />
            </a>
          </div>

          <nav className="bottom-nav-menu">
            <button
              type="button"
              className="bottom-nav-link"
              onClick={() => navigate("/")}
            >
              HOME
            </button>
            <div className="bottom-nav-link-wrap active">
              <button
                type="button"
                className="bottom-nav-link active"
                onClick={() => navigate("/act-aquaculture")}
              >
                INDUSTRIES
              </button>
              <div className="bottom-nav-active-bar" />
            </div>
            <button
              type="button"
              className="bottom-nav-link"
              onClick={() => navigate("/cognition")}
            >
              COGNITION
            </button>
            <button
              type="button"
              className="bottom-nav-link"
              onClick={() => navigate("/case-studies")}
            >
              IMPACT
            </button>
            <button
              type="button"
              className="bottom-nav-link"
              onClick={() => navigate("/teamMember")}
            >
              ABOUT US
            </button>
          </nav>

          <div className="bottom-nav-actions">
            {/* Search */}
            <div className="bottom-search-wrap">
              {searchOpen ? (
                <div className="bottom-search-input-box">
                  <input
                    type="text"
                    placeholder="Search systems..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button
                    type="button"
                    className="bottom-search-close"
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
                  className="bottom-search-btn"
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
              className="bottom-consultation-btn"
              onClick={() => navigate("/contactUs")}
            >
              <span>Schedule a Consultation</span>
              <FaArrowRight size={12} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="bottom-mobile-toggle"
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
              className="bottom-mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="bottom-mobile-links">
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
                  className="bottom-mobile-cta"
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

      {/* 2. HERO / HEADER CARD (Pixel-perfect match to screenshot) */}
      <section
        className="bottom-hero-section"
        style={{
          backgroundImage: currentSolution
            ? `url("${currentSolution.hero.bgImage}")`
            : `url("/images/Bottomback.png")`,
        }}
      >
        <div className="bottom-hero-bg-overlay" />
        <div className="bottom-hero-container">
          <div className="bottom-hero-content">
            {/* Breadcrumbs */}
            <nav className="bottom-breadcrumbs" aria-label="Breadcrumb">
              <span
                className="bottom-bc-link"
                onClick={() => navigate("/act-aquaculture")}
              >
                Industries
              </span>
              <span className="bottom-bc-sep">&gt;</span>
              <span
                className="bottom-bc-link"
                onClick={() => navigate("/act-aquaculture")}
              >
                Aquaculture
              </span>
              <span className="bottom-bc-sep">&gt;</span>
              <span className="bottom-bc-current">
                {currentSolution ? currentSolution.hero.breadcrumb : currentNavSolution.title}
              </span>
            </nav>

            {/* Title & Subtitle */}
            <h1 className="bottom-hero-title">
              {currentSolution ? currentSolution.hero.title : currentNavSolution.title}
            </h1>
            <p className="bottom-hero-subtitle">
              {currentSolution
                ? currentSolution.hero.subtitle
                : "Advanced Smart Aquaculture System by Bariflo Cybernetics."}
            </p>

            {/* Description */}
            <p className="bottom-hero-desc">
              {currentSolution
                ? currentSolution.hero.desc
                : "AI-enabled aquaculture hardware and telemetry system engineered to optimize water quality, operational efficiency, and biomass yield."}
            </p>

            {/* Badges (exact 2 rows matching screenshot for Bottom Aeration) */}
            {currentSolution?.hero.badgesRow1 ? (
              <div className="bottom-badges-container">
                <div className="bottom-badges-row">
                  {currentSolution.hero.badgesRow1.map((b, i) => (
                    <div key={i} className="bottom-badge-pill">
                      {renderBadgeIcon(b.icon)}
                      <span>{b.text}</span>
                    </div>
                  ))}
                </div>
                <div className="bottom-badges-row">
                  {currentSolution.hero.badgesRow2.map((b, i) => (
                    <div key={i} className="bottom-badge-pill">
                      {renderBadgeIcon(b.icon)}
                      <span>{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : currentSolution ? (
              <div className="bottom-badges-row">
                {currentSolution.hero.badges.map((b, i) => (
                  <div key={i} className="bottom-badge-pill">
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
      <div className="bottom-subnav-bar">
        <div className="bottom-subnav-container">
          <div className="bottom-subnav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`bottom-subnav-tab ${
                  activeTab === tab ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="bottom-tab-indicator" />}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="bottom-quote-btn"
            onClick={() => navigate("/contactUs")}
          >
            Request a Quote <FaArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* 4. MAIN CONTENT AREA (Sidebar + Content Cards) */}
      <main className="bottom-main-section">
        <div className="bottom-layout-container">
          {/* LEFT SIDEBAR: ALL SOLUTIONS (Requested Order) */}
          <aside className="bottom-sidebar">
            <div className="bottom-sidebar-header">
              <div className="bottom-sidebar-icon">
                <TbCube size={18} />
              </div>
              <h3>All Solutions</h3>
            </div>

            <div className="bottom-sidebar-list">
              {allSolutionsList.map((sol) => {
                const isActive = selectedSolutionId === sol.id;
                return (
                  <div
                    key={sol.id}
                    className={`bottom-sidebar-item ${isActive ? "active" : ""}`}
                    onClick={() => handleSelectSolution(sol)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="bottom-sidebar-thumb">
                      <img src={sol.image} alt={sol.title} />
                    </div>
                    <div className="bottom-sidebar-name">{sol.shortTitle || sol.title}</div>
                    <div className="bottom-sidebar-arrow">
                      <FaChevronRight size={11} />
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* RIGHT CONTENT COLUMN */}
          <div className="bottom-content-column">
            {currentSolution ? (
              activeTab === "Overview" && (
                <>
                  {/* ROW 1: System Diagram + Key Features */}
                  <div className="bottom-grid-row bottom-row-top">
                    {/* System Diagram Card (Exact match to design with interactive 3D View hotspot) */}
                    {currentSolution.diagram.isCustomCard && !is3DView ? (
                      <div className="bottom-diagram-card-wrapper">
                        <img
                          src={currentSolution.diagram.img}
                          alt={`${currentSolution.title} Diagram`}
                          className="bottom-diagram-full-img"
                        />
                        {/* Clickable 3D View button hotspot over the image's 3D View button */}
                        <button
                          type="button"
                          className="bottom-diagram-3d-hotspot"
                          onClick={() => setIs3DView(true)}
                          title="Open 3D Model View"
                          aria-label="Open 3D Model View"
                        >
                          <TbCube size={15} />
                          <span>3D View</span>
                        </button>
                      </div>
                    ) : (
                      <div className="bottom-card bottom-diagram-card">
                        <div className="bottom-card-header">
                          <h3 className="bottom-card-title">{currentSolution.diagram.title}</h3>
                          <button
                            type="button"
                            className={`bottom-3d-btn ${is3DView ? "active" : ""}`}
                            onClick={() => setIs3DView(!is3DView)}
                          >
                            <TbCube size={15} />
                            <span>{is3DView ? "Diagram View" : "3D View"}</span>
                          </button>
                        </div>

                        <div className="bottom-diagram-container">
                          <div className="bottom-diagram-img-box">
                            <img
                              src={
                                is3DView
                                  ? currentSolution.diagram.render3D
                                  : currentSolution.diagram.img
                              }
                              alt={`${currentSolution.title} Diagram`}
                              className={`bottom-diagram-img ${is3DView ? "is-3d" : ""}`}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Key Features Card */}
                    <div className="bottom-card bottom-features-card">
                      <div className="bottom-card-header">
                        <h3 className="bottom-card-title">Key Features</h3>
                      </div>

                      <ul className="bottom-features-list">
                        {currentSolution.keyFeatures.map((feat, idx) => (
                          <li key={idx} className="bottom-feature-item">
                            <div className="bottom-check-circle">
                              <FaCheck size={10} />
                            </div>
                            <span className="bottom-feature-text">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ROW 2: System at a Glance + Core Operating Data */}
                  <div className="bottom-grid-row bottom-row-mid">
                    {/* System at a Glance Card */}
                    <div className="bottom-card bottom-glance-card">
                      <div className="bottom-card-header">
                        <h3 className="bottom-card-title">System at a Glance</h3>
                      </div>

                      <div className="bottom-table-wrap">
                        <table className="bottom-glance-table">
                          <tbody>
                            {currentSolution.systemGlance.map((row, idx) => (
                              <tr key={idx}>
                                <td className="bottom-glance-label">{row.label}</td>
                                <td className="bottom-glance-val">{row.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Core Operating Data Card */}
                    <div className="bottom-card bottom-data-card">
                      <div className="bottom-card-header">
                        <h3 className="bottom-card-title">Core Operating Data</h3>
                      </div>

                      <div className="bottom-metrics-grid">
                        {currentSolution.coreOperatingData.map((item, idx) => (
                          <div key={idx} className="bottom-metric-tile">
                            <div className="bottom-metric-value">{item.value}</div>
                            <div className="bottom-metric-desc">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ROW 3: Process Outcomes */}
                  <div className="bottom-card bottom-outcomes-card">
                    <div className="bottom-card-header">
                      <h3 className="bottom-card-title">Process Outcomes</h3>
                    </div>

                    <div className="bottom-outcomes-grid">
                      {currentSolution.processOutcomes.map((item, idx) => (
                        <div key={idx} className="bottom-outcome-col">
                          <div className="bottom-outcome-icon">
                            {renderOutcomeIcon(item.icon)}
                          </div>
                          <h4 className="bottom-outcome-heading">{item.title}</h4>
                          <p className="bottom-outcome-sub">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )
            ) : (
              /* For other solutions without dedicated custom design yet */
              <div className="bottom-card bottom-prep-card">
                <div className="bottom-prep-icon">
                  <FaInfoCircle size={36} />
                </div>
                <h3>{currentNavSolution.title}</h3>
                <p>
                  Engineering design and specifications for <strong>{currentNavSolution.title}</strong> are
                  currently in preparation. You can explore the live designs for{" "}
                  <strong>Automated Feeder</strong> and <strong>Bottom Aeration System</strong>.
                </p>
                <div className="bottom-prep-actions">
                  <button
                    type="button"
                    className="bottom-prep-btn"
                    onClick={() => setSelectedSolutionId("bottom-aeration")}
                  >
                    View Bottom Aeration System
                  </button>
                  <button
                    type="button"
                    className="bottom-prep-btn secondary"
                    onClick={() => setSelectedSolutionId("automated-feeder")}
                  >
                    View Automated Feeder
                  </button>
                </div>
              </div>
            )}

            {/* TAB: Specifications */}
            {currentSolution && activeTab === "Specifications" && (
              <div className="bottom-card bottom-tab-card">
                <div className="bottom-card-header">
                  <h3 className="bottom-card-title">Technical Specifications</h3>
                </div>
                <div className="bottom-table-wrap">
                  <table className="bottom-glance-table">
                    <tbody>
                      {currentSolution.systemGlance.map((row, idx) => (
                        <tr key={idx}>
                          <td className="bottom-glance-label">{row.label}</td>
                          <td className="bottom-glance-val">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB: Features */}
            {currentSolution && activeTab === "Features" && (
              <div className="bottom-card bottom-tab-card">
                <div className="bottom-card-header">
                  <h3 className="bottom-card-title">Key System Features</h3>
                </div>
                <div className="bottom-features-full-grid">
                  {currentSolution.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="bottom-feat-card">
                      <div className="bottom-feat-card-num">0{idx + 1}</div>
                      <div className="bottom-feat-card-title">{feat}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: Applications */}
            {currentSolution && activeTab === "Applications" && (
              <div className="bottom-card bottom-tab-card">
                <div className="bottom-card-header">
                  <h3 className="bottom-card-title">Target Applications</h3>
                </div>
                <div className="bottom-apps-grid">
                  <div className="bottom-app-box">
                    <h4>Intensive Shrimp Aquaculture</h4>
                    <p>
                      Continuous biological monitoring and automation specifically engineered for
                      high-density Litopenaeus vannamei and Penaeus monodon culture.
                    </p>
                  </div>
                  <div className="bottom-app-box">
                    <h4>Commercial Fish Farming</h4>
                    <p>
                      Prevents thermal and chemical stratification across grow-out ponds,
                      accelerating metabolic rate and feed conversion efficiency.
                    </p>
                  </div>
                  <div className="bottom-app-box">
                    <h4>Nursery &amp; Hatchery Ponds</h4>
                    <p>
                      Provides gentle, uniform control and monitoring without destructive shear
                      stress on delicate post-larvae and fry.
                    </p>
                  </div>
                  <div className="bottom-app-box">
                    <h4>Biofloc &amp; Intensive Culture</h4>
                    <p>
                      Maintains microbial balance and environmental stability in zero-exchange
                      intensive aquaculture systems.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Downloads */}
            {currentSolution && activeTab === "Downloads" && (
              <div className="bottom-card bottom-tab-card">
                <div className="bottom-card-header">
                  <h3 className="bottom-card-title">Product Documentation</h3>
                </div>
                <div className="bottom-downloads-list">
                  <div className="bottom-download-item">
                    <div className="bottom-dl-left">
                      <FaFilePdf size={28} className="bottom-dl-pdf-icon" />
                      <div>
                        <strong>{currentSolution.title} - Official Brochure</strong>
                        <span>PDF • Complete system specifications and sizing guide (2.8 MB)</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="bottom-dl-btn"
                      onClick={() => navigate("/contactUs")}
                    >
                      <FaDownload size={13} />
                      <span>Download</span>
                    </button>
                  </div>

                  <div className="bottom-download-item">
                    <div className="bottom-dl-left">
                      <FaFilePdf size={28} className="bottom-dl-pdf-icon" />
                      <div>
                        <strong>Technical Datasheet &amp; Wiring Diagram</strong>
                        <span>PDF • Electrical diagrams, mounting templates &amp; telemetry guide (1.4 MB)</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="bottom-dl-btn"
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

      {/* 5. CALL TO ACTION BANNER */}
      <section className="bottom-cta-section">
        <div className="bottom-cta-banner">
          <div className="bottom-cta-left">
            <div className="bottom-cta-leaf-circle">
              <FaLeaf className="bottom-cta-leaf-icon" />
            </div>

            <div className="bottom-cta-text-group">
              <h2 className="bottom-cta-title">
                Healthier Fish. Smarter Farming.
              </h2>
              <p className="bottom-cta-subtitle">
                Integrated systems. Intelligent control. A more productive tomorrow.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="bottom-cta-btn"
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
