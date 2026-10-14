//compionent to fix the scroll effect 

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
const ResetToStart = () => {
  const { pathname, state } = useLocation();
 
  useEffect(() => {
    // Disable browser's default scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If navigating between solutions from sidebar, preserve scroll position
    if (state?.fromSolutionSidebar && typeof state?.scrollY === "number") {
      const targetY = state.scrollY;
      window.scrollTo({
        top: targetY,
        left: 0,
        behavior: "instant",
      });
      requestAnimationFrame(() => {
        window.scrollTo({
          top: targetY,
          left: 0,
          behavior: "instant",
        });
      });
      return;
    }

    // Scroll to top when the pathname changes or on regular navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, [pathname, state]);
 
  return null;
};
 
export default ResetToStart;