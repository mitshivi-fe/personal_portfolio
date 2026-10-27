export interface Experience {
  id: string;
  company: string;
  companyDescription?: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "cambridge",
    company: "Cambridge Judge Business School",
    companyDescription: "University of Cambridge, UK",
    role: "MBA Candidate",
    startDate: "2026",
    endDate: "2027",
    location: "Cambridge, UK",
    highlights: [
      "Pursuing MBA with focus on technology product management, entrepreneurship, and technical leadership",
      "Targeting Tech PM roles and entrepreneurial ventures at the intersection of technology and business",
    ],
    technologies: [
      "Product Strategy",
      "Entrepreneurship",
      "Leadership",
      "Business Strategy",
    ],
  },
  {
    id: "new-relic",
    company: "New Relic",
    companyDescription:
      "Global observability platform enabling teams to monitor and optimize software performance.",
    role: "Senior Software Engineer",
    startDate: "Oct 2024",
    endDate: "Sep 2026",
    location: "Bengaluru, India",
    highlights: [
      'Spearheaded product architecture for the "Compute Optimizer" micro-frontend to provide granular data-ingest observability, driving a 40%+ adoption rate of the compute-based pricing model and earning a company-wide performance award',
      "Orchestrated cross-functional initiatives to automate multi-team review and release workflows using AI-assisted developer tooling, accelerating product launch cycles from several weeks to under 5 minutes",
      "Directed a 5-person engineering squad for critical revenue-impacting products, shaping technical roadmaps and driving organizational scaling through talent acquisition",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Micro-frontends",
      "AI Tooling",
    ],
  },
  {
    id: "coindcx",
    company: "CoinDCX",
    companyDescription:
      "India's leading crypto investment app and first crypto unicorn, simplifying access to cryptocurrency.",
    role: "Senior Software Engineer",
    startDate: "Sep 2021",
    endDate: "Apr 2024",
    location: "Bengaluru, India",
    highlights: [
      "Led end-to-end product delivery of core trading features (Margin, Futures, Spot), scaling the platform experience for over 14M users",
      "Partnered with business teams to architect config-driven platforms for the Trading Championship (2M+ participants) and the VIP Experience (3M+ customers), empowering zero-code event launches",
      "Championed a complete overhaul of user onboarding and KYC flows, balancing regulatory compliance with user-centric design to achieve a 40% improvement in CSAT scores",
      "Drove technical strategy for frontend performance optimizations, slashing application load times by up to 75% and significantly boosting customer satisfaction",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "WebSockets",
      "GraphQL",
    ],
  },
  {
    id: "talentica",
    company: "Talentica Software",
    companyDescription:
      "Innovative product development company that helps startups build and scale their products.",
    role: "Software Engineer II",
    startDate: "Sep 2019",
    endDate: "Sep 2021",
    location: "Pune, India",
    highlights: [
      "Directed technical product strategy for migrating a real estate platform, reducing load times from 8s to 1s and boosting engagement by 30%, which was a key driver in a $30M+ acquisition by Mynd",
      "Managed a distributed team of 3 engineers across 3 time zones, optimizing agile delivery cycles and improving cross-functional team efficiency by 25%",
    ],
    technologies: ["React", "Angular", "TypeScript", "Node.js"],
  },
  {
    id: "capgemini",
    company: "Capgemini",
    companyDescription:
      "A multinational consulting firm offering IT services to help businesses manage and optimize operations.",
    role: "Software Engineer",
    startDate: "Jul 2018",
    endDate: "Sep 2019",
    location: "Pune, India",
    highlights: [
      "Built localized web modules using Angular 6 and Prime NG for international enterprise clients",
    ],
    technologies: ["Angular 6", "TypeScript", "i18n", "PrimeNG"],
  },
];
