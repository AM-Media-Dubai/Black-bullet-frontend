"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-md border-b border-white/10 shadow-[0_0_40px_rgba(255,143,115,0.1)]">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-full mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline text-2xl font-black italic tracking-tighter text-white uppercase"
        >
          BLACK BULLET
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-headline uppercase tracking-[0.05em] font-bold text-sm transition-colors ${
                pathname === link.href
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
          <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors hidden md:block">
            chat
          </span>
          <Link
            href="/booking"
            className="kinetic-gradient text-on-primary-fixed font-headline font-bold uppercase tracking-widest text-xs px-6 py-3 transition-all active:scale-95 hover:brightness-110 hidden md:block"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-container border-t border-outline-variant/20 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block font-headline uppercase tracking-[0.05em] font-bold text-sm py-2 ${
                pathname === link.href
                  ? "text-primary"
                  : "text-on-surface-variant"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setMobileOpen(false)}
            className="block kinetic-gradient text-on-primary-fixed font-headline font-bold uppercase tracking-widest text-xs px-6 py-3 text-center mt-4"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
