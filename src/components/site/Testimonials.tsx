import { testimonials } from "@/lib/portfolio-data";
import { Reveal, SectionLabel } from "./Reveal";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <SectionLabel>Feedback</SectionLabel>
        <h2 className="font-display mt-5 text-[clamp(2.6rem,8vw,7rem)]">What People Say</h2>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:mt-20 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.person} delay={i * 0.08}>
            <figure className="flex h-full flex-col justify-between rounded-[1.5rem] bg-surface p-7 ring-1 ring-white/5 transition-colors duration-500 hover:ring-primary/40 sm:p-9">
              <blockquote className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-10 border-t border-border pt-5">
                <p className="font-display text-xl">{t.person}</p>
                <p className="mt-1.5 text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
                  {t.role} · {t.company}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
