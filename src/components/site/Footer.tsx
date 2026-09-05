const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "IG", href: "https://instagram.com" },
  { label: "IN", href: "https://linkedin.com" },
  { label: "BE", href: "https://behance.net" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-display text-3xl sm:text-4xl">Your Name</p>
          <p className="mt-2 text-[0.62rem] tracking-[0.26em] text-muted-foreground uppercase">
            Video Editor · Visual Designer
          </p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.62rem] tracking-[0.26em] text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="flex size-10 items-center justify-center rounded-full border border-border text-[0.6rem] tracking-[0.12em] uppercase transition-colors hover:border-primary hover:text-primary"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border py-5">
        <p className="mx-auto max-w-[1600px] px-5 text-[0.6rem] tracking-[0.22em] text-muted-foreground uppercase sm:px-8">
          © {new Date().getFullYear()} Your Name — All rights reserved
        </p>
      </div>
    </footer>
  );
}
