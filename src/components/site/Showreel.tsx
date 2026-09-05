import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Play } from "lucide-react";
import { heroCenter } from "@/lib/portfolio-data";
import { SectionLabel } from "./Reveal";

export function Showreel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionLabel>Full Reel</SectionLabel>
          <h2 className="font-display mt-5 text-[clamp(2.6rem,8vw,7rem)]">Watch the Reel</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
          A selection of cuts, campaigns, motion work and visual experiments.
        </p>
      </div>

      <motion.div
        ref={ref}
        initial={{ scale: 0.92, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="grain glow-ring group relative mt-10 aspect-[16/9] overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 sm:mt-14 lg:aspect-[21/9]"
        data-cursor="view"
      >
        <motion.img
          style={{ y }}
          src={heroCenter}
          alt="Showreel cover frame"
          loading="lazy"
          width={1600}
          height={900}
          className="absolute inset-0 h-[112%] w-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-background/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
          <span className="flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_90px_-10px_var(--primary)] transition-transform duration-500 group-hover:scale-110 sm:size-28">
            <Play className="size-6 fill-current sm:size-8" />
          </span>
          <span className="text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
            Play showreel — 02:14
          </span>
        </div>
      </motion.div>
    </section>
  );
}
