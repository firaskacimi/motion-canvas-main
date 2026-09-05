import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  href = "#contact",
  variant = "solid",
  className,
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 18 });
  const y = useSpring(my, { stiffness: 260, damping: 18 });

  return (
    <motion.a
      ref={ref}
      href={href}
      data-cursor="go"
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - (r.left + r.width / 2)) * 0.25);
        my.set((e.clientY - (r.top + r.height / 2)) * 0.35);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[0.72rem] font-medium tracking-[0.22em] uppercase transition-colors duration-300",
        variant === "solid"
          ? "bg-primary text-primary-foreground hover:bg-primary/85"
          : "border border-border text-foreground hover:border-primary hover:text-primary",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}
