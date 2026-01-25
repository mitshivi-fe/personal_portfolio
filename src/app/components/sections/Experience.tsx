import { experiences } from "@/app/data/experience";
import Container from "../Container";
import Timeline from "../ui/Timeline";
import TimelineItem from "../ui/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-20 bg-white dark:bg-zinc-900">
      <Container>
        <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-12 text-center tracking-tight">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto">
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
      </Container>
    </section>
  );
}
