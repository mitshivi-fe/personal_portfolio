import Container from "../Container";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-zinc-50 dark:bg-zinc-950">
      <Container>
        <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center tracking-tight">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Professional */}
          <div className="group rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10 transition hover:shadow-md">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
              <span className="h-4 w-0.5 rounded-full bg-teal-500" />
              Professional Journey
            </h3>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
              I&apos;m a Senior Frontend Engineer with over 6 years of
              experience crafting scalable, high-performance web applications.
              I&apos;ve had the privilege of working with MNCs, early-stage
              startups, and fast-growing unicorns. Currently at{" "}
              <span className="font-semibold text-teal-500">New Relic</span>,
              I lead micro-frontend architecture initiatives. Previously, I
              built trading platforms at{" "}
              <span className="font-semibold text-teal-500">CoinDCX</span>{" "}
              serving 14M+ users and contributed to a{" "}
              <span className="font-semibold text-teal-500">
                $30M acquisition
              </span>{" "}
              at Talentica Software.
            </p>
          </div>

          {/* Personal */}
          <div className="group rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10 transition hover:shadow-md">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
              <span className="h-4 w-0.5 rounded-full bg-teal-500" />
              Beyond Code
            </h3>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
              Beyond building products, I&apos;m passionate about community
              service and actively volunteer with NGOs like Helpage Orphans. In
              my free time, you&apos;ll find me sketching, writing short
              stories, hitting the gym, or exploring new cities - I&apos;ve
              traveled to over 10+ cities and love trekking and hiking.
            </p>
          </div>

          {/* Education */}
          <div className="group rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10 transition hover:shadow-md">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
              <span className="h-4 w-0.5 rounded-full bg-teal-500" />
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  National Institute of Technology, Kurukshetra
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Bachelor of Technology (2014 - 2018)
                </p>
              </div>
              <div className="text-sm">
                <span className="inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1 text-teal-500 ring-1 ring-inset ring-teal-500/20">
                  JEE Mains AIR 14098
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
