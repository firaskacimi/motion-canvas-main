import { portrait } from "@/lib/portfolio-data";
import { Reveal, SectionLabel } from "./Reveal";

const facts = ["Video Production", "Visual Design", "Team Coordination", "Communication"];

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
            <SectionLabel>Behind the Work</SectionLabel>
            <h2 className="font-display mt-5 text-[clamp(2.6rem,7vw,6rem)]">Who Is Djalil?</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Pharmacy student. Creator. Team player. Problem solver.
              </p>
              <p>
                I am a curious person who enjoys understanding how things work, learning new
                skills and putting them into practice.
              </p>
              <p>
                Visual creation was one of my first ways into this world. But over time, I realized
                that what truly interests me goes beyond creation: understanding an idea,
                transforming it, working with a team and finding the best way to bring it to life.
              </p>
              <p>
                At ASEPA, this curiosity gradually led me to explore different sides of the
                organization. From competitive intelligence to filming, from video coordination to
                financial and stock management, each experience expanded the way I see teamwork and
                associative work.
              </p>
              <p>
                Today, I no longer define myself only by what I can produce, but by what I can
                build with others.
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
