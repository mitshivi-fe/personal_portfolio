import { awards, metrics } from "@/app/data/achievements";
import Section from "../ui/Section";
import MetricCard from "../ui/MetricCard";
import SparkleIcon from "../icons/SparkleIcon";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      className="bg-white dark:bg-zinc-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Impact Metrics */}
        <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800 p-6 mb-10 ring-1 ring-zinc-900/5 dark:ring-white/10">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6 text-center">
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
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6 text-center">
            Awards & Recognition
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {awards.map((award) => (
              <div
                key={award.title}
                className="group rounded-2xl bg-zinc-50 dark:bg-zinc-800 p-5 ring-1 ring-zinc-900/5 dark:ring-white/10 transition hover:shadow-md hover:ring-zinc-900/10 dark:hover:ring-white/20"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <SparkleIcon className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100">
                      {award.title}
                    </h4>
                    <p className="text-sm text-teal-500 font-medium">
                      {award.company}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      {award.date}
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

