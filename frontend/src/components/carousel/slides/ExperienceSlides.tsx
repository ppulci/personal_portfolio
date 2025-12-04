import React from "react";
import ExperienceSlide from "./ExperienceSlideTemplate";

const ExperienceSlides = [
  <div key="slide-1" className="flex flex-col h-full">
    <ExperienceSlide
      title="Software Developer Intern @ TENAMINT"
      date="Sep. 2024 — May 2025"
      description="A next-generation fan engagement platform redefining how sports lovers connect with their favorite teams."
      contributions={`
          I was responsible for the end-to-end delivery of key user engagement features for a platform that served over 6,000 sports fans.
          My primary focus was on enhancing the user experience, which included leading a UI overhaul for a popular game mode and ensuring the entire platform was fully responsive across all devices.
          I also implemented new features, such as a Missions and Rewards system, designed to increase user activity, retention and enjoyment on the platform.
          On the technical side, I performed backend maintenance to boost efficiency and stability, optimizing data processing routines to guarantee real-time game status updates.
        `}
      image="/tenamint_logo.jpg"
      imageArgs="object-cover"
      techStack={[
        "React",
        "TypeScript",
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
      contributions={`
          My key responsibility was to accelerate the launch of a core SaaS marketplace.
          This rapid development helped achieved early investor traction and secure initial university partnerships.
          I enhanced researcher access and usability by implementing critical platform updates, leading directly to greater adoption of shared lab resources.
          This work included building a new functional user dashboard and launching the official company identity page, among other updates.
        `}
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
      contributions={`
          I focused on efficiently managing all backroom operations to directly support the sales floor and ensure a fast, accurate customer experience. 
          My primary duties included organizing and maintaining all footwear inventory to guarantee accurate stock levels and quick access to specific sizes and styles for sales associates. 
          I managed incoming shipments and organized long-term storage, which helped improve inventory flow throughout the store and successfully reduced the amount of misplaced items. 
          I provided crucial sales support by delivering requested shoes to the floor within minutes to meet high customer demand.
        `}
      image="/call_it_spring.png"
      imageArgs="object-contain pr-10"
    />
  </div>,
  <div key="slide-4" className="flex flex-col h-full">
    <ExperienceSlide
      title="Sale Associate @ Home Hardware"
      date="Mar. 2019 — May 2021"
      description="My first job. A franchised hardware store."
      contributions={`
          My responsibilities spanned both direct customer service and key store operations, ensuring a high level of customer satisfaction and store efficiency. 
          I assisted customers on the sales floor by providing detailed product recommendations and project guidance, which was crucial for enhancing their purchasing experience. 
          I specialized in the paint department, where I mixed custom colors and advised customers on the most suitable finishes and materials for their specific needs. 
          Operationally, I handled all sales transactions and ensured financial accountability by precisely reconciling cash trays at the end of each shift. 
        `}
      image="/hh_logo.png"
      imageArgs="object-contain p-10"
    />
  </div>,
];

export default ExperienceSlides;
