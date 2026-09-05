import { services } from "@/lib/portfolio-data";
import { Reveal, SectionLabel } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <SectionLabel>Services</SectionLabel>
        <h2 className="font-display mt-5 text-[clamp(2.6rem,8vw,7rem)]">What I Do</h2>
      </Reveal>

      <div className="mt-12 border-t border-border sm:mt-16">
        {services.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.04}>
            <div className="group relative grid grid-cols-1 items-baseline gap-2 border-b border-border py-7 transition-colors duration-500 hover:bg-surface/60 sm:grid-cols-[6rem_1fr_1.1fr] sm:gap-8 sm:px-4">
              <span className="text-[0.62rem] tracking-[0.3em] text-primary uppercase">
                {s.n}
              </span>
              <h3 className="font-display text-3xl transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl">
                {s.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
