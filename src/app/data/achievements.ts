export interface Award {
  title: string;
  company: string;
  date: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
}

export const awards: Award[] = [
  {
    title: "COMPUTE OPTIMIZER EXCELLENCE",
    company: "New Relic",
    date: "June 2025",
    description:
      "Company-wide recognition for architecting the Compute Optimizer, driving 40%+ adoption of the compute-based pricing model",
  },
  {
    title: "MOON LANDER",
    company: "CoinDCX",
    date: "June 2023",
    description:
      "For developing the VIP experience platform serving 3M+ customers",
  },
  {
    title: "GO-GETTER",
    company: "Talentica",
    date: "July 2021",
    description:
      "For outstanding performance in revamping HomeUnion tech and transition to Mynd Acquisition",
  },
  {
    title: "Pat On The Back",
    company: "Talentica",
    date: "May 2021",
    description:
      "For improving client application performance and SEO by 80%",
  },
];

export const metrics: Metric[] = [
  { value: "14M+", label: "Users Served" },
  { value: "8+", label: "Years Experience" },
  { value: "75%", label: "Load Time Reduction" },
  { value: "40%+", label: "Product Adoption" },
  { value: "$30M+", label: "Acquisition Impact" },
  { value: "3M+", label: "VIP Customers" },
];
