import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1️⃣ Scroll window (fallback)
    window.scrollTo(0, 0);

    // 2️⃣ Scroll conteneurs possibles
    const selectors = ["main", "#root", ".app", ".layout"];

    selectors.forEach((selector) => {
      const el = document.querySelector(selector);
      if (el) {
        el.scrollTop = 0;
      }
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
