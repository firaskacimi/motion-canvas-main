import {
  motion,
  useAnimationControls,
  useReducedMotion,
} from "motion/react";
import { useEffect, useState } from "react";
import { projects } from "@/lib/portfolio-data";
import { Reveal, SectionLabel } from "./Reveal";

const featuredDesign =
  "https://res.cloudinary.com/dgwcqsnn6/image/upload/v1788618188/Screenshot_2026-09-05_150154_aq4ox0.png";

export function SelectedWork() {
  const shouldReduceMotion = useReducedMotion();
  const carouselControls = useAnimationControls();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || isMobile) {
      carouselControls.stop();
      return;
    }

    void carouselControls.start({
      rotateY: 360,
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "linear",
      },
    });

    return () => carouselControls.stop();
  }, [carouselControls, shouldReduceMotion, isMobile]);

  return (
    <section
      id="work"
      className="
        mx-auto w-full max-w-[1600px]
        overflow-hidden
        px-5 py-20
        sm:px-8 sm:py-32
      "
    >
      {/* INTRO */}
      <Reveal>
        <SectionLabel>Selected Work</SectionLabel>

        <h2 className="font-display mt-5 text-[clamp(2.6rem,8vw,7rem)] leading-none">
          Productions
        </h2>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-lg">
          <span className="font-display text-2xl text-foreground sm:text-3xl">
            MORE THAN JUST CREATING.
          </span>

          <br />

          Throughout my journey at ASEPA, I had the opportunity to work across
          different formats and communication needs: graphic design, video,
          photography, writing and campaign valorisation. Each production
          helped me develop a different skill, but more importantly, it taught
          me that good content is not only about how it looks. It needs to serve
          a purpose, communicate a message and fit into a coherent communication
          strategy.
        </p>
      </Reveal>

      {/* FEATURED DESIGN */}
      <Reveal>
        <a
          href="https://drive.google.com/file/d/1ZhkJNZlOj-rlLBGZ9qNwzlfGFgpWw2NU/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          <figure
            className="
              mx-auto mt-12 w-full max-w-5xl
              overflow-hidden rounded-[1.5rem]
              bg-surface ring-1 ring-white/10
              sm:mt-20
            "
          >
            <img
              src={featuredDesign}
              alt="Featured campaign design"
              width={1600}
              height={900}
              className="
                block
                max-h-[70vh]
                w-full
                object-contain
              "
            />

            <figcaption
              className="
                border-t border-border
                px-5 py-4
                text-[0.6rem]
                uppercase
                tracking-[0.24em]
                text-primary
                sm:px-7
                sm:text-[0.65rem]
                sm:tracking-[0.28em]
              "
            >
              Featured Design
            </figcaption>
          </figure>
        </a>
      </Reveal>

      {/* ============================================================
          MOBILE CAROUSEL
          ============================================================ */}
      {isMobile ? (
        <div className="relative mt-14 w-full sm:hidden">
          <div
            className="
              flex
              w-full
              gap-4
              overflow-x-auto
              overflow-y-hidden
              px-1
              pb-4
              snap-x
              snap-mandatory
              scrollbar-none
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((p) => (
              <article
                key={p.index}
                data-cursor="view"
                className="
                  group
                  relative
                  h-[390px]
                  min-h-[390px]
                  w-[calc(100vw-40px)]
                  min-w-[calc(100vw-40px)]
                  flex-none
                  snap-center
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-surface
                  ring-1
                  ring-white/5
                "
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
                      preload="metadata"
                      autoPlay
                    />
                  ) : (
                    <img
                      src={p.poster}
                      alt={`${p.title} for ${p.client}`}
                      loading="lazy"
                      width={1280}
                      height={720}
                      className="
                        h-full
                        w-full
                        object-contain
                        bg-surface
                        opacity-80
                        saturate-[0.9]
                        transition-all
                        duration-700
                        ease-out
                        group-hover:scale-[1.03]
                        group-hover:opacity-100
                        group-hover:saturate-100
                      "
                    />
                  )}

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

                  {/* Number */}
                  <span
                    className="
                      font-display
                      absolute
                      left-5
                      top-5
                      text-sm
                      tracking-[0.2em]
                      text-primary
                    "
                  >
                    {p.index}
                  </span>

                  {/* Information */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-2xl leading-tight">
                        {p.title}
                      </h3>

                      <span className="text-[0.58rem] uppercase tracking-[0.22em] text-primary">
                        {p.category}
                      </span>
                    </div>

                    <p className="max-w-xl pt-3 text-xs leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        gap-3
                        border-t
                        border-border
                        pt-4
                        text-[0.58rem]
                        uppercase
                        tracking-[0.2em]
                        text-muted-foreground
                      "
                    >
                      <span>{p.client}</span>

                      <span className="ml-auto">{p.year}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile scroll hint */}
          <div className="mt-2 flex items-center justify-center gap-2 text-[0.55rem] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Swipe</span>
            <span className="h-px w-8 bg-border" />
            <span>Explore</span>
          </div>
        </div>
      ) : (
        /* ============================================================
           DESKTOP 3D CAROUSEL
           ============================================================ */
        <div className="relative mt-16 h-130 w-full sm:mt-24 sm:h-155">
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
              animate={shouldReduceMotion ? {} : carouselControls}
            >
              {projects.map((p, i) => {
                const angle = (360 / projects.length) * i;

                return (
                  <div
                    key={p.index}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `
                        translate(-50%, -50%)
                        rotateY(${angle}deg)
                        translateZ(clamp(280px, 38vw, 620px))
                      `,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <article
                      data-cursor="view"
                      className="
                        group
                        relative
                        h-90
                        w-135
                        overflow-hidden
                        rounded-[1.5rem]
                        bg-surface
                        ring-1
                        ring-white/5
                      "
                      onMouseEnter={() => carouselControls.stop()}
                      onMouseLeave={() => {
                        if (!shouldReduceMotion) {
                          void carouselControls.start({
                            rotateY: 360,
                            transition: {
                              duration: 5,
                              repeat: Infinity,
                              ease: "linear",
                            },
                          });
                        }
                      }}
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
                            className="
                              h-full
                              w-full
                              object-contain
                              bg-surface
                              opacity-80
                              saturate-[0.9]
                              transition-all
                              duration-900
                              ease-out
                              group-hover:scale-[1.05]
                              group-hover:opacity-100
                              group-hover:saturate-100
                            "
                          />
                        )}

                        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

                        <span className="font-display absolute left-5 top-5 text-sm tracking-[0.2em] text-primary">
                          {p.index}
                        </span>

                        <div className="absolute inset-x-0 bottom-0 p-7">
                          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                            <h3 className="font-display text-4xl">
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
      )}
    </section>
  );
}