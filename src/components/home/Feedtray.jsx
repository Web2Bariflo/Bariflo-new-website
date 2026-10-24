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
  FaClock,
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
  TbPuzzle,
  TbDroplet,
} from "react-icons/tb";
import { FiChevronLeft } from "react-icons/fi";
import { allSolutionsList, solutionsDetails } from "../../data/aquacultureSolutionsData";
import "./Feedtray.css";

export default function Feedtray() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [is3DView, setIs3DView] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Default to "feed-tray"
  const [selectedSolutionId, setSelectedSolutionId] = useState("feed-tray");

  const currentSolution = solutionsDetails[selectedSolutionId] || solutionsDetails["feed-tray"];
  const currentNavSolution = allSolutionsList.find((s) => s.id === selectedSolutionId) || allSolutionsList.find((s) => s.id === "feed-tray") || allSolutionsList[0];

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
        return <TbClock className="feedtray-badge-icon" />;
      case "radar":
        return <TbRadar2 className="feedtray-badge-icon" />;
      case "trend":
        return <TbTrendingUp className="feedtray-badge-icon" />;
      case "chart":
        return <TbChartDots className="feedtray-badge-icon" />;
      case "broadcast":
        return <TbBroadcast className="feedtray-badge-icon" />;
      case "monitor":
        return <FaDesktop className="feedtray-badge-icon" />;
      case "cube":
        return <TbCube className="feedtray-badge-icon" />;
      case "circles":
      case "puzzle":
        return <TbPuzzle className="feedtray-badge-icon" />;
      case "bolt":
        return <TbBolt className="feedtray-badge-icon" />;
      case "shield":
        return <TbShieldCheck className="feedtray-badge-icon" />;
      default:
        return <TbCirclesRelation className="feedtray-badge-icon" />;
    }
  };

  const renderOutcomeIcon = (icon) => {
    switch (icon) {
      case "fish":
        return <FaFish size={26} />;
      case "cogs":
        return <FaCogs size={26} />;
      case "leaf":
        return <FaLeaf size={26} />;
      case "shield":
        return <TbShieldCheck size={28} />;
      case "water":
      case "droplet":
        return <TbDroplet size={28} />;
      case "radar":
        return <TbRadar2 size={28} />;
      case "monitor":
      case "desktop":
        return <FaDesktop size={26} />;
      case "chart":
      default:
        return <FaChartLine size={26} />;
    }
  };

  return (
    <div className="feedtray-page-root">
      {/* 1. TOP NAVBAR */}
      <header className="feedtray-header">
        <div className="feedtray-nav-container">
          <div className="feedtray-nav-left">
            <button
              type="button"
              className="feedtray-back-btn"
              onClick={() => navigate("/act-aquaculture")}
              title="Back to Aquaculture"
              aria-label="Back to Aquaculture"
            >
              <FiChevronLeft size={22} />
            </button>

            <a
              href="/"
              className="feedtray-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/LOGO BARIFLO CYBERNETICS 2025-03-03.png"
                alt="Bariflo Cybernetics"
                className="feedtray-logo-img"
              />
            </a>
          </div>

          <nav className="feedtray-nav-menu">
            <button
              type="button"
              className="feedtray-nav-link"
              onClick={() => navigate("/")}
            >
              HOME
            </button>
            <div className="feedtray-nav-link-wrap active">
              <button
                type="button"
                className="feedtray-nav-link active"
                onClick={() => navigate("/act-aquaculture")}
              >
                INDUSTRIES
              </button>
              <div className="feedtray-nav-active-bar" />
            </div>
            <button
              type="button"
              className="feedtray-nav-link"
              onClick={() => navigate("/cognition")}
            >
              COGNITION
            </button>
            <button
              type="button"
              className="feedtray-nav-link"
              onClick={() => navigate("/case-studies")}
            >
              IMPACT
            </button>
            <button
              type="button"
              className="feedtray-nav-link"
              onClick={() => navigate("/teamMember")}
            >
              ABOUT US
            </button>
          </nav>

          <div className="feedtray-nav-actions">
            {/* Search */}
            <div className="feedtray-search-wrap">
              {searchOpen ? (
                <div className="feedtray-search-input-box">
                  <input
                    type="text"
                    placeholder="Search systems..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button
                    type="button"
                    className="feedtray-search-close"
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
                  className="feedtray-search-btn"
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
              className="feedtray-consultation-btn"
              onClick={() => navigate("/contactUs")}
            >
              <span>Schedule a Consultation</span>
              <FaArrowRight size={12} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="feedtray-mobile-toggle"
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
              className="feedtray-mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="feedtray-mobile-links">
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
                  className="feedtray-mobile-cta"
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
        className="feedtray-hero-section"
        style={{
          backgroundImage: `url("${currentSolution?.hero?.bgImage || "/images/Feedtrayback.png"}")`,
        }}
      >
        <div className="feedtray-hero-bg-layer" />
        <div className="feedtray-hero-container">
          <div className="feedtray-hero-content">
            {/* Breadcrumbs */}
            <nav className="feedtray-breadcrumbs" aria-label="Breadcrumb">
              <span
                className="feedtray-bc-link"
                onClick={() => navigate("/act-aquaculture")}
              >
                Industries
              </span>
              <span className="feedtray-bc-sep">&gt;</span>
              <span
                className="feedtray-bc-link"
                onClick={() => navigate("/act-aquaculture")}
              >
                Aquaculture
              </span>
              <span className="feedtray-bc-sep">&gt;</span>
              <span className="feedtray-bc-current">
                {currentSolution?.hero?.breadcrumb?.includes(">")
                  ? currentSolution.hero.breadcrumb.split(">").pop().trim()
                  : currentSolution?.title || "Intelligent Feed Tray System"}
              </span>
            </nav>

            {/* Title & Subtitle */}
            <h1 className="feedtray-hero-title">
              {currentSolution?.hero?.title || "Intelligent Feed Tray System"}
            </h1>
            <p className="feedtray-hero-subtitle">
              {currentSolution?.hero?.subtitle ||
                "Automated Sampling. Real-time Monitoring. Data-driven Feeding."}
            </p>

            {/* Description */}
            <p className="feedtray-hero-desc">
              {currentSolution?.hero?.desc ||
                "AI-enabled feed tray system with automated sampling, image-based feed estimation and integration with water quality and feeding control. Enables precise feed management, reduces feed waste and improves fish/shrimp growth and survival."}
            </p>

            {/* Badges in Two Rows matching Screenshot */}
            <div className="feedtray-badges-container">
              {currentSolution?.hero?.badgesRow1 && (
                <div className="feedtray-badges-row">
                  {currentSolution.hero.badgesRow1.map((b, i) => (
                    <div key={i} className="feedtray-badge-pill">
                      {renderBadgeIcon(b.icon)}
                      <span>{b.text}</span>
                    </div>
                  ))}
                </div>
              )}
              {currentSolution?.hero?.badgesRow2 && (
                <div className="feedtray-badges-row">
                  {currentSolution.hero.badgesRow2.map((b, i) => (
                    <div key={i} className="feedtray-badge-pill">
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
      <div className="feedtray-subnav-bar">
        <div className="feedtray-subnav-container">
          <div className="feedtray-subnav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`feedtray-subnav-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="feedtray-tab-indicator" />}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="feedtray-quote-btn"
            onClick={() => navigate("/contactUs")}
          >
            Request a Quote <FaArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* 4. MAIN CONTENT AREA (Sidebar + Content Cards) */}
      <main className="feedtray-main-section">
        <div className="feedtray-layout-container">
          {/* LEFT SIDEBAR: ALL SOLUTIONS */}
          <aside className="feedtray-sidebar">
            <div className="feedtray-sidebar-header">
              <div className="feedtray-sidebar-icon">
                <TbCube size={18} />
              </div>
              <h3>All Solutions</h3>
            </div>

            <div className="feedtray-sidebar-list">
              {allSolutionsList.map((sol) => {
                const isActive = selectedSolutionId === sol.id;
                return (
                  <div
                    key={sol.id}
                    className={`feedtray-sidebar-item ${isActive ? "active" : ""}`}
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
                    <div className="feedtray-sidebar-thumb">
                      <img
                        src={sol.image}
                        alt={sol.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/Feedtraysystem.png";
                        }}
                      />
                    </div>
                    <div className="feedtray-sidebar-name">
                      {sol.shortTitle || sol.title}
                    </div>
                    <div className="feedtray-sidebar-arrow">
                      <FaChevronRight size={11} />
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* RIGHT CONTENT COLUMN */}
          <div className="feedtray-content-column">
            {currentSolution && activeTab === "Overview" && (
              <>
                {/* ROW 1: System Diagram + Key Features */}
                <div className="feedtray-grid-row feedtray-row-top">
                  {/* System Diagram Card with interactive 3D View hotspot */}
                  {currentSolution.diagram?.isCustomCard && !is3DView ? (
                    <div className="feedtray-diagram-card-wrapper">
                      <img
                        src={currentSolution.diagram.img}
                        alt={`${currentSolution.title} Diagram`}
                        className="feedtray-diagram-full-img"
                      />
                      {/* Clickable 3D View button hotspot over the image's 3D View button */}
                      <button
                        type="button"
                        className="feedtray-diagram-3d-hotspot"
                        onClick={() => setIs3DView(true)}
                        title="Open 3D Model View"
                        aria-label="Open 3D Model View"
                      >
                        <TbCube size={15} />
                        <span>3D View</span>
                      </button>
                    </div>
                  ) : (
                    <div className="feedtray-card feedtray-diagram-card">
                      <div className="feedtray-card-header">
                        <h3 className="feedtray-card-title">
                          {currentSolution.diagram?.title || "System Diagram"}
                        </h3>
                        <button
                          type="button"
                          className={`feedtray-3d-btn ${is3DView ? "active" : ""}`}
                          onClick={() => setIs3DView(!is3DView)}
                        >
                          <TbCube size={15} />
                          <span>{is3DView ? "Diagram View" : "3D View"}</span>
                        </button>
                      </div>

                      <div className="feedtray-diagram-container">
                        <div className="feedtray-diagram-img-box">
                          <img
                            src={
                              is3DView
                                ? currentSolution.diagram.render3D
                                : currentSolution.diagram.img
                            }
                            alt={`${currentSolution.title} Diagram`}
                            className={`feedtray-diagram-img ${is3DView ? "is-3d" : ""}`}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Key Features Card */}
                  <div className="feedtray-card feedtray-features-card">
                    <div className="feedtray-card-header">
                      <h3 className="feedtray-card-title">Key Features</h3>
                    </div>

                    <ul className="feedtray-features-list">
                      {currentSolution.keyFeatures?.map((feat, idx) => (
                        <li key={idx} className="feedtray-feature-item">
                          <div className="feedtray-check-circle">
                            <FaCheck size={10} />
                          </div>
                          <span className="feedtray-feature-text">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ROW 2: System at a Glance + Core Operating Data */}
                <div className="feedtray-grid-row feedtray-row-mid">
                  {/* System at a Glance Card */}
                  <div className="feedtray-card feedtray-glance-card">
                    <div className="feedtray-card-header">
                      <h3 className="feedtray-card-title">System at a Glance</h3>
                    </div>

                    <div className="feedtray-table-wrap">
                      <table className="feedtray-glance-table">
                        <tbody>
                          {currentSolution.systemGlance?.map((row, idx) => (
                            <tr key={idx}>
                              <td className="feedtray-glance-label">{row.label}</td>
                              <td className="feedtray-glance-val">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Core Operating Data Card */}
                  <div className="feedtray-card feedtray-data-card">
                    <div className="feedtray-card-header">
                      <h3 className="feedtray-card-title">Core Operating Data</h3>
                    </div>

                    <div className="feedtray-metrics-grid">
                      {currentSolution.coreOperatingData?.map((item, idx) => (
                        <div key={idx} className="feedtray-metric-tile">
                          <div className="feedtray-metric-value">{item.value}</div>
                          <div className="feedtray-metric-desc">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ROW 3: Process Outcomes */}
                <div className="feedtray-card feedtray-outcomes-card">
                  <div className="feedtray-card-header">
                    <h3 className="feedtray-card-title">Process Outcomes</h3>
                  </div>

                  <div className="feedtray-outcomes-grid">
                    {currentSolution.processOutcomes?.map((item, idx) => (
                      <div key={idx} className="feedtray-outcome-col">
                        <div className="feedtray-outcome-icon">
                          {renderOutcomeIcon(item.icon)}
                        </div>
                        <h4 className="feedtray-outcome-heading">{item.title}</h4>
                        <p className="feedtray-outcome-sub">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* TAB: Specifications */}
            {activeTab === "Specifications" && (
              <div className="feedtray-card feedtray-tab-pane">
                <div className="feedtray-card-header">
                  <h3 className="feedtray-card-title">Technical Specifications</h3>
                </div>
                <div className="feedtray-table-wrap">
                  <table className="feedtray-glance-table">
                    <tbody>
                      {currentSolution.systemGlance?.map((row, idx) => (
                        <tr key={idx}>
                          <td className="feedtray-glance-label">{row.label}</td>
                          <td className="feedtray-glance-val">{row.value}</td>
                        </tr>
                      ))}
                      {currentSolution.coreOperatingData?.map((row, idx) => (
                        <tr key={`core-${idx}`}>
                          <td className="feedtray-glance-label">{row.desc}</td>
                          <td className="feedtray-glance-val">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB: Features */}
            {activeTab === "Features" && (
              <div className="feedtray-card feedtray-tab-pane">
                <div className="feedtray-card-header">
                  <h3 className="feedtray-card-title">Comprehensive Features</h3>
                </div>
                <ul className="feedtray-features-list">
                  {currentSolution.keyFeatures?.map((feat, idx) => (
                    <li key={idx} className="feedtray-feature-item">
                      <div className="feedtray-check-circle">
                        <FaCheck size={10} />
                      </div>
                      <span className="feedtray-feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* TAB: Applications */}
            {activeTab === "Applications" && (
              <div className="feedtray-card feedtray-tab-pane">
                <div className="feedtray-card-header">
                  <h3 className="feedtray-card-title">Target Applications</h3>
                </div>
                <div className="feedtray-applications-grid">
                  <div className="feedtray-app-card">
                    <h4>Shrimp Grow-out Ponds</h4>
                    <p>Precise real-time monitoring of feed trays to calculate satiation rate and prevent overfeeding in Vannamei ponds.</p>
                  </div>
                  <div className="feedtray-app-card">
                    <h4>High-Density Fish Aquaculture</h4>
                    <p>Automated sampling and vision analytics for tilapia, pangasius, sea bass, and carp culture basins.</p>
                  </div>
                  <div className="feedtray-app-card">
                    <h4>Nursery & Hatchery Facilities</h4>
                    <p>Delicate feeding control and early observation of animal appetite vigor and health symptoms.</p>
                  </div>
                  <div className="feedtray-app-card">
                    <h4>Multi-Pond Commercial Clusters</h4>
                    <p>Seamless IoT telemetry and automated report consolidation across hundreds of hectares.</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Downloads */}
            {activeTab === "Downloads" && (
              <div className="feedtray-card feedtray-tab-pane">
                <div className="feedtray-card-header">
                  <h3 className="feedtray-card-title">Product Documentation & Resources</h3>
                </div>
                <div className="feedtray-downloads-list">
                  <div className="feedtray-download-item">
                    <div className="feedtray-dl-icon">
                      <FaFilePdf size={28} color="#e11d48" />
                    </div>
                    <div className="feedtray-dl-info">
                      <h4>{currentSolution?.title || "Product"} - Product Brochure (PDF)</h4>
                      <p>Complete product specifications, dimensions, wiring diagrams, and deployment guide.</p>
                    </div>
                    <a
                      href="/BROCHURE.pdf"
                      download={`${(currentSolution?.title || "Product").replace(/\s+/g, "_")}_Brochure.pdf`}
                      className="feedtray-dl-btn"
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
      <section className="feedtray-cta-section">
        <div className="feedtray-cta-banner">
          <div className="feedtray-cta-left">
            <div className="feedtray-cta-leaf-circle">
              <FaLeaf className="feedtray-cta-leaf-icon" />
            </div>

            <div className="feedtray-cta-text-group">
              <h2 className="feedtray-cta-title">
                Healthier Fish. Smarter Farming.
              </h2>
              <p className="feedtray-cta-subtitle">
                Integrated systems. Intelligent control. A more productive tomorrow.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="feedtray-cta-btn"
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
