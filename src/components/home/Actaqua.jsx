import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./Actaqua.css";

import {
  FaArrowRight,
  FaChevronDown,
  FaSearch,
  FaBars,
  FaTimes,
  FaLeaf,
  FaFish,
} from "react-icons/fa";

import {
  BiWater,
  BiCog,
  BiLineChart,
  BiCheckShield,
  BiDollarCircle,
  BiRightArrowAlt,
  BiBarChartAlt2,
  BiFilterAlt,
} from "react-icons/bi";

import { MdOutlineWaterDrop, MdOutlineFastfood } from "react-icons/md";
import { FiChevronLeft } from "react-icons/fi";

// Aquaculture Products Data
const aquaProducts = [
  {
    id: "01",
    title: "Automated Feeder System",
    tagline: "Precision feeding with variable dispersion and real-time control",
    tag: "Feeding & Nutrition",
    image: "/images/RENDERED IMAGES OF PRODUCTS/auto feeder 1.png",
    description:
      "Solar-powered, IoT-enabled intelligent feeder with autonomous feed dispensing based on pond biometrics, water temperature, and fish activity. Eliminates feed waste and optimizes daily FCR.",
    specs: {
      "Dispersion Radius": "360° Variable (5m to 25m)",
      "Hopper Capacity": "100 kg / 150 kg UV-Stabilized Polyethylene",
      "Power Source": "12V Solar Panel with Smart Battery Backup",
      "Connectivity": "LoRaWAN / 4G LTE with Cloud Telemetry",
      "Control Mode": "AI Autonomous / Scheduled / Mobile App Manual",
      "Feed Compatibility": "0.8mm to 6.0mm Floating & Sinking Pellets",
    },
    features: [
      "Variable dispersion projectile prevents feed accumulation at pond edges",
      "Integration with smart checktray to halt feeding upon fish satiation",
      "Real-time mobile app management and consumption tracking",
      "Automated daily feed report generation with FCR prediction",
    ],
  },
  {
    id: "02",
    title: "Bottom Aeration System",
    tagline: "Efficient oxygenation with oscillatory diffusers",
    tag: "Aeration & DO",
    image: "/images/RENDERED IMAGES OF PRODUCTS/aerator image 1 (2) 1.png",
    description:
      "Advanced subsurface micro-bubble aeration with oscillatory diffusers that transfers oxygen directly to the benthic zone where organic sludge accumulates, reducing energy costs by up to 25%.",
    specs: {
      "Oxygen Transfer": "> 2.8 kg O₂ / kWh High Efficiency",
      "Diffuser Type": "Oscillatory Micro-Pore Subsurface Diffusers",
      "Compressor Unit": "High-Reliability Oil-Free Blower with Thermal Cutoff",
      "Operating Depth": "1.0m to 4.5m Pond Depths",
      "Automation": "DO-Triggered Auto Start/Stop via Sensor Feedback",
      "Energy Savings": "Up to 25% reduction compared to paddle wheels",
    },
    features: [
      "Eliminates thermal stratification and benthic anaerobic dead zones",
      "Accelerates microbial breakdown of uneaten feed and fish feces",
      "Continuous DO optimization maintains ideal 5.5+ mg/L levels",
      "Corrosion-resistant marine grade floats and 316 stainless fittings",
    ],
  },
  {
    id: "03",
    title: "Water Quality Monitoring",
    tagline: "Multi-parameter sensing and automated sampling",
    tag: "Water Quality & Sensing",
    image: "/images/WATER QUALITY.png",
    description:
      "Continuous multi-parameter analyzer with integrated flow chamber and automated sampling. Measures Dissolved Oxygen, pH, Temperature, ORP, Salinity, and Ammonia in real-time.",
    specs: {
      "Parameters Monitored": "DO, pH, Water Temperature, ORP, Salinity, NH₃/NH₄⁺",
      "Sampling Mechanism": "Automated Self-Priming Sampling Module with Auto-Flush",
      "Display Unit": "7-inch High-Brightness Industrial Touch HMI",
      "Sensor Technology": "Optical Luminescence DO & Solid-State Electrochemical",
      "Data Transmission": "LoRaWAN long range (>10km LOS) + Cellular 4G",
      "Enclosure": "IP66 Stainless Steel Weatherproof Housing with Pedestal Mount",
    },
    features: [
      "Automated self-cleaning cycle prevents sensor bio-fouling and drift",
      "Instant anomaly alerts via SMS and push notifications when limits breached",
      "Edge computing node calculates water stress index in real-time",
      "Direct telemetry integration with automated aerators and feeders",
    ],
  },
  {
    id: "04",
    title: "Energy Monitoring System",
    tagline: "Real-time energy monitoring and equipment health",
    tag: "Energy & Operations",
    image: "/images/ENERGY SYSTEM ACT.png",
    description:
      "Smart electrical distribution and telemetry cabinet that monitors power quality, phase balance, motor health, and equipment consumption across the entire aquaculture facility.",
    specs: {
      "Monitored Assets": "Pumps, Aerators, Feeders, Blowers, Chillers",
      "Metrics Captured": "Voltage, Current, Power Factor, Active Energy, THD",
      "Protection Features": "Overload, Single-Phasing, Dry Run & Thermal Trip Detection",
      "Backup Integration": "Automatic Mains Failure (AMF) generator switchover",
      "Display & Controls": "Integrated Touchscreen Panel with Local Manual Override",
      "Cabinet Rating": "Outdoor Powder-Coated IP65 Double-Door Enclosure",
    },
    features: [
      "Detects mechanical jamming or bearing wear via current harmonics",
      "Tracks per-pond energy expenditure to calculate true cost per kg yield",
      "Instant power failure alerts prevent catastrophic DO dropouts",
      "Automated load scheduling reduces peak-tariff electricity costs",
    ],
  },
  {
    id: "05",
    title: "Smart Checktray",
    tagline: "AI-based feed estimation and FCR management",
    tag: "AI Growth & FCR",
    image: "/images/CHECKTRAY.png",
    description:
      "Underwater IoT checktray equipped with weight sensors and vision analytics that continuously measures uneaten feed on the pond floor, calculating satiation and communicating with automatic feeders.",
    specs: {
      "Tray Diameter": "800mm High-Visibility Corrosion-Resistant Rim",
      "Sensor Array": "High-Precision Waterproof Load Cell & Optical Sensor",
      "Submersion Depth": "Adjustable Cable Rigging (0.5m to 3.5m)",
      "Telemetry Link": "Wireless Low-Power RF Link to Surface Feeder Controller",
      "Battery Life": "> 6 Months Operation on Rechargeable Lithium Pack",
      "AI Engine": "Automated Feed Consumption Rate (FCR) calculation model",
    },
    features: [
      "Real-time feedback loop halts automatic feeder when feed remains on tray",
      "Monitors feeding vigor and appetite as an early indicator of disease",
      "Eliminates manual hauling and inspection errors by farm workers",
      "Reduces organic load on pond bottom, improving overall water quality",
    ],
  },
];

// Value Badges for Aquaculture Hero
const valueBadges = [
  { id: 1, title: "Better Water Quality", icon: <BiWater /> },
  { id: 2, title: "Optimized Feeding", icon: <BiCog /> },
  { id: 3, title: "Higher Survival Rate", icon: <BiLineChart /> },
  { id: 4, title: "Lower Operating Cost", icon: <BiDollarCircle /> },
  { id: 5, title: "Sustainable Farming", icon: <BiCheckShield /> },
];

// 5 Operations Flowchart Steps
const flowchartSteps = [
  { id: 1, label: "Sensing & Monitoring", icon: <BiWater /> },
  { id: 2, label: "Analyze & Predict", icon: <BiBarChartAlt2 /> },
  { id: 3, label: "Feed & Control", icon: <MdOutlineFastfood /> },
  { id: 4, label: "Improve Water Quality", icon: <MdOutlineWaterDrop /> },
  { id: 5, label: "Healthy Growth & Profitability", icon: <FaFish /> },
];

// Filter process options
const processFilters = [
  "All Processes",
  "Feeding & Nutrition",
  "Aeration & DO",
  "Water Quality & Sensing",
  "Energy & Operations",
  "AI Growth & FCR",
];

export default function Actaqua() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All Processes");
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = aquaProducts.filter((product) => {
    const matchesFilter =
      selectedFilter === "All Processes" || product.tag === selectedFilter;

    const query = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !query ||
      product.title.toLowerCase().includes(query) ||
      product.tagline.toLowerCase().includes(query) ||
      product.tag.toLowerCase().includes(query);

    return matchesFilter && matchesQuery;
  });

  const navigateFromMobile = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <div className="actaqua-page-wrapper">
      {/* 1. TOP HEADER & NAVBAR */}
      <header className="actaqua-header">
        <div className="actaqua-nav-container">
          <div className="actaqua-nav-left-wrapper">
            <button
              type="button"
              className="bariflo-back-home-btn"
              onClick={() => navigate("/")}
              title="Back to Home"
              aria-label="Back to Home"
            >
              <FiChevronLeft size={24} />
            </button>

            <a
              href="/"
              className="actaqua-logo-link"
              onClick={(event) => {
                event.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/LOGO BARIFLO CYBERNETICS 2025-03-03.png"
                alt="Bariflo Cybernetics"
                className="actaqua-logo-img"
              />
            </a>
          </div>

          <div className="actaqua-nav-center">
            <nav className="actaqua-nav-links">
              <a
                href="/"
                className="actaqua-nav-item"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/");
                }}
              >
                HOME
              </a>

              <a
                href="#industries"
                className="actaqua-nav-item"
                onClick={(event) => event.preventDefault()}
              >
                INDUSTRIES <FaChevronDown size={10} style={{ marginLeft: "4px" }} />
              </a>

              <a
                href="/act-aquaculture"
                className="actaqua-nav-item active"
                onClick={(event) => event.preventDefault()}
              >
                ACT
              </a>

              <a
                href="#impact"
                className="actaqua-nav-item"
                onClick={(event) => event.preventDefault()}
              >
                IMPACT
              </a>

              <a
                href="#about"
                className="actaqua-nav-item"
                onClick={(event) => event.preventDefault()}
              >
                ABOUT US
              </a>
            </nav>
          </div>

          <div className="actaqua-nav-actions">
            <div className="actaqua-search-container">
              {searchOpen ? (
                <div className="actaqua-search-input-box">
                  <input
                    type="text"
                    placeholder="Search systems..."
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    autoFocus
                  />
                  <button
                    type="button"
                    className="actaqua-search-close-btn"
                    aria-label="Close search"
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
                  className="actaqua-search-btn"
                  aria-label="Search"
                  onClick={() => setSearchOpen(true)}
                >
                  <FaSearch size={15} />
                </button>
              )}
            </div>

            <button
              type="button"
              className="actaqua-btn-consultation"
              onClick={() => navigate("/contactUs")}
            >
              <FaLeaf className="actaqua-btn-leaf-icon" size={15} />
              <span>Schedule a Consultation</span>
              <FaArrowRight size={13} className="actaqua-btn-arrow" />
            </button>

            <button
              type="button"
              className="actaqua-mobile-menu-toggle"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* 2 FULL-WIDTH TABS: WASTE WATER & AQUACULTURE */}
        <div className="actaqua-subnav-tabs-bar">
          <button
            type="button"
            className="actaqua-subnav-tab"
            onClick={() => navigate("/act")}
            title="Switch to Waste Water Solutions"
          >
            <span>WASTE WATER</span>
          </button>
          <button
            type="button"
            className="actaqua-subnav-tab active"
            title="Current: Aquaculture"
          >
            <span>AQUACULTURE</span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="actaqua-mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="actaqua-mobile-nav-inner">
                <div className="actaqua-mobile-tabs-row">
                  <button
                    type="button"
                    className="actaqua-mobile-subnav-btn"
                    onClick={() => navigateFromMobile("/act")}
                  >
                    WASTE WATER
                  </button>
                  <button
                    type="button"
                    className="actaqua-mobile-subnav-btn active"
                  >
                    AQUACULTURE
                  </button>
                </div>

                <a
                  href="/"
                  className="actaqua-mobile-link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateFromMobile("/");
                  }}
                >
                  HOME
                </a>
                <a
                  href="#industries"
                  className="actaqua-mobile-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                  }}
                >
                  INDUSTRIES
                </a>
                <a
                  href="/act-aquaculture"
                  className="actaqua-mobile-link active"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                  }}
                >
                  ACT (AQUACULTURE)
                </a>
                <a
                  href="#impact"
                  className="actaqua-mobile-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                  }}
                >
                  IMPACT
                </a>
                <a
                  href="#about"
                  className="actaqua-mobile-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                  }}
                >
                  ABOUT US
                </a>

                <button
                  type="button"
                  className="actaqua-mobile-btn-cta"
                  onClick={() => navigateFromMobile("/contactUs")}
                >
                  Schedule a Consultation <FaArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION */}
      <section className="actaqua-hero-section">
        <div className="actaqua-hero-bg-layer">
          <img
            src="/images/aquaculture_cages.jpg"
            alt="Aquaculture lake floating cages with mountains"
            className="actaqua-hero-bg-img"
          />
          <div className="actaqua-hero-gradient-overlay" />
        </div>

        <div className="actaqua-hero-content-wrapper">
          {/* Left Hero Content */}
          <motion.div
            className="actaqua-hero-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="actaqua-hero-eyebrow">AQUACULTURE SOLUTIONS</div>

            <h1 className="actaqua-hero-title">
              Intelligent Systems for
              <br />
              <span className="actaqua-hero-title-accent">
                Healthier Aquaculture
              </span>
            </h1>

            <p className="actaqua-hero-description">
              Integrated, intelligent and autonomous systems for better water
              quality, optimized feeding and higher productivity.
            </p>

            <div className="actaqua-value-badges-row">
              {valueBadges.map((badge) => (
                <div className="actaqua-value-badge-item" key={badge.id}>
                  <div className="actaqua-value-icon-circle">{badge.icon}</div>
                  <span className="actaqua-value-text">{badge.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Hero Content: Flowchart Card */}
          <motion.div
            className="actaqua-hero-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="actaqua-flowchart-card">
              <h3 className="actaqua-flowchart-title">
                From Sensing to Outcome — Smarter Aquaculture Operations
              </h3>

              <div className="actaqua-flowchart-steps">
                {flowchartSteps.map((step, idx) => (
                  <React.Fragment key={step.id}>
                    <div className="actaqua-flow-step">
                      <div className="actaqua-flow-step-icon">{step.icon}</div>
                      <span className="actaqua-flow-step-label">
                        {step.label}
                      </span>
                    </div>

                    {idx < flowchartSteps.length - 1 && (
                      <span className="actaqua-flow-arrow" aria-hidden="true">
                        →
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. BREADCRUMB BAR */}
      <div className="actaqua-breadcrumb-bar">
        <div className="actaqua-breadcrumb-inner">
          <span
            className="actaqua-breadcrumb-link"
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <span className="actaqua-breadcrumb-separator">›</span>
          <span
            className="actaqua-breadcrumb-link"
            onClick={() => navigate("/#industries")}
          >
            Industries
          </span>
          <span className="actaqua-breadcrumb-separator">›</span>
          <span className="actaqua-breadcrumb-current">Aquaculture</span>
        </div>
      </div>

      {/* 4. OUR SOLUTIONS SECTION */}
      <section className="actaqua-solutions-section">
        <div className="actaqua-container">
          {/* Section Header & Filter */}
          <div className="actaqua-solutions-header">
            <div className="actaqua-solutions-title-group">
              <div className="actaqua-title-row">
                <h2 className="actaqua-section-heading">Our Solutions</h2>
                <div className="actaqua-heading-dash"></div>
              </div>
              <p className="actaqua-solutions-subheading">
                Integrated, intelligent and autonomous systems for complete pond
                monitoring and management.
              </p>
            </div>

            {/* Filter Dropdown */}
            <div className="actaqua-filter-dropdown-container">
              <button
                type="button"
                className="actaqua-filter-btn"
                onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
                aria-expanded={filterDropdownOpen}
              >
                <BiFilterAlt size={16} />
                <span>
                  {selectedFilter === "All Processes"
                    ? "Explore by Process"
                    : selectedFilter}
                </span>
                <FaChevronDown
                  size={12}
                  className={`actaqua-filter-caret ${
                    filterDropdownOpen ? "open" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {filterDropdownOpen && (
                  <motion.div
                    className="actaqua-filter-menu"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                  >
                    {processFilters.map((filter) => (
                      <button
                        type="button"
                        key={filter}
                        className={`actaqua-filter-menu-item ${
                          selectedFilter === filter ? "active" : ""
                        }`}
                        onClick={() => {
                          setSelectedFilter(filter);
                          setFilterDropdownOpen(false);
                        }}
                      >
                        {filter}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Solutions 5 Products Grid */}
          <div className="actaqua-products-grid">
            {filteredProducts.map((product, index) => (
              <motion.div
                className="actaqua-product-card"
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                onClick={() => {
                  if (product.id === "01" || product.title === "Automated Feeder System") {
                    navigate("/act-automated-feeder");
                  } else if (product.id === "02" || product.title === "Bottom Aeration System") {
                    navigate("/bottom-aeration-system");
                  } else if (product.id === "03" || product.title.includes("Water") || product.title === "Water Quality Monitoring") {
                    navigate("/monitoring-system");
                  } else if (product.id === "04" || product.title.includes("Energy") || product.title.includes("Power")) {
                    navigate("/power-monitoring-system");
                  } else if (product.id === "05" || product.title.includes("Checktray") || product.title.includes("Feed")) {
                    navigate("/feed-tray-system");
                  } else {
                    setActiveModalProduct(product);
                  }
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    if (product.id === "01" || product.title === "Automated Feeder System") {
                      navigate("/act-automated-feeder");
                    } else if (product.id === "02" || product.title === "Bottom Aeration System") {
                      navigate("/bottom-aeration-system");
                    } else if (product.id === "03" || product.title.includes("Water") || product.title === "Water Quality Monitoring") {
                      navigate("/monitoring-system");
                    } else if (product.id === "04" || product.title.includes("Energy") || product.title.includes("Power")) {
                      navigate("/power-monitoring-system");
                    } else if (product.id === "05" || product.title.includes("Checktray") || product.title.includes("Feed")) {
                      navigate("/feed-tray-system");
                    } else {
                      setActiveModalProduct(product);
                    }
                  }
                }}
              >
                {/* Number Badge 01..05 */}
                <div className="actaqua-card-badge">{product.id}</div>

                {/* Product Image Frame */}
                <div className="actaqua-card-image-box">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="actaqua-card-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "/images/RENDERED IMAGES OF PRODUCTS/Recovered_BROCHUREEE.png";
                    }}
                  />
                </div>

                {/* Card Info & Action Button */}
                <div className="actaqua-card-bottom-row">
                  <div className="actaqua-card-info">
                    <h3 className="actaqua-card-title">{product.title}</h3>
                    <p className="actaqua-card-tagline">{product.tagline}</p>
                  </div>

                  <div
                    className="actaqua-card-arrow-circle"
                    aria-hidden="true"
                    onClick={(e) => {
                      if (product.id === "01" || product.title === "Automated Feeder System") {
                        e.stopPropagation();
                        navigate("/act-automated-feeder");
                      } else if (product.id === "02" || product.title === "Bottom Aeration System") {
                        e.stopPropagation();
                        navigate("/bottom-aeration-system");
                      } else if (product.id === "03" || product.title.includes("Water") || product.title === "Water Quality Monitoring") {
                        e.stopPropagation();
                        navigate("/monitoring-system");
                      } else if (product.id === "04" || product.title.includes("Energy") || product.title.includes("Power")) {
                        e.stopPropagation();
                        navigate("/power-monitoring-system");
                      } else if (product.id === "05" || product.title.includes("Checktray") || product.title.includes("Feed")) {
                        e.stopPropagation();
                        navigate("/feed-tray-system");
                      }
                    }}
                  >
                    <BiRightArrowAlt size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="actaqua-cta-section">
        <motion.div
          className="actaqua-cta-pill-banner"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="actaqua-cta-left">
            <div className="actaqua-cta-leaf-badge">
              <FaLeaf size={22} />
            </div>
            <div className="actaqua-cta-text-group">
              <h3 className="actaqua-cta-title">
                Healthier Fish. Smarter Farming.
              </h3>
              <p className="actaqua-cta-subtitle">
                Integrated systems. Intelligent control. A more productive
                tomorrow.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="actaqua-cta-talk-btn"
            onClick={() => navigate("/contactUs")}
          >
            <span>Talk to Our Experts</span>
            <FaArrowRight size={12} />
          </button>
        </motion.div>
      </section>

      {/* 6. TRUSTED FOOTER */}
      <footer className="ietp-trust-footer">
        <div className="ietp-trust-footer-inner">
          <div className="ietp-trust-left-group">
            <div className="ietp-trust-label">
              TRUSTED BY
              <br />
              INDUSTRY LEADERS
            </div>
            <div className="ietp-trust-divider" />
            <div className="ietp-logo-item">
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

      {/* 7. PRODUCT DETAIL MODAL */}
      <AnimatePresence>
        {activeModalProduct && (
          <div
            className="actaqua-modal-backdrop"
            onClick={() => setActiveModalProduct(null)}
          >
            <motion.div
              className="actaqua-modal-box"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="actaqua-modal-close-btn"
                aria-label="Close modal"
                onClick={() => setActiveModalProduct(null)}
              >
                <FaTimes size={18} />
              </button>

              <div className="actaqua-modal-grid">
                <div className="actaqua-modal-left">
                  <div className="actaqua-modal-badge">
                    SYSTEM {activeModalProduct.id}
                  </div>
                  <h3 className="actaqua-modal-title">
                    {activeModalProduct.title}
                  </h3>
                  <div className="actaqua-modal-category-tag">
                    {activeModalProduct.tag}
                  </div>

                  <div className="actaqua-modal-img-container">
                    <img
                      src={activeModalProduct.image}
                      alt={activeModalProduct.title}
                      className="actaqua-modal-img"
                    />
                  </div>

                  <p className="actaqua-modal-desc">
                    {activeModalProduct.description}
                  </p>
                </div>

                <div className="actaqua-modal-right">
                  <h4 className="actaqua-modal-section-heading">
                    Key Specifications
                  </h4>
                  <div className="actaqua-modal-specs-table">
                    {Object.entries(activeModalProduct.specs).map(
                      ([key, val]) => (
                        <div className="actaqua-spec-row" key={key}>
                          <span className="actaqua-spec-key">{key}</span>
                          <span className="actaqua-spec-val">{val}</span>
                        </div>
                      )
                    )}
                  </div>

                  <h4 className="actaqua-modal-section-heading" style={{ marginTop: "24px" }}>
                    Core Advantages
                  </h4>
                  <ul className="actaqua-modal-features-list">
                    {activeModalProduct.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="actaqua-modal-inquire-btn"
                    onClick={() => {
                      setActiveModalProduct(null);
                      navigate("/contactUs");
                    }}
                  >
                    <span>Request Quotation & Integration Details</span>
                    <FaArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
