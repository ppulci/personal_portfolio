import Navbar from "@/components/Navbar";
import ContactMe from "@/components/ContactMeForm";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar Only, on every page */}
      <Navbar />

      <main className="flex-1 flex-col flex items-center justify-center py-6 pt-28">
        <div className="trimmed-container">
          <ContactMe />
        </div> 
        <SocialLinks />
      </main>

      {/* Copyright Only, on every page */}
      <Footer bgColor="bg-gray-100"/>
    </div>
  );
}
