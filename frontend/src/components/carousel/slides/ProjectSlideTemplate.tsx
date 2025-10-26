import React from "react";
import Image from "next/image";

type ProjectSlideProps = {
  title: string;
  date: string;
  description: string;
  techStack?: string[];
  badges?: boolean;
  image: string;
  imageArgs?: string;
  picWidth?: number;
  picHeight?: number;
  pageLink?: string;
};

const ProjectSlide: React.FC<ProjectSlideProps> = ({
  title,
  date,
  description,
  techStack = [],
  badges = false,
  image,
  imageArgs = "object-cover",
  picWidth = 500,
  picHeight = 500,
  pageLink,
}) => {
  return (
    <div className="w-full h-full overflow-hidden py-2">
      <div className="flex flex-col lg:flex-row w-full h-full bg-white rounded-4xl shadow-md overflow-hidden">
        {/* Left Side: Content (60%) */}
        <div className="flex-[6] mx-6 flex flex-col justify-center">
          <div>
            <h3 className="text-2xl font-semibold mt-4">{title}</h3>
            <span className="text-xs text-slate-500 font-normal">{date}</span>
          </div>

          <p className="text-sm wrap-normal mt-2">{description}</p>

          {/* Tech stack Bubbles */}
          {techStack.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Downloads Badges */}
          {badges && (
            <div className="flex flex-col sm:flex-row mt-6 gap-4">
              <img
                src="https://cf.way2muchnoise.eu/full_632466_downloads.svg?badge_style=for_the_badge"
                alt="CurseForge Downloads"
                className="w-48 h-6 sm:h-8"
              />
              <img
                src="https://img.shields.io/modrinth/dt/Jc0FvX5i?logo=modrinth&style=for-the-badge&logoColor=4c1&labelColor=2D2D2D"
                alt="Modrinth Downloads"
                className="w-48 h-6 sm:h-8"
              />
            </div>
          )}

          <a
            href={pageLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-500 hover:underline mt-6"
          >
            Visit Github →
          </a>
        </div>

        {/* Right Side: Image (40%) */}
        <div className="flex-[4] hidden relative lg:flex items-center justify-center p-2">
          <Image
            src={image}
            alt={title}
            width={picWidth}
            height={picHeight}
            className={`${imageArgs} rounded-xl`}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
