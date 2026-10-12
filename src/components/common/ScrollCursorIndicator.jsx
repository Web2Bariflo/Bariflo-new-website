import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./ScrollCursorIndicator.css";

const ScrollCursorIndicator = () => {
  // Top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80 && !hasScrolled) {
        setHasScrolled(true);
      } else if (window.scrollY <= 80 && hasScrolled) {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <>
      {/* 1. Sleek Top Scroll Progress Indicator Bar */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

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
