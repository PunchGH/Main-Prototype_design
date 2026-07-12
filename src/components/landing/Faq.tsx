"use client";

import { useState } from "react";
import styles from "./landing.module.css";
import { scrollToForm } from "./scrollToForm";

const FAQS = [
  {
    q: "How much will my project cost?",
    a: "It depends on scope, but you'll never be surprised. After a free site visit we send a fixed, itemized quote — and that's the price you pay. Most homeowners are surprised how transparent it is.",
  },
  {
    q: "How long does a build take?",
    a: "A kitchen remodel runs 4–8 weeks; a full custom home 6–12 months. We give you a realistic schedule up front and hit it — 100% on-time record across 540+ projects.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Fully. We're licensed (#CB-408817), bonded, and carry general liability plus workers' comp. EPA certified and OSHA compliant. We'll share certificates before any work begins.",
  },
  {
    q: "Do you handle permits?",
    a: "Yes — we manage all drawings, permit applications and inspections in-house. You don't chase paperwork or city offices; that's our job.",
  },
  {
    q: "What if it goes over budget?",
    a: "Our fixed-price guarantee means the quote holds. Costs only change if you request a change — and we'll always get your written sign-off before anything moves.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Every build comes with a written workmanship warranty, on top of manufacturer warranties for materials and fixtures. If something's not right, we come back and fix it.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.faqWrap}>
      <div className={styles.faqHeader}>
        <div className={styles.eyebrow}>08 — BEFORE YOU ASK</div>
        <h2 className={styles.faqHeading}>Questions, answered straight</h2>
      </div>

      <div className={styles.faqList}>
        {FAQS.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.q}>
              <button className={styles.faqItem} onClick={() => setOpenIndex(open ? null : i)}>
                <span className={styles.faqQuestion}>{item.q}</span>
                <span className={styles.faqSign}>{open ? "–" : "+"}</span>
              </button>
              <div className={`${styles.faqAnswer} ${open ? styles.faqAnswerOpen : ""}`}>
                <p className={styles.faqAnswerText}>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.faqCta}>
        <button className={`${styles.btn} ${styles.faqCtaBtn}`} onClick={scrollToForm}>
          Still have questions? Get your free quote →
        </button>
      </div>
    </div>
  );
}
