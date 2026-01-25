export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "new-relic",
    company: "New Relic",
    role: "Senior Frontend Engineer",
    startDate: "Oct 2024",
    endDate: "Present",
    location: "Bengaluru, Karnataka",
    highlights: [
      "Designed HLD and LLD for shared components in a micro-frontend architecture",
      "Leading a team of 2 UI engineers",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Micro-frontends"],
  },
  {
    id: "coindcx",
    company: "CoinDCX",
    role: "Senior Frontend Engineer",
    startDate: "Sep 2021",
    endDate: "Apr 2024",
    location: "Bengaluru, Karnataka",
    highlights: [
      "Spearheaded critical features (Margin, Futures, Spot) for India's largest crypto trading platform, enhancing experience for 14M+ users",
      "Implemented optimizations reducing load time by 75% and network bandwidth for improved efficiency",
      "Built trading championship portals (Trading Dangal, TPL) catering to 2M+ active participants",
      "Pioneered VIP Experience feature - a highly responsive, accessible web application for VIP customers",
      "Led frontend development for user onboarding, improving CSAT score by 40%",
      "Mentored developers, guided 2 engineers, and participated in hiring senior developers",
    ],
    technologies: ["React", "Next.js", "TypeScript", "WebSockets", "GraphQL"],
  },
  {
    id: "talentica",
    company: "Talentica Software",
    role: "Senior Software Developer",
    startDate: "Sep 2019",
    endDate: "Sep 2021",
    location: "Pune, Maharashtra",
    highlights: [
      "Directed development of a real estate investment platform, increasing user engagement by 30%",
      "Led migration improving LCP from 8s to under 1s (87% improvement) - instrumental in $30M acquisition by Mynd Investments",
      "Managed team of 3 engineers across 3 time zones, improving team efficiency by 25%",
      "Earned 'Pat on the Back' and 'Go-Getter' awards for outstanding contributions",
      "Contributed to platform serving 1M+ users with real estate insights across 50+ U.S. states",
    ],
    technologies: ["React", "Angular", "TypeScript", "Node.js"],
  },
  {
    id: "capgemini",
    company: "Capgemini",
    role: "Software Developer",
    startDate: "Jul 2018",
    endDate: "Sep 2019",
    location: "Pune, Maharashtra",
    highlights: [
      "Independently developed key modules for Capgemini's Reinvestment project",
      "Implemented multilingual support in 4 languages using Angular 6, i18n, and PrimeNG",
    ],
    technologies: ["Angular 6", "TypeScript", "i18n", "PrimeNG"],
  },
];
