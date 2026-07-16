export type ServiceFaq = { q: string; a: string };
export type ServiceGalleryItem = { image: string; alt: string; label: string };

export type Service = {
  slug: string;
  title: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  kicker: string;
  h1: string;
  intro: string;
  overviewHeading: string;
  overviewText: string;
  included: string[];
  gallery: ServiceGalleryItem[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "new-home-builds",
    title: "New Home Builds",
    summary:
      "Custom, ground-up homes built to your plans and your budget, including permits, framing, and finishes.",
    heroImage: "/images/services-new-home.jpg",
    heroAlt: "New home under construction with wooden framing",
    kicker: "RESIDENTIAL · GROUND-UP",
    h1: "Custom home builds, done right the first time",
    intro:
      "Ground-up homes built to your plans and your budget. We handle permits, framing, and finishes, with one project manager and daily photo updates from foundation to keys.",
    overviewHeading: "Built to your plans, on your budget",
    overviewText:
      "From the first site visit to the final walkthrough, one project manager runs your build. We coordinate architects and permits, self-perform the core trades with our own crew, and send daily photo updates so you always know where things stand.",
    included: [
      "Architectural and permit coordination",
      "Site prep, excavation, and foundation",
      "Framing and structural work",
      "Roofing, windows, and exterior finishes",
      "Electrical, plumbing, and HVAC",
      "Interior finishes, cabinetry, and fixtures",
      "Final walkthrough and written workmanship warranty",
    ],
    gallery: [
      { image: "/images/gallery-new-home.jpg", alt: "Newly built custom home exterior", label: "NEW CUSTOM HOME" },
      { image: "/images/gallery-addition.jpg", alt: "House with a new addition under construction", label: "WHOLE-HOME ADDITION" },
    ],
    faqs: [
      {
        q: "How long does a custom home take?",
        a: "Most custom homes run 6–12 months depending on size and finishes. We give you a realistic schedule up front and hold a 100% on-time record across 540+ projects.",
      },
      {
        q: "Do you handle permits and drawings?",
        a: "Yes. We manage all drawings, permit applications, and inspections in-house, so you never chase paperwork or city offices.",
      },
      {
        q: "How does pricing work?",
        a: "After a free site visit we send a fixed, itemized quote, and that is the price you pay. Costs only change if you request a change, always with your written sign-off.",
      },
      {
        q: "Is the work guaranteed?",
        a: "Every build comes with a written workmanship warranty, on top of manufacturer warranties for materials and fixtures.",
      },
    ],
    relatedSlugs: ["renovations-and-remodels", "general-contracting"],
    metaTitle: "New Home Builds | Northforge Build Co.",
    metaDescription:
      "Custom, ground-up homes built to your plans and budget. Permits, framing, and finishes handled in-house, with daily photo updates from foundation to keys.",
  },
  {
    slug: "renovations-and-remodels",
    title: "Renovations & Remodels",
    summary:
      "Kitchens, baths, additions and whole-home transformations that respect your space and timeline.",
    heroImage: "/images/services-kitchen.jpg",
    heroAlt: "Renovated modern kitchen interior",
    kicker: "RESIDENTIAL · RENOVATION",
    h1: "Renovations and remodels that respect your space",
    intro:
      "Kitchens, baths, additions, and whole-home transformations. We protect your home, keep a tidy site, and hit the schedule we promised.",
    overviewHeading: "Renovations that respect your space",
    overviewText:
      "We treat your home like it is ours. Our own carpenters handle the work, dust barriers and floor protection keep the rest of the house clean, and a firm schedule means you get your space back when we promised.",
    included: [
      "Kitchen remodels",
      "Bathroom renovations",
      "Home additions and extensions",
      "Whole-home remodels",
      "Structural changes and wall removals",
      "Finishes, cabinetry, and fixtures",
      "Dust protection and daily cleanup",
    ],
    gallery: [
      { image: "/images/gallery-kitchen.jpg", alt: "Remodeled kitchen interior", label: "KITCHEN REMODEL" },
      { image: "/images/gallery-bathroom.jpg", alt: "Renovated modern bathroom interior", label: "BATHROOM RENOVATION" },
      { image: "/images/gallery-addition.jpg", alt: "House with a new addition under construction", label: "HOME ADDITION" },
    ],
    faqs: [
      {
        q: "Can I live in my home during the work?",
        a: "In most remodels, yes. We seal off work areas, keep a tidy site, and plan the sequence around your daily life. For larger whole-home projects we talk through the options up front.",
      },
      {
        q: "How long does a remodel take?",
        a: "A kitchen remodel usually runs 4–8 weeks. We give you a firm schedule before we start and stick to it.",
      },
      {
        q: "Will the price change partway through?",
        a: "Our fixed-price guarantee means the quote holds. Costs only change if you request a change, and we always get your written sign-off first.",
      },
      {
        q: "Do you protect the rest of my house?",
        a: "Always. We use dust barriers and floor protection, and our own crew cleans up at the end of every build day.",
      },
    ],
    relatedSlugs: ["new-home-builds", "general-contracting"],
    metaTitle: "Renovations & Remodels | Northforge Build Co.",
    metaDescription:
      "Kitchen, bath, addition, and whole-home remodels that respect your space and timeline, backed by our fixed-price guarantee.",
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    summary:
      "Retail, office and multi-unit buildouts delivered to code, on schedule, with minimal downtime.",
    heroImage: "/images/services-commercial.jpg",
    heroAlt: "Modern commercial building exterior",
    kicker: "COMMERCIAL · BUILDOUT",
    h1: "Commercial construction, on schedule and to code",
    intro:
      "Retail, office, and multi-unit buildouts delivered with minimal downtime. We coordinate every trade and keep your business moving.",
    overviewHeading: "Buildouts that keep you open",
    overviewText:
      "We plan around your operations and deliver to code, on schedule. One project manager coordinates every trade and manages inspections, so your business keeps moving with minimal downtime.",
    included: [
      "Retail and restaurant buildouts",
      "Office and workspace fit-outs",
      "Multi-unit residential",
      "Tenant improvements",
      "Code compliance and inspections",
      "After-hours and phased scheduling",
      "One project manager across every trade",
    ],
    gallery: [
      { image: "/images/gallery-commercial.jpg", alt: "Commercial office building exterior", label: "COMMERCIAL BUILDOUT" },
      { image: "/images/services-commercial.jpg", alt: "Modern commercial building exterior", label: "OFFICE FIT-OUT" },
    ],
    faqs: [
      {
        q: "Can you work around our business hours?",
        a: "Yes. We schedule around your operations, including nights and weekends, to keep downtime and disruption to a minimum.",
      },
      {
        q: "Do you manage code and inspections?",
        a: "We handle code compliance, permit applications, and inspections in-house, and we deliver to code on schedule.",
      },
      {
        q: "How do you keep projects on time?",
        a: "One project manager coordinates every trade, with daily updates. We hold a 100% on-time record across 540+ projects.",
      },
      {
        q: "Can you provide references?",
        a: "Absolutely. We have delivered repeat retail, office, and multi-unit work, and we are happy to connect you with past clients.",
      },
    ],
    relatedSlugs: ["general-contracting", "new-home-builds"],
    metaTitle: "Commercial Construction | Northforge Build Co.",
    metaDescription:
      "Retail, office, and multi-unit buildouts delivered to code, on schedule, and with minimal downtime for your business.",
  },
  {
    slug: "general-contracting",
    title: "General Contracting",
    summary:
      "Full project management, with one dedicated point of contact coordinating every trade on your build.",
    heroImage: "/images/services-foreman.jpg",
    heroAlt: "Foreman reviewing building plans",
    kicker: "FULL-SERVICE · MANAGEMENT",
    h1: "One accountable team for your whole build",
    intro:
      "Full project management with a single point of contact coordinating every trade. No juggling a dozen subcontractors.",
    overviewHeading: "One team, total accountability",
    overviewText:
      "Instead of juggling a dozen subcontractors, you get one accountable team. We plan the budget, manage permits and drawings, schedule every trade, and keep quality tight with on-site management and daily updates.",
    included: [
      "Project planning and budgeting",
      "Permit and drawing management",
      "Trade coordination and scheduling",
      "On-site management and quality control",
      "Daily photo updates",
      "Fixed, itemized pricing",
      "Single dedicated point of contact",
    ],
    gallery: [
      { image: "/images/gallery-new-home.jpg", alt: "Newly built custom home exterior", label: "NEW CUSTOM HOME" },
      { image: "/images/gallery-commercial.jpg", alt: "Commercial office building exterior", label: "COMMERCIAL BUILDOUT" },
    ],
    faqs: [
      {
        q: "What does a general contractor actually do?",
        a: "We manage the whole build: planning, budgeting, permits, scheduling, and every trade on site, so you have one accountable team instead of a dozen subcontractors to chase.",
      },
      {
        q: "Who is my point of contact?",
        a: "One dedicated project manager, from quote to keys. You always know who to call.",
      },
      {
        q: "How do you price a project?",
        a: "After a free site visit we send a fixed, itemized quote. That is the price you pay, with changes only when you request them in writing.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Fully. We are licensed (#CB-408817), bonded, and carry general liability plus workers' comp, and we share certificates before any work begins.",
      },
    ],
    relatedSlugs: ["new-home-builds", "commercial-construction"],
    metaTitle: "General Contracting | Northforge Build Co.",
    metaDescription:
      "Full project management with one accountable point of contact coordinating every trade on your build.",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
