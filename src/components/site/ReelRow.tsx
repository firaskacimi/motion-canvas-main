import type { Frame } from "@/lib/portfolio-data";
import { FrameCard } from "./FrameCard";
import { cn } from "@/lib/utils";

/**
 * Infinite horizontal strip. The sequence is duplicated once and the track
 * animates exactly -50%, so the loop never visibly resets.
 */
export function ReelRow({
  frames,
  direction = "left",
  duration = 60,
  cardClass,
  className,
  style,
}: {
  frames: Frame[];
  direction?: "left" | "right";
  duration?: number;
  cardClass?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const sequence = [...frames, ...frames];

  return (
    <div className={cn("w-full overflow-hidden", className)} style={style}>
      <div
        className={cn(
          direction === "left" ? "reel-track-left" : "reel-track-right",
          "gap-3 sm:gap-5",
        )}
        style={{ ["--reel-duration" as string]: `${duration}s` }}
      >
        {sequence.map((frame, i) => (
          <FrameCard
            key={`${frame.id}-${i}`}
            frame={frame}
            className={cn("w-[46vw] sm:w-[34vw] lg:w-[22vw]", cardClass)}
          />
        ))}
      </div>
    </div>
  );
}
