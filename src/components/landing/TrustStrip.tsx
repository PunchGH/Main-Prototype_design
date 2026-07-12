import styles from "./landing.module.css";

export default function TrustStrip() {
  return (
    <>
      <span className={styles.trustLabel}>
        TRUSTED BY HOMEOWNERS &amp; DEVELOPERS ACROSS THE REGION
      </span>
      <div className={styles.trustLogos}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={`${styles.placeholder} ${styles.trustLogo}`}>
            [ LOGO ]
          </div>
        ))}
      </div>
    </>
  );
}
