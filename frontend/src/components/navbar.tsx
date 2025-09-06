"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-xl border-b-4 border-gray-300 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left: Logo Image */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/jake_dog.png"
                alt="Peter Pulcini Logo"
                width={40}
                height={40}
                className="object-cover rounded-md"
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-5 py-2 text-base font-semibold rounded-xl transition-all duration-300 border ${
                  pathname === item.href
                    ? "bg-slate-600 text-white border-slate-600"
                    : "text-gray-700 bg-gray-200 border-gray-200 hover:bg-gray-300 hover:text-slate-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: Contact Button (Accent Color) */}
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className={`relative px-5 py-2 text-base font-semibold rounded-xl transition-all duration-300 border ${
                pathname === "/contact"
                  ? "bg-yellow-500 text-white border-yellow-500"
                  : "bg-yellow-400 text-gray-800 border-yellow-400 hover:bg-yellow-500 hover:text-gray-900"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}