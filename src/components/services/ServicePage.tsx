"use client";

import Image from "next/image";
import Link from "next/link";
import landing from "../landing/landing.module.css";
import svc from "./services.module.css";
import { scrollToForm } from "../landing/scrollToForm";
import Nav from "../landing/Nav";
import Footer from "../landing/Footer";
import StickyBar from "../landing/StickyBar";
import Reveal from "../landing/Reveal";
import Process from "../landing/Process";
import QuoteSection from "../landing/QuoteSection";
import ServiceFaq from "./ServiceFaq";
import { getService, type Service } from "@/data/services";

export default function ServicePage({ service }: { service: Service }) {
  const related = service.relatedSlugs
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));

  return (
    <div className={landing.page}>
      <Nav />

      {/* Hero */}
      <section className={svc.hero}>
        <div className={svc.heroMedia}>
          <Image
            src={service.heroImage}
            alt={service.heroAlt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={svc.heroScrim} />
        <div className={svc.heroAccentBar} />
        <div className={svc.heroContent}>
          <div className={svc.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={svc.breadcrumbSep}>/</span>
            <Link href="/services">Services</Link>
            <span className={svc.breadcrumbSep}>/</span>
            <span className={svc.breadcrumbCurrent}>{service.title}</span>
          </div>
          <div className={svc.kicker}>
            <span className={svc.kickerLine} />
            {service.kicker}
          </div>
          <h1 className={svc.title}>{service.h1}</h1>
          <p className={svc.sub}>{service.intro}</p>
          <div className={svc.actions}>
            <button className={`${landing.btn} ${landing.heroPrimaryBtn}`} onClick={scrollToForm}>
              Get my free quote →
            </button>
            <a href="#gallery" className={landing.heroSecondaryLink}>
              See our work
            </a>
          </div>
        </div>
      </section>

      {/* Overview + what's included */}
      <Reveal className={landing.section}>
        <div className={svc.overviewGrid}>
          <div>
            <div className={landing.eyebrow}>WHAT WE DO</div>
            <h2 className={svc.heading}>{service.overviewHeading}</h2>
            <p className={svc.lede}>{service.overviewText}</p>
          </div>
          <div>
            <div className={svc.includedLabel}>WHAT WE INCLUDE</div>
            <ul className={svc.includedList}>
              {service.included.map((item) => (
                <li key={item} className={svc.includedItem}>
                  <span className={svc.includedCheck}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* Shared 4-step process */}
      <Reveal className={landing.sectionAlt}>
        <Process />
      </Reveal>

      {/* Recent work */}
      <Reveal id="gallery" className={landing.section}>
        <div className={landing.sectionHeader}>
          <div>
            <div className={landing.eyebrow}>RECENT WORK</div>
            <h2 className={landing.sectionHeading}>Proof, not promises</h2>
          </div>
          <Link href="/#gallery" className={landing.galleryLink}>
            View full gallery →
          </Link>
        </div>
        <div className={svc.workGrid}>
          {service.gallery.map((g) => (
            <div key={g.image} className={landing.galleryTile}>
              <Image
                src={g.image}
                alt={g.alt}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className={landing.galleryTag}>
                <span className={landing.galleryTagLabel}>{g.label}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* FAQ */}
      <Reveal className={landing.sectionAlt}>
        <ServiceFaq faqs={service.faqs} />
      </Reveal>

      {/* Related services */}
      {related.length > 0 && (
        <Reveal className={landing.section}>
          <div className={landing.sectionHeader}>
            <div>
              <div className={landing.eyebrow}>KEEP EXPLORING</div>
              <h2 className={landing.sectionHeading}>Other services</h2>
            </div>
          </div>
          <div className={svc.relatedGrid}>
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className={svc.relatedCard}>
                <h3 className={svc.relatedTitle}>{r.title}</h3>
                <p className={svc.relatedText}>{r.summary}</p>
                <span className={svc.relatedLink}>Learn more →</span>
              </Link>
            ))}
          </div>
        </Reveal>
      )}

      {/* Quote form (provides #quote for scrollToForm) */}
      <Reveal id="quote" className={landing.quoteSection}>
        <QuoteSection />
      </Reveal>

      <Footer />
      <StickyBar />
    </div>
  );
}
