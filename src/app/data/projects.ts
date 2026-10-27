export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  impact: string;
  technologies: string[];
  metrics?: { value: string; label: string }[];
}

export const projects: Project[] = [
  {
    id: "compute-optimizer",
    title: "Compute Optimizer Platform",
    company: "New Relic",
    description:
      "Spearheaded the product architecture for a micro-frontend providing granular data-ingest observability. Automated multi-team review and release workflows using AI-assisted developer tooling.",
    impact:
      "Drove 40%+ adoption rate of the compute-based pricing model. Accelerated product launch cycles from several weeks to under 5 minutes.",
    technologies: [
      "React",
      "TypeScript",
      "Micro-frontends",
      "AI Tooling",
      "Next.js",
    ],
    metrics: [
      { value: "40%+", label: "Adoption Rate" },
      { value: "5min", label: "Launch Cycle" },
      { value: "5", label: "Team Size Led" },
    ],
  },
  {
    id: "trading-platform",
    title: "Core Trading Platform",
    company: "CoinDCX",
    description:
      "Led end-to-end product delivery of core trading features including Margin, Futures, and Spot trading. Drove technical strategy for frontend performance optimizations.",
    impact:
      "Scaled platform experience for 14M+ users with 75% reduction in load times, significantly boosting customer satisfaction.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "WebSockets",
      "GraphQL",
    ],
    metrics: [
      { value: "14M+", label: "Users" },
      { value: "75%", label: "Faster Loads" },
    ],
  },
  {
    id: "trading-championship",
    title: "Trading Championship & VIP Experience",
    company: "CoinDCX",
    description:
      "Partnered with business teams to architect config-driven platforms for Trading Championships and the VIP Experience, empowering zero-code event launches.",
    impact:
      "Served 2M+ active participants in trading competitions and 3M+ VIP customers. Won the Moon Lander award for the VIP platform.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Config-Driven Architecture",
    ],
    metrics: [
      { value: "2M+", label: "Participants" },
      { value: "3M+", label: "VIP Users" },
    ],
  },
  {
    id: "homeunion-mynd",
    title: "Real Estate Platform Migration",
    company: "Talentica Software",
    description:
      "Directed technical product strategy for migrating a real estate platform. Managed a distributed team of 3 engineers across 3 time zones.",
    impact:
      "Reduced load times from 8s to 1s, boosted engagement by 30%. This was a key driver in a $30M+ acquisition by Mynd Investments.",
    technologies: ["React", "Angular", "TypeScript", "Node.js", "SEO"],
    metrics: [
      { value: "$30M+", label: "Acquisition" },
      { value: "87%", label: "LCP Improvement" },
      { value: "30%", label: "More Engagement" },
    ],
  },
];

