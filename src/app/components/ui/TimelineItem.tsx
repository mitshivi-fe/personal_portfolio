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
        <div className="absolute left-[7px] lg:left-[9px] top-6 bottom-0 w-0.5 bg-bg-300" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-primary-100 border-4 border-white shadow-sm" />

      {/* Content */}
      <div className="bg-white rounded-xl shadow-sm border border-bg-300/50 p-5 lg:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl font-bold text-text-100">{company}</h3>
            <p className="text-primary-100 font-medium">{role}</p>
          </div>
          <div className="text-sm text-text-200 lg:text-right">
            <div className="font-medium">{period}</div>
            <div>{location}</div>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-text-200 text-sm flex gap-2">
              <span className="text-primary-100 mt-1">&#8226;</span>
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
