import styles from "./landing.module.css";
import { scrollToForm } from "./scrollToForm";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navBrand}>
        <div className={styles.navMark}>N</div>
        <span className={styles.navName}>NORTHFORGE</span>
      </div>
      <div className={styles.navLinks}>
        <a href="#services" className={styles.navLink}>
          Services
        </a>
        <a href="#process" className={styles.navLink}>
          Process
        </a>
        <a href="#gallery" className={styles.navLink}>
          Projects
        </a>
        <a href="#reviews" className={styles.navLink}>
          Reviews
        </a>
        <button className={`${styles.btn} ${styles.navCta}`} onClick={scrollToForm}>
          Get a free quote →
        </button>
      </div>
    </nav>
  );
}
