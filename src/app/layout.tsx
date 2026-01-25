import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Shivi Mittal | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 6+ years of experience in React.js, Next.js, TypeScript, and modern web technologies. Available for mentorship, consulting, and collaboration.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Shivi Mittal",
  ],
  authors: [{ name: "Shivi Mittal" }],
  openGraph: {
    title: "Shivi Mittal | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 6+ years of experience in React.js, Next.js, TypeScript, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivi Mittal | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 6+ years of experience in React.js, Next.js, TypeScript, and modern web technologies.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
