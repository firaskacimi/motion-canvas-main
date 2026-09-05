import { motion } from "motion/react";
import { projects } from "@/lib/portfolio-data";
import { Reveal, SectionLabel } from "./Reveal";

export function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <SectionLabel>{`${projects.length} Projects`}</SectionLabel>
        <h2 className="font-display mt-5 text-[clamp(2.6rem,8vw,7rem)]">Selected Work</h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:mt-20 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.index}
            delay={(i % 2) * 0.08}
            className={i % 3 === 0 ? "lg:col-span-2" : ""}
          >
            <article
              data-cursor="view"
              className="group relative overflow-hidden rounded-[1.5rem] bg-surface ring-1 ring-white/5"
            >
              <div
                className={
                  i % 3 === 0
                    ? "relative aspect-[16/8] overflow-hidden"
                    : "relative aspect-[16/10] overflow-hidden"
                }
              >
                {p.video ? (
                  <video
                    className="h-full w-full object-cover"
                    src={p.video}
                    poster={p.poster}
                    muted
                    loop
                    playsInline
                    preload="none"
                    onMouseEnter={(e) => void e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                ) : (
                  <img
                    src={p.poster}
                    alt={`${p.title} for ${p.client}`}
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover opacity-80 saturate-[0.9] transition-all duration-[900ms] ease-out group-hover:scale-[1.05] group-hover:opacity-100 group-hover:saturate-100"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

                <span className="font-display absolute top-5 left-5 text-sm tracking-[0.2em] text-primary">
                  {p.index}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-3xl sm:text-4xl">{p.title}</h3>
                  <span className="text-[0.62rem] tracking-[0.26em] text-primary uppercase">
                    {p.category}
                  </span>
                </div>
                <motion.div
                  className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]"
                  aria-hidden={false}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
                <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
                  <span>{p.client}</span>
                  <span className="ml-auto">{p.year}</span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
