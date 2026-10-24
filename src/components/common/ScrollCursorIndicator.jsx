import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./ScrollCursorIndicator.css";

const ScrollCursorIndicator = () => {
  // Top scroll progress bar - bind directly to scrollYProgress for zero-lag instant feedback
  const { scrollYProgress } = useScroll();

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isPast = window.scrollY > 80;
      setHasScrolled((prev) => (prev !== isPast ? isPast : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* 1. Sleek Top Scroll Progress Indicator Bar */}
      <motion.div className="scroll-progress-bar" style={{ scaleX: scrollYProgress }} />

      {/* 2. Floating Scroll-Down Cue (Fades smoothly when user scrolls) */}
      <div
        className={`scroll-mouse-cue ${hasScrolled ? "hidden" : ""}`}
        onClick={() => window.scrollBy({ top: 450, behavior: "smooth" })}
        role="button"
        tabIndex={0}
        aria-label="Scroll down to explore"
      >
        <div className="scroll-mouse-icon">
          <div className="scroll-mouse-wheel"></div>
        </div>
        <span className="scroll-mouse-text">Scroll to explore</span>
      </div>
    </>
  );
};

export default ScrollCursorIndicator;
