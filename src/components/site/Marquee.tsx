import { marqueeItems } from "@/lib/portfolio-data";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="edge-fade-x border-y border-border py-6 sm:py-8">
      <div className="overflow-hidden">
        <div className="reel-track-left gap-10 sm:gap-16" style={{ ["--reel-duration" as string]: "38s" }}>
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display flex shrink-0 items-center gap-10 text-2xl text-muted-foreground sm:gap-16 sm:text-4xl"
            >
              {item}
              <span className="size-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
