import Image from "next/image";
import Link from "next/link";
import styles from "./landing.module.css";

const SERVICES = [
  {
    title: "New Home Builds",
    slug: "new-home-builds",
    image: "/images/services-new-home.jpg",
    alt: "New home under construction with wooden framing",
    text: "Custom, ground-up homes built to your plans and your budget, including permits, framing, and finishes.",
  },
  {
    title: "Renovations & Remodels",
    slug: "renovations-and-remodels",
    image: "/images/services-kitchen.jpg",
    alt: "Renovated modern kitchen interior",
    text: "Kitchens, baths, additions and whole-home transformations that respect your space and timeline.",
  },
  {
    title: "Commercial Construction",
    slug: "commercial-construction",
    image: "/images/services-commercial.jpg",
    alt: "Modern commercial building exterior",
    text: "Retail, office and multi-unit buildouts delivered to code, on schedule, with minimal downtime.",
  },
  {
    title: "General Contracting",
    slug: "general-contracting",
    image: "/images/services-foreman.jpg",
    alt: "Foreman reviewing building plans",
    text: "Full project management, with one dedicated point of contact coordinating every trade on your build.",
  },
];

export default function Services() {
  return (
    <>
      <div className={styles.sectionHeader}>
        <div>
          <div className={styles.eyebrow}>01 — WHAT WE BUILD</div>
          <h2 className={styles.sectionHeading}>Four ways we put a roof over your head</h2>
        </div>
        <p className={styles.sectionLede}>
          One accountable team from foundation to final walkthrough. No juggling a dozen
          subcontractors.
        </p>
      </div>
      <div className={styles.grid4}>
        {SERVICES.map((s) => (
          <div key={s.title} className={styles.hoverCard}>
            <div className={styles.cardImage}>
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(max-width: 900px) 100vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
              <Link href={`/services/${s.slug}`} className={styles.cardLink}>
                Learn more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
