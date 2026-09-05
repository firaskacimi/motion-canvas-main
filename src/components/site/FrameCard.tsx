import { Play } from "lucide-react";
import type { Frame } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

/**
 * A single reel panel. Drop an mp4/webm url on `frame.video`
 * and it renders a real autoplaying muted video instead of the poster.
 */
export function FrameCard({
  frame,
  className,
  eager = false,
}: {
  frame: Frame;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div
      data-cursor="view"
      className={cn(
        "group relative aspect-video shrink-0 overflow-hidden rounded-2xl bg-surface shadow-[0_30px_80px_-40px_oklch(0_0_0/0.95)] ring-1 ring-white/5 transition-[transform,filter] duration-500 ease-out hover:z-20 hover:scale-[1.06]",
        className,
      )}
    >
      {frame.video ? (
        <video
          className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
          src={frame.video}
          poster={frame.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={frame.poster}
          alt={`${frame.title} — ${frame.category}`}
          loading={eager ? "eager" : "lazy"}
          width={1280}
          height={720}
          className="h-full w-full object-cover opacity-70 saturate-[0.85] transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:saturate-100"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:p-4">
        <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
          <p className="font-display text-sm leading-none sm:text-base">{frame.title}</p>
          <p className="mt-1.5 text-[0.6rem] tracking-[0.25em] text-primary uppercase">
            {frame.category}
          </p>
        </div>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/90 text-primary-foreground">
          <Play className="size-3.5 fill-current" />
        </span>
      </div>
    </div>
  );
}
