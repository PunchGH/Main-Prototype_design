"use client";

import { useState } from "react";
import styles from "../landing/landing.module.css";
import { scrollToForm } from "../landing/scrollToForm";
import type { ServiceFaq as ServiceFaqItem } from "@/data/services";

export default function ServiceFaq({ faqs }: { faqs: ServiceFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.faqWrap}>
      <div className={styles.faqHeader}>
        <div className={styles.eyebrow}>BEFORE YOU ASK</div>
        <h2 className={styles.faqHeading}>Questions, answered straight</h2>
      </div>

      <div className={styles.faqList}>
        {faqs.map((item, i) => {
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
