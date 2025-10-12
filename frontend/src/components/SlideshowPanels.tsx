import Image from "next/image";

export const EXPERIENCE_SLIDES = [
  /* Panel 1: Software Experience (two separated sub-slides) */
  <article
    key="panel-software"
    className="flex flex-col rounded-xl h-full w-full overflow-hidden gap-8"
  >
    <div className="flex bg-white rounded-xl shadow-lg overflow-hidden h-full">
      {/* Left Section (70%) */}
      <div className="flex flex-col justify-center gap-3 basis-[70%] px-10 py-8">
        <h3 className="text-xl font-semibold text-slate-900">
          Software Developer Intern
        </h3>

        <div className="text-slate-600 text-sm">
          TENAMINT
          <span className="pl-6">Sept. 2024 — May 2025</span>
        </div>

        {/* Job description paragraph */}
        <p className="mt-3 text-slate-700 text-sm leading-relaxed">
          Description.
        </p>

        {/* Technologies used */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["React"].map((tech) => (
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
          src="/tenamint_logo.jpg"
          alt="Company Logo"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay link */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-center py-3">
          <div
            className="absolute top-0 left-0 z-10 ml-2 mt-2 font-bold text-2xl text-white hover:animate-pulse"
            title="Logos and trademarks are property of their respective owners and are used for identification purposes only!"
          >
            &#9432;
          </div>
          <a
            href="https://tenamint.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-medium hover:underline"
          >
            Visit Website →
          </a>
        </div>
      </div>
    </div>
    <div className="flex bg-white rounded-xl shadow-lg overflow-hidden h-full">
      {/* Left Section (70%) */}
      <div className="flex flex-col justify-center gap-3 basis-[70%] px-10 py-8">
        <h3 className="text-xl font-semibold text-slate-900">
          Software Developer Intern
        </h3>

        <div className="text-slate-600 text-sm">
          Lab2Client
          <span className="pl-6">Sept. 2023 — Dec. 2023</span>
        </div>

        {/* Job description paragraph */}
        <p className="mt-3 text-slate-700 text-sm leading-relaxed">
          Description.
        </p>

        {/* Technologies used */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["React"].map((tech) => (
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
          src="/lab2client_logo.png"
          alt="Company Logo"
          width={400}
          height={400}
          className="object-contain mt-20"
          priority
        />

        {/* Overlay link */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-center py-3">
          <div
            className="absolute top-0 left-0 z-10 ml-2 mt-2 font-bold text-2xl text-white hover:animate-pulse"
            title="Logos and trademarks are property of their respective owners and are used for identification purposes only!"
          >
            &#9432;
          </div>
          <a
            href="https://www.lab2client.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-medium hover:underline"
          >
            Visit Website →
          </a>
        </div>
      </div>
    </div>
  </article>,
  <article
    key="panel-retail"
    className="flex flex-col rounded-xl h-full w-full overflow-hidden gap-8 "
  >
    <div className="flex bg-white rounded-xl shadow-lg overflow-hidden h-full">
      {/* Left Section (70%) */}
      <div className="flex flex-col justify-center gap-3 basis-[70%] px-10 py-8">
        <h3 className="text-xl font-semibold text-slate-900">
          Software Developer Intern
        </h3>

        <div className="text-slate-600 text-sm">
          TENAMINT
          <span className="pl-6">Sept. 2024 — May 2025</span>
        </div>

        {/* Job description paragraph */}
        <p className="mt-3 text-slate-700 text-sm leading-relaxed">
          Description.
        </p>

        {/* Technologies used */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["React"].map((tech) => (
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
          src="/tenamint_logo.jpg"
          alt="Company Logo"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay link */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-center py-3">
          <div
            className="absolute top-0 left-0 z-10 ml-2 mt-2 font-bold text-2xl text-white hover:animate-pulse"
            title="Logos and trademarks are property of their respective owners and are used for identification purposes only!"
          >
            &#9432;
          </div>
          <a
            href="https://tenamint.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-medium hover:underline"
          >
            Visit Website →
          </a>
        </div>
      </div>
    </div>

    <div className="flex bg-white rounded-xl shadow-lg overflow-hidden h-full">
      {/* Left Section (70%) */}
      <div className="flex flex-col justify-center gap-3 basis-[70%] px-10 py-8">
        <h3 className="text-xl font-semibold text-slate-900">
          Software Developer Intern
        </h3>

        <div className="text-slate-600 text-sm">
          Lab2Client
          <span className="pl-6">Sept. 2023 — Dec. 2023</span>
        </div>

        {/* Job description paragraph */}
        <p className="mt-3 text-slate-700 text-sm leading-relaxed">
          Description.
        </p>

        {/* Technologies used */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["React"].map((tech) => (
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
          alt="Company Logo"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay link */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-center py-3">
          <div
            className="absolute top-0 left-0 z-10 ml-2 mt-2 font-bold text-2xl text-white hover:animate-pulse"
            title="Logos and trademarks are property of their respective owners and are used for identification purposes only!"
          >
            &#9432;
          </div>
          <a
            href="https://www.lab2client.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-medium hover:underline"
          >
            Visit Website →
          </a>
        </div>
      </div>
    </div>
  </article>,
];





export const PROJECT_SLIDES = [
  <article
    key="proj-1"
    className="flex flex-col rounded-xl h-full overflow-hidden bg-white p-10"
  >
    {/* Title */}
    <h2 className="text-5xl font-bold text-center">Deepslate Tweaks</h2>

    <div className="flex h-full gap-10">
      <div className="flex flex-col justify-center basis-[60%]">
        {/* Date */}
        <div className="text-sm text-slate-500 mb-2">Created June 2022</div>

        {/* Description */}
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          Deepslate Tweaks is a Minecraft mod made with Java, using popular open
          source modding API's. It adds a quality-of-life improvements to the
          game, centered around the exploration players do while digging in the
          depths of their worlds. Gone are the days of spending precious time
          mining boring blocks of deepslate. With Deepslate Tweaks, you can
          avoid a tedious time sink that gets in the way of your fun. Available
          for download on both CurseForge and Modrinth!
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-4 mb-8">
          {["Java", "Gradle", "Forge API", "Fabric API", "IntelliJ IDEA"].map(
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

        {/* Link */}
        <a
          href="https://github.com/ppulci/deepslatetweaks_forge"
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
          src="/deepslate_tweaks_logo.png"
          alt="Project preview"
          width={1000}
          height={1000}
          className="object-contain rounded-2xl border border-slate-200 shadow-sm"
          priority
        />
      </div>
    </div>
  </article>,
  <article
    key="proj-2"
    className="flex flex-col rounded-xl h-full overflow-hidden bg-white p-10"
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
    className="flex flex-col rounded-xl h-full overflow-hidden bg-white p-10"
  >
    {/* Title */}
    <h2 className="text-5xl font-bold text-center">
      Chrollo, Playable Character
    </h2>

    <div className="flex h-full gap-10">
      <div className="flex flex-col justify-center basis-[60%]">
        {/* Date */}
        <div className="text-sm text-slate-500 mb-2">Created April 2025</div>

        {/* Description */}
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          A custom character mod for the game Don&apos;t Starve Together,
          inspired by Chrollo Lucilfer from the anime Hunter x Hunter. This mod
          adds a new playable character with unique abilities and stats,
          enhancing the gameplay experience for players. The character features
          custom sprites, animations, and sound effects, all designed to fit
          seamlessly into the game&apos;s art style. Dive into the world of
          Don&apos;t Starve Together with Chrollo and explore new strategies and
          playstyles!
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-4 mb-8">
          {[
            "Lua Programming Language",
            "Don't Starve Mod Tools",
            "Steam",
            "Photoshop",
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
          href="https://github.com/ppulci/DST_Custom_Character_Chrollo"
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
          src="/chrollo_dst_portrait.png"
          alt="Project preview"
          width={370}
          height={370}
          className="object-contain"
          priority
        />
      </div>
    </div>
  </article>,
  <article
    key="proj-4"
    className="flex flex-col rounded-xl h-full overflow-hidden bg-white p-10"
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
];
