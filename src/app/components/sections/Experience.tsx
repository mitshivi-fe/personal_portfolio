import { experiences } from "@/app/data/experience";
import Section from "../ui/Section";
import Timeline from "../ui/Timeline";
import TimelineItem from "../ui/TimelineItem";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Work Experience"
      className="bg-white dark:bg-zinc-900"
    >
      <div className="max-w-4xl mx-auto">
        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              company={experience.company}
              role={experience.role}
              period={`${experience.startDate} - ${experience.endDate}`}
              location={experience.location}
              highlights={experience.highlights}
              technologies={experience.technologies}
              isLast={index === experiences.length - 1}
            />
          ))}
        </Timeline>
      </div>
    </Section>
  );
}
