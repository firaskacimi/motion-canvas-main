import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { processSteps } from "@/lib/portfolio-data";
import { Reveal, SectionLabel } from "./Reveal";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = scaleX;

  return (
    <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <SectionLabel>What I Learned</SectionLabel>
        <h2 className="font-display mt-5 text-[clamp(2.6rem,8vw,7rem)]">The Journey</h2>
      </Reveal>

      <div ref={ref} className="relative mt-14 sm:mt-20">
        {/* desktop progression line */}
        <div className="absolute top-3 right-0 left-0 hidden h-px bg-border lg:block">
          <motion.div
            style={{ scaleX }}
            className="h-full origin-left bg-primary"
          />
        </div>
        {/* mobile timeline line */}
        <div className="absolute top-0 bottom-0 left-[7px] w-px bg-border lg:hidden">
          <motion.div style={{ scaleY }} className="h-full w-full origin-top bg-primary" />
        </div>

        <ol className="grid gap-10 lg:grid-cols-6 lg:gap-6">
          {processSteps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 lg:pt-10 lg:pl-0"
            >
              <span className="absolute top-1 left-0 size-3.5 rounded-full border border-primary bg-background lg:top-[-4px]" />
              <p className="text-[0.62rem] tracking-[0.3em] text-primary uppercase">{s.n}</p>
              <h3 className="font-display mt-2 text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
      <p className="mt-12 font-display text-2xl text-foreground sm:text-4xl">
        THE FINAL PRODUCT IS ONLY THE VISIBLE PART.
      </p>
    </section>
  );
}
