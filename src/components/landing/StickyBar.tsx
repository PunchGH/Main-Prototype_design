"use client";

import { useEffect, useState } from "react";
import styles from "./landing.module.css";
import { scrollToForm } from "./scrollToForm";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const quote = document.getElementById("quote");
      let show = window.scrollY > 650;
      if (quote) {
        const r = quote.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 120) show = false;
      }
      setVisible(show);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${styles.stickyBar} ${visible ? styles.stickyBarVisible : ""}`}>
      <div className={styles.stickyBarInfo}>
        <span className={styles.stickyBarScore}>4.9★</span>
        <span className={styles.stickyBarText}>147 Google reviews</span>
        <span className={styles.stickyBarDivider}>|</span>
        <span className={styles.stickyBarText}>Free quote · response in 1 business day</span>
      </div>
      <button className={`${styles.btn} ${styles.stickyBarBtn}`} onClick={scrollToForm}>
        Get my free quote →
      </button>
    </div>
  );
}
