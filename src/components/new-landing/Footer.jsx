import React from 'react';
import { FaLinkedinIn, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Footer = ({ hideFutureCognitive = false }) => {
  return (
    <>
      {!hideFutureCognitive && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
          }}
        >
          <div className="nl-future-cognitive">
            THE FUTURE OF <br />
            <span>WATER</span> IS COGNITIVE.
          </div>
        </motion.div>
      )}

      <motion.footer 
        className="nl-footer-bar"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="nl-footer-left">
          <motion.div variants={fadeUpVariant} className="nl-trust-label">
            TRUSTED BY <br />
            INDUSTRY LEADERS
          </motion.div>
          <motion.div variants={fadeUpVariant} className="nl-footer-divider"></motion.div>
          <div className="nl-logos">
            <motion.img
              variants={fadeUpVariant}
              src="/LOGO BARIFLO CYBERNETICS 2025-03-03.png"
              alt="Bariflo Cybernetics"
              className="nl-logo-bariflo"
              title="Bariflo Cybernetics"
            />
          </div>
        </div>

        <div className="nl-footer-right">
          <motion.div variants={fadeUpVariant} className="nl-footer-divider"></motion.div>
          <motion.div variants={fadeUpVariant} className="nl-copyright-info">
            <span className="nl-copyright-text">@2024 Bariflo Cybernetics Pvt Ltd</span>
            <div className="nl-copyright-links">
              <a href="#privacy">Privacy</a> | <a href="#terms">Terms of Use</a>
            </div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="nl-social-boxes">
            <a href="#linkedin" className="nl-social-box"><FaLinkedinIn /></a>
            <a href="#twitter" className="nl-social-box"><FaXTwitter /></a>
            <a href="#email" className="nl-social-box"><FaEnvelope /></a>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
