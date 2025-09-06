"use client";
import { useState } from "react";

// Projects and their creation years
const timeline = [
  { year: 2021, projects: ["The Grate Escape!"], gradient: "bg-gradient-to-b from-pp-black to-orange-300" },
  { year: 2022, projects: ["Deepslate Tweaks"], gradient: "bg-gradient-to-b from-pp-black to-slate-200" },
  { year: 2023, projects: ["R3 Plastic"], gradient: "bg-gradient-to-b from-pp-black to-green-700" },
  { year: 2023, projects: ["Lab2Client"], gradient: "bg-gradient-to-b from-pp-black to-blue-300" },
  { year: 2024, projects: ["TENAMINT"], gradient: "bg-gradient-to-b from-pp-black to-indigo-500" },
  { year: 2025, projects: ["Chrollo, Playable Character"], gradient: "bg-gradient-to-b from-pp-black to-orange-400" },
  { year: 2025, projects: ["Personal Portfolio"], gradient: "bg-gradient-to-b from-pp-black to-pp-blue" },
];

export default function Timeline() {
  const [current, setCurrent] = useState(0);

  // timeline bar that associates years with projects
  return (
    <>
      <section className="bg-pp-black">
        <div className="flex items-center justify-center gap-4 py-10">
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="p-2 rounded-full border disabled:opacity-50"
            aria-label="Previous year"
          >
            &#8592;
          </button>
          <div className="flex items-end gap-8">
            {timeline.map((item, idx) => (
              <div
                key={`${item.year}-${item.projects[0]}-${idx}`}
                className="flex flex-col items-center"
              >
                <span
                  className={`mb-2 text-sm ${idx === current ? "font-bold" : ""}`}
                >
                  {item.year}
                </span>
                <div
                  className={`w-4 h-4 rounded-full ${
                    idx === current ? "bg-red-400" : "bg-gray-300"
                  }`}
                />
              </div>
            ))}
          </div>
          <button
            onClick={() =>
              setCurrent((c) => Math.min(timeline.length - 1, c + 1))
            }
            disabled={current === timeline.length - 1}
            className="p-2 rounded-full border disabled:opacity-50"
            aria-label="Next year"
          >
            &#8594;
          </button>
        </div>
      </section>

      {/* Project Info and Gradient */}
      <section className={`min-h-screen flex items-center justify-center py-0 ${timeline[current].gradient}`}>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">
            Projects in {timeline[current].year}
          </h2>
          <ul className="space-y-2">
            {timeline[current].projects.map((project) => (
              <li key={project} className="bg-pp-black rounded p-2">
                {project}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
