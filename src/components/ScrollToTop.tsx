import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // useLayoutEffect pour scroll AVANT le paint du navigateur
  useLayoutEffect(() => {
    // Scroll immédiat
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Scroll conteneurs possibles
    const selectors = ["main", "#root", ".app", ".layout"];
    selectors.forEach((selector) => {
      const el = document.querySelector(selector);
      if (el) {
        el.scrollTop = 0;
      }
    });
  }, [pathname]);

  // Double-check après le render complet
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
