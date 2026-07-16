import Image from "next/image";
import styles from "./landing.module.css";

const FEATURES = [
  {
    title: "Fixed-price guarantee",
    text: "The number we quote is the number you pay. Change orders only when you ask for them, in writing.",
  },
  {
    title: "In-house crews",
    text: "Our own carpenters and site leads, not the cheapest sub of the week. Consistent quality on every job.",
  },
  {
    title: "One project manager",
    text: "A single dedicated contact from quote to keys. You always know who to call.",
  },
  {
    title: "Daily photo updates",
    text: "See progress from anywhere. Photos and a short note land in your inbox at the end of every build day.",
  },
];

export default function WhyUs() {
  return (
    <div className={styles.whyUsGrid}>
      <div className={styles.whyUsImage}>
        <Image
          src="/images/whyus-crew.jpg"
          alt="Construction crew working together on a job site"
          fill
          sizes="(max-width: 900px) 100vw, 45vw"
          style={{ objectFit: "cover" }}
        />
        <div className={styles.whyUsBadge}>
          <div className={styles.whyUsBadgeValue}>20 years</div>
          <div className={styles.whyUsBadgeText}>of doing exactly what we said we&apos;d do.</div>
        </div>
      </div>
      <div>
        <div className={styles.eyebrow}>02 — WHY NORTHFORGE</div>
        <h2 className={styles.whyUsHeading}>Built different, where it actually counts</h2>
        <div className={styles.whyUsFeatures}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.whyUsFeature}>
              <div className={styles.whyUsFeatureTitle}>{f.title}</div>
              <p className={styles.whyUsFeatureText}>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
