import Image from "next/image";

// Current Buttons: Icon, GitHub, LinkedIn, Contact
const socials = [
  // Image icon is handled separately below
  { name: "GitHub", url: "https://github.com/ppulci" },
  { name: "LinkedIn", url: "https://linkedin.com/in/peter-pulcini" },
  // Contact button is handled separately below
];

export default function Navbar() {
  // Navigation links for the portfolio
  return (
    <nav className="flex gap-6 text-lg">
      <Image src="/temp_image.png" alt="temp image" width={25} height={5} />

      {socials.map((button) => (
        <a
          key={button.name}
          href={button.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {button.name}
        </a>
      ))}

      <a href="#contact" className="hover:underline">
        Contact
      </a>
    </nav>
  );
}
