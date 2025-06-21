//compionent to fix the scroll effect 

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
const ResetToStart = () => {
  const { pathname } = useLocation();
 
  useEffect(() => {
    // Disable browser's default scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
 
    // Scroll to top when the pathname changes or on refresh
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "auto" if you prefer no animation
    });
 
    return () => {
      // Restore default behavior if needed when component unmounts
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, [pathname]);
 
  return null;
};
 
export default ResetToStart;