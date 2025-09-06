import IntroBlurb from "@/components/IntroBlurb";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedGreetingSection from "@/components/AnimatedGreetingSection";

export default function Home() {
  return (
    <>
      {/* Navbar Only, on every page */}
      <Navbar />

      {/* Greeting Section with Animated SVG Background */}
      <AnimatedGreetingSection />

      {/* About Me Section */}
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="trimmed-container">
          <IntroBlurb />
        </div>
      </section>

      {/* Copyright Only, on every page */}
      <Footer bgColor="bg-gray-100" />
    </>
  );
}

      // <section id="contact" className="py-12 bg-pp-black">
      //   <ContactMe />
      //   {/* TODO: potentially add social icons with links to pages like the navbar */}
      //   {/* TODO: it could say "Alternatively," then the icons below them */}
      // </section>
      // {/* Projects/Work Timeline */}
      // {/* Gradient FROM previous ending color to chosen timeline color */}      
      // <Timeline />
      //       {/* Introduction Blurb and Bio */}
      // {/* Gradient to Black or PP-Black??? */}
      // <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center"> 
      // </section>



      // MAKE SURE THE SCROLL BARS ARE THE SAME COLOR