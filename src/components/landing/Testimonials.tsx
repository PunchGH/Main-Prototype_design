import styles from "./landing.module.css";

const REVIEWS = [
  {
    quote:
      "“They tore out and rebuilt our kitchen in the timeline they promised, to the day. The fixed price never budged. I've already referred two neighbors.”",
    name: "Marcus D.",
    meta: "Kitchen remodel · Google · 2 months ago",
  },
  {
    quote:
      "“The daily photo updates were a game-changer while we were living out of state. We always knew exactly where our build stood. True professionals.”",
    name: "Priya & Sam R.",
    meta: "New home build · Google · 5 weeks ago",
  },
  {
    quote:
      "“We've used Northforge for three commercial fit-outs now. On time, on budget, zero drama. That's rarer than it should be in this industry.”",
    name: "Dev Property Group",
    meta: "Commercial · Google · 3 months ago",
  },
];

export default function Testimonials() {
  return (
    <>
      <div className={styles.reviewsHeader}>
        <div className={styles.eyebrowInline}>05 — WHAT CLIENTS SAY</div>
        <div className={styles.reviewsRule} />
        <div className={styles.reviewsBadge}>
          <div className={styles.reviewsBadgeMark}>G</div>
          <div>
            <div className={styles.reviewsScore}>4.9 ★★★★★</div>
            <div className={styles.reviewsCount}>147 reviews on Google</div>
          </div>
        </div>
      </div>
      <div className={styles.grid3}>
        {REVIEWS.map((r) => (
          <div key={r.name} className={styles.reviewCard}>
            <div className={styles.reviewCardHeader}>
              <span className={styles.reviewStars}>★★★★★</span>
              <span className={styles.reviewSourceMark}>G</span>
            </div>
            <p className={styles.reviewQuote}>{r.quote}</p>
            <div className={styles.reviewFooter}>
              <div className={styles.reviewAvatar} />
              <div>
                <div className={styles.reviewName}>{r.name}</div>
                <div className={styles.reviewMeta}>{r.meta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
