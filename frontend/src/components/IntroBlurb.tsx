import Image from "next/image";
import Link from "next/link";

export default function IntroBlurb() {
  return (
    <div className="flex flex-col items-center trimmed-container">
      <div className="bg-white border-2 border-gray-200 rounded-md p-8 shadow-md max-w-5xl w-full">
        {/* Two Column Layout */}
        <div className="flex items-start gap-8">
          {/* Left Column: Headers, Text, Signature */}
          <div className="flex-1 flex flex-col">
            {/* Headers */}
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Hey There!{" "}
              <span className="text-yellow-500">I'm Peter Pulcini</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              Full-stack Developer and Mod Enthusiast!
            </h3>

            {/* Text */}
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              I grew up in Toronto, Canada, with a love for games and making
              things — now I bring that energy to code. These days, I work
              heavily with TypeScript, Java, and Python, bringing ideas to life
              through development. If you've got an idea you want help with, or
              just want to talk tech, I'd love to connect!
            </p>

            {/* Signature */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-md p-4 w-64 h-24 flex items-center justify-center">
              <p className="text-sm text-gray-500 italic">
                Signature animation coming soon...
              </p>
              {/* TODO: Add signature animation here */}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex-shrink-0">
            <Image
              src="/temp_image.png"
              alt="Peter Pulcini"
              width={300}
              height={300}
              className="object-cover rounded-md shadow-lg border-2 border-gray-200"
            />
          </div>
        </div>
      </div>

      {/* Project Showcase Buttons */}
      <div className="flex gap-6 mt-8">
        {/* Project 1 Showcase */}
        <Link href="/projects" className="group">
          <div className="bg-white border-2 border-gray-200 rounded-md p-6 shadow-md hover:shadow-lg transition-all duration-200 hover:border-yellow-400 cursor-pointer">
            <div className="flex items-center gap-4">
              {/* Logo Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/temp_image.png"
                  alt="Project 1 Logo"
                  width={100}
                  height={100}
                  className="object-cover rounded-md border border-gray-200"
                />
              </div>
              {/* Title */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
                  Project Name 1
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Brief description here
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Project 2 Showcase */}
        <Link href="/projects" className="group">
          <div className="bg-white border-2 border-gray-200 rounded-md p-6 shadow-md hover:shadow-lg transition-all duration-200 hover:border-yellow-400 cursor-pointer">
            <div className="flex items-center gap-4">
              {/* Logo Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/temp_image.png"
                  alt="Project 2 Logo"
                  width={100}
                  height={100}
                  className="object-cover rounded-md border border-gray-200"
                />
              </div>
              {/* Title */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
                  Project Name 2
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Brief description here
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
// Hey There!
// I'm Peter Pulcini,
// Full-stack Developer and Mod Enthusiast!
// Full-stack dev, modding fan, and builder at heart.
// Born and raised in Toronto, Canada, I grew up with a passion for building and gaming. (making vs building?) (sounds a bit off)
// I grew up in Toronto, Canada, with a love for games and making things — now I bring that energy to code.
// I grew up in Toronto, Canada, with a love for games and making things — check out my projects below!
// CHECK OUT PROJECTS BELOW!

// If you need help with an idea or just want to chat about tech, feel free to reach out!
// If you’ve got a cool idea or just want to nerd out over tech, hit me up!
// If you’ve got an idea you want help with, or just want to talk tech, I’d love to connect!
