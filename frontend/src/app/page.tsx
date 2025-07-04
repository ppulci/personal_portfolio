import Navbar from "@/components/Navbar";
import IntroBlurb from "@/components/IntroBlurb";
import Timeline from "@/components/Timeline";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <>
      {/* Header w/ Navbar Only */}
      <header className="pt-6 bg-pp-blue">
        <Navbar />
      </header>

      {/* Introduction Blurb and Bio */}
      {/* Gradient to Black or PP-Black??? */}
      <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-gradient-to-b from-pp-blue to-pp-black"> 
        {/* */}
        <IntroBlurb />
      </section>

      {/* Projects/Work Timeline */}
      {/* Gradient FROM previous ending color to chosen timeline color */}      
      <Timeline />

      {/* Contact Information Fill */}
      <section id="contact" className="py-12 bg-pp-black">
        <ContactMe />
        {/* TODO: potentially add social icons with links to pages like the navbar */}
        {/* TODO: it could say "Alternatively," then the icons below them */}
      </section>

      {/* Footer w/ Copyright and Year Only */}
      <footer className="text-left text-gray-400 py-8 bg-pp-black">
        <div className="trimmed-container">
          &copy; {new Date().getFullYear()} Peter Pulcini
        </div>
      </footer>
    </>
  );
}
