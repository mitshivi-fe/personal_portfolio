import Badge from "./Badge";

interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
  isLast?: boolean;
}

export default function TimelineItem({
  company,
  role,
  period,
  location,
  highlights,
  technologies,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 lg:pl-10">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] lg:left-[9px] top-6 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-700" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-teal-500 border-4 border-white dark:border-zinc-900 shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10" />

      {/* Content */}
      <div className="group rounded-2xl bg-white dark:bg-zinc-800 p-5 lg:p-6 shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10 transition hover:shadow-md hover:ring-zinc-900/10 dark:hover:ring-white/20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              {company}
            </h3>
            <p className="text-teal-500 font-medium">{role}</p>
          </div>
          <div className="text-sm text-zinc-500 dark:text-zinc-400 lg:text-right">
            <div className="font-medium">{period}</div>
            <div>{location}</div>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className="text-zinc-600 dark:text-zinc-400 text-sm flex gap-2"
            >
              <span className="text-teal-500 mt-0.5 flex-shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4"
                  />
                </svg>
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} label={tech} variant="neutral" />
          ))}
        </div>
      </div>
    </div>
  );
}
