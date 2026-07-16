import Image from "next/image";
import styles from "./landing.module.css";

const MEMBERS = [
  { name: "Ray Okafor", role: "Founder & General Contractor", image: "/images/team-ray.jpg", position: "center 15%" },
  { name: "Lena Vasquez", role: "Head of Project Management", image: "/images/team-lena.jpg", position: "center 12%" },
  { name: "Tomas Reyes", role: "Site Lead & Master Carpenter", image: "/images/team-tomas.jpg", position: "center 15%" },
  { name: "Aisha Bello", role: "Design & Permits Manager", image: "/images/team-aisha.jpg", position: "center 10%" },
];

const PARTNERS = ["ARCHITECT", "ENGINEER", "SUPPLIER", "INSPECTOR"];

export default function Team() {
  return (
    <>
      <div className={styles.teamIntro}>
        <div className={styles.eyebrow}>06 — THE PEOPLE</div>
        <h2 className={styles.teamHeading}>Real people, on every job</h2>
        <p className={styles.teamText}>
          No faceless call center. You&apos;ll meet your project lead before you sign anything —
          and work alongside licensed architects, structural engineers and vetted trade partners.
        </p>
      </div>
      <div className={styles.teamGrid}>
        {MEMBERS.map((m) => (
          <div key={m.name}>
            <div className={styles.teamPortrait}>
              <Image
                src={m.image}
                alt={`Portrait of ${m.name}`}
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                style={{ objectFit: "cover", objectPosition: m.position }}
              />
            </div>
            <div className={styles.teamName}>{m.name}</div>
            <div className={styles.teamRole}>{m.role}</div>
          </div>
        ))}
      </div>
      <div className={styles.teamPartners}>
        <span className={styles.teamPartnersLabel}>WE WORK WITH</span>
        {PARTNERS.map((p) => (
          <div key={p} className={styles.teamPartnerLogo}>
            [ {p} ]
          </div>
        ))}
      </div>
    </>
  );
}
