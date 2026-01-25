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
    title: "MOON LANDER",
    company: "CoinDCX",
    date: "June 2023",
    description: "For developing the VIP experience platform",
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
  { value: "75%", label: "Load Time Reduction" },
  { value: "87%", label: "LCP Improvement" },
  { value: "40%", label: "CSAT Increase" },
  { value: "$30M", label: "Acquisition Impact" },
  { value: "2M+", label: "Competition Users" },
];
