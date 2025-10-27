"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex justify-center pointer-events-auto">
      <nav
        className="
          w-full max-w-[80rem]
          bg-white/80 backdrop-blur-xl
          border border-gray-200
          shadow-md
          rounded-none lg:rounded-2xl
          px-4 sm:px-6 lg:px-8 py-2
          flex items-center justify-between
          mt-0 lg:mt-6
        "
      >
        {/* Light / Dark Mode */}
        <div className="flex items-center relative group">
          <FaSun className="text-slate-700 hover:text-slate-900 text-2xl mr-2" />
          <FaMoon className="text-slate-700 hover:text-slate-900 text-2xl hidden" />{" "}
          {/* hidden until release */}
          {/* Blurb that appears on hover */}
          <div className="absolute left-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-200 text-gray-900 text-sm p-2 rounded shadow-lg text-nowrap">
            <p>Light/Dark mode coming soon.</p>
            <p>Sorry if your retinas are buring.</p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-3 py-1.5 rounded-lg text-sm lg:text-base font-medium transition-colors relative
                    ${
                      isActive
                        ? "text-slate-900 font-bold"
                        : "text-slate-500 hover:text-slate-700"
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

        {/* Social Icons (Desktop only) */}
        <div className="hidden lg:flex items-center space-x-4">
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

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-slate-800 text-2xl p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className="
            absolute top-[3.5rem] left-0 w-full
            bg-white/95 backdrop-blur-xl border-t border-gray-200
            flex flex-col items-center space-y-4 py-4
            shadow-md
          "
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  text-base font-medium
                  ${
                    isActive
                      ? "text-slate-900 font-bold"
                      : "text-slate-500 hover:text-slate-700"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}

          <div className="flex space-x-6 pt-2">
            <a
              href="https://github.com/ppulci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-900 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/peter-pulcini/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-900 text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
