import React from 'react';
import { motion } from 'framer-motion';
import './NewLandingPage.css';
import Header from '../components/new-landing/Header';
import Hero from '../components/new-landing/Hero';
import Stats from '../components/new-landing/Stats';
import Industries from '../components/new-landing/Industries';
import Footer from '../components/new-landing/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};

const NewLandingPage = () => {
  return (
    <div className="new-landing-wrapper">
      <Header />

      <motion.div initial="hidden" animate="visible" variants={fadeVariant}>
        <Hero />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeUpVariant}>
        <Stats />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUpVariant}>
        <Industries />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeVariant}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default NewLandingPage;
