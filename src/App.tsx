import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";

import profileData from "@/data/profile.json";
import skillsData from "@/data/skills.json";
import experienceData from "@/data/experience.json";
import educationData from "@/data/education.json";
import projectsData from "@/data/projects.json";

import type { Profile, Skills as SkillsType, Experience as ExpType, Education as EduType, Projects as ProjType } from "@/types";

const profile = profileData as Profile;
const skills = skillsData as SkillsType;
const experience = experienceData as ExpType;
const education = educationData as EduType;
const projects = projectsData as ProjType;

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar />
      <main>
        <Hero profile={profile} />
        <Skills categories={skills.categories} />
        <Experience positions={experience.positions} />
        <Education degrees={education.degrees} />
        <Projects projects={projects.projects} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}

export default App;
