import { motion } from "motion/react";
import { Play } from "lucide-react";
import { frames } from "@/lib/portfolio-data";
import { ReelRow } from "./ReelRow";
import { MagneticButton } from "./MagneticButton";

const heroVideo =
  "https://res.cloudinary.com/dgwcqsnn6/video/upload/v1788619258/logo_animation_esldrc.mp4";

const rotate = (arr: typeof frames, n: number) => [...arr.slice(n), ...arr.slice(0, n)];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--gradient-glow)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border px-3.5 py-1.5 text-[0.6rem] tracking-[0.24em] text-muted-foreground uppercase">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            Available for selected projects
          </span>
          <span className="text-[0.6rem] tracking-[0.24em] text-muted-foreground uppercase">
            Video Editor · Motion Designer · Visual Designer
          </span>
        </motion.div>

        <h1 className="font-display mt-8 text-[clamp(3.2rem,13vw,13rem)]">
          {["Video Editor", "& Visual Designer"].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>

      {/* ---- Infinite cinematic reel system ---- */}
      <div className="relative mt-10 sm:mt-14" style={{ perspective: "1600px" }}>
        <div className="relative flex flex-col gap-3 sm:gap-5">
          <ReelRow
            frames={rotate(frames, 0)}
            direction="left"
            duration={70}
            className="opacity-45 blur-[1.5px]"
            cardClass="w-[38vw] sm:w-[24vw] lg:w-[15vw]"
            style={{ transform: "rotateX(9deg) translateZ(-160px)" }}
          />

          {/* middle band: the moving strip that passes behind the main panel */}
          <div className="relative">
            <ReelRow
              frames={rotate(frames, 3)}
              direction="right"
              duration={95}
              className="opacity-70"
              cardClass="w-[52vw] sm:w-[34vw] lg:w-[21vw]"
            />

            {/* fixed dominant center panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(14px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/2 left-1/2 z-30 w-[80vw] max-w-[820px] -translate-x-1/2 -translate-y-1/2"
            >
              <div
                data-cursor="view"
                className="group grain glow-ring relative aspect-video overflow-hidden rounded-[1.75rem] ring-1 ring-white/10"
              >
                <video
                  src={heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/25" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-[0_0_60px_-10px_var(--primary)] transition-transform duration-500 group-hover:scale-110 sm:size-20">
                    <Play className="size-5 fill-current sm:size-6" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-6">
                  <div>
                    <p className="font-display text-lg sm:text-2xl">Showreel 2026</p>
                    <p className="mt-1 text-[0.6rem] tracking-[0.26em] text-primary uppercase">
                      Editing · Motion · Grade
                    </p>
                  </div>
                  <p className="hidden text-[0.6rem] tracking-[0.26em] text-muted-foreground uppercase sm:block">
                    02:14
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <ReelRow
            frames={rotate(frames, 5)}
            direction="left"
            duration={80}
            className="opacity-45 blur-[1.5px]"
            cardClass="w-[38vw] sm:w-[24vw] lg:w-[15vw]"
            style={{ transform: "rotateX(-9deg) translateZ(-160px)" }}
          />
        </div>

        {/* depth: soften and darken toward the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[18vw] bg-gradient-to-r from-background via-background/70 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_right,black,transparent)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[18vw] bg-gradient-to-l from-background via-background/70 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_left,black,transparent)]" />
      </div>

      <div className="relative mx-auto mt-12 flex max-w-[1600px] flex-col gap-8 px-5 sm:mt-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
          I turn raw footage, ideas and visuals into content that people actually want to
          watch.
        </p>
        <div className="flex flex-wrap gap-3">
          <MagneticButton href="#work">View my work</MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Let's work together
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
