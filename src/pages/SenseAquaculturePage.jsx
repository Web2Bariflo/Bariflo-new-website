import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './NewLandingPage.css';
import './SenseAquaculturePage.css';
import '../components/home/IntelligentETP.css';
import '../components/home/cognition.css';
import '../components/home/Act.css';
import Footer from '../components/new-landing/Footer';
import {
  BiTargetLock,
  BiWater,
  BiWifi,
  BiBell,
  BiTime,
  BiCog,
  BiCheckShield,
  BiBarChartAlt2,
  BiRightArrowAlt
} from 'react-icons/bi';
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaLeaf,
} from 'react-icons/fa';
import { FiChevronLeft } from 'react-icons/fi';

const SenseAquaculturePage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sense-page-wrapper">
      {/* Top Navbar Matching Cognition Page Perfectly */}
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
              onClick={(e) => {
                e.preventDefault();
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
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                HOME
              </a>
              <a
                href="#industries"
                className="act-nav-item"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                INDUSTRIES <FaChevronDown size={11} className="act-chevron" />
              </a>
              <div className="act-nav-dropdown-item active">
                <a
                  href="#sense"
                  className="act-nav-item"
                  onClick={(e) => e.preventDefault()}
                >
                  SENSE
                </a>
                <div className="act-nav-active-bar" />
              </div>
              <a
                href="#impact"
                className="act-nav-item"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                IMPACT
              </a>
              <a
                href="#about"
                className="act-nav-item"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                ABOUT US
              </a>
            </nav>
          </div>

          <div className="act-nav-actions">
            <button
              type="button"
              className="act-btn-consultation act-btn-consultation-big"
              onClick={() => navigate("/contactUs")}
            >
              <FaLeaf className="act-btn-leaf-icon" size={15} />
              <span>Schedule Strategic Discussion</span>
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

        {/* Mobile Dropdown Drawer Matching Cognition / Act Clean UI */}
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
                  href="#sense"
                  className="act-mobile-link active"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                  }}
                >
                  SENSE
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
                  className="act-mobile-btn-consultation"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/contactUs");
                  }}
                >
                  <FaLeaf size={14} />
                  <span>Schedule Strategic Discussion</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Breadcrumb */}
      <div className="sense-breadcrumb-bar">
        <div className="sense-breadcrumb">SENSE &gt; AQUACULTURE MONITORING</div>
      </div>

      {/* Hero Section */}
      <section className="sense-hero-section">
        <div className="sense-hero-left">
          <div className="sense-hero-text-container">
            <h1 className="sense-hero-title">
              Sensing in Action:<br />
              <span>Aquaculture</span>
            </h1>
            <p className="sense-hero-desc">
              Our intelligent sampler collects water from the pond and delivers it to the integrated sensing chamber for real-time, multi-parameter analysis.
            </p>
          </div>

          <div className="sense-hero-features-grid">
            <div className="sense-feature-item">
              <div className="sense-feature-icon-wrapper">
                <BiTargetLock size={28} />
              </div>
              <div className="sense-feature-text">
                <h4>Continuous Sensing</h4>
                <p>Real-time monitoring of critical water parameters</p>
              </div>
            </div>

            <div className="sense-feature-item">
              <div className="sense-feature-icon-wrapper">
                <BiWater size={28} />
              </div>
              <div className="sense-feature-text">
                <h4>Intelligent Sampling</h4>
                <p>Automated, contamination-free sampling</p>
              </div>
            </div>

            <div className="sense-feature-item">
              <div className="sense-feature-icon-wrapper">
                <BiWifi size={28} />
              </div>
              <div className="sense-feature-text">
                <h4>Smart & Connected</h4>
                <p>IoT-enabled instrumentation with remote access</p>
              </div>
            </div>

            <div className="sense-feature-item">
              <div className="sense-feature-icon-wrapper">
                <BiBell size={28} />
              </div>
              <div className="sense-feature-text">
                <h4>Smart Alerts</h4>
                <p>Instant notifications & actionable recommendations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sense-hero-right">
          <motion.div 
            className="sense-hero-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/sense-hero.png"
              onError={(e) => { e.target.onerror = null; e.target.src = '/cybernetic_water_head_1782112346121.png'; }}
              className="sense-hero-main-img"
              alt="Sensing Unit Composite"
            />
            <div className="sense-callout-box callout-sampler">
              SAMPLER DEPLOYED IN POND
            </div>
            <div className="sense-callout-box callout-pump">
              WATER PUMPED TO SENSING UNIT
            </div>
            <div className="sense-callout-box callout-chamber">
              SENSING & ANALYSIS IN CHAMBER
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <motion.section className="sense-how-it-works" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}>
        <div className="sense-section-header">
          <div className="sense-section-line"></div>
          <h3 className="sense-section-title">HOW IT WORKS</h3>
          <div className="sense-section-line"></div>
        </div>

        <div className="how-it-works-grid">
          {/* Card 1 */}
          <div className="how-it-works-card">
            <div className="how-it-works-card-header">
              <div className="step-badge">1</div>
              <h4>POND / FARM</h4>
            </div>
            <div className="how-it-works-img-container">
              <img
                src="/images/pond-farm.png"
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/rectangular_ponds.jpg'; }}
                alt="Pond / Farm"
              />
            </div>
            <p>Water quality challenges start in the pond</p>
          </div>

          <div className="step-arrow">&rarr;</div>

          {/* Card 2 */}
          <div className="how-it-works-card">
            <div className="how-it-works-card-header">
              <div className="step-badge">2</div>
              <h4>SAMPLER DEPLOYED IN POND</h4>
            </div>
            <div className="how-it-works-img-container">
              <img
                src="/images/sampler-buoy.png"
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/aquaculture_cages.jpg'; }}
                alt="Sampler Deployed"
              />
            </div>
            <p>Intelligent sampler collects water at set intervals</p>
          </div>

          <div className="step-arrow">&rarr;</div>

          {/* Card 3 */}
          <div className="how-it-works-card">
            <div className="how-it-works-card-header">
              <div className="step-badge">3</div>
              <h4>WATER PUMPED TO SENSING UNIT</h4>
            </div>
            <div className="how-it-works-img-container">
              <img
                src="/images/water-pump.png"
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/industrial_bg.jpg'; }}
                alt="Water Pumped"
              />
            </div>
            <p>Water is pumped through pre-filtration to the sensing chamber</p>
          </div>

          <div className="step-arrow">&rarr;</div>

          {/* Card 4 */}
          <div className="how-it-works-card">
            <div className="how-it-works-card-header">
              <div className="step-badge">4</div>
              <h4>SENSING & ANALYSIS IN CHAMBER</h4>
            </div>
            <div className="how-it-works-img-container">
              <img
                src="/images/chamber-analysis.png"
                onError={(e) => { e.target.onerror = null; e.target.src = '/cybernetic_water_head_1782112346121.png'; }}
                alt="Sensing & Analysis"
              />
            </div>
            <p>Multi-parameter analysis using advanced sensing technologies</p>
          </div>
        </div>

        {/* Dashed visual loop connecting back */}
        <div className="dashed-loop-container">
          <svg className="dashed-loop-svg" viewBox="0 0 1000 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="dashed-line" d="M 900 0 L 900 20 L 100 20 L 100 0" />
            <polygon points="96,5 100,0 104,5" fill="#0066CC" />
            <polygon points="896,5 900,0 904,5" fill="#0066CC" />
          </svg>
        </div>
      </motion.section>

      {/* Dual Panels Section */}
      <motion.section className="sense-dual-panels" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}>
        {/* Left Panel */}
        <div className="sense-panel sense-panel-left">
          <h3 className="sense-panel-title">INSIDE THE INTEGRATED SENSING CHAMBER</h3>

          <div className="chamber-graphic-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/integrated-chamber.png"
              onError={(e) => { e.target.onerror = null; e.target.src = '/cybernetic_water_head_1782112346121.png'; }}
              className="chamber-main-img"
              alt="Chamber Cross Section"
              style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '12px' }}
            />
          </div>

          <div className="chamber-columns-grid">
            <div className="chamber-col-item">
              <div className="col-num-badge">1</div>
              <h5>FLOW STABILIZATION</h5>
              <p>Ensures consistent and uniform flow</p>
            </div>
            <div className="chamber-col-item">
              <div className="col-num-badge">2</div>
              <h5>MULTI-PARAMETER SENSING</h5>
              <p>In-line sensors measure critical water quality parameters</p>
            </div>
            <div className="chamber-col-item">
              <div className="col-num-badge">3</div>
              <h5>AUTOMATED SAMPLING</h5>
              <p>Precision sampler collects accurate samples</p>
            </div>
            <div className="chamber-col-item">
              <div className="col-num-badge">4</div>
              <h5>ADVANCED SENSING TECHNOLOGIES</h5>
              <p>Integrated photonics, spectroscopy and vision modules</p>
            </div>
            <div className="chamber-col-item">
              <div className="col-num-badge">5</div>
              <h5>WASTE DISCHARGE</h5>
              <p>Safe discharge of used water</p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="sense-panel sense-panel-right">
          <h3 className="sense-panel-title">ADVANCED SENSING TECHNOLOGIES</h3>

          <div className="advanced-tech-grid">
            <div className="tech-card">
              <div className="tech-img-container">
                <img
                  src="/images/photonics-ic.jpg"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/icon-sense.png'; }}
                  alt="Photonics Integrated Circuits"
                />
              </div>
              <h4>PHOTONICS INTEGRATED CIRCUITS</h4>
              <p>Ultra-fast, multi-parameter detection using on-chip photonic sensors.</p>
              <a href="#learn-more" className="tech-link">Learn more <BiRightArrowAlt size={18} /></a>
            </div>

            <div className="tech-card">
              <div className="tech-img-container">
                <img
                  src="/images/nmr-spectroscopy.jpg"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/icon-understand.png'; }}
                  alt="NMR Spectroscopy"
                />
              </div>
              <h4>NMR SPECTROSCOPY</h4>
              <p>Molecular-level analysis for comprehensive water characterization.</p>
              <a href="#learn-more" className="tech-link">Learn more <BiRightArrowAlt size={18} /></a>
            </div>

            <div className="tech-card">
              <div className="tech-img-container">
                <img
                  src="/images/photonics-spec.jpg"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/icon-act.png'; }}
                  alt="Photonics Spectroscopy"
                />
              </div>
              <h4>PHOTONICS SPECTROSCOPY</h4>
              <p>High-resolution optical analysis across multiple wavelengths.</p>
              <a href="#learn-more" className="tech-link">Learn more <BiRightArrowAlt size={18} /></a>
            </div>

            <div className="tech-card">
              <div className="tech-img-container">
                <img
                  src="/images/machine-vision.jpg"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/cybernetic_water_head_1782112346121.png'; }}
                  alt="Machine Vision with AI-Edge"
                />
              </div>
              <h4>MACHINE VISION WITH AI-EDGE</h4>
              <p>AI-powered image analysis for particles, flocs and anomalies in real time.</p>
              <a href="#learn-more" className="tech-link">Learn more <BiRightArrowAlt size={18} /></a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CALL TO ACTION BANNER (Before Footer) */}
      <motion.section
        className="cog-cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

      <Footer hideFutureCognitive={true} />
    </div>
  );
};

export default SenseAquaculturePage;
