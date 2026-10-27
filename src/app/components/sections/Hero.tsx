"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../Button";
import Container from "../Container";
import GradientText from "../GradientText";

const floatingShapes = [
  { size: "w-72 h-72", position: "top-0 -right-20", delay: 0, color: "from-teal-400/20 to-cyan-400/10" },
  { size: "w-56 h-56", position: "-bottom-10 -left-10", delay: 2, color: "from-cyan-400/15 to-teal-400/5" },
  { size: "w-40 h-40", position: "top-1/3 left-1/4", delay: 4, color: "from-teal-500/10 to-transparent" },
];

const stats = [
  { label: "8+ Years Experience" },
  { label: "Cambridge MBA '27" },
  { label: "14M+ Users Served" },
  { label: "$30M+ Impact" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-zinc-900">
      {/* Floating background shapes */}
      {floatingShapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute ${shape.size} ${shape.position} rounded-full bg-gradient-to-br ${shape.color} blur-3xl ${
            i === 0 ? "animate-float" : i === 1 ? "animate-float-delayed" : "animate-float-slow"
          }`}
        />
      ))}

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <Container>
        <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-12 lg:py-0">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-sm font-medium ring-1 ring-teal-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              MBA Candidate @ Cambridge Judge Business School
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight leading-[1.1]">
              Hi, I&apos;m{" "}
              <GradientText>Shivi Mittal</GradientText>
            </h1>

            <p className="text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 font-medium mb-2">
              Engineer → Technical Leader → Product Thinker
            </p>

            <p className="text-base lg:text-lg text-zinc-500 dark:text-zinc-500 mb-8 max-w-xl mx-auto lg:mx-0">
              8+ years building high-performance web platforms at scale.
              Now pursuing an MBA at Cambridge, blending deep engineering expertise
              with product strategy and entrepreneurial vision.
            </p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {stats.map((stat) => (
                <span
                  key={stat.label}
                  className="px-4 py-1.5 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full ring-1 ring-zinc-900/5 dark:ring-white/10 hover:ring-teal-500/30 hover:bg-teal-500/5 transition-all"
                >
                  {stat.label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
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
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="flex-1 flex justify-center z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="relative">
              <Image
                src="/images/hero_Image.webp"
                alt="Shivi Mittal - Engineer, Leader, MBA Candidate at Cambridge"
                width={450}
                height={450}
                className="rounded-2xl shadow-xl ring-1 ring-zinc-900/5 dark:ring-white/10"
                priority
              />
              {/* Glow effect */}
              <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-br from-teal-400/30 via-cyan-400/20 to-teal-600/30 blur-xl animate-pulse-glow" />
              {/* Decorative badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-2 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">🎓 Cambridge MBA &apos;27</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
