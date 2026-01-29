import { Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Profile } from "@/types";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="about"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center"
    >
      <div className="max-w-2xl space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Hello, I'm
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="text-xl text-muted-foreground sm:text-2xl">
            {profile.title}
          </p>
        </div>

        <p className="mx-auto max-w-lg text-muted-foreground leading-relaxed">
          {profile.summary}
        </p>

        <div className="flex items-center justify-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>

      <a
        href="#skills"
        className="absolute bottom-8 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="size-6" />
      </a>
    </section>
  );
}
