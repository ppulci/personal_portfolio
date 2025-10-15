import Navbar from "@/components/Navbar";
import ContactMe from "@/components/ContactMeForm";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-1 flex-col flex items-center justify-center py-6 pt-28">
        <ContactMe />
        <SocialLinks />
      </main>

      <Footer />
    </div>
  );
}
