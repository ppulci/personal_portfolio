import Image from "next/image";
import Timeline from "@/components/Timeline";
import Navbar from "@/components/Navbar";
import ContactMe from "@/components/ContactMe"; 

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header w/ Navbar Only */}
      <header className="py-4 border-b">
        <Navbar />
      </header>

      <main className="max-w-3xl mx-auto py-12 px-4">
        {/* Introduction Blurb and Bio */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Hey there! {/* TODO: add waving hand emoji here */}
              I&apos;m Peter Pulcini — full-stack developer and modding
              enthusiast! Born and raised in Toronto, Canada, I grew up with a
              passion for building and gaming. These days, I work heavily with
              TypeScript, Java, and Python. If you need help with an idea or
              just want to chat tech, feel free to reach out!
              {/* TODO: bold "reach out" and link it to the contact page */}
            </h1>
            <p className="text-lg">
              I am a full-stack developer passionate about building web
              applications. Welcome to my portfolio!
            </p>
          </div>
          <Image
            src="/temp_image.png"
            alt="temp image"
            width={150}
            height={150}
          />
        </section>

        {/* Projects/Work Timeline */}
        <section>
          <Timeline />
        </section>

        {/* Contact Information Fill */}
        <section id="contact">
          <ContactMe />
          {/* TODO: potentially add social icons with links to pages like the navbar */}
          {/* TODO: it could say "Alternatively," then the icons below them */}
        </section>
      </main>

      {/* Footer w/ Copyright and Year Only */}
      <footer className="py-4 text-left text-gray-400">
        &copy; {new Date().getFullYear()} Peter Pulcini
      </footer>
    </div>
  );
}

// Hey There!
// I'm Peter Pulcini,
// Full-stack Developer and Mod Enthusiast!
// Born and raised in Toronto, Canada, I grew up with a passion for building and gaming. (making vs building?) (sounds a bit off)
// I work heavily with TypeScript, Java and Python.
// If you need help with an idea or just want to chat about tech, feel free to reach out!

// Hey there!
// I'm Peter Pulcini — full-stack dev, modding fan, and builder at heart.
// I grew up in Toronto, Canada, with a love for games and making things — now I bring that energy to code.
// I mostly work with TypeScript, Java, and Python.
// If you’ve got a cool idea or just want to nerd out over tech, hit me up!

// If you’ve got an idea you want help with, or just want to talk tech, I’d love to connect!