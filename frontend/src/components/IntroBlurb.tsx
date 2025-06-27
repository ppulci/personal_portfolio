import Image from "next/image";

export default function IntroBlurb() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-2">
          <span className="block">Hey there</span>{" "}
          {/* TODO: add waving hand emoji here */}
          <span className="block">I&apos;m Peter Pulcini,</span>
          <span className="block">
            full-stack developer and modding enthusiast!
          </span>
        </h1>
        <p className="text-md">
          <span className="block">
            Born and raised in Toronto, Canada, I grew up with a passion for
            building and gaming.
          </span>
          <span className="block">
            These days, I work heavily with TypeScript, Java, and Python.
          </span>
          <span className="block">
            If you need help with an idea or just want to chat tech, feel free
            to reach out!
          </span>
          {/* TODO: bold "reach out" and link it to the contact page */}
        </p>
      </div>
      <Image src="/temp_image.png" alt="temp image" width={150} height={150} />
    </>
  );
}

// Hey There!
// I'm Peter Pulcini,

// Full-stack Developer and Mod Enthusiast!
// Full-stack dev, modding fan, and builder at heart.

// Born and raised in Toronto, Canada, I grew up with a passion for building and gaming. (making vs building?) (sounds a bit off)
// I grew up in Toronto, Canada, with a love for games and making things — now I bring that energy to code.

// If you need help with an idea or just want to chat about tech, feel free to reach out!
// If you’ve got a cool idea or just want to nerd out over tech, hit me up!
// If you’ve got an idea you want help with, or just want to talk tech, I’d love to connect!
