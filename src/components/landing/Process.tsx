import Image from "next/image";
import styles from "./landing.module.css";

const STEPS = [
  {
    num: "01",
    title: "Free Quote",
    image: "/images/process-quote.jpg",
    alt: "Two professionals shaking hands over a consultation",
    text: "Tell us about your project. We visit, listen, and send a clear, itemized quote. No pressure.",
  },
  {
    num: "02",
    title: "Design & Plan",
    image: "/images/process-design.jpg",
    alt: "Architectural floor plans laid out on a table",
    text: "We lock the scope, drawings, materials, and schedule, then handle every permit for you.",
  },
  {
    num: "03",
    title: "We Build",
    image: "/images/process-build.jpg",
    alt: "Construction workers building a wooden house frame",
    text: "Our in-house crew gets to work, with daily photo updates so you're never left guessing.",
  },
  {
    num: "04",
    title: "Walkthrough",
    image: "/images/process-walkthrough.jpg",
    alt: "Person handing over keys to a new home",
    text: "We walk every detail together, fix any punch-list item, and hand over the keys. Warranty included.",
  },
];

export default function Process() {
  return (
    <>
      <div className={styles.processHeader}>
        <div className={styles.eyebrow}>03 — HOW IT WORKS</div>
        <h2 className={styles.processHeading}>Four steps from first call to front-door keys</h2>
      </div>
      <div className={styles.grid4}>
        {STEPS.map((s) => (
          <div key={s.num} className={styles.hoverCard}>
            <div className={styles.cardImageSmall}>
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(max-width: 900px) 100vw, 25vw"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.cardStep}>{s.num}</div>
            </div>
            <div className={styles.cardBodySmall}>
              <h3 className={styles.cardTitleSmall}>{s.title}</h3>
              <p className={styles.cardTextSmall}>{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
