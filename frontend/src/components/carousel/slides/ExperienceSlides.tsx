import React from "react";
import ExperienceSlide from "./ExperienceSlideTemplate";

const ExperienceSlides = [
  <div key="slide-1" className="flex flex-col h-full">
    <ExperienceSlide
      title="Software Developer Intern @ TENAMINT"
      date="Sep. 2024 — May 2025"
      description="Description."
      image="/tenamint_logo.jpg"
      techStack={["React", ""]}
    />
    <ExperienceSlide
      title="Software Developer Intern @ Lab2Client"
      date="Sep. 2023 — Dec. 2023"
      description="Description."
      image="/lab2client_logo.png"
      imageArgs="object-contain"
      techStack={[""]}
    />
  </div>,
];

export default ExperienceSlides;
