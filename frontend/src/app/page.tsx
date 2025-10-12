import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedGreetingSection from "@/components/AnimatedGreetingSection";
import SideLabelSection from "@/components/SideLabelSection";
import IntroBlurb from "@/components/IntroBlurb";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import EmblaCarousel from "@/components/EmblaCarousel";
import { EXPERIENCE_SLIDES, PROJECT_SLIDES } from "@/components/SlideshowPanels";

export default function Home() {
  return (
    <>
      {/* Navbar Only, on every page */}
      <Navbar />

      {/* Greeting Section with Animated SVG Background */}
      <AnimatedGreetingSection />

      {/* About Me Section */}
      <section className="relative min-h-screen bg-gray-100 overflow-hidden py-16">
        <div className="space-y-28">
          {/* Bio */}
          <SideLabelSection id="bio" label="about">
            <IntroBlurb />
          </SideLabelSection>

          {/* Tech Stack */}
          <SideLabelSection id="stack" label="stack">
            <TechnologyShowcase />
          </SideLabelSection>

          {/* Experience */}
          <SideLabelSection id="experience" label="experience" className="scroll-mt-16">
            <EmblaCarousel slides={EXPERIENCE_SLIDES} />
          </SideLabelSection>

          {/* Projects */}
          <SideLabelSection id="projects" label="projects" className="scroll-mt-16">
            <EmblaCarousel slides={PROJECT_SLIDES} />
            <p className="text-center text-2xl mt-4">Check out my Github for more!</p>
          </SideLabelSection>
        </div>
      </section>

      {/* Copyright Only, on every page */}
      <Footer bgColor="bg-gray-100" />
    </>
  );
}