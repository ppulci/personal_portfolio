import Navbar from "@/components/Navbar";
import IntroBlurb from "@/components/IntroBlurb";
import Timeline from "@/components/Timeline";
import ContactMe from "@/components/ContactMe"; 

export default function Home() {
  return (
    <div className="min-h-screen mx-auto trimmed-container">
      {/* Header w/ Navbar Only */}
      <header className="mt-6">
        <Navbar />
      </header>

      <main>
        {/* Introduction Blurb and Bio */}
        <section className="w-full min-h-screen flex items-center justify-center bg-red-50">         {/* [calc(100vh-6rem)] */}

          <IntroBlurb />
        </section>

        {/* Projects/Work Timeline */}
        <section className="w-full min-h-screen flex items-center justify-center py-0 bg-amber-50">
          <Timeline />
        </section>

        {/* Contact Information Fill */}
        <section id="contact" className="py-12 bg-blue-50" >
          <ContactMe />
          {/* TODO: potentially add social icons with links to pages like the navbar */}
          {/* TODO: it could say "Alternatively," then the icons below them */}
        </section>
      </main>

      {/* Footer w/ Copyright and Year Only */}
      <footer className="text-left text-gray-400 py-8">
        &copy; {new Date().getFullYear()} Peter Pulcini
      </footer>
    </div>
  );
}
