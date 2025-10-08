import Image from "next/image";

export const EXPERIENCE_SLIDES = [
  /* Panel 1: Software Experience (two separated sub-slides) */
  <article
    key="panel-software"
    className="rounded-xl h-full w-full flex flex-col gap-8 overflow-hidden"
  >
    {/* #############################################################
    ################################################################# */}
    <div className="flex bg-white rounded-xl shadow-lg overflow-hidden h-[500px] w-full">
      {/* Left Section (70%) */}
      <div className="flex flex-col justify-center gap-3 basis-[70%] px-10 py-8">
        <h3 className="text-xl font-semibold text-slate-900">
          Senior Software Engineer
        </h3>
        <div className="text-slate-600 text-sm">Acme Tech • Remote</div>
        <div className="text-slate-500 text-xs">Jan 2022 — Present</div>

        {/* Job description paragraph */}
        <p className="mt-3 text-slate-700 text-sm leading-relaxed">
          Architected and maintained a realtime analytics dashboard using React
          and TypeScript, implementing scalable CI/CD pipelines and improving
          release efficiency by 40%. Mentored junior engineers and led front-end
          refactors to enhance maintainability and accessibility.
        </p>

        {/* Technologies used */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["React", "TypeScript", "Node.js", "CI/CD", "AWS"].map((tech) => (
            <span
              key={tech}
              className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Right Section (30%) */}
      <div className="relative basis-[30%]">
        {/* Full-section image */}
        <Image
          src="/temp_image.png"
          alt="Acme Tech logo"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay link */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-center py-3">
          <a
            href="https://www.acmetech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-medium hover:underline"
          >
            Visit Website →
          </a>
        </div>
      </div>
    </div>
    {/* #############################################################
    ################################################################# */}

    <div className="flex bg-white rounded-xl shadow-lg overflow-hidden h-[500px] w-full">
      {/* Left Section (70%) */}
      <div className="flex flex-col justify-center gap-3 basis-[70%] px-10 py-8">
        <h3 className="text-xl font-semibold text-slate-900">
          Senior Software Engineer
        </h3>
        <div className="text-slate-600 text-sm">Acme Tech • Remote</div>
        <div className="text-slate-500 text-xs">Jan 2022 — Present</div>

        {/* Job description paragraph */}
        <p className="mt-3 text-slate-700 text-sm leading-relaxed">
          Architected and maintained a realtime analytics dashboard using React
          and TypeScript, implementing scalable CI/CD pipelines and improving
          release efficiency by 40%. Mentored junior engineers and led front-end
          refactors to enhance maintainability and accessibility.
        </p>

        {/* Technologies used */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["React", "TypeScript", "Node.js", "CI/CD", "AWS"].map((tech) => (
            <span
              key={tech}
              className="bg-slate-100 text-slate-800 text-xs font-medium px-3 py-1 rounded-full border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Right Section (30%) */}
      <div className="relative basis-[30%]">
        {/* Full-section image */}
        <Image
          src="/temp_image.png"
          alt="Acme Tech logo"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay link */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-center py-3">
          <a
            href="https://www.acmetech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-medium hover:underline"
          >
            Visit Website →
          </a>
        </div>
      </div>
    </div>
    {/* #############################################################
    ################################################################# */}
  </article>,
];

/* 
#
#
#
#
#
#
#
#
#
#
#
*/

export const PROJECT_SLIDES = [
  <article
    key="proj-1"
    className="flex flex-col bg-white rounded-xl shadow-lg w-full h-full overflow-hidden px-12 py-10"
  >
    {/* Title */}
    <h2 className="text-5xl font-bold text-center">Portfolio Website</h2>

    <div className="flex h-full gap-10">
      <div className="flex flex-col justify-center basis-[60%]">
        {/* Date */}
        <div className="text-sm text-slate-500 mb-2">
          Created September 2025
        </div>

        {/* Description */}
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          A personal portfolio website that I built myself (psst... it&apos;s
          the one you&apos;re on right now). It showcases my professional
          experience, projects, and technical skills. The frontend is built with
          React, TailwindCSS, Next.js, and Framer Motion for animations, while
          the backend runs on a Gin server written in Go. The site includes
          subtle animations and is fully responsive across all devices.
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-4 mb-8">
          {[
            "React",
            "Next.js",
            "TailwindCSS",
            "Framer Motion",
            "TypeScript",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-slate-100 text-slate-800 text-sm font-medium px-4 py-2 rounded-full border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href="https://github.com/ppulci/Personal-Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 text-lg font-medium hover:underline"
        >
          View on Github →
        </a>
      </div>

      {/* Project Image */}
      <div className="relative basis-[40%] flex items-center justify-center">
        <Image
          src="/website_portfolio_code.png"
          alt="Project preview"
          width={400}
          height={400}
          className="object-contain rounded-2xl border border-slate-200 shadow-sm"
          priority
        />
      </div>
    </div>
  </article>,
  <article
    key="proj-2"
    className="flex flex-col bg-white rounded-xl shadow-lg w-full h-full overflow-hidden px-12 py-10"
  >
    {/* Title */}
    <h2 className="text-5xl font-bold text-center">The Grate Escape!</h2>

    <div className="flex h-full gap-10">
      <div className="flex flex-col justify-center basis-[60%]">
        {/* Date */}
        <div className="text-sm text-slate-500 mb-2">Created August 2021</div>

        {/* Description */}
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          The Grate Escape is a vertical arcade platformer where you play as a
          piece of cheese climbing through the depths of a grater. Built using
          Unity with C# and featuring original artwork and a custom soundtrack.
          Be sure to check out the adorable little cheeses and take part in the
          climb to see yourself out of the grate -- and onto the leaderboards!
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-4 mb-8">
          {["C#", "Unity", "Google Game Services", "Photoshop", "Audacity"].map(
            (tech) => (
              <span
                key={tech}
                className="bg-slate-100 text-slate-800 text-sm font-medium px-4 py-2 rounded-full border border-slate-200"
              >
                {tech}
              </span>
            )
          )}
        </div>

        {/* Link */}
        <a
          href="https://github.com/ppulci/TheGrateEscape"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 text-lg font-medium hover:underline"
        >
          View on Github →
        </a>
      </div>

      {/* Project Image */}
      <div className="relative basis-[40%] flex items-center justify-center h-full">
        <Image
          src="/TGE_main_menu.png"
          alt="Project preview"
          width={250}
          height={250}
          className="object-contain rounded-2xl border border-slate-200 shadow-sm"
          priority
        />
      </div>
    </div>
  </article>,
    <article
    key="proj-3"
    className="flex flex-col bg-white rounded-xl shadow-lg w-full h-full overflow-hidden px-12 py-10"
  >
    {/* Title */}
    <h2 className="text-5xl font-bold text-center">Deepslate Tweaks</h2>

    <div className="flex h-full gap-10">
      <div className="flex flex-col justify-center basis-[60%]">
        {/* Date */}
        <div className="text-sm text-slate-500 mb-2">Created June 2022</div>

        {/* Description */}
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          The Grate Escape is a vertical arcade platformer where you play as a
          piece of cheese climbing through the depths of a grater. Built using
          Unity with C# and featuring original artwork and a custom soundtrack.
          Be sure to check out the adorable little cheeses and take part in the
          climb to see yourself out of the grate -- and onto the leaderboards!
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-4 mb-8">
          {["C#", "Unity", "Google Game Services", "Photoshop", "Audacity"].map(
            (tech) => (
              <span
                key={tech}
                className="bg-slate-100 text-slate-800 text-sm font-medium px-4 py-2 rounded-full border border-slate-200"
              >
                {tech}
              </span>
            )
          )}
        </div>

        {/* Link */}
        <a
          href="https://github.com/ppulci/TheGrateEscape"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 text-lg font-medium hover:underline"
        >
          View on Github →
        </a>
      </div>

      {/* Project Image */}
      <div className="relative basis-[40%] flex items-center justify-center h-full">
        <Image
          src="/TGE_main_menu.png"
          alt="Project preview"
          width={250}
          height={250}
          className="object-contain rounded-2xl border border-slate-200 shadow-sm"
          priority
        />
      </div>
    </div>
  </article>,
];
