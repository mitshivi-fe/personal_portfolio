import { skillCategories } from "@/app/data/skills";
import Container from "../Container";
import Badge from "../ui/Badge";

export default function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-20 bg-zinc-50 dark:bg-zinc-950">
      <Container>
        <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-12 text-center tracking-tight">
          Technical Skills
        </h2>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="group rounded-2xl bg-white dark:bg-zinc-900 p-5 shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10 transition hover:shadow-md hover:ring-zinc-900/10 dark:hover:ring-white/20"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                <span className="h-4 w-0.5 rounded-full bg-teal-500" />
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} label={skill} variant="primary" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
