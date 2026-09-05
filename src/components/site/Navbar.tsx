import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#services" },
  { label: "Candidacy", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 sm:h-20 sm:px-8">
          <a
            href="#top"
            className="font-display text-base tracking-[0.16em] sm:text-lg"
            data-cursor="go"
          >
            Abdeldjalil Sanadiki
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-[0.68rem] tracking-[0.26em] text-muted-foreground uppercase transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              data-cursor="go"
              className="hidden rounded-full border border-border px-5 py-2.5 text-[0.65rem] tracking-[0.22em] uppercase transition-colors hover:border-primary hover:text-primary lg:inline-flex"
            >
              Discover my candidacy
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-background/98 backdrop-blur-2xl md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-display text-base tracking-[0.16em]">Abdeldjalil Sanadiki</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border"
              >
                <X className="size-4" />
              </button>
            </div>
            <ul className="flex flex-1 flex-col justify-center gap-2 px-6">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.5 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display block py-2 text-5xl"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="px-6 pb-12">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-[0.7rem] tracking-[0.22em] text-primary-foreground uppercase"
              >
                Discover my candidacy
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
