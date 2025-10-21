import React from "react";
import ExperienceSlide from "./ExperienceSlideTemplate";

const ExperienceSlides = [
  <div key="slide-1" className="flex flex-col h-full">
    <ExperienceSlide
      title="Software Developer Intern @ TENAMINT"
      date="Sep. 2024 — May 2025"
      description="A next-generation fan engagement platform redefining how sports lovers connect with their favorite teams."
      contributions={[
        "Designed and developed core platform features based on community feedback and engagement metrics, driving measurable growth in fan interaction and retention.",
        "Ensured platform stability by validating backend endpoints and resolving bugs or data inconsistencies to maintain reliable user experiences during high-traffic events.",
      ]}
      image="/tenamint_logo.jpg"
      imageArgs="object-cover"
      techStack={[
        "React",
        "TypeScript",
        "GSAP",
        "Node.js",
        "Express.js",
        "Firebase",
        "Google Cloud",
      ]}
      pageLink="https://tenamint.com/"
    />
  </div>,
  <div key="slide-2" className="flex flex-col h-full">
    <ExperienceSlide
      title="Software Developer Intern @ Lab2Client"
      date="Sep. 2023 — Dec. 2023"
      description="A cutting-edge SaaS platform that connects researchers with the lab equipment and tools they need to innovate."
      contributions={[
        "Delivered platform updates that improved researcher access and usability, contributing to greater adoption of shared lab resources.",
        "Collaborated within Agile sprints to refine requirements, align deliverables with stakeholder goals, and maintain consistent development velocity",
      ]}
      image="/lab2client_logo.png"
      imageArgs="object-contain"
      techStack={[
        "React",
        "JavaScript",
        "Next.js",
        "NoSQL",
        "Firebase",
        "Google Cloud",
        "Github",
      ]}
      pageLink="https://www.lab2client.com/"
    />
  </div>,
  <div key="slide-3" className="flex flex-col h-full">
    <ExperienceSlide
      title="Stock Associate @ Call It Spring"
      date="May 2023 — Jan. 2024"
      description="A global footwear and accessories retailer known for affordable, eco-conscious, fashion-forward styles."
      contributions={[
        "Organized and maintained backroom inventory to ensure quick access and accurate stock levels.",
        "Managed incoming shipments and long-term storage, improving inventory flow and reducing misplaced items.",
        "Supported sales operations by delivering requested merchandise to associates within minutes to meet customer demand.",
        "Processed and packed online orders with accuracy and efficiency for timely customer fulfillment.",
      ]}
      image="/call_it_spring.png"
      imageArgs="object-contain pr-10"
    />
  </div>,
  <div key="slide-4" className="flex flex-col h-full">
    <ExperienceSlide
      title="Sale Associate @ Home Hardware"
      date="Mar. 2019 — May 2021"
      description="My first job. A franchised hardware store."
      contributions={[
        "Assisted customers on the sales floor with product recommendations and project guidance to enhance satisfaction.",
        "Mixed custom paint colors and advised on suitable finishes and materials for specific needs.",
        "Handled transactions and reconciled cash trays at shift end with precision and accountability.",
        "Received shipments and organized inventory to keep stock accurate and accessible for staff and customers.",
      ]}
      image="/hh_logo.png"
      imageArgs="object-contain p-10"
    />
  </div>,
];

export default ExperienceSlides;
