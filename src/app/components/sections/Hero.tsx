"use client";

import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import AnimatedNumber from "@/app/components/AnimatedNumber";

export default function Hero() {
  return (
    <section className="py-12 lg:py-20 bg-white dark:bg-zinc-900">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">
              Hi, I&apos;m <span className="text-teal-500">Shivi Mittal</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-600 dark:text-teal-400 font-medium mb-4">
              Senior Software Engineer
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 max-w-xl mx-auto lg:mx-0">
              Building high-performance web experiences for{" "}
              <span className="font-semibold text-teal-500">
                <AnimatedNumber value={14} suffix="M+ users" />
              </span>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 text-sm">
              <span className="px-4 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full ring-1 ring-zinc-900/5 dark:ring-white/10">
                7+ Years Experience
              </span>
              <span className="px-4 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full ring-1 ring-zinc-900/5 dark:ring-white/10">
                MNCs
              </span>
              <span className="px-4 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full ring-1 ring-zinc-900/5 dark:ring-white/10">
                Startups
              </span>
              <span className="px-4 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full ring-1 ring-zinc-900/5 dark:ring-white/10">
                Unicorns
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="#contact" variant="primary">
                Let&apos;s Connect
              </Button>
              <Button
                href="/Shivi_FE_NITkkr.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <Image
                src="/images/hero_Image.webp"
                alt="Shivi Mittal - Senior Software Engineer"
                width={450}
                height={450}
                className="rounded-2xl shadow-xl ring-1 ring-zinc-900/5 dark:ring-white/10"
                priority
              />
              <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-teal-400/20 to-teal-600/20 blur-lg" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
