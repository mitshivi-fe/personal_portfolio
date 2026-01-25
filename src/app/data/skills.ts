export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Core Technologies",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    name: "Frameworks",
    skills: ["React", "Next.js", "Angular 13+", "React Server Components"],
  },
  {
    name: "UI Libraries",
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
    name: "State Management",
    skills: ["Redux", "Zustand", "Ngrx", "Ngxs"],
  },
  {
    name: "Testing",
    skills: ["Jest", "React Testing Library", "Jasmine", "Karma"],
  },
  {
    name: "Other",
    skills: ["GraphQL", "React Query", "Micro-frontends", "Git"],
  },
];
