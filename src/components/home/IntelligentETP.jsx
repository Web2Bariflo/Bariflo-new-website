import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./IntelligentETP.css";

// React Icons
import {
  FaPlay,
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
  FaLeaf,
  FaBars,
  FaTimes,
  FaFish,
  FaIndustry,
} from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { BiRightArrowAlt } from "react-icons/bi";

const IntelligentETP = ({ activeEtpTab, setActiveEtpTab }) => {
  const navigate = useNavigate();
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

  // 10 Key Parameters Monitored with exact screenshot vector icons
  const parameters = [
    {
      name: "pH",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3C8.5 7.5 6 11.5 6 15a6 6 0 0 0 12 0c0-3.5-2.5-7.5-6-12Z" />
          <path d="M12 11v6" />
        </svg>
      ),
    },
    {
      name: "Flow",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12h5" />
          <path d="M16 12h5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 8v8" />
          <path d="M9 12l-2-2m2 2l-2 2" />
          <path d="M19 10l2 2-2 2" />
        </svg>
      ),
    },
    {
      name: "COD",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M12 12l3-3" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <path d="M8 12a4 4 0 0 1 4-4" />
        </svg>
      ),
    },
    {
      name: "TSS",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <line x1="9" y1="8" x2="9.01" y2="8" strokeWidth="2.5" />
          <line x1="15" y1="8" x2="15.01" y2="8" strokeWidth="2.5" />
          <line x1="12" y1="12" x2="12.01" y2="12" strokeWidth="2.5" />
          <line x1="9" y1="16" x2="9.01" y2="16" strokeWidth="2.5" />
          <line x1="15" y1="16" x2="15.01" y2="16" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      name: "TDS / EC",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L4 14h7l-2 8 10-12h-7l2-8z" />
        </svg>
      ),
    },
    {
      name: "ORP",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="4"
            transform="rotate(-30 12 12)"
          />
        </svg>
      ),
    },
    {
      name: "DO",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="14" r="4" />
          <circle cx="16" cy="11" r="5" />
          <path d="M12 9a2 2 0 0 1 2 2" />
        </svg>
      ),
    },
    {
      name: "Oil & Grease",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 4C9 8 7 11 7 14a5 5 0 0 0 10 0c0-3-2-6-5-10Z" />
          <path d="M4 20c2-1 4-1 6 0s4 1 6 0 4-1 4 0" />
        </svg>
      ),
    },
    {
      name: "Ammonia-N",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <circle cx="6" cy="7" r="2" />
          <circle cx="18" cy="7" r="2" />
          <circle cx="12" cy="19" r="2" />
          <line x1="10.5" y1="10.5" x2="7.5" y2="8" />
          <line x1="13.5" y1="10.5" x2="16.5" y2="8" />
          <line x1="12" y1="15" x2="12" y2="17" />
        </svg>
      ),
    },
    {
      name: "Temperature",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0z" />
          <path d="M12 9v5" />
          <circle cx="12" cy="17" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  // 4 Steps for "HOW COGNITION WORKS IN ETP"
  const cognitionSteps = [
    {
      step: 1,
      badgeColor: "step-blue",
      title: "SENSE",
      sub: "Real-Time Data",
      subColor: "",
      bullets: [
        "Multi-parameter water quality sensors",
        "Flow, level and equipment health",
        "Continuous data from every unit",
        "Edge sensing nodes",
      ],
    },
    {
      step: 2,
      badgeColor: "step-blue",
      title: "COGNIZE",
      sub: "Edge AI Inference",
      subColor: "",
      bullets: [
        "Proprietary AI models",
        "Process state estimation",
        "Anomaly detection",
        "Predictive dosing & control recommendations",
      ],
    },
    {
      step: 3,
      badgeColor: "step-green",
      title: "ACT",
      sub: "Autonomous Control",
      subColor: "green",
      bullets: [
        "Chemical dosing (coagulant, flocculant, pH)",
        "Equipment actuation (mixers, pumps, blowers)",
        "Process setpoint adjustment",
        "Safety interlocks and alarms",
      ],
    },
    {
      step: 4,
      badgeColor: "step-dark",
      title: "LEARN",
      sub: "Continuous Improvement",
      subColor: "",
      bullets: [
        "Feedback from outcomes",
        "Self-learning models",
        "Adaptive control strategies",
        "Performance benchmarking",
        "Better compliance and lower operating cost",
      ],
    },
  ];

  // 4 Measurable Results
  const measurableImpact = [
    {
      indicator: <span className="ietp-stat-icon-indicator green-down">↓</span>,
      val: "30–40%",
      label: "Lower Chemical Consumption",
    },
    {
      indicator: <span className="ietp-stat-icon-indicator blue-down">↓</span>,
      val: "20–30%",
      label: "Energy Savings",
    },
    {
      indicator: (
        <span className="ietp-stat-icon-indicator green-check">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="#10B981"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </span>
      ),
      val: "Consistent",
      label: "Regulatory Compliance",
    },
    {
      indicator: (
        <span className="ietp-stat-icon-indicator blue-chart">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="#0066CC"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 18l6-6 4 4 8-8" />
            <path d="M15 8h6v6" />
          </svg>
        </span>
      ),
      val: "Higher",
      label: "Water Recovery & Reuse",
    },
  ];

  // 6 Typical Industries
  const industries = [
    {
      name: "Refinery",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18" />
          <path d="M6 21V9l4-4v16" />
          <path d="M14 21V11l4 4v6" />
          <path d="M10 5h2" />
          <path d="M18 15h2" />
        </svg>
      ),
    },
    {
      name: "Chemical",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 2v7.31L4.89 18.5a2 2 0 0 0 1.73 3h10.76a2 2 0 0 0 1.73-3L14 9.31V2" />
          <line x1="8.5" y1="2" x2="15.5" y2="2" />
          <line x1="7" y1="15" x2="17" y2="15" />
        </svg>
      ),
    },
    {
      name: "Pharma",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10.5 4.5l9 9a4.24 4.24 0 0 1-6 6l-9-9a4.24 4.24 0 0 1 6-6Z" />
          <line x1="7.5" y1="13.5" x2="13.5" y2="7.5" />
          <circle cx="8" cy="18" r="3" />
        </svg>
      ),
    },
    {
      name: "Textile",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.5a2 2 0 0 0 1.51 1.63L6 11.2V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8.8l1.63-.38a2 2 0 0 0 1.51-1.63l.58-3.5a2 2 0 0 0-1.34-2.23z" />
        </svg>
      ),
    },
    {
      name: "Food & Beverage",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      ),
    },
    {
      name: "Others",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <circle cx="19" cy="12" r="1.5" />
          <circle cx="5" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
          <circle cx="12" cy="5" r="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="ietp-page-wrapper">
      {/* ====================================================================
          1. TOP NAVIGATION NAVBAR (Mobile & Desktop)
          ==================================================================== */}
      <header className="ietp-navbar">
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

        {/* Mobile Dropdown Drawer Matching Act Clean UI */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="ietp-mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="ietp-mobile-nav-inner">
                {/* 2 Tabs: Waste Water & Aquaculture */}
                <div className="act-mobile-tabs-row act-header-tabs-big">
                  <button
                    type="button"
                    className={`act-header-tab act-header-tab-big ${activeEtpTab === "intelligent" ? "active" : ""}`}
                    onClick={() => {
                      setActiveEtpTab("intelligent");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Waste Water
                  </button>
                  <button
                    type="button"
                    className={`act-header-tab act-header-tab-big ${activeEtpTab === "industrial" ? "active" : ""}`}
                    onClick={() => {
                      setActiveEtpTab("industrial");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Aquaculture
                  </button>
                </div>

                <a
                  href="/"
                  className="act-mobile-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    navigate("/");
                  }}
                >
                  HOME
                </a>
                <a
                  href="#industries"
                  className="act-mobile-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    navigate("/");
                  }}
                >
                  INDUSTRIES
                </a>
                <a
                  href="#cognition"
                  className="act-mobile-link active"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                  }}
                >
                  COGNITION
                </a>
                <a
                  href="#impact"
                  className="act-mobile-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    navigate("/");
                  }}
                >
                  IMPACT
                </a>
                <a
                  href="#about"
                  className="act-mobile-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    navigate("/");
                  }}
                >
                  ABOUT US
                </a>

                <button
                  type="button"
                  className="act-mobile-btn-cta"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/contactUs");
                  }}
                >
                  Schedule Strategic Discussion <FaArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ====================================================================
          2. HERO SECTION
          ==================================================================== */}
      <section className="ietp-hero-section">
        {/* Left Column */}
        <motion.div
          className="ietp-hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ietp-hero-tag">
            <span>COGNITION IN ACTION</span>
            <span className="ietp-hero-tag-line"></span>
            <span>INDUSTRIAL ETP</span>
          </div>

          <motion.h1
            className="ietp-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            CYBERNETICS FOR
            <span className="ietp-hero-title-accent">INDUSTRIAL ETPs</span>
          </motion.h1>

          <h3 className="ietp-hero-subtitle">
            Sense. Cognize. Act. Optimize. Continuously.
          </h3>

          <p className="ietp-hero-desc">
            Bariflo's Cognitive Distributed Edgeware System brings real-time
            intelligence to industrial effluent treatment plants. It senses,
            understands, decides and orchestrates autonomous actions across the
            entire ETP — enabling compliant, efficient and resilient operations.
          </p>

          {/* Action CTA Buttons */}
          <div className="ietp-cta-group">
            <button
              className="ietp-btn-primary"
              onClick={() => window.open("https://www.youtube.com", "_blank")}
            >
              <FaPlay size={11} /> Watch ETP Demo
            </button>
            <a
              href="/images/RENDERED IMAGES OF PRODUCTS/Recovered_BROCHUREEE.png"
              download="Bariflo-ETP-Brochure"
              className="ietp-btn-secondary"
            >
              <HiOutlineDocumentDownload size={18} /> Download Brochure
            </a>
          </div>
        </motion.div>

        {/* Right Column: Hero Banner Image */}
        <motion.div
          className="ietp-hero-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/images/effluent_to_opportunity (1).png"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/industrial_bg.jpg";
            }}
            alt="Real-Time Intelligence for Cleaner Industry - Effluent to Opportunity"
            className="ietp-hero-banner-img"
          />
        </motion.div>
      </section>

      {/* ====================================================================
          3. ETP EXAMPLE & ARCHITECTURE DIAGRAM SECTION
          ==================================================================== */}
      <motion.section
        className="ietp-diagram-section"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="ietp-diagram-container">
          <img
            src="/images/intelligent_etp_rest_design.png"
            alt="Intelligent ETP with Edge AI - An integrated view of hardware, sensing, control and cognition across the treatment process"
            className="ietp-diagram-img"
          />
        </div>
      </motion.section>

      {/* ====================================================================
          4. KEY PARAMETERS MONITORED SECTION
          ==================================================================== */}
      <motion.section
        className="ietp-params-section"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="ietp-params-inner">
          <div className="ietp-section-tag-heading">
            KEY PARAMETERS MONITORED
          </div>

          <motion.div
            className="ietp-params-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {parameters.map((param, idx) => (
              <motion.div
                key={idx}
                className="ietp-param-card"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="ietp-param-icon-wrap">{param.icon}</div>
                <div className="ietp-param-name">{param.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ====================================================================
          5. HOW COGNITION WORKS IN ETP SECTION
          ==================================================================== */}
      <motion.section
        className="ietp-works-section"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="ietp-works-inner">
          <div className="ietp-section-tag-heading">
            HOW COGNITION WORKS IN ETP
          </div>

          <motion.div
            className="ietp-works-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {cognitionSteps.map((step, idx) => (
              <React.Fragment key={step.step}>
                <motion.div
                  className="ietp-work-card-wrapper"
                  variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="ietp-work-card">
                    <div className="ietp-work-header">
                      <div className={`ietp-step-badge ${step.badgeColor}`}>
                        {step.step}
                      </div>
                      <div className="ietp-step-text-wrap">
                        <h4 className="ietp-step-title">{step.title}</h4>
                        <span className={`ietp-step-sub ${step.subColor}`}>
                          {step.sub}
                        </span>
                      </div>
                    </div>

                    <ul className="ietp-step-bullets">
                      {step.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="ietp-step-bullet-item">
                          <span className="ietp-bullet-arrow">›</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {idx < cognitionSteps.length - 1 && (
                  <div className="ietp-work-arrow-divider">
                    <BiRightArrowAlt />
                  </div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ====================================================================
          6. MEASURABLE IMPACT & TYPICAL INDUSTRIES
          ==================================================================== */}
      <motion.section
        className="ietp-impact-industries-section"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="ietp-impact-grid">
          {/* Left Column: Measurable Impact */}
          <motion.div
            className="ietp-impact-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="ietp-hero-tag" style={{ marginBottom: 8 }}>
              <span>REAL RESULTS</span>
              <span className="ietp-hero-tag-line"></span>
            </div>
            <h2 className="ietp-impact-title">Measurable Impact</h2>

            <div className="ietp-stats-row">
              {measurableImpact.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="ietp-stat-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.08,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="ietp-stat-icon-val">
                    {item.indicator}
                    <span className="ietp-stat-value">{item.val}</span>
                  </div>
                  <div className="ietp-stat-label">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Typical Industries */}
          <motion.div
            className="ietp-industries-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="ietp-hero-tag" style={{ marginBottom: 8 }}>
              <span>TYPICAL INDUSTRIES</span>
              <span className="ietp-hero-tag-line"></span>
            </div>

            <div className="ietp-industries-grid">
              {industries.map((ind, idx) => (
                <motion.div
                  key={idx}
                  className="ietp-industry-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.06,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="ietp-industry-icon">{ind.icon}</div>
                  <div className="ietp-industry-name">{ind.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ====================================================================
          7. CTA BANNER ("Transform Your ETP with Cognitive Intelligence")
          ==================================================================== */}
      <section className="ietp-cta-section">
        <motion.div
          className="ietp-cta-banner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
        >
          <div className="ietp-cta-left">
            <div className="ietp-cta-leaf-icon">
              <FaLeaf />
            </div>
            <div className="ietp-cta-text">
              <h3>Transform Your ETP with Cognitive Intelligence</h3>
              <p>
                From compliance to competitive advantage — with Bariflo
                Cybernetics.
              </p>
            </div>
          </div>

          <button
            className="ietp-cta-btn"
            onClick={() => navigate("/contactUs")}
          >
            Talk to Our Experts <FaArrowRight size={12} />
          </button>
        </motion.div>
      </section>

      {/* ====================================================================
          8. TRUSTED BY INDUSTRY LEADERS FOOTER
          ==================================================================== */}
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
            <div className="ietp-logo-item" title="Bariflo Cybernetics">
              <img
                src="/images/bariflo_nav_logo.png"
                alt="Bariflo Cybernetics"
                className="ietp-logo-bariflo-footer"
              />
            </div>
          </div>

          <div className="ietp-trust-motto">
            <div className="ietp-trust-motto-text">
              AUTONOMOUS CONTROL.
              <br />
              CLEANER INDUSTRY.
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default IntelligentETP;
