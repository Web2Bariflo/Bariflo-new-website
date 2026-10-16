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
    FaTrashAlt,
    FaClock,
    FaWrench,
    FaShieldAlt,
    FaTint,
    FaWater,
    FaIndustry,
    FaCogs,
    FaChevronRight,
} from "react-icons/fa";
import { TbCylinder, TbHexagon, TbCube } from "react-icons/tb";
import { FiChevronLeft } from "react-icons/fi";
import "./Seabin.css";

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
    },
    {
        id: "5",
        title: "Seabin System",
        path: "/seabin",
        image: "/images/ICON5.png",
        active: true,
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

const keyFeatures = [
    "Continuous capture of trash, leaves, plastics, oil and grease",
    "Self-adjusting operation across normal water-level variation",
    "High-capacity removable basket with easy lifting",
    "Corrosion-resistant materials for long service life",
    "Low routine maintenance and quiet operation",
    "Suitable for continuous 24×7 automated cleaning",
];

const systemGlance = [
    { label: "Application", value: "Floating trash, leaves, plastics, oil and grease" },
    { label: "Installation", value: "Fixed, wall-mounted or flange-mounted" },
    { label: "Suitable for", value: "Confined tanks, basins, sumps and equalization tanks" },
    { label: "Cleaning method", value: "Active surface skimming with a venturi vortex" },
    { label: "Capacity", value: "Configured for 10 KLD tanks; customizable" },
    { label: "Automation", value: "Optional timer, level sensor and remote monitoring" },
];

const performanceHighlights = [
    { id: "1", icon: <FaTrashAlt />, value: ">95%", label: "Floating debris removal" },
    { id: "2", icon: <FaClock />, value: "24×7", label: "Automated operation" },
    { id: "3", icon: <FaWrench />, value: "LOW", label: "Maintenance requirement" },
    { id: "4", icon: <FaShieldAlt />, value: "ROBUST", label: "Corrosion-resistant construction" },
    { id: "5", icon: <FaTint />, value: "CLEAN", label: "Improved surface quality" },
];

const coreOperatingData = [
    { label: "Surface flow", value: "Up to 0.42 m³/hr" },
    { label: "Pump", value: "0.75 – 1.0 HP" },
    { label: "Flow rate", value: "12 – 18 m³/hr" },
    { label: "Head", value: "8 – 10 m" },
    { label: "Power", value: "230 V AC, 1 phase" },
    { label: "Operating pH", value: "6 – 9" },
    { label: "Water depth", value: ">600 mm" },
    { label: "Noise", value: "<65 dB" },
];

const typicalApplications = [
    { icon: <FaWater />, title: "Equalization Tanks" },
    { icon: <TbCylinder />, title: "Collection Basins" },
    { icon: <FaIndustry />, title: "STP / ETP Units" },
    { icon: <FaCogs />, title: "Industrial Water" },
];

export default function Seabin() {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = ["Overview", "Specifications", "Features", "Applications", "Downloads"];

    return (
        <div className="seabin-page-root">
            {/* 1. TOP NAVBAR */}
            <header className="seabin-header">
                <div className="seabin-nav-container">
                    <div className="seabin-nav-left">
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
                            className="seabin-logo-link"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/");
                            }}
                        >
                            <img
                                src="/LOGO BARIFLO CYBERNETICS 2025-03-03.png"
                                alt="Bariflo Cybernetics"
                                className="seabin-logo-img"
                            />
                        </a>
                    </div>

                    <nav className="seabin-nav-menu">
                        <button type="button" className="seabin-nav-link" onClick={() => navigate("/")}>
                            HOME
                        </button>
                        <div className="seabin-nav-link-wrap active">
                            <button
                                type="button"
                                className="seabin-nav-link active"
                                onClick={() => navigate("/act")}
                            >
                                INDUSTRIES
                            </button>
                            <div className="seabin-nav-active-bar" />
                        </div>
                        <button
                            type="button"
                            className="seabin-nav-link"
                            onClick={() => navigate("/cognition")}
                        >
                            COGNITION
                        </button>
                        <button
                            type="button"
                            className="seabin-nav-link"
                            onClick={() => navigate("/case-studies")}
                        >
                            IMPACT
                        </button>
                        <button
                            type="button"
                            className="seabin-nav-link"
                            onClick={() => navigate("/teamMember")}
                        >
                            ABOUT US
                        </button>
                    </nav>

                    <div className="seabin-nav-actions">
                        <button
                            type="button"
                            className="seabin-search-icon-btn"
                            aria-label="Search"
                            onClick={() => navigate("/act")}
                        >
                            <FaSearch size={15} />
                        </button>

                        <button
                            type="button"
                            className="seabin-consultation-btn"
                            onClick={() => navigate("/contactUs")}
                        >
                            Schedule a Consultation <FaArrowRight size={12} />
                        </button>

                        <button
                            type="button"
                            className="seabin-mobile-toggle"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="seabin-mobile-drawer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="seabin-mobile-links">
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
                                    className="seabin-mobile-cta"
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
            <section className="seabin-hero-section">
                <div className="seabin-hero-bg-overlay" />
                <div className="seabin-hero-container">
                    <div className="seabin-hero-content">
                        <div className="seabin-breadcrumbs">
                            <span>Industries</span>
                            <span className="seabin-bc-sep">&gt;</span>
                            <span>Industrial Wastewater</span>
                            <span className="seabin-bc-sep">&gt;</span>
                            <span className="seabin-bc-current">Seabin System</span>
                        </div>

                        <h1 className="seabin-hero-title">Seabin System</h1>
                        <h2 className="seabin-hero-subtitle">
                            Smart Surface Cleaning & Floating Trash Removal System
                        </h2>
                        <p className="seabin-hero-desc">
                            Automated removal of floating trash, leaves, oil, grease and debris from confined
                            tanks, equalization tanks and basins.
                        </p>

                        <div className="seabin-badges-row">
                            <div className="seabin-badge-pill">
                                <div className="seabin-badge-icon">
                                    <FaWater />
                                </div>
                                <span>Cleaner Surface Water</span>
                            </div>

                            <div className="seabin-badge-pill">
                                <div className="seabin-badge-icon">
                                    <FaWrench />
                                </div>
                                <span>Lower Maintenance</span>
                            </div>

                            <div className="seabin-badge-pill">
                                <div className="seabin-badge-icon">
                                    <FaShieldAlt />
                                </div>
                                <span>Reliable Operations</span>
                            </div>

                            <div className="seabin-badge-pill">
                                <div className="seabin-badge-icon">
                                    <FaLeaf />
                                </div>
                                <span>Sustainable Ecosystems</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Floating Unit Card */}
                    <div className="seabin-hero-right-card">
                        <div className="seabin-cleanwater-glass">
                            <div className="seabin-glass-icon-box">
                                <TbHexagon className="seabin-glass-hex" />
                                <FaTint className="seabin-glass-tint" />
                            </div>
                            <div className="seabin-glass-text">
                                <span className="seabin-glass-heading">Clean Water</span>
                                <span className="seabin-glass-sub">for a Healthier Tomorrow</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SUB-NAV ACTION BAR */}
            <div className="seabin-subnav-bar">
                <div className="seabin-subnav-container">
                    <div className="seabin-subnav-tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                className={`seabin-subnav-tab ${activeTab === tab ? "active" : ""}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                                {activeTab === tab && <div className="seabin-tab-indicator" />}
                            </button>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="seabin-quote-btn"
                        onClick={() => navigate("/contactUs")}
                    >
                        Request a Quote <FaArrowRight size={12} />
                    </button>
                </div>
            </div>

            {/* 4. MAIN LAYOUT (Sidebar + Content) */}
            <main className="seabin-main-section">
                <div className="seabin-layout-container">
                    {/* LEFT SIDEBAR: ALL SOLUTIONS */}
                    <aside className="seabin-sidebar">
                        <div className="seabin-sidebar-header">
                            <div className="seabin-sidebar-compass-icon">
                                <TbCube />
                            </div>
                            <h3>All Solutions</h3>
                        </div>

                        <div className="seabin-sidebar-list">
                            {allSolutions.map((sol) => (
                                <motion.div
                                    key={sol.id}
                                    className={`seabin-sidebar-item ${sol.active ? "active" : ""}`}
                                    whileHover={{ x: sol.active ? 0 : 5, scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.18 }}
                                    onClick={() => {
                                        if (sol.path && sol.path !== "#" && sol.path !== "/seabin") {
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
                                    <div className="seabin-sidebar-item-thumb">
                                        <img src={sol.image} alt={sol.title} />
                                    </div>
                                    <div className="seabin-sidebar-item-info">
                                        <span className="seabin-sidebar-item-num">{sol.id}</span>
                                        <span className="seabin-sidebar-item-name">{sol.title}</span>
                                    </div>
                                    {sol.active && (
                                        <div className="seabin-sidebar-item-arrow">
                                            <FaChevronRight size={12} />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </aside>

                    {/* RIGHT CONTENT COLUMN (ANIMATED) */}
                    <motion.div
                        className="seabin-content-column"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {/* ROW 1: System Diagram + Key Features */}
                        <div className="seabin-grid-row seabin-row-diagram-features">
                            {/* System Diagram Card */}
                            <div className="seabin-card seabin-diagram-card">
                                <div className="seabin-card-header">
                                    <h3 className="seabin-card-title">System Diagram</h3>
                                    <div className="seabin-3d-badge">
                                        <TbCube size={15} />
                                        <span>3D View</span>
                                    </div>
                                </div>

                                <div className="seabin-diagram-wrapper">
                                    <img
                                        src="/images/SEABIN SYSTEM.png"
                                        alt="Seabin System 3D Diagram"
                                        className="seabin-diagram-img"
                                    />
                                </div>
                            </div>

                            {/* Key Features Card */}
                            <div className="seabin-card seabin-features-card">
                                <div className="seabin-card-header">
                                    <h3 className="seabin-card-title">Key Features</h3>
                                </div>

                                <ul className="seabin-features-list">
                                    {keyFeatures.map((feat, idx) => (
                                        <li key={idx} className="seabin-feature-item">
                                            <div className="seabin-check-bubble">
                                                <FaCheck size={11} />
                                            </div>
                                            <span className="seabin-feature-text">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* ROW 2: System at a Glance + Performance Highlights */}
                        <div className="seabin-grid-row seabin-row-glance-highlights">
                            {/* System at a Glance Card */}
                            <div className="seabin-card seabin-glance-card">
                                <div className="seabin-card-header">
                                    <h3 className="seabin-card-title">System at a Glance</h3>
                                </div>

                                <div className="seabin-table-responsive">
                                    <table className="seabin-specs-table">
                                        <tbody>
                                            {systemGlance.map((row, idx) => (
                                                <tr key={idx}>
                                                    <td className="seabin-table-label">{row.label}</td>
                                                    <td className="seabin-table-val">{row.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Performance Highlights Card */}
                            <div className="seabin-card seabin-highlights-card">
                                <div className="seabin-card-header">
                                    <h3 className="seabin-card-title">Performance Highlights</h3>
                                </div>

                                <div className="seabin-metrics-grid">
                                    {performanceHighlights.map((m) => (
                                        <div key={m.id} className={`seabin-metric-tile seabin-metric-tile-${m.id}`}>
                                            <div className="seabin-metric-icon">{m.icon}</div>
                                            <div className="seabin-metric-val">{m.value}</div>
                                            <div className="seabin-metric-label">{m.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ROW 3: Core Operating Data + Working Principle & Applications */}
                        <div className="seabin-grid-row seabin-row-data-working">
                            {/* Core Operating Data Card */}
                            <div className="seabin-card seabin-data-card">
                                <div className="seabin-card-header">
                                    <h3 className="seabin-card-title">Core Operating Data</h3>
                                </div>

                                <div className="seabin-table-responsive">
                                    <table className="seabin-specs-table">
                                        <tbody>
                                            {coreOperatingData.map((row, idx) => (
                                                <tr key={idx}>
                                                    <td className="seabin-table-label">{row.label}</td>
                                                    <td className="seabin-table-val">{row.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Right Stack: Working Principle + Typical Applications */}
                            <div className="seabin-right-substack">
                                {/* Working Principle */}
                                <div className="seabin-card seabin-principle-card">
                                    <div className="seabin-card-header">
                                        <h3 className="seabin-card-title">Working Principle</h3>
                                    </div>

                                    <div className="seabin-principle-body">
                                        <div className="seabin-principle-circle-icon">
                                            <FaWater size={22} />
                                        </div>
                                        <p className="seabin-principle-text">
                                            Surface water enters through the intake opening and accelerates through the
                                            venturi throat, creating a controlled vortex. Floating debris moves toward the
                                            centre and is retained in the removable basket, while clean water is discharged
                                            below the surface and returned to the tank.
                                        </p>
                                    </div>
                                </div>

                                {/* Typical Applications */}
                                <div className="seabin-card seabin-applications-card">
                                    <div className="seabin-card-header">
                                        <h3 className="seabin-card-title">Typical Applications</h3>
                                    </div>

                                    <div className="seabin-apps-grid">
                                        {typicalApplications.map((app, idx) => (
                                            <div key={idx} className="seabin-app-box">
                                                <div className="seabin-app-icon">{app.icon}</div>
                                                <span className="seabin-app-name">{app.title}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="seabin-apps-footnote">
                                        Also suitable for process tanks, sumps, rainwater tanks and storage basins.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Disclaimer Footnote */}
                        <div className="seabin-disclaimer">
                            <p>
                                Note: Performance and operating data are indicative and may change based on site
                                conditions and customization.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* 5. CALL TO ACTION FOOTER RIBBON */}
            <section className="seabin-cta-section">
                <div className="seabin-cta-banner">
                    <div className="seabin-cta-left">
                        <div className="seabin-cta-leaf-circle">
                            <FaLeaf className="seabin-cta-leaf-icon" />
                        </div>

                        <div className="seabin-cta-text-group">
                            <h2 className="seabin-cta-title">Cleaner Water. Smarter Industry.</h2>
                            <p className="seabin-cta-subtitle">
                                Intelligent solutions for a sustainable tomorrow.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="seabin-cta-btn"
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
                                    src="/LOGO BARIFLO CYBERNETICS 2025-03-03.png"
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
