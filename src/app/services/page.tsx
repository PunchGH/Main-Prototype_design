import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import StickyBar from "@/components/landing/StickyBar";
import landing from "@/components/landing/landing.module.css";
import svc from "@/components/services/services.module.css";

export const metadata: Metadata = {
  title: "Our Services | Northforge Build Co.",
  description:
    "New home builds, renovations and remodels, commercial construction, and general contracting. One accountable team from foundation to final walkthrough.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <div className={landing.page}>
      <Nav />
      <section className={landing.section}>
        <div className={landing.sectionHeader}>
          <div>
            <div className={landing.eyebrow}>WHAT WE BUILD</div>
            <h1 className={landing.sectionHeading}>Our services</h1>
          </div>
          <p className={landing.sectionLede}>
            One accountable team from foundation to final walkthrough. Pick a service to see how we
            work.
          </p>
        </div>
        <div className={svc.indexGrid}>
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className={svc.indexCard}>
              <div className={svc.indexCardImage}>
                <Image
                  src={s.heroImage}
                  alt={s.heroAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={svc.indexCardBody}>
                <h2 className={svc.relatedTitle}>{s.title}</h2>
                <p className={svc.relatedText}>{s.summary}</p>
                <span className={svc.relatedLink}>Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
      <StickyBar />
    </div>
  );
}
