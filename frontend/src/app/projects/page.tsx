import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";

export default function Projects() {
  return (
    <>
      {/* Navbar Only, on every page */}
      <Navbar />

      {/* Projects Content */}
      <main className="min-h-[calc(100vh-3.125rem)] bg-gray-100 pt-20">
        <div className="trimmed-container py-12">
          <h1 className="text-4xl font-bold mb-8">My Projects</h1>
          <p>Projects page content goes here...</p>
          <Timeline />
          {/* TODO: Add your projects content */}
        </div>
      </main>

      {/* Copyright Only, on every page */}
      <Footer bgColor="bg-gray-100"/>
    </>
  );
}
