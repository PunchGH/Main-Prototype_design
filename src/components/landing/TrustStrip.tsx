import styles from "./landing.module.css";

export default function TrustStrip() {
  return (
    <>
      <span className={styles.trustLabel}>
        TRUSTED BY HOMEOWNERS &amp; DEVELOPERS ACROSS THE REGION
      </span>
      <div className={styles.trustLogos}>
        {/* Logo 1: Apex Developments */}
        <div className={styles.trustLogo}>
          <svg viewBox="0 0 130 32" className={styles.trustLogoSvg} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 24 L18 8 L26 24 Z M14 21 L22 21"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <text
              x="36"
              y="20"
              fontFamily="var(--font-heading)"
              fontSize="14"
              fontWeight="700"
              letterSpacing="0.1em"
              fill="currentColor"
            >
              APEX
            </text>
            <text
              x="36"
              y="28"
              fontFamily="var(--font-mono)"
              fontSize="7"
              letterSpacing="0.05em"
              fill="currentColor"
              opacity="0.6"
            >
              DEVELOPMENTS
            </text>
          </svg>
        </div>

        {/* Logo 2: Summit Crest */}
        <div className={styles.trustLogo}>
          <svg viewBox="0 0 130 32" className={styles.trustLogoSvg} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 25 L16 11 L22 21 L27 14 L34 25 Z"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <text
              x="42"
              y="20"
              fontFamily="var(--font-heading)"
              fontSize="13"
              fontWeight="700"
              letterSpacing="0.1em"
              fill="currentColor"
            >
              SUMMIT
            </text>
            <text
              x="42"
              y="28"
              fontFamily="var(--font-mono)"
              fontSize="7"
              letterSpacing="0.12em"
              fill="currentColor"
              opacity="0.6"
            >
              CREST HOMES
            </text>
          </svg>
        </div>

        {/* Logo 3: Vanguard Partners */}
        <div className={styles.trustLogo}>
          <svg viewBox="0 0 130 32" className={styles.trustLogoSvg} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 8 L22 8 L22 17 C22 22 16 26 16 26 C16 26 10 22 10 17 Z"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path d="M14 12 L18 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <text
              x="32"
              y="20"
              fontFamily="var(--font-heading)"
              fontSize="13"
              fontWeight="700"
              letterSpacing="0.08em"
              fill="currentColor"
            >
              VANGUARD
            </text>
            <text
              x="32"
              y="28"
              fontFamily="var(--font-mono)"
              fontSize="7"
              letterSpacing="0.05em"
              fill="currentColor"
              opacity="0.6"
            >
              PARTNERS
            </text>
          </svg>
        </div>

        {/* Logo 4: Horizon Property Group */}
        <div className={styles.trustLogo}>
          <svg viewBox="0 0 130 32" className={styles.trustLogoSvg} xmlns="http://www.w3.org/2000/svg">
            <path d="M8 23 L26 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M12 23 A 5 5 0 0 1 22 23" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M13 17 L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M17 15 L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M21 17 L24 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            <text
              x="34"
              y="20"
              fontFamily="var(--font-heading)"
              fontSize="13"
              fontWeight="700"
              letterSpacing="0.08em"
              fill="currentColor"
            >
              HORIZON
            </text>
            <text
              x="34"
              y="28"
              fontFamily="var(--font-mono)"
              fontSize="7"
              letterSpacing="0.08em"
              fill="currentColor"
              opacity="0.6"
            >
              PROPERTY GROUP
            </text>
          </svg>
        </div>

        {/* Logo 5: Nova Projects */}
        <div className={styles.trustLogo}>
          <svg viewBox="0 0 130 32" className={styles.trustLogoSvg} xmlns="http://www.w3.org/2000/svg">
            <path d="M17 7 Q17 17 27 17 Q17 17 17 27 Q17 17 7 17 Q17 17 17 7 Z" fill="currentColor" />
            <text
              x="36"
              y="20"
              fontFamily="var(--font-heading)"
              fontSize="14"
              fontWeight="700"
              letterSpacing="0.1em"
              fill="currentColor"
            >
              NOVA
            </text>
            <text
              x="36"
              y="28"
              fontFamily="var(--font-mono)"
              fontSize="7"
              letterSpacing="0.12em"
              fill="currentColor"
              opacity="0.6"
            >
              PROJECTS
            </text>
          </svg>
        </div>
      </div>
    </>
  );
}
