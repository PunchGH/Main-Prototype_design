import Image from "next/image";
import styles from "./landing.module.css";

const ITEMS = [
  {
    label: "NEW CUSTOM HOME",
    image: "/images/gallery-new-home.jpg",
    alt: "Newly built custom home exterior",
    tall: true,
  },
  {
    label: "KITCHEN REMODEL",
    image: "/images/gallery-kitchen.jpg",
    alt: "Remodeled kitchen interior",
  },
  {
    label: "COMMERCIAL BUILDOUT",
    image: "/images/gallery-commercial.jpg",
    alt: "Commercial office building exterior",
  },
  {
    label: "WHOLE-HOME ADDITION",
    image: "/images/gallery-addition.jpg",
    alt: "House with a new addition under construction",
  },
  {
    label: "BATHROOM RENOVATION",
    image: "/images/gallery-bathroom.jpg",
    alt: "Renovated modern bathroom interior",
  },
];

export default function Gallery() {
  return (
    <>
      <div className={styles.sectionHeader}>
        <div>
          <div className={styles.eyebrow}>04 — RECENT WORK</div>
          <h2 className={styles.sectionHeading}>Proof, not promises</h2>
        </div>
        <a href="Gallery.dc.html" className={styles.galleryLink}>
          View full gallery →
        </a>
      </div>
      <div className={styles.galleryGrid}>
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className={`${styles.galleryTile} ${item.tall ? styles.galleryTileTall : ""}`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
            <div className={styles.galleryTag}>
              <span className={styles.galleryTagLabel}>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
