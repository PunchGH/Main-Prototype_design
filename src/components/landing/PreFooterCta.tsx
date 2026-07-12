import styles from "./landing.module.css";
import { scrollToForm } from "./scrollToForm";

export default function PreFooterCta() {
  return (
    <>
      <div className={styles.preFooterText}>Ready when you are — quotes are free.</div>
      <button className={`${styles.btn} ${styles.preFooterBtn}`} onClick={scrollToForm}>
        Get my free quote →
      </button>
    </>
  );
}
