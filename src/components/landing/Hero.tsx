import styles from "./landing.module.css";
import { scrollToForm } from "./scrollToForm";
import StatCounter from "./StatCounter";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video className={styles.heroBg} autoPlay loop muted playsInline>
        <source src="/Hero-video.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroScrim} />
      <div className={styles.heroAccentBar} />

      <div className={styles.heroContent}>
        <div className={styles.heroKicker}>
          <span className={styles.heroKickerLine} />
          RESIDENTIAL · COMMERCIAL · RENOVATION
        </div>
        <h1 className={styles.heroTitle}>
          We build it right the <span className={styles.heroTitleAccent}>first time.</span>
        </h1>
        <p className={styles.heroSub}>
          Ground-up homes, full renovations and commercial builds — delivered on schedule, on
          budget, and inspection-ready. No surprises, no runaround.
        </p>
        <div className={styles.heroActions}>
          <button className={`${styles.btn} ${styles.heroPrimaryBtn}`} onClick={scrollToForm}>
            Get my free quote →
          </button>
          <a href="#gallery" className={styles.heroSecondaryLink}>
            See our work
          </a>
        </div>

      </div>

      <div className={styles.heroStats}>
        <div className={styles.heroStat}>
          <div className={`${styles.heroStatValue} ${styles.heroStatValueAccent}`}>
            <StatCounter target={20} />
          </div>
          <div className={styles.heroStatLabel}>YEARS BUILDING</div>
        </div>
        <div className={styles.heroStat}>
          <div className={styles.heroStatValue}>
            <StatCounter target={540} suffix="+" />
          </div>
          <div className={styles.heroStatLabel}>PROJECTS DELIVERED</div>
        </div>
        <div className={styles.heroStat}>
          <div className={styles.heroStatValue}>
            <StatCounter target={4.9} decimals={1} />
            <span className={styles.heroStatValueAccent}>★</span>
          </div>
          <div className={styles.heroStatLabel}>147 GOOGLE REVIEWS</div>
        </div>
        <div className={styles.heroStat}>
          <div className={styles.heroStatValue}>
            <StatCounter target={100} suffix="%" />
          </div>
          <div className={styles.heroStatLabel}>ON-TIME RECORD</div>
        </div>
      </div>
    </section>
  );
}
