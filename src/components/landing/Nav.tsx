"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./landing.module.css";
import { scrollToForm } from "./scrollToForm";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const handleCtaClick = () => {
    closeMenu();
    scrollToForm();
  };

  return (
    <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
      <Link href="/" className={styles.navBrand} onClick={closeMenu}>
        <div className={styles.navMark}>N</div>
        <span className={styles.navName}>NORTHFORGE</span>
      </Link>

      <button
        className={styles.navToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {menuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}>
        <Link href="/services" className={styles.navLink} onClick={closeMenu}>
          Services
        </Link>
        <Link href="/#process" className={styles.navLink} onClick={closeMenu}>
          Process
        </Link>
        <Link href="/#gallery" className={styles.navLink} onClick={closeMenu}>
          Projects
        </Link>
        <Link href="/#reviews" className={styles.navLink} onClick={closeMenu}>
          Reviews
        </Link>
        <button className={`${styles.btn} ${styles.navMobileCta}`} onClick={handleCtaClick}>
          Get my free quote →
        </button>
      </div>

      <div className={styles.navCtaContainer}>
        <button className={`${styles.btn} ${styles.navCta}`} onClick={handleCtaClick}>
          Get my free quote →
        </button>
      </div>
    </nav>
  );
}
