import { Reveal, SectionLabel } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

const socials = [
  { label: "Email", href: "mailto:hello@yourname.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
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
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display mt-6 text-[clamp(2.8rem,11vw,11rem)]">
            Have a project
            <br />
            in mind?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tell me what you're working on, what you need edited, and where you want to take
              it.
            </p>
            <MagneticButton href="mailto:hello@yourname.com">Start a project</MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border lg:grid-cols-4">
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
