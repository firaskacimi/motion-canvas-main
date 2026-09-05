import { Reveal, SectionLabel } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

const socials = [
  { label: "ASEPA", href: "#contact" },
  { label: "Candidacy", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-40">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--gradient-glow)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8">
        <Reveal>
          <SectionLabel>What's Next?</SectionLabel>
          <h2 className="font-display mt-6 text-[clamp(2.8rem,11vw,11rem)]">
            What's next?
            <br />
            From creating to building.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              After several experiences within ASEPA, I want to put everything I have learned
              toward a new step. Not simply to produce more. But to contribute to building a
              Marketing & Publicité volet that is more structured, more formative, more coherent,
              more strategic and more sustainable.
            </p>
            <MagneticButton href="https://drive.google.com/file/d/1ZhkJNZlOj-rlLBGZ9qNwzlfGFgpWw2NU/view?usp=sharing">
              Discover my candidacy
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-16 max-w-xl">
            <p className="text-[0.62rem] tracking-[0.24em] text-primary uppercase">Candidate for</p>
            <p className="mt-3 font-display text-4xl sm:text-6xl">Vice-President</p>
            <p className="font-display text-3xl sm:text-5xl">Marketing & Publicité</p>
            <p className="mt-8 font-display text-2xl text-foreground sm:text-4xl">
              PEOPLE BEFORE PRODUCTIONS.
            </p>
          </div>
          <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  data-cursor="go"
                  className="flex items-center justify-between bg-background px-5 py-7 text-[0.62rem] tracking-[0.24em] uppercase transition-colors hover:bg-surface hover:text-primary"
                >
                  {s.label}
                  <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
