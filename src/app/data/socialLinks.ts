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
    href: "mailto:sm3091@jbs.cam.ac.uk",
    icon: "email",
  },
];

export const contactInfo = {
  email: "sm3091@jbs.cam.ac.uk",
  linkedIn: "https://www.linkedin.com/in/shivi-mittal-nitkkr/",
  github: "https://github.com/shivimittal",
  website: "https://mitshivi.in",
};
