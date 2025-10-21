import React from "react";
import Image from "next/image";

type ExperienceSlideProps = {
  title: string;
  date: string;
  description: string;
  contributions?: string[];
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
  imageArgs = "",
  pageLink,
  contributions = [],
}) => {
  return (
    <div className="w-full h-full overflow-hidden py-2">
      <div className="flex flex-row w-full h-full bg-white rounded-4xl shadow-md overflow-hidden">
        
        {/* Left Side: Content (70%) */}
        <div className="flex-[7] p-6 flex flex-col justify-center">
          <div className="leading-none">
            <h3 className="text-lg font-semibold relative">
              {title}
              <span className="block mt-1 text-sm lg:mt-0 lg:inline lg:absolute lg:right-0 lg:top-0">
                {date}
              </span>
            </h3>
            <p className="text-sm italic wrap-normal mt-1">{description}</p>
          </div>


          {contributions.length > 0 && (
            <ul className="text-sm wrap-normal mt-4 list-disc list-inside">
              <span className="font-semibold">Key Contributions:</span>
              {contributions.map((item) => (
                <li key={item} className="pl-2">
                  {item}
                </li>
              ))}
            </ul>
          )}

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

          {pageLink && (
            <a
              href={pageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bottom-0 left-2 text-base text-blue-500 hover:underline mt-4"
            >
              Visit Website →
            </a>
          )}
        </div>

        {/* Right Side: Image (30%) */}
        <div className="flex-[3] relative hidden lg:flex">
          <Image
            src={image}
            alt={title}
            fill
            className={`${imageArgs}`}
            priority
            title="Logos and trademarks are property of their respective owners and are used for identification purposes only."
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSlideTemplate;
