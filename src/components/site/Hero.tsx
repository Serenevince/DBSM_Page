import { useEffect, useState } from "react";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";
import ambient from "@/assets/hero-ambient.mp4.asset.json";

const slides = [
  {
    image: hero1,
    title: "Don Bosco Skill Mission",
    text: "Promoting research, training, innovation and professional development in the skill development sector.",
  },
  {
    image: hero2,
    title: "A Place To Breathe",
    text: "Capacity development of trainers in technical knowledge, facilitation, classroom delivery and management.",
  },
  {
    image: hero3,
    title: "Learning, Gently Guided",
    text: "A Centre of Excellence with state-of-the-art labs and knowledge from industry leaders.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        poster={hero1}
      >
        <source src={ambient.url} type="video/mp4" />
      </video>

      {slides.map((s, i) => (
        <img
          key={s.image}
          src={s.image}
          alt={s.title}
          width={1920}
          height={1080}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2200ms] ${
            i === index ? "opacity-70 animate-kenburns" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-veil)" }} />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-[26rem] w-[26rem] rounded-full blur-3xl animate-drift-glow"
        style={{ background: "var(--gradient-calm)" }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="script-accent animate-rise">welcome to a calmer campus</p>
        <h1 className="text-hero mt-3 max-w-4xl font-semibold text-primary-foreground animate-rise">
          {slides[index].title}
        </h1>
        <p className="text-fluid mt-6 max-w-2xl text-primary-foreground/85 animate-rise">
          {slides[index].text}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#campus"
            className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-foreground shadow-[var(--shadow-float)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Take the campus tour
          </a>
          <a
            href="#about"
            className="rounded-full border border-primary-foreground/40 px-7 py-3 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-colors duration-300 hover:bg-primary-foreground/10"
          >
            About the mission
          </a>
        </div>

        <div className="mt-14 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.title}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-accent" : "w-4 bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{ backgroundImage: "var(--gradient-mist)" }}
      />
    </section>
  );
}
