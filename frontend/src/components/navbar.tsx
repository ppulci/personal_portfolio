"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full flex justify-center fixed top-0 left-0 z-50 pointer-events-auto">
      <nav
        className="
          w-6xl
          bg-white/70
          backdrop-blur-xl
          rounded-2xl
          shadow-lg
          border border-gray-200
          px-8 py-2
          flex items-center
          mt-6
        "
      >
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center mr-8">
          <Image
            src="/temp_image.png"
            alt="Peter Pulcini Logo"
            width={40}
            height={40}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-4 py-1.5 rounded-lg text-base font-medium transition-colors relative
                    ${
                      isActive
                        ? "text-slate-900 font-bold opacity-100"
                        : "text-slate-400 opacity-100 hover:opacity-100 hover:text-slate-700"
                    }
                    after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-slate-700 after:rounded-full after:transition-all after:duration-300
                    hover:after:w-6
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4 ml-8">
          <a
            href="https://github.com/ppulci"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-slate-900 transition-colors text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/peter-pulcini/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-slate-900 transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </header>
  );
}
