import { Badge } from "@/components/ui/badge";
import type { SkillCategory } from "@/types";

interface SkillsProps {
  categories: SkillCategory[];
}

export function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <p className="text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {categories.map((category) => (
            <div key={category.name} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
