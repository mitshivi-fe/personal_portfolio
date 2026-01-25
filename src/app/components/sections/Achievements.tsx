import { awards, metrics } from "@/app/data/achievements";
import MetricCard from "../ui/MetricCard";

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 lg:py-20 bg-bg-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-100 mb-12 text-center">
          Achievements
        </h2>

        {/* Impact Metrics */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
          <h3 className="text-xl font-semibold text-text-100 mb-6 text-center">
            Impact by Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-xl font-semibold text-text-100 mb-6 text-center">
            Awards & Recognition
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {awards.map((award) => (
              <div
                key={award.title}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-100">{award.title}</h4>
                    <p className="text-sm text-primary-100 font-medium">
                      {award.company}
                    </p>
                    <p className="text-xs text-text-200 mt-1">{award.date}</p>
                    <p className="text-sm text-text-200 mt-2">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
