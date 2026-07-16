import Link from "next/link";
import styles from "./landing.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <div className={styles.footerBrand}>
            <div className={styles.navMark}>N</div>
            <span className={styles.navName}>NORTHFORGE</span>
          </div>
          <p className={styles.footerText}>
            Residential &amp; commercial construction done right the first time. Licensed,
            insured, and on time for 20 years.
          </p>
        </div>
        <div>
          <div className={styles.footerColLabel}>EXPLORE</div>
          <div className={styles.footerLinks}>
            <Link href="/services">Services</Link>
            <Link href="/#process">Process</Link>
            <Link href="/#gallery">Projects</Link>
            <Link href="/#reviews">Reviews</Link>
          </div>
        </div>
        <div>
          <div className={styles.footerColLabel}>CONTACT</div>
          <div className={styles.footerContact}>
            <span>(555) 018-2200</span>
            <span>build@northforge.co</span>
            <span>1420 Kiln Road, Unit 7</span>
          </div>
        </div>
        <div>
          <div className={styles.footerColLabel}>CREDENTIALS</div>
          <div className={styles.footerCredentials}>
            <span>LIC #CB-408817</span>
            <span>BONDED &amp; INSURED</span>
            <span>EPA · OSHA</span>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© 2026 Northforge Build Co. All rights reserved.</span>
        <span className={styles.footerBottomTag}>BUILT RIGHT · THE FIRST TIME</span>
      </div>
    </footer>
  );
}
