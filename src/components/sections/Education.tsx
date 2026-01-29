import { GraduationCap } from "lucide-react";
import type { Degree } from "@/types";

interface EducationProps {
  degrees: Degree[];
}

export function Education({ degrees }: EducationProps) {
  return (
    <section id="education" className="py-20 px-6">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          <p className="text-muted-foreground">Academic background</p>
        </div>

        <div className="space-y-6">
          {degrees.map((degree) => (
            <div
              key={`${degree.institution}-${degree.period}`}
              className="flex items-start gap-4"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-background">
                <GraduationCap className="size-5 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h3 className="font-semibold">{degree.degree}</h3>
                    <p className="text-muted-foreground">
                      {degree.institution}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {degree.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {degree.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
