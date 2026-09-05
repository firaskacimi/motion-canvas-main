import { portrait } from "@/lib/portfolio-data";
import { Reveal, SectionLabel } from "./Reveal";

const facts = ["Video Editing", "Motion Design", "Visual Storytelling", "Creative Direction"];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[1.5rem] ring-1 ring-white/10">
            <img
              src={portrait}
              alt="Portrait in the edit suite"
              loading="lazy"
              width={900}
              height={1200}
              className="aspect-[3/4] w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <SectionLabel>About</SectionLabel>
            <h2 className="font-display mt-5 text-[clamp(2.6rem,7vw,6rem)]">Behind the Edit</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I'm a video editor and visual designer focused on turning ideas into visuals
                that feel intentional, cinematic and memorable.
              </p>
              <p>
                I work across editing, motion design and visual storytelling — from short-form
                social content to polished commercial and creative projects.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border">
              {facts.map((f) => (
                <li
                  key={f}
                  className="bg-background px-4 py-6 text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase transition-colors hover:text-primary"
                >
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
