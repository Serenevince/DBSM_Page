import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import auditorium from "@/assets/tour-auditorium.mp4.asset.json";
import conference from "@/assets/tour-conference-hall.mp4.asset.json";
import training from "@/assets/tour-training-hall.mp4.asset.json";
import classroom from "@/assets/tour-classroom.mp4.asset.json";
import office from "@/assets/tour-office-area.mp4.asset.json";
import cafeteria from "@/assets/tour-cafeteria.mp4.asset.json";

const tabs = [
  { id: "auditorium", label: "Auditorium", src: auditorium.url, text: "A 500-seat hall for conferences, award functions and celebrations." },
  { id: "conference", label: "Conference Hall", src: conference.url, text: "Quiet, well-appointed rooms for meetings and consultations." },
  { id: "training", label: "Training Halls", src: training.url, text: "Spacious halls equipped for hands-on skill training." },
  { id: "classroom", label: "Class Rooms", src: classroom.url, text: "Bright classrooms built for focused learning." },
  { id: "office", label: "Office Space", src: office.url, text: "Calm working areas for staff and visiting partners." },
  { id: "cafeteria", label: "Cafeteria", src: cafeteria.url, text: "A warm place to pause, eat and talk." },
];

export function CampusTour() {
  const [active, setActive] = useState(0);
  const current = tabs[active] ?? tabs[0]!;

  return (
    <section id="campus" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className="text-center">
        <p className="script-accent">walk with us</p>
        <h2 className="text-section mt-2 font-semibold">Campus Tour</h2>
        <p className="text-fluid mx-auto mt-4 max-w-2xl text-muted-foreground">
          Real footage from the DBSM campus — halls, classrooms, offices and quiet corners.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-sm transition-all duration-400 ${
                i === active
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-10 overflow-hidden rounded-3xl shadow-[var(--shadow-float)]">
          <video
            key={current.id}
            className="aspect-video w-full bg-muted object-cover"
            src={current.src}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
          />
        </div>
        <p className="mt-5 text-center text-fluid text-muted-foreground">{current.text}</p>
      </Reveal>
    </section>
  );
}
