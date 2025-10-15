import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedGreetingSection from "@/components/AnimatedGreetingSection";
import SideLabelSection from "@/components/SideLabelSection";
import IntroBlurb from "@/components/IntroBlurb";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import ExperienceSlides from '@/components/carousel/slides/ExperienceSlides'
import ProjectSlides from "@/components/carousel/slides/ProjectSlides";


export default function Home() {
  return (
    <>
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
            <EmblaCarousel slides={ExperienceSlides} />
          </SideLabelSection>

          {/* Projects */}
          <SideLabelSection id="projects" label="projects" className="scroll-mt-16">
            <EmblaCarousel slides={ProjectSlides} />
          </SideLabelSection>
        </div>
      </section>

      <Footer />
    </>
  );
}