"use client";

import Link from "next/link";
import styles from "./landing.module.css";
import { scrollToForm } from "./scrollToForm";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navBrand}>
        <div className={styles.navMark}>N</div>
        <span className={styles.navName}>NORTHFORGE</span>
      </Link>
      <div className={styles.navLinks}>
        <Link href="/services" className={styles.navLink}>
          Services
        </Link>
        <Link href="/#process" className={styles.navLink}>
          Process
        </Link>
        <Link href="/#gallery" className={styles.navLink}>
          Projects
        </Link>
        <Link href="/#reviews" className={styles.navLink}>
          Reviews
        </Link>
      </div>
      <div className={styles.navCtaContainer}>
        <button className={`${styles.btn} ${styles.navCta}`} onClick={scrollToForm}>
          Get my free quote →
        </button>
      </div>
    </nav>
  );
}
