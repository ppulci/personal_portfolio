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
  imageArgs = "object-cover ",
  picWidth = 200,
  picHeight = 200,
  pageLink,
}) => {
  return (
    <div className="w-full h-full overflow-hidden py-2">
      <div className="flex flex-row w-full h-full bg-white rounded-4xl shadow-md overflow-hidden">
        {/* Left Side: Content (60%) */}
        <div className="flex-[6] p-6 flex flex-col justify-center">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className="text-xs text-slate-500 font-normal">{date}</span>
          </div>

          <p className="text-sm wrap-normal mt-4">{description}</p>

          {/* Tech stack Bubbles */}
          {techStack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
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

          {/* Downloads Badges (FIX ME) */}
          {badges && (
            <div className="flex flex-row mb-6">
              <img
                src="https://cf.way2muchnoise.eu/full_632466_downloads.svg?badge_style=for_the_badge"
                alt="CurseForge Downloads"
                className="mr-6"
              />
              <img
                src="https://img.shields.io/modrinth/dt/Jc0FvX5i?logo=modrinth&style=for-the-badge&logoColor=4c1&labelColor=2D2D2D"
                alt="Modrinth Downloads"
              />
            </div>
          )}

          <a
            href={pageLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-500 hover:underline"
          >
            Visit Github →
          </a>
        </div>

        {/* Right Side: Image (40%) */}
        <div className="flex-[4] relative">
          <Image
            src={image}
            alt={title}
            width={picWidth}
            height={picHeight}
            className={`${imageArgs}`}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
