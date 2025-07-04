import Image from "next/image";

export default function IntroBlurb() {
  return (
    // MAKE THIS PAGE RESPONSIVE, MAKE THE TExT LARGER FOR BIGGER SCREENS
    <div className="flex w-full h-full items-center justify-between gap-x-12 trimmed-container">
      {/* Left: Text */}
      <div className="flex flex-col flex-1 space-y-10">
        <h1 className="flex flex-col font-bold space-y-6">
          <span className="block text-4xl text-pp-yellow">Hey there 👋</span>
          <span className="block text-5xl">I&apos;m Peter Pulcini,</span>
          <span className="block text-3xl">
            Full-stack developer and modding enthusiast!
          </span>
        </h1>
        <p className="flex flex-col text-md space-y-4">
          <span>
            Born and raised in Toronto, Canada, I grew up with a passion for
            building and gaming.
          </span>
          <span>
            These days, I work heavily with TypeScript, Java, and Python.
          </span>
          <span>
            If you need help with an idea or just want to chat tech,{" "}
            <a href="#contact" className="font-bold text-pp-yellow underline">
              feel free to reach out!
            </a>
          </span>
        </p>
      </div>

      {/* Right: Image */}
      <div className="flex flex-1 justify-center items-center">
        <Image
          src="/temp_image.png"
          alt="Peter Pulcini"
          width={500}
          height={500}
          className="object-cover"
        />
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
