import { useEffect, useState } from "react";
import logo from "@/assets/dbsm/logo.webp";

const links = [
  { href: "#about", label: "About" },
  { href: "#objectives", label: "Objectives" },
  { href: "#campus", label: "Campus" },
  { href: "#excellence", label: "Excellence" },
  { href: "#events", label: "News & Events" },
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        solid
          ? "border-border bg-background/95 shadow-[var(--shadow-soft)] backdrop-blur-md"
          : "border-primary-foreground/15 bg-foreground/45 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Don Bosco Skill Mission logo"
            width={100}
            height={127}
            className="h-11 w-auto"
          />
          <span
            className={`hidden font-display text-lg font-bold leading-tight tracking-tight sm:block ${
              solid ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Don Bosco Skill Mission
            <span
              className={`block text-[0.65rem] font-medium uppercase tracking-[0.22em] ${
                solid ? "text-primary" : "text-accent"
              }`}
            >
              Bengaluru
            </span>
          </span>
        </a>
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-semibold transition-colors duration-300 hover:text-accent ${
                  solid ? "text-foreground/80" : "text-primary-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-accent px-5 py-2 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          Visit us
        </a>
      </nav>
    </header>
  );
}
