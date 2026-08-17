import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#objectives", label: "Objectives" },
  { href: "#campus", label: "Campus" },
  { href: "#excellence", label: "Excellence" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/85 shadow-[var(--shadow-soft)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className={`font-display text-lg font-semibold tracking-tight ${
            solid ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          DBSM<span className="script-accent ml-2 align-middle">Bengaluru</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm transition-colors duration-300 hover:text-accent ${
                  solid ? "text-muted-foreground" : "text-primary-foreground/85"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-primary px-5 py-2 text-xs font-medium tracking-wide text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
        >
          Visit us
        </a>
      </nav>
    </header>
  );
}
