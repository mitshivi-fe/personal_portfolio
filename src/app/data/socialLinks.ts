export interface SocialLink {
  name: string;
  href: string;
  icon: "linkedin" | "github" | "email";
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shivi-mittal-nitkkr/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/shivimittal",
    icon: "github",
  },
  {
    name: "Email",
    href: "mailto:mitshivi@gmail.com",
    icon: "email",
  },
];

export const contactInfo = {
  email: "mitshivi@gmail.com",
  linkedIn: "https://www.linkedin.com/in/shivi-mittal-nitkkr/",
  github: "https://github.com/shivimittal",
};
