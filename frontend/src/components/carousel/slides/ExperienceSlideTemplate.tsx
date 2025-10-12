import React from "react";
import Image from "next/image";

type ExperienceSlideProps = {
  title: string;
  date: string;
  description: string;
  techStack?: string[];
  image: string;
  imageArgs?: string;
  pageLink?: string;
};

const ExperienceSlideTemplate: React.FC<ExperienceSlideProps> = ({
  title,
  date,
  description,
  techStack = [],
  image,
  imageArgs = "object-cover ",
  pageLink,
}) => {
  return (
    <div className="w-full h-1/2 overflow-hidden py-2">
      <div className="flex flex-row w-full h-full bg-white rounded-4xl shadow-md overflow-hidden">
        {/* Left Side: Content (70%) */}
        <div className="flex-[7] p-6 flex flex-col justify-center">
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
        </div>

        {/* Right Side: Image (30%) */}
        <div className="flex-[3] relative">
          <Image
            src={image}
            alt={title}
            fill
            className={`${imageArgs}`} //w-full h-full
            priority
          />

          <a
            href={pageLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 left-2 text-lg text-red-500 hover:underline"
          >
            Visit Website →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSlideTemplate;
