export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Emerging Tech",
    icon: "🤖",
    skills: [
      "Agentic AI",
      "LLM Integration",
      "LangGraph",
      "OpenAI / Gemini / Claude APIs",
      "APM & Observability",
    ],
  },
  {
    name: "Architecture & System Design",
    icon: "🏗️",
    skills: [
      "System Design (HLD & LLD)",
      "Technical Architecture",
      "Micro-Frontends",
      "Scalable Distributed Systems",
    ],
  },
  {
    name: "Frontend Frameworks",
    icon: "⚛️",
    skills: [
      "React",
      "Next.js",
      "Angular 13+",
      "React Server Components",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    name: "UI & Styling",
    icon: "🎨",
    skills: [
      "Tailwind CSS",
      "Material UI",
      "Headless UI",
      "Bootstrap",
      "Angular Material",
      "PrimeNg",
    ],
  },
  {
    name: "State & Data",
    icon: "🔄",
    skills: ["Redux", "Zustand", "GraphQL", "React Query", "Ngrx", "Ngxs"],
  },
  {
    name: "Languages & Tools",
    icon: "🛠️",
    skills: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS3", "Git"],
  },
  {
    name: "Testing & Quality",
    icon: "✅",
    skills: ["Jest", "React Testing Library", "Vitest", "Jasmine", "Karma"],
  },
  {
    name: "Leadership & Strategy",
    icon: "🚀",
    skills: [
      "Technical Roadmapping",
      "Team Leadership",
      "Startup Advisory (0→1)",
      "Product Strategy",
      "Women in Tech Mentorship",
    ],
  },
];
