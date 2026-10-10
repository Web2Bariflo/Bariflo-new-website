import React, { useState, useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Industries = () => {
  const [startIndex, setStartIndex] = useState(0);

  const industries = [
    {
      title: 'AQUACULTURE',
      heading: 'Intelligent farms',
      desc: 'Higher yield Sustainable future',
      img: '/images/aquaculture_cages.jpg'
    },
    {
      title: 'INDUSTRIAL WASTEWATER',
      heading: 'Optimize treatment',
      desc: 'Cut energy. Ensure compliance.',
      img: '/images/rectangular_ponds.jpg'
    },
    {
      title: 'MARINE FARMING',
      heading: 'Sustainable systems',
      desc: 'Optimized growth tracking.',
      img: '/aquaculture_card_1782112416629.png'
    },
    {
      title: 'WATER TREATMENT',
      heading: 'Eco-friendly processes',
      desc: 'Advanced monitoring.',
      img: '/wastewater_card_1782112437709.png'
    },
    {
      title: 'INDUSTRIAL UTILITIES',
      heading: 'Smart operations',
      desc: 'Lower cost. Greater reliability.',
      img: '/utilities_card_1782112461971.png'
    }
  ];

  const maxIndex = industries.length > 1 ? industries.length - 2 : 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <motion.section
      className="nl-industries"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeUpVariant} className="nl-industries-header">
        <div className="nl-ind-title">INDUSTRIES WE TRANSFORM</div>
        <div className="nl-ind-header-right" onClick={handleNext}>
          <span>View all industries</span>
          <div className="nl-ind-header-arrow">
            <BsArrowRight />
          </div>
        </div>
      </motion.div>

      <div className="nl-industries-grid">
        <motion.div variants={fadeUpVariant} className="nl-ind-intro">
          <h2>Intelligence for<br />Water-Intensive<br />Operations</h2>
          <p>
            From aquaculture farms to large-scale industrial plants, our systems adapt, learn and deliver outcomes that matter.
          </p>
          <a href="#all-industries" className="nl-ind-link-bottom">
            VIEW ALL INDUSTRIES
          </a>
          <a href="#platform" className="btn-explore-platform">
            EXPLORE PLATFORM
          </a>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="nl-ind-slider-container">
          <div
            className="nl-ind-slider-track"
            style={{ '--slide-index': startIndex }}
          >
            {industries.map((ind, idx) => (
              <div className="nl-ind-card" key={idx}>
                <img src={ind.img} alt={ind.title} />
                <div className="nl-ind-overlay">
                  <div className="nl-ind-card-content">
                    <span className="nl-ind-card-category">{ind.title}</span>
                    <h3 className="nl-ind-card-heading">{ind.heading}</h3>
                    <p className="nl-ind-card-desc">{ind.desc}</p>
                  </div>
                  <div className="nl-ind-card-arrow">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="nl-ind-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <span
                key={i}
                className={`nl-ind-dot ${startIndex === i ? 'active' : ''}`}
                onClick={() => setStartIndex(i)}
              ></span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Industries;

