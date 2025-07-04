// Current Buttons: GitHub, LinkedIn, Contact
const socials = [
  { name: "GitHub", url: "https://github.com/ppulci" },
  { name: "LinkedIn", url: "https://linkedin.com/in/peter-pulcini" },
  // Contact button is handled separately below
];

export default function Navbar() {
  // Navigation links for the portfolio
  return (
    <nav className="flex gap-6 text-lg trimmed-container">
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
