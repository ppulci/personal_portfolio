interface FooterProps {
  bgColor?: string;
}

export default function Footer({ bgColor = "bg-red-500" }: FooterProps) {
  return (
    <footer className={`text-left text-slate-400 py-2 text-sm ${bgColor}`}>
      <div className="trimmed-container flex justify-between items-center">
        {/* Left: Copyright */}
        <div>
          &copy; {new Date().getFullYear()} Peter Pulcini
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-2 italic">
          designed and built by me
        </div>
      </div>
    </footer>
  );
}