import { motion, useReducedMotion } from "motion/react";
import { projects } from "@/lib/portfolio-data";
import { Reveal, SectionLabel } from "./Reveal";

export function SelectedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="mx-auto max-w-[1600px] overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal>
        <SectionLabel>{`${projects.length} Projects`}</SectionLabel>

        <h2 className="font-display mt-5 text-[clamp(2.6rem,8vw,7rem)]">
          Selected Work
        </h2>
      </Reveal>

      {/* 3D PROJECT CAROUSEL */}
      <div className="relative mt-14 h-130 sm:mt-20 sm:h-155">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            perspective: "1600px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          <motion.div
            className="relative h-0 w-0"
            style={{
              transformStyle: "preserve-3d",
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    rotateY: 360,
                  }
            }
            transition={
              shouldReduceMotion
                ? {}
                : {
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
          >
            {projects.map((p, i) => {
              const angle = (360 / projects.length) * i;
              const radius = 560;

              return (
                <div
                  key={p.index}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      rotateY(${angle}deg)
                      translateZ(${radius}px)
                    `,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <article
                    data-cursor="view"
                    className="group relative h-75 w-112.5 overflow-hidden rounded-[1.5rem] bg-surface ring-1 ring-white/5 sm:h-90 sm:w-135"
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      {p.video ? (
                        <video
                          className="h-full w-full object-cover"
                          src={p.video}
                          poster={p.poster}
                          muted
                          loop
                          playsInline
                          preload="none"
                          onMouseEnter={(e) => {
                            void e.currentTarget.play();
                          }}
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
                          className="h-full w-full object-cover opacity-80 saturate-[0.9] transition-all duration-900 ease-out group-hover:scale-[1.05] group-hover:opacity-100 group-hover:saturate-100"
                        />
                      )}

                      {/* Dark gradient for text readability */}
                      <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

                      {/* Project number */}
                      <span className="font-display absolute left-5 top-5 text-sm tracking-[0.2em] text-primary">
                        {p.index}
                      </span>

                      {/* Project information */}
                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                          <h3 className="font-display text-3xl sm:text-4xl">
                            {p.title}
                          </h3>

                          <span className="text-[0.62rem] uppercase tracking-[0.26em] text-primary">
                            {p.category}
                          </span>
                        </div>

                        <p className="max-w-xl pt-3 text-sm leading-relaxed text-muted-foreground">
                          {p.description}
                        </p>

                        <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                          <span>{p.client}</span>

                          <span className="ml-auto">{p.year}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}