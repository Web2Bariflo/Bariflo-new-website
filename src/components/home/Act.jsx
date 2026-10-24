
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./Act.css";

import {
    FaArrowRight,
    FaChevronDown,
    FaSearch,
    FaBars,
    FaTimes,
    FaLeaf,
    FaCog,
    FaChartLine,
    FaGlobeAmericas,
    FaWater,
    FaFlask,
} from "react-icons/fa";

import {
    BiFilterAlt,
    BiRightArrowAlt,
    BiCheckShield,
    BiChip,
} from "react-icons/bi";

import { MdOutlineRecycling } from "react-icons/md";
import { FiChevronLeft } from "react-icons/fi";

const products = [
    {
        id: "01",
        title: "DAF / Intelligent Aeration Tank",
        category: "Aeration & Separation",
        image: "/images/ICON 1.png",
        tag: "Biological & Separation",
        specs: [
            "Automated micro-bubble generator with 20–50 micron bubble size",
            "Continuous suspended solids (TSS) and oil/grease skimming",
            "Closed-loop dissolved oxygen (DO) aeration control",
            "Modular stainless-steel 304/316 architecture with skid mounting",
        ],
        description:
            "High-efficiency Dissolved Air Flotation combined with intelligent multi-stage aeration chambers. Real-time sensor-driven aeration optimizes COD/BOD oxidation while reducing blower power demand.",
    },
    {
        id: "02",
        title: "Intelligent Coagulant Doser",
        category: "Chemical Dosing",
        image: "/images/COAGULATION.png",
        tag: "Precision Dosing",
        specs: [
            "AI-predicted coagulant dosage based on incoming influent turbidity",
            "Dual precision dosing pumps with automatic duty/standby changeover",
            "Real-time chemical tank level and flow rate telemetry",
            "Integrated HMI touch control with remote SCADA connectivity",
        ],
        description:
            "Automated chemical preparation and dosing skid designed for primary coagulation. Feedback-based dosing helps improve treatment efficiency and reduce chemical wastage.",
    },
    {
        id: "03",
        title: "Intelligent Flocculant Doser",
        category: "Chemical Dosing",
        image: "/images/ICON3.png",
        tag: "Precision Dosing",
        specs: [
            "Automated polymer powder preparation and aging",
            "Dynamic flocculation dosing based on process demand",
            "Corrosion-resistant manifold with digital pressure monitoring",
            "Automatic flushing and dosing control",
        ],
        description:
            "An intelligent polymer preparation and flocculant dosing system designed to support consistent floc formation, stable treatment performance, and controlled chemical consumption.",
    },
    {
        id: "04",
        title: "Sediment Aeration System",
        category: "Aeration & Separation",
        image: "/images/ICON4.png",
        tag: "Sludge & Sediment",
        specs: [
            "Submerged diffuser ring for oxygen transfer",
            "Designed for waterbody and bottom-sediment aeration",
            "Corrosion-resistant structural assembly",
            "Supports reduction of anaerobic sediment conditions",
        ],
        description:
            "A submerged sediment aeration and mixing system designed to improve dissolved oxygen, support waterbody rejuvenation, and help reduce organic accumulation.",
    },
    {
        id: "05",
        title: "Seabin System",
        category: "Surface Skimming",
        image: "/images/ICON5.png",
        tag: "Debris & Surface",
        specs: [
            "Floating pollutant capture chamber",
            "Captures floating debris and surface pollutants",
            "Reusable oil-absorbent filter options",
            "Designed for continuous surface cleaning",
        ],
        description:
            "A floating surface-skimming system for holding basins, cooling ponds, and discharge canals to help capture floating pollutants before final discharge.",
    },
    {
        id: "06",
        title: "Bariflo AquaSense",
        category: "Filtration & Telemetry",
        image: "/images/ICON6.png",
        tag: "Cyber-Physical Filtration",
        specs: [
            "Multi-media and activated carbon filtration options",
            "Differential-pressure monitoring",
            "Water-quality telemetry",
            "Industrial IoT monitoring integration",
        ],
        description:
            "A water filtration and monitoring system combining filtration equipment with intelligent monitoring and process telemetry.",
    },
    {
        id: "07",
        title: "Energy Intelligence System",
        category: "Energy & Automation",
        image: "/images/ICON7.png",
        tag: "Energy Optimization",
        specs: [
            "Variable-frequency drive control",
            "Real-time energy-consumption tracking",
            "Load optimization and power monitoring",
            "Equipment fault monitoring",
        ],
        description:
            "An energy management and automation system designed to monitor and optimize electrical consumption across pumps, blowers, and aerators.",
    },
    {
        id: "08",
        title: "Mobile FSTP (EC-EF System)",
        category: "Mobile Treatment",
        image: "/images/ICON8.png",
        tag: "Decentralized Treatment",
        specs: [
            "Mobile electrocoagulation and electroflotation treatment",
            "Compact decentralized treatment configuration",
            "Designed for deployment in remote locations",
            "Optional off-grid power configuration",
        ],
        description:
            "A mobile faecal sludge treatment concept designed for decentralized treatment, emergency response, municipal clusters, and remote facilities.",
    },
];

const processSteps = [
    { id: "capture", title: "Capture & Pretreat", icon: <FaWater /> },
    { id: "treat", title: "Treat & Separate", icon: <BiFilterAlt /> },
    { id: "dose", title: "Dose & Optimize", icon: <FaFlask /> },
    { id: "monitor", title: "Monitor & Control", icon: <BiChip /> },
    { id: "reuse", title: "Reuse & Comply", icon: <MdOutlineRecycling /> },
];

const valueBadges = [
    {
        id: "compliance",
        title: "Regulatory\nCompliance",
        icon: <FaLeaf />,
    },
    {
        id: "cost",
        title: "Lower\nOperating Cost",
        icon: <FaCog />,
    },
    {
        id: "recovery",
        title: "Higher\nResource Recovery",
        icon: <FaChartLine />,
    },
    {
        id: "ecosystems",
        title: "Sustainable\nEcosystems",
        icon: <FaGlobeAmericas />,
    },
];

const filterOptions = [
    "All",
    "Biological & Separation",
    "Chemical Dosing",
    "Surface Skimming",
    "Filtration & Telemetry",
    "Energy & Automation",
    "Mobile Treatment",
];

function Act() {
    const navigate = useNavigate();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [activeWaterTab, setActiveWaterTab] = useState("waste");
    const [activeModalProduct, setActiveModalProduct] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products.filter((product) => {
        const matchesWaterTab =
            !activeWaterTab ||
            (activeWaterTab === "waste"
                ? ["01", "02", "03", "04", "05", "06", "07", "08"].includes(product.id)
                : []);

        const matchesFilter =
            selectedFilter === "All" ||
            product.tag === selectedFilter ||
            product.category === selectedFilter;

        const query = searchQuery.trim().toLowerCase();

        const matchesQuery =
            !query ||
            product.title.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query);

        return matchesWaterTab && matchesFilter && matchesQuery;
    });

    const openProduct = (product) => {
        setActiveModalProduct(product);
    };

    const navigateFromMobile = (path) => {
        navigate(path);
        setMobileMenuOpen(false);
    };

    return (
        <div className="act-page-wrapper">
            {/* Navigation */}
            <header className="act-header">
                <div className="act-nav-container">
                    <div className="act-nav-left-wrapper">
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
                            className="act-logo-link"
                            onClick={(event) => {
                                event.preventDefault();
                                navigate("/");
                            }}
                        >
                            <img
                                src="/LOGO BARIFLO CYBERNETICS 2025-03-03.png"
                                alt="Bariflo Cybernetics"
                                className="act-logo-img"
                            />
                        </a>
                    </div>

                    <div className="act-nav-center">
                        <nav className="act-nav-links">
                            <a
                                href="/"
                                className="act-nav-item"
                                onClick={(event) => {
                                    event.preventDefault();
                                    navigate("/");
                                }}
                            >
                                HOME
                            </a>

                            <a
                                href="#industries"
                                className="act-nav-item"
                                onClick={(event) => event.preventDefault()}
                            >
                                INDUSTRIES <FaChevronDown size={11} className="act-chevron" />
                            </a>

                            <div className="act-nav-dropdown-item active">
                                <a
                                    href="#act"
                                    className="act-nav-item"
                                    onClick={(event) => event.preventDefault()}
                                >
                                    ACT
                                </a>
                                <div className="act-nav-active-bar" />
                            </div>

                            <a
                                href="#impact"
                                className="act-nav-item"
                                onClick={(event) => event.preventDefault()}
                            >
                                IMPACT
                            </a>

                            <a
                                href="#about"
                                className="act-nav-item"
                                onClick={(event) => event.preventDefault()}
                            >
                                ABOUT US
                            </a>
                        </nav>
                    </div>

                    <div className="act-nav-actions">
                        <div className="act-search-container">
                            {searchOpen ? (
                                <div className="act-search-input-box">
                                    <input
                                        type="text"
                                        placeholder="Search systems..."
                                        value={searchQuery}
                                        onChange={(event) => setSearchQuery(event.target.value)}
                                        autoFocus
                                    />

                                    <button
                                        type="button"
                                        className="act-search-close-btn"
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
                                    className="act-search-btn"
                                    aria-label="Search"
                                    onClick={() => setSearchOpen(true)}
                                >
                                    <FaSearch size={15} />
                                </button>
                            )}
                        </div>

                        <button
                            type="button"
                            className="act-btn-consultation act-btn-consultation-big"
                            onClick={() => navigate("/contactUs")}
                        >
                            <FaLeaf className="act-btn-leaf-icon" size={15} />
                            <span>Schedule a Consultation</span>
                            <FaArrowRight size={13} className="act-btn-arrow" />
                        </button>

                        <button
                            type="button"
                            className="act-mobile-menu-toggle"
                            aria-label="Toggle navigation"
                            aria-expanded={mobileMenuOpen}
                            onClick={() => setMobileMenuOpen((open) => !open)}
                        >
                            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>

                {/* 2 Full-width buttons under navbar */}
                <div className="fullwidth-subnav-tabs-bar">
                    <button
                        type="button"
                        className="fullwidth-subnav-tab active"
                        onClick={() => setActiveWaterTab("waste")}
                    >
                        <span>WASTE WATER</span>
                    </button>
                    <button
                        type="button"
                        className="fullwidth-subnav-tab"
                        onClick={() => navigate("/act-aquaculture")}
                    >
                        <span>AQUACULTURE</span>
                    </button>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="act-mobile-drawer"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="act-mobile-nav-inner">
                                {/* Mobile Waste Water & Aquaculture Tabs */}
                                <div className="act-mobile-tabs-row act-header-tabs-big">
                                    <button
                                        type="button"
                                        className="act-header-tab act-header-tab-big active"
                                        onClick={() => {
                                            setActiveWaterTab("waste");
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        WASTE WATER
                                    </button>
                                    <button
                                        type="button"
                                        className="act-header-tab act-header-tab-big"
                                        onClick={() => {
                                            navigateFromMobile("/act-aquaculture");
                                        }}
                                    >
                                        AQUACULTURE
                                    </button>
                                </div>

                                <a
                                    href="/"
                                    className="act-mobile-link"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        navigateFromMobile("/");
                                    }}
                                >
                                    HOME
                                </a>

                                <a
                                    href="#industries"
                                    className="act-mobile-link"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setMobileMenuOpen(false);
                                    }}
                                >
                                    INDUSTRIES
                                </a>

                                <a
                                    href="#act"
                                    className="act-mobile-link active"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setMobileMenuOpen(false);
                                    }}
                                >
                                    ACT
                                </a>

                                <a
                                    href="#impact"
                                    className="act-mobile-link"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setMobileMenuOpen(false);
                                    }}
                                >
                                    IMPACT
                                </a>

                                <a
                                    href="#about"
                                    className="act-mobile-link"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setMobileMenuOpen(false);
                                    }}
                                >
                                    ABOUT US
                                </a>

                                <button
                                    type="button"
                                    className="act-mobile-btn-cta"
                                    onClick={() => navigateFromMobile("/contactUs")}
                                >
                                    Schedule a Consultation <FaArrowRight size={12} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Hero */}
            <section className="act-hero-section">
                <div className="act-hero-bg-layer">
                    <img
                        src="/images/ACT  WASTEWATER.png"
                        alt="Industrial wastewater treatment plant"
                        className="act-hero-bg-img"
                    />
                    <div className="act-hero-gradient-overlay" />
                </div>

                <div className="act-hero-content-wrapper">
                    <motion.div
                        className="act-hero-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="act-hero-eyebrow">
                            INDUSTRIAL WASTEWATER SOLUTIONS
                        </div>

                        <h1 className="act-hero-title">
                            Intelligent Systems for
                            <br />
                            <span className="act-hero-title-accent">
                                Cleaner Industries
                            </span>
                        </h1>

                        <p className="act-hero-description">
                            AI-powered automation for efficient, compliant and sustainable
                            wastewater treatment.
                        </p>

                        <div className="act-value-badges-row">
                            {valueBadges.map((badge) => (
                                <div className="act-value-badge-item" key={badge.id}>
                                    <div className="act-value-icon-circle">{badge.icon}</div>
                                    <span className="act-value-text">{badge.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="act-hero-right"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="act-flowchart-card">
                            <h3 className="act-flowchart-title">
                                From Inlet to Outcome — Autonomous Water Operations
                            </h3>

                            <div className="act-flowchart-steps">
                                {processSteps.map((step, index) => (
                                    <Fragment key={step.id}>
                                        <div className="act-flow-step">
                                            <div className="act-flow-step-icon">{step.icon}</div>
                                            <span className="act-flow-step-label">{step.title}</span>
                                        </div>

                                        {index < processSteps.length - 1 && (
                                            <div className="act-flow-arrow">➔</div>
                                        )}
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="act-breadcrumb-bar">
                <div className="act-container">
                    <nav className="act-breadcrumbs" aria-label="Breadcrumb">
                        <span
                            className="act-crumb-link"
                            onClick={() => navigate("/")}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") navigate("/");
                            }}
                        >
                            Home
                        </span>

                        <span className="act-crumb-separator">›</span>
                        <span className="act-crumb-link">Industries</span>
                        <span className="act-crumb-separator">›</span>
                        <span className="act-crumb-current">Industrial Wastewater</span>
                    </nav>
                </div>
            </div>

            {/* Product solutions */}
            <section className="act-solutions-section">
                <div className="act-container">
                    <div className="act-solutions-header">
                        <div className="act-solutions-header-left">
                            <div className="act-heading-with-line">
                                <h2 className="act-section-heading">Our Solutions</h2>
                                <span className="act-heading-line" />
                            </div>

                            <p className="act-section-subheading">
                                Integrated, intelligent and autonomous systems for industrial
                                wastewater treatment.
                            </p>
                        </div>

                        <div className="act-solutions-header-right">
                            <div className="act-filter-dropdown-wrapper">
                                <button
                                    type="button"
                                    className="act-filter-dropdown-btn"
                                    aria-expanded={filterDropdownOpen}
                                    onClick={() => setFilterDropdownOpen((open) => !open)}
                                >
                                    <span>
                                        {selectedFilter === "All"
                                            ? "Explore by Process"
                                            : selectedFilter}
                                    </span>

                                    <FaChevronDown
                                        size={11}
                                        className={`act-filter-caret ${filterDropdownOpen ? "open" : ""
                                            }`}
                                    />
                                </button>

                                {filterDropdownOpen && (
                                    <div className="act-filter-dropdown-menu">
                                        {filterOptions.map((option) => (
                                            <button
                                                type="button"
                                                key={option}
                                                className={`act-filter-menu-item ${selectedFilter === option ? "selected" : ""
                                                    }`}
                                                onClick={() => {
                                                    setSelectedFilter(option);
                                                    setFilterDropdownOpen(false);
                                                }}
                                            >
                                                {option === "All" ? "All Solutions" : option}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Product cards */}
                    <div className="act-products-grid">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                className="act-product-card"
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                                onClick={() => openProduct(product)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(event) => {
                                    if (
                                        event.target === event.currentTarget &&
                                        (event.key === "Enter" || event.key === " ")
                                    ) {
                                        event.preventDefault();
                                        openProduct(product);
                                    }
                                }}
                            >
                                <div className="act-card-number-badge">{product.id}</div>

                                <div className="act-card-image-box">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="act-card-product-img"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="act-card-bottom">
                                    <h3 className="act-card-title">{product.title}</h3>

                                    <button
                                        type="button"
                                        className="act-card-arrow-btn"
                                        aria-label={`View details of ${product.title}`}
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            openProduct(product);
                                        }}
                                    >
                                        <BiRightArrowAlt size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <p className="act-no-results">
                            {activeWaterTab === "clean"
                                ? "Clean Water systems are currently unavailable. Please explore our Waste Water solutions."
                                : "No systems found. Try another search or filter."}
                        </p>
                    )}
                </div>
            </section>

            {/* Product details modal for products without dedicated pages */}
            <AnimatePresence>
                {activeModalProduct && (
                    <motion.div
                        className="act-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveModalProduct(null)}
                    >
                        <motion.div
                            className="act-modal-dialog"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(event) => event.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="act-modal-title"
                        >
                            <button
                                type="button"
                                className="act-modal-close"
                                onClick={() => setActiveModalProduct(null)}
                                aria-label="Close dialog"
                            >
                                <FaTimes size={18} />
                            </button>

                            <div className="act-modal-content">
                                <div className="act-modal-left">
                                    <div className="act-modal-badge">
                                        System {activeModalProduct.id} •{" "}
                                        {activeModalProduct.category}
                                    </div>

                                    <img
                                        src={activeModalProduct.image}
                                        alt={activeModalProduct.title}
                                        className="act-modal-image"
                                    />
                                </div>

                                <div className="act-modal-right">
                                    <h2 className="act-modal-title" id="act-modal-title">
                                        {activeModalProduct.title}
                                    </h2>

                                    <p className="act-modal-desc">
                                        {activeModalProduct.description}
                                    </p>

                                    <h4 className="act-modal-specs-title">
                                        Key Specifications
                                    </h4>

                                    <ul className="act-modal-specs-list">
                                        {activeModalProduct.specs.map((specification, index) => (
                                            <li key={index}>
                                                <BiCheckShield className="act-spec-icon" />
                                                <span>{specification}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="act-modal-actions">
                                        <button
                                            type="button"
                                            className="act-modal-btn-primary"
                                            onClick={() => navigate("/contactUs")}
                                        >
                                            Inquire About This System{" "}
                                            <FaArrowRight size={12} />
                                        </button>

                                        <button
                                            type="button"
                                            className="act-modal-btn-secondary"
                                            onClick={() => setActiveModalProduct(null)}
                                        >
                                            Close Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Call to action */}
            <section className="act-cta-section">
                <div className="act-cta-banner">
                    <div className="act-cta-left">
                        <div className="act-cta-leaf-circle">
                            <FaLeaf className="act-cta-leaf-icon" />
                        </div>

                        <div className="act-cta-text-group">
                            <h2 className="act-cta-title">
                                Cleaner Water. Smarter Industry.
                            </h2>

                            <p className="act-cta-subtitle">
                                Integrated systems. Intelligent control. A sustainable
                                tomorrow.
                            </p>
                        </div>
                    </div>

                    <div className="act-cta-right">
                        <button
                            type="button"
                            className="act-cta-btn"
                            onClick={() => navigate("/contactUs")}
                        >
                            <span>Talk to Our Experts</span>
                            <FaArrowRight size={13} className="act-cta-btn-arrow" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Trusted by industry leaders */}
            <footer className="act-trusted-footer">
                <div className="act-container">
                    <div className="act-trusted-row">
                        <div className="act-trusted-left-group">
                            <div className="act-trusted-label">
                                TRUSTED BY
                                <br />
                                INDUSTRY LEADERS
                            </div>
                            <div className="act-trusted-divider"></div>
                            <div className="act-partner-item bariflo">
                                <img
                                    src="/LOGO BARIFLO CYBERNETICS 2025-03-03.png"
                                    alt="Bariflo Cybernetics"
                                    className="act-partner-img bariflo-logo"
                                />
                            </div>
                        </div>

                        <div className="act-trusted-motto">
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

export default Act;
