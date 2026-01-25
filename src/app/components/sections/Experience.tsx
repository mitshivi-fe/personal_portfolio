import { experiences } from "@/app/data/experience";
import Timeline from "../ui/Timeline";
import TimelineItem from "../ui/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-20 bg-bg-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-100 mb-12 text-center">
          Work Experience
        </h2>

        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              company={exp.company}
              role={exp.role}
              period={`${exp.startDate} - ${exp.endDate}`}
              location={exp.location}
              highlights={exp.highlights}
              technologies={exp.technologies}
              isLast={index === experiences.length - 1}
            />
          ))}
        </Timeline>
      </div>
    </section>
  );
}
