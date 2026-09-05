import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const LABELS: Record<string, string> = {
  view: "View Project",
  go: "Let's Go",
};

export function Cursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 500, damping: 40, mass: 0.4 });
  const y = useSpring(my, { stiffness: 500, damping: 40, mass: 0.4 });
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      const el = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      const key = el?.getAttribute("data-cursor") ?? "";
      setLabel(LABELS[key] ?? null);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 md:block"
      aria-hidden
    >
      <motion.div
        animate={{
          width: label ? 118 : 12,
          height: label ? 118 : 12,
          backgroundColor: label ? "var(--primary)" : "transparent",
          borderColor: label ? "transparent" : "var(--primary)",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="-ml-1.5 -mt-1.5 flex items-center justify-center rounded-full border"
      >
        {label ? (
          <span className="text-[0.6rem] font-medium tracking-[0.18em] text-primary-foreground uppercase">
            {label}
          </span>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
