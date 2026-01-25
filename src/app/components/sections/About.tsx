export default function About() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-100 mb-8 text-center">
          About Me
        </h2>

        <div className="space-y-6 text-text-200">
          {/* Professional */}
          <div className="bg-bg-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text-100 mb-3">
              Professional Journey
            </h3>
            <p className="leading-relaxed">
              I&apos;m a Senior Frontend Engineer with over 6 years of
              experience crafting scalable, high-performance web applications.
              I&apos;ve had the privilege of working with MNCs, early-stage
              startups, and fast-growing unicorns. Currently at{" "}
              <span className="font-semibold text-primary-100">New Relic</span>,
              I lead micro-frontend architecture initiatives. Previously, I
              built trading platforms at{" "}
              <span className="font-semibold text-primary-100">CoinDCX</span>{" "}
              serving 14M+ users and contributed to a{" "}
              <span className="font-semibold text-primary-100">
                $30M acquisition
              </span>{" "}
              at Talentica Software.
            </p>
          </div>

          {/* Personal */}
          <div className="bg-bg-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text-100 mb-3">
              Beyond Code
            </h3>
            <p className="leading-relaxed">
              Beyond building products, I&apos;m passionate about community
              service and actively volunteer with NGOs like Helpage Orphans. In
              my free time, you&apos;ll find me sketching, writing short
              stories, hitting the gym, or exploring new cities - I&apos;ve
              traveled to over 10+ cities and love trekking and hiking.
            </p>
          </div>

          {/* Education */}
          <div className="bg-bg-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text-100 mb-3">
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="font-medium text-text-100">
                  National Institute of Technology, Kurukshetra
                </p>
                <p className="text-sm">Bachelor of Technology (2014 - 2018)</p>
              </div>
              <div className="text-sm">
                <span className="bg-primary-100/10 text-primary-100 px-3 py-1 rounded-full">
                  JEE Mains AIR 14098
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
