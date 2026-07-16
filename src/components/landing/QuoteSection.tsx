"use client";

import { useState, type FormEvent } from "react";
import styles from "./landing.module.css";

export default function QuoteSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ptype, setPtype] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let err = "";
    if (!name.trim()) err = "Please enter your name.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) err = "Please enter a valid email address.";
    else if (!ptype) err = "Please select a project type.";
    if (err) {
      setFormError(err);
      return;
    }
    setFormError("");
    setSubmitted(true);
  }

  return (
    <div className={styles.quoteGrid}>
      <div>
        <div className={styles.eyebrow}>07 — GET YOUR FREE QUOTE</div>
        <h2 className={styles.quoteHeading}>
          Ready to build?
          <br />
          Let&apos;s talk numbers.
        </h2>
        <p className={styles.quoteLede}>
          Send us the basics and we&apos;ll come back within one business day with next steps and
          a clear, itemized quote. Free, no obligation.
        </p>
        <div className={styles.quotePoints}>
          <div className={styles.quotePoint}>
            <div className={styles.quotePointDot} />
            <span className={styles.quotePointText}>Response within 1 business day</span>
          </div>
          <div className={styles.quotePoint}>
            <div className={styles.quotePointDot} />
            <span className={styles.quotePointText}>No pushy sales calls, ever</span>
          </div>
          <div className={styles.quotePoint}>
            <div className={styles.quotePointDot} />
            <span className={styles.quotePointText}>Fixed, itemized pricing up front</span>
          </div>
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>FULL NAME</label>
            <input
              className={styles.fieldInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Builder"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>EMAIL</label>
            <input
              className={styles.fieldInput}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>PROJECT TYPE</label>
            <div className={styles.selectWrap}>
              <select
                className={styles.selectInput}
                value={ptype}
                onChange={(e) => setPtype(e.target.value)}
              >
                <option value="">Select one…</option>
                <option value="new-build">New home build</option>
                <option value="renovation">Renovation / remodel</option>
                <option value="commercial">Commercial construction</option>
                <option value="general">General contracting</option>
                <option value="unsure">Not sure yet</option>
              </select>
              <span className={styles.selectArrow}>▼</span>
            </div>
          </div>
          <div className={styles.fieldLast}>
            <label className={styles.fieldLabel}>TELL US ABOUT YOUR PROJECT</label>
            <textarea
              className={styles.fieldTextarea}
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="A few lines on what you're planning, timeline, location…"
            />
          </div>
          {formError && <div className={styles.formError}>{formError}</div>}
          <button type="submit" className={`${styles.btn} ${styles.submitBtn}`}>
            Get my free quote →
          </button>
          <p className={styles.formFootnote}>
            We&apos;ll only use your details to prepare your quote.
          </p>
        </form>
      ) : (
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✓</div>
          <h3 className={styles.successTitle}>Quote request received</h3>
          <p className={styles.successText}>
            Thanks, we&apos;ve got it. A project lead will reach out within one business day.
            Keep an eye on your inbox.
          </p>
        </div>
      )}
    </div>
  );
}
