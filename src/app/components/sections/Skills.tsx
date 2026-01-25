import { skillCategories } from "@/app/data/skills";
import Badge from "../ui/Badge";

export default function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-100 mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-bg-200 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-text-100 mb-4">
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
      </div>
    </section>
  );
}
