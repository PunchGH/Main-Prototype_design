"use client";

import styles from "./landing.module.css";
import Nav from "./Nav";
import Hero from "./Hero";
import TrustStrip from "./TrustStrip";
import Services from "./Services";
import WhyUs from "./WhyUs";
import Process from "./Process";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Team from "./Team";
import QuoteSection from "./QuoteSection";
import Faq from "./Faq";
import PreFooterCta from "./PreFooterCta";
import Footer from "./Footer";
import StickyBar from "./StickyBar";
import Reveal from "./Reveal";

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <Hero />

      <Reveal className={styles.trustStrip}>
        <TrustStrip />
      </Reveal>

      <Reveal id="services" className={styles.section}>
        <Services />
      </Reveal>

      <Reveal className={styles.whyUs}>
        <WhyUs />
      </Reveal>

      <Reveal id="process" className={styles.section}>
        <Process />
      </Reveal>

      <Reveal id="gallery" className={styles.sectionAlt}>
        <Gallery />
      </Reveal>

      <Reveal id="reviews" className={styles.section}>
        <Testimonials />
      </Reveal>

      <Reveal className={styles.sectionAlt}>
        <Team />
      </Reveal>

      <Reveal id="quote" className={styles.quoteSection}>
        <QuoteSection />
      </Reveal>

      <Reveal className={styles.section}>
        <Faq />
      </Reveal>

      <Reveal className={styles.preFooterCta}>
        <PreFooterCta />
      </Reveal>

      <Footer />
      <StickyBar />
    </div>
  );
}
