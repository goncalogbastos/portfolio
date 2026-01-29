import { Briefcase } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { Position } from "@/types";

interface ExperienceProps {
  positions: Position[];
}

export function Experience({ positions }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          <p className="text-muted-foreground">My professional journey</p>
        </div>

        <div className="space-y-0">
          {positions.map((position, index) => (
            <div key={`${position.company}-${position.period}`} className="relative pl-10">
              {/* Timeline line */}
              {index < positions.length - 1 && (
                <div className="absolute left-[15px] top-10 bottom-0 w-px bg-border" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-1 flex size-8 items-center justify-center rounded-full border bg-background">
                <Briefcase className="size-4 text-muted-foreground" />
              </div>

              <div className="pb-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h3 className="font-semibold text-lg">{position.title}</h3>
                    <p className="text-muted-foreground">{position.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {position.period}
                  </span>
                </div>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {position.description}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {position.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="mt-1.5 size-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {index < positions.length - 1 && (
                  <Separator className="mt-10 sm:hidden" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
