import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { CampusTour } from "@/components/site/CampusTour";
import { Reveal } from "@/components/site/Reveal";
import aboutBg from "@/assets/dbsm/about-bg.webp";
import objectivesBg from "@/assets/dbsm/objectives-bg.webp";
import slider3 from "@/assets/dbsm/slider-3.webp";
import coeElectrician from "@/assets/dbsm/coe-electrician.webp";
import coeBeautician from "@/assets/dbsm/coe-beautician.webp";
import coeFacilities from "@/assets/dbsm/coe-facilities.webp";
import coePlumbing from "@/assets/dbsm/coe-plumbing.webp";
import coeAc from "@/assets/dbsm/coe-inus-air-condition.webp";
import coeFridge from "@/assets/dbsm/coe-home-refridgration.webp";
import coeRetail from "@/assets/dbsm/coe-retail.webp";
import coeBpo from "@/assets/dbsm/coe-bpo.webp";
import coeHospitality from "@/assets/dbsm/coe-hospitality.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Don Bosco Skill Mission | Calm Campus for Skill Development" },
      {
        name: "description",
        content:
          "A serene Centre of Excellence for skill training, trainer capacity building and events — modern labs, auditorium, conference halls and green open spaces.",
      },
      { property: "og:title", content: "Don Bosco Skill Mission" },
      {
        property: "og:description",
        content:
          "Peaceful campus for skill development, trainer training and conferences with state-of-the-art labs and facilities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const objectives = [
  {
    title: "Research & Innovation",
    text: "Advance research, innovation and professional practice across the skill development ecosystem.",
  },
  {
    title: "Trainer Capacity",
    text: "Develop trainers in technical knowledge, facilitation, classroom delivery and management.",
  },
  {
    title: "Centres of Excellence",
    text: "Run state-of-the-art labs shaped with expertise from leading industry partners.",
  },
  {
    title: "Community Impact",
    text: "Create dignified livelihoods for young people through skilling rooted in care.",
  },
];

const excellence = [
  { img: coeElectrician, label: "Electrical" },
  { img: coeBeautician, label: "Beauty & Wellness" },
  { img: coeFacilities, label: "Facility Management" },
  { img: coePlumbing, label: "Plumbing" },
  { img: coeAc, label: "Industrial Air Conditioning" },
  { img: coeFridge, label: "Home AC / Refrigeration" },
  { img: coeRetail, label: "Retail" },
  { img: coeBpo, label: "BPO" },
  { img: coeHospitality, label: "Hospitality, F&B and House Keeping" },
];

const events = [
  { day: "07", month: "Aug", title: "Inauguration Programme — GSA Batch 2", text: "A new cohort begins its journey at DBSM." },
  { day: "01", month: "Aug", title: "Industrial Exposure Visit", text: "CP2 trainees step into live industry floors." },
  { day: "25", month: "Jul", title: "Blindfold Volleyball", text: "An afternoon of trust, laughter and teamwork." },
  { day: "24", month: "Jul", title: "GSA Batch 1 Farewell", text: "Celebrating the trainees who move onward." },
];

function Index() {
  return (
    <main className="relative">
      <SiteNav />
      <Hero />

      <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <p className="script-accent">about us</p>
            <h2 className="text-section mt-2 font-semibold">Don Bosco Skill Mission</h2>
            <p className="text-fluid mt-6 text-muted-foreground">
              DBSM is a quiet campus with a loud purpose. We bring research, training and
              innovation together so that trainers grow, young people find dignified work, and
              the skill sector keeps learning.
            </p>
            <p className="text-fluid mt-4 text-muted-foreground">
              Everything here — the light, the greenery, the pace — is arranged so that people
              can think clearly and learn deeply.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { n: "9", l: "Centres of Excellence" },
                { n: "20+", l: "Training Programmes" },
                { n: "5000+", l: "Lives Touched" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-semibold text-primary">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-float)]">
              <img
                src={aboutBg}
                alt="Don Bosco Skill Mission campus building"
                width={1920}
                height={1080}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="objectives" className="relative overflow-hidden py-24 md:py-32">
        <img
          src={objectivesBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-veil)" }} />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <p className="script-accent">what guides us</p>
            <h2 className="text-section mt-2 font-semibold text-primary-foreground">Objectives</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {objectives.map((o, i) => (
              <Reveal key={o.title} delay={i * 110}>
                <article className="h-full rounded-3xl border border-primary-foreground/15 bg-background/10 p-7 backdrop-blur-md transition-transform duration-500 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-primary-foreground">{o.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">{o.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CampusTour />

      <section id="excellence" className="bg-secondary/60 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <p className="script-accent">skills that travel far</p>
            <h2 className="text-section mt-2 font-semibold">Centres of Excellence</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {excellence.map((e, i) => (
              <Reveal key={e.label} delay={i * 70}>
                <figure className="group relative h-60 overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
                  <img
                    src={e.img}
                    alt={e.label}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                    style={{ willChange: "transform" }}
                  />
                  <figcaption
                    className="absolute inset-0 flex items-end p-6"
                    style={{ backgroundImage: "var(--gradient-veil)" }}
                  >
                    <h3 className="text-lg font-semibold text-primary-foreground">{e.label}</h3>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="text-center">
          <p className="script-accent">life on campus</p>
          <h2 className="text-section mt-2 font-semibold">Recent Events</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {events.map((ev, i) => (
            <Reveal key={ev.title} delay={i * 90}>
              <article className="flex h-full gap-5 rounded-3xl border border-border bg-card p-6 transition-shadow duration-500 hover:shadow-[var(--shadow-soft)]">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <span className="font-display text-xl leading-none">{ev.day}</span>
                  <span className="text-[0.65rem] uppercase tracking-widest">{ev.month}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{ev.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ev.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-24 md:py-32">
        <img
          src={slider3}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-veil)" }} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="script-accent">come and see</p>
            <h2 className="text-section mt-2 font-semibold text-primary-foreground">
              Visit Don Bosco Skill Mission
            </h2>
            <p className="text-fluid mt-5 text-primary-foreground/85">
              Bengaluru, Karnataka, India · Open Monday to Saturday
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@dbsm.dbtech.in"
                className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                info@dbsm.dbtech.in
              </a>
              <a
                href="#home"
                className="rounded-full border border-primary-foreground/40 px-7 py-3 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary-foreground/10"
              >
                Back to top
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center">
          <span className="font-display text-lg font-semibold">Don Bosco Skill Mission</span>
          <p className="text-xs text-muted-foreground">
            Promoting research, training, innovation and professional development in skilling.
          </p>
        </div>
      </footer>
    </main>
  );
}
