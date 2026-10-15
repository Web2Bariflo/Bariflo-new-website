import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./cognition.css";
import "./IntelligentETP.css";

// Icons
import {
  FaPlay,
  FaFish,
  FaChartLine,
  FaLeaf,
  FaLock,
  FaSyncAlt,
  FaBrain,
  FaUser,
  FaCamera,
  FaTemperatureHigh,
  FaTint,
  FaFlask,
  FaBolt,
  FaWater,
  FaDownload,
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaIndustry,
} from "react-icons/fa";
import {
  BiWifi,
  BiCloud,
  BiCog,
  BiBroadcast,
  BiShieldQuarter,
  BiExpandAlt,
  BiLineChart,
  BiRightArrowAlt,
} from "react-icons/bi";
import { TbLayersLinked, TbDna2, TbAtom } from "react-icons/tb";
import { GiShrimp, GiWaveSurfer, GiSprout } from "react-icons/gi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { FiRadio, FiCpu, FiMonitor, FiAlertCircle } from "react-icons/fi";
import IntelligentETP from "./IntelligentETP";

const Cognition = () => {
  const navigate = useNavigate();
  const [activeEtpTab, setActiveEtpTab] = useState("industrial");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  // 10 Parameters Monitored
  const parameters = [
    { name: "pH", icon: <FaTint /> },
    { name: "DO", icon: <TbAtom /> },
    { name: "Temperature", icon: <FaTemperatureHigh /> },
    { name: "Turbidity", icon: <FaWater /> },
    { name: "TDS / EC", icon: <FaBolt /> },
    { name: "Ammonia-N", icon: <TbDna2 /> },
    { name: "Nitrite", icon: <TbLayersLinked /> },
    { name: "Phosphate", icon: <FaFlask /> },
    { name: "Chlorophyll-a", icon: <FaLeaf /> },
    { name: "Shrimp Health (AI Vision)", icon: <FaCamera /> },
  ];

  // 5 Edge Nodes
  const edgeNodes = [
    { title: "Water Quality Edge Node", code: "001WQ" },
    { title: "Feeder Edge Node", code: "002FD" },
    { title: "Aeration Edge Node", code: "003AR" },
    { title: "Vision/Health Edge Node", code: "004VH" },
    { title: "Power Edge Node", code: "005PW" },
  ];

  // 3 Applications
  const applications = [
    {
      title: "Shrimp Farming",
      desc: "Higher survival, lower FCR, more profitable farms",
      image: "/images/cog4.jpeg",
      fallback: "/images/rectangular_ponds.jpg",
      icon: <GiShrimp />,
    },
    {
      title: "Freshwater Aquaculture",
      desc: "Optimized feeding and water quality for fish and other species",
      image: "/images/cog5.jpeg",
      fallback: "/images/aquaculture_cages.jpg",
      icon: <FaFish />,
    },
    {
      title: "Marine & Coastal Farms",
      desc: "Scalable solutions for open-water and coastal aquaculture",
      image: "/images/cog6.jpeg",
      fallback: "/images/industrial_bg.jpg",
      icon: <GiWaveSurfer />,
    },
  ];

  if (activeEtpTab === "intelligent") {
    return (
      <IntelligentETP
        activeEtpTab={activeEtpTab}
        setActiveEtpTab={setActiveEtpTab}
      />
    );
  }

  return (
    <div className="cog-page-container">
      {/* Top Navbar */}
      <header className="ietp-navbar ietp-navbar-has-subnav">
        <div className="ietp-nav-row-top">
          <div className="ietp-nav-left-wrapper">
            <button
              type="button"
              className="bariflo-back-home-btn"
              onClick={() => navigate("/")}
              title="Back to Home"
              aria-label="Back to Home"
            >
              <FaArrowLeft size={20} />
            </button>

            <a
              href="/"
              className="ietp-nav-logo"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img src="/images/bariflo_nav_logo.png" alt="Bariflo Cybernetics" />
            </a>
          </div>

          <div className="ietp-nav-center">
            <nav className="ietp-nav-menu">
              <a
                href="#industries"
                className="ietp-nav-link"
                onClick={() => navigate("/")}
              >
                INDUSTRIES <FaChevronDown size={10} />
              </a>
              <a
                href="#impact"
                className="ietp-nav-link"
                onClick={() => navigate("/")}
              >
                IMPACT <FaChevronDown size={10} />
              </a>
              <a
                href="#about"
                className="ietp-nav-link"
                onClick={() => navigate("/")}
              >
                ABOUT US
              </a>
              <a href="#cognition" className="ietp-nav-link active">
                COGNITION
              </a>
            </nav>
          </div>

          <div className="ietp-nav-actions">
            <button
              className="ietp-btn-schedule ietp-btn-schedule-big"
              onClick={() => navigate("/contactUs")}
            >
              <FaLeaf className="ietp-btn-leaf-icon" size={15} />
              <span className="ietp-btn-schedule-text">
                Schedule Strategic Discussion
              </span>{" "}
              <FaArrowRight size={13} />
            </button>

            <button
              className="ietp-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* 2 Full-width buttons under navbar */}
        <div className="fullwidth-subnav-tabs-bar">
          <button
            type="button"
            className={`fullwidth-subnav-tab ${activeEtpTab === "intelligent" ? "active" : ""}`}
            onClick={() => setActiveEtpTab("intelligent")}
          >
            <span>WASTE WATER</span>
          </button>
          <button
            type="button"
            className={`fullwidth-subnav-tab ${activeEtpTab === "industrial" ? "active" : ""}`}
            onClick={() => setActiveEtpTab("industrial")}
          >
            <span>Aquaculture</span>
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <motion.div
            className="ietp-mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <a
              href="#industries"
              className="ietp-mobile-nav-link"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/");
              }}
            >
              INDUSTRIES
            </a>
            <a
              href="#impact"
              className="ietp-mobile-nav-link"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/");
              }}
            >
              IMPACT
            </a>
            <a
              href="#about"
              className="ietp-mobile-nav-link"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/");
              }}
            >
              ABOUT US
            </a>
            <a
              href="#cognition"
              className="ietp-mobile-nav-link active"
              onClick={() => setMobileMenuOpen(false)}
            >
              COGNITION
            </a>

            {/* Aquaculture ETP & Intelligent ETP buttons shown under nav items on mobile */}
            <div className="ietp-header-tabs-group mobile-header-tabs ietp-header-tabs-big">
              <button
                className={`ietp-header-tab ietp-header-tab-big ${activeEtpTab === "industrial" ? "active" : ""}`}
                onClick={() => {
                  setActiveEtpTab("industrial");
                  setMobileMenuOpen(false);
                }}
              >
                Aquaculture
              </button>
              <button
                className={`ietp-header-tab ietp-header-tab-big ${activeEtpTab === "intelligent" ? "active" : ""}`}
                onClick={() => {
                  setActiveEtpTab("intelligent");
                  setMobileMenuOpen(false);
                }}
              >
                Intelligent ETP
              </button>
            </div>

            <div className="ietp-mobile-schedule-col">
              <button
                className="ietp-btn-schedule ietp-btn-schedule-big mobile-schedule-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/contactUs");
                }}
              >
                <FaLeaf className="ietp-btn-leaf-icon" size={15} />
                <span>Schedule Strategic Discussion</span> <FaArrowRight size={13} />
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* 1. HERO SECTION */}
      <section className="cog-hero-section">
        {/* Left Column */}
        <motion.div
          className="cog-hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="cog-hero-tag"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
            title="Back to Home"
          >
            <span>COGNITION IN ACTION</span>
            <span className="line"></span>
            <span>AQUACULTURE</span>
          </div>

          <motion.h1
            className="cog-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            CYBERNETICS FOR
            <span className="cog-hero-title-accent">AQUACULTURE</span>
          </motion.h1>

          <h3 className="cog-hero-subtitle">
            Sense. Cognize. Act. Grow. Sustainably.
          </h3>

          <p className="cog-hero-desc">
            Bariflo's Cognitive Distributed Edgeware System brings real-time
            intelligence to aquaculture farms. It senses, understands, and
            autonomously controls feeding, aeration, water quality and health
            monitoring — enabling higher survival, lower FCR and better
            productivity across pond clusters.
          </p>

          <div className="cog-hero-cta-group">
            <button
              className="cog-btn-primary"
              onClick={() => window.open("https://www.youtube.com", "_blank")}
            >
              <FaPlay size={12} /> Watch Video
            </button>
            <a
              href="/images/RENDERED IMAGES OF PRODUCTS/Recovered_BROCHUREEE.png"
              download="Bariflo-Aquaculture-Brochure"
              className="cog-btn-secondary"
            >
              <HiOutlineDocumentDownload size={18} /> Download Brochure
            </a>
          </div>
        </motion.div>

        {/* Right Column / User Healthy Ponds Image */}
        <motion.div
          className="cog-hero-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/images/healthy_ponds_hero.png"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/cog1.jpeg";
            }}
            alt="Healthy Ponds. Prosperous Tomorrow."
            className="cog-hero-healthy-ponds-img"
          />
        </motion.div>
      </section>

      {/* 2. SYSTEM ARCHITECTURE SECTION */}
      <motion.section
        className="cog-arch-section"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="cog-arch-header-top">
          <div className="cog-arch-category-tag">
            SYSTEM ARCHITECTURE <span className="tag-line"></span>
          </div>
          <div className="cog-arch-pillars-row">
            <span className="cog-arch-pillar-pill">
              <FiRadio size={14} /> Real-time
            </span>
            <span className="cog-arch-pillar-pill">
              <BiExpandAlt size={14} /> Scalable
            </span>
            <span className="cog-arch-pillar-pill">
              <BiCog size={14} /> Autonomous
            </span>
            <span className="cog-arch-pillar-pill">
              <FaLock size={12} /> Secure
            </span>
          </div>
        </div>

        <h2 className="cog-arch-main-title">
          Cognitive Distributed Edgeware System for Aquaculture
        </h2>
        <p className="cog-arch-subtitle">
          A connected network of intelligent devices working together across
          pond clusters.
        </p>

        {/* 3-Panel Architecture Visual Layout */}
        <div className="cog-arch-diagram-grid">
          {/* Panel 1: MASTER EDGE */}
          <motion.div
            className="cog-diagram-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cog-block-header master-edge-bg">
              <h4>MASTER EDGE</h4>
              <span>(Control &amp; Cognition System)</span>
            </div>
            <div className="cog-master-edge-body">
              <div className="cog-hardware-preview">
                <img
                  src="/images/cog2.jpeg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "/images/RENDERED IMAGES OF PRODUCTS/Lora_Device_Front_View-removebg-preview.png";
                  }}
                  alt="Bariflo Master Edge Board"
                  className="cog-hardware-img"
                />
                <div className="cog-hardware-overlay-badge">
                  Bariflo Cybernetics
                </div>
              </div>

              <h5 className="cog-hub-title">Central Intelligence Hub</h5>
              <p className="cog-hub-desc">
                Aggregates data, runs AI models, optimizes operations across all
                ponds.
              </p>

              <div className="cog-master-features-grid">
                <div className="cog-mf-item">
                  <div className="cog-mf-icon">
                    <BiCloud />
                  </div>
                  <span>Local AI Models</span>
                </div>
                <div className="cog-mf-item">
                  <div className="cog-mf-icon">
                    <TbLayersLinked />
                  </div>
                  <span>Data Fusion &amp; Analytics</span>
                </div>
                <div className="cog-mf-item">
                  <div className="cog-mf-icon">
                    <BiCog />
                  </div>
                  <span>Decision Engine</span>
                </div>
                <div className="cog-mf-item">
                  <div className="cog-mf-icon">
                    <BiBroadcast />
                  </div>
                  <span>Farm Coordination</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bi-directional Flow Connectors Column */}
          <div className="cog-flow-connectors-col">
            <div className="cog-flow-item">
              <span className="cog-flow-text">
                Real-time
                <br />
                Data
              </span>
              <svg className="cog-flow-arrow" viewBox="0 0 90 10" fill="none">
                <path
                  d="M 6 5 L 84 5"
                  stroke="#0066CC"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <polygon points="6,1 0,5 6,9" fill="#0066CC" />
                <polygon points="84,1 90,5 84,9" fill="#0066CC" />
              </svg>
            </div>
            <div className="cog-flow-item">
              <span className="cog-flow-text">
                System &amp;
                <br />
                Context Info
              </span>
              <svg className="cog-flow-arrow" viewBox="0 0 90 10" fill="none">
                <path
                  d="M 6 5 L 84 5"
                  stroke="#0066CC"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <polygon points="6,1 0,5 6,9" fill="#0066CC" />
                <polygon points="84,1 90,5 84,9" fill="#0066CC" />
              </svg>
            </div>
            <div className="cog-flow-item">
              <span className="cog-flow-text">
                Execution
                <br />
                Feedback
              </span>
              <svg className="cog-flow-arrow" viewBox="0 0 90 10" fill="none">
                <path
                  d="M 6 5 L 84 5"
                  stroke="#0066CC"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <polygon points="6,1 0,5 6,9" fill="#0066CC" />
                <polygon points="84,1 90,5 84,9" fill="#0066CC" />
              </svg>
            </div>
            <div className="cog-flow-item">
              <span className="cog-flow-text">
                Optimization
                <br />
                Objectives
              </span>
              <svg className="cog-flow-arrow" viewBox="0 0 90 10" fill="none">
                <path
                  d="M 6 5 L 84 5"
                  stroke="#0066CC"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <polygon points="6,1 0,5 6,9" fill="#0066CC" />
                <polygon points="84,1 90,5 84,9" fill="#0066CC" />
              </svg>
            </div>
          </div>

          {/* Panel 2: DISTRIBUTED NERVOUS SYSTEM */}
          <motion.div
            className="cog-diagram-block cog-nervous-full-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="/images/pond_cluster_distributed.jpg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/pond_cluster_isometric.jpg";
              }}
              alt="Distributed Nervous System (Edge Intelligence Nodes at Pond Level)"
              className="cog-nervous-full-img"
            />
          </motion.div>

          {/* Panel 3: CLOUD PLATFORM */}
          <motion.div
            className="cog-diagram-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="cog-block-header cloud-bg">
              <BiCloud size={18} />
              <div>
                <h4>CLOUD PLATFORM</h4>
                <span>(Analytics | Alerts | Reports)</span>
              </div>
            </div>
            <div className="cog-cloud-body">
              <div className="cog-cloud-preview-box">
                <img
                  src="/images/cog3.jpeg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/aquaai.png";
                  }}
                  alt="Cloud Analytics Dashboard"
                  className="cog-cloud-img"
                />
              </div>

              <div className="cog-cloud-features-list">
                <div className="cog-cf-item">
                  <div className="cog-cf-icon-wrap">
                    <FiMonitor />
                  </div>
                  <div className="cog-cf-text">
                    <h6>Real-time Monitoring</h6>
                    <span>Anytime, Anywhere</span>
                  </div>
                </div>

                <div className="cog-cf-item">
                  <div className="cog-cf-icon-wrap">
                    <FaBrain />
                  </div>
                  <div className="cog-cf-text">
                    <h6>AI-driven Insights</h6>
                    <span>Higher survival, Lower FCR</span>
                  </div>
                </div>

                <div className="cog-cf-item">
                  <div className="cog-cf-icon-wrap">
                    <FiAlertCircle />
                  </div>
                  <div className="cog-cf-text">
                    <h6>Alerts &amp; Recommendations</h6>
                    <span>Proactive &amp; Actionable</span>
                  </div>
                </div>

                <div className="cog-cf-item">
                  <div className="cog-cf-icon-wrap">
                    <BiBroadcast />
                  </div>
                  <div className="cog-cf-text">
                    <h6>Fleet &amp; Farm Management</h6>
                    <span>Multi-farm, Multi-site</span>
                  </div>
                </div>

                <div className="cog-cf-item">
                  <div className="cog-cf-icon-wrap">
                    <BiLineChart />
                  </div>
                  <div className="cog-cf-text">
                    <h6>Historical Analytics</h6>
                    <span>Trends, Reports &amp; Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. VALUE PROPOSITION STRIP */}
      <motion.section
        className="cog-val-strip-container"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="cog-val-strip">
          <div className="cog-val-item">
            <div className="cog-val-icon-round">
              <FaUser />
            </div>
            <div className="cog-val-item-text highlight">
              BUILT FOR MINIMAL
              <br />
              HUMAN INTERVENTION
            </div>
          </div>

          <div className="cog-val-item">
            <div className="cog-val-icon-transparent">
              <FaBrain />
            </div>
            <div className="cog-val-item-text">
              Autonomous
              <br />
              by Design
            </div>
          </div>

          <div className="cog-val-item">
            <div className="cog-val-icon-transparent">
              <FaSyncAlt />
            </div>
            <div className="cog-val-item-text">
              Adaptive &amp;
              <br />
              Resilient
            </div>
          </div>

          <div className="cog-val-item">
            <div className="cog-val-icon-transparent">
              <FaLock />
            </div>
            <div className="cog-val-item-text">
              Reliable &amp;
              <br />
              Secure
            </div>
          </div>

          <div className="cog-val-item">
            <div className="cog-val-icon-transparent">
              <FaChartLine />
            </div>
            <div className="cog-val-item-text">
              Measurable
              <br />
              Impact
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. KEY PARAMETERS MONITORED */}
      <motion.section
        className="cog-params-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="cog-params-title">KEY PARAMETERS MONITORED</div>
        <motion.div
          className="cog-params-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {parameters.map((param, index) => (
            <motion.div
              key={index}
              className="cog-param-card"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="cog-param-icon-wrap">{param.icon}</div>
              <div className="cog-param-name">{param.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 5. APPLICATIONS SECTION */}
      <motion.section
        className="cog-apps-section"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="cog-apps-header">
          <div>
            <div className="cog-apps-tag">
              APPLICATIONS <span className="tag-line"></span>
            </div>
            <h2 className="cog-apps-title">From Ponds to a Healthier Future</h2>
          </div>
          <a href="#applications" className="cog-apps-view-all">
            View All Applications{" "}
            <span className="cog-apps-view-all-circle">
              <FaArrowRight size={10} />
            </span>
          </a>
        </div>

        <div className="cog-apps-grid">
          {applications.map((app, idx) => (
            <motion.div
              key={idx}
              className="cog-app-card"
              onClick={() => navigate("/outdoorAqua")}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <img
                src={app.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = app.fallback;
                }}
                alt={app.title}
                className="cog-app-bg-img"
              />
              <div className="cog-app-overlay">
                <div className="cog-app-content-row">
                  <div className="cog-app-text-block">
                    <div className="cog-app-pill-title">
                      <span className="cog-app-pill-icon">{app.icon}</span>
                      {app.title}
                    </div>
                    <p className="cog-app-desc">{app.desc}</p>
                  </div>
                  <div className="cog-app-arrow-btn">
                    <BiRightArrowAlt />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 6. CALL TO ACTION BANNER */}
      <motion.section
        className="cog-cta-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="cog-cta-banner">
          <div className="cog-cta-left">
            <div className="cog-cta-leaf-icon">
              <FaLeaf />
            </div>
            <div className="cog-cta-text">
              <h3>Partner for Smarter, More Resilient Aquaculture</h3>
              <p>
                Let's build a healthier, more productive and sustainable
                aquaculture future with Bariflo Cybernetics.
              </p>
            </div>
          </div>
          <button
            className="cog-cta-btn"
            onClick={() => navigate("/contactUs")}
          >
            Talk to Our Experts <FaArrowRight size={12} />
          </button>
        </div>
      </motion.section>

      {/* 7. TRUSTED BY INDUSTRY LEADERS & FOOTER */}
      <motion.footer
        className="ietp-trust-footer"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="ietp-trust-footer-inner">
          <div className="ietp-trust-left-group">
            <div className="ietp-trust-label">
              TRUSTED BY
              <br />
              INDUSTRY LEADERS
            </div>

            <div className="ietp-trust-divider"></div>

            {/* Bariflo Cybernetics */}
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
              HEALTHY AQUACULTURE.
              <br />
              BRIGHTER TOMORROW.
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Cognition;
