import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shivi Mittal | Senior Software Engineer",
  description:
    "Senior Software Engineer with 6+ years of experience in React.js, Next.js, TypeScript, and modern web technologies. Available for mentorship, consulting, and collaboration.",
  keywords: [
    "Frontend Engineer",
    "Fullstack Engineer",
    "Senior Fullstack Engineer",
    "Software Engineer",
    "Senior Software Engineer",
    "Senior Frontend Engineer",
    "React.js",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Shivi Mittal",
  ],
  authors: [{ name: "Shivi Mittal" }],
  openGraph: {
    title: "Shivi Mittal | Senior Software Engineer",
    description:
      "Senior Software Engineer with 7+ years of experience in React.js, Next.js, TypeScript, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivi Mittal | Senior Software Engineer",
    description:
      "Senior Software Engineer with 7+ years of experience in React.js, Next.js, TypeScript, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
